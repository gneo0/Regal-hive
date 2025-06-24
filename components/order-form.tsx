'use client';
import { useActionState } from "react";

import { UserMetadata } from "@supabase/supabase-js";

import OrderFormBtn from "./ui/order-form-btn";
import FormInput from "./ui/form-input";
import AccessibilityFormMsg from "./ui/accessibility-form-msg";
import FormHeader from "./ui/form-header";
import { useCart } from "@/context/cart-context";
import { placeOrder } from "@/utils/actions";
import { useToastFeedback } from "@/hooks/useToastFeedback";
import { initialFormState } from "@/utils/constants";

export default function OrderForm({ user }: { user: UserMetadata | undefined }) {
  const { cartAmount } = useCart()
  const [state, formAction] = useActionState(placeOrder, initialFormState);

  useToastFeedback(state)

  return (
    <form action={formAction} className="top-14 bg-stone-100 sm:border-none sm:h-1/2 sticky z-10 flex flex-col justify-center w-full gap-4 px-12 py-4 rounded-sm">
      <FormHeader className="text-center">Place your order!</FormHeader>

      <FormInput user={user} type='text' name='orderName' labelValue='Your Name:' />
      <FormInput user={user} type='email' name='orderEmail' labelValue='Your Email:' />
      {/* Used for display purposes on order-email template */}
      <input type="hidden" name="totalAmount" value={cartAmount.toFixed(2)} />

      <AccessibilityFormMsg message={state?.message} />
      <OrderFormBtn user={user} />
    </form>
  )
}
