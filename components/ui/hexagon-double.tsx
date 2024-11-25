import Image from "next/image";
import { twMerge } from "tailwind-merge";

import hexagonDouble from "@/public/hexagonDouble.svg"

export default function HexagonDouble({ className }: { className: string }) {
  return (
    <Image priority src={hexagonDouble} alt="" className={twMerge(`absolute md:w-[121px] -z-1s0 md:h-[121px]`, className)} />
  )
}
