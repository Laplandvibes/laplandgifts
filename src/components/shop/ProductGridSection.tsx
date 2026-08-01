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
  /* 🔴 Kaksi palstaa jo kapeimmalla ruudulla. Yhden palstan kortti oli 390
     pikselin ruudulla 358 px leveä ja 602 px korkea, eli yhtään kokonaista
     tuotetta ei mahtunut näkyviin kerralla ja kahden tuotteen vertailu vaati
     rullaamista. Kahdessa palstassa kortti on ~170 px leveä ja ~330 px korkea:
     neljä tuotetta kerralla ruudulle. Sama ratkaisu kuin verkkokaupoissa
     yleensä. */
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} lang={lang} />
      ))}
    </div>
  )
}
