import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vmwdqhnoguotjrarrkwq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtd2RxaG5vZ3VvdGpyYXJya3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxOTI5MjksImV4cCI6MjA5OTc2ODkyOX0.0QMZEEyqSbM16F-z-pu5Un9_j8WFKfG3aB7ONWcgzeI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

/**
 * Get the currently authenticated user
 * This is the SINGLE source of truth for authentication checks
 * Returns the user object or null if not authenticated
 */
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error getting current user:', error);
    return null;
  }
  return user;
}