import type { Metadata } from 'next';
import { Suspense } from 'react';

import Products from "@/components/products";
import ProductsFiltersNav from "@/components/products-filters-nav";
import ProductsHeader from '@/components/products-page-header';
import ProductsGridSkeleton from '@/components/ui/products-grid-skeleton';
import { ProductFilters } from '@/typings';

export const metadata: Metadata = {
  title: 'Products'
}

export default async function Page(props: { searchParams: Promise<ProductFilters> }) {
  const searchParams = await props.searchParams;
  return (
    <section className="w-full border-b relative max-h-dvh min-h-[47rem] border-zinc-900 flex h-[calc(100dvh-3.5rem)]" >
      <ProductsFiltersNav />
      <div className='flex flex-col ml-12 items-center justify-start w-full h-full'>
        <ProductsHeader searchParams={searchParams} />
        <Suspense fallback={<ProductsGridSkeleton />}>
          <Products searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  )
}
