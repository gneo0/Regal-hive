import { ProductFiltersProps } from "@/typings";

export default function ProductsFilters({ filtersHidden, onSelect, searchParams }: ProductFiltersProps) {
  return (
    <div className={`${filtersHidden ? 'hidden transition-all' : ""} w-full flex flex-col`}>
      <label htmlFor="stock" >Displayed products:</label>
      <select name="stock" id="stock" defaultValue={searchParams.get('stock')?.toString()} onChange={onSelect}>
        <option value="all">All products</option>
        <option value="instock">Only In-stock</option>
      </select>

      <label htmlFor="taste" className="mt-4">Select taste:</label>
      <select name="taste" id="taste" defaultValue={searchParams.get('taste')?.toString()} onChange={onSelect}>
        <option value="any">Any</option>
        <option value="sweet">Sweet</option>
        <option value="bitter">Bitter</option>
      </select>

      <label htmlFor="recommendedFor" className="mt-4">I want to use it on:</label>
      <select name="recommendedFor" id="recommendedFor" defaultValue={searchParams.get('recommendedFor')?.toString()} onChange={onSelect}>
        <option value="any">Any</option>
        <option value="brews">Brews</option>
        <option value="food">Food</option>
      </select>

      <label htmlFor="price" className="mt-4">Sort by price:</label>
      <select name="price" id="price" defaultValue={searchParams.get('price')?.toString()} onChange={onSelect}>
        <option value="default">Default</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  )
}
