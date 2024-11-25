import { dancingFont } from "@/public/fonts/fonts";

export default function OurStorySlogan() {
  return (
    <div className={`${dancingFont.className} flex gap-1 items-center text-2xl font-semibold justify-center w-full sm:flex-col sm:flex h-full sm:text-5xl md:text-6xl sm:w-2/3 sm:items-start lg:text-7xl xl:text-8xl sm:gap-[0.4rem]`}>
      <p>Honoring</p><p>Tradition</p><p>Crafting</p><p>Honey</p>
    </div>
  )
}
