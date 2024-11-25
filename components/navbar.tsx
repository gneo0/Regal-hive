import Logo from './ui/logo';
import NavLinksContainer from './ui/nav-links-container';
import ShoppingCart from './ui/shopping-cart';
import LoginBtn from './login-btn';
import { createClientServer } from '@/utils/supabase/server';

export default async function Navbar() {
	const supabase = createClientServer();
	const { data: { user } } = await supabase.auth.getUser()

	return (
		<nav className="bg-stone-100 border-b-zinc-900 h-14 fixed top-0 z-50 flex items-center justify-between w-full overflow-hidden border-b">
			<Logo />
			<NavLinksContainer />
			<div className="xl:w-28 flex items-center justify-between w-32 h-full gap-4 pr-2">
				<ShoppingCart />
				<LoginBtn user={user} />
			</div>
		</nav>
	);
}