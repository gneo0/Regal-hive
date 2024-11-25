export default function CartItemSkeleton() {
  return (
    <li className="flex w-full justify-between pr-3 items-center bg-primary-color animate-pulse">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-gray-200 rounded" />
        <div className="ml-4">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/4 mt-2" />
        </div>
      </div>
      <div className="flex gap-0.5">
        <div className="h-8 w-8 bg-gray-200 rounded" />
        <div className="h-8 w-16 bg-gray-200 rounded" />
        <div className="h-8 w-8 bg-gray-200 rounded" />
      </div>
    </li>
  )
}
