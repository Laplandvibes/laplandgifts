import { describe, it, expect } from 'vitest'
import { PRODUCTS } from '../../data/products'
import {
  PRODUCT_COPY,
  TRANSLATED_LANGS,
  productName,
  productDescription,
  specValue,
  specLabel,
} from '../productCopy'
import type { Lang } from '../../i18n/useLang'

const BY_SLUG = new Map(PRODUCTS.map((p) => [p.slug, p]))

/**
 * Numerot lähdetekstistä vertailukelpoisessa muodossa.
 *
 * 🔴 Desimaalierotin normalisoidaan pisteeksi, koska useimmat kielet
 * kirjoittavat lähdedatan "0.3 l" muodossa "0,3 l". Se on oikea käännös eikä
 * numeron muuttamista, joten testi ei saa kaatua siihen. Sen sijaan
 * "neljään suuntaan" lähteen "4 directions" tilalla kaatuu, ja juuri se on
 * tämän vahdin tarkoitus: tuotetiedon luku on kumppanin ilmoittama arvo,
 * ei tyylikysymys.
 */
function numbers(text: string): Set<string> {
  const out = new Set<string>()
  for (const raw of text.match(/\d[\d.,]*/g) ?? []) {
    out.add(raw.replace(/[.,]+$/, '').replace(/,/g, '.'))
  }
  return out
}

describe('tuotekäännösten rakenne', () => {
  it('jokainen käännetty slug löytyy katalogista', () => {
    for (const lang of TRANSLATED_LANGS) {
      for (const slug of Object.keys(PRODUCT_COPY[lang]!)) {
        expect(BY_SLUG.has(slug), `${lang}: tuntematon slug ${slug}`).toBe(true)
      }
    }
  })

  it('specs-taulukon pituus täsmää lähdedataan', () => {
    for (const lang of TRANSLATED_LANGS) {
      for (const [slug, copy] of Object.entries(PRODUCT_COPY[lang]!)) {
        if (!copy.specs) continue
        const src = BY_SLUG.get(slug)?.details?.specs ?? []
        expect(copy.specs.length, `${lang}/${slug}: spec-rivien määrä`).toBe(src.length)
      }
    }
  })

  /**
   * `specs` on positionaalinen, joten väärä pituus ei ole ainoa riski: rivi voi
   * olla oikeassa kohdassa mutta väärän tyyppinen. `specLabels` paljastaa sen,
   * koska oma otsikko on vain `other`-riveillä. Jos käännöksessä on otsikko
   * kohdassa jossa lähteessä ei ole, rivit ovat liukuneet.
   */
  it('specLabels on määritelty täsmälleen niillä riveillä joilla lähteessäkin', () => {
    for (const lang of TRANSLATED_LANGS) {
      for (const [slug, copy] of Object.entries(PRODUCT_COPY[lang]!)) {
        if (!copy.specLabels) continue
        const src = BY_SLUG.get(slug)?.details?.specs ?? []
        expect(copy.specLabels.length, `${lang}/${slug}: specLabels-pituus`).toBe(src.length)
        src.forEach((s, i) => {
          const has = copy.specLabels![i] !== undefined
          expect(has, `${lang}/${slug} rivi ${i}: otsikko ${has ? 'ylimääräinen' : 'puuttuu'}`).toBe(
            Boolean(s.label),
          )
        })
      }
    }
  })

  it('käännös ei ole tyhjä', () => {
    for (const lang of TRANSLATED_LANGS) {
      for (const [slug, copy] of Object.entries(PRODUCT_COPY[lang]!)) {
        expect(copy.name.trim().length, `${lang}/${slug}: tyhjä nimi`).toBeGreaterThan(0)
        expect(copy.description.trim().length, `${lang}/${slug}: tyhjä kuvaus`).toBeGreaterThan(0)
        for (const [i, v] of (copy.specs ?? []).entries()) {
          expect(v.trim().length, `${lang}/${slug} rivi ${i}: tyhjä arvo`).toBeGreaterThan(0)
        }
      }
    }
  })
})

describe('tuotekäännösten sisältö', () => {
  /**
   * 🔴 Lukuja, mittayksiköiden lukuarvoja, tuotekoodeja ja EAN-numeroita ei
   * käännetä. Ne ovat kumppanin ilmoittamia arvoja, ja väärä luku
   * tuotetiedoissa on virheellistä tuotetietoa, ei tyylivirhe.
   */
  it('spec-rivin luvut säilyvät käännöksessä', () => {
    for (const lang of TRANSLATED_LANGS) {
      for (const [slug, copy] of Object.entries(PRODUCT_COPY[lang]!)) {
        const src = BY_SLUG.get(slug)?.details?.specs ?? []
        ;(copy.specs ?? []).forEach((value, i) => {
          const want = numbers(src[i]?.value.en ?? '')
          const got = numbers(value)
          for (const n of want) {
            expect(got.has(n), `${lang}/${slug} rivi ${i}: luku ${n} puuttuu käännöksestä "${value}"`).toBe(true)
          }
        })
      }
    }
  })

  /** Sama sääntö kuin catalog.test.ts:ssä: ei em-viivoja eikä kiellettyjä sanoja. */
  it('ei em-viivoja eikä kiellettyjä sanoja', () => {
    const banned = /stunning|breathtaking|world-class|magical/i
    for (const lang of TRANSLATED_LANGS) {
      for (const [slug, copy] of Object.entries(PRODUCT_COPY[lang]!)) {
        for (const text of [copy.name, copy.description, ...(copy.specs ?? [])]) {
          expect(text.includes('—'), `${lang}/${slug}: em-viiva copyssa`).toBe(false)
          expect(banned.test(text), `${lang}/${slug}: kielletty sana`).toBe(false)
        }
      }
    }
  })
})

describe('tuotekäännösten kattavuus', () => {
  /**
   * Sivusto on 12 kielellä. Suomi ja englanti tulevat suoraan `products.ts`:stä,
   * loput kymmenen tästä hakemistosta. Puuttuva tuote putoaisi englantiin
   * huomaamatta, joten aukko on virhe eikä huomautus.
   */
  const EXPECTED: Lang[] = ['de', 'sv', 'fr', 'es', 'it', 'nl', 'pt-BR', 'ja', 'zh-CN', 'ko']

  it('kaikki kymmenen kieltä on rekisteröity', () => {
    expect([...TRANSLATED_LANGS].sort()).toEqual([...EXPECTED].sort())
  })

  it.each(EXPECTED)('%s kattaa kaikki tuotteet', (lang) => {
    const map = PRODUCT_COPY[lang] ?? {}
    const missing = PRODUCTS.filter((p) => !map[p.slug]).map((p) => p.slug)
    expect(missing, `${lang}: ${missing.length}/${PRODUCTS.length} tuotetta kääntämättä`).toEqual([])
  })

  it.each(EXPECTED)('%s kääntää jokaisen spec-rivin', (lang) => {
    const map = PRODUCT_COPY[lang] ?? {}
    const gaps: string[] = []
    for (const p of PRODUCTS) {
      const src = p.details?.specs ?? []
      if (!src.length) continue
      if (!map[p.slug]?.specs) gaps.push(p.slug)
    }
    expect(gaps, `${lang}: spec-rivit puuttuvat`).toEqual([])
  })

  /** Resolverit eivät saa kaatua eivätkä palauttaa tyhjää millään kielellä. */
  it('resolverit palauttavat tekstiä jokaisella kielellä', () => {
    const langs: Lang[] = ['en', 'fi', ...EXPECTED]
    for (const p of PRODUCTS) {
      for (const lang of langs) {
        expect(productName(p, lang).length, `${lang}/${p.slug}: nimi`).toBeGreaterThan(0)
        expect(productDescription(p, lang).length, `${lang}/${p.slug}: kuvaus`).toBeGreaterThan(0)
        ;(p.details?.specs ?? []).forEach((s, i) => {
          expect(specValue(p, i, lang).length, `${lang}/${p.slug} rivi ${i}`).toBeGreaterThan(0)
          if (s.label) {
            expect(specLabel(p, i, lang)?.length, `${lang}/${p.slug} rivi ${i}: otsikko`).toBeGreaterThan(0)
          }
        })
      }
    }
  })
})
