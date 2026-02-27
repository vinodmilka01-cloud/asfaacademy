import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function isAuthenticated(req: NextRequest) {
    return req.cookies.get("asfa_admin_session")?.value === "authenticated";
}

export async function POST(req: NextRequest) {
    if (!isAuthenticated(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const category = formData.get("category") as string;

        if (!file || !category) {
            return NextResponse.json({ error: "File and category required" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Determine bucket based on category
        // Categories "athletes" and "team" go to "uploads" bucket
        // Others go to "gallery" bucket
        const bucketName = (category === "athletes" || category === "team") ? "uploads" : "gallery";

        // Sanitize filename and create path
        const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
        const filePath = `${category}/${safeName}`;

        const { data, error } = await supabase.storage
            .from(bucketName)
            .upload(filePath, buffer, {
                contentType: file.type,
                upsert: true
            });

        if (error) throw error;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from(bucketName)
            .getPublicUrl(filePath);

        return NextResponse.json({ path: publicUrl, name: safeName }, { status: 201 });
    } catch (error) {
        console.error('Supabase upload error:', error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
