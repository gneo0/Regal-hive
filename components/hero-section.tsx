import HexagonsRight from "./ui/hexagons-right";
import HexagonsLeft from "./ui/hexagons-left";
import HeroHeaderContainer from "./hero-header-container";
import ProductsHex from "./ui/products-hex";
import ScrollExploreHex from "./ui/scroll-explore-hex";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100dvh-3.5rem)] max-h-dvh min-h-[47rem] bg-primary-color overflow-hidden flex flex-col items-center justify-center">
      <HeroHeaderContainer />
      <ProductsHex />
      <ScrollExploreHex />

      <HexagonsLeft />
      <HexagonsRight />
    </section>
  )
}
