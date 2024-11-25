import Link from "next/link";
import { RiArrowDownWideLine, RiShoppingCartLine } from "react-icons/ri";

export default function EmptyCart() {
  return (
    <div className="sm:border-r sm:border-b-0 border-zinc-900 md:col-span-3 sm:col-span-1 sm:col-end-3 sm:col-start-1 sm:row-start-1 flex flex-col items-center justify-center w-full h-full col-span-3 gap-5 text-center border-b">
      <span className="text-5xl"><RiShoppingCartLine /></span>
      <h2 className="text-lg font-semibold">Your cart is empty!</h2>
      <div className="flex flex-col items-center gap-1">
        <p>Take a look of our products here</p>
        <span className="animate-bounce text-accent-color text-xl"><RiArrowDownWideLine /></span>
      </div>
      <Link href='/products' className="btn-hover-animation before:bg-primary-color border-primary-color hover:text-stone-100 w-36 px-3 py-1 transition-all ease-in border rounded-sm">Our Products</Link>
    </div>
  )
}
