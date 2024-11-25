import Image from "next/image";

import beehives from "@/public/beehive-outdoors.webp"
import beekeper from "@/public/beekeeper.webp"
import beekeeper2 from "@/public/beekeeper2.webp"

export default function OurStoryImgs() {
  return (
    <div className="h-1/2 md:w-1/2 md:h-2/3 relative flex w-full">
      <Image src={beekeper} width={350} height={550} loading="lazy" className="transition-all ease-linear border-zinc-900 hover:border-accent-color sm:h-44 top-2 left-4 lg:h-56 lg:w-[30rem] absolute object-cover w-1/2 h-32 border rounded shadow-xl" alt="Beekeper on hives" />
      <Image src={beehives} width={350} height={550} loading="lazy" className="transition-all ease-linear border-zinc-900 hover:border-accent-color sm:h-44 sm:-bottom-16 right-4 lg:h-56 lg:w-[30rem] absolute bottom-0 z-10 object-cover w-1/2 h-32 border rounded shadow-xl" alt="Beehives" />
      <Image src={beekeeper2} width={350} height={550} loading="lazy" className="transition-all ease-linear border-zinc-900 hover:border-accent-color sm:h-44 sm:-bottom-16 lg:h-56 lg:w-[30rem] absolute inset-0 right-0 self-center object-cover w-1/2 h-32 mx-auto border rounded shadow-xl" alt="Beekeper harvesting honey" />
    </div>
  )
}
