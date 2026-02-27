import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function isAuthenticated(req: NextRequest) {
    return req.cookies.get("asfa_admin_session")?.value === "authenticated";
}

export async function GET(req: NextRequest) {
    const categories = ["national", "deaf-national", "state", "district", "memories", "videos"];
    const result: Record<string, string[]> = {};

    try {
        const categoryData = await Promise.all(categories.map(async (cat) => {
            const { data, error } = await supabase.storage
                .from('gallery')
                .list(cat, {
                    limit: 100,
                    offset: 0,
                    sortBy: { column: 'name', order: 'desc' }
                });

            if (error) {
                console.error(`Error listing ${cat}:`, error);
                return { cat, files: [] };
            }

            const urls = (data || []).map(file => {
                const { data: { publicUrl } } = supabase.storage
                    .from('gallery')
                    .getPublicUrl(`${cat}/${file.name}`);
                return publicUrl;
            });

            return { cat, files: urls };
        }));

        categoryData.forEach(({ cat, files }) => {
            result[cat] = files;
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error('Gallery list error:', error);
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
