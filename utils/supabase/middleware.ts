import { type NextRequest } from 'next/server'
import { createRouteMatcher, createMiddlewareClient } from '@supabase/ssr'

const isPublicRoute = createRouteMatcher(['/login'])

export function supabaseMiddleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  if (!isPublicRoute(req) && !supabase.auth.getUser()) {
    // Neautorizēts → uz /login
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
} 
