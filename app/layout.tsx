import type { Metadata } from 'next';
import { Toaster } from 'sonner';

import './globals.css';
import Navbar from '../components/navbar';
import Footer from '@/components/footer';
import CartProvider from '@/context/cart-context';
import { merriweatherFont } from '@/public/fonts/fonts';
import { getCartItems } from '@/utils/supabase/data';
import { CartProps } from '@/typings';

export const metadata: Metadata = {
	title: {
		template: '%s - Regal Hive',
		default: 'Home - Regal Hive',
	},
	description: "Welcome to Regal Hive, where our mission is to bring you the finest, raw, and unfiltered honey straight from nature. Harvested responsibly from our carefully tended hives, each jar is filled with the sweetness and health benefits that only pure honey can offer. Whether you're drizzling it on toast, stirring it into tea, or using it as a natural sweetener, our honey delivers the taste of nature in its purest form."
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	/* Don't await this!!
	We pass the promise to context on 'use' React hook and then
	the client component handles the promise. This allows the Client Component 
	to read the value	from the Promise that was initially created by the Server Component */
	const cart = getCartItems() as Promise<CartProps[]>;

	return (
		<html lang="en" className='scroll-smooth h-full'>
			<body className={`${merriweatherFont.className} bg-stone-100`}>
				<CartProvider cartPromise={cart}>
					<Navbar />
					<main className="h-[calc(100dvh-3.5rem)s] mt-14">{children}</main>
					<Toaster closeButton toastOptions={{ className: 'border border-accent-color' }} />
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
