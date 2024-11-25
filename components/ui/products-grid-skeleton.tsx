import ProductCardSkeleton from "./product-card-skeleton";

export default function ProductsGridSkeleton() {
  return (
    <ul className="grid grid-cols-1 py-4 w-full text-center min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 min-[2150px]:grid-cols-6 max-w-screen-[2150px] gap-y-4 overflow-hidden">
      {Array.from({ length: 12 }, (_, i) => <ProductCardSkeleton key={i} />)}
    </ul>
  )
}
