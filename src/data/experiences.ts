import { HUB_PICKS, CHRISTMAS_PICKS, HUSKY_PICKS, type GygPick } from '../../../shared/gyg/picks'

/**
 * Lahjaksi ostettavat elämykset. Rivit on poimittu verkoston jo verifioidusta
 * picks.ts:stä, ei katalogista eikä käsin: väärä GYG-ID palauttaa 200 ja
 * näyttää väärän kohteen toisesta maasta (mitattu 29.7.: `lapland-l4404`
 * renderöi Parc des Princes'in Pariisissa).
 *
 * 🔴 Rivit otetaan viittauksena, ei kopioimalla polkuja tähän tiedostoon.
 * Silloin polkua ei voi kirjoittaa väärin, ja kun picks.ts:n rivi korjataan
 * verkoston auditissa, korjaus tulee tänne ilman erillistä muistamista.
 *
 * Elämyksillä on eri muoto kuin fyysisillä tuotteilla (ei kumppanikauppaa
 * eikä toimitusaluetta, vaan varattava aktiviteetti), joten ne eivät ole
 * PRODUCTS-listassa eivätkä Product-tyypissä.
 */
export const GIFT_EXPERIENCES: GygPick[] = [
  ...HUB_PICKS.slice(0, 4),
  ...HUSKY_PICKS.slice(0, 2),
  ...CHRISTMAS_PICKS.slice(0, 2),
].map((p) => ({ ...p, sid: 'gifts_experience_card' }))
