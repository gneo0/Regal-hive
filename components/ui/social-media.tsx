import { RiFacebookBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";

export default function SocialMedia() {
  return (
    <div className="sm:border-y border-stone-100 md:text-2xl flex justify-around w-full gap-2 py-2 text-lg border-t-2">
      <span><RiFacebookBoxLine /></span>
      <span><RiInstagramLine /></span>
      <span><RiTwitterXLine /></span>
    </div>
  )
}
