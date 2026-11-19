import { describe, expect, it } from 'vitest'
import { sidoYhdysmerkki } from '../nimiRivitys'

const WJ = '\u2060'

describe('sidoYhdysmerkki', () => {
  it('lisää sanaliitoksen sanaa aloittavan yhdysmerkin perään', () => {
    expect(sidoYhdysmerkki('Sisu Kaamos -suolalakritsipastilli 80 g')).toBe(`Sisu Kaamos -${WJ}suolalakritsipastilli 80 g`)
  })

  it('käsittelee useamman osan', () => {
    expect(sidoYhdysmerkki('Arabia Muumi Ystävät ikuisesti -muki ja -lautanen, 2 osaa')).toBe(
      `Arabia Muumi Ystävät ikuisesti -${WJ}muki ja -${WJ}lautanen, 2 osaa`,
    )
  })

  it('näkyvä teksti ei muutu', () => {
    const s = 'Hattivatit Celebration -aktiivisukat, naisten'
    expect(sidoYhdysmerkki(s).replaceAll(WJ, '')).toBe(s)
  })

  it('ei koske sanan sisäiseen yhdysmerkkiin eikä nimeen ilman sitä', () => {
    expect(sidoYhdysmerkki('Fiskars Niiskuneiti-lastensakset 13 cm')).toBe('Fiskars Niiskuneiti-lastensakset 13 cm')
    expect(sidoYhdysmerkki('Karl Fazer milk chocolate 180 g')).toBe('Karl Fazer milk chocolate 180 g')
    expect(sidoYhdysmerkki('EU 36 - 42')).toBe('EU 36 - 42')
  })
})
