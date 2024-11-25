import { dancingFont } from "@/public/fonts/fonts";

export default function HeroHeader() {
  return (
    <div className={`${dancingFont.className} flex flex-col w-[95%] h-1/2 pr-4 items-center absolute top-24 lg:top-12 text-5xl min-[480px]:text-7xl sm:text-8xl md:text-[7rem] lg:text-9xl xl:text-[9rem] font-extrabold`}>
      <h1 className="drop-shadow-[2px_2px_2px_rgb(28,_27,_27)] self-start lg:self-center lg:mr-44 text-stone-100">Naturally Sweet</h1>
      <h2 className="drop-shadow-[-2px_2px_2px_rgba(255,_255,_255,_0.595)] self-center bg-clip-text text-zinc-900">Perfectly Pure</h2>
    </div>
  )
}
