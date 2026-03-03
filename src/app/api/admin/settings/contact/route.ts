import { NextRequest, NextResponse } from "next/server";
import { supabase, supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

function isAuthenticated(req: NextRequest) {
    return req.cookies.get("asfa_admin_session")?.value === "authenticated";
}

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('contact_info')
            .select('*')
            .order('updated_at', { ascending: false })
            .limit(1)
            .single();

        if (error && error.code !== 'PGRST116') throw error;
        return NextResponse.json(data || {});
    } catch (error) {
        console.error('Supabase fetch error:', error);
        return NextResponse.json({});
    }
}

export async function PUT(req: NextRequest) {
    if (!isAuthenticated(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const body = await req.json();
        const { id, updated_at, ...updateData } = body;

        console.log('Settings PUT: id =', id, '| data =', updateData);

        let result;
        if (id) {
            // Update existing row
            const { data, error } = await supabaseAdmin
                .from('contact_info')
                .update({ ...updateData, updated_at: new Date().toISOString() })
                .eq('id', id)
                .select()
                .single();
            if (error) {
                console.error('Supabase UPDATE error:', error);
                return NextResponse.json({ error: error.message }, { status: 500 });
            }
            result = data;
        } else {
            // Insert new row if none exists
            const { data, error } = await supabaseAdmin
                .from('contact_info')
                .insert([{ ...updateData, updated_at: new Date().toISOString() }])
                .select()
                .single();
            if (error) {
                console.error('Supabase INSERT error:', error);
                return NextResponse.json({ error: error.message }, { status: 500 });
            }
            result = data;
        }

        return NextResponse.json(result);
    } catch (error: any) {
        console.error('Settings route error:', error);
        return NextResponse.json({ error: error.message || "Failed to update contact info" }, { status: 500 });
    }
}

