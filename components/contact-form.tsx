'use client';
import { useActionState } from "react";

import { UserMetadata } from "@supabase/supabase-js";

import ContactFormBtn from "./ui/contact-form-btn";
import FormInput from "./ui/form-input";
import AccessibilityFormMsg from "./ui/accessibility-form-msg";
import FormHeader from "./ui/form-header";
import { sendContactEmail } from "@/utils/actions";
import { useToastFeedback } from "@/hooks/useToastFeedback";
import { initialFormState } from "@/utils/constants";

export default function ContactForm({ user }: { user: UserMetadata | undefined }) {
  const [state, formAction] = useActionState(sendContactEmail, initialFormState);

  useToastFeedback(state)
  
  return (
    <form action={formAction} className="flex flex-col border border-zinc-900 bg-primary-color justify-center h-[30rem] w-[90%] px-6 shadow-md gap-4 md:w-2/3 max-w-5xl">
      <FormHeader className="mb-4 font-semibold text-center">Do you have any questions?</FormHeader>

      <FormInput user={user} type='text' name='contactName' labelValue='Full Name:' />
      <FormInput user={user} type='email' name='contactEmail' labelValue='Email:' />
      <FormInput type='textarea' name='message' labelValue='Your message:' />

      <AccessibilityFormMsg message={state?.message} />
      <ContactFormBtn />
    </form>
  )
}
