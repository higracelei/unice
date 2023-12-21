"use client"

import * as React from "react"
import { useState, useEffect } from 'react'

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
  )
}