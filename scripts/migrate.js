const { createClient } = require('@supabase/supabase-js');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase credentials missing in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function migrate() {
    console.log("Starting migration (Plain JS)...");

    // 1. Updates
    try {
        const data = await fs.readFile('src/data/updates.json', 'utf-8');
        const updates = JSON.parse(data).map(u => ({
            title: u.title,
            date: u.date,
            category: u.category,
            description: u.description,
            details: u.details,
            coach_quote: u.coachQuote,
            icon: u.icon
        }));
        const { error } = await supabase.from('updates').insert(updates);
        if (error) console.error("Updates Error:", error.message);
        else console.log(`Migrated ${updates.length} updates`);
    } catch (e) { console.log("Skip updates (file not found or empty)"); }

    // 2. Athletes
    try {
        const data = await fs.readFile('src/data/athletes.json', 'utf-8');
        const athletes = JSON.parse(data).map(a => ({
            name: a.name,
            role: a.role,
            achievement: a.achievement,
            image: a.image
        }));
        const { error } = await supabase.from('athletes').insert(athletes);
        if (error) console.error("Athletes Error:", error.message);
        else console.log(`Migrated ${athletes.length} athletes`);
    } catch (e) { console.log("Skip athletes (file not found or empty)"); }

    // 3. Team
    try {
        const data = await fs.readFile('src/data/team.json', 'utf-8');
        const team = JSON.parse(data).map(t => ({
            name: t.name,
            role: t.role,
            image: t.image
        }));
        const { error } = await supabase.from('team').insert(team);
        if (error) console.error("Team Error:", error.message);
        else console.log(`Migrated ${team.length} team members`);
    } catch (e) { console.log("Skip team (file not found or empty)"); }

    console.log("Migration finished!");
}

migrate();
