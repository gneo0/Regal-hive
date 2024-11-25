import { useFormStatus } from "react-dom"
import { UserMetadata } from "@supabase/supabase-js";

export default function OrderFormBtn({ user }: { user: UserMetadata | undefined }) {
  const { pending } = useFormStatus();

  const pendingText = pending && "Sending order...";
  const userText = user && "Send Order";
  const guestText = !user && "Buy as guest";

  return (
    <button type="submit" disabled={pending} className="btn-hover-animation before:bg-primary-color hover:text-stone-100 disabled:cursor-not-allowed border-primary-color md:text-base py-1 text-sm transition-colors ease-in-out border rounded">
      {pendingText || userText || guestText}
    </button>
  )
}
