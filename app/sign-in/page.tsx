import { SignIn } from "@/components/auth/signIn"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


export default async function SignInPage() {
  const supabase  = createServerComponentClient({cookies})
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    console.log("Have session, redirecting to home")
    redirect('/');
  }
  return <SignIn />;
}
