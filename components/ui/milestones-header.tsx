import { RiTrophyLine } from "react-icons/ri";

export default function MilestonesHeader() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg"><RiTrophyLine /></span>
      <small className="py-3"> Milestones & Achievements </small>
      <span className="text-lg"><RiTrophyLine /></span>
    </div>
  )
}
