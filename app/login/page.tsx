import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/utils/supabase/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  async function login(formData: FormData) {
    'use server'
    const supabase = await createServerSupabaseClient()
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    })
    if (!error) redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50">
      <Card className="w-full max-w-sm border-neutral-200 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold tracking-tight">MēbeļCRM</CardTitle>
          <CardDescription className="text-xs text-neutral-500">
            Ievadi savus pieteikšanās datus
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={login} className="space-y-3">
            <Input name="email" type="email" placeholder="E-pasts" required />
            <Input name="password" type="password" placeholder="Parole" required />
            <Button type="submit" className="w-full" size="sm">
              Ieiet
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
