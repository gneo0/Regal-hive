'use client';

import { useRouter } from "next/navigation"

export default function NotFoundBtn() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="btn-hover-animation border border-zinc-900 rounded-sm px-4 py-2">&larr; Go back</button>
  )
}
