import Link from "next/link";

import Hexagon from "./ui/hexagon";
import EmblaCarousel from "./embla-carousel";
import { getLimitedProducts } from "@/utils/supabase/data";
import { dancingFont } from "@/public/fonts/fonts";

export default async function ProductsSection() {
  const limitedProducts = await getLimitedProducts();

  return (
    <section className="bg-primary-color h-[calc(100dvh-3.5rem)] max-h-dvh min-h-[47rem] w-full flex flex-col justify-around items-center overflow-x-hidden">
      <div className="relative">
        <h4 className={`${dancingFont.className} w-full text-5xl md:text-7xl underline decoration-white underline-offset-8 decoration-[5px] font-semibold text-center`}>Our Top Picks</h4>
        <Hexagon className='-top-4 right-0' />
      </div>
      <EmblaCarousel products={limitedProducts} />
      <Link href='/products' className="btn-hover-animation border hover:border-accent-color border-zinc-900 transition-all px-4 rounded-sm py-2">Explore All Products</Link>
    </section>
  )
}
