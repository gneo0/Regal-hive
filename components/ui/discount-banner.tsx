import Link from "next/link";

import { COUPON_DISCOUNT } from "@/utils/constants";

export default function DiscountBanner() {
  return (
    <div className="h-1/2 flex flex-col items-start justify-center mx-auto text-lg py-2 sm:text-lg md:text-xl font-bold">
        <span>{COUPON_DISCOUNT * 100}% life-time</span>
        <span>coupon</span>
        <span>on your first</span>
      <Link href='/login' className="bg-stone-100 px-2 border border-accent-color -skew-x-[5deg] mt-2">Sign-up</Link>
    </div>
  )
}
