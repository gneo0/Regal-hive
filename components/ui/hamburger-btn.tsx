import { MobileNavProps } from "@/typings";

export default function HamburgerBtn({ mobileNavOpen, setMobileNavOpen }: MobileNavProps) {
  return (
    <button aria-label="Show/hide navigation bar" className="md:hidden flex flex-col justify-between w-5 h-[15px] right-[5.2rem] py-0.5 z-50 px-2 fixed"
      onClick={() => setMobileNavOpen(!mobileNavOpen)}>
      <span className={`bg-zinc-900 h-[1px] transition w-5 rounded ${mobileNavOpen ? 'translate-y-[0.3rem] origin-center ease-linear duration-300 rotate-45' : ''}`}></span>
      <span className={`bg-zinc-900 h-[1px] w-5 transition rounded ${mobileNavOpen ? 'opacity-0' : ''}`}></span>
      <span className={`bg-zinc-900 h-[1px] w-3 transition rounded ${mobileNavOpen ? '-translate-y-[0.3rem] w-5 origin-center duration-300 ease-linear -rotate-45' : ''}`}></span>
    </button>
  )
}