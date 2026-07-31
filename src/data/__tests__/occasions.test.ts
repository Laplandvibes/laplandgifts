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
})
