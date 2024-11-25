import CartList from "./cart-list";
import OrderSummary from "./order-summary";

export default function FilledCart() {
  return (
    <div className="flex flex-col justify-between px-2 border-b border-b-zinc-900 sm:border-b-0 overflow-hidden py-2 items-end w-full md:col-span-3 sm:col-span-1 sm:col-end-3 sm:col-start-1 sm:row-start-1 col-start-1 row-start-1 sm:border-r sm:border-zinc-900">
      <CartList />
      <OrderSummary />
    </div>
  )
}
