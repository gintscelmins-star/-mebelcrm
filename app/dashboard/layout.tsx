import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  async function logout() {
    'use server'
    const supabase = await createServerSupabaseClient()
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-200 bg-white">
        <div className="flex h-12 items-center justify-between px-6">
          <span className="text-sm font-semibold tracking-tight text-neutral-800">
            MēbeļCRM
          </span>
          <form action={logout}>
            <Button variant="ghost" size="sm" type="submit" className="text-xs text-neutral-500">
              <LogOut className="mr-1.5 h-3.5 w-3.5" />
              Iziet
            </Button>
          </form>
        </div>
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}
