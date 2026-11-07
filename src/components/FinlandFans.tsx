import { useLang } from '../i18n/useLang'
import { PRODUCTS } from '../data/products'
import { subgroupLabel, subgroupOf } from '../data/subgroups'
import { byShippingBreadth } from '../data/sortProducts'
import { FINLAND_FAN_COPY } from '../locales/finlandFanCopy'
import ProductGridSection from './shop/ProductGridSection'

/** Hyllyn tuotteet etusivulle: vaatesivun finlandtheme-hylly kokonaan. */
export const FINLAND_FAN_SLUGS = PRODUCTS.filter((p) => subgroupOf(p.slug) === 'finlandtheme').map((p) => p.slug)

/**
 * Suomi-fanituotteet etusivulla (Vesa 7.11.2026: "suomi fanituotteet osiohan
 * kannattaisi olla heti etusivulla, nostaa aina tunteita?"). Hylly oli
 * vaatesivun viimeisenä, viidennen brändihyllyn alla, eli sen näki vain se joka
 * rullasi vaatteet loppuun. Etusivulla se on heti tuotenostojen jälkeen, Suomen
 * sinisellä pohjalla, jossa siniristi näkyy himmeänä taustakuviona.
 *
 * Järjestys toimituslaajuuden mukaan kuten muillakin tuotepinnoilla.
 */
export default function FinlandFans() {
  const lang = useLang()
  const items = byShippingBreadth(PRODUCTS.filter((p) => FINLAND_FAN_SLUGS.includes(p.slug)))
  if (!items.length) return null
  return (
    <section className="relative overflow-hidden bg-[#002F6C] text-white" aria-labelledby="finland-fans-h2">
      {/* Siniristi taustalla: valkoinen vaaka- ja pystyraita lipun mittasuhteissa, 7 % peitolla. */}
      <div className="pointer-events-none absolute inset-x-0 top-[36%] h-[22%] bg-white/[0.07]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 left-[27%] w-[12%] bg-white/[0.07] md:w-[8%]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 id="finland-fans-h2" className="font-heading text-4xl leading-none tracking-wide md:text-6xl">
          {subgroupLabel('finlandtheme', lang)}
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/85 md:text-lg">
          {FINLAND_FAN_COPY[lang].lead}
        </p>
        <div className="mt-8">
          <ProductGridSection products={items} lang={lang} emptyMessage="" />
        </div>
      </div>
    </section>
  )
}
