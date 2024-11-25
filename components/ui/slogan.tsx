import Hexagon from "./hexagon";
import HexagonDouble from "./hexagon-double";
import { dancingFont } from "@/public/fonts/fonts";

export default function Slogan() {
  return (
    <aside className="md:col-span-3 sm:row-start-2 relative sm:border-b-0 sm:col-span-2 sm:col-start-1 sm:col-end-3 border-zinc-900 bg-primary-color flex items-center justify-center col-start-1 row-span-1 row-start-3 border-t sm:border-r py-3 md:text-2xl md:pl-2 lg:text-6xl">
      <h1 className={`${dancingFont.className} text-3xl md:text-6xl xl:text-7xl z-10`}>From our Hives to your Home!</h1>

      <HexagonDouble className='top-2 left-2 hidden sm:block' />
      <Hexagon className='top-20 left-14 hidden md:top-[6.6rem] md:left-[4.5rem] sm:block' />
      <Hexagon className='top-20 -left-[1.7rem] hidden md:top-[6.6rem] md:-left-10 sm:block' />
      <HexagonDouble className='top-[9.5rem] left-2 hidden md:top-[12.7rem] md:left-[0.6rem] sm:block' />

      <HexagonDouble className='bottom-2 right-2 hidden sm:block' />
      <Hexagon className='bottom-20 right-14 hidden md:bottom-[6.6rem] md:right-[4.5rem] sm:block' />
      <Hexagon className='bottom-20 -right-[1.7rem] hidden md:bottom-[6.6rem] md:-right-10 sm:block' />
      <HexagonDouble className='bottom-[9.5rem] right-2 hidden md:bottom-[12.7rem] md:right-[0.6rem] sm:block' />
    </aside>
  )
}
