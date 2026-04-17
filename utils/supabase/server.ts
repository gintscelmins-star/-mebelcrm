import { createServerClient } from '@supabase/ssr'
import { type Cookies } from '@supabase/ssr'

export function createServerSupabaseClient(cookies: Cookies) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookies.set(name, value, options))
        },
      },
    }
  )
} 
