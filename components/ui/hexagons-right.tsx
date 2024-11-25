import Hexagon from "./hexagon";
import HexagonDouble from "./hexagon-double";

export default function HexagonsRight({ containerStyles }: { containerStyles?: string  }) {
  return (
    <div className={containerStyles}>
      {/* They are rendered as seen on your screen starting from top right to left  */}
      <Hexagon className='md:-right-14 md:-top-12 -right-10 -top-12' />
      <Hexagon className='md:right-[3.5rem] md:-top-12 right-[2.6rem] -top-12 animate-pulse' />
      <Hexagon className='md:right-[10.5rem] md:-top-12 right-[7.8rem] -top-12' />
      <HexagonDouble className='md:right-[17.1rem] md:-top-12 right-[12.7rem] -top-12' />

      <HexagonDouble className='md:-right-2 md:top-12 -right-1.5 top-6' />
      <Hexagon className='md:right-28 md:top-12 right-[5.3rem] top-6' />
      <Hexagon className='md:right-56 md:top-12 right-[10.5rem] top-6 animate-pulse' />

      <Hexagon className='md:-right-14 md:top-36 -right-10 top-24' />
      <Hexagon className='md:right-[3.5rem] md:top-36 right-[2.6rem] top-24 animate-pulse' />

      <HexagonDouble className='md:-right-2 md:top-60 -right-1.5 top-[10.5rem]' />

      <Hexagon className='md:-right-14 md:top-[21rem] -right-10 top-60' />
      <Hexagon className='md:right-1 md:top-[27rem] right-0 top-[19.5rem] animate-pulse md:hidden' />
    </div>
  )
}
