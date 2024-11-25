import { Metadata } from "next"

import SocialMedia from "@/components/ui/social-media";
import OurStorySlogan from "@/components/ui/our-story-slogan";
import MilestonesTimelineContainer from "@/components/ui/milestones-timeline-container";
import CompanyStory from "@/components/ui/company-story";

export const metadata: Metadata = {
  title: 'Our Story'
}

export default function Page() {
  return (
    <section className="h-[calc(100dvh-3.5rem)] max-h-dvh min-h-[47rem] w-full border-b border-zinc-900 bg-primary-color flex flex-col-reverse sm:grid sm:grid-rows-4 sm:grid-cols-3  items-center">
      <MilestonesTimelineContainer />
      <CompanyStory />
      <div className="flex flex-col w-full items-center h-1/5 sm:col-span-1 sm:row-span-3 sm:h-full sm:row-start-1">
        <OurStorySlogan />
        <SocialMedia />
      </div>
    </section >
  )
}
