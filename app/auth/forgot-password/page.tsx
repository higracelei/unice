import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserForgotPasswordForm } from "@/app/auth/forgot-password/user-forgot-password-form"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}


export default function ForgotPasswordPage() {
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
                忘记密码
              </h1>
              <p className="text-sm text-muted-foreground">
                我们将发送重置密码链接到您的邮箱，请注意查收
              </p>
            </div>
            <UserForgotPasswordForm />
          </div>
          <br></br>
          <div className="flex flex-col space-y-2 text-center">
            <p className="px-8 text-center text-sm text-muted-foreground">
                <Link
                    href="/auth/login"
                    className="underline underline-offset-4 hover:text-primary"
                >
                返回登录
                </Link>
                </p>
          </div>
          
        </div>
      </div>
    </>
  )
}
