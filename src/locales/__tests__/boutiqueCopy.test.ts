import { describe, it, expect } from 'vitest'
import { BOUTIQUE_COPY } from '../boutiqueCopy'
import { BOUTIQUES } from '../../data/boutiques'
import { LANG_PREFIX, type Lang } from '../../i18n/useLang'

const LANGS = Object.keys(LANG_PREFIX) as Lang[]

describe('putiikkikuvausten kattavuus', () => {
  it('kaikki 12 kieltä ovat mukana', () => {
    expect(Object.keys(BOUTIQUE_COPY).sort()).toEqual([...LANGS].sort())
  })

  it('jokaisella kielellä on kuvaus jokaiselle putiikille', () => {
    for (const lang of LANGS) {
      for (const b of BOUTIQUES) {
        const c = BOUTIQUE_COPY[lang][b.slug]
        expect(c, `${lang} / ${b.slug} puuttuu`).toBeDefined()
        expect(c.description.trim().length, `${lang} / ${b.slug} tyhjä`).toBeGreaterThan(20)
      }
    }
  })

  it('jokaisella putiikilla on 1-3 tuoteryhmätagia joka kielellä', () => {
    for (const lang of LANGS) {
      for (const b of BOUTIQUES) {
        const tags = BOUTIQUE_COPY[lang][b.slug].tags
        expect(tags.length, `${lang} / ${b.slug}`).toBeGreaterThanOrEqual(1)
        expect(tags.length, `${lang} / ${b.slug}`).toBeLessThanOrEqual(3)
      }
    }
  })

  it('tagien lukumäärä on sama kaikilla kielillä', () => {
    for (const b of BOUTIQUES) {
      const counts = LANGS.map((l) => BOUTIQUE_COPY[l][b.slug].tags.length)
      expect(new Set(counts).size, `${b.slug}: ${counts.join(',')}`).toBe(1)
    }
  })

  it('kuvauksissa ei ole em-viivoja', () => {
    for (const lang of LANGS) {
      for (const b of BOUTIQUES) {
        expect(BOUTIQUE_COPY[lang][b.slug].description, `${lang} / ${b.slug}`).not.toContain('—')
      }
    }
  })

  it('lähteen vuosiluvut säilyvät käännöksessä', () => {
    // Numerofragmentit kopioidaan lähteestä. "vuodesta 1924" ei saa muuttua
    // muotoon "yli sata vuotta": luku on tarkistettavissa oleva fakta.
    const withYears: Record<string, string> = {
      'lauri-handicrafts': '1924',
      'marttiini': '1928',
      'pentik': '1971',
    }
    for (const [slug, year] of Object.entries(withYears)) {
      for (const lang of LANGS) {
        expect(BOUTIQUE_COPY[lang][slug].description, `${lang} / ${slug}`).toContain(year)
      }
    }
  })

  it('ei ylimääräisiä slugeja jotka eivät vastaa yhtään putiikkia', () => {
    // Vahtii myös sitä, etteivät poistetut putiikit (lapin-kelloseppa,
    // arctic-design-shop, taigakoru) palaa käännöstiedostojen kautta.
    const known = new Set(BOUTIQUES.map((b) => b.slug))
    for (const lang of LANGS) {
      for (const slug of Object.keys(BOUTIQUE_COPY[lang])) {
        expect(known.has(slug), `${lang}: tuntematon slug ${slug}`).toBe(true)
      }
    }
  })
})
