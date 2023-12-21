import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';


export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  
  if (!user) {
    console.log(user, "redirecting to sign-in")
    redirect('/sign-in');
  }

  return (
    <div className="card">
      <h2>Welcome to Unice!</h2>
      <br />
      <br />
      <Link className="button" href="/dashboard">
        Go to dashboard
      </Link>
      <br />
    </div>
  );
}
