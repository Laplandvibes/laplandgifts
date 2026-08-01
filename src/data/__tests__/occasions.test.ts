import { describe, it, expect } from 'vitest'
import { OCCASION_PICKS, productsForOccasion } from '../occasions'
import { PRODUCTS } from '../products'
import en from '../../locales/copy.en'

describe('lahjaoppaan tilaisuudet', () => {
  it('jokainen poiminta osoittaa olemassa olevaan tuotteeseen', () => {
    const known = new Set(PRODUCTS.map((p) => p.slug))
    for (const [i, slugs] of OCCASION_PICKS.entries()) {
      for (const slug of slugs) {
        expect(known.has(slug), `tilaisuus ${i}: tuntematon slug ${slug}`).toBe(true)
      }
    }
  })

  it('poimintalista on yhtä pitkä kuin copyn tilaisuuslista', () => {
    // Indeksi on ainoa side copyn ja poimintojen välillä: jos joku lisää
    // tilaisuuden vain toiseen paikkaan, kortit menevät väärän otsikon alle.
    expect(OCCASION_PICKS.length).toBe(en.giftGuide.occasions.length)
  })

  it('tilaisuuden sisällä ei ole samaa tuotetta kahdesti', () => {
    for (const [i, slugs] of OCCASION_PICKS.entries()) {
      expect(new Set(slugs).size, `tilaisuus ${i} sisältää duplikaatin`).toBe(slugs.length)
    }
  })

  it('productsForOccasion palauttaa tuotteet poimintajärjestyksessä', () => {
    for (const [i, slugs] of OCCASION_PICKS.entries()) {
      expect(productsForOccasion(i).map((p) => p.slug)).toEqual(slugs)
    }
  })

  it('tuntematon indeksi palauttaa tyhjän listan eikä kaada sivua', () => {
    expect(productsForOccasion(999)).toEqual([])
  })

  /**
   * 🔴 Monipuolisuusportti, sama kuin kategorioilla (catalog.test.ts). Ennen
   * 1.8. yrityslahjat oli neljä tuotetta joista kaksi samaa Marttiinin puukkoa
   * ja häät kolme tuotetta joista kaikki Muumi-sarjaa: lahjaopas näytti siltä
   * että hyllyllä on kolme tavaraa. Katalogissa on 45 tuotetta, joten kapea
   * lista on valinnan vika eikä valikoiman.
   */
  it('jokaisella tilaisuudella on vähintään viisi ehdotusta', () => {
    for (const [i, slugs] of OCCASION_PICKS.entries()) {
      expect(slugs.length, `tilaisuus ${i}`).toBeGreaterThanOrEqual(5)
    }
  })

  it('yksikään valmistaja ei täytä tilaisuutta (enintään kaksi tuotetta)', () => {
    for (const [i, slugs] of OCCASION_PICKS.entries()) {
      const counts = new Map<string, number>()
      for (const slug of slugs) {
        const brand = PRODUCTS.find((p) => p.slug === slug)?.brand ?? slug
        counts.set(brand, (counts.get(brand) ?? 0) + 1)
      }
      for (const [brand, n] of counts) {
        expect(n, `tilaisuus ${i}: ${brand} on ${n} tuotteella`).toBeLessThanOrEqual(2)
      }
    }
  })

  /**
   * Valmistajien määrä eikä kategorioiden: häälahja on luonnostaan kodin
   * esineitä (design + käsityöt), joten kategoriaportti pakottaisi listalle
   * tekopyhän marjajauheen. Eri valmistajien määrä mittaa saman asian
   * kaatamatta tilaisuutta, jonka luonne on kapea.
   */
  it('jokainen tilaisuus esittelee vähintään neljää eri valmistajaa', () => {
    for (const [i, slugs] of OCCASION_PICKS.entries()) {
      const brands = new Set(slugs.map((s) => PRODUCTS.find((p) => p.slug === s)?.brand))
      expect(brands.size, `tilaisuus ${i}: vain ${[...brands].join(', ')}`).toBeGreaterThanOrEqual(4)
    }
  })
})
