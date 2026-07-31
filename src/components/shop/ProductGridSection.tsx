import type { Product } from '../../data/types'
import type { Lang } from '../../i18n/useLang'
import ProductCard from './ProductCard'

/**
 * Responsiivinen tuotegrid. Tyhjä tila on kutsujan vastuulla, koska syitä on
 * kaksi ja ne vaativat eri tekstin: kategoria on kokonaan tyhjä (odottaa
 * tuotteita) tai toimitusmaasuodatin jättää nolla näkyviin.
 */
export default function ProductGridSection({
  products,
  lang,
  emptyMessage,
}: {
  products: Product[]
  lang: Lang
  emptyMessage: string
}) {
  if (products.length === 0) {
    return (
      <p className="rounded-2xl border border-line bg-card px-6 py-10 text-center text-muted">
        {emptyMessage}
      </p>
    )
  }
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} lang={lang} />
      ))}
    </div>
  )
}
