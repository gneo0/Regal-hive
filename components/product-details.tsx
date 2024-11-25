import Image from "next/image";

import logo from '@/public/regalHiveLogo.png'
import ProductDescription from "./product-description";
import { ProductProps } from "@/typings";

export default function ProductDetails({ selectedProduct }: { selectedProduct: ProductProps }) {
  return (
    <div className="z-10 bg-stone-100 sm:flex-row sm:h-3/5 flex flex-col w-full h-[85%] justify-center border-b border-zinc-900">
      <Image src={selectedProduct?.photo || logo} width={300} height={300} alt={selectedProduct?.name || 'Regal Hive product'} className="w-52 max-w-60 sm:w-1/2 sm:py-0 relative h-64 py-2 mx-auto" />
      <ProductDescription selectedProduct={selectedProduct} />
    </div>
  )
}
