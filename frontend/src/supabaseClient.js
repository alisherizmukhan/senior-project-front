import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tyigbnagxymregqwgcfz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5aWdibmFneHltcmVncXdnY2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0Njc2ODgsImV4cCI6MjA3NDA0MzY4OH0.ZSrn6g8XMhNtzye7nJbfYYZoMOf2ej1lO2jXdj9wTOw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test connection function
export async function testSupabaseConnection() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Supabase connection error:", error.message);
    return false;
  }
  console.log("Supabase connection successful:", data);
  return true;
}
