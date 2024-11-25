import AddCartBtn from "./ui/addcart-btn";
import { ProductProps } from "@/typings";

export default function ProductDescription({ selectedProduct }: { selectedProduct: ProductProps }) {

  return (
    <div className="scrollbar-thin scrollbar-thumb-accent-color scrollbar-track-primary-color flex flex-col justify-start items-start w-full border-t sm:border-l sm:border-t-0 border-zinc-900 gap-3 px-4 py-2 overflow-y-auto lg:px-8">
      <div className="flex justify-between w-full font-semibold lg:max-w-screen-lg">
        <h1>{selectedProduct?.name}</h1>
        <p>{selectedProduct?.price}$</p>
      </div>
      <p className="lg:max-w-screen-lg">{selectedProduct?.description}</p>
      <div className="lg:max-w-screen-lg">
        <h2 className="decoration-accent-color underline-offset-2 underline">Health benefits:</h2>
        <ul className="list-inside">
          {selectedProduct.health_benefits.map((benefit, i) => <li className="list-disc" key={i}>{benefit}</li>)}
        </ul>
      </div>
      <AddCartBtn product={selectedProduct} className="border w-64 md:w-96 md:self-center mt-2" />
    </div>
  )
}
