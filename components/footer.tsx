import Image from "next/image";
import logo from '@/public/regalHiveLogo.png'
import ContactForm from "@/components/contact-form";
import { createClientServer } from "@/utils/supabase/server";

export default async function Footer() {
  const supabase = await createClientServer();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <section id="contact" className="relative h-[calc(100dvh-3.5rem)] max-h-dvh min-h-[47rem] py-4 gap-8 flex flex-col justify-center items-center w-full">
      <Image src={logo} alt="Regal Hive Logo" />
      <ContactForm user={user?.user_metadata} />

      <p><span className="text-xl mr-1">&copy;</span>Regal Hive Co.</p>
    </section>
  )
}
