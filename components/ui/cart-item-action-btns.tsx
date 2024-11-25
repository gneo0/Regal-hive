'use client';

import { useCart } from "@/context/cart-context";
import { CartProps } from "@/typings";

export default function CartItemActionBtns({ cartItem }: { cartItem: CartProps }) {
  const { increaseQuantityOptimistic, decreaseQuantityOptimistic, removeCartItemOptimistic } = useCart();

  return (
    <form className="sm:gap-2 flex items-center gap-1">
      <p className="sm:text-base text-sm">x{cartItem.quantity}</p>

      <button formAction={() => decreaseQuantityOptimistic(cartItem.product_id)} className="border-stone-100 text-md hover:border-accent-color hover:bg-stone-100 px-2 transition-all ease-in-out border rounded-md">-</button>
      <button formAction={() => removeCartItemOptimistic(cartItem.product_id)}
        className="bg-stone-100 sm:text-base px-3 py-1 text-sm rounded">Remove</button>
      <button formAction={() => increaseQuantityOptimistic(cartItem.product_id)} className="border-stone-100 text-md hover:border-accent-color hover:bg-stone-100 px-2 transition-all ease-in-out border rounded-md">+</button>
    </form >
  )
}