import { createServerSupabaseClient } from '@/utils/supabase/server'

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div>
      <h1 className="text-xl font-semibold text-neutral-800">
        Sveicināts
      </h1>
      <p className="mt-1 text-sm text-neutral-500">
        {user?.email}
      </p>
    </div>
  )
}
