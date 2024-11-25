import Image from "next/image";
import Link from "next/link";

import AddCartBtn from "./ui/addcart-btn";
import { ProductProps } from "@/typings";
import { twMerge } from "tailwind-merge";

export default function ProductCard({ product, className }: { product: ProductProps, className?: string }) {
  return (
    <figure className={twMerge('w-56 h-[23rem] border border-zinc-400 mx-auto flex flex-col justify-between bg-stone-100 rounded', className)}>
      <Link href={`/products/${product.name}`}>
        <Image src={product.photo} width={350} height={350} className='w-full h-full' alt={product.name} />
      </Link>
      <figcaption>
        <div className='flex justify-between px-4'>
          <p>{product.name}</p>
          <strong>{product.price}$</strong>
        </div>
        <small className='opacity-60 text-center block mt-2'>Click on img for details</small>
        <AddCartBtn product={product} />
      </figcaption>
    </figure>
  )
}
