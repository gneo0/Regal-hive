'use client';

import { useState } from 'react';

import HamburgerBtn from './hamburger-btn';
import NavLinks from './nav-links';

export default function NavLinksContainer() {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

	return (
		<>
			<NavLinks mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />
			<HamburgerBtn mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />
		</>
	);
}