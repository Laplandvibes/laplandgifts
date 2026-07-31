import { describe, it, expect } from 'vitest'
import { shipsTo, EU_COUNTRIES } from '../shipping'

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
})
