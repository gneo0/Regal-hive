'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

import { links } from "@/utils/constants";
import { MobileNavProps } from "@/typings";

export default function NavLinks({ mobileNavOpen, setMobileNavOpen }: MobileNavProps) {
  const pathName = usePathname();

  return (
    <nav className={`fixed bg-stone-100 flex md:translate-x-0 md:mt-0 z-50 mt-[3.5rem] transition-all ease-in-out duration-700 flex-col justify-center items-center gap-2 w-full top-0 h-full md:relative md:flex-row md:bg-transparent ${mobileNavOpen ? 'mt-[3.5rem] z-50 translate-x-[0.1px] left-0' : 'translate-x-[100%]'}`}>
      {links.map((link) => (
        <Link onClick={() => setMobileNavOpen(false)} key={link.name} href={link.href} className={`relative px-2 py-0.5 rounded-sm before:absolute before:rounded-sm before:right-0 before:h-0 hover:before:h-full before:transition-all before:ease-linear before:bottom-0 before:w-full before:bg-primary-color before:-z-10 ${pathName === link.href ? 'bg-primary-color' : ''}`}>
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
