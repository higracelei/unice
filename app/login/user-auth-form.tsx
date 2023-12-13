"use client"

import * as React from "react"
import { useState } from 'react'

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import supabase from "@/utils/supabaseClient"
import { useRouter } from 'next/navigation';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [email, setEmail] = useState<string>(''); // State to store the entered email

  const router = useRouter()

  // const supabase = createClientComponentClient()

  async function onSubmit(event: React.SyntheticEvent) {
    console.log("onSubmit clicked: ", email)
    try {
      event.preventDefault()
      setIsLoading(true)
      let { data, error } = await supabase.auth.signInWithOtp({ email,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`
        }
      })
      router.refresh();
      if (error) throw error
      alert('请检查您的电子邮件以获取登录链接!')
      console.log("success")
    } catch (error) {
      console.log("error")
      alert(error)
    } finally {
      setIsLoading(false)
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
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email} // Bind the input value to the email state
              onChange={(e) => setEmail(e.target.value)} // Update the email state on change
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            获取登录链接
          </Button>
        </div>
      </form>
    </div>
  )
}