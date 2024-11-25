'use client';

import { useFormState } from "react-dom"

import FormInput from "./ui/form-input";
import AccessibilityFormMsg from "./ui/accessibility-form-msg";
import AuthFormBtn from "./ui/auth-form-btn";
import FormHeader from "./ui/form-header";
import { login } from "@/utils/actions"
import { useToastFeedback } from "@/hooks/useToastFeedback";
import { initialFormState } from "@/utils/constants";

export default function LoginForm() {
  const [state, loginAction] = useFormState(login, initialFormState)

  useToastFeedback(state)

  return (
    <form action={loginAction} className="sm:w-96 flex flex-col w-3/4 gap-2">
      <FormHeader className="font-semibold text-center">Login to your account.</FormHeader>

      <FormInput labelValue="Your Email:" type="email" name="loginEmail" />
      <FormInput labelValue="Your Password:" type="password" name="loginPassword" />

      <AccessibilityFormMsg message={state?.message} />
      <AuthFormBtn pendingText="Logging in..." actionText="Log in" />
    </form>
  )
}
