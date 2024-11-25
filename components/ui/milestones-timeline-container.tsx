import MilestonesHexYears from "@/components/milestones-hex-years";
import MilestonesHeader from "./milestones-header";

export default function MilestonesTimelineContainer() {
  return (
    <aside className="h-1/5 border-accent-color sm:col-span-1 sm:row-span-2 sm:h-full bg-primary-color sm:col-start-1 sm:row-start-4 flex flex-col items-center justify-center w-full border-t-2 sm:border-t-0">
      <MilestonesHeader />
      <MilestonesHexYears />
    </aside>
  )
}
