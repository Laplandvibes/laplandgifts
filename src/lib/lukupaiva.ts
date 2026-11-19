import type { Lang } from '../i18n/useLang'

/**
 * Lukupäivä ("Hinta luettu … sivulta 19.11.2026") lukijan kielellä.
 *
 * Tuotesivu tulosti `priceCheckedAt`- ja `fetchedAt`-arvot sellaisinaan (2026-08-03) kaikilla 12 kielellä
 * (Vesa 19.11.2026: "korjaa sitten"). Suomi ja saksa numeroina (19.11.2026), muut kuukauden nimellä,
 * koska esim. ruotsin numeromuoto on ISO-päivä ja englannin numeromuoto on epäselvä (11/19 vai 19/11).
 * Laskenta UTC:ssä, ettei aikavyöhyke siirrä päivää esirenderöinnissä.
 */
const PAIKALLINEN: Record<Lang, string> = {
  en: 'en-GB',
  fi: 'fi-FI',
  de: 'de-DE',
  ja: 'ja-JP',
  es: 'es-ES',
  'pt-BR': 'pt-BR',
  'zh-CN': 'zh-CN',
  ko: 'ko-KR',
  fr: 'fr-FR',
  it: 'it-IT',
  nl: 'nl-NL',
  sv: 'sv-SE',
}

const NUMEROINA: ReadonlySet<Lang> = new Set<Lang>(['fi', 'de'])

export function lukupaiva(iso: string, lang: Lang): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!m) return iso
  const [v, kk, pv] = [Number(m[1]), Number(m[2]), Number(m[3])]
  if (NUMEROINA.has(lang)) return `${pv}.${kk}.${v}`
  return new Intl.DateTimeFormat(PAIKALLINEN[lang] ?? 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(v, kk - 1, pv)))
}
