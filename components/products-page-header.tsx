import { ProductFilters } from "@/typings"
import { getProductsByFilter } from "@/utils/supabase/data"

export default async function ProductsPageHeader({ searchParams }: { searchParams: ProductFilters }) {
  const productsFound = await getProductsByFilter(searchParams)

  return (
    <div className='flex px-4 py-3 sticky h-12 top-0 bg-stone-100 border-b border-zinc-900 items-center justify-between w-full text-sm sm:text-base xl:px-6'>
      <h1>Explore our products</h1>
      <p>{productsFound?.length || 0} products</p>
    </div>
  )
}
