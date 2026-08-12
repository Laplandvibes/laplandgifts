import { ArrowRight } from 'lucide-react'
import { AFFILIATE_REL } from '../data/partners'
import type { Lang } from '../i18n/useLang'
import { trackAffiliateClick } from '../lib/analytics'
import { imgSrcSet } from '../lib/img'

/**
 * Suomikauppa outlet — Daisycon 17977, 7 %.
 *
 * 🔴 Miksi MAINOS eikä katalogituotteita (Vesa 2026-08-10: "tämä outlet osiosta
 * saa jo ihan oman mainoksensa"): outletissa on 406 tuotetta ja hinnat
 * vaihtuvat viikoittain. Katalogissa jokaisella tuotteella on `priceCheckedAt`
 * ja testi vahtii sitä, koska luvattu hinta on lupaus. Alennuserän ajaminen
 * sen läpi tuottaisi vanhentuneita hintoja nopeammin kuin ehdimme päivittää.
 * Mainos näyttää mitä osiossa on ja jättää hinnan kaupan kerrottavaksi.
 *
 * 🔴 SIKSI TÄSSÄ EI OLE YHTÄÄN PROSENTTIA. Kolme tuotetta oli tätä
 * kirjoitettaessa 59–60 % alennuksessa, ja juuri siksi luku on jätetty pois:
 * se olisi väärin ensi viikolla. Ainoa väite on rakenteellinen, että kaupalla
 * on pysyvä tarjousosio.
 *
 * Kohde on `/collections/tarjoukset`. 🔴 `/collections/outlet` on 301-ohjaus
 * siihen; affiliate-linkin pitää mennä kanoniseen osoitteeseen, jotta ketjussa
 * on yksi hyppy vähemmän eikä ohjaus voi katketa.
 */

/** Kuvapaikka on kolmasosa kortin oikeasta puoliskosta, eli noin 110-150 CSS-
 *  pikseliä. Kolminkertaisella näyttötiheydellä se on ~450 px, joten 480 on
 *  ylin variantti jota kannattaa pyytää. */
const SHOT_SIZES = '(min-width: 768px) 150px, 28vw'

const SID = 'home_gifts_suomikauppa_outlet'
const DEST = 'https://suomikauppa.fi/collections/tarjoukset'
const HREF =
  'https://go.laplandvibes.com/go/suomikauppa' +
  `?sid=${SID}&dest=${encodeURIComponent(DEST)}`

/** Kaupan omat tuotekuvat, luettu kaupan katalogista 2026-08-10. */
const SHOTS: { img: string; alt: Record<'en' | 'fi', string> }[] = [
  {
    img: 'prod-sk-outlet-karl-fazer',
    alt: {
      en: 'Karl Fazer milk chocolate bar, 180 g',
      fi: 'Karl Fazer maitosuklaalevy, 180 g',
    },
  },
  {
    img: 'prod-sk-outlet-geisha-robe',
    alt: {
      en: 'Geisha limited edition dressing gown',
      fi: 'Geisha-aamutakki, limited edition',
    },
  },
  {
    img: 'prod-sk-outlet-remix-salmiakki',
    alt: {
      en: 'Fazer Remix salmiakki and chocolate sweet bag, 300 g',
      fi: 'Fazer Remix salmiakki ja suklaa -karkkipussi, 300 g',
    },
  },
]

const COPY: Record<'en' | 'fi', { eyebrow: string; headline: string; sub: string; cta: string }> = {
  en: {
    eyebrow: 'Suomikauppa offers',
    headline: 'The Finnish shelf, marked down',
    sub: 'Suomikauppa keeps a standing offers section, several hundred products deep, and it is where the Fazer shelf usually ends up. Worth checking before you pay full price for the same bar somewhere else.',
    cta: 'See the offers',
  },
  fi: {
    eyebrow: 'Suomikaupan tarjoukset',
    headline: 'Suomalainen hylly alennuksessa',
    sub: 'Suomikaupalla on pysyvä tarjousosio, jossa on satoja tuotteita, ja sinne Fazerin hylly yleensä päätyy. Kannattaa vilkaista ennen kuin maksaa samasta levystä täyden hinnan muualla.',
    cta: 'Katso tarjoukset',
  },
}

export default function SuomikauppaOutletAd({ lang }: { lang: Lang }) {
  const l: 'en' | 'fi' = lang === 'fi' ? 'fi' : 'en'
  const copy = COPY[l]

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="relative overflow-hidden rounded-3xl bg-card ring-1 ring-line">
        <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-amber">
              {copy.eyebrow}
            </p>
            <h2 className="font-heading text-2xl leading-tight tracking-wide sm:text-3xl">
              {copy.headline}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              {copy.sub}
            </p>
            <a
              href={HREF}
              target="_blank"
              rel={AFFILIATE_REL}
              onClick={() => trackAffiliateClick('suomikauppa', `ad_unit:${SID}`, HREF)}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#063092] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#04205f]"
            >
              {copy.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="relative flex items-center justify-center gap-3 bg-sand-deep p-6 sm:gap-4 sm:p-8">
            {SHOTS.map((s) => (
              <div
                key={s.img}
                className="w-1/3 overflow-hidden rounded-2xl bg-white p-2 shadow-sm ring-1 ring-line"
              >
                {/* 🔴 srcSet tulee jaetusta `imgSrcSet`-apurista eikä käsin
                    kirjoitettuna. Ensimmäinen versio latoi leveydet itse ja
                    jätti `sizes`in pois, jolloin kortti ei noudattanut samaa
                    kuvasopimusta kuin sivuston muut kortit ja olisi ajautunut
                    erilleen heti kun manifestin leveydet muuttuvat. Apuri lukee
                    leveydet IMAGE_VARIANTSista, joten kuva ei voi pyytää
                    varianttia jota ei ole. */}
                <picture>
                  <source type="image/avif" srcSet={imgSrcSet(s.img, 'avif')} sizes={SHOT_SIZES} />
                  <img
                    src={`/images/${s.img}.webp`}
                    srcSet={imgSrcSet(s.img, 'webp')}
                    sizes={SHOT_SIZES}
                    alt={s.alt[l]}
                    width={320}
                    height={320}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-contain"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>

        <span className="absolute bottom-3 right-4 rounded-full bg-night/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
          {l === 'fi' ? 'Mainos' : 'Ad'}
        </span>
      </div>
    </div>
  )
}
