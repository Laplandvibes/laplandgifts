# Putiikkihakemisto (/boutiques) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rakentaa laplandgifts.comiin `/boutiques`-hakemisto 14 lappilaisesta putiikista, 12 kielellä, niin että jokainen putiikkisivu syöttää kaupan tuotekategoriaan.

**Architecture:** Data ajaa kaiken. `src/data/boutiques.ts` sisältää rakenteellisen datan ja johtaa paikkakunnat siitä; kuvaukset asuvat erikseen `src/locales/boutiqueCopy/`:ssa productCopy-kuvion mukaisesti. Reitit generoituvat `CONTENT_PATHS`iin datasta, joten uusi putiikki tulee reitiksi, prerenderiin ja sitemapiin yhdellä rivillä. Yksittäinen putiikki on `/boutique/:slug` samalla kuviolla kuin `/product/:slug`, jolloin paikkakunta- ja putiikkislugit eivät voi törmätä.

**Tech Stack:** React 19, React Router 7, Tailwind v4, TypeScript 5.9, Vite 8, Vitest 3, lucide-react

## Global Constraints

Nämä koskevat jokaista tehtävää. Arvot on kopioitu speksistä sanatarkasti.

- **Kielet:** 12 kpl, `Lang`-tyyppi on `'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'`. Aukko on virhe, ei huomautus.
- **Polut englanniksi, ei lokalisoitua polkua.** Kieli tulee prefiksistä (`LANG_PREFIX`), slug pysyy samana. Sama kuin `/treats`, `/shipping`, `/product/<slug>`.
- **Fontit:** otsikot `font-heading` (Bebas Neue), leipä `font-body` (DM Sans). Putiikkien nimet **DM Sansilla**, ei Bebasilla: Bebas on versaali ja "SAMEKKI, SÁMI DUODJI" on lukukelvoton.
- **Ei em-viivoja copyssa** (`—`). Kaksoispiste tai pilkku tilalle.
- **Ei valelukuja.** Jokainen luku luetaan datasta, ei kirjoiteta copyyn.
- **Uloslinkit UTM:llä:** `?utm_source=laplandvibes&utm_medium=referral&utm_campaign=store_<slug>`. Nämä eivät ole affiliate-linkkejä, joten **ei** `rel="sponsored"`. Käytä `rel="noopener"` ja `target="_blank"`.
- **Putiikkeja on 14, verkkokauppoja 8.** Taigakoru poistettiin (Oulu ei ole Lappia, Vesa vahvisti 7.8. ettei kukaan ole maksanut listauksestaan).
- **Testit:** `npm test` (vitest run). Testit `src/data/__tests__/` ja `src/locales/__tests__/`.
- **Työpuu on likainen:** giftsissä on 32 tiedostoa toisen session elämys-WIPiä (`copy.*.ts` ×12, `Home.tsx`, `_x_*.json`, `sitemap.xml`, `scripts/routes.json`). **Committaa vain omat tiedostot, nimeltä.** Älä koskaan `git add -A` tai `git add .`.
- **Deploy ei kuulu tähän suunnitelmaan.** Suunnitelma päättyy vihreisiin testeihin ja committeihin.

---

## Tiedostorakenne

| Tiedosto | Vastuu |
|---|---|
| `src/data/boutiques.ts` (uusi) | Tyypit, 14 putiikin rakenteellinen data, hakufunktiot, paikkakuntien johtaminen |
| `src/locales/boutiqueCopy/{en,fi,de,ja,es,ptBR,zhCN,ko,fr,it,nl,sv}.ts` (uudet) | Putiikkien kuvaukset ja tuoteryhmätagit per kieli |
| `src/locales/boutiqueCopy/index.ts` (uusi) | Kokoaa 12 kieltä yhdeksi hakemistoksi |
| `src/locales/shopCopy.ts` (muokataan) | Uusi `boutique`-lohko `ShopCopy`-rajapintaan + 12 käännöstä |
| `src/components/shop/BoutiqueCard.tsx` (uusi) | Yksi putiikkikortti, käytössä hubissa ja paikkakuntasivulla |
| `src/pages/Boutiques.tsx` (uusi) | Hub: 14 putiikkia + suodattimet |
| `src/pages/BoutiqueTown.tsx` (uusi) | Paikkakuntasivu + duodji-osio Inarissa |
| `src/pages/Boutique.tsx` (uusi) | Yksittäinen putiikki + ristiinlinkki giftsin kategoriaan |
| `src/routes.tsx` (muokataan) | `/boutiques`, paikkakuntapolut, `/boutique/:slug` |
| `src/components/ShopNav.tsx` (muokataan) | Navilinkki hakemistoon |
| `scripts/build-routes-json.mjs` (muokataan) | Prerender-metat uusille reiteille |
| `src/data/__tests__/boutiques.test.ts` (uusi) | Datan eheysvahdit |
| `src/locales/__tests__/boutiqueCopy.test.ts` (uusi) | Käännöskattavuus |

---

## Task 1: Putiikkidata ja eheysvahdit

**Files:**
- Create: `src/data/boutiques.ts`
- Test: `src/data/__tests__/boutiques.test.ts`

**Interfaces:**
- Consumes: `CategoryId` from `src/data/types.ts`
- Produces:
  - `interface Boutique { slug: string; name: string; town: TownId; district?: string; url: string; hasOnlineStore: boolean; hasPhysicalStore: boolean; giftsCategory: CategoryId; samiAuthorized?: boolean; verifiedAt: string }`
  - `type TownId = 'rovaniemi' | 'inari' | 'posio' | 'levi' | 'sodankyla'`
  - `const BOUTIQUES: Boutique[]`
  - `function boutiqueBySlug(slug: string): Boutique | undefined`
  - `function boutiquesByTown(town: TownId): Boutique[]`

- [ ] **Step 1: Write the failing test**

Create `src/data/__tests__/boutiques.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import {
  BOUTIQUES, boutiqueBySlug, boutiquesByTown, boutiqueOutboundUrl, TOWN_IDS,
} from '../boutiques'
import { CATEGORY_IDS } from '../types'

describe('putiikkidatan eheys', () => {
  it('putiikkeja on 14 ja verkkokauppoja 8', () => {
    expect(BOUTIQUES).toHaveLength(14)
    expect(BOUTIQUES.filter((b) => b.hasOnlineStore)).toHaveLength(8)
  })

  it('slugit ovat uniikkeja ja URL-turvallisia', () => {
    const slugs = BOUTIQUES.map((b) => b.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const s of slugs) expect(s, s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it('jokainen paikkakunta on tunnettu ja Lapissa', () => {
    for (const b of BOUTIQUES) {
      expect(TOWN_IDS, `${b.slug} → tuntematon paikkakunta ${b.town}`).toContain(b.town)
    }
  })

  it('Oulua ei ole listalla', () => {
    // Taigakoru poistettiin 2026-08-07: sivusto lupaa "vain lappilaisia
    // yrityksiä", ja Oulu ei ole Lappia. Sama sääntö kuin Ruka ja Kuusamo.
    const towns = BOUTIQUES.map((b) => String(b.town))
    expect(towns).not.toContain('oulu')
    expect(BOUTIQUES.map((b) => b.slug)).not.toContain('taigakoru')
  })

  it('jokainen putiikki linkittää olemassa olevaan giftsin kategoriaan', () => {
    for (const b of BOUTIQUES) {
      expect(CATEGORY_IDS, `${b.slug} → ${b.giftsCategory}`).toContain(b.giftsCategory)
    }
  })

  it('jokaisella putiikilla on vähintään yksi myyntikanava', () => {
    for (const b of BOUTIQUES) {
      expect(b.hasOnlineStore || b.hasPhysicalStore, b.slug).toBe(true)
    }
  })

  it('URL on https ja ilman query-osaa', () => {
    for (const b of BOUTIQUES) {
      const u = new URL(b.url)
      expect(u.protocol, b.slug).toBe('https:')
      expect(u.search, b.slug).toBe('')
    }
  })

  it('verifiointipäivä on ISO-muodossa', () => {
    for (const b of BOUTIQUES) {
      expect(b.verifiedAt, b.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })

  it('boutiqueBySlug löytää ja palauttaa undefined tuntemattomalle', () => {
    expect(boutiqueBySlug('marttiini')?.name).toBe('Marttiini')
    expect(boutiqueBySlug('ei-olemassa')).toBeUndefined()
  })

  it('boutiquesByTown ryhmittelee oikein', () => {
    expect(boutiquesByTown('rovaniemi')).toHaveLength(8)
    expect(boutiquesByTown('inari')).toHaveLength(3)
    expect(boutiquesByTown('posio')).toHaveLength(1)
    expect(boutiquesByTown('levi')).toHaveLength(1)
    expect(boutiquesByTown('sodankyla')).toHaveLength(1)
  })

  it('uloslinkki noudattaa UTM-standardia', () => {
    for (const b of BOUTIQUES) {
      const u = new URL(boutiqueOutboundUrl(b))
      expect(u.searchParams.get('utm_source'), b.slug).toBe('laplandvibes')
      expect(u.searchParams.get('utm_medium'), b.slug).toBe('referral')
      expect(u.searchParams.get('utm_campaign'), b.slug).toBe(`store_${b.slug}`)
      // Kohde säilyy: UTM ei saa korvata polkua eikä vaihtaa hostia.
      expect(u.host, b.slug).toBe(new URL(b.url).host)
    }
  })

  it('uloslinkkikampanjat ovat uniikkeja', () => {
    // Yksi kampanja-arvo kahdelle putiikille sulauttaisi ne samaksi riviksi
    // raportissa. Sama virhe kuin storen kovakoodattu sid.
    const camps = BOUTIQUES.map((b) => new URL(boutiqueOutboundUrl(b)).searchParams.get('utm_campaign'))
    expect(new Set(camps).size).toBe(camps.length)
  })

  it('kaikki kolme inarilaista ovat auktorisoituja saamelaiskäsityön myyjiä', () => {
    // Duodji-osio nimeää nämä auktorisoiduiksi. Jos listalle tulisi
    // ei-auktorisoitu inarilainen, osio nolaisi sen.
    for (const b of boutiquesByTown('inari')) {
      expect(b.samiAuthorized, b.slug).toBe(true)
    }
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- boutiques`
Expected: FAIL, `Failed to resolve import "../boutiques"`

- [ ] **Step 3: Write the data module**

Create `src/data/boutiques.ts`:

```typescript
import type { CategoryId } from './types'

/**
 * Paikkakunnat joilla on listattuja putiikkeja. Lista on Lapin kuntia:
 * Oulu, Kuusamo ja Ruka eivät kuulu tänne, koska hakemisto lupaa
 * "vain lappilaisia yrityksiä".
 *
 * Joulupukin Pajakylä ei ole oma paikkakunta vaan Rovaniemen kaupunginosa.
 * Se säilyy `district`-kentässä, jotta osoitetieto ei katoa, mutta
 * ryhmittely menee Rovaniemen alle.
 */
export type TownId = 'rovaniemi' | 'inari' | 'posio' | 'levi' | 'sodankyla'

export const TOWN_IDS: TownId[] = ['rovaniemi', 'inari', 'posio', 'levi', 'sodankyla']

export interface Boutique {
  /** URL-slug: /boutique/<slug>. */
  slug: string
  /** Yrityksen oma nimi. Ei käännetä. */
  name: string
  town: TownId
  /** Kaupunginosa tai käyntikohde, esim. "Joulupukin Pajakylä". */
  district?: string
  /** Yrityksen oma sivu ilman query-osaa. UTM lisätään linkitettäessä. */
  url: string
  /**
   * Katuosoite. Puuttuu v1:ssä: lähdedatassa (laplandstore-new/LocalShops.tsx)
   * ei ole osoitteita, ja keksitty osoite on pahempi kuin puuttuva. Kenttä on
   * olemassa jotta osoitteet voi lisätä myöhemmin ilman datamuutosta, kun ne
   * on luettu yrityksen omalta sivulta.
   *
   * 🔴 Aukioloaikoja ei lisätä tähän eikä muuallekaan: ne vanhenevat eikä
   * niille ole ylläpitoprosessia. Väärä aukioloaika on huonompi kuin ei
   * aukioloaikaa.
   */
  address?: string
  hasOnlineStore: boolean
  hasPhysicalStore: boolean
  /**
   * Giftsin tuotekategoria johon putiikkisivu ristiinlinkittää. Tämä on se
   * mekanismi jolla hakemisto ansaitsee paikkansa kaupan sisällä.
   */
  giftsCategory: CategoryId
  /**
   * Auktorisoitu saamelaiskäsityön myyjä. Verkoston sääntö: saamelaistuotteita
   * myydään vain auktorisoitujen kautta, ei koskaan imitaatioita.
   */
  samiAuthorized?: boolean
  /** Päivä jona URL ja myyntikanavat tarkistettiin yrityksen omalta sivulta. */
  verifiedAt: string
}

export const BOUTIQUES: Boutique[] = [
  { slug: 'lauri-handicrafts', name: 'Lauri Handicrafts', town: 'rovaniemi',
    url: 'https://www.laurihouse.com', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', verifiedAt: '2026-08-07' },
  { slug: 'marttiini', name: 'Marttiini', town: 'rovaniemi',
    url: 'https://www.marttiini.fi', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', verifiedAt: '2026-08-07' },
  { slug: 'pentik', name: 'Pentik', town: 'posio',
    url: 'https://www.pentik.com', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'design', verifiedAt: '2026-08-07' },
  { slug: 'duodji-shop', name: 'Duodji Shop', town: 'inari', district: 'Sajos',
    url: 'https://duodjishop.fi', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', samiAuthorized: true, verifiedAt: '2026-08-07' },
  { slug: 'samekki', name: 'Samekki, Sámi Duodji', town: 'inari',
    url: 'https://samekki.fi', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', samiAuthorized: true, verifiedAt: '2026-08-07' },
  { slug: 'piece-of-lapland', name: 'Piece of Lapland', town: 'rovaniemi',
    url: 'https://www.pieceoflapland.fi', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', verifiedAt: '2026-08-07' },
  { slug: 'rovaniemi-souvenirs-shop', name: 'Rovaniemi Souvenirs Shop', town: 'rovaniemi',
    district: 'Joulupukin Pajakylä', url: 'https://www.rovaniemisouvenirsshop.fi',
    hasOnlineStore: true, hasPhysicalStore: true, giftsCategory: 'handicrafts',
    verifiedAt: '2026-08-07' },
  { slug: 'lapin-kelloseppa', name: 'Lapin Kelloseppä', town: 'rovaniemi',
    url: 'https://www.lapinkelloseppa.fi', hasOnlineStore: true, hasPhysicalStore: true,
    giftsCategory: 'design', verifiedAt: '2026-08-07' },
  { slug: 'arctic-design-shop', name: 'Arctic Design Shop', town: 'rovaniemi',
    url: 'https://arcticdesignshop.com', hasOnlineStore: false, hasPhysicalStore: true,
    giftsCategory: 'design', verifiedAt: '2026-08-07' },
  { slug: 'christmas-house-shop', name: 'Christmas House Shop', town: 'rovaniemi',
    district: 'Joulupukin Pajakylä', url: 'https://christmashousesanta.fi',
    hasOnlineStore: false, hasPhysicalStore: true, giftsCategory: 'treats',
    verifiedAt: '2026-08-07' },
  { slug: 'korundi-shop', name: 'Korundi Shop', town: 'rovaniemi',
    url: 'https://korundi.fi', hasOnlineStore: false, hasPhysicalStore: true,
    giftsCategory: 'design', verifiedAt: '2026-08-07' },
  { slug: 'shoppi-craft-design', name: 'SHOPPI Craft & Design', town: 'levi',
    url: 'https://www.levi.fi', hasOnlineStore: false, hasPhysicalStore: true,
    giftsCategory: 'design', verifiedAt: '2026-08-07' },
  { slug: 'siida-shop', name: 'Siida Shop', town: 'inari', district: 'Saamelaismuseo Siida',
    url: 'https://siida.fi', hasOnlineStore: false, hasPhysicalStore: true,
    giftsCategory: 'handicrafts', samiAuthorized: true, verifiedAt: '2026-08-07' },
  { slug: 'tankavaaran-kultakyla', name: 'Tankavaaran Kultakylä', town: 'sodankyla',
    district: 'Tankavaara', url: 'https://www.tankavaara.fi',
    hasOnlineStore: false, hasPhysicalStore: true, giftsCategory: 'design',
    verifiedAt: '2026-08-07' },
]

export function boutiqueBySlug(slug: string): Boutique | undefined {
  return BOUTIQUES.find((b) => b.slug === slug)
}

export function boutiquesByTown(town: TownId): Boutique[] {
  return BOUTIQUES.filter((b) => b.town === town)
}

/**
 * Uloslinkki yrityksen omille sivuille. Nämä eivät ole affiliate-linkkejä
 * vaan tavallisia viittauksia, joten `rel="sponsored"` olisi väärin: se
 * kertoisi Googlelle maksetusta suhteesta jota ei ole.
 */
export function boutiqueOutboundUrl(b: Boutique): string {
  const sep = b.url.includes('?') ? '&' : '?'
  return `${b.url}${sep}utm_source=laplandvibes&utm_medium=referral&utm_campaign=store_${b.slug}`
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- boutiques`
Expected: PASS, 11 tests

- [ ] **Step 5: Verify the 14 URLs actually resolve**

Portti on 200 **ja oikea title**, ei pelkkä 200. HTTP 200 ei ole verifiointi.

Run:
```bash
node -e "
const {BOUTIQUES}=await import('./src/data/boutiques.ts');
for (const b of BOUTIQUES) {
  try {
    const r = await fetch(b.url, {headers:{'user-agent':'Mozilla/5.0'}, redirect:'follow'});
    const html = await r.text();
    const t = (html.match(/<title[^>]*>([^<]*)</i)||[])[1]||'(ei titlea)';
    console.log(String(r.status)+'  '+b.slug.padEnd(26)+'  '+t.trim().slice(0,60));
  } catch(e) { console.log('ERR   '+b.slug.padEnd(26)+'  '+e.message); }
}
"
```

Expected: 14 riviä, jokainen `200` ja title joka mainitsee yrityksen. **Jos jokin ei ole 200 tai title ei liity yritykseen, korjaa URL ennen jatkoa.**

🔴 Tiedossa oleva epäilys: `shoppi-craft-design` osoittaa `https://www.levi.fi`, joka on hiihtokeskuksen sivu eikä putiikin oma. Jos putiikilla ei ole omaa sivua, käytä levi.fi:n alasivua joka kuvaa juuri tätä liikettä. Jos sellaista ei ole, poista putiikki ja päivitä luvut 13/8 tähän suunnitelmaan sekä speksiin.

- [ ] **Step 6: Commit**

```bash
git add src/data/boutiques.ts src/data/__tests__/boutiques.test.ts
git commit -m "putiikit: datamalli ja 14 putiikkia eheysvahteineen"
```

---

## Task 2: Paikkakuntasivujen kynnys

**Files:**
- Modify: `src/data/boutiques.ts`
- Test: `src/data/__tests__/boutiques.test.ts`

**Interfaces:**
- Consumes: `BOUTIQUES`, `TownId`, `TOWN_IDS`, `boutiquesByTown` (Task 1)
- Produces:
  - `const TOWN_PAGE_MIN_BOUTIQUES = 3`
  - `function townsWithPages(): TownId[]` palauttaa paikkakunnat joilla >= 3 putiikkia, aakkosjärjestyksessä
  - `function townsWithoutPages(): TownId[]` loput
  - `function boutiqueTownPaths(): string[]` esim. `['/boutiques/inari', '/boutiques/rovaniemi']`

- [ ] **Step 1: Write the failing test**

Lisää `src/data/__tests__/boutiques.test.ts`:n **ylimpään tuontilohkoon** nämä
nimet (älä kirjoita uutta `import`-lausetta tiedoston keskelle, vaikka ESM sen
sallisikin: eslintin `import/first` ja lukukelpoisuus kärsivät):

```typescript
import {
  BOUTIQUES, boutiqueBySlug, boutiquesByTown, boutiqueOutboundUrl, TOWN_IDS,
  TOWN_PAGE_MIN_BOUTIQUES, townsWithPages, townsWithoutPages, boutiqueTownPaths,
} from '../boutiques'
```

Lisää sitten tiedoston loppuun:

```typescript
describe('paikkakuntasivun kynnys', () => {
  it('kynnys on kolme putiikkia', () => {
    expect(TOWN_PAGE_MIN_BOUTIQUES).toBe(3)
  })

  it('vain Rovaniemi ja Inari ylittävät kynnyksen', () => {
    expect(townsWithPages()).toEqual(['inari', 'rovaniemi'])
  })

  it('loput jäävät hubin muualla-osioon', () => {
    expect(townsWithoutPages().sort()).toEqual(['levi', 'posio', 'sodankyla'])
  })

  it('jokainen paikkakunta on tasan yhdessä joukossa', () => {
    const a = townsWithPages()
    const b = townsWithoutPages()
    expect([...a, ...b].sort()).toEqual([...TOWN_IDS].sort())
    expect(a.filter((t) => b.includes(t))).toHaveLength(0)
  })

  it('polut generoituvat paikkakunnista', () => {
    expect(boutiqueTownPaths()).toEqual(['/boutiques/inari', '/boutiques/rovaniemi'])
  })

  it('kynnyksen ylittävällä paikkakunnalla on aina vähintään kynnyksen verran putiikkeja', () => {
    // Vahti sille ettei ohutta sivua synny kun dataa muokataan.
    for (const t of townsWithPages()) {
      expect(boutiquesByTown(t).length, t).toBeGreaterThanOrEqual(TOWN_PAGE_MIN_BOUTIQUES)
    }
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- boutiques`
Expected: FAIL, `TOWN_PAGE_MIN_BOUTIQUES is not exported`

- [ ] **Step 3: Add the derivation**

Append to `src/data/boutiques.ts`:

```typescript
/**
 * Kuinka monta putiikkia paikkakunnalla on oltava ennen kuin se saa oman
 * sivun. Yhden putiikin paikkakuntasivu on ohut sisältö, ja Google kohtelee
 * sitä sen mukaisesti.
 *
 * Kynnys on funktio eikä käsin ylläpidetty lista: kun yrittäjäkampanja tuo
 * Leville kaksi putiikkia lisää, /boutiques/levi ilmestyy itsestään reitteihin,
 * prerenderiin ja sitemapiin.
 */
export const TOWN_PAGE_MIN_BOUTIQUES = 3

export function townsWithPages(): TownId[] {
  return TOWN_IDS
    .filter((t) => boutiquesByTown(t).length >= TOWN_PAGE_MIN_BOUTIQUES)
    .sort()
}

export function townsWithoutPages(): TownId[] {
  return TOWN_IDS
    .filter((t) => boutiquesByTown(t).length < TOWN_PAGE_MIN_BOUTIQUES)
    .sort()
}

export function boutiqueTownPaths(): string[] {
  return townsWithPages().map((t) => `/boutiques/${t}`)
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- boutiques`
Expected: PASS, 17 tests

- [ ] **Step 5: Commit**

```bash
git add src/data/boutiques.ts src/data/__tests__/boutiques.test.ts
git commit -m "putiikit: paikkakuntasivu syntyy datasta kun putiikkeja on vahintaan 3"
```

---

## Task 3: Putiikkikuvaukset 12 kielellä

**Files:**
- Create: `src/locales/boutiqueCopy/en.ts`, `fi.ts`, `de.ts`, `ja.ts`, `es.ts`, `ptBR.ts`, `zhCN.ts`, `ko.ts`, `fr.ts`, `it.ts`, `nl.ts`, `sv.ts`
- Create: `src/locales/boutiqueCopy/index.ts`
- Test: `src/locales/__tests__/boutiqueCopy.test.ts`

**Interfaces:**
- Consumes: `BOUTIQUES` (Task 1), `Lang` from `src/i18n/useLang.ts`
- Produces:
  - `interface BoutiqueCopy { description: string; tags: string[] }`
  - `const BOUTIQUE_COPY: Record<Lang, Record<string, BoutiqueCopy>>` avaimena putiikin slug

**Lähdeaineisto:** kuvaukset ja tagit ovat olemassa 12 kielellä tiedostossa
`../../laplandstore-new/src/components/LocalShops.tsx`, `shops`-taulukon kentissä
`description` ja `categories`. Kopioi ne sieltä. Taigakorun rivi jätetään pois.
Älä käännä uudelleen: käännökset on jo kertaalleen oikoluettu.

- [ ] **Step 1: Write the failing test**

Create `src/locales/__tests__/boutiqueCopy.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { BOUTIQUE_COPY } from '../boutiqueCopy'
import { BOUTIQUES } from '../../data/boutiques'
import { LANG_PREFIX, type Lang } from '../../i18n/useLang'

const LANGS = Object.keys(LANG_PREFIX) as Lang[]

describe('putiikkikuvausten kattavuus', () => {
  it('kaikki 12 kieltä ovat mukana', () => {
    expect(Object.keys(BOUTIQUE_COPY).sort()).toEqual([...LANGS].sort())
  })

  it('jokaisella kielellä on kuvaus jokaiselle putiikille', () => {
    for (const lang of LANGS) {
      for (const b of BOUTIQUES) {
        const c = BOUTIQUE_COPY[lang][b.slug]
        expect(c, `${lang} / ${b.slug} puuttuu`).toBeDefined()
        expect(c.description.trim().length, `${lang} / ${b.slug} tyhjä`).toBeGreaterThan(20)
      }
    }
  })

  it('jokaisella putiikilla on 1-3 tuoteryhmätagia joka kielellä', () => {
    for (const lang of LANGS) {
      for (const b of BOUTIQUES) {
        const tags = BOUTIQUE_COPY[lang][b.slug].tags
        expect(tags.length, `${lang} / ${b.slug}`).toBeGreaterThanOrEqual(1)
        expect(tags.length, `${lang} / ${b.slug}`).toBeLessThanOrEqual(3)
      }
    }
  })

  it('tagien lukumäärä on sama kaikilla kielillä', () => {
    for (const b of BOUTIQUES) {
      const counts = LANGS.map((l) => BOUTIQUE_COPY[l][b.slug].tags.length)
      expect(new Set(counts).size, `${b.slug}: ${counts.join(',')}`).toBe(1)
    }
  })

  it('kuvauksissa ei ole em-viivoja', () => {
    for (const lang of LANGS) {
      for (const b of BOUTIQUES) {
        expect(BOUTIQUE_COPY[lang][b.slug].description, `${lang} / ${b.slug}`).not.toContain('—')
      }
    }
  })

  it('lähteen vuosiluvut säilyvät käännöksessä', () => {
    // Numerofragmentit kopioidaan lähteestä. "vuodesta 1924" ei saa muuttua
    // muotoon "yli sata vuotta": luku on tarkistettavissa oleva fakta.
    const withYears: Record<string, string> = {
      'lauri-handicrafts': '1924',
      'marttiini': '1928',
      'pentik': '1971',
    }
    for (const [slug, year] of Object.entries(withYears)) {
      for (const lang of LANGS) {
        expect(BOUTIQUE_COPY[lang][slug].description, `${lang} / ${slug}`).toContain(year)
      }
    }
  })

  it('ei ylimääräisiä slugeja jotka eivät vastaa yhtään putiikkia', () => {
    const known = new Set(BOUTIQUES.map((b) => b.slug))
    for (const lang of LANGS) {
      for (const slug of Object.keys(BOUTIQUE_COPY[lang])) {
        expect(known.has(slug), `${lang}: tuntematon slug ${slug}`).toBe(true)
      }
    }
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- boutiqueCopy`
Expected: FAIL, `Failed to resolve import "../boutiqueCopy"`

- [ ] **Step 3: Generate the 12 files from the existing source**

🔴 **Älä kopioi 168 merkkijonoa käsin.** Käännökset ovat valmiina ja kertaalleen
oikoluettuina tiedostossa `laplandstore-new/src/components/LocalShops.tsx`.
Käsinkopiointi on juuri se vaihe jossa yksi kieli jää vajaaksi eikä kukaan huomaa.

Luo `scripts/_extract_boutique_copy.mjs` (kertakäyttöinen, ei committoida):

```javascript
/**
 * Poimii putiikkien kuvaukset ja tuoteryhmätagit storen LocalShops.tsx:stä ja
 * kirjoittaa src/locales/boutiqueCopy/<lang>.ts. Kertakäyttöinen: kun tiedostot
 * ovat olemassa, ne ovat lähde ja tämä skripti poistetaan.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'

const SRC = '../laplandstore-new/src/components/LocalShops.tsx'
const OUT = 'src/locales/boutiqueCopy'

// Nimi lähteessä → slug boutiques.ts:ssä. Taigakoru puuttuu tarkoituksella.
const SLUGS = {
  'Lauri Handicrafts': 'lauri-handicrafts',
  'Marttiini': 'marttiini',
  'Pentik': 'pentik',
  'Duodji Shop': 'duodji-shop',
  'Samekki - Sámi Duodji': 'samekki',
  'Piece of Lapland': 'piece-of-lapland',
  'Rovaniemi Souvenirs Shop': 'rovaniemi-souvenirs-shop',
  'Lapin Kelloseppä': 'lapin-kelloseppa',
  'Arctic Design Shop': 'arctic-design-shop',
  'Christmas House Shop': 'christmas-house-shop',
  'Korundi Shop': 'korundi-shop',
  'SHOPPI Craft & Design': 'shoppi-craft-design',
  'Siida Shop': 'siida-shop',
  'Tankavaaran Kultakylä': 'tankavaaran-kultakyla',
}

const LANGS = ['en','fi','de','ja','es','pt-BR','zh-CN','ko','fr','it','nl','sv']
const FILE = { 'pt-BR': 'ptBR', 'zh-CN': 'zhCN' }

// Taulukko on puhdasta dataa (merkkijonoja, taulukoita, totuusarvoja), joten
// se voidaan lukea suoraan sen sijaan että sitä yritettäisiin regexata.
const src = readFileSync(SRC, 'utf8')
const open = src.indexOf('[', src.indexOf('const shops: Shop[] = ['))
const end = src.indexOf('\n]', open)
if (open < 0 || end < 0) throw new Error('shops-taulukkoa ei löytynyt')
const shops = new Function(`return ${src.slice(open, end + 2)}`)()

const missing = shops.map((s) => s.name).filter((n) => !(n in SLUGS))
if (missing.length > 1 || (missing.length === 1 && missing[0] !== 'Taigakoru')) {
  throw new Error(`odottamattomia putiikkeja: ${missing.join(', ')}`)
}

mkdirSync(OUT, { recursive: true })
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`

for (const lang of LANGS) {
  const rows = shops
    .filter((s) => SLUGS[s.name])
    .map((s) => {
      const d = s.description[lang]
      const tags = s.categories[lang]
      if (!d || !tags) throw new Error(`${s.name}: ${lang} puuttuu lähteestä`)
      if (d.includes('—')) throw new Error(`${s.name}: ${lang} sisältää em-viivan`)
      return `  ${q(SLUGS[s.name])}: {\n    description: ${q(d)},\n    tags: [${tags.map(q).join(', ')}],\n  },`
    })
    .join('\n')

  const header =
    lang === 'en'
      ? `export interface BoutiqueCopy {\n  /** Yksi virke tai kaksi: mitä tekevät ja mistä tunnetaan. */\n  description: string\n  /** 1-3 tuoteryhmää kortin merkinnöiksi. */\n  tags: string[]\n}\n\n`
      : `import type { BoutiqueCopy } from './en'\n\n`

  writeFileSync(
    `${OUT}/${FILE[lang] ?? lang}.ts`,
    `${header}const copy: Record<string, BoutiqueCopy> = {\n${rows}\n}\n\nexport default copy\n`,
    'utf8',
  )
  console.log(`${FILE[lang] ?? lang}.ts: ${shops.filter((s) => SLUGS[s.name]).length} putiikkia`)
}
```

Run:
```bash
node scripts/_extract_boutique_copy.mjs
```

Expected: 12 riviä, jokainen `14 putiikkia`. Jos jokin kieli heittää
`puuttuu lähteestä`, se aukko on ollut storessa jo ennen tätä työtä: täytä se
käsin lähdetiedostoon ja aja skripti uudestaan.

Tuloksena syntyvät tiedostot näyttävät tältä (`en.ts`, alku):

`src/locales/boutiqueCopy/en.ts`:

```typescript
export interface BoutiqueCopy {
  /** Yksi virke tai kaksi: mitä tekevät ja mistä tunnetaan. */
  description: string
  /** 1-3 tuoteryhmää kortin merkinnöiksi. */
  tags: string[]
}

const copy: Record<string, BoutiqueCopy> = {
  'lauri-handicrafts': {
    description: 'Handcrafted knives, jewellery and felt products since 1924. Reindeer bone, curly birch and Finnish steel.',
    tags: ['Knives', 'Crafts'],
  },
  'marttiini': {
    description: 'World famous puukko knives since 1928. Factory outlet and Brand Store, free engraving.',
    tags: ['Knives', 'Gifts'],
  },
  'pentik': {
    description: 'The northernmost ceramics factory in the world, in Posio since 1971. Ceramics, interiors and design.',
    tags: ['Ceramics', 'Interiors'],
  },
  // generaattori kirjoittaa loput 11 samasta lähteestä
}

export default copy
```

`fi.ts` on muuten sama mutta tuo tyypin `en.ts`:stä:

```typescript
import type { BoutiqueCopy } from './en'

const copy: Record<string, BoutiqueCopy> = {
  'lauri-handicrafts': {
    description: 'Käsintehtyjä puukkoja, koruja ja huopatuotteita vuodesta 1924. Poronluuta, visakoivua ja suomalaista terästä.',
    tags: ['Puukot', 'Käsityöt'],
  },
  // generaattori kirjoittaa loput 13
}

export default copy
```

Tarkista silmämääräisesti kaksi tiedostoa (`ja.ts` ja `sv.ts`) ennen jatkoa:
14 riviä kummassakin, ei mojibakea, vuosiluvut tallella.

- [ ] **Step 4: Write the index**

Luo käsin `src/locales/boutiqueCopy/index.ts` (tätä generaattori ei kirjoita):

```typescript
import type { Lang } from '../../i18n/useLang'
import type { BoutiqueCopy } from './en'
import en from './en'
import fi from './fi'
import de from './de'
import ja from './ja'
import es from './es'
import ptBR from './ptBR'
import zhCN from './zhCN'
import ko from './ko'
import fr from './fr'
import it from './it'
import nl from './nl'
import sv from './sv'

export type { BoutiqueCopy }

/**
 * Avain on putiikin slug. Kattavuus on testattu: puuttuva kuvaus on virhe
 * eikä hiljainen fallback englantiin. Puolikas lokaali näyttäisi siltä että
 * sivusto on kesken, ja tuoteryhmätagit sekoittuisivat kahdelle kielelle.
 */
export const BOUTIQUE_COPY: Record<Lang, Record<string, BoutiqueCopy>> = {
  en, fi, de, ja, es, 'pt-BR': ptBR, 'zh-CN': zhCN, ko, fr, it, nl, sv,
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- boutiqueCopy`
Expected: PASS, 7 tests

Jos "lähteen vuosiluvut säilyvät" kaatuu, syy on lähteessä eikä poiminnassa:
jokin kieli on kirjoittanut "1924" auki sanoiksi. Korjaa lähdetiedosto ja aja
generaattori uudestaan.

- [ ] **Step 6: Delete the generator and commit**

Generaattori on kertakäyttöinen. Sen jättäminen repoon antaisi ymmärtää että
`boutiqueCopy` generoidaan storesta jatkuvasti, vaikka storen oma kopio poistuu
vaiheessa 2. Tämän jälkeen `src/locales/boutiqueCopy/` on ainoa lähde.

```bash
rm scripts/_extract_boutique_copy.mjs
git add src/locales/boutiqueCopy src/locales/__tests__/boutiqueCopy.test.ts
git commit -m "putiikit: kuvaukset ja tuoteryhmatagit 12 kielella"
```

---

## Task 4: Käyttöliittymätekstit shopCopyyn

**Files:**
- Modify: `src/locales/shopCopy.ts`

**Interfaces:**
- Consumes: `ShopCopy`-rajapinta
- Produces: `SHOP_COPY[lang].boutique` seuraavilla kentillä:
  `hubTitle`, `hubLead`, `hubIntro`, `townsH2`, `elsewhereH2`, `filterAll`,
  `filterOnline`, `filterPhysical`, `onlineBadge`, `physicalBadge`,
  `count: (n: number) => string`, `visitH2`, `shopAtH2`, `outboundCta`,
  `crossSellH2`, `crossSellCta`, `townNames: Record<TownId, string>`,
  `duodjiH2`, `duodjiBody`, `duodjiAuthorized`, `listingH2`, `listingBody`,
  `listingCta`

- [ ] **Step 1: Extend the interface**

Lisää `ShopCopy`-rajapintaan (`src/locales/shopCopy.ts`), `shipping`-lohkon jälkeen:

```typescript
  /**
   * Putiikkihakemisto. Lohko on pienin yksikkö: antamatta jätetty lohko
   * putoaa englantiin, joten uudet avaimet on lisättävä jokaisen kielen
   * boutique-lohkoon eikä vain englantiin.
   */
  boutique: {
    hubTitle: string
    hubLead: string
    hubIntro: string
    townsH2: string
    elsewhereH2: string
    filterAll: string
    filterOnline: string
    filterPhysical: string
    onlineBadge: string
    physicalBadge: string
    /** "14 putiikkia". Luku tulee datasta, ei copysta. */
    count: (n: number) => string
    visitH2: string
    shopAtH2: string
    outboundCta: string
    crossSellH2: string
    crossSellCta: string
    townNames: Record<'rovaniemi' | 'inari' | 'posio' | 'levi' | 'sodankyla', string>
    duodjiH2: string
    duodjiBody: string
    duodjiAuthorized: string
    listingH2: string
    listingBody: string
    listingCta: string
  }
```

- [ ] **Step 2: Add the English block**

Lisää englanninkieliseen `SHOP_COPY.en`-objektiin:

```typescript
  boutique: {
    hubTitle: 'Lapland boutiques',
    hubLead: 'Where to buy Lapland crafts, in the shops themselves.',
    hubIntro: 'Every shop here is a Lapland business. Some ship worldwide, some you visit in person, and each link goes to the company\'s own site.',
    townsH2: 'By town',
    elsewhereH2: 'Elsewhere in Lapland',
    filterAll: 'All',
    filterOnline: 'Ships to you',
    filterPhysical: 'Visit in person',
    onlineBadge: 'ONLINE SHOP',
    physicalBadge: 'WALK IN',
    count: (n: number) => `${n} boutiques`,
    visitH2: 'Visit in person',
    shopAtH2: 'Order from home',
    outboundCta: 'Go to their site',
    crossSellH2: 'Buy this kind of thing online',
    crossSellCta: 'Browse the category',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä',
    },
    duodjiH2: 'How to recognise real Sámi duodji',
    duodjiBody: 'Duodji is Sámi handicraft made by Sámi makers using traditional materials and techniques. Souvenir imitations copy the look without the maker or the tradition. The difference matters to the community whose culture it is, and an authorised seller can tell you who made the piece.',
    duodjiAuthorized: 'Authorised seller of Sámi duodji',
    listingH2: 'Do you run a Lapland shop?',
    listingBody: 'A listing here is free for every Lapland business. Tell us who you are, why your visibility is weak right now, and what would change if customers found you.',
    listingCta: 'Get in touch',
  },
```

- [ ] **Step 3: Add the Finnish block**

Lisää `SHOP_COPY.fi`-objektiin:

```typescript
  boutique: {
    hubTitle: 'Lapin putiikit',
    hubLead: 'Mistä Lapin käsityöt ostetaan, kaupoista itsestään.',
    hubIntro: 'Jokainen tämän sivun kauppa on lappilainen yritys. Osa toimittaa kotiin, osaan mennään paikan päälle, ja jokainen linkki vie yrityksen omille sivuille.',
    townsH2: 'Paikkakunnittain',
    elsewhereH2: 'Muualla Lapissa',
    filterAll: 'Kaikki',
    filterOnline: 'Toimittaa kotiin',
    filterPhysical: 'Käy paikan päällä',
    onlineBadge: 'VERKKOKAUPPA',
    physicalBadge: 'KIVIJALKA',
    count: (n: number) => (n === 1 ? '1 putiikki' : `${n} putiikkia`),
    visitH2: 'Vieraile paikan päällä',
    shopAtH2: 'Tilaa kotiin',
    outboundCta: 'Siirry heidän sivuilleen',
    crossSellH2: 'Osta tällaista verkosta',
    crossSellCta: 'Selaa kategoriaa',
    townNames: {
      rovaniemi: 'Rovaniemi', inari: 'Inari', posio: 'Posio',
      levi: 'Levi', sodankyla: 'Sodankylä',
    },
    duodjiH2: 'Näin tunnistat aidon saamelaisen duodjin',
    duodjiBody: 'Duodji on saamelaisten tekemää käsityötä, jossa käytetään perinteisiä materiaaleja ja tekotapoja. Matkamuistoimitaatio kopioi ulkonäön ilman tekijää ja perinnettä. Ero on merkityksellinen sille yhteisölle jonka kulttuurista on kyse, ja auktorisoitu myyjä osaa kertoa kuka esineen on tehnyt.',
    duodjiAuthorized: 'Auktorisoitu saamelaiskäsityön myyjä',
    listingH2: 'Omistatko lappilaisen kaupan?',
    listingBody: 'Listaus on ilmainen kaikille lappilaisille yrityksille. Kerro keitä olette, miksi näkyvyytenne on nyt heikko, ja mitä muuttuisi jos asiakkaat löytäisivät teidät.',
    listingCta: 'Ota yhteyttä',
  },
```

- [ ] **Step 4: Add the remaining 10 language blocks**

Sama lohko kielille `de`, `ja`, `es`, `pt-BR`, `zh-CN`, `ko`, `fr`, `it`, `nl`, `sv`.

Säännöt:
- `townNames`-paikannimet **eivät käänny**: Rovaniemi, Inari, Posio, Levi, Sodankylä ovat erisnimiä. CJK-kielissä käytä latinalaista kirjoitusasua kuten muuallakin sivustolla.
- `count`-funktion monikkomuoto kielen omien sääntöjen mukaan.
- `duodjiBody` on herkin teksti koko sivustolla. Se kertoo toisen kulttuurin asiasta, joten käännä sisältö tarkasti äläkä pehmennä. Sana **duodji** ei käänny.
- Ei em-viivoja.

- [ ] **Step 5: Verify types compile and existing tests still pass**

Run: `npx tsc -b --noEmit && npm test`
Expected: ei tyyppivirheitä, kaikki aiemmat testit vihreinä

🔴 Jos `tsc` valittaa puuttuvasta `boutique`-lohkosta jollain kielellä, se on juuri
se aukko jonka rajapinta on tarkoitettu estämään. Täytä lohko, älä löysennä tyyppiä.

- [ ] **Step 6: Commit**

```bash
git add src/locales/shopCopy.ts
git commit -m "putiikit: kayttoliittymatekstit shopCopyyn 12 kielella"
```

---

## Task 5: Putiikkikortti ja hakemiston etusivu

**Files:**
- Create: `src/components/shop/BoutiqueCard.tsx`
- Create: `src/pages/Boutiques.tsx`
- Modify: `src/routes.tsx`

**Interfaces:**
- Consumes: `BOUTIQUES`, `boutiquesByTown`, `townsWithPages`, `townsWithoutPages`, `boutiqueTownPaths`, `TownId` (Tasks 1-2); `BOUTIQUE_COPY` (Task 3); `SHOP_COPY[lang].boutique` (Task 4)
- Produces:
  - `BoutiqueCard` default export, props `{ boutique: Boutique }`
  - `Boutiques` default export (sivukomponentti)
  - `src/routes.tsx`: `/boutiques` ja paikkakuntapolut `CONTENT_PATHS`issa, `/boutique/:slug` param-reittinä

- [ ] **Step 1: Write the card component**

Create `src/components/shop/BoutiqueCard.tsx`:

```tsx
import { Link } from 'react-router-dom'
import type { Boutique } from '../../data/boutiques'
import { BOUTIQUE_COPY } from '../../locales/boutiqueCopy'
import { SHOP_COPY } from '../../locales/shopCopy'
import { useLang, useLocalePath } from '../../i18n/useLang'

/**
 * Kortti vie putiikin omalle sivulle, ei suoraan yrityksen sivuille.
 * Uloslinkitys tapahtuu yhdessä paikassa (putiikkisivulla), jolloin se on
 * mitattavissa eikä UTM-parametreja tarvitse toistaa jokaisessa listassa.
 */
export default function BoutiqueCard({ boutique }: { boutique: Boutique }) {
  const lang = useLang()
  const localePath = useLocalePath()
  const t = SHOP_COPY[lang].boutique
  const c = BOUTIQUE_COPY[lang][boutique.slug]

  return (
    <Link
      to={localePath(`/boutique/${boutique.slug}`)}
      className="group flex h-full flex-col rounded-lg bg-card p-5 ring-1 ring-black/5 transition hover:ring-amber/60"
    >
      <div className="mb-2 flex flex-wrap gap-1.5">
        {boutique.hasOnlineStore && (
          <span className="rounded bg-forest/10 px-2 py-0.5 font-body text-[11px] font-semibold tracking-wide text-forest">
            {t.onlineBadge}
          </span>
        )}
        {boutique.hasPhysicalStore && (
          <span className="rounded bg-night/10 px-2 py-0.5 font-body text-[11px] font-semibold tracking-wide text-night">
            {t.physicalBadge}
          </span>
        )}
      </div>

      <p className="font-body text-xs uppercase tracking-wide text-warm-gray">
        {t.townNames[boutique.town]}
        {boutique.district ? `, ${boutique.district}` : ''}
      </p>

      {/* 🔴 Putiikin nimi on DM Sansilla eikä Bebasilla: Bebas on versaali ja
          "SAMEKKI, SÁMI DUODJI" olisi lukukelvoton. Sama päätös kuin
          giftsin tuotenimissä 1.8. */}
      <h3 className="mt-1 font-body text-lg font-semibold text-night group-hover:text-amber">
        {boutique.name}
      </h3>

      <p className="mt-2 grow font-body text-sm leading-relaxed text-warm-gray">
        {c.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {c.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-sand px-2.5 py-0.5 font-body text-xs text-night">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
```

- [ ] **Step 2: Write the hub page**

Create `src/pages/Boutiques.tsx`:

```tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import BoutiqueCard from '../components/shop/BoutiqueCard'
import {
  BOUTIQUES, boutiquesByTown, townsWithPages, townsWithoutPages, type TownId,
} from '../data/boutiques'
import { SHOP_COPY } from '../locales/shopCopy'
import { useLang, useLocalePath } from '../i18n/useLang'

type Filter = 'all' | 'online' | 'physical'

export default function Boutiques() {
  const lang = useLang()
  const localePath = useLocalePath()
  const t = SHOP_COPY[lang].boutique
  const [filter, setFilter] = useState<Filter>('all')

  const visible = BOUTIQUES.filter((b) =>
    filter === 'all' ? true : filter === 'online' ? b.hasOnlineStore : b.hasPhysicalStore,
  )

  const elsewhere: TownId[] = townsWithoutPages()

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <header className="mx-auto max-w-7xl px-4 pt-10 pb-6">
          <h1 className="font-heading text-5xl tracking-wide text-night md:text-6xl">
            {t.hubTitle}
          </h1>
          <p className="mt-2 font-body text-lg text-night">{t.hubLead}</p>
          <p className="mt-3 max-w-2xl font-body text-warm-gray">{t.hubIntro}</p>
          {/* Luku luetaan datasta. Copyyn kirjoitettu luku ajautui storessa
              erilleen todellisuudesta: badge lupasi 16 kun putiikkeja oli 15. */}
          <p className="mt-1 font-body text-sm text-warm-gray">{t.count(BOUTIQUES.length)}</p>
        </header>

        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label={t.hubTitle}>
            {(['all', 'online', 'physical'] as Filter[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full px-4 py-2 font-body text-sm transition ${
                  filter === f
                    ? 'bg-night text-white'
                    : 'bg-card text-night ring-1 ring-black/5 hover:ring-amber/60'
                }`}
              >
                {f === 'all' ? t.filterAll : f === 'online' ? t.filterOnline : t.filterPhysical}
              </button>
            ))}
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((b) => (
              <li key={b.slug}><BoutiqueCard boutique={b} /></li>
            ))}
          </ul>
        </div>

        <section className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="font-heading text-3xl tracking-wide text-night">{t.townsH2}</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {townsWithPages().map((town) => (
              <li key={town}>
                <Link
                  to={localePath(`/boutiques/${town}`)}
                  className="inline-flex items-baseline gap-2 rounded-full bg-card px-4 py-2 font-body text-night ring-1 ring-black/5 hover:ring-amber/60"
                >
                  <span className="font-semibold">{t.townNames[town]}</span>
                  <span className="text-sm text-warm-gray">
                    {t.count(boutiquesByTown(town).length)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {elsewhere.length > 0 && (
            <>
              <h3 className="mt-8 font-heading text-2xl tracking-wide text-night">
                {t.elsewhereH2}
              </h3>
              <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {elsewhere.flatMap((town) =>
                  boutiquesByTown(town).map((b) => (
                    <li key={b.slug}><BoutiqueCard boutique={b} /></li>
                  )),
                )}
              </ul>
            </>
          )}
        </section>

        <section className="mx-auto max-w-3xl px-4 pb-16">
          <div className="rounded-lg bg-card p-6 ring-1 ring-black/5">
            <h2 className="font-heading text-2xl tracking-wide text-night">{t.listingH2}</h2>
            <p className="mt-2 font-body text-warm-gray">{t.listingBody}</p>
            <a
              href="mailto:info@laplandvibes.com?subject=LaplandVibes%20putiikkilistaus"
              className="mt-4 inline-block rounded-full bg-amber px-5 py-2.5 font-body font-semibold text-white hover:bg-amber-light"
            >
              {t.listingCta}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Wire the routes**

Muokkaa `src/routes.tsx`:

```tsx
// Lisää importteihin:
import { boutiqueTownPaths } from './data/boutiques'

const Boutiques = lazy(() => import('./pages/Boutiques'))
const BoutiqueTown = lazy(() => import('./pages/BoutiqueTown'))
const Boutique = lazy(() => import('./pages/Boutique'))
```

Laajenna `CONTENT_PATHS`:

```tsx
export const CONTENT_PATHS: string[] = [
  '/',
  ...CATEGORIES.map((c) => c.slug),
  '/gift-guides',
  '/shipping',
  '/boutiques',
  // Paikkakuntapolut tulevat datasta: kynnyksen ylittävä paikkakunta saa
  // reitin, prerenderin ja sitemap-rivin ilman käsityötä.
  ...boutiqueTownPaths(),
]
```

Laajenna `ELEMENTS`:

```tsx
const ELEMENTS: Record<string, ReactElement> = {
  '/': <Home />,
  '/gift-guides': <GiftGuides />,
  '/shipping': <Shipping />,
  '/boutiques': <Boutiques />,
  ...Object.fromEntries(boutiqueTownPaths().map((p) => [p, <BoutiqueTown />])),
  '/privacy': <Privacy />,
  '/terms': <Terms />,
  '/cookie-policy': <CookiePolicy />,
  '/unsubscribe': <Unsubscribe />,
}
```

Lisää param-reitti `/product/:slug`-rivin viereen:

```tsx
          <Route path={`${prefix}/product/:slug`} element={<Product />} />
          <Route path={`${prefix}/boutique/:slug`} element={<Boutique />} />
```

🔴 `ELEMENTS`in fallback on `<Category />`. Ilman paikkakuntapolkujen riviä
`/boutiques/rovaniemi` renderöisi kategoriasivun, joka ei löydä kategoriaa ja
palauttaisi NotFoundin. Vika näkyisi vasta selaimessa, ei buildissa.

- [ ] **Step 4: Verify build and existing tests**

Run: `npx tsc -b --noEmit && npm test`
Expected: ei tyyppivirheitä, testit vihreinä

Tässä vaiheessa `BoutiqueTown` ja `Boutique` eivät vielä ole olemassa, joten
`tsc` valittaa niistä. Luo väliaikaiset tynkäsivut jotta reitit kääntyvät, ja
täytä ne tehtävissä 6 ja 7:

```tsx
// src/pages/BoutiqueTown.tsx (tynkä, korvataan Task 6:ssa)
export default function BoutiqueTown() { return null }
```

```tsx
// src/pages/Boutique.tsx (tynkä, korvataan Task 7:ssä)
export default function Boutique() { return null }
```

- [ ] **Step 5: Verify in the browser**

Run: `npm run dev`

Avaa `http://localhost:5173/boutiques` ja `http://localhost:5173/fi/boutiques`.
Odotettu: 14 korttia, kolme suodatinpainiketta, kaksi paikkakuntapilleriä
(Rovaniemi 8, Inari 3), muualla-osiossa 3 korttia, listaus-CTA.
Suodatin "Toimittaa kotiin" jättää 8 korttia.

- [ ] **Step 6: Commit**

```bash
git add src/components/shop/BoutiqueCard.tsx src/pages/Boutiques.tsx src/pages/BoutiqueTown.tsx src/pages/Boutique.tsx src/routes.tsx
git commit -m "putiikit: hakemiston etusivu, kortti ja reitit"
```

---

## Task 6: Paikkakuntasivu ja duodji-osio

**Files:**
- Modify: `src/pages/BoutiqueTown.tsx` (korvaa Task 5:n tynkä)

**Interfaces:**
- Consumes: `boutiquesByTown`, `townsWithPages`, `TownId` (Tasks 1-2); `BoutiqueCard` (Task 5); `SHOP_COPY[lang].boutique` (Task 4); `stripLocale` from `src/i18n/useLang.ts`
- Produces: `BoutiqueTown` default export

- [ ] **Step 1: Write the page**

Replace `src/pages/BoutiqueTown.tsx`:

```tsx
import { useLocation } from 'react-router-dom'
import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import BoutiqueCard from '../components/shop/BoutiqueCard'
import { boutiquesByTown, townsWithPages, type TownId } from '../data/boutiques'
import { SHOP_COPY } from '../locales/shopCopy'
import { useLang, stripLocale } from '../i18n/useLang'
import NotFound from './NotFound'

/**
 * Yksi komponentti palvelee kaikkia paikkakuntasivuja: paikkakunta luetaan
 * polusta, samoin kuin Category lukee kategorian. Uusi paikkakuntasivu on
 * seuraus datasta eikä uusi tiedosto.
 */
export default function BoutiqueTown() {
  const lang = useLang()
  const { pathname } = useLocation()
  const t = SHOP_COPY[lang].boutique

  const slug = stripLocale(pathname).replace(/\/$/, '').split('/').pop() ?? ''
  const town = townsWithPages().find((x) => x === slug) as TownId | undefined
  if (!town) return <NotFound />

  const all = boutiquesByTown(town)
  const online = all.filter((b) => b.hasOnlineStore)
  const physical = all.filter((b) => b.hasPhysicalStore)
  const showDuodji = all.some((b) => b.samiAuthorized)

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <header className="mx-auto max-w-7xl px-4 pt-10 pb-6">
          <h1 className="font-heading text-5xl tracking-wide text-night md:text-6xl">
            {t.townNames[town]}
          </h1>
          <p className="mt-2 font-body text-warm-gray">{t.count(all.length)}</p>
        </header>

        {online.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-10">
            <h2 className="font-heading text-3xl tracking-wide text-night">{t.shopAtH2}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {online.map((b) => <li key={b.slug}><BoutiqueCard boutique={b} /></li>)}
            </ul>
          </section>
        )}

        {physical.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-10">
            <h2 className="font-heading text-3xl tracking-wide text-night">{t.visitH2}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {physical.map((b) => <li key={b.slug}><BoutiqueCard boutique={b} /></li>)}
            </ul>
          </section>
        )}

        {/* Duodji-osio näkyy vain jos paikkakunnalla on auktorisoituja myyjiä.
            Ehto on datassa eikä paikkakunnan nimessä: jos Rovaniemelle tulee
            auktorisoitu myyjä, osio ilmestyy sinne itsestään. */}
        {showDuodji && (
          <section className="mx-auto max-w-3xl px-4 pb-16">
            <div className="rounded-lg bg-card p-6 ring-1 ring-black/5">
              <h2 className="font-heading text-2xl tracking-wide text-night">{t.duodjiH2}</h2>
              <p className="mt-3 font-body leading-relaxed text-warm-gray">{t.duodjiBody}</p>
              <ul className="mt-4 space-y-1">
                {all.filter((b) => b.samiAuthorized).map((b) => (
                  <li key={b.slug} className="font-body text-sm text-night">
                    <span className="font-semibold">{b.name}</span>
                    <span className="text-warm-gray">, {t.duodjiAuthorized.toLowerCase()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Verify types**

Run: `npx tsc -b --noEmit`
Expected: ei virheitä

- [ ] **Step 3: Verify in the browser**

Run: `npm run dev`

- `http://localhost:5173/boutiques/rovaniemi`: 8 putiikkia, "Order from home" 5 kpl, "Visit in person" 8 kpl, **ei** duodji-osiota.
- `http://localhost:5173/boutiques/inari`: 3 putiikkia, duodji-osio näkyy, siinä kaikki kolme nimeltä.
- `http://localhost:5173/fi/boutiques/inari`: sama suomeksi.
- `http://localhost:5173/boutiques/posio`: NotFound, koska Posio ei ylitä kynnystä.

- [ ] **Step 4: Commit**

```bash
git add src/pages/BoutiqueTown.tsx
git commit -m "putiikit: paikkakuntasivu ja duodjin aitousosio"
```

---

## Task 7: Putiikkisivu ja ristiinlinkki kauppaan

**Files:**
- Modify: `src/pages/Boutique.tsx` (korvaa Task 5:n tynkä)

**Interfaces:**
- Consumes: `boutiqueBySlug`, `boutiqueOutboundUrl` (Task 1); `BOUTIQUE_COPY` (Task 3); `SHOP_COPY[lang]` (Task 4); `categoryById` from `src/data/categories.ts`
- Produces: `Boutique` default export

- [ ] **Step 1: Write the page**

Replace `src/pages/Boutique.tsx`:

```tsx
import { Link, useParams } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import ShopNav from '../components/ShopNav'
import Footer from '../components/Footer'
import { boutiqueBySlug, boutiqueOutboundUrl } from '../data/boutiques'
import { categoryById } from '../data/categories'
import { BOUTIQUE_COPY } from '../locales/boutiqueCopy'
import { SHOP_COPY } from '../locales/shopCopy'
import { useLang, useLocalePath } from '../i18n/useLang'
import NotFound from './NotFound'

export default function Boutique() {
  const lang = useLang()
  const localePath = useLocalePath()
  const { slug } = useParams<{ slug: string }>()
  const t = SHOP_COPY[lang].boutique
  const tc = SHOP_COPY[lang].category

  const boutique = slug ? boutiqueBySlug(slug) : undefined
  if (!boutique) return <NotFound />

  const c = BOUTIQUE_COPY[lang][boutique.slug]
  const category = categoryById(boutique.giftsCategory)

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 pt-8 pb-4">
          <Link
            to={localePath('/boutiques')}
            className="font-body text-sm text-warm-gray hover:text-amber"
          >
            {t.hubTitle}
          </Link>
        </div>

        <header className="mx-auto max-w-3xl px-4 pb-6">
          <p className="font-body text-xs uppercase tracking-wide text-warm-gray">
            {t.townNames[boutique.town]}
            {boutique.district ? `, ${boutique.district}` : ''}
          </p>
          <h1 className="mt-1 font-body text-4xl font-semibold text-night">{boutique.name}</h1>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {boutique.hasOnlineStore && (
              <span className="rounded bg-forest/10 px-2 py-0.5 font-body text-[11px] font-semibold tracking-wide text-forest">
                {t.onlineBadge}
              </span>
            )}
            {boutique.hasPhysicalStore && (
              <span className="rounded bg-night/10 px-2 py-0.5 font-body text-[11px] font-semibold tracking-wide text-night">
                {t.physicalBadge}
              </span>
            )}
            {boutique.samiAuthorized && (
              <span className="rounded bg-amber/15 px-2 py-0.5 font-body text-[11px] font-semibold tracking-wide text-amber">
                {t.duodjiAuthorized}
              </span>
            )}
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-4 pb-8">
          <p className="font-body text-lg leading-relaxed text-night">{c.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {c.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-card px-3 py-1 font-body text-sm text-night">
                {tag}
              </span>
            ))}
          </div>

          {/* 🔴 Tämä ei ole affiliate-linkki vaan viittaus lappilaiseen
              yritykseen, joten rel="sponsored" olisi väärä signaali Googlelle.
              UTM riittää attribuutioon. */}
          <a
            href={boutiqueOutboundUrl(boutique)}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 font-body font-semibold text-white hover:bg-amber-light"
          >
            {t.outboundCta}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </section>

        {/* Ristiinlinkki kauppaan. Tämä on se mekanismi jolla hakemisto
            ansaitsee paikkansa giftsin sisällä eikä jää irralliseksi osioksi. */}
        <section className="mx-auto max-w-3xl px-4 pb-16">
          <div className="rounded-lg bg-card p-6 ring-1 ring-black/5">
            <h2 className="font-heading text-2xl tracking-wide text-night">{t.crossSellH2}</h2>
            <p className="mt-2 font-body text-warm-gray">{tc.intro[category.id]}</p>
            <Link
              to={localePath(category.slug)}
              className="mt-4 inline-block font-body font-semibold text-amber hover:underline"
            >
              {tc.names[category.id]}: {t.crossSellCta}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Verify types**

Run: `npx tsc -b --noEmit`
Expected: ei virheitä

- [ ] **Step 3: Verify in the browser**

Run: `npm run dev`

- `http://localhost:5173/boutique/marttiini`: nimi, Rovaniemi, kaksi merkintää, kuvaus, tagit, uloslinkki, ristiinlinkki kategoriaan "handicrafts".
- Tarkista uloslinkin `href` selaimen inspectorista: sen on oltava
  `https://www.marttiini.fi?utm_source=laplandvibes&utm_medium=referral&utm_campaign=store_marttiini`
  ja `rel="noopener"` **ilman** sanaa `sponsored`.
- `http://localhost:5173/boutique/duodji-shop`: kolmas merkintä "Authorised seller of Sámi duodji" näkyy.
- `http://localhost:5173/fi/boutique/pentik`: suomeksi, ristiinlinkki vie `/fi/design`.
- `http://localhost:5173/boutique/ei-olemassa`: NotFound.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Boutique.tsx
git commit -m "putiikit: putiikkisivu ja ristiinlinkki kaupan kategoriaan"
```

---

## Task 8: Navilinkki, prerender-metat ja sitemap

**Files:**
- Modify: `src/components/ShopNav.tsx`
- Modify: `scripts/build-routes-json.mjs`
- Test: `src/data/__tests__/boutiques.test.ts`

**Interfaces:**
- Consumes: kaikki edelliset
- Produces: `/boutiques`, paikkakuntapolut ja `/boutique/<slug>` prerenderin `routes.json`iin omilla title- ja description-riveillään 12 kielellä

- [ ] **Step 1: Write the failing test**

Append to `src/data/__tests__/boutiques.test.ts`:

Lisää `CONTENT_PATHS` tiedoston ylimpään tuontilohkoon:

```typescript
import { CONTENT_PATHS } from '../../routes'
```

Lisää sitten tiedoston loppuun:

```typescript
describe('reitit ja hakemiston kattavuus', () => {
  it('hakemiston etusivu on sisältöreittinä', () => {
    expect(CONTENT_PATHS).toContain('/boutiques')
  })

  it('jokainen kynnyksen ylittävä paikkakunta on sisältöreittinä', () => {
    for (const p of boutiqueTownPaths()) expect(CONTENT_PATHS).toContain(p)
  })

  it('kynnyksen alittavalle paikkakunnalle ei synny reittiä', () => {
    for (const t of townsWithoutPages()) {
      expect(CONTENT_PATHS).not.toContain(`/boutiques/${t}`)
    }
  })

  it('sisältöreiteissä ei ole duplikaatteja', () => {
    expect(new Set(CONTENT_PATHS).size).toBe(CONTENT_PATHS.length)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- boutiques`
Expected: FAIL, `CONTENT_PATHS` ei sisällä `/boutiques` (jos Task 5 on tekemättä) tai PASS jos Task 5 on tehty. Jos PASS, jatka suoraan.

- [ ] **Step 3: Add the nav link**

Muokkaa `src/components/ShopNav.tsx`. Etsi navilinkkien lista ja lisää hakemisto
`shipping`-linkin viereen, samalla kuviolla kuin olemassa olevat linkit:

```tsx
<Link to={localePath('/boutiques')} className={navLinkClass}>
  {SHOP_COPY[lang].boutique.hubTitle}
</Link>
```

🔴 Lue tiedosto ensin ja käytä sen omia luokkia ja rakennetta. Älä keksi
`navLinkClass`-nimeä jos tiedostossa on toinen nimi.

- [ ] **Step 4: Add prerender meta**

Muokkaa `scripts/build-routes-json.mjs`. Lisää importteihin:

```javascript
import { BOUTIQUES, boutiqueTownPaths, townsWithPages, boutiquesByTown } from '../src/data/boutiques.ts'
import { BOUTIQUE_COPY } from '../src/locales/boutiqueCopy/index.ts'
```

Lisää `productRoutes`-määrittelyn jälkeen:

```javascript
// Hakemiston etusivu, paikkakuntasivut ja 14 putiikkisivua. Metat luetaan
// samasta datasta kuin sivut itse, jottei prerender voi ajautua sivun
// sisällöstä erilleen.
const boutiqueHubRoute = route(
  '/boutiques',
  { title: `${SHOP_COPY.en.boutique.hubTitle} | LaplandGifts`, description: SHOP_COPY.en.boutique.hubIntro },
  { title: `${SHOP_COPY.fi.boutique.hubTitle} | LaplandGifts`, description: SHOP_COPY.fi.boutique.hubIntro },
)

const boutiqueTownRoutes = townsWithPages().map((town) => {
  const n = boutiquesByTown(town).length
  const build = (lang) => ({
    title: `${SHOP_COPY[lang].boutique.townNames[town]}: ${SHOP_COPY[lang].boutique.hubTitle} | LaplandGifts`,
    description: `${SHOP_COPY[lang].boutique.count(n)}. ${SHOP_COPY[lang].boutique.hubIntro}`,
  })
  return route(`/boutiques/${town}`, build('en'), build('fi'))
})

const boutiqueRoutes = BOUTIQUES.map((b) => {
  const build = (lang) => ({
    title: `${b.name}, ${SHOP_COPY[lang].boutique.townNames[b.town]} | LaplandGifts`,
    description: BOUTIQUE_COPY[lang][b.slug].description,
  })
  return route(`/boutique/${b.slug}`, build('en'), build('fi'))
})
```

Lisää `routes`-taulukkoon `...productRoutes`-rivin jälkeen:

```javascript
  boutiqueHubRoute,
  ...boutiqueTownRoutes,
  ...boutiqueRoutes,
```

🔴 Lue skripti ensin: `route()`-apurin allekirjoitus ja se, miten muut 10 kieltä
johdetaan en/fi-parista, on jo olemassa. Noudata sitä äläkä keksi omaa.

- [ ] **Step 5: Run the generator and verify**

Run:
```bash
node scripts/build-routes-json.mjs && node -e "
const r=JSON.parse(require('fs').readFileSync('scripts/routes.json','utf8'));
const b=r.filter(x=>String(x.path||x.route||'').includes('boutique'));
console.log('putiikkireitteja: '+b.length);
console.log(b.slice(0,3).map(x=>JSON.stringify(x).slice(0,140)).join('\n'));
"
```

Expected: `putiikkireitteja: 17` (1 hub + 2 paikkakuntaa + 14 putiikkia), ja
jokaisella oma title ja description.

🔴 `scripts/routes.json` ja `public/sitemap.xml` ovat toisen session muokkaamia.
Aja generaattori, mutta **älä committaa** kumpaakaan: build regeneroi ne, ja
niissä on WIPiä joka ei ole sinun.

- [ ] **Step 6: Run the full test suite**

Run: `npm test && npx tsc -b --noEmit`
Expected: kaikki vihreinä, ei tyyppivirheitä

- [ ] **Step 7: Commit**

```bash
git add src/components/ShopNav.tsx scripts/build-routes-json.mjs src/data/__tests__/boutiques.test.ts
git commit -m "putiikit: navilinkki ja prerender-metat 17 uudelle reitille"
```

---

## Valmistumisen tarkistus

Kun kaikki 8 tehtävää ovat vihreinä:

```bash
npm test                 # kaikki testit
npx tsc -b --noEmit      # tyypit
npm run lint             # eslint
git log --oneline -8     # 8 committia, vain omat tiedostot
git status --short | wc -l   # 32, eli toisen session WIP koskematta
```

Vaihe 2 (laplandstore.fi kevennys) saa oman suunnitelmansa. Se olettaa että
`/boutiques` ja `/boutique/<slug>` ovat livenä, koska storen kortit linkittävät
niihin.
