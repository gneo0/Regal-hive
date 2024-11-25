import Hexagon from "./ui/hexagon";
import { dancingFont } from "@/public/fonts/fonts";

export default function MilestonesHexYears() {
  return (
    <div className="flex items-center justify-around w-full px-4">
      <div className="relative">
        <Hexagon className='relative w-12 h-20' />
        <p className={`${dancingFont.className} md:text-2xl font-bold absolute top-[35%] left-4 sm:left-4 md:left-5 text-white text-lg`}>1991</p>
      </div>
      <div className="relative">
        <Hexagon className='relative w-12 h-20' />
        <p className={` ${dancingFont.className} md:text-2xl font-bold absolute top-[35%] left-4 sm:left-2.5 md:left-5 text-white text-lg`}>2015</p>
      </div>
      <div className="relative">
        <Hexagon className='relative w-12 h-20' />
        <p className={` ${dancingFont.className} md:text-2xl font-bold absolute top-[35%] left-4 sm:left-2 md:left-5 text-white text-lg`}>2022</p>
      </div>
    </div>
  )
}
