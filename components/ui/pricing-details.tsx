'use client';

import { useEffect } from "react";

import { useCart } from "@/context/cart-context";
import { DELIVERY_FEE } from "@/utils/constants";
import { calculateCartTotalAmount } from "@/utils/helpers";
import { CouponFormPrevState } from "@/typings";

export default function PricingDetails({ discount }: CouponFormPrevState) {
  const { optimisticCart, cartAmount, setCartAmount } = useCart()

  // Calculating cart's new total amount if discount happens or change on cart happened
  useEffect(() => {
    if (discount || optimisticCart) {
      const newAmount = calculateCartTotalAmount(optimisticCart, discount)
      if (newAmount !== cartAmount) setCartAmount(newAmount)
    }
  }, [discount, setCartAmount, optimisticCart, cartAmount])

  return (
    <div>
      <p className="self-end">Cart: <strong>{(cartAmount - DELIVERY_FEE).toFixed(2)}$</strong></p>
      <p className="self-end">Shipping: <strong>+{DELIVERY_FEE}$</strong></p>
      <p className="self-end">Total Price: <strong>{cartAmount.toFixed(2)}$</strong></p>
    </div>
  )
}
