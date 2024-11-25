'use client';

import { useCart } from "@/context/cart-context";

export default function CartCountBadge() {
  const { optimisticCart, totalCartQuantity } = useCart();

  if (!optimisticCart?.length) return null;

  return (
    <span className='bg-primary-color text-xs font-semibold px-[0.4rem] absolute -top-2 -right-2 rounded-full'>{totalCartQuantity}</span>
  )
}
