import { describe, it, expect } from 'vitest'
import { shipsTo, mergeExcept, EU_COUNTRIES } from '../shipping'

describe('shipsTo', () => {
  it('worldwide toimittaa kaikkialle', () => {
    expect(shipsTo('worldwide', 'US')).toBe(true)
    expect(shipsTo('worldwide', 'JP')).toBe(true)
    expect(shipsTo('worldwide', 'FI')).toBe(true)
  })

  it('eu toimittaa EU-maihin muttei niiden ulkopuolelle', () => {
    expect(shipsTo('eu', 'DE')).toBe(true)
    expect(shipsTo('eu', 'FI')).toBe(true)
    expect(shipsTo('eu', 'US')).toBe(false)
    expect(shipsTo('eu', 'GB')).toBe(false)
  })

  it('fi toimittaa vain Suomeen', () => {
    expect(shipsTo('fi', 'FI')).toBe(true)
    expect(shipsTo('fi', 'SE')).toBe(false)
  })

  it('EU-lista sisältaa 27 maata eikä Britanniaa', () => {
    expect(EU_COUNTRIES.length).toBe(27)
    expect(EU_COUNTRIES).not.toContain('GB')
  })

  /**
   * Poikkeus voittaa aina vyöhykkeen. Juuri tämä sääntö tekee mahdolliseksi
   * listata Moomin Shopin elintarvikkeet: kauppa on 'worldwide', mutta niitä
   * ei saa lähettää Yhdysvaltoihin, Etelä-Amerikkaan eikä Australiaan.
   */
  it('poikkeus kumoaa worldwiden vain poikkeusmaissa', () => {
    expect(shipsTo('worldwide', 'US', ['US'])).toBe(false)
    expect(shipsTo('worldwide', 'DE', ['US'])).toBe(true)
    expect(shipsTo('worldwide', 'AU', ['US', 'AU', 'BR'])).toBe(false)
    expect(shipsTo('worldwide', 'JP', ['US', 'AU', 'BR'])).toBe(true)
  })

  it('poikkeus kumoaa myös eu:n ja fi:n', () => {
    expect(shipsTo('eu', 'MT', ['MT'])).toBe(false)
    expect(shipsTo('eu', 'DE', ['MT'])).toBe(true)
    expect(shipsTo('fi', 'FI', ['FI'])).toBe(false)
  })

  it('tyhjä poikkeuslista käyttäytyy kuin puuttuva', () => {
    expect(shipsTo('worldwide', 'US', [])).toBe(true)
    expect(shipsTo('eu', 'US', [])).toBe(false)
  })
})

describe('mergeExcept', () => {
  it('yhdistää kumppanin ja tuotteen listat eikä korvaa toista', () => {
    expect(mergeExcept(['US'], ['AU', 'BR'])).toEqual(['AU', 'BR', 'US'])
  })

  it('poistaa kaksoiskappaleet ja sietää puuttuvat listat', () => {
    expect(mergeExcept(['US'], ['US'])).toEqual(['US'])
    expect(mergeExcept(undefined, ['US'])).toEqual(['US'])
    expect(mergeExcept(['US'], undefined)).toEqual(['US'])
    expect(mergeExcept(undefined, undefined)).toEqual([])
  })

  it('yhdistetty lista kelpaa suoraan shipsTo:lle', () => {
    const except = mergeExcept(['US'], ['AU'])
    expect(shipsTo('worldwide', 'US', except)).toBe(false)
    expect(shipsTo('worldwide', 'AU', except)).toBe(false)
    expect(shipsTo('worldwide', 'CA', except)).toBe(true)
  })
})
