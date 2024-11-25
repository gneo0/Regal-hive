import CartListSkeleton from "./cart-list-skeleton";
import CouponFormSkeleton from "./coupon-form-skeleton";
import PricingDetailsSkeleton from "./pricing-details-skeleton";

export default function FilledCartSkeleton() {
  return (
    <div className="flex flex-col justify-between px-2 overflow-hidden py-2 items-end w-full sm:col-span-1 sm:col-end-3 sm:col-start-1 md:col-span-3 sm:row-span-1 col-start-1 row-start-1 border-r border-gray-900 animate-pulse">
      <CartListSkeleton />
      <div className="flex w-full justify-between h-1/3 py-1 px-2 items-center bg-stone-100 max-w-screen-2xl mx-auto">
        <CouponFormSkeleton />
        <PricingDetailsSkeleton />
      </div>
    </div>
  )
}
