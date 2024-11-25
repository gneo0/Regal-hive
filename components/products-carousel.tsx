import ProductCard from "./product-card"
import ProductsNotFoundMsg from "./ui/products-not-found-msg"
import { ProductProps } from "@/typings"

export default function ProductsCarousel({ products }: { products: ProductProps[] | null }) {

  if (!products?.length) return <ProductsNotFoundMsg />

  return (
    <div className="embla__container">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} className="embla__slide" />
      ))}
    </div>
  )
}
