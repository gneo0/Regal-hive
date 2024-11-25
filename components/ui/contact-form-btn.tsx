'use client';

import { useFormStatus } from "react-dom"

export default function ContactFormBtn() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="btn-hover-animation disabled:cursor-not-allowed border-zinc-900 hover:border-accent-color w-1/2 py-1 mx-auto mt-2 transition-colors ease-linear border rounded-sm">{pending ? 'Sending...' : 'Send email'}</button>
  )
}
