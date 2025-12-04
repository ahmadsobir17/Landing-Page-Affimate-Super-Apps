// src/lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// WARNING: Dalam production, pindahkan string ini ke .env file (VITE_SUPABASE_URL, dll)
// Untuk sekarang gue hardcode biar langsung jalan di lokal lo.
const SUPABASE_URL = "https://jwajczuoyupjtdagwxpm.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3YWpjenVveXVwanRkYWd3eHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMTk3MjEsImV4cCI6MjA3Njc5NTcyMX0.iKStcqeScQNU3JYXdB4ZmLGOzu7lOhRhW7HIn4SoF7s";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
