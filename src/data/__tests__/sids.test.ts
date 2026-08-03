import { describe, expect, it } from 'vitest'
import { PRODUCTS } from '../products'

/**
 * Ostonapin sid on `p_<slug>` (Product.tsx). Redirect-Worker rakentaa
 * raportointitunnisteen `(domain + '_' + sid).slice(0, 50)` — katkaisu on
 * Workerin, ei meidän. Weddings-sivustolla 2.8.2026 vastaava katkaisu
 * SULAUTTI kolme eri hotellia yhdeksi ali-ID:ksi: raportti ei lyhentynyt
 * vaan yhdistyi, eikä sitä huomaa linkeistä eikä klikeistä. Siksi
 * uniikkius tarkistetaan katkaisun JÄLKEEN, ei ennen sitä.
 */
const WORKER_PREFIX = 'laplandgifts_com_'
const WORKER_SID_MAX = 50

describe('ostonapin sid-tunnisteet', () => {
  it('tuotteiden sidit ovat uniikkeja myös Workerin 50 merkin katkaisun jälkeen', () => {
    const seen = new Map<string, string>()
    for (const p of PRODUCTS) {
      const tagged = `${WORKER_PREFIX}p_${p.slug}`.slice(0, WORKER_SID_MAX)
      const clash = seen.get(tagged)
      expect(
        clash,
        `${p.slug} ja ${clash} sulautuvat samaksi tunnisteeksi "${tagged}" — lyhennä slugia`,
      ).toBeUndefined()
      seen.set(tagged, p.slug)
    }
  })
})
