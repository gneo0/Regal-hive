import ProductCard from "./product-card"
import FiltersNotFound from "./ui/filters-not-found";
import { getProductsByFilter } from "@/utils/supabase/data";
import { ProductFilters } from "@/typings";

export default async function Products({ searchParams }: { searchParams: ProductFilters }) {
  const products = await getProductsByFilter(searchParams);

  if (!products) return <FiltersNotFound />

  return (
    <div className="grid grid-cols-1 overflow-y-auto scrollbar-thin scrollbar-thumb-accent-color scrollbar-track-stone-100 py-4 w-full text-center min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 min-[2150px]:grid-cols-6 max-w-screen-[2150px] gap-y-4">
      {products?.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}
