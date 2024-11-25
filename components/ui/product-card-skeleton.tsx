
export default function ProductCardSkeleton() {
  return (
    <div className="w-56 h-[23.5rem] border border-zinc-400 mx-auto self-center flex flex-col justify-between gap-2 bg-stone-100 rounded animate-pulse delay-1000">
      <div className="w-full h-[72%] bg-primary-color/60 rounded"></div>
      <div className="flex justify-between px-2">
        <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
        <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
      </div>
      <div>
        <div className="px-4 opacity-40">
          <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
        </div>
        <div className="w-full border-t border-primary-color py-3 rounded-t-sm font-semibold">
          <div className="h-5 mx-auto w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}
