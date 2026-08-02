import type { Lang } from '../../i18n/useLang'
import type { Product } from '../../data/types'

/**
 * Tuotteiden käännökset.
 *
 * 🔴 Miksi omassa tiedostossaan eikä `products.ts`:ssä (2.8.2026):
 * `products.ts` on jo 2 900 riviä 56 tuotteella. Jos jokaisen tuotteen nimi,
 * kuvaus ja spec-rivit kirjoitettaisiin siihen kahdellatoista kielellä, tiedosto
 * kasvaisi yli 30 000 riviin ja tuotteen tosiasiat (hinta, URL, toimitusalue)
 * hukkuisivat käännösten sekaan. Lähdedata pysyy siis yhdessä paikassa ja
 * käännökset omissaan, samalla tavalla kuin sivuston muu copy
 * (`copy.<lang>.ts`).
 *
 * Rakenne: kieli → tuotteen slug → { name, description, specs }.
 *
 * `specs` on POSITIONAALINEN taulukko, joka vastaa `product.details.specs`
 * -taulukon järjestystä. Se on tietoinen kompromissi: avaimet eivät ole
 * uniikkeja (samalla tuotteella voi olla monta `other`-riviä), joten
 * indeksi on ainoa vakaa tunniste. Riski on että spec-rivien järjestys
 * muuttuu ja käännökset menevät väärille riveille — siksi
 * `productCopy.test.ts` vaatii että taulukon pituus täsmää lähdedataan.
 * Jos lisäät spec-rivin, lisää se KAIKKIIN kieliin samaan kohtaan.
 */
export interface ProductCopy {
  name: string
  description: string
  /** Spec-rivien arvot lähdedatan järjestyksessä. */
  specs?: string[]
  /** Spec-rivien omat otsikot, vain `other`-tyyppisillä riveillä. */
  specLabels?: (string | undefined)[]
}

export type ProductCopyMap = Record<string, ProductCopy>

import { PRODUCT_COPY_DE } from './de'
import { PRODUCT_COPY_SV } from './sv'
import { PRODUCT_COPY_FR } from './fr'

/**
 * Kielet joille käännökset on tehty. Puuttuva kieli ei ole virhe: se putoaa
 * englantiin, mikä on sama kuin ennen tätä tiedostoa. Kääntämätön kieli näkyy
 * `productCopy.test.ts`:n raportissa, joten aukko ei jää huomaamatta.
 */
export const PRODUCT_COPY: Partial<Record<Lang, ProductCopyMap>> = {
  de: PRODUCT_COPY_DE,
  sv: PRODUCT_COPY_SV,
  fr: PRODUCT_COPY_FR,
}

/**
 * Tuotteen nimi pyydetyllä kielellä.
 *
 * Järjestys: suomi omasta kentästään, muut käännöstiedostosta, muuten
 * englanti. Englanti on tarkoituksellinen viimeinen vaihtoehto eikä
 * virhetilanne — puolikas käännös on lukijalle pahempi kuin johdonmukainen
 * englanti.
 */
export function productName(p: Product, lang: Lang): string {
  if (lang === 'fi') return p.name.fi
  return PRODUCT_COPY[lang]?.[p.slug]?.name ?? p.name.en
}

export function productDescription(p: Product, lang: Lang): string {
  if (lang === 'fi') return p.description.fi
  return PRODUCT_COPY[lang]?.[p.slug]?.description ?? p.description.en
}

/** Spec-rivin arvo. `i` on rivin indeksi `product.details.specs`-taulukossa. */
export function specValue(p: Product, i: number, lang: Lang): string {
  const src = p.details?.specs[i]
  if (!src) return ''
  if (lang === 'fi') return src.value.fi
  return PRODUCT_COPY[lang]?.[p.slug]?.specs?.[i] ?? src.value.en
}

/** Spec-rivin oma otsikko (vain `other`-riveillä). */
export function specLabel(p: Product, i: number, lang: Lang): string | undefined {
  const src = p.details?.specs[i]
  if (!src?.label) return undefined
  if (lang === 'fi') return src.label.fi
  return PRODUCT_COPY[lang]?.[p.slug]?.specLabels?.[i] ?? src.label.en
}

/** Kielet joilla on käännöstiedosto. Testin ja raportoinnin käyttöön. */
export const TRANSLATED_LANGS = Object.keys(PRODUCT_COPY) as Lang[]
