import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from "tailwind-merge";

import regalHiveLogo from '@/public/regalHiveLogo.png'

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href='/' className={twMerge("h-full flex items-center pr-3 md:text-base justify-center gap-1 text-sm md:w-36", className)}>
      <Image src={regalHiveLogo} width={30} height={30} alt='Regal Hive Logo' />
      RegalHive
    </Link>
  )
}
