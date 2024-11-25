import Image from "next/image";
import Link from "next/link";

import CartItemActionBtns from "./cart-item-action-btns";
import { CartProps } from "@/typings";

export default function CartItem({ cartItem }: { cartItem: CartProps }) {

  return (
    <li className="bg-primary-color border-accent-color flex items-center justify-between w-full pr-3 border-b border-dashed last:border-0">
      <div className="flex items-center gap-2">
        <Image src={cartItem.product_img} alt={cartItem.product_name} width={100} height={100} className="w-16" />
        <Link href={`/products/${cartItem.product_name}`} className="sm:text-base text-sm">
          <p>{cartItem.product_name}</p>
          <strong>{cartItem.product_price}$</strong>
        </Link>
      </div>
      <CartItemActionBtns cartItem={cartItem} />
    </li>
  )
}
