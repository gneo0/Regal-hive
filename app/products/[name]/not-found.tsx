import NotFoundBtn from "@/components/ui/not-found-btn"

export default function notFound({ name }: { name: string }) {
  return (
    <section className="h-[calc(100dvh-3.5rem)] flex flex-col items-center justify-center gap-8 bg-primary-color">
      <h1 className="text-6xl underline decoration-stone-100">Oops!</h1>
      <div className="text-center">
        <p>Seems something went wrong!</p>
        <p>Couldn&apos;t find this product:</p>
        <strong>{name}</strong>
      </div>
      <NotFoundBtn />
    </section>
  )
}
