'use client';

import dynamic from "next/dynamic";

import EmptyCart from "./empty-cart";
import FilledCartSkeleton from "@/components/ui/filled-cart-skeleton";
import { useCart } from "@/context/cart-context";

const FilledCart = dynamic(() => import('./filled-cart'), {
  loading: () => <FilledCartSkeleton />,
  ssr: false
})

export default function CartContainer() {
  const { optimisticCart } = useCart()

  if (!optimisticCart?.length) return <EmptyCart />

  return (
    <FilledCart />
  )
}
