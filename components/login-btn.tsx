'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { UserMetadata } from '@supabase/supabase-js';

import { logout } from '@/utils/actions';
import { createClient } from '@/utils/supabase/client';

export default function LoginBtn({ user }: { user: UserMetadata | null }) {
  // Signing-in anonymously user that hasn't logged-in
  useEffect(() => {
    if (!user) {
      const supabase = createClient()
      supabase.auth.signInAnonymously()
    }
  }, [user])

  if (user && !user.is_anonymous) {
    return <form action={logout}>
      <button className='btn-hover-animation border-primary-color bg-primary-color md:text-base px-2 py-1 text-sm font-semibold border rounded-sm'>Logout</button>
    </form>
  }

  return (
    <Link href='/login' className='btn-hover-animation before:bg-primary-color border-zinc-900 md:text-base px-2 py-1 text-sm font-semibold border rounded-sm'>Login</Link>
  )
}
