import OrderForm from "@/components/order-form";
import Slogan from "@/components/ui/slogan";
import DiscountBanner from "@/components/ui/discount-banner";
import CartContainer from "@/components/cart-container";
import { createClientServer } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = createClientServer();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <section className="grid grid-cols-1 grid-rows-1 sm:grid-rows-2 border-b border-b-zinc-900 sm:grid-cols-3 w-full h-[calc(100dvh-3.5rem)] max-h-dvh min-h-[47rem]">
      <CartContainer />
      <Slogan />
      <div className="md:col-start-4 sm:col-start-3 sm:row-start-1 sm:row-span-2 bg-primary-color z-10 flex flex-col items-center w-full h-full col-start-1 row-span-1 row-start-2">
        <OrderForm user={user?.user_metadata} />
        <DiscountBanner />
      </div>
    </section>
  )
}
