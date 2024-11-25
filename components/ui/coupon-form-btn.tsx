'use client';

import { useFormStatus } from "react-dom"

export default function CouponFormBtn({ isCouponApplied }: { isCouponApplied: boolean | undefined }) {
  const { pending } = useFormStatus();

  const appliedText = isCouponApplied && 'Applied';
  const pendingText = pending && 'Applying...';

  return (
    <button type="submit" disabled={isCouponApplied || pending} className={`btn-hover-animation border before:bg-primary-color border-primary-color disabled:cursor-not-allowed hover:text-stone-100 transition-all ease-in-out text-sm md:text-base py-0.5 ${isCouponApplied ? 'bg-primary-color text-stone-100' : ''}`}>
      {appliedText || pendingText || 'Apply'}
    </button>
  )
}
