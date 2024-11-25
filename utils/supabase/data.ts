import { createClient } from './client';
import { ProductFilters, ProductProps } from '@/typings';
import { createClientServer } from './server';

export const getProducts = async () => {
	const supabase = createClient();
	const { data, error } = await supabase.from('products').select('*');

	if (error) {
		console.error(error.message);
		return undefined;
	}
	return data;
};

export const getLimitedProducts = async (
	productLimit = 6
): Promise<ProductProps[] | null> => {
	const supabase = createClient();

	const { data, error } = await supabase
		.from('products')
		.select('*')
		.limit(productLimit);

	if (error) {
		console.error(error.message);
		return null;
	}

	return data;
};

export const getProductsByFilter = async (searchParams: ProductFilters) => {
	const { stock, taste, recommendedFor, price } = searchParams;

	const supabase = createClient();
	let filteredProducts = supabase.from('products').select('*');

	if (stock && stock !== 'all') {
		filteredProducts = filteredProducts.eq('instock', stock === 'instock');
	}

	if (taste && taste !== 'any') {
		filteredProducts = filteredProducts.eq('taste', taste);
	}

	if (recommendedFor && recommendedFor !== 'any') {
		filteredProducts = filteredProducts.eq('recommended_for', recommendedFor);
	}

	if (price && price !== 'default') {
		filteredProducts = filteredProducts.order('price', {
			ascending: price === 'ascending',
		});
	}

	const { data, error } = await filteredProducts;

	if (error) {
		console.error(error.message);
		return undefined;
	}

	return data;
};

export const getProduct = async (name: string) => {
	const supabase = createClient();

	const { data } = await supabase
		.from('products')
		.select('*')
		.eq('name', name)
		.single();

	return data;
};

export const getCartItems = async () => {
	const supabaseServer = createClientServer();

	const { data, error } = await supabaseServer
		.from('cart')
		.select('product_id, product_name, product_price, quantity, product_img')
		.order('product_name', { ascending: true });

	if (error) {
		console.error(error.message);
		return undefined;
	}

	return data;
};

export const addItemToCart = async (product: ProductProps) => {
	const supabaseServer = createClientServer();

	const { data: productExistsInCart } = await supabaseServer
		.from('cart')
		.select('*')
		.eq('product_id', product.id)
		.maybeSingle();

	if (productExistsInCart) {
		const { data } = await supabaseServer
			.from('cart')
			.update({ quantity: productExistsInCart.quantity + 1 })
			.eq('product_id', product.id)
			.select()
			.single();

		return data;
	}

	const { data: insertData, error: insertError } = await supabaseServer
		.from('cart')
		.insert([
			{
				product_id: product.id,
				product_name: product.name,
				product_price: product.price,
				quantity: product.quantity,
				product_img: product.photo,
			},
		])
		.select();

	if (insertError) {
		console.error(insertError.message);
		return new Error(insertError.message);
	}

	return insertData;
};

export const increaseQuantityDB = async (id: number) => {
	const supabaseServer = createClientServer();

	const { data: cartItem } = await supabaseServer
		.from('cart')
		.select('quantity')
		.eq('product_id', id)
		.single();

	const newQuantity = cartItem?.quantity + 1;

	const { data, error } = await supabaseServer
		.from('cart')
		.update({ quantity: newQuantity })
		.eq('product_id', id);

	if (error) {
		console.error(error.message);
		return new Error(error.message);
	}
	return data;
};

export const decreaseQuantityDB = async (id: number) => {
	const supabaseServer = createClientServer();

	const { data: cartItem } = await supabaseServer
		.from('cart')
		.select('quantity')
		.eq('product_id', id)
		.single();

	if (cartItem?.quantity <= 1) return await deleteCartItemDB(id);

	const newQuantity = cartItem?.quantity - 1;

	const { data, error } = await supabaseServer
		.from('cart')
		.update({ quantity: newQuantity })
		.eq('product_id', id);

	if (error) {
		console.error(error.message);
		return new Error(error.message);
	}

	return data;
};

export const deleteCartItemDB = async (id: number) => {
	const supabaseServer = createClientServer();

	const { data, error } = await supabaseServer
		.from('cart')
		.delete()
		.eq('product_id', id);

	if (error) {
		console.error(error.message);
		return new Error(error.message);
	}

	return data;
};
