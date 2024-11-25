import { RiArrowDownWideLine } from "react-icons/ri";

import Hexagon from "./hexagon";

export default function ScrollExploreHex() {
  return (
    <div className="absolute right-[5.5rem] bottom-24 flex flex-col items-center gap-1 justify-center w-[8rem] min-[480px]:w-[12rem] min-[480px]:h-[8rem] min-[480px]:bottom-8 min-[480px]:right-20 sm:w-[13rem] sm:h-[9rem] h-[6rem] text-sm lg:right-32 lg:bottom-5">
      <p className="text-stone-100 animate-pulse-slow flex flex-col sm:text-sm mt-4 text-xs italic">Or Scroll<span>To Explore</span></p>
      <Hexagon className='md:h-full md:w-full top-0 left-0 w-full h-full' />
      <span className="text-accent-color animate-bounce-slow text-xl"><RiArrowDownWideLine /></span>
    </div>
  )
}
