import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { productsForOccasion } from '../data/occasions'
import { OCCASION_THEMES } from '../data/occasionTheme'
import { useLang, useLocalePath } from '../i18n/useLang'
import type { Lang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'
import { productName } from '../locales/productCopy'
import { imgSrcSet } from '../lib/img'

/**
 * Etusivun lahjaopas — lukijalle joka ei tiedä mitä ostaa. FUNKTIO: tilaisuus →
 * neljä oikeaa tuotetta kuvalla ja hinnalla → tuotesivu. Kaksi klikkausta.
 *
 * 🔴 Vesa 5.9.2026 (mobiilikuva): "mikä tää lahjaoppaat osio nyt on? et ole
 * optimoinut ollenkaan mitään." Edellinen versio listasi tuotenimet
 * pillereinä ilman kuvaa ja hintaa — nimi ilman kuvaa ei myy mitään — ja
 * jokaisella tilaisuudella oli täytekappale ("Mikä olisi joulun hengen
 * mukaisempi kuin lahja Joulupukin kotimaasta"), joka ei kertonut lukijalle
 * yhtään mitään päätöksen kannalta.
 *
 * Nyt: tilaisuus + FAKTARIVI datasta (montako ehdotusta, hintahaarukka) +
 * vaakarivi pienoiskortteja (kuva, nimi, hinta). Kuvat ja hinnat tulevat
 * katalogista, eivät copysta, joten rivi on aina totta. Tilaisuuden kuvaus
 * copy-tiedostoissa jää käyttämättä — se oli täytettä.
 */
/** Hintahaarukka tilaisuuden korteista. Vesa 5.9.: "mitä noi 4 ehdotusta on" —
 *  lukumäärä oli itsestäänselvyys kun kortit ovat siinä, joten rivillä on vain
 *  hinnat, jotka lukija ei näe kortteja katsomatta. */
const PRICES: Record<Lang, (min: string, max: string) => string> = {
  fi: (a, b) => `Hinnat ${a}–${b}`,
  en: (a, b) => `Prices ${a}–${b}`,
  sv: (a, b) => `Priser ${a}–${b}`,
  de: (a, b) => `Preise ${a}–${b}`,
  fr: (a, b) => `Prix ${a}–${b}`,
  it: (a, b) => `Prezzi ${a}–${b}`,
  es: (a, b) => `Precios ${a}–${b}`,
  'pt-BR': (a, b) => `Preços ${a}–${b}`,
  nl: (a, b) => `Prijzen ${a}–${b}`,
  ja: (a, b) => `価格 ${a}–${b}`,
  'zh-CN': (a, b) => `价格 ${a}–${b}`,
  ko: (a, b) => `가격 ${a}–${b}`,
}

function money(n: number, currency: string, lang: Lang) {
  return new Intl.NumberFormat(lang === 'pt-BR' ? 'pt-BR' : lang, {
    style: 'currency', currency, maximumFractionDigits: 0,
  }).format(n)
}

function GiftGuide() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].giftGuide
  const s = SHOP_COPY[lang]
  const prices = PRICES[lang] ?? PRICES.en
  return (
    <section id="gift-guide" className="bg-sand py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <h2 className="font-heading text-4xl leading-none tracking-wide text-gray md:text-6xl">{t.h2}</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">{t.sub}</p>
          </div>
          <Link
            to={to('/gift-guides')}
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gray px-5 text-sm font-semibold text-white no-underline transition-[transform,background-color] duration-200 hover:bg-amber active:scale-[0.97] motion-reduce:transition-none"
            style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            {s.nav.guides}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
          </Link>
        </div>

        <ol className="mt-8 md:mt-12">
          {t.occasions.map((occasion, i) => {
            const Icon = OCCASION_THEMES[i % OCCASION_THEMES.length].Icon
            /* Etusivulla neljä ensimmäistä ehdotusta, sivulla kaikki kuusi. */
            const picks = productsForOccasion(i).slice(0, 4)
            if (picks.length === 0) return null
            const priceList = picks.map((p) => p.priceFrom)
            const cur = picks[0].currency
            return (
              <li key={occasion.name} className="grid grid-cols-1 gap-4 border-t border-line py-7 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8 md:py-10">
                {/* Vasen palsta: numero, tilaisuus, hinnat. Oikea: neljä korttia
                    koko leveydeltä. Ennen kortit olivat vasemmalla 60 %:n
                    leveydellä ja hintarivi roikkui pienenä oikeassa laidassa
                    tyhjän välin takana (Vesa 5.9.: "kiristää oikealta"). */}
                <div className="md:col-span-3">
                  <span className="block font-heading text-xl leading-none tracking-wide text-muted/70 md:text-2xl" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 flex items-center gap-2.5 font-heading text-3xl leading-none tracking-wide text-gray md:mt-2 md:text-4xl">
                    {occasion.name}
                    <Icon className="h-4 w-4 text-muted/60 md:h-5 md:w-5" strokeWidth={1.75} aria-hidden="true" />
                  </h3>
                  <p className="mt-2 text-[14px] text-muted md:mt-3 md:text-[15px]">
                    {/* "6–140 €", ei "6 €–140 €": valuutta kerran, haarukan lopussa. */}
                    {prices(String(Math.round(Math.min(...priceList))), money(Math.max(...priceList), cur, lang))}
                  </p>
                </div>

                {/* Yksi vaakarivi kapealla, neljä rinnakkain md:stä ylöspäin —
                    sama liike kuin kumppaniriveillä, mutta linkit ovat omia
                    tuotesivuja. */}
                <ul className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:col-span-9 md:mx-0 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
                  {picks.map((p) => (
                    <li key={p.slug} className="w-[42vw] max-w-[11rem] shrink-0 snap-start md:w-auto md:max-w-none">
                      <Link
                        to={to(`/product/${p.slug}`)}
                        className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-card no-underline shadow-[0_1px_2px_rgba(15,23,42,0.05),0_12px_28px_-16px_rgba(15,23,42,0.22)] transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_22px_40px_-18px_rgba(15,23,42,0.3)] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
                      >
                        <div className="aspect-square w-full overflow-hidden bg-white p-3">
                          <img
                            src={`/images/${p.image}.webp`}
                            srcSet={imgSrcSet(p.image, 'webp')}
                            sizes="(min-width: 768px) 25vw, 42vw"
                            alt={productName(p, lang)}
                            loading="lazy"
                            decoding="async"
                            width={640}
                            height={640}
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-1.5 px-3.5 pb-3.5 pt-1">
                          <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">{p.brand}</span>
                          <span className="line-clamp-2 text-[12.5px] font-semibold leading-snug text-gray">{productName(p, lang)}</span>
                          <span className="mt-auto text-[14px] font-bold text-gray">{money(p.priceFrom, p.currency, lang)}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default GiftGuide
