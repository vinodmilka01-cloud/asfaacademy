import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl!, supabaseKey!);

async function listBuckets() {
    console.log('Fetching buckets...');
    const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
    if (bucketsError) {
        console.error('Error listing buckets:', bucketsError.message);
        return;
    }
    console.log('Buckets found:', buckets.map(b => b.name));

    for (const bucket of buckets) {
        console.log(`Checking bucket: ${bucket.name}...`);
        const { data: files, error: filesError } = await supabase.storage.from(bucket.name).list();
        if (filesError) {
            console.error(`Error listing folder in ${bucket.name}:`, filesError.message);
        } else {
            console.log(`Bucket ${bucket.name} root content:`, files.map(f => f.name));
        }
    }
}
listBuckets();
