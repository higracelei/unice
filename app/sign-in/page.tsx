import Link from "next/link"
import { SignIn } from "@/components/auth/signIn"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


export default async function SignInPage() {
  const supabase  = createServerComponentClient({cookies})
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    console.log("Have session, redirecting to home")
    redirect('/');
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
            <SignIn />
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
