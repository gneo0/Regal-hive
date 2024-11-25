'use client';

import { ChangeEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import ProductsFilters from "./ui/products-filters";

export default function ProductsFiltersNav() {
  const { replace } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const [filtersHidden, setFilterHidden] = useState(true)

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams)

    if (e.target.id === 'price') {
      newParams.set('price', e.target.value)
    }
    if (e.target.id === 'stock') {
      newParams.set('stock', e.target.value)
    }
    if (e.target.id === 'taste') {
      newParams.set('taste', e.target.value)
    }
    if (e.target.id === 'recommendedFor') {
      newParams.set('recommendedFor', e.target.value)
    }

    replace(`${pathName}?${newParams.toString()}`)
  }

  return (
    <aside className={`transition-all duration-700 ease-in-out ${filtersHidden ? '-translate-x-[85%]' : 'translate-x-0'} w-64 absolute z-20 left-0 top-0 xl:w-80 flex flex-col justify-center bg-primary-color border-r px-6 border-zinc-900 h-full`}>

      <button aria-label="Show/hide filters sidebar" onClick={() => setFilterHidden(hidden => !hidden)} className="hex-shape -right-4 top-2 bg-zinc-900 text-primary-color absolute px-2 py-3 font-semibold">{filtersHidden ? <RiArrowRightSLine /> : <RiArrowLeftSLine />}</button>

      <ProductsFilters
        onSelect={handleSelect}
        filtersHidden={filtersHidden}
        searchParams={searchParams}
      />
    </aside>
  )
}
