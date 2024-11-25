import OurStoryImgs from "./our-story-imgs";
import OurStoryText from "./our-story-text";

export default function OurStorySection() {
  return (
    <section className="bg-stone-100 h-[calc(100dvh-3.5rem)] max-h-dvh min-h-[47rem] w-full flex flex-col items-center py-10 justify-center md:flex-row lg:gap-3">
      <OurStoryImgs />
      <OurStoryText />
    </section>
  )
}
