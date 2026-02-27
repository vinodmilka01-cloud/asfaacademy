const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkBuckets() {
    console.log("Checking buckets...");
    const { data, error } = await supabase.storage.listBuckets();

    if (error) {
        console.error("Error listing buckets:", error.message);
        return;
    }

    console.log("Existing buckets:", data.map(b => b.name).join(", ") || "None");

    const required = ["gallery", "uploads"];
    for (const bucket of required) {
        const exists = data.find(b => b.name === bucket);
        if (exists) {
            console.log(`Bucket '${bucket}' exists. Public: ${exists.public}`);
        } else {
            console.log(`Bucket '${bucket}' is MISSING.`);
        }
    }
}

checkBuckets();
