import { FormPrevState, NavLinksProps } from '@/typings';

export const links: NavLinksProps[] = [
	{ name: 'Home', href: '/' },
	{ name: 'Our story', href: '/our-story' },
	{ name: 'Products', href: '/products' },
	{ name: 'Contact', href: '#contact' },
];

export const initialFormState: FormPrevState = {
	message: '',
	success: undefined,
};

export const DELIVERY_FEE = 2;
export const COUPON_DISCOUNT = 0.05;
