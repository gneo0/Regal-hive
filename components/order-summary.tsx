'use client';

import { useFormState } from "react-dom";

import CouponForm from "./coupon-form";
import PricingDetails from "./ui/pricing-details";
import { applyCoupon } from "@/utils/actions";
import { useToastFeedback } from "@/hooks/useToastFeedback";
import { CouponFormPrevState } from "@/typings";

const initialState: CouponFormPrevState = {
  message: '',
  success: undefined,
  discount: 0,
}

export default function OrderSummary() {
  const [state, couponAction] = useFormState(applyCoupon, initialState);

  useToastFeedback(state)

  return (
    <div className="flex w-full gap-4 justify-between h-1/3 py-1 items-center text-sm sm:text-base max-w-screen-2xl mx-auto">
      <CouponForm state={state} couponAction={couponAction} />
      <PricingDetails discount={state.discount} />
    </div>
  )
}
