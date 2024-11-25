import Link from 'next/link';
import { RiShoppingCartLine } from 'react-icons/ri';

import CartCountBadge from './cart-count-badge';

export default function ShoppingCart() {
  return (
    <Link href='/cart' aria-label='Go to cart' className='relative text-lg'>
      <RiShoppingCartLine />
      <CartCountBadge />
    </Link>
  )
}
