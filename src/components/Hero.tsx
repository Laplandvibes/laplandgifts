import { Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'

/**
 * Kaupallinen hero: kuva kantaa, teksti on lyhyt ja molemmat CTA:t vievät
 * kauppaan reitittimen Linkillä, eivät ankkuriin saman sivun sisällä.
 *
 * 🔴 Vanha badge, joka lupasi kaupan avautuvan pian, on poistettu. Kauppa on
 * auki, joten lupaus avautumisesta olisi nyt valhe. Samasta syystä ingressi
 * tulee SHOP_COPYsta: ChromeCopyn hero.lead lupaa yhä, että tilata voi vasta
 * myöhemmin ja että ensimmäistä mallistoa vasta kootaan.
 *
 * min-h käyttää svh-yksikköä: vh laskee Safarin URL-palkin mukaan ja hero
 * hyppäisi korkeutta kun palkki piiloutuu.
 */
export default function Hero() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].hero
  const s = SHOP_COPY[lang]
  return (
    <section className="relative flex min-h-[78svh] items-center overflow-hidden">
      {/* Heron kuva on sivun LCP-elementti: se ladataan korkealla prioriteetilla
          eikä laiskasti, ja index.html avaa sille esilatauksen jo ennen kuin
          React on käynnistynyt. */}
      <picture className="absolute inset-0">
        <source srcSet="/images/hero-shop.avif" type="image/avif" />
        <img
          src="/images/hero-shop.webp"
          alt=""
          width={2400}
          height={1350}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
      {/* Kaksi kerrosta: gradientti pitää oikean laidan kuvana työpöydällä,
          ja tasainen tummennus takaa luettavuuden kun ladonta keskittyy. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/60 to-night/20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-night/35 lg:hidden" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <span className="text-sm font-medium uppercase tracking-widest text-amber">
            {t.kicker}
          </span>
          {/* Bebas Neue on kapea versaalifontti: sama pistekoko näyttää
              selvästi pienemmältä kuin Playfairilla, joten koot on nostettu
              askeleella. tracking-wide avaa versaalit luettaviksi. */}
          <h1 className="mt-5 font-heading text-6xl tracking-wide text-white md:text-8xl lg:text-9xl">
            {t.title} <span className="text-amber">{t.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            {s.home.heroLead}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <Link
              to={to('/design')}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-amber px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-amber/90"
            >
              <Gift className="h-5 w-5" aria-hidden="true" />
              {t.ctaExplore}
            </Link>
            <Link
              to={to('/gift-guides')}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-lg font-medium text-white transition-colors hover:border-amber hover:text-amber"
            >
              {s.nav.guides}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
