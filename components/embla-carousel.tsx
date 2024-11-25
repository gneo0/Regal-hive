'use client'

import useEmblaCarousel from 'embla-carousel-react'

import ProductsCarousel from './products-carousel'
import CarouselControls from './ui/carousel-controls'
import { ProductProps } from '@/typings'

export default function EmblaCarousel({ products }: { products: ProductProps[] | null }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: 'trimSnaps', align: 'start', dragFree:true })

  return (
    <section className="embla">
      <div ref={emblaRef} className="embla__viewport">
        <ProductsCarousel products={products} />
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </section>
  )
}