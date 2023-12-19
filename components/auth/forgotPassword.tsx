"use client"

import * as React from "react"
import { useState, useEffect } from 'react'

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import supabase from "@/utils/supabaseClient"
import { useRouter } from 'next/navigation';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ForgotPassword({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    async function getUser() {
      const {data: {user}} = await supabase.auth.getUser();
      setLoading(false)
      // setUser(data.user)
    }
    getUser();
  }, [])

  async function onSubmit(event: React.SyntheticEvent) {
    // handle sign in
    console.log("onSubmit clicked: ", email)
    try {
      event.preventDefault()
      setIsLoading(true)
      let { data, error } = await supabase.auth.signInWithPassword({ email, password,
      });
      // setUser(data.user)
      router.refresh();
      setEmail('')
      setPassword('')
      if (error) throw error
      console.log("success")
    } catch (error) {
      console.log("error")
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
    router.refresh();
    setUser(null)
  }

  console.log({loading, user})
  if (loading) return <p>Loading ...</p>

  if (user) {
    return <div className="text-center"> 
      <div>
       <h1> You are already logged in </h1>
       <button
        onClick = {handleLogout}
       > Logout </button>
      </div>
      
    </div>
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
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            确认
          </Button>
        </div>
      </form>
    </div>
  )
}