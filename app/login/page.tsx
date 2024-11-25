import { Metadata } from "next";

import LoginForm from "@/components/login-form";
import SignupForm from "@/components/signup-form";
import AuthFormSeparator from "@/components/ui/auth-form-separator";
import LoginPageSlogan from "@/components/ui/login-page-slogan";

export const metadata: Metadata = {
  title: 'Login'
}

export default function Page() {
  return (
    <section className="h-[calc(100dvh-3.5rem)] max-h-dvh min-h-[47rem] w-full flex flex-col items-center justify-between">
      <div className="h-3/4 md:flex-row md:w-4/5 md:gap-12 flex flex-col items-center justify-center w-full gap-8">
        <LoginForm />
        <AuthFormSeparator />
        <SignupForm />
      </div>
      <LoginPageSlogan />
    </section>
  )
}
