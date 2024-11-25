'use client'

import CartItem from "./ui/cart-item";
import { useCart } from "@/context/cart-context";

export default function CartList() {
  const { optimisticCart } = useCart();

  return (
    <ul className="h-2/3 scrollbar-thin scrollbar-thumb-accent-color scrollbar-track-primary-color w-full overflow-y-auto rounded max-w-screen-2xl mx-auto">
      {optimisticCart.map(cartItem => <CartItem key={cartItem.product_name} cartItem={cartItem} />)}
    </ul>
  )
}
