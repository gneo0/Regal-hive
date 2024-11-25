import Link from "next/link";
import HexagonDouble from "./hexagon-double";

export default function ProductsHex() {
  return (
    <div className="absolute -right-6 bottom-24 bg-primary-color flex overflow-hidden items-center justify-center w-[10rem] h-[7rem] sm:w-[14rem] sm:h-[12rem] sm:bottom-32 lg:right-10">
      <Link
        href='/products'
        className="btn-hover-animation bg-primary-color border-y border-stone-100 text-sm transition-all ease-linear rounded-sm italic hover:font-semibold py-3 px-1.5 hover:text-accent-color sm:text-lg sm:py-6 sm:px-6"
      >
        Our products
      </Link>

      <HexagonDouble className='md:h-full group-hover:animate-spin md:w-full top-0 left-0 w-full h-full' />
    </div>
  )
}
