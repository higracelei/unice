'use client'

import * as React from "react"
import { useState, useEffect } from 'react'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignIn({ className, ...props }: UserAuthFormProps) {
  const supabase = createClientComponentClient()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  
  async function onSubmit(event: React.SyntheticEvent) {
    // handle sign in
    console.log("signin onSubmit clicked: ", email);
    event.preventDefault()
    // setIsLoading(true)
    let { error } = await supabase.auth.signInWithPassword({ 
      email, 
      password
    });
    setEmail('')
    setPassword('')
    if (error) {
      setErrorMsg(error.message);
    }
    
  }

  return (
    <>
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
                &ldquo;Unice Unice&rdquo;
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
            </div>
            <div className={cn("grid gap-6", className)} {...props}>
              <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="邮箱"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      value={email} // Bind the input value to the email state
                      onChange={(e) => setEmail(e.target.value)} // Update the email state on change
                    />
                    <Label className="sr-only" htmlFor="password">
                      Password
                    </Label>
                    <Input
                      id="password"
                      placeholder="密码"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="password"
                      autoCorrect="off"
                      disabled={isLoading}
                      value={password} // Bind the input value to the password state
                      onChange={(e) => setPassword(e.target.value)} // Update the password state on change
                    />
                  </div>
                  {errorMsg && <div className="text-red-600">{errorMsg}</div>}
                  <Button disabled={isLoading}>
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    登录
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <br></br>
          <div className="flex flex-col space-y-2 text-center">
            <p className="px-8 text-center text-sm text-muted-foreground">
                <Link
                    href="/forgot-password"
                    className="underline underline-offset-4 hover:text-primary"
                >
                忘记密码？
                </Link>
                </p>
                <p className="px-8 text-center text-sm text-muted-foreground">
                <Link
                    href="/sign-up" 
                    className="underline underline-offset-4 hover:text-primary"
                >   
                创建新的账号
                </Link>
                </p>
          </div>
          
        </div>
      </div>
    </>
  )
}