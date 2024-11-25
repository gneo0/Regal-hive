import HeroHeader from "./ui/hero-header";
import JarModel from "./ui/jar-model";

export default function HeroHeaderContainer() {
  return (
    <div className="h-[90%] flex flex-col relative w-full items-center justify-center z-10">
      <HeroHeader />
      <JarModel />
    </div>
  )
}
