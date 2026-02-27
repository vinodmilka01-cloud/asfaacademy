import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function isAuthenticated(req: NextRequest) {
    return req.cookies.get("asfa_admin_session")?.value === "authenticated";
}

// Map snake_case database to camelCase frontend
const mapFromDB = (item: any) => ({
    ...item,
    coachQuote: item.coach_quote,
});

const mapToDB = (item: any) => {
    const { coachQuote, ...rest } = item;
    return {
        ...rest,
        coach_quote: coachQuote,
    };
};

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('updates')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return NextResponse.json((data || []).map(mapFromDB));
    } catch (error) {
        console.error('Supabase fetch error:', error);
        return NextResponse.json([]);
    }
}

export async function POST(req: NextRequest) {
    if (!isAuthenticated(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const body = await req.json();
        const { data, error } = await supabase
            .from('updates')
            .insert([mapToDB(body)])
            .select()
            .single();

        if (error) throw error;
        return NextResponse.json(mapFromDB(data), { status: 201 });
    } catch (error) {
        console.error('Supabase insert error:', error);
        return NextResponse.json({ error: "Failed to create update" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    if (!isAuthenticated(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const body = await req.json();
        const { id, ...updateData } = body;
        const { data, error } = await supabase
            .from('updates')
            .update(mapToDB(updateData))
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return NextResponse.json(mapFromDB(data));
    } catch (error) {
        console.error('Supabase update error:', error);
        return NextResponse.json({ error: "Failed to update" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    if (!isAuthenticated(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const { id } = await req.json();
        const { error } = await supabase
            .from('updates')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Supabase delete error:', error);
        return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
    }
}
