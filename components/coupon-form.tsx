'use client';

import AccessibilityFormMsg from "./ui/accessibility-form-msg";
import CouponFormBtn from "./ui/coupon-form-btn";
import { CouponFormProps } from "@/typings";

export default function CouponForm({ state, couponAction }: CouponFormProps) {
  return (
    <form action={couponAction} className="flex flex-col gap-1">
      <label htmlFor="coupon">Coupon code:</label>
      <input type="text" id="coupon" name="coupon" className="px-1" />

      <AccessibilityFormMsg message={state?.message} />
      <CouponFormBtn isCouponApplied={state.success} />
    </form>
  )
}
