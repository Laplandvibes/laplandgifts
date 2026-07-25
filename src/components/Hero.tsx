import { Gift, Sparkles } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'

function Hero() {
  const t = COPY[useLang()].hero
  return (
    <section
      className="relative min-h-[88svh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.5) 50%, rgba(15,23,42,0) 100%), url('/images/hero-main.webp')",
      }}
    >
      {/* Keskitetty ladonta ≤lg istuu gradientin vaalean puolen päälle →
          tasainen lisätummenne takaa luettavuuden kapeilla näytöillä. */}
      <div className="absolute inset-0 bg-night/40 lg:hidden" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10 w-full">
        <div className="max-w-2xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
          {/* Rehellisyys: kauppa ei ole vielä auki — kerro se heti heron kärjessä (Vesa 2026-07-12) */}
          <span className="inline-flex items-center gap-2 border border-amber/60 bg-black/30 text-amber text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" aria-hidden="true" />
            {t.badge}
          </span>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber" />
            <span className="text-amber font-medium uppercase tracking-widest text-sm drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">{t.kicker}</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6 drop-shadow-[0_3px_18px_rgba(0,0,0,0.9)]">
            {t.title} <span className="text-amber">{t.titleAccent}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {t.lead}
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 bg-amber text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-amber/90 transition-colors shadow-lg shadow-amber/25"
            >
              <Gift className="w-5 h-5" />
              {t.ctaExplore}
            </a>
            <a
              href="#gift-guide"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:border-amber hover:text-amber transition-colors"
            >
              {t.ctaGuide}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
