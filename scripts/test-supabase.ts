import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase credentials missing in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const categories = ["national", "deaf-national", "state", "district", "memories", "videos"];

async function testStorage() {
    console.log('Testing Supabase Storage access...');
    for (const cat of categories) {
        console.log(`Checking category: ${cat}...`);
        const { data, error } = await supabase.storage
            .from('gallery')
            .list(cat, { limit: 5 });

        if (error) {
            console.error(`Error listing ${cat}:`, error.message);
        } else {
            console.log(`Successfully listed ${cat}. Found ${data?.length || 0} items.`);
        }
    }
}

testStorage();
