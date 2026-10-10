import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

// Lazy client - only created when configured and called
let _client: SupabaseClient | null = null;
export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;
  if (!_client) {
    _client = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _client;
}

// Product type matching database
export interface DBProduct {
  id: string;
  name: string;
  slug: string;
  image: string;
  category: string;
  brand: string;
  moq: string;
  price: number | null;
  in_stock: boolean;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface DBCategory {
  id: string;
  name: string;
  slug: string;
  image?: string;
  description?: string;
  created_at: string;
}
