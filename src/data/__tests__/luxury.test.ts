import { describe, expect, it } from 'vitest'
import { PRODUCTS } from '../products'
import { PARTNERS } from '../partners'
import { LUXURY_MIN_PRICE, LUXURY_HERO_SLUGS } from '../luxury'
import { LUXURY_COPY } from '../../locales/luxuryCopy'
import { LANG_PREFIX, type Lang } from '../../i18n/useLang'

const LANGS = Object.keys(LANG_PREFIX) as Lang[]
const rows = PRODUCTS.filter((p) => p.priceFrom >= LUXURY_MIN_PRICE)

describe('luksusvalikoima', () => {
  it('kärkitunnukset ovat olemassa ja tarpeeksi kalliita', () => {
    // 🔴 Käsin ylläpidetty slug-lista. Poistettu tuote jäisi siihen
    // roikkumaan eikä mikään muu huomaisi — sama vikamuoto kuin themes.ts.
    for (const slug of LUXURY_HERO_SLUGS) {
      const p = PRODUCTS.find((x) => x.slug === slug)
      expect(p, `tuntematon kärkislug ${slug}`).toBeTruthy()
      expect(p!.priceFrom, slug).toBeGreaterThanOrEqual(LUXURY_MIN_PRICE)
    }
  })

  it('sivulla on tarpeeksi tuotteita ollakseen olemassa', () => {
    expect(rows.length).toBeGreaterThanOrEqual(12)
  })

  it('🔴 kärki ei ole Suomeen rajattu', () => {
    // Koko sivun idea kaatuu jos kallein asia ei lähde lukijalle. Suomeen
    // rajattuja saa olla listalla, ne eivät vain johda sitä.
    for (const slug of LUXURY_HERO_SLUGS) {
      const p = PRODUCTS.find((x) => x.slug === slug)!
      expect(PARTNERS[p.partnerId].shipsTo, slug).not.toBe('fi')
    }
  })

  it('elämyksiä on tarpeeksi omaksi osiokseen', () => {
    const exp = rows.filter((p) => p.category === 'experiences')
    expect(exp.length).toBeGreaterThanOrEqual(3)
  })

  it('käännökset ovat kaikilla kielillä eikä niissä ole kiellettyjä sanoja', () => {
    const banned =
      /stunning|breathtaking|world-?class|\biconic\b|timeless|legendary|upea|henkeäsalpaav|maailmanluokan|ajaton|legendaarinen/i
    for (const lang of LANGS) {
      const c = LUXURY_COPY[lang]
      expect(c, `${lang}: LUXURY_COPY puuttuu`).toBeTruthy()
      for (const k of ['eyebrow', 'title', 'lead', 'experiencesH2', 'objectsH2', 'note'] as const) {
        // lead on funktio (n, min, max) — testataan renderöity teksti.
        const v = k === 'lead' ? c.lead(24, '80 €', '1 490 €') : c[k]
        expect(v, `${lang}/${k}`).toBeTruthy()
        expect(banned.test(v), `${lang}/${k}: kielletty sana`).toBe(false)
        expect(v.includes('—'), `${lang}/${k}: em-viiva`).toBe(false)
      }
      expect(c.count(5)).toContain('5')
    }
  })

  it('🔴 sivu ei lupaa että me myymme', () => {
    // Emme ole myyjä. `note` on ainoa paikka jossa se sanotaan, joten sen on
    // oltava jokaisella kielellä eikä vain englanniksi.
    for (const lang of LANGS) {
      expect(LUXURY_COPY[lang].note.length, `${lang}: note liian lyhyt`).toBeGreaterThan(40)
    }
  })
})
