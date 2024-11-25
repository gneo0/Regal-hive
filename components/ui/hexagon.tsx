import Image from "next/image";
import hexagon from "@/public/hexagon.svg"
import { twMerge } from "tailwind-merge";

export default function Hexagon({ className }: { className?: string }) {
  return (
    <Image priority src={hexagon} alt="" className={twMerge(`absolute md:w-[107px] md:h-[121px]`, className)} />
  )
}
