import React from 'react'
import CartItemSkeleton from './cart-item-skeleton'

export default function CartListSkeleton() {
  return (
    <ul className="h-2/3 w-full overflow-y-auto rounded animate-pulse max-w-screen-2xl mx-auto">
      {Array.from({ length: 3 }, (_, i) => <CartItemSkeleton key={i} />)}
    </ul>
  )
}
