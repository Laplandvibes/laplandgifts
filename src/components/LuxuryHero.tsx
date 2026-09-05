import { imgSrcSet } from '../lib/img'
import type { Lang } from '../i18n/useLang'

/**
 * Ylellisyys-sivun hero — liikettä ilman kirjastoa (verkoston sääntö: ei
 * Framer Motionia, vain CSS).
 *
 * 🔴 Vesa 5.9.2026: "tältä sivulta puuttuu se luxuksen tunne, tämä herokin on
 * ihan helvetin ruma. eikö me saataisi emotion graphics tehtyä, animaatio,
 * että tekstit liikkuu ja muuntuu ja kenties kohtaus ja kuvakin."
 *
 * Kolme kohtausta (revontulet, lumihotelli, jäänmurtaja) vaihtuvat 21 sekunnin
 * kierrossa: kuva liikkuu hitaasti (Ken Burns, transform-only), kohtauksen
 * kuvateksti nousee sumeasta teräväksi ja väistyy ennen seuraavaa. Otsikon
 * sanat nousevat leikkausmaskista porrastetusti kerran, ladattaessa. Kaikki
 * on transform/opacity/filter-animaatiota (ei layoutia), ja
 * prefers-reduced-motion näyttää ensimmäisen kohtauksen paikallaan.
 * Kuvat ovat sivuston omia AI-kuvia (exp-*), ei stockia.
 */
/** Samat kolme asiaa kuin sivun elämystuotteet: revontuliretki, lasi-igluyö,
 *  kullanhuuhdontapäivä. Kuvat ovat tuotteiden omia (kumppanin tai AI). */
const SCENES = ['exp-aurora-photo', 'prod-glass-igloo-night-levi', 'prod-gold-panning-day-inari'] as const

interface Props {
  eyebrow: string
  title: string
  lead: string
  captions: [string, string, string]
  lang: Lang
}

export default function LuxuryHero({ eyebrow, title, lead, captions }: Props) {
  const words = title.split(' ')
  return (
    <header className="lux-hero relative isolate overflow-hidden bg-night text-white">
      {/* Kohtaukset: absoluuttiset kerrokset, opacity + transform keyframeilla. */}
      {SCENES.map((img, i) => (
        <picture key={img} className="lux-scene absolute inset-0" style={{ animationDelay: `${i * 7}s` }} aria-hidden="true">
          <source srcSet={imgSrcSet(img, 'avif')} sizes="100vw" type="image/avif" />
          <img
            src={`/images/${img}.webp`}
            srcSet={imgSrcSet(img, 'webp')}
            sizes="100vw"
            alt=""
            width={1200}
            height={800}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="lux-scene-img h-full w-full object-cover"
            style={{ animationDelay: `${i * 7}s` }}
          />
        </picture>
      ))}
      {/* Pimennys: teksti lukee kuvan päällä, kuva säilyy kirkkaana ylhäällä. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/90 via-night/45 to-night/10" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night/60 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[72svh] max-w-7xl flex-col justify-end px-4 pb-14 pt-32 md:min-h-[78svh] md:pb-20">
        <p className="lux-rise mb-4 font-body text-xs uppercase tracking-[0.28em] text-amber" style={{ animationDelay: '150ms' }}>
          {eyebrow}
        </p>
        <h1 className="font-heading text-6xl leading-[0.92] tracking-wide sm:text-7xl md:text-8xl lg:text-9xl" aria-label={title}>
          {words.map((w, i) => (
            <span key={i} className="lux-word inline-block overflow-hidden align-bottom">
              <span className="lux-word-inner inline-block" style={{ animationDelay: `${250 + i * 110}ms` }}>
                {w}
              </span>
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        <p className="lux-rise mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg" style={{ animationDelay: '700ms' }}>
          {lead}
        </p>
        {/* Kohtauksen kuvateksti: kolme päällekkäistä riviä, joista yksi kerrallaan
            on terävä. Sama 21 s kierto kuin kuvilla. */}
        <div className="lux-rise relative mt-8 h-7 text-sm font-medium text-white/85 md:text-base" style={{ animationDelay: '900ms' }} aria-live="off">
          {captions.map((c, i) => (
            <span key={i} className="lux-caption absolute inset-x-0 top-0 flex items-center gap-3" style={{ animationDelay: `${i * 7}s` }}>
              <span className="inline-block h-px w-8 bg-amber" aria-hidden="true" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
