import Image from "next/image";
import Link from "next/link";

import regalLogo from '@/public/regalHiveLogo.png'

export default function FiltersNotFound() {
  return (
    <section className="flex items-center justify-center w-full h-full px-2">
      <div className="bg-primary-color max-w-96 flex flex-col items-center justify-center w-full gap-3 px-2 py-4 rounded">
        <Image src={regalLogo} alt="Regal Hive's Logo" />
        <h1 className="text-center">We couldn&apos;t find any items with the specified criteria. Please adjust your search parameters.</h1>
        <p>or</p>
        <Link href='/products' className="btn-hover-animation before:bg-primary-color border border-zinc-900 hover:text-stone-100 hover:font-semibold bg-stone-100 px-2 py-1">Go back</Link>
      </div>
    </section>
  )
}
