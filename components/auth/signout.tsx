'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function SignOut() { 
    console.log("SignOut called")
  const supabase = createClientComponentClient();

  async function handleSignOut() {
    console.log("sign out clicked");
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('ERROR:', error);
    }
  }

  return (
    <button type="button" className="button-inverse" onClick={handleSignOut}>
      账号登出
    </button>
  );
}
