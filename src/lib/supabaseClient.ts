import { createClient } from "@supabase/supabase-js";

// Ambil variabel dari environment Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validasi biar gak error diem-diem kalau lupa setting env
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Cek file .env atau setting dashboard hosting."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
