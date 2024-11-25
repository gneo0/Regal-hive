import Link from "next/link";

import { dancingFont } from "@/public/fonts/fonts";

export default function OurStoryText() {
  return (
    <div className="md:w-1/2 md:gap-12 md:h-full flex flex-col items-start justify-center w-full h-full gap-4 px-4">
      <h3 className={`${dancingFont.className} font-bold text-6xl md:text-7xl lg:text-8xl underline decoration-4 underline-offset-[15px] decoration-accent-color`}>Our Story</h3>
      <p className="md:w-full lg:w-3/4">We are a proud family-owned business with a passion for providing the finest, all-natural honey. Our journey began 33 years ago, with a deep love for beekeeping and a commitment to sustainable practices. Every jar of honey is crafted with care, harvested from our own bees, and delivered straight from our family to your home.</p>
      <Link href='/our-story' className="btn-hover-animation before:bg-primary-color bg-stone-100 md:mx-0 md:w-56 border-accent-color hover:border-zinc-900 block w-3/4 px-2 py-1 mx-auto text-center transition-all border rounded-sm">How it all started</Link>
    </div>
  )
}
