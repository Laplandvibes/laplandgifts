import { ArrowRight } from 'lucide-react'
import ivaloAd from '../../../shared/ads/advertisers/ivalo'
import { AFFILIATE_REL } from '../data/partners'
import type { Lang } from '../i18n/useLang'
import { trackAffiliateClick } from '../lib/analytics'

/**
 * Ivalon mainos koko kuvan päälle ladottuna.
 *
 * 🔴 Miksi oma komponentti eikä jaettu AdUnit (Vesa 6.8.2026): "ivalo mainos
 * voisi olla niin että tausta olisi koko kuva ja tekstit sen päällä? eikö
 * olisi makea? jokin järvimaisema taustalla." Samassa palautteessa koko
 * ympäröivä osio oli "liian vaalea ilman mitään vasta kontrastia" — tumma
 * järvikuva on samalla se vastakontrasti, jota kaista kaipasi.
 *
 * Tekstit, linkki ja seuranta tulevat jaetusta ivalo-specistä, joten copy ja
 * sid-käytäntö eivät eriydy. Vain ulkoasu on paikallinen.
 *
 * Kuva on AI-generoitu järvimaisema (ei Ivalon oma kuva: kumppanin
 * materiaalia ei ole lisensoitu tähän käyttöön). Tekstien alla on
 * gradientti, koska vaalea taivas söi valkoisen tekstin ilman sitä.
 */
const SID = 'home_gifts_ivalo'

/** Mainosmerkintä sivun kielellä — samat sanat kuin verkoston AD_LABEL-vakiossa
 *  (shared/ads/AdUnit.tsx) ja laplandfoodin Suomikauppa-pinnoissa. */
const AD_LABEL: Record<Lang, string> = {
  en: 'Ad', fi: 'Mainos', de: 'Anzeige', ja: '広告', es: 'Anuncio',
  'pt-BR': 'Anúncio', 'zh-CN': '广告', ko: '광고', fr: 'Annonce',
  it: 'Annuncio', nl: 'Advertentie', sv: 'Annons',
}

export default function IvaloLakeAd({ lang }: { lang: Lang }) {
  const copy = (ivaloAd.copy[lang] ?? ivaloAd.copy.en)!
  const href = ivaloAd.linkFor(SID, lang)

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="relative overflow-hidden rounded-3xl">
        <picture>
          <source type="image/avif" srcSet="/images/ad-ivalo-lake.avif" />
          <img
            src="/images/ad-ivalo-lake.webp"
            alt=""
            loading="lazy"
            decoding="async"
            width={1600}
            height={640}
            className="h-[340px] w-full object-cover sm:h-[380px]"
          />
        </picture>
        {/* Tumma liuku vasemmalta: teksti istuu kuvan rauhalliseen osaan ja
            pysyy luettavana vaikka generoitu kuva vaihtuisi. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/55 to-night/15"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-lg p-7 sm:p-10">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-vibe-pink">
              {copy.eyebrow}
            </p>
            <h2 className="font-heading text-3xl leading-tight tracking-wide text-white sm:text-4xl">
              {copy.headline}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">{copy.sub}</p>
            <a
              href={href}
              target="_blank"
              rel={AFFILIATE_REL}
              onClick={() => trackAffiliateClick('ivalo', `ad_unit:${SID}`, href)}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#DB2777] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#BE185D]"
            >
              {copy.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <span className="absolute bottom-3 right-4 rounded-full bg-night/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
          {AD_LABEL[lang]}
        </span>
      </div>
    </div>
  )
}
