'use client';

import { useFormStatus } from "react-dom";

import { AuthFormBtnProps } from "@/typings";

export default function AuthFormBtn({ pendingText, actionText }: AuthFormBtnProps) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="disabled:cursor-not-allowed bg-primary-color py-1 rounded-sm">{pending ? pendingText : actionText}</button>
  )
}
