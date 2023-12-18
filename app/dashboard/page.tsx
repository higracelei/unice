import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import  HomeDashboardPage  from "@/app/dashboard/dashboard"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from 'next/headers'
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}


export default async function HomePage() {
  const supabase  = createServerComponentClient({cookies})
  const { data } = await supabase.auth.getSession();

  console.log("data: ", data)
  if (!data?.session) {
    redirect('/');
  }
  return <HomeDashboardPage />
}
