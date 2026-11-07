import { useLang } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import { imgSrcSet } from '../lib/img'
import PhotoMark from './PhotoMark'

/**
 * "Näin ostaminen etenee" + "Mitä LaplandGifts tekee" yhtenä lohkona.
 *
 * 🔴 Vesa 7.11.2026, katsoessaan näitä kahta osiota: "todella poor, ei mitään
 * fiilistä tule näistä." Ne olivat kaksi peräkkäistä vaaleaa tekstiosiota,
 * joissa oli pienet ikonilaatat (luuppi, maapallo, kauppa; käsi, hintalappu,
 * paperi, kauppa) eikä yhtään kuvaa. Ikoni kertoo vain sen minkä otsikkokin.
 * Nyt lohko on tumma, ja sen kantaa oma valokuva Tenojoen varrelta (lokakuu
 * 2026). Askeleissa on isot numerot, ja lupaukset ovat rivinä kuvan alla.
 * Lohko on yksi, koska molemmat vastaavat samaan epäilyyn: voiko täältä ostaa
 * ja kuka vastaa paketista. Tekstit ovat ennallaan 12 kielellä (SHOP_COPY,
 * natiivilukijan tarkistamat), vain ulkoasu muuttui.
 *
 * Lupausosan id säilyy (`#shipping`): FAQ:n vastaukset linkittävät tänne.
 */
export default function HowItWorks() {
  const c = SHOP_COPY[useLang()].home
  const v = c.valueProp
  const p = c.promises
  return (
    <section className="bg-night text-white" aria-labelledby="how-it-works-h2">
      <div className="mx-auto max-w-[1600px] lg:grid lg:grid-cols-12">
        <div className="relative aspect-[16/10] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[640px]">
          <picture className="absolute inset-0 block">
            <source srcSet={imgSrcSet('hero-teno', 'avif')} sizes="(min-width: 1024px) 42vw, 100vw" type="image/avif" />
            <img
              src="/images/hero-teno.webp"
              srcSet={imgSrcSet('hero-teno', 'webp')}
              sizes="(min-width: 1024px) 42vw, 100vw"
              alt=""
              width={1920}
              height={1081}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              style={{ objectPosition: '32% 50%' }}
            />
          </picture>
          {/* Kuvan oikea reuna sulautuu tummaan pohjaan, jottei palstojen väliin jää terävää saumaa. */}
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-night lg:block" aria-hidden="true" />
          <PhotoMark image="hero-teno" />
        </div>

        <div className="px-4 py-12 sm:px-8 md:py-16 lg:col-span-7 lg:px-12 lg:py-20 xl:px-16">
          <h2 id="how-it-works-h2" className="font-heading text-4xl leading-none tracking-wide text-center lg:text-left md:text-6xl">
            {v.h2}
          </h2>
          <p className="mx-auto w-fit lg:mx-0 lg:w-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-lg">{v.sub}</p>
          <ol className="mt-10 space-y-7 md:mt-12 md:space-y-9">
            {v.steps.map((s, i) => (
              <li key={i} className="grid grid-cols-[3rem_1fr] gap-4 md:grid-cols-[4.5rem_1fr] md:gap-6">
                <span className="font-heading text-6xl leading-[0.8] text-amber md:text-8xl" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="border-t border-white/15 pt-3">
                  <h3 className="font-heading text-2xl leading-none tracking-wide md:text-3xl">{s.title}</h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-white/75">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div id="shipping" className="scroll-mt-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 md:py-16">
          <h2 className="font-heading text-3xl leading-none tracking-wide text-center lg:text-left md:text-5xl">{p.h2}</h2>
          <p className="mx-auto w-fit lg:mx-0 lg:w-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-base">{p.sub}</p>
          <ul className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 md:mt-10 lg:grid-cols-4">
            {p.items.map((item) => (
              <li key={item.title} className="border-l-2 border-amber pl-4">
                <h3 className="font-heading text-2xl leading-none tracking-wide">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/70">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
