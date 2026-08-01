import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../../data/types'
import { PARTNERS } from '../../data/partners'
import type { Lang } from '../../i18n/useLang'
import { useLocalePath } from '../../i18n/useLang'
import { imgSrcSet } from '../../lib/img'
import { SHOP_COPY } from '../../locales/shopCopy'
import ShippingBadge from './ShippingBadge'

/**
 * Kuvapaikan leveys layoutin mukaan. Mitattu selaimesta: 2 palstaa < 768 px
 * (147 px @ 390), 3 palstaa 768–1279 px, 4 palstaa 1280 px:stä ylöspäin
 * (~300 px). Miinus kortin oma `p-3`-reunus.
 */
const CARD_SIZES = '(min-width: 1280px) 290px, (min-width: 768px) 28vw, 44vw'

/**
 * Tuotekortti.
 *
 * 🔴 Kuvaosa on neliö ja kuva `object-contain` valkoisella (`.product-media`,
 * index.css). Aiempi 4/5 + `object-cover` teki 358 pikselin levyisestä kortista
 * 602 pikselin korkuisen ja rajasi kapeimmista tuotekuvista (Marttiinin puukot,
 * 429 × 1080) näkyviin vain keskiosan.
 *
 * 🔴 Kortissa on nyt toimintakehote. Aiemmin se oli pelkkä linkki, jonka ainoa
 * vihje painettavuudesta oli hover-varjo — eikä kosketusnäytöllä ole hoveria
 * (Vesa 1.8.: "ei ole mitään tekstiä, cta painiketta tms? todella outoja").
 * Kehote on kortin sisällä `<span>`inä eikä sisäkkäisenä linkkinä: koko kortti
 * on jo yksi linkki, ja <a> <a>:n sisällä on epävalidia HTML:ää.
 */
export default function ProductCard({ product, lang }: { product: Product; lang: Lang }) {
  const to = useLocalePath()
  const t = SHOP_COPY[lang].product
  const partner = PARTNERS[product.partnerId]
  const name = lang === 'fi' ? product.name.fi : product.name.en
  return (
    <Link
      to={to(`/product/${product.slug}`)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-shadow hover:shadow-lg"
    >
      {/* Tausta on valkoinen eikä hiekka: kumppanien tuotekuvat on kuvattu
          valkoista vasten, joten `contain`in jättämät reunat sulautuvat kuvaan
          eivätkä piirrä sen ympärille kehystä. */}
      <div className="product-media overflow-hidden bg-card p-3">
        {/* 🔴 srcSet + sizes. Mitattuna kortin kuvapaikka on 147 CSS-pikseliä
            390 pikselin ruudulla, mutta selain latasi 800 pikselin tiedoston,
            koska muuta ei ollut tarjolla eikä `sizes` kertonut paikan kokoa.
            Nyt tarjolla on 320 ja 480 pikselin versiot (scripts/
            build-image-variants.mjs) ja selain valitsee näyttötiheyden mukaan. */}
        <picture>
          <source srcSet={imgSrcSet(product.image, 'avif')} sizes={CARD_SIZES} type="image/avif" />
          <img
            src={`/images/${product.image}.webp`}
            srcSet={imgSrcSet(product.image, 'webp')}
            sizes={CARD_SIZES}
            alt={name}
            loading="lazy"
            decoding="async"
            width={640}
            height={640}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </picture>
      </div>
      {/* Tekstilohko on tarkoituksella tiivis: kahden palstan kortti on
          kapeimmillaan 138 px leveä, jolloin jokainen ylimääräinen pistekoko
          tuottaa kokonaisen rivin lisää korkeutta. */}
      <div className="flex flex-1 flex-col gap-1 p-3 sm:gap-1.5 sm:p-4">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted">
          {product.brand}
        </span>
        {/* 🔴 Tuotenimi EI ole otsikkofontilla. Otsikkofontti on Bebas Neue eli
            pelkkiä versaaleja, ja tuotenimet ovat sekakirjaimisia erisnimiä
            numeroineen: "Marttiini Lapinleuku 255" muuttuisi muotoon
            "MARTTIINI LAPINLEUKU 255", josta ei enää erota mikä on brändi ja
            mikä mallinumero. Nimi tulee siis leipätekstifontilla. */}
        <h3 className="font-body text-sm font-semibold leading-snug tracking-normal text-gray sm:text-base lg:text-lg">
          {name}
        </h3>
        <div className="mt-auto flex flex-col items-start gap-1.5 pt-1.5">
          {/* priceFrom saa valuutan tuotteelta (osa katalogista hinnoittelee
              punnissa), joten €-merkkiä ei kirjoiteta mihinkään käsin. */}
          <span className="text-sm font-semibold text-gray sm:text-base">
            {t.priceFrom(product.priceFrom, product.currency)}
          </span>
          <ShippingBadge zone={partner.shipsTo} lang={lang} size="sm" />
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber group-hover:underline">
            {t.viewProduct}
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}
