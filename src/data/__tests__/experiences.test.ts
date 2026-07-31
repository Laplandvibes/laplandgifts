import { describe, it, expect } from 'vitest'
import { GIFT_EXPERIENCES } from '../experiences'
import {
  HUB_PICKS,
  HUSKY_PICKS,
  CHRISTMAS_PICKS,
  ACTIVITIES_PICKS,
  KIDS_PICKS,
  SNOWMOBILE_PICKS,
  TOURS_PICKS,
  VISIT_PICKS,
  NATURE_PICKS,
  WELLNESS_PICKS,
} from '../../../../shared/gyg/picks'

const VERIFIED_PATHS = new Set(
  [
    HUB_PICKS,
    HUSKY_PICKS,
    CHRISTMAS_PICKS,
    ACTIVITIES_PICKS,
    KIDS_PICKS,
    SNOWMOBILE_PICKS,
    TOURS_PICKS,
    VISIT_PICKS,
    NATURE_PICKS,
    WELLNESS_PICKS,
  ].flatMap((list) => list.map((p) => p.path))
)

describe('elämyslahjat', () => {
  /**
   * Tämä on tehtävän ainoa oikea suoja. Väärä GYG-ID ei palauta 404:ää vaan
   * tarjoilee hiljaa väärän kohteen toisesta maasta, joten polkua ei saa
   * kirjoittaa käsin: jokaisen rivin on tultava picks.ts:n jo selaimessa
   * verifioidusta listasta.
   */
  it('jokainen polku on peräisin picks.ts:n verifioiduista listoista', () => {
    for (const p of GIFT_EXPERIENCES) {
      expect(VERIFIED_PATHS.has(p.path), `${p.path} ei ole picks.ts:ssä`).toBe(true)
    }
  })

  it('listassa on rivejä eikä sama elämys toistu', () => {
    expect(GIFT_EXPERIENCES.length).toBeGreaterThan(0)
    const paths = GIFT_EXPERIENCES.map((p) => p.path)
    expect(new Set(paths).size).toBe(paths.length)
  })

  it('sid on snake_case eikä sisällä domainia', () => {
    for (const p of GIFT_EXPERIENCES) {
      expect(p.sid, p.path).toMatch(/^[a-z0-9]+(_[a-z0-9]+)*$/)
    }
  })
})
