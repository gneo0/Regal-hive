'use client';
import { useActionState } from "react";

import FormInput from "./ui/form-input";
import AccessibilityFormMsg from "./ui/accessibility-form-msg";
import AuthFormBtn from "./ui/auth-form-btn";
import FormHeader from "./ui/form-header";
import { signup } from "@/utils/actions"
import { useToastFeedback } from "@/hooks/useToastFeedback";
import { initialFormState } from "@/utils/constants";

export default function SignupForm() {
  const [state, signupAction] = useActionState(signup, initialFormState)

  useToastFeedback(state)

  return (
    <form action={signupAction} className="sm:w-96 flex flex-col w-3/4 gap-2">
      <FormHeader className="font-semibold text-center">Don&apos;t have an account?</FormHeader>

      <FormInput name="fullName" type="text" labelValue="Full Name:" />
      <FormInput name="email" type="email" labelValue="Email:" />
      <FormInput name="password" type="password" labelValue="Password:" />

      <AccessibilityFormMsg message={state?.message} />
      <AuthFormBtn pendingText="Signing up..." actionText="Sign up" />
    </form>
  )
}
