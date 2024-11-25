import HexagonsLeft from "@/components/ui/hexagons-left"
import HexagonsRight from "@/components/ui/hexagons-right"
import { dancingFont } from "@/public/fonts/fonts"

export default function ProductSloganContainer() {
  return (
    <div className="bg-primary-color relative flex items-center justify-center w-full h-[15%] sm:h-2/5">
      <h1 className={`${dancingFont.className} text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl`}>Sweetness You Trust</h1>

      <HexagonsLeft containerStyles="hidden sm:block" />
      <HexagonsRight containerStyles="hidden sm:block" />
    </div>
  )
}
