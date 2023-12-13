import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/app/login/user-auth-form"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}


export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            优来斯 Unice
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;和Unice一起开启你的留学之旅吧&rdquo;
              </p>
              <footer className="text-sm">Unice Inc</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                登录
              </h1>
              <p className="text-sm text-muted-foreground">
                输入邮箱以获取登录链接
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

// 'use client';

// import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const router = useRouter()

//     const supabase = createClientComponentClient()

//     const handleSignUp = async (email: string, password: string) => {
//         const { error } = await supabase.auth.signUp({
//              email, 
//              password, 
//              options: { 
//                 emailRedirectTo: `${location.origin}/auth/callback` } 
//             })
//         if (error) console.log('Error: ', error.message)
//         router.refresh();
//         setEmail('')
//         setPassword('')
//     }

//     const handleSignIn = async (email: string, password: string) => {
//         const { error } = await supabase.auth.signInWithPassword({
//             email,
//             password,
//         })
//         if (error) console.log('Error: ', error.message)
//         router.refresh();
//         setEmail('')
//         setPassword('')
//     }

//     return (
//         <main className="h-screen flex item-center justify-center bg-gray-800 p-6">
//             <div className="bg-gray-900 p-8 rounder-lg shadow-md w-96">
//             <input
//             type = "email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className = "mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
//             />
//             <input  
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className = "mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
//             />
//             <button onClick={() => handleSignUp(email, password)}>Sign Up</button>
//             classname = "w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outine-none
//             <button onClick={() => handleSignIn(email, password)}>Sign In</button>
//             classname = "w-full p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outine-none

//             </div>
            
//         </main>
//     )
// }


