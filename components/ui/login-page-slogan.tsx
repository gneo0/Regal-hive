import { dancingFont } from "@/public/fonts/fonts";
import { COUPON_DISCOUNT } from "@/utils/constants";

export default function LoginPageSlogan() {
  return (
    <div className="h-1/4 bg-primary-color border-y border-zinc-900 flex px-1 items-center justify-center w-full">
      <h1 className={`${dancingFont.className} text-xl text-zinc-900 min-[450px]:text-2xl sm:text-4xl lg:text-5xl`}>Be part of our family and save {COUPON_DISCOUNT * 100}% for life.</h1>
    </div>
  )
}
