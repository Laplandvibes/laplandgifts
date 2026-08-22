import {
  HUB_PICKS,
  CHRISTMAS_PICKS,
  HUSKY_PICKS,
  ACTIVITIES_PICKS,
  SNOWMOBILE_PICKS,
  NATURE_PICKS,
  VISIT_PICKS,
  WELLNESS_PICKS,
  KIDS_PICKS,
  TOURS_PICKS,
  type GygPick,
} from '../shared/gyg/picks'

/**
 * Lahjaksi ostettavat elämykset.
 *
 * Rivit poimitaan verkoston jo verifioidusta `picks.ts`:stä, ei katalogista
 * eikä käsin: väärä GYG-ID palauttaa 200 ja näyttää väärän kohteen toisesta
 * maasta (mitattu 29.7.: `lapland-l4404` renderöi Parc des Princes'in
 * Pariisissa).
 *
 * 🔴 Rivit haetaan OTSIKON perusteella, ei indeksillä. Indeksi näyttää
 * toimivan mutta osoittaa hiljaa eri retkeen heti kun joku lisää tai poistaa
 * rivin picks.ts:stä. `pick()` kaatuu jos osumaa ei ole, jolloin virhe näkyy
 * buildissa eikä asiakkaalle.
 *
 * ── UUDISTETTU 2.8.2026 (Vesa) ───────────────────────────────────────────
 *
 * Vesa: "tekstit näissä korteissa on todella epäselvät ja ei ammattimaisen
 * näköiset", "kohteista pitäisi olla enemmän", "kyllä pitää olla ihan useita
 * kymmeniä täällä ja kategorioittain".
 *
 * Kolme muutosta:
 *
 * 1. MÄÄRÄ 8 → 24. `picks.ts`:ssä oli koko ajan 40 verifioitua retkeä, joista
 *    käytimme kahdeksaa.
 *
 * 2. OMA NIMI. Kortissa luki GetYourGuiden englanninkielinen myyntiotsikko
 *    ("Northern Lights Tour with Guaranteed Sightings") myös suomenkielisellä
 *    sivulla. Jokaisella elämyksellä on nyt oma lyhyt nimi kummallakin
 *    kielellä. Nimi kuvaa retkeä eikä väitä olevansa GYG:n otsikko; linkki
 *    vie samaan retkeen kuin ennenkin.
 *
 * 3. RYHMÄT. Kortit olivat yhtenä listana. Nyt ne ovat kahdeksassa ryhmässä,
 *    joten lahjan etsijä löytää sen mitä hakee.
 *
 * 🔴 EI MUKANA: ruokailut sekä taide ja kulttuuri. Vesa pyysi nekin, mutta
 * `picks.ts`:ssä ei ole niistä yhtään verifioitua riviä, eikä GYG-polkua saa
 * arvata — väärä ID vie hiljaa väärään kaupunkiin. Ne vaativat oman
 * verifiointikierroksen GetYourGuideen.
 */

export type ExperienceGroup =
  | 'aurora'
  | 'husky'
  | 'reindeer'
  | 'snowmobile'
  | 'nature'
  | 'sauna'
  | 'santa'
  | 'kids'

export interface GiftExperience extends GygPick {
  /** Kuvatiedoston runko public/images/:ssä, ilman leveyttä ja päätettä. */
  image: string
  group: ExperienceGroup
  /** Oma lyhyt nimi. GYG:n otsikko on englanninkielinen myyntiteksti. */
  name: { en: string; fi: string }
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

type Row = [GygPick, string, ExperienceGroup, string, string]

const SELECTION: Row[] = [
  // ── Revontulet ────────────────────────────────────────────────────────
  [pick(HUB_PICKS, 'Northern Lights Tour'), 'exp-aurora', 'aurora', 'Northern lights hunt with a guide', 'Revontuliretki oppaan kanssa'],
  [pick(VISIT_PICKS, 'Northern Lights Tour and Stargazing'), 'exp-aurora-telescope', 'aurora', 'Northern lights and stargazing by telescope', 'Revontulet ja tähdet kaukoputkella'],
  [pick(VISIT_PICKS, 'Auroras Northern Lights Viewing'), 'exp-aurora-photo', 'aurora', 'Aurora viewing with photos taken for you', 'Revontuliretki, jolla kuvat otetaan puolestasi'],

  // ── Husky ─────────────────────────────────────────────────────────────
  [pick(HUB_PICKS, 'Husky Sledding'), 'exp-husky', 'husky', 'Husky sled ride, 5 km', 'Huskyajelu, 5 km'],
  [pick(HUSKY_PICKS, 'self-driven'), 'exp-husky-selfdrive', 'husky', 'Drive your own husky team, 6 km', 'Aja itse huskyvaljakkoa, 6 km'],
  [pick(KIDS_PICKS, '10 km Husky Safari'), 'exp-husky-kennel', 'husky', 'Husky safari with a kennel visit', 'Huskysafari ja tarhavierailu'],

  // ── Porot ─────────────────────────────────────────────────────────────
  [pick(CHRISTMAS_PICKS, 'Reindeer Sledding'), 'exp-reindeer', 'reindeer', 'Reindeer sleigh ride under the lights', 'Poroajelu revontulien alla'],
  // 🔴 Vaihdettu 3.8.2026: monorepon picks.ts poisti Levin poroajelun t505204
  // (commit 8be874a, "kolme poroajelua yhdeksi") ja pick() kaatoi buildin.
  // Tilalle HUSKY_PICKSin Levin husky+poro-yhdistelmä t503967, jota mikään
  // muu kortti ei käytä — pororyhmän maantiede säilyy (Saariselkä/Levi/
  // Rovaniemi). Kuva exp-reindeer-forest jää: tunnelmakuvassa on poro.
  [pick(HUSKY_PICKS, 'Arctic Combo'), 'exp-reindeer-forest', 'reindeer', 'Husky and reindeer ride in one trip', 'Husky- ja poroajelu samalla retkellä'],
  [pick(ACTIVITIES_PICKS, 'Reindeer Experience with Sleigh Ride'), 'exp-reindeer-farm', 'reindeer', 'Reindeer farm visit and sleigh ride', 'Porotilavierailu ja rekiajelu'],

  // ── Moottorikelkka ────────────────────────────────────────────────────
  [pick(CHRISTMAS_PICKS, 'Snowmobile'), 'exp-snowmobile', 'snowmobile', 'Husky, reindeer and snowmobile in one day', 'Husky, poro ja kelkka samana päivänä'],
  [pick(SNOWMOBILE_PICKS, 'Snowmobile Safari on Tundra'), 'exp-snowmobile-tundra', 'snowmobile', 'Snowmobile safari across open tundra', 'Kelkkasafari avotunturissa'],
  [pick(TOURS_PICKS, 'Snowmobile Northern Lights'), 'exp-snowmobile-night', 'snowmobile', 'Snowmobile trip hunting the northern lights', 'Kelkkaretki revontulia etsimässä'],

  // ── Luonto ────────────────────────────────────────────────────────────
  [pick(HUB_PICKS, 'Korouoma'), 'exp-korouoma', 'nature', 'Frozen waterfalls of Korouoma canyon', 'Korouoman jäätyneet vesiputoukset'],
  [pick(NATURE_PICKS, 'Snowshoeing Tour in Urho Kekkonen'), 'exp-nature-snowshoe', 'nature', 'Snowshoe hike in Urho Kekkonen national park', 'Lumikenkäretki Urho Kekkosen kansallispuistossa'],
  [pick(VISIT_PICKS, 'Riisitunturi'), 'exp-nature-park', 'nature', 'Riisitunturi national park day trip', 'Päiväretki Riisitunturin kansallispuistoon'],

  // ── Sauna ja hyvinvointi ──────────────────────────────────────────────
  [pick(WELLNESS_PICKS, 'Traditional Sauna and Ice Swimming'), 'exp-sauna-icehole', 'sauna', 'Traditional sauna and an ice dip', 'Perinteinen sauna ja avanto'],
  [pick(WELLNESS_PICKS, 'smoke & ice sauna'), 'exp-sauna-smoke', 'sauna', 'Smoke sauna and ice sauna, side by side', 'Savusauna ja jääsauna vierekkäin'],
  [pick(WELLNESS_PICKS, 'Sauna, Jacuzzi & BBQ'), 'exp-sauna-jacuzzi', 'sauna', 'Sauna, hot tub and a fire under the lights', 'Sauna, palju ja nuotio revontulien alla'],

  // ── Joulupukki ────────────────────────────────────────────────────────
  [pick(CHRISTMAS_PICKS, 'Santa Claus Village'), 'exp-santavillage', 'santa', 'Santa Claus Village visit', 'Vierailu Joulupukin Pajakylässä'],
  [pick(CHRISTMAS_PICKS, 'SnowHotel'), 'exp-snowhotel', 'santa', 'A night in a snow hotel', 'Yö lumihotellissa'],
  [pick(HUSKY_PICKS, 'Santa Claus Village Husky Ride'), 'exp-santa-reindeer', 'santa', 'Husky ride at Santa Claus Village', 'Huskyajelu Joulupukin Pajakylässä'],

  // ── Lapsille ──────────────────────────────────────────────────────────
  [pick(KIDS_PICKS, 'Snowman World'), 'exp-kids-snowpark', 'kids', 'Snowman World entry ticket', 'Snowman Worldin pääsylippu'],
  [pick(KIDS_PICKS, 'Reindeer, Huskies & Santa'), 'exp-kids-husky-short', 'kids', 'Reindeer, huskies and Santa in one trip', 'Porot, huskyt ja Joulupukki yhdellä retkellä'],
  [pick(TOURS_PICKS, 'Ranua'), 'exp-nature-wildlife', 'kids', 'Ranua wildlife park with transport', 'Ranuan eläinpuisto kuljetuksineen'],
]

export const GIFT_EXPERIENCES: GiftExperience[] = SELECTION.map(
  ([p, image, group, en, fi]) => ({
    ...p,
    image,
    group,
    name: { en, fi },
    sid: 'gifts_experience_card',
  }),
)

/** Ryhmät siinä järjestyksessä kuin ne sivulla näytetään. */
export const EXPERIENCE_GROUPS: ExperienceGroup[] = [
  'aurora',
  'husky',
  'reindeer',
  'snowmobile',
  'nature',
  'sauna',
  'santa',
  'kids',
]

export function experiencesByGroup(group: ExperienceGroup): GiftExperience[] {
  return GIFT_EXPERIENCES.filter((e) => e.group === group)
}
