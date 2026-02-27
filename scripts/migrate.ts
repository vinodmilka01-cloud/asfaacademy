import { createClient } from '@supabase/supabase-js';
import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import fetch from 'cross-fetch';

// Polyfill fetch for Node.js environments that have issues with global fetch
if (!global.fetch) {
    (global as any).fetch = fetch;
}

// Load env vars from .env.local
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()!;

console.log("Supabase URL: [" + supabaseUrl + "]");
console.log("Supabase Key (short):", supabaseAnonKey?.substring(0, 10) + "...");

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase credentials missing in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function migrate() {
    console.log("Starting migration...");
    const logs = [];

    // 1. Updates
    try {
        const updatesFile = path.join(process.cwd(), 'src/data/updates.json');
        const updatesData = JSON.parse(await fs.readFile(updatesFile, 'utf-8'));
        const mappedUpdates = updatesData.map((u: any) => ({
            title: u.title,
            date: u.date,
            category: u.category,
            description: u.description,
            details: u.details,
            coach_quote: u.coachQuote,
            icon: u.icon
        }));
        const { error: uErr } = await supabase.from('updates').insert(mappedUpdates);
        if (uErr) {
            console.error("Error migrating updates:", uErr.message);
            logs.push("Updates error: " + JSON.stringify(uErr, null, 2));
        } else console.log(`Migrated ${mappedUpdates.length} updates`);
    } catch (e: any) { console.log("Updates skip:", e.message); }

    // 2. Athletes
    try {
        const athletesFile = path.join(process.cwd(), 'src/data/athletes.json');
        const athletesData = JSON.parse(await fs.readFile(athletesFile, 'utf-8'));
        const mappedAthletes = athletesData.map((a: any) => ({
            name: a.name,
            role: a.role,
            achievement: a.achievement,
            image: a.image
        }));
        const { error: aErr } = await supabase.from('athletes').insert(mappedAthletes);
        if (aErr) {
            console.error("Error migrating athletes:", aErr.message);
            logs.push("Athletes error: " + JSON.stringify(aErr, null, 2));
        } else console.log(`Migrated ${mappedAthletes.length} athletes`);
    } catch (e: any) { console.log("Athletes skip:", e.message); }

    // 3. Team
    try {
        const teamFile = path.join(process.cwd(), 'src/data/team.json');
        const teamData = JSON.parse(await fs.readFile(teamFile, 'utf-8'));
        const mappedTeam = teamData.map((t: any) => ({
            name: t.name,
            role: t.role,
            image: t.image
        }));
        const { error: tErr } = await supabase.from('team').insert(mappedTeam);
        if (tErr) {
            console.error("Error migrating team:", tErr.message);
            logs.push("Team error: " + JSON.stringify(tErr, null, 2));
        } else console.log(`Migrated ${mappedTeam.length} team members`);
    } catch (e: any) { console.log("Team skip:", e.message); }

    if (logs.length > 0) {
        await fs.writeFile('migration_errors.log', logs.join("\n\n"));
        console.log("Errors logged to migration_errors.log");
    }
    console.log("Migration finished!");
}

migrate();
