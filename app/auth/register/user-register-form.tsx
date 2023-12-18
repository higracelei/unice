"use client"

import * as React from "react"
import { useState, useEffect } from 'react'

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// import supabase from "@/utils/supabaseClient"
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"
import { useRouter } from 'next/navigation';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserRegisterForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  
  const supabase = createClientComponentClient();


  async function onSubmit(event: React.SyntheticEvent) {
    // handle sign up
    console.log("onSubmit clicked: ", email)
    if (password == '' || password2 == '') {
      alert("密码不能为空")
      return
    }
    if (password != password2) {  
      alert("两次密码输入不一致")
      return
    }
    
    try {
      event.preventDefault()
      setIsLoading(true)
      let { data, error } = await supabase.auth.signUp({ 
        email, 
        password,
        // options : {
        //   emailRedirectTo:`${location.origin}/auth/callback`
        // }
        options : {
          emailRedirectTo:`${location.origin}/dashboard`
        }
      });
      
      router.refresh();
      setEmail('')
      setPassword('')
      setPassword2('')
      if (error) throw error
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
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password2"
              placeholder="重新输入密码"
              type="password"
              autoCapitalize="none"
              autoComplete="password2"
              autoCorrect="off"
              disabled={isLoading}
              value={password2} // Bind the input value to the password state
              onChange={(e) => setPassword2(e.target.value)} // Update the password state on change
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            注册
          </Button>
        </div>
      </form>
    </div>
  )
}