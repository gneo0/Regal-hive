'use client';

import { twMerge } from "tailwind-merge";

import OutOfStockMsg from "./outofstock-msg";
import { useCart } from "@/context/cart-context";
import { ProductProps } from "@/typings";

export default function AddCartBtn({ product, className }: { product: ProductProps, className?: string }) {
  const { addCartItemOptimistic } = useCart();

  if (!product.instock) return <OutOfStockMsg />

  return (
    <form action={() => addCartItemOptimistic(product)}>
      <button type="submit" className={twMerge('btn-hover-animation before:bg-accent-color border-accent-color hover:text-stone-100 hover:font-semibold transition-all ease-in w-full py-2 border-t', className)}>Add to cart</button>
    </form >
  )
}
