import { createClient } from '@supabase/supabase-js'

const VITE_SUPABASE_PROJECT = import.meta.env.VITE_SUPABASE_PROJECT
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY

export const supabaseClient = () => {
  const supabase = createClient(VITE_SUPABASE_PROJECT, SUPABASE_API_KEY)
  return supabase
}
