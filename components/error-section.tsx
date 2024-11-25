import Image from "next/image";
import Link from "next/link";

import HexagonDouble from "@/components/ui/hexagon-double";
import regalLogo from "@/public/regalHiveLogo.png"
import { dancingFont } from "@/public/fonts/fonts";
import { ErrorSectionProps } from "@/typings";

export default function ErrorSection({ errorHeader, errorMsg }: ErrorSectionProps) {
  return (
    <section className="bg-primary-color h-[calc(100dvh-3.5rem)] flex flex-col items-center justify-center w-full max-h-dvh min-h-[47rem]">
      <div className="z-10 flex flex-col items-center text-sm">
        <Image src={regalLogo} alt="Regal Hive's Logo" className="mx-auto" />
        <h2 className={`${dancingFont.className} my-2 text-4xl font-semibold`}>{errorHeader}</h2>
        <p>{errorMsg}</p>
        <Link href="/" className="btn-hover-animation border-stone-100 hover:border-accent-color hover:font-semibold hover:text-accent-color md:px-6 px-3 py-1 mt-3 border">Back to Hive</Link>
      </div>
      <HexagonDouble className='md:w-96 md:h-96 h-2/3 z-0 w-full' />
    </section>
  )
}
