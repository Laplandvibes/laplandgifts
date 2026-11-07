import { describe, expect, it } from 'vitest'
import { PRODUCTS } from '../products'
import { PARTNERS } from '../partners'
import { FINLAND_FAN_SLUGS } from '../../components/FinlandFans'

describe('etusivun Suomi-fanituotteet', () => {
  it('kaistalla on tuotteita ja täysiä neljän rivejä', () => {
    expect(FINLAND_FAN_SLUGS.length).toBeGreaterThan(0)
    expect(FINLAND_FAN_SLUGS.length % 4).toBe(0)
  })

  it('ingressin "toimittaa myös ulkomaille" pitää paikkansa jokaisesta tuotteesta', () => {
    // FINLAND_FAN_COPY sanoo kaikkien tulevan Suomikaupasta, joka toimittaa ulkomaille.
    for (const slug of FINLAND_FAN_SLUGS) {
      const p = PRODUCTS.find((x) => x.slug === slug)!
      expect(p.partnerId, slug).toBe('suomikauppa')
      expect(PARTNERS[p.partnerId].shipsTo, slug).toBe('worldwide')
    }
  })
})
