import { FormInputProps } from "@/typings"

export default function FormInput({ user, labelValue, name, type }: FormInputProps) {

  const renderInputType = () => {
    if (type === 'textarea') {
      return <textarea required id="message" placeholder=" " rows={6} name="message" className="input resize-none w-full py-1.5 px-2 rounded-sm peer focus-within:outline focus-within:outline-zinc-900"></textarea>
    }
    return <input required placeholder="" type={type} id={name} name={name} readOnly={!!user?.name} defaultValue={type === 'email' && user ? user?.email : user?.name} className='input py-1.5 px-2 w-full rounded-sm peer focus-within:outline read-only:bg-stone-200 read-only:cursor-not-allowed' />
  }

  return (
    <div className="relative">
      {renderInputType()}
      <label htmlFor={name} className={`absolute top-2 left-2 cursor-text text-sm transition-all ease-linear text-zinc-900/60 peer-focus:-top-2.5 peer-focus:px-1 peer-focus:text-xs peer-focus:bg-primary-color peer-focus:rounded-sm peer-focus:border peer-focus:border-zinc-900 peer-focus:text-zinc-900 lg:text-base lg:peer-focus:text-sm ${user?.name ? '-top-2.5 px-1 text-xs bg-primary-color rounded-sm lg:text-sm lg:-top-2.5 ' : ''}`}>{labelValue}</label>
    </div>
  )
}
