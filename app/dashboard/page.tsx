import  HomeDashboardPage  from "@/components/home_components/dashboard"
import Link from 'next/link';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from 'next/headers'
import { redirect } from 'next/navigation';



export default async function HomePage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }
  return (
      <HomeDashboardPage />
  )
  
}
