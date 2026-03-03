import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import fs from "fs";
import path from "path";

function isAuthenticated(req: NextRequest) {
    return req.cookies.get("asfa_admin_session")?.value === "authenticated";
}

export async function GET(req: NextRequest) {
    const categories = ["national", "deaf-national", "state", "district", "memories", "videos"];
    const result: Record<string, string[]> = {};

    try {
        console.log('Fetching gallery categories from Supabase...');
        const categoryData = await Promise.all(categories.map(async (cat) => {
            try {
                const { data, error } = await supabase.storage
                    .from('gallery')
                    .list(cat, {
                        limit: 100,
                        offset: 0,
                        sortBy: { column: 'name', order: 'desc' }
                    });

                if (!error && data && data.length > 0) {
                    const urls = data.map(file => {
                        const { data: { publicUrl } } = supabase.storage
                            .from('gallery')
                            .getPublicUrl(`${cat}/${file.name}`);
                        return publicUrl;
                    });
                    return { cat, files: urls };
                }
            } catch (e) {
                console.error(`Supabase fetch failed for ${cat}, using local fallback`);
            }

            // --- Local Fallback ---
            const publicDir = path.join(process.cwd(), 'public');
            try {
                const files = fs.readdirSync(publicDir);
                const localFiles = files.filter(f => {
                    // Match files starting with category prefix (e.g. "national-", "state-")
                    const prefix = cat === "deaf-national" ? "deaf-national" : cat;
                    const isMatch = f.startsWith(prefix);

                    // Special case for videos: match if file contains "video" or has video extension
                    if (cat === "videos") {
                        return (f.toLowerCase().includes("video") || f.toLowerCase().includes("vlog")) && /\.(mp4|mov|webm|avi)$/i.test(f);
                    }

                    return isMatch && /\.(png|jpg|jpeg|webp)$/i.test(f);
                }).map(f => `/${f}`);

                console.log(`Fallback for ${cat}: found ${localFiles.length} files`);
                return { cat, files: localFiles };
            } catch (fsError) {
                console.error(`Local fallback failed for ${cat}:`, fsError);
                return { cat, files: [] };
            }
        }));

        categoryData.forEach(({ cat, files }) => {
            result[cat] = files;
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error('Gallery API error:', error);
        return NextResponse.json({}, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    if (!isAuthenticated(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { filePath } = await req.json(); // This is now a public URL from Supabase

        // Extract bucket and relative path from public URL
        // Example URL: https://...supabase.co/storage/v1/object/public/gallery/national/image.jpg
        const urlObj = new URL(filePath);
        const pathParts = urlObj.pathname.split('/storage/v1/object/public/');
        if (pathParts.length < 2) throw new Error("Invalid URL format");

        const fullPath = pathParts[1]; // e.g., "gallery/national/image.jpg"
        const firstSlashIndex = fullPath.indexOf('/');
        const bucket = fullPath.substring(0, firstSlashIndex);
        const relativePath = fullPath.substring(firstSlashIndex + 1);

        const { error } = await supabase.storage
            .from(bucket)
            .remove([relativePath]);

        if (error) throw error;
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Supabase delete error:', error);
        return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
}
