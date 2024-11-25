import Hexagon from "./hexagon";
import HexagonDouble from "./hexagon-double";

export default function HexagonsLeft({ containerStyles }: { containerStyles?: string }) {
  return (
    <div className={containerStyles}>
      {/* They are rendered as seen on your screen starting from bottom left to right  */}
      <Hexagon className='md:-left-14 md:-bottom-12 -left-10 -bottom-12' />
      <Hexagon className='md:left-[3.5rem] md:-bottom-12 left-[2.6rem] -bottom-12 animate-pulse' />
      <Hexagon className='md:left-[10.5rem] md:-bottom-12 left-[7.8rem] -bottom-12' />
      <HexagonDouble className='md:left-[17.1rem] md:-bottom-12 left-[12.7rem] -bottom-12' />

      <HexagonDouble className='md:-left-2 md:bottom-12 -left-1.5 bottom-6' />
      <Hexagon className='md:left-28 md:bottom-12 left-[5.3rem] bottom-6' />
      <Hexagon className='md:left-56 md:bottom-12 left-[10.5rem] bottom-6 animate-pulse' />

      <Hexagon className='md:-left-14 md:bottom-36 -left-10 bottom-24' />
      <Hexagon className='md:left-[3.5rem] md:bottom-36 left-[2.6rem] bottom-24 animate-pulse' />

      <HexagonDouble className='md:-left-2 md:bottom-60 -left-1.5 bottom-[10.5rem]' />

      <Hexagon className='md:-left-14 md:bottom-[21rem] -left-10 bottom-60' />
      <Hexagon className='md:left-1 md:bottom-[27rem] left-0 bottom-[19.5rem] animate-pulse' />
    </div>
  )
}
