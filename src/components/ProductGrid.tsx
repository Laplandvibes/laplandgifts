import { Link } from 'react-router-dom'
import { featuredProducts } from '../data/products'
import { PARTNERS } from '../data/partners'
import { mergeExcept, shipsTo } from '../data/shipping'
import { byShippingBreadth } from '../data/sortProducts'
import { useShippingCountry } from '../context/ShippingCountry'
import { useLang, useLocalePath } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import ProductCard from './shop/ProductCard'
import { productName } from '../locales/productCopy'

/**
 * Etusivun tuotenostot. Kortit ovat katalogin oikeita tuotteita ja vievät
 * tuotesivulle, jolta ostetaan kumppanin kaupasta.
 *
 * 🔴 Vanha versio listasi kaksitoista keksittyä tuotenimeä, joilla oli
 * "Price TBD" ja "Notify me" -nappi, ja lähetti samat nimet ItemList-JSON-LD:nä
 * hakukoneelle. Kauppa on auki, joten sekä kortit että rakenteinen data tulevat
 * nyt products.ts:stä.
 *
 * 🔴 Kahdeksan nostoa, ei kuusi. Osio siirtyi 1.8. sivun kärkeen heti heron
 * alle, ja kärjessä oleva ruudukko on koko kaupan näyteikkuna: kuudesta
 * tuotteesta jäi neljän palstan työpöytäruudukkoon vajaa rivi (4 + 2).
 * Kahdeksan jakautuu tasan sekä kahteen että neljään palstaan.
 *
 * 🔴 Nostot noudattavat samaa toimitussääntöä kuin kategoriasivu (Vesa
 * 12.8.: "edelleen etusivulla lukee vain suomeen"). Neljästätoista
 * featured-tuotteesta viisi lähtee vain Suomeen, ja katalogin järjestys
 * nosti juuri ne kolme ensimmäiseksi. Etusivun ruudukko on koko kaupan
 * näyteikkuna, ja sen lukija on useimmiten matkalla pois maasta.
 *
 * Rajaus tehdään ENNEN kahdeksan poimintaa, ei sen jälkeen: jälkikäteen
 * suodattaminen jättäisi vajaan rivin.
 */
export default function ProductGrid() {
  const lang = useLang()
  const to = useLocalePath()
  const t = SHOP_COPY[lang].home
  const s = SHOP_COPY[lang]
  const { country } = useShippingCountry()
  const all = featuredProducts(Number.MAX_SAFE_INTEGER)
  const products = (
    country
      ? all.filter((p) => {
          const partner = PARTNERS[p.partnerId]
          return shipsTo(partner.shipsTo, country, mergeExcept(partner.shipsExcept, p.shipsExcept))
        })
      : byShippingBreadth(all)
  ).slice(0, 8)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t.featuredH2,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: productName(p, lang),
      url: `https://laplandgifts.com${to(`/product/${p.slug}`)}`,
    })),
  }
  return (
    <section id="products" className="bg-card py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-4xl tracking-wide text-gray md:text-6xl">{t.featuredH2}</h2>
            <p className="mt-3 max-w-2xl text-muted">{t.featuredSub}</p>
          </div>
          <Link
            to={to('/design')}
            className="inline-flex min-h-11 items-center text-sm font-medium text-amber hover:underline"
          >
            {s.nav.allProducts}
          </Link>
        </div>
        {/* Kaksi palstaa myös kapealla, ks. ProductGridSection. Sama porrastus
            kuin kategoriasivun ruudukossa ja kortin `sizes`-attribuutissa:
            2 / 3 (768 px) / 4 (1280 px). */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
