import { HUB_PICKS, CHRISTMAS_PICKS, type GygPick } from '../../../shared/gyg/picks'

/**
 * Lahjaksi ostettavat elämykset. Rivit poimitaan verkoston jo verifioidusta
 * picks.ts:stä, ei katalogista eikä käsin: väärä GYG-ID palauttaa 200 ja
 * näyttää väärän kohteen toisesta maasta (mitattu 29.7.: `lapland-l4404`
 * renderöi Parc des Princes'in Pariisissa).
 *
 * 🔴 Rivit haetaan OTSIKON perusteella, ei indeksillä. Indeksi näyttää
 * toimivan mutta osoittaa hiljaa eri retkeen heti kun joku lisää tai poistaa
 * rivin picks.ts:stä. `pick()` kaatuu jos osumaa ei ole, jolloin virhe näkyy
 * buildissa eikä asiakkaalle.
 *
 * Valikoima on tarkoituksella monipuolinen. Aiemmin kahdeksasta kolme oli
 * husky-ajelua, jolloin sivu näytti toistavan itseään (Vesa 1.8.).
 *
 * Elämyksillä on eri muoto kuin fyysisillä tuotteilla (ei kumppanikauppaa
 * eikä toimitusaluetta, vaan varattava aktiviteetti), joten ne eivät ole
 * PRODUCTS-listassa eivätkä Product-tyypissä.
 */
export interface GiftExperience extends GygPick {
  /** Kuvatiedoston runko public/images/:ssä, ilman leveyttä ja päätettä. */
  image: string
}

function pick(pool: GygPick[], titleFragment: string): GygPick {
  const hit = pool.find((p) => p.title.toLowerCase().includes(titleFragment.toLowerCase()))
  if (!hit) {
    throw new Error(
      `GIFT_EXPERIENCES: picks.ts:stä ei löydy retkeä jonka otsikossa on "${titleFragment}". ` +
        'Rivi on poistettu tai nimetty uudelleen. Korjaa hakusana, älä arvaa polkua.',
    )
  }
  return hit
}

const SELECTION: Array<[GygPick, string]> = [
  [pick(HUB_PICKS, 'Northern Lights Tour'), 'exp-aurora'],
  [pick(HUB_PICKS, 'Icebreaker'), 'exp-icebreaker'],
  [pick(HUB_PICKS, 'Husky Sledding'), 'exp-husky'],
  [pick(HUB_PICKS, 'Korouoma'), 'exp-korouoma'],
  [pick(CHRISTMAS_PICKS, 'SnowHotel'), 'exp-snowhotel'],
  [pick(CHRISTMAS_PICKS, 'Santa Claus Village'), 'exp-santavillage'],
  [pick(CHRISTMAS_PICKS, 'Reindeer Sledding'), 'exp-reindeer'],
  [pick(CHRISTMAS_PICKS, 'Snowmobile'), 'exp-snowmobile'],
]

export const GIFT_EXPERIENCES: GiftExperience[] = SELECTION.map(([p, image]) => ({
  ...p,
  image,
  sid: 'gifts_experience_card',
}))
