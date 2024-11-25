import { UserMetadata } from '@supabase/supabase-js';

export type NavLinksProps = {
	name: string;
	href: string;
};

export type MobileNavProps = {
	mobileNavOpen: boolean;
	setMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ProductProps = {
	id: number;
	name: string;
	photo: string;
	price: number;
	quantity: number;
	instock: boolean;
	description: string;
	taste: string;
	recommended_for: string;
	health_benefits: string[];
};

export type ProductFilters = {
	stock?: 'instock' | 'all';
	taste?: 'any' | 'bitter' | 'sweet';
	recommendedFor?: 'any' | 'brews' | 'food';
	price?: 'default' | 'ascending' | 'descending';
};

export type ProductFiltersProps = {
	filtersHidden: boolean;
	onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
	searchParams: URLSearchParams;
};

export type CartProps = {
	id?: number;
	product_id: number;
	product_name: string;
	product_price: number;
	quantity: number;
	product_img: string;
};

export type CartContextTypes = {
	optimisticCart: CartProps[];
	setOptimisticCart: (action: CartAction) => void;
	totalCartQuantity: number;
	cartAmount: number;
	setCartAmount: (value: number) => void;
	addCartItemOptimistic: (product: ProductProps) => void;
	removeCartItemOptimistic: (productId: number) => void;
	increaseQuantityOptimistic: (productId: number) => void;
	decreaseQuantityOptimistic: (productId: number) => void;
};

export type CartAction =
	| { type: 'ADD_ITEM_CART'; payload: ProductProps }
	| { type: 'REMOVE_ITEM_CART'; payload: number }
	| { type: 'INCREASE_QUANTITY'; payload: number }
	| { type: 'DECREASE_QUANTITY'; payload: number };

export type FormPrevState = {
	success?: boolean;
	message?: string;
};

export type CouponFormPrevState = FormPrevState & {
	discount?: number;
};

export type CouponFormProps = {
	state: CouponFormPrevState;
	couponAction: (formData: FormData) => void;
};

export type FormInputProps = {
	user?: UserMetadata;
	labelValue: string;
	name: string;
	type: string;
};

export type AuthFormBtnProps = {
	pendingText: string;
	actionText: string;
};

export type FormHeaderProps = {
	className: string;
	children: string;
};

export type OrderEmailProps = {
	sender: string;
	senderEmail: string;
	cartItems: CartProps[];
	totalAmount: string;
};

export type ContactEmailProps = {
	sender: string;
	senderEmail: string;
	senderMessage: string;
};

export type ErrorSectionProps = {
	errorHeader: string;
	errorMsg: string;
};
