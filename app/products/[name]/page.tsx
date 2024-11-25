import notFound from "./not-found"
import ProductDetails from "@/components/product-details"
import ProductSloganContainer from "@/components/product-slogan-container"
import { getProduct, getProducts } from "@/utils/supabase/data"

type Params = {
  params: { name: string }
}

export async function generateMetadata({ params }: Params) {
  return {
    title: params.name
  }
}

export async function generateStaticParams() {
  const products = await getProducts();
  if (!products) return []
  return products.map((product) => ({ name: product.name }))
}

export default async function Page({ params }: Params) {
  const selectedProduct = await getProduct(params.name);

  if (!selectedProduct) return notFound({ name: params.name });

  return (
    <section className="h-[calc(100dvh-3.5rem)] border-b border-zinc-900 flex flex-col items-center w-full justify-center bg-stone-100 overflow-hidden max-h-dvh min-h-[47rem]">
      <ProductDetails selectedProduct={selectedProduct} />
      <ProductSloganContainer />
    </section>
  )
}
