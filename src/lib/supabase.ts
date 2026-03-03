import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
// Service role key – only available server-side (no NEXT_PUBLIC_ prefix).
// Used for admin API routes to bypass RLS policies.
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// If credentials are missing, we use placeholder values to prevent build-time crashes.
// Actual requests will fail, but the build will complete if routes are marked as dynamic.
export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder'
);

// Admin client that bypasses Row Level Security – ONLY use in server-side API routes.
export const supabaseAdmin = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseServiceKey || supabaseAnonKey || 'placeholder',
    { auth: { persistSession: false } }
);
