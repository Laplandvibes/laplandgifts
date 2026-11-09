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
     yleensä.
     Orpokortti 640–1023 px (gate:tabletti laaja 9.11.2026): kolmessa palstassa (768+) yksin jäävä viimeinen
     tuote keskipalstaan (3n+1 ⇒ col-start-2), kahdessa palstassa (640–767) keskelle muiden levyisenä, ei
     venytetä. Puhelin ja tietokone (≥ 1024 px) ennallaan. */
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4 md:max-lg:[&>*:last-child:nth-child(3n+1)]:col-start-2 sm:max-md:[&>*:last-child:nth-child(odd)]:col-span-2 sm:max-md:[&>*:last-child:nth-child(odd)]:justify-self-center sm:max-md:[&>*:last-child:nth-child(odd)]:w-[calc(50%_-_0.625rem)]">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} lang={lang} />
      ))}
    </div>
  )
}
