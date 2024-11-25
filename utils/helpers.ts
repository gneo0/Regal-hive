import { CartProps } from '@/typings';
import { DELIVERY_FEE } from './constants';

export const generateCouponCode = (): string =>
	Math.random().toString(36).substring(2, 8).toUpperCase();

export const calculateCartTotalAmount = (
	cartItems: CartProps[],
	discount: number | undefined
): number => {
	if (!cartItems?.length) return 0;

	const totalPrice = cartItems.reduce(
		(acc, item) => acc + item.product_price * item.quantity,
		0
	);

	if (discount) {
		return totalPrice - totalPrice * discount + DELIVERY_FEE;
	}
	
	return totalPrice + DELIVERY_FEE;
};
