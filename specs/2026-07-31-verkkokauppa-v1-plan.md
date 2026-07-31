# LaplandGifts.com V1 — verkkokauppa-toteutussuunnitelma

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Muuttaa laplandgifts.com yksisivuisesta "shop opening soon" -sivusta monisivuiseksi, aidon verkkokaupan näköiseksi lahjakaupaksi, jossa 7 kategoriaa, tuotesivut ja kortti→kumppani-ostopolku, uusi kaupallinen visuaalinen ilme ja herokuvat etusivulla.

**Architecture:** Nykyinen React 19 + React Router 7 -SPA säilyy, mutta reitit generoidaan ohjelmallisesti 12 kielelle käsin monistetun listan sijaan. Tuotteet ja kumppanit elävät tyypitetyssä datamoduulissa (`src/data/`), josta kategoriasivut, tuotesivut ja etusivun nostot renderöityvät. Ostonapit rakentavat kumppanikohtaisen affiliate-URL:n yhdellä builderilla, joka pakottaa oikeat rel-attribuutit ja UTM:t. Prerender-putki (`scripts/_prerender_routes.mjs` + `scripts/routes.json`) kasvaa 4 reitistä ~20 reittiin × 12 kieltä.

**Tech Stack:** React 19.2, React Router 7.14, Tailwind CSS v4.2 (`@tailwindcss/vite`), TypeScript 5.9, Vite 8, Lucide React, Vitest (lisätään Task 1:ssä), Cloudflare Pages + wrangler, Supabase (vain Task 13).

---

## Global Constraints

Nämä koskevat **jokaista** tehtävää. Arvot on kopioitu speksistä, CLAUDE.md:stä ja verkoston muisteista sanatarkasti.

**Stack ja kielletyt:**
- React 19, React Router 7, Tailwind v4, Vite 8, TypeScript, Lucide React.
- **Ei Framer Motionia, GSAP:ia, AOS:ia eikä muita animaatiokirjastoja.** Kaikki animaatio on puhdasta CSS:ää/Tailwindia.
- Ei uusia fontteja: Playfair Display (`--font-heading`), DM Sans (`--font-body`), Bebas Neue (`--font-logo`, vain wordmark).

**Jaetut komponentit — älä koske:**
- `src/shared/CookieBanner.tsx` ja `src/shared/Footer.tsx` ovat verkostotasolla identtisiä. Älä muokkaa niitä. Ne kantavat Suomi-identiteetin (Finland blue `#002F6C` + valkoinen), jonka on säilyttävä näkyvissä.
- Wordmark: `#` pinkki (`--color-pink` `#EC4899`), `LAPLAND` harmaa (`--color-gray`), `GIFTS` amber (`--color-amber`), fontti `--font-logo` (Bebas Neue).

**Affiliate-säännöt (ei-neuvoteltavat):**
- Jokainen kumppanilinkki: `target="_blank" rel="sponsored nofollow noopener"`. **EI `noreferrer`** (Worker lukee Refererin attribuutioon).
- GYG-linkit vain `shared/gyg/picks.ts`:n `gygHref()`-funktion kautta (`https://go.laplandvibes.com/go/activities/...`). Raakaa partner-URL:ia ei kirjoiteta lähdekoodiin.
- 🔴 **Väärä GYG-ID ei 404:ää** vaan tarjoilee hiljaa väärän sivun toisesta maasta. Älä koskaan keksi tai käsin muokkaa GYG-polkua. Käytä vain `picks.ts`:n jo verifioituja rivejä.
- Ei-affiliate-kumppanien suorissa linkeissä UTM: `utm_source=laplandvibes`, `utm_medium=referral`, `utm_campaign=gifts_<slug>`.
- SID-konventio: snake_case, ei domainia. Esim. `gifts_design_card`, `gifts_product_cta`.
- `AffiliateDisclosure` on **vain footerissa** (jaettu Footer hoitaa) — ei inline-versioita heron alle.

**Sisältö ja rehellisyys:**
- Ei keksittyjä hintoja. Jokaisella hinnalla on `priceCheckedAt`-päivä ja näkyvä "alk."-etuliite + lähdemaininta.
- Ei keksittyjä tilastoja, ei keksittyjä arvosteluja, ei tähtiarvioita.
- Kielletyt sanat näkyvässä copyssa: "stunning", "magical" (ansaitsematta), "world-class", "breathtaking".
- **Ei em-viivoja (—) näkyvässä copyssa** (Vesan pysyvä sääntö: em-viiva = AI-tell). Käytä pilkkua, kaksoispistettä tai katkaise lause.
- Ei täytecopya ("In this article we will explore…").
- **Ruka ja Kuusamo eivät ole Lappia.** Älä esitä kuusamolaista tuottajaa lappilaisena.
- Saamelaistuotteet vain Duodji-auktorisoidusta lähteestä, tuotesivulla opettava kulttuurikonteksti, ei imitaatioita.
- Suomen kielioppi: appositio ei taivu postposition jälkeen (esim. "Rovaniemellä sijaitsevan Marttiinin", ei "Marttiini:n").

**Kuvat:**
- Ei Unsplashia, ei stock-kuvia. Vain AI-generoidut (Picsart ensisijainen työkalu) tai kumppanin feed-kuvat.
- Sama kuva ei saa esiintyä kahdella ekosysteemisivustolla.
- Kaikki kuvat AVIF + WebP `<picture>`-parina (nykyinen käytäntö `public/images/`:ssä).

**Mobiili ja saavutettavuus:**
- Ei vaakascrollia 375×812:ssa.
- Hero ja täyskorkeat osiot: `min-h-[…svh]`, **ei `vh`** (Safarin URL-palkki).
- Kaikki input-kentät `text-base` (16 px), muuten iOS zoomaa.
- Kosketuskohteet ≥ 44×44 px.

**Deploy ja verifiointi:**
- Deploy **aina** wranglerilla: `npx wrangler pages deploy dist --project-name=laplandgifts --branch=main`. CI on rikki. **Ilman `--branch=main` deploy menee Preview'hun eikä apex päivity.**
- Repossa on muiden sessioiden committoimatonta työtä (`src/locales/copy.*.ts`, `public/sitemap.xml`). **Buildaa aina eristetyssä worktreessä HEADista**, älä työpuusta.
- Kuorimittari ennen deployta: `find dist -name index.html | wc -l` on oltava `reittimäärä × 12`. Arvo 1 tarkoittaa että prerender ei ajanut.
- Verifiointi vain renderöidystä DOM:ista, ei chunk-hashista.
- Linkkiportti: HTTP 200 **ei riitä**. Vaaditaan 200 + oikea `<title>` + rivi bodyä.

---

## File Structure

**Uudet tiedostot:**

| Tiedosto | Vastuu |
|---|---|
| `src/data/types.ts` | Kaupan datatyypit: `CategoryId`, `ShippingZone`, `Partner`, `Product` |
| `src/data/partners.ts` | Kumppanirekisteri + `partnerHref()`-builder (UTM/tracking/GYG) |
| `src/data/products.ts` | Tuotekatalogi (seed) + hakufunktiot |
| `src/data/categories.ts` | 7 kategorian metadata: slug, ikoni, kuva, järjestys |
| `src/data/__tests__/catalog.test.ts` | Datan eheystestit (uniikit slugit, viittaukset, hinnat) |
| `src/data/__tests__/partners.test.ts` | `partnerHref()`-testit (rel-attribuutit, UTM, GYG) |
| `src/components/shop/ProductCard.tsx` | Tuotekortti (kuva, brändi, nimi, alk-hinta, badget) |
| `src/components/shop/BuyButton.tsx` | Ostonappi: pakottaa rel-attribuutit + oikean hrefin |
| `src/components/shop/ShippingBadge.tsx` | Toimitusalue-merkintä ("Toimitus vain Eurooppaan" jne.) |
| `src/components/shop/ProductGridSection.tsx` | Responsiivinen tuotegrid + tyhjä tila |
| `src/components/shop/CategoryCard.tsx` | Kategoriakortti etusivulle |
| `src/components/ShopNav.tsx` | Kaupallinen sticky-navi: kategoriat + toimitusmaavalitsin |
| `src/context/ShippingCountry.tsx` | Toimitusmaan tila (localStorage) + suodatushook |
| `src/pages/Category.tsx` | Kategoriasivu (yksi komponentti, kategoria URL:sta) |
| `src/pages/Product.tsx` | Tuotesivu |
| `src/pages/GiftGuides.tsx` | Lahjaopassivu, oikeat tuotelinkit |
| `src/pages/Shipping.tsx` | Toimitustiedot + kumppanikohtainen taulukko |
| `src/routes.tsx` | Reittien ohjelmallinen generointi 12 kielelle |
| `src/locales/shopCopy.ts` | Kaupan UI-copy 12 kielellä (erillään ChromeCopysta) |
| `scripts/build-routes-json.mjs` | Generoi `scripts/routes.json` datasta (metat 12 kielellä) |
| `scripts/build-sitemap.mjs` | Generoi `public/sitemap.xml` samasta datasta |

**Muokattavat tiedostot:**

| Tiedosto | Muutos |
|---|---|
| `src/index.css` | Uusi neutraali pintaskaala + typografia-asteikko |
| `src/App.tsx` | Käsin monistettu reittilista → `src/routes.tsx`; Breadcrumb-labelMap täytetään |
| `src/pages/Home.tsx` | Uusi kaupallinen ladonta: hero, kategoriagrid, nostot |
| `src/components/Hero.tsx` | Uusi commerce-hero, "shop opening soon" -badge pois |
| `src/components/ProductCategories.tsx` | 7 kategoriaa, linkit kategoriasivuille |
| `src/components/ProductGrid.tsx` | Korvataan oikealla datalla (ei "notify me") |
| `src/components/GiftGuide.tsx` | Ehdotukset linkittyvät oikeisiin tuotteisiin |
| `src/locales/types.ts` | `ChromeCopy`-laajennus: nav, hero, shop-osiot |
| `src/locales/copy.{12 kieltä}.ts` | Uusi copy kaikille kielille |
| `index.html` | Root-metojen päivitys (title-taulukko + kuvaus) |
| `package.json` | `test`-skripti + Vitest devDeps + `build`-ketjuun routes/sitemap-generointi |

---

## Task 1: Vitest + kaupan datatyypit ja kumppanirekisteri

**Files:**
- Create: `src/data/types.ts`
- Create: `src/data/partners.ts`
- Create: `src/data/__tests__/partners.test.ts`
- Create: `vitest.config.ts`
- Modify: `package.json` (scripts.test + devDependencies)

**Interfaces:**
- Consumes: `shared/gyg/picks.ts` → `GygPick`, `gygHref(pick, lang?)`, `GYG_PRICE_AS_OF`
- Produces:
  - `type CategoryId = 'design' | 'clothing' | 'handicrafts' | 'treats' | 'superfoods' | 'merch' | 'experiences'`
  - `type ShippingZone = 'worldwide' | 'eu' | 'fi'`
  - `interface Partner` (kentät alla)
  - `PARTNERS: Record<string, Partner>`
  - `partnerHref(partner: Partner, productUrl: string, campaign: string): string`
  - `AFFILIATE_REL = 'sponsored nofollow noopener'`

- [ ] **Step 1: Asenna Vitest**

```bash
cd laplandgifts
npm install -D vitest@^3
```

- [ ] **Step 2: Luo `vitest.config.ts`**

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/__tests__/**/*.test.ts'],
  },
})
```

- [ ] **Step 3: Lisää test-skripti `package.json`:iin**

`scripts`-lohkoon, `lint`-rivin jälkeen:

```json
"test": "vitest run",
```

- [ ] **Step 4: Kirjoita epäonnistuva testi `src/data/__tests__/partners.test.ts`**

```ts
import { describe, it, expect } from 'vitest'
import { PARTNERS, partnerHref, AFFILIATE_REL } from '../partners'

describe('AFFILIATE_REL', () => {
  it('sisältää sponsored, nofollow ja noopener', () => {
    expect(AFFILIATE_REL.split(' ').sort()).toEqual(['nofollow', 'noopener', 'sponsored'])
  })

  it('EI sisällä noreferreriä (Worker lukee Refererin attribuutioon)', () => {
    expect(AFFILIATE_REL).not.toContain('noreferrer')
  })
})

describe('partnerHref', () => {
  it('lisää UTM-parametrit suoraan kumppanilinkkiin', () => {
    const p = PARTNERS.moomin
    const href = partnerHref(p, 'https://shop.moomin.com/products/mug', 'gifts_moomin_mug')
    const u = new URL(href)
    expect(u.host).toBe('shop.moomin.com')
    expect(u.searchParams.get('utm_source')).toBe('laplandvibes')
    expect(u.searchParams.get('utm_medium')).toBe('referral')
    expect(u.searchParams.get('utm_campaign')).toBe('gifts_moomin_mug')
  })

  it('säilyttää kumppanin omat query-parametrit', () => {
    const p = PARTNERS.moomin
    const href = partnerHref(p, 'https://shop.moomin.com/p?variant=42', 'gifts_x')
    const u = new URL(href)
    expect(u.searchParams.get('variant')).toBe('42')
    expect(u.searchParams.get('utm_source')).toBe('laplandvibes')
  })

  it('käyttää Adtraction-trackinglinkkiä kun template on määritelty', () => {
    const p = PARTNERS.halti
    const href = partnerHref(p, 'https://halti.com/products/takki', 'gifts_halti_takki')
    expect(href.startsWith('https://to.halti.fi/t/t?')).toBe(true)
    expect(href).toContain(encodeURIComponent('https://halti.com/products/takki'))
  })

  it('ei koskaan palauta raakaa partner-URLia affiliate-kumppanille', () => {
    const p = PARTNERS.halti
    const href = partnerHref(p, 'https://halti.com/x', 'gifts_x')
    expect(href).not.toBe('https://halti.com/x')
  })

  it('jokaisella kumppanilla on toimitusalue ja verifiointipäivä', () => {
    for (const [id, p] of Object.entries(PARTNERS)) {
      expect(p.shipsTo, `${id}.shipsTo puuttuu`).toBeTruthy()
      expect(p.verifiedAt, `${id}.verifiedAt puuttuu`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })
})
```

- [ ] **Step 5: Aja testi ja varmista että se epäonnistuu**

Run: `npm test`
Expected: FAIL, "Failed to resolve import '../partners'"

- [ ] **Step 6: Kirjoita `src/data/types.ts`**

```ts
/** Kaupan seitsemän kategoriaa. URL-slug = tämä arvo. */
export type CategoryId =
  | 'design'
  | 'clothing'
  | 'handicrafts'
  | 'treats'
  | 'superfoods'
  | 'merch'
  | 'experiences'

export const CATEGORY_IDS: CategoryId[] = [
  'design', 'clothing', 'handicrafts', 'treats', 'superfoods', 'merch', 'experiences',
]

/**
 * Mihin kumppani toimittaa. Tämä ratkaisee sekä tuotekortin merkinnän että
 * kategoriasivun toimitusmaasuodattimen.
 *   worldwide = maailmanlaajuinen
 *   eu        = vain EU (esim. Halti, Luhta, kuivalihat)
 *   fi        = vain Suomi (esim. Finlayson, Riipisen)
 */
export type ShippingZone = 'worldwide' | 'eu' | 'fi'

/** Verkosto, jonka kautta klikki laskutetaan. */
export type PartnerNetwork =
  | 'adtraction'
  | 'awin'
  | 'daisycon'
  | 'circlewise'
  | 'inhouse'
  | 'gyg'
  | 'pod'
  | 'direct'

export interface Partner {
  id: string
  name: string
  network: PartnerNetwork
  /** Kumppanin kaupan origin, esim. "https://halti.com". */
  baseUrl: string
  shipsTo: ShippingZone
  /**
   * Affiliate-verkoston trackinglinkki, jossa `{URL}` on paikanpitäjä
   * enkoodatulle kohde-URL:lle. Otetaan verkoston paneelista, ei arvata.
   * Puuttuu suorilta kumppaneilta (network: 'direct') → UTM-reitti.
   */
  trackingTemplate?: string
  /** Päivä jona toimitusalue ja linkki verifioitiin kumppanin sivulta. */
  verifiedAt: string
  /** Näytetään tuotesivulla: "Osto tapahtuu kumppanin kaupassa". */
  checkoutNote?: { en: string; fi: string }
}

export interface Product {
  slug: string
  category: CategoryId
  brand: string
  name: { en: string; fi: string }
  description: { en: string; fi: string }
  /** Kumppanin sivulta luettu "alkaen"-hinta. Ei koskaan arvattu. */
  priceFrom: number
  currency: 'EUR' | 'GBP' | 'USD'
  /** ISO-päivä jona hinta luettiin kumppanin sivulta. */
  priceCheckedAt: string
  /** Tiedostonimen runko ilman päätettä, esim. "prod-kuksa-cup". */
  image: string
  partnerId: string
  /** Syvälinkki kumppanin tuotesivulle. */
  partnerProductUrl: string
  featured?: boolean
  badges?: Array<'bestseller' | 'sami-authorized' | 'made-in-lapland' | 'eco'>
}
```

- [ ] **Step 7: Kirjoita `src/data/partners.ts`**

🔴 `trackingTemplate`-arvot on kopioitava Adtraction-paneelista (Brands → kumppani → "Your tracking link"). Alla Haltin arvo on paneelista 31.7.2026 luettu muoto; muille approved-kumppaneille kopioi vastaava rivi ennen kuin lisäät niiden tuotteita.

```ts
import type { Partner } from './types'

/** LV-verkoston pakolliset rel-attribuutit affiliate-linkeissä.
 *  EI noreferreriä: redirect-Worker lukee Refererin attribuutioon. */
export const AFFILIATE_REL = 'sponsored nofollow noopener'

export const PARTNERS: Record<string, Partner> = {
  halti: {
    id: 'halti',
    name: 'Halti',
    network: 'adtraction',
    baseUrl: 'https://halti.com',
    shipsTo: 'eu',
    trackingTemplate: 'https://to.halti.fi/t/t?a=1622204962&as=2086870803&t=2&tk=1&url={URL}',
    verifiedAt: '2026-07-31',
  },
  makia: {
    id: 'makia',
    name: 'Makia',
    network: 'adtraction',
    baseUrl: 'https://makia.com',
    shipsTo: 'worldwide',
    trackingTemplate: 'https://go.makia.com/t/t?a=1944565206&as=2086870803&t=2&tk=1&url={URL}',
    verifiedAt: '2026-07-31',
  },
  moomin: {
    id: 'moomin',
    name: 'Moomin Shop',
    network: 'direct',
    baseUrl: 'https://shop.moomin.com',
    shipsTo: 'worldwide',
    verifiedAt: '2026-07-31',
  },
}

/**
 * Rakentaa kumppanilinkin. Kolme reittiä:
 *   1. trackingTemplate → affiliate-verkoston linkki, kohde enkoodattuna
 *   2. muuten          → kumppanin oma URL + LV:n UTM-parametrit
 * GYG-tuotteet EIVÄT kulje tästä: ne käyttävät shared/gyg/picks.ts:n gygHref().
 */
export function partnerHref(partner: Partner, productUrl: string, campaign: string): string {
  if (partner.trackingTemplate) {
    return partner.trackingTemplate.replace('{URL}', encodeURIComponent(productUrl))
  }
  const url = new URL(productUrl)
  url.searchParams.set('utm_source', 'laplandvibes')
  url.searchParams.set('utm_medium', 'referral')
  url.searchParams.set('utm_campaign', campaign)
  return url.toString()
}
```

- [ ] **Step 8: Aja testit ja varmista että ne menevät läpi**

Run: `npm test`
Expected: PASS, 6 testiä vihreänä

- [ ] **Step 9: Commit**

```bash
git add package.json package-lock.json vitest.config.ts src/data/types.ts src/data/partners.ts src/data/__tests__/partners.test.ts
git commit -m "shop: datatyypit, kumppanirekisteri ja affiliate-linkkibuilder + Vitest"
```

---

## Task 2: Kategoriat ja tuotekatalogi eheystesteineen

**Files:**
- Create: `src/data/categories.ts`
- Create: `src/data/products.ts`
- Create: `src/data/__tests__/catalog.test.ts`

**Interfaces:**
- Consumes: `src/data/types.ts` → `CategoryId`, `Product`; `src/data/partners.ts` → `PARTNERS`
- Produces:
  - `CATEGORIES: Category[]` (`{ id, slug, image, icon, order }`)
  - `PRODUCTS: Product[]`
  - `productsByCategory(id: CategoryId): Product[]`
  - `productBySlug(slug: string): Product | undefined`
  - `featuredProducts(limit?: number): Product[]`

- [ ] **Step 1: Kirjoita epäonnistuva testi `src/data/__tests__/catalog.test.ts`**

```ts
import { describe, it, expect } from 'vitest'
import { readdirSync } from 'node:fs'
import { PRODUCTS, productsByCategory, productBySlug, featuredProducts } from '../products'
import { CATEGORIES } from '../categories'
import { PARTNERS } from '../partners'
import { CATEGORY_IDS } from '../types'

describe('katalogin eheys', () => {
  it('tuoteslugit ovat uniikkeja', () => {
    const slugs = PRODUCTS.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('slugit ovat URL-turvallisia', () => {
    for (const p of PRODUCTS) {
      expect(p.slug, p.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    }
  })

  it('jokainen tuote viittaa olemassa olevaan kumppaniin', () => {
    for (const p of PRODUCTS) {
      expect(PARTNERS[p.partnerId], `${p.slug} → tuntematon kumppani ${p.partnerId}`).toBeDefined()
    }
  })

  it('jokainen tuote kuuluu tunnettuun kategoriaan', () => {
    for (const p of PRODUCTS) {
      expect(CATEGORY_IDS).toContain(p.category)
    }
  })

  it('jokaisella hinnalla on tarkistuspäivä ja positiivinen arvo', () => {
    for (const p of PRODUCTS) {
      expect(p.priceFrom, p.slug).toBeGreaterThan(0)
      expect(p.priceCheckedAt, p.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })

  it('tuotelinkki osoittaa kumppanin omaan domainiin', () => {
    for (const p of PRODUCTS) {
      const partner = PARTNERS[p.partnerId]
      const host = new URL(p.partnerProductUrl).host
      const base = new URL(partner.baseUrl).host
      expect(host.endsWith(base.replace(/^www\./, '')), `${p.slug}: ${host} ei ole ${base}`).toBe(true)
    }
  })

  it('jokaisella tuotteella on kuvatiedosto sekä avif- että webp-muodossa', () => {
    const files = new Set(readdirSync('public/images'))
    for (const p of PRODUCTS) {
      expect(files.has(`${p.image}.webp`), `${p.slug}: ${p.image}.webp puuttuu`).toBe(true)
      expect(files.has(`${p.image}.avif`), `${p.slug}: ${p.image}.avif puuttuu`).toBe(true)
    }
  })

  it('copyssa ei ole em-viivoja eikä kiellettyjä sanoja', () => {
    const banned = /stunning|breathtaking|world-class/i
    for (const p of PRODUCTS) {
      for (const text of [p.name.en, p.name.fi, p.description.en, p.description.fi]) {
        expect(text.includes('—'), `${p.slug}: em-viiva copyssa`).toBe(false)
        expect(banned.test(text), `${p.slug}: kielletty sana`).toBe(false)
      }
    }
  })

  it('jokaisessa kategoriassa on vähintään yksi tuote', () => {
    for (const c of CATEGORIES) {
      expect(productsByCategory(c.id).length, `${c.id} on tyhjä`).toBeGreaterThan(0)
    }
  })

  it('productBySlug löytää tuotteen ja palauttaa undefined tuntemattomalle', () => {
    expect(productBySlug(PRODUCTS[0].slug)?.slug).toBe(PRODUCTS[0].slug)
    expect(productBySlug('ei-ole-olemassa')).toBeUndefined()
  })

  it('featuredProducts palauttaa vain featured-tuotteita ja kunnioittaa rajaa', () => {
    const f = featuredProducts(4)
    expect(f.length).toBeLessThanOrEqual(4)
    expect(f.every((p) => p.featured)).toBe(true)
  })

  it('kategorioita on seitsemän ja slugit ovat uniikkeja', () => {
    expect(CATEGORIES.length).toBe(7)
    expect(new Set(CATEGORIES.map((c) => c.slug)).size).toBe(7)
  })
})
```

- [ ] **Step 2: Aja testi ja varmista että se epäonnistuu**

Run: `npm test`
Expected: FAIL, "Failed to resolve import '../products'"

- [ ] **Step 3: Kirjoita `src/data/categories.ts`**

```ts
import type { CategoryId } from './types'

export interface Category {
  id: CategoryId
  /** URL-polku ilman kieliprefixiä, esim. "/design". */
  slug: string
  /** Kuvatiedoston runko public/images/:ssä. */
  image: string
  order: number
}

export const CATEGORIES: Category[] = [
  { id: 'design',       slug: '/design',       image: 'cat-design',        order: 1 },
  { id: 'clothing',     slug: '/clothing',     image: 'cat-clothing',      order: 2 },
  { id: 'handicrafts',  slug: '/handicrafts',  image: 'cat-artisan-crafts', order: 3 },
  { id: 'treats',       slug: '/treats',       image: 'cat-treats',        order: 4 },
  { id: 'superfoods',   slug: '/superfoods',   image: 'cat-superfoods',    order: 5 },
  { id: 'merch',        slug: '/merch',        image: 'cat-pod-merch',     order: 6 },
  { id: 'experiences',  slug: '/experiences',  image: 'cat-gift-experiences', order: 7 },
]

export function categoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}

export function categoryById(id: CategoryId): Category {
  const c = CATEGORIES.find((x) => x.id === id)
  if (!c) throw new Error(`Tuntematon kategoria: ${id}`)
  return c
}
```

- [ ] **Step 4: Kirjoita `src/data/products.ts` seed-katalogilla**

🔴 **Jokainen rivi on verifioitava ennen committia** (Step 5). Alla on rakenne ja kaksi täysin täytettyä esimerkkiä. Täytä loput samaa kaavaa noudattaen niin, että jokaisessa kategoriassa on vähintään 5 tuotetta ja `image` osoittaa olemassa olevaan tiedostoon (`public/images/`) tai Task 14:ssä generoitavaan.

```ts
import type { Product } from './types'

/**
 * Kuratoitu tuotekatalogi. Jokainen rivi on avattu selaimessa ja hinta luettu
 * kumppanin sivulta priceCheckedAt-päivänä. Hinta on kumppanin "alkaen"-hinta,
 * ei meidän hintamme, ja se renderöidään aina "alk." + päivämäärä -muodossa.
 *
 * Kokemuslahjat (category: 'experiences') EIVÄT ole täällä: ne luetaan
 * shared/gyg/picks.ts:stä, jotta GYG-ID:t pysyvät yhdessä verifioidussa
 * lähteessä.
 */
export const PRODUCTS: Product[] = [
  {
    slug: 'halti-tokoi-parka',
    category: 'clothing',
    brand: 'Halti',
    name: {
      en: 'Halti Tokoi insulated parka',
      fi: 'Halti Tokoi -toppatakki',
    },
    description: {
      en: 'A Finnish winter parka built for standing still in the cold, which is what aurora watching actually is. Halti ships within the EU only.',
      fi: 'Suomalainen talvitakki paikallaan seisomiseen pakkasessa, mitä revontulien katselu käytännössä on. Halti toimittaa vain EU:n sisällä.',
    },
    priceFrom: 299,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-halti-parka',
    partnerId: 'halti',
    partnerProductUrl: 'https://halti.com/products/tokoi-parka',
    featured: true,
  },
  {
    slug: 'moomin-mug-winter',
    category: 'design',
    brand: 'Moomin Arabia',
    name: {
      en: 'Moomin winter season mug',
      fi: 'Muumi-talvikausimuki',
    },
    description: {
      en: 'Arabia has printed a new Moomin season mug every year since 1990, and the winter editions are the ones Finns actually queue for. Ships worldwide by DHL Express.',
      fi: 'Arabia on painanut uuden Muumi-kausimukin joka vuosi vuodesta 1990, ja talvipainokset ovat niitä joiden perässä suomalaiset jonottavat. Toimitus maailmanlaajuisesti DHL Expressillä.',
    },
    priceFrom: 24.9,
    currency: 'EUR',
    priceCheckedAt: '2026-07-31',
    image: 'prod-moomin-mug',
    partnerId: 'moomin',
    partnerProductUrl: 'https://shop.moomin.com/products/moomin-mug-winter',
    featured: true,
  },
]

export function productsByCategory(id: Product['category']): Product[] {
  return PRODUCTS.filter((p) => p.category === id)
}

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function featuredProducts(limit = 8): Product[] {
  return PRODUCTS.filter((p) => p.featured).slice(0, limit)
}
```

- [ ] **Step 5: Verifioi jokainen tuotelinkki selaimessa**

Jokaiselle `partnerProductUrl`-arvolle: avaa selaimessa ja tarkista **200 + oikea tuotenimi otsikossa + hinta sivulla**. Kirjaa luettu hinta `priceFrom`-kenttään ja päivä `priceCheckedAt`-kenttään. Pelkkä statuskoodi ei riitä.

```bash
curl -s -o /dev/null -w "%{http_code} %{url_effective}\n" -L "https://halti.com/products/tokoi-parka"
```

Expected: `200` ja lopullinen URL sama kuin pyydetty (ei ohjausta etusivulle). Jos ohjaus tapahtuu, tuote on poistunut: vaihda tuote, älä jätä riviä.

- [ ] **Step 6: Aja testit ja varmista että ne menevät läpi**

Run: `npm test`
Expected: PASS. Jos kuvatesti kaatuu, merkitse puuttuvat kuvat Task 14:ään ja käytä väliaikaisesti olemassa olevaa `public/images/`-tiedostoa.

- [ ] **Step 7: Commit**

```bash
git add src/data/categories.ts src/data/products.ts src/data/__tests__/catalog.test.ts
git commit -m "shop: 7 kategoriaa ja verifioitu seed-tuotekatalogi eheystesteineen"
```

---

## Task 3: Visuaalinen perusta — pintaskaala ja typografia

**Files:**
- Modify: `src/index.css`

**Interfaces:**
- Produces: Tailwind-tokenit `bg-sand`, `bg-sand-deep`, `border-line`, `text-muted`, `text-gray`, `bg-amber`, `bg-night` kaikkien myöhempien komponenttien käyttöön.

Nykyinen paletti (vaalea + amber + night) on Vesan hyväksymä ja säilyy, mutta kaupallinen ilme vaatii välisävyt: pinnat, rajaviivat ja hillitty leipätekstin harmaa. Ilman näitä tuotegridit näyttävät leijuvilta.

- [ ] **Step 1: Laajenna `@theme`-lohko**

Korvaa `src/index.css`:n `@theme`-lohko tällä (säilyttää kaikki nykyiset tokenit, lisää viisi uutta):

```css
@theme {
  --font-heading: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
  /* NETWORK RULE (Vesa 2026-07-24): hashtag wordmark = Bebas Neue on every
     site, even palette variants. Site headings stay Playfair. */
  --font-logo: 'Bebas Neue', 'Arial Narrow', sans-serif;
  --color-pink: #EC4899;
  --color-gray: #1F2937;
  --color-amber: #F59E0B;
  --color-white: #F9FAFB;
  --color-night: #0F172A;
  /* Kaupalliset pinnat: tuotekuva on sivun kirkkain elementti, joten
     taustojen on oltava sitä vaaleampia ja rajojen hiuksenohuita. */
  --color-sand: #FBF9F5;
  --color-sand-deep: #F3EEE6;
  --color-line: #E7E1D8;
  --color-muted: #6B7280;
  --color-finland: #002F6C;
}
```

- [ ] **Step 2: Lisää typografia-asteikko ja pehmeä fokusrengas**

Lisää `src/index.css`:n loppuun, `@keyframes slideUp` -lohkon jälkeen:

```css
/* Kaupallinen typografia: otsikot tiiviimmin, leipäteksti väljemmin. */
h1, h2, h3 { letter-spacing: -0.01em; }
h1 { line-height: 1.05; }
h2 { line-height: 1.15; }

/* Näppäimistöfokus näkyviin ilman että hiiriklikki piirtää renkaan. */
:focus-visible {
  outline: 2px solid var(--color-amber);
  outline-offset: 2px;
}

/* Tuotekuvien vakiosuhde, jotta grid ei hypi latauksen aikana. */
.product-media { aspect-ratio: 4 / 5; }
.category-media { aspect-ratio: 3 / 2; }
```

- [ ] **Step 3: Varmista että build menee läpi**

Run: `npm run build:nossg`
Expected: `built in …`, ei virheitä.

- [ ] **Step 4: Commit**

```bash
git add src/index.css
git commit -m "shop: kaupallinen pintaskaala, typografia-asteikko ja fokusrengas"
```

---

## Task 4: Ostonappi, toimitusmerkintä ja tuotekortti

**Files:**
- Create: `src/components/shop/BuyButton.tsx`
- Create: `src/components/shop/ShippingBadge.tsx`
- Create: `src/components/shop/ProductCard.tsx`
- Create: `src/data/__tests__/buyLink.test.ts`

**Interfaces:**
- Consumes: `PARTNERS`, `partnerHref`, `AFFILIATE_REL`, `Product`, `ShippingZone`
- Produces:
  - `<BuyButton product={Product} sid={string} lang={Lang} size?: 'sm' | 'lg' />`
  - `<ShippingBadge zone={ShippingZone} lang={Lang} />`
  - `<ProductCard product={Product} lang={Lang} />`
  - `buyLinkProps(product, sid): { href, target, rel }` (testattava puhdas funktio)

- [ ] **Step 1: Kirjoita epäonnistuva testi `src/data/__tests__/buyLink.test.ts`**

```ts
import { describe, it, expect } from 'vitest'
import { buyLinkProps } from '../buyLink'
import { PRODUCTS } from '../products'

describe('buyLinkProps', () => {
  it('antaa jokaiselle tuotteelle pakolliset affiliate-attribuutit', () => {
    for (const p of PRODUCTS) {
      const props = buyLinkProps(p, 'gifts_product_cta')
      expect(props.target).toBe('_blank')
      expect(props.rel).toBe('sponsored nofollow noopener')
      expect(props.rel).not.toContain('noreferrer')
      expect(props.href.startsWith('https://')).toBe(true)
    }
  })

  it('käyttää sid-arvoa kampanjatunnisteena', () => {
    const p = PRODUCTS.find((x) => x.partnerId === 'moomin')!
    const props = buyLinkProps(p, 'gifts_design_card')
    expect(new URL(props.href).searchParams.get('utm_campaign')).toBe('gifts_design_card')
  })
})
```

- [ ] **Step 2: Aja testi ja varmista että se epäonnistuu**

Run: `npm test`
Expected: FAIL, "Failed to resolve import '../buyLink'"

- [ ] **Step 3: Kirjoita `src/data/buyLink.ts`**

```ts
import { PARTNERS, partnerHref, AFFILIATE_REL } from './partners'
import type { Product } from './types'

export interface BuyLinkProps {
  href: string
  target: '_blank'
  rel: string
}

/**
 * Ainoa paikka, jossa ostonapin href ja rel syntyvät. Komponentit eivät saa
 * rakentaa affiliate-linkkiä itse: rel-attribuuttien unohtuminen on
 * verkoston toistuvin virhe.
 */
export function buyLinkProps(product: Product, sid: string): BuyLinkProps {
  const partner = PARTNERS[product.partnerId]
  return {
    href: partnerHref(partner, product.partnerProductUrl, sid),
    target: '_blank',
    rel: AFFILIATE_REL,
  }
}
```

- [ ] **Step 4: Aja testit ja varmista että ne menevät läpi**

Run: `npm test`
Expected: PASS

- [ ] **Step 5: Kirjoita `src/components/shop/ShippingBadge.tsx`**

```tsx
import { Globe, Truck } from 'lucide-react'
import type { ShippingZone } from '../../data/types'
import type { Lang } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'

export default function ShippingBadge({ zone, lang }: { zone: ShippingZone; lang: Lang }) {
  const t = SHOP_COPY[lang].shipping
  const label = zone === 'worldwide' ? t.worldwide : zone === 'eu' ? t.euOnly : t.fiOnly
  const Icon = zone === 'worldwide' ? Globe : Truck
  const tone =
    zone === 'worldwide'
      ? 'bg-white text-muted border-line'
      : 'bg-amber/10 text-gray border-amber/40'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${tone}`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </span>
  )
}
```

- [ ] **Step 6: Kirjoita `src/components/shop/BuyButton.tsx`**

```tsx
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '../../data/types'
import { PARTNERS } from '../../data/partners'
import { buyLinkProps } from '../../data/buyLink'
import type { Lang } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'

export default function BuyButton({
  product,
  sid,
  lang,
  size = 'lg',
}: {
  product: Product
  sid: string
  lang: Lang
  size?: 'sm' | 'lg'
}) {
  const partner = PARTNERS[product.partnerId]
  const t = SHOP_COPY[lang].product
  const props = buyLinkProps(product, sid)
  const pad = size === 'lg' ? 'px-7 py-4 text-lg' : 'px-4 py-2.5 text-sm'
  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-amber font-medium text-white transition-colors hover:bg-amber/90 ${pad}`}
    >
      {t.buyAt(partner.name)}
      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
    </a>
  )
}
```

- [ ] **Step 7: Kirjoita `src/components/shop/ProductCard.tsx`**

```tsx
import { Link } from 'react-router-dom'
import type { Product } from '../../data/types'
import { PARTNERS } from '../../data/partners'
import type { Lang } from '../../i18n/useLang'
import { useLocalePath } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'
import ShippingBadge from './ShippingBadge'

export default function ProductCard({ product, lang }: { product: Product; lang: Lang }) {
  const to = useLocalePath()
  const t = SHOP_COPY[lang].product
  const partner = PARTNERS[product.partnerId]
  const name = lang === 'fi' ? product.name.fi : product.name.en
  return (
    <Link
      to={to(`/product/${product.slug}`)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg"
    >
      <div className="product-media overflow-hidden bg-sand-deep">
        <picture>
          <source srcSet={`/images/${product.image}.avif`} type="image/avif" />
          <img
            src={`/images/${product.image}.webp`}
            alt={name}
            loading="lazy"
            width={640}
            height={800}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </picture>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
          {product.brand}
        </span>
        <h3 className="font-heading text-lg leading-snug text-gray">{name}</h3>
        <div className="mt-auto flex flex-col gap-2 pt-2">
          <span className="text-base font-semibold text-gray">
            {t.priceFrom(product.priceFrom, product.currency)}
          </span>
          <ShippingBadge zone={partner.shipsTo} lang={lang} />
        </div>
      </div>
    </Link>
  )
}
```

- [ ] **Step 8: Commit**

```bash
git add src/data/buyLink.ts src/data/__tests__/buyLink.test.ts src/components/shop/
git commit -m "shop: ostonappi, toimitusmerkinta ja tuotekortti"
```

---

## Task 5: Kaupan UI-copy 12 kielellä

**Files:**
- Create: `src/locales/shopCopy.ts`

**Interfaces:**
- Produces: `SHOP_COPY: Record<Lang, ShopCopy>` kentillä `nav`, `category`, `product`, `shipping`, `guides`, `trip`.

Kaupan UI-copy pidetään erillään `ChromeCopy`-rakenteesta, koska se on staattista eikä tarvitse lazy-chunkkeja: yhteensä muutama kilotavu, ja jokainen kaupan sivu tarvitsee sen heti ensirenderissä.

- [ ] **Step 1: Luo `src/locales/shopCopy.ts` EN- ja FI-versioilla**

```ts
import type { Lang } from '../i18n/useLang'

export interface ShopCopy {
  nav: { shop: string; guides: string; shipping: string; allProducts: string }
  category: {
    /** Kategorian nimi navissa ja otsikoissa. */
    names: Record<
      'design' | 'clothing' | 'handicrafts' | 'treats' | 'superfoods' | 'merch' | 'experiences',
      string
    >
    intro: Record<
      'design' | 'clothing' | 'handicrafts' | 'treats' | 'superfoods' | 'merch' | 'experiences',
      string
    >
    productCount: (n: number) => string
    emptyForCountry: string
  }
  product: {
    buyAt: (partner: string) => string
    priceFrom: (value: number, currency: string) => string
    priceNote: (date: string, partner: string) => string
    checkoutNote: string
    related: string
    backToCategory: string
  }
  shipping: {
    worldwide: string
    euOnly: string
    fiOnly: string
    selectorLabel: string
    title: string
  }
}

const fmt = (value: number, currency: string, locale: string) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }).format(value)

const en: ShopCopy = {
  nav: { shop: 'Shop', guides: 'Gift guides', shipping: 'Delivery', allProducts: 'All products' },
  category: {
    names: {
      design: 'Finnish design',
      clothing: 'Clothing and accessories',
      handicrafts: 'Lapland handicrafts',
      treats: 'Treats',
      superfoods: 'Superfoods and wellbeing',
      merch: 'LaplandVibes merch',
      experiences: 'Experience gifts',
    },
    intro: {
      design: 'Marimekko, Iittala, Arabia and the rest of the shelf Finns actually own. Every item ships from a Finnish or Nordic shop.',
      clothing: 'Merino knitwear from Oulu, Helsinki streetwear and winter gear built for the cold you just experienced.',
      handicrafts: 'Puukko knives, kuksa cups and Sami work from authorised sellers only.',
      treats: 'Salmiakki, cloudberry jam, chocolate and dried reindeer. Food rules differ by country, so check the delivery note on each card.',
      superfoods: 'Bilberry and lingonberry powders, chaga, sea buckthorn and Nordic natural cosmetics.',
      merch: 'Our own #LAPLANDVIBES shirts, hoodies, caps and neck gaiters, printed on demand and shipped from the EU or the US.',
      experiences: 'Aurora hunts, husky rides and reindeer farms, bought as a gift and booked when the recipient chooses.',
    },
    productCount: (n) => (n === 1 ? '1 product' : `${n} products`),
    emptyForCountry: 'None of the products in this category ship to your country yet. Switch the delivery country to see everything.',
  },
  product: {
    buyAt: (partner) => `Buy at ${partner}`,
    priceFrom: (value, currency) => `from ${fmt(value, currency, 'en-GB')}`,
    priceNote: (date, partner) => `Price read from ${partner} on ${date}. The shop sets the final price.`,
    checkoutNote: 'You complete the purchase in the partner shop. We do not handle your payment or delivery.',
    related: 'More from this category',
    backToCategory: 'Back to category',
  },
  shipping: {
    worldwide: 'Ships worldwide',
    euOnly: 'Ships to Europe only',
    fiOnly: 'Ships within Finland only',
    selectorLabel: 'Deliver to',
    title: 'Delivery',
  },
}

const fi: ShopCopy = {
  nav: { shop: 'Kauppa', guides: 'Lahjaoppaat', shipping: 'Toimitus', allProducts: 'Kaikki tuotteet' },
  category: {
    names: {
      design: 'Suomalainen design',
      clothing: 'Vaatteet ja asusteet',
      handicrafts: 'Lapin käsityöt',
      treats: 'Herkut',
      superfoods: 'Superfoodit ja hyvinvointi',
      merch: 'LaplandVibes-merch',
      experiences: 'Elämyslahjat',
    },
    intro: {
      design: 'Marimekko, Iittala, Arabia ja loput siitä hyllystä, joka suomalaisilta oikeasti löytyy. Jokainen tuote lähtee suomalaisesta tai pohjoismaisesta kaupasta.',
      clothing: 'Merinoneuleita Oulusta, helsinkiläistä streetwearia ja talvivaatteita siihen pakkaseen, jonka juuri koit.',
      handicrafts: 'Puukkoja, kuksia ja saamelaista käsityötä vain auktorisoiduilta myyjiltä.',
      treats: 'Salmiakkia, lakkahilloa, suklaata ja poron kuivalihaa. Elintarvikkeiden tuontisäännöt vaihtelevat maittain, joten tarkista toimitusmerkintä kortista.',
      superfoods: 'Mustikka- ja puolukkajauheita, pakuria, tyrniä ja pohjoista luonnonkosmetiikkaa.',
      merch: 'Oma #LAPLANDVIBES-mallisto: paidat, hupparit, lippikset ja tuubihuivit, painetaan tilauksesta ja lähetetään EU:sta tai Yhdysvalloista.',
      experiences: 'Revontuliretkiä, huskyajeluja ja porotiloja lahjaksi ostettuna, varattavaksi silloin kun saaja itse valitsee.',
    },
    productCount: (n) => (n === 1 ? '1 tuote' : `${n} tuotetta`),
    emptyForCountry: 'Yksikään tämän kategorian tuote ei toimita vielä valitsemaasi maahan. Vaihda toimitusmaa nähdäksesi kaikki.',
  },
  product: {
    buyAt: (partner) => `Osta: ${partner}`,
    priceFrom: (value, currency) => `alk. ${fmt(value, currency, 'fi-FI')}`,
    priceNote: (date, partner) => `Hinta luettu kumppanin ${partner} sivulta ${date}. Lopullisen hinnan määrittää kauppa.`,
    checkoutNote: 'Viimeistelet ostoksen kumppanin kaupassa. Me emme käsittele maksua emmekä toimitusta.',
    related: 'Lisää tästä kategoriasta',
    backToCategory: 'Takaisin kategoriaan',
  },
  shipping: {
    worldwide: 'Toimitus maailmanlaajuisesti',
    euOnly: 'Toimitus vain Eurooppaan',
    fiOnly: 'Toimitus vain Suomeen',
    selectorLabel: 'Toimitusmaa',
    title: 'Toimitus',
  },
}

/**
 * Muut kielet kääntyvät V2:ssa. V1:ssä ne saavat englannin, mikä on sama
 * hyväksytty malli kuin tuotenimissä (validator laskee nämä enFallbackiksi).
 */
export const SHOP_COPY: Record<Lang, ShopCopy> = {
  en, fi,
  de: en, ja: en, es: en, 'pt-BR': en, 'zh-CN': en, ko: en, fr: en, it: en, nl: en, sv: en,
}
```

- [ ] **Step 2: Varmista tyypitys**

Run: `npx tsc -b`
Expected: ei virheitä.

- [ ] **Step 3: Commit**

```bash
git add src/locales/shopCopy.ts
git commit -m "shop: kaupan UI-copy (en+fi natiivi, muut EN-fallback)"
```

---

## Task 6: Toimitusmaan tila ja suodatus

**Files:**
- Create: `src/context/ShippingCountry.tsx`
- Create: `src/data/__tests__/shipping.test.ts`
- Create: `src/data/shipping.ts`

**Interfaces:**
- Produces:
  - `shipsTo(zone: ShippingZone, country: string): boolean`
  - `EU_COUNTRIES: string[]` (ISO-3166-1 alpha-2)
  - `<ShippingCountryProvider>`, `useShippingCountry(): { country, setCountry }`

- [ ] **Step 1: Kirjoita epäonnistuva testi `src/data/__tests__/shipping.test.ts`**

```ts
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
```

- [ ] **Step 2: Aja testi ja varmista että se epäonnistuu**

Run: `npm test`
Expected: FAIL, "Failed to resolve import '../shipping'"

- [ ] **Step 3: Kirjoita `src/data/shipping.ts`**

```ts
import type { ShippingZone } from './types'

/** EU:n 27 jäsenmaata, ISO-3166-1 alpha-2. Britannia ei ole EU-maa. */
export const EU_COUNTRIES = [
  'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR','HR','HU',
  'IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI','SK',
]

/** Toimittaako tämän vyöhykkeen kumppani annettuun maahan. */
export function shipsTo(zone: ShippingZone, country: string): boolean {
  if (zone === 'worldwide') return true
  if (zone === 'eu') return EU_COUNTRIES.includes(country)
  return country === 'FI'
}
```

- [ ] **Step 4: Aja testit ja varmista että ne menevät läpi**

Run: `npm test`
Expected: PASS

- [ ] **Step 5: Kirjoita `src/context/ShippingCountry.tsx`**

```tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

const KEY = 'laplandgifts_ship_country'

interface Ctx {
  country: string
  setCountry: (c: string) => void
}

const ShippingCountryContext = createContext<Ctx>({ country: '', setCountry: () => {} })

/**
 * Tyhjä maa tarkoittaa "ei valintaa": silloin mitään ei suodateta pois.
 * Emme arvaa maata IP:stä, koska väärä arvaus piilottaa tuotteita hiljaa.
 */
export function ShippingCountryProvider({ children }: { children: ReactNode }) {
  const [country, setCountryState] = useState('')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY)
      if (stored) setCountryState(stored)
    } catch { /* privaattiselain: jatka ilman muistia */ }
  }, [])

  const setCountry = (c: string) => {
    setCountryState(c)
    try { localStorage.setItem(KEY, c) } catch { /* ei mitään */ }
  }

  return (
    <ShippingCountryContext.Provider value={{ country, setCountry }}>
      {children}
    </ShippingCountryContext.Provider>
  )
}

export function useShippingCountry(): Ctx {
  return useContext(ShippingCountryContext)
}
```

- [ ] **Step 6: Commit**

```bash
git add src/data/shipping.ts src/data/__tests__/shipping.test.ts src/context/ShippingCountry.tsx
git commit -m "shop: toimitusvyohykkeet ja maakohtainen suodatustila"
```

---

## Task 7: Kategoriasivu

**Files:**
- Create: `src/pages/Category.tsx`
- Create: `src/components/shop/ProductGridSection.tsx`

**Interfaces:**
- Consumes: `CATEGORIES`, `categoryBySlug`, `productsByCategory`, `ProductCard`, `SHOP_COPY`, `useShippingCountry`, `shipsTo`
- Produces: `<Category />` (lukee kategorian `useLocation().pathname`-polusta `stripLocale`-apurin kautta)

- [ ] **Step 1: Kirjoita `src/components/shop/ProductGridSection.tsx`**

```tsx
import type { Product } from '../../data/types'
import type { Lang } from '../../i18n/useLang'
import ProductCard from './ProductCard'

export default function ProductGridSection({
  products,
  lang,
  emptyMessage,
}: {
  products: Product[]
  lang: Lang
  emptyMessage: string
}) {
  if (products.length === 0) {
    return (
      <p className="rounded-2xl border border-line bg-sand px-6 py-10 text-center text-muted">
        {emptyMessage}
      </p>
    )
  }
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} lang={lang} />
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Kirjoita `src/pages/Category.tsx`**

```tsx
import { useLocation } from 'react-router-dom'
import ShopNav from '../components/ShopNav'
import Footer from '../shared/Footer'
import ProductGridSection from '../components/shop/ProductGridSection'
import { categoryBySlug } from '../data/categories'
import { productsByCategory } from '../data/products'
import { PARTNERS } from '../data/partners'
import { shipsTo } from '../data/shipping'
import { useShippingCountry } from '../context/ShippingCountry'
import { useLang, stripLocale } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import NotFound from './NotFound'

export default function Category() {
  const lang = useLang()
  const { pathname } = useLocation()
  const { country } = useShippingCountry()
  const t = SHOP_COPY[lang].category

  const category = categoryBySlug(stripLocale(pathname).replace(/\/$/, ''))
  if (!category) return <NotFound />

  const all = productsByCategory(category.id)
  const visible = country
    ? all.filter((p) => shipsTo(PARTNERS[p.partnerId].shipsTo, country))
    : all

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <header className="relative overflow-hidden">
          <picture>
            <source srcSet={`/images/${category.image}.avif`} type="image/avif" />
            <img
              src={`/images/${category.image}.webp`}
              alt=""
              width={1600}
              height={640}
              className="h-[38svh] min-h-64 w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-night/55" aria-hidden="true" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-8">
              <h1 className="font-heading text-4xl text-white md:text-6xl">
                {t.names[category.id]}
              </h1>
              <p className="mt-3 max-w-2xl text-white/85">{t.intro[category.id]}</p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <p className="mb-6 text-sm text-muted">{t.productCount(visible.length)}</p>
          <ProductGridSection products={visible} lang={lang} emptyMessage={t.emptyForCountry} />
        </div>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Varmista tyypitys**

Run: `npx tsc -b`
Expected: virhe `Cannot find module '../components/ShopNav'` (ShopNav syntyy Task 8:ssa). Muut virheet on korjattava nyt.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Category.tsx src/components/shop/ProductGridSection.tsx
git commit -m "shop: kategoriasivu ja tuotegrid toimitusmaasuodatuksella"
```

---

## Task 8: Kaupallinen navi

**Files:**
- Create: `src/components/ShopNav.tsx`

**Interfaces:**
- Consumes: `CATEGORIES`, `SHOP_COPY`, `useShippingCountry`, `useLocalePath`, `Logo`
- Produces: `<ShopNav />` (sticky, 7 kategoriaa, toimitusmaavalitsin, mobiilivalikko)

Nykyinen navi asuu `Home.tsx`:n sisällä ja tuntee vain ankkurit. Kauppa tarvitsee reittitietoisen navin, joka toimii jokaisella sivulla.

- [ ] **Step 1: Kirjoita `src/components/ShopNav.tsx`**

```tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { CATEGORIES } from '../data/categories'
import { EU_COUNTRIES } from '../data/shipping'
import { useShippingCountry } from '../context/ShippingCountry'
import { useLang, useLocalePath } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'

/** Toimitusmaavalitsimen maat: EU + tärkeimmät kaukomarkkinat. */
const COUNTRIES = [...EU_COUNTRIES, 'GB', 'US', 'CA', 'JP', 'KR', 'AU', 'CH', 'NO'].sort()

export default function ShopNav() {
  const lang = useLang()
  const to = useLocalePath()
  const t = SHOP_COPY[lang]
  const { country, setCountry } = useShippingCountry()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link to={to('/')} className="shrink-0" aria-label="LaplandGifts">
          <Logo />
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={to(c.slug)}
              className="text-sm font-medium text-gray transition-colors hover:text-amber"
            >
              {t.category.names[c.id]}
            </Link>
          ))}
          <Link to={to('/gift-guides')} className="text-sm font-medium text-gray hover:text-amber">
            {t.nav.guides}
          </Link>
        </nav>

        <label className="ml-auto flex items-center gap-2 lg:ml-4">
          <span className="sr-only">{t.shipping.selectorLabel}</span>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="min-h-11 rounded-full border border-line bg-white px-3 text-base text-gray"
          >
            <option value="">{t.shipping.selectorLabel}</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={t.nav.shop}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-4 py-3 lg:hidden">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={to(c.slug)}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-base font-medium text-gray"
            >
              {t.category.names[c.id]}
            </Link>
          ))}
          <Link
            to={to('/gift-guides')}
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center text-base font-medium text-gray"
          >
            {t.nav.guides}
          </Link>
        </nav>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Varmista tyypitys ja build**

Run: `npx tsc -b && npm run build:nossg`
Expected: ei virheitä.

- [ ] **Step 3: Commit**

```bash
git add src/components/ShopNav.tsx
git commit -m "shop: kaupallinen sticky-navi kategorioilla ja toimitusmaavalitsimella"
```

---

## Task 9: Tuotesivu

**Files:**
- Create: `src/pages/Product.tsx`

**Interfaces:**
- Consumes: `productBySlug`, `productsByCategory`, `PARTNERS`, `BuyButton`, `ShippingBadge`, `ProductCard`, `SHOP_COPY`
- Produces: `<Product />` reitille `/product/:slug` (12 kieliprefixiä)

- [ ] **Step 1: Kirjoita `src/pages/Product.tsx`**

```tsx
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ShopNav from '../components/ShopNav'
import Footer from '../shared/Footer'
import BuyButton from '../components/shop/BuyButton'
import ShippingBadge from '../components/shop/ShippingBadge'
import ProductCard from '../components/shop/ProductCard'
import { productBySlug, productsByCategory } from '../data/products'
import { PARTNERS } from '../data/partners'
import { categoryById } from '../data/categories'
import { useLang, useLocalePath } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'
import NotFound from './NotFound'

export default function Product() {
  const lang = useLang()
  const to = useLocalePath()
  const { slug } = useParams<{ slug: string }>()
  const t = SHOP_COPY[lang]

  const product = slug ? productBySlug(slug) : undefined
  if (!product) return <NotFound />

  const partner = PARTNERS[product.partnerId]
  const category = categoryById(product.category)
  const name = lang === 'fi' ? product.name.fi : product.name.en
  const description = lang === 'fi' ? product.description.fi : product.description.en
  const related = productsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4)

  return (
    <>
      <ShopNav />
      <main className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
          <Link
            to={to(category.slug)}
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-amber"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t.product.backToCategory}
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="product-media overflow-hidden rounded-2xl border border-line bg-white">
              <picture>
                <source srcSet={`/images/${product.image}.avif`} type="image/avif" />
                <img
                  src={`/images/${product.image}.webp`}
                  alt={name}
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>

            <div className="flex flex-col gap-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                {product.brand}
              </span>
              <h1 className="font-heading text-4xl leading-tight text-gray md:text-5xl">{name}</h1>
              <p className="text-lg leading-relaxed text-gray/90">{description}</p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-heading text-3xl text-gray">
                  {t.product.priceFrom(product.priceFrom, product.currency)}
                </span>
                <ShippingBadge zone={partner.shipsTo} lang={lang} />
              </div>
              <p className="text-sm text-muted">
                {t.product.priceNote(product.priceCheckedAt, partner.name)}
              </p>

              <BuyButton product={product} sid="gifts_product_cta" lang={lang} />
              <p className="text-sm text-muted">{t.product.checkoutNote}</p>
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="mb-6 font-heading text-2xl text-gray">{t.product.related}</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} lang={lang} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Varmista tyypitys**

Run: `npx tsc -b`
Expected: ei virheitä.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Product.tsx
git commit -m "shop: tuotesivu ostonapilla, hintalahteella ja ristiinnostoilla"
```

---

## Task 9B: Elämyslahjat GYG-katalogista

**Files:**
- Create: `src/data/experiences.ts`
- Create: `src/components/shop/ExperienceCard.tsx`
- Modify: `src/pages/Category.tsx` (haara `experiences`-kategorialle)

**Interfaces:**
- Consumes: `shared/gyg/picks.ts` → `GygPick`, `gygHref`, `GYG_PRICE_AS_OF`, `HUB_PICKS`, `CHRISTMAS_PICKS`, `HUSKY_PICKS`, `ACTIVITIES_PICKS`
- Produces: `GIFT_EXPERIENCES: GygPick[]`, `<ExperienceCard pick={GygPick} lang={Lang} />`

Elämyslahjoilla on eri muoto kuin fyysisillä tuotteilla (ei kumppanikauppaa eikä toimitusaluetta, vaan varattava aktiviteetti), joten ne eivät mahdu `Product`-tyyppiin. Ne luetaan suoraan verkoston verifioidusta GYG-katalogista.

🔴 **Älä luo uusia GYG-rivejä.** Väärä ID ei 404:ää vaan tarjoilee hiljaa väärän kohteen (mitattu 29.7.: `lapland-l4404` renderöi Parc des Princes'in Pariisissa). Valitse `GIFT_EXPERIENCES`-listaan vain rivejä, jotka jo ovat `picks.ts`:ssä.

- [ ] **Step 1: Kirjoita `src/data/experiences.ts`**

```ts
import { HUB_PICKS, CHRISTMAS_PICKS, HUSKY_PICKS, type GygPick } from '../../../shared/gyg/picks'

/**
 * Lahjaksi ostettavat elämykset. Rivit on poimittu verkoston jo verifioidusta
 * picks.ts:stä, ei katalogista eikä käsin: väärä GYG-ID palauttaa 200 ja
 * näyttää väärän kohteen toisesta maasta.
 */
export const GIFT_EXPERIENCES: GygPick[] = [
  ...HUB_PICKS.slice(0, 4),
  ...HUSKY_PICKS.slice(0, 2),
  ...CHRISTMAS_PICKS.slice(0, 2),
].map((p) => ({ ...p, sid: 'gifts_experience_card' }))
```

- [ ] **Step 2: Kirjoita `src/components/shop/ExperienceCard.tsx`**

```tsx
import { ArrowUpRight, MapPin } from 'lucide-react'
import { gygHref, GYG_PRICE_AS_OF, type GygPick } from '../../../../shared/gyg/picks'
import { AFFILIATE_REL } from '../../data/partners'
import type { Lang } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'

export default function ExperienceCard({ pick, lang }: { pick: GygPick; lang: Lang }) {
  const t = SHOP_COPY[lang].experience
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {pick.place}
        </span>
        <h3 className="font-heading text-lg leading-snug text-gray">{pick.title}</h3>
        {pick.price && (
          <p className="text-sm text-muted">{t.priceNote(pick.price, GYG_PRICE_AS_OF)}</p>
        )}
        <a
          href={gygHref(pick, lang)}
          target="_blank"
          rel={AFFILIATE_REL}
          className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 font-medium text-white transition-colors hover:bg-amber/90"
        >
          {t.viewOnGyg}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
```

- [ ] **Step 3: Lisää `experience`-lohko `SHOP_COPY`:hin**

`ShopCopy`-rajapintaan ja molempiin kieliin:

```ts
experience: {
  priceNote: (price: string, asOf: string) => string
  viewOnGyg: string
}
```

EN:
```ts
experience: {
  priceNote: (price, asOf) => `From ${price} on GetYourGuide, price read ${asOf}`,
  viewOnGyg: 'See availability',
},
```

FI:
```ts
experience: {
  priceNote: (price, asOf) => `Alkaen ${price} GetYourGuidessa, hinta luettu ${asOf}`,
  viewOnGyg: 'Katso saatavuus',
},
```

- [ ] **Step 4: Haaraa `Category.tsx` elämyskategorialle**

Lisää `Category.tsx`:ään tuotegridin tilalle, kun `category.id === 'experiences'`:

```tsx
{category.id === 'experiences' ? (
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {GIFT_EXPERIENCES.map((p) => (
      <ExperienceCard key={p.path} pick={p} lang={lang} />
    ))}
  </div>
) : (
  <ProductGridSection products={visible} lang={lang} emptyMessage={t.emptyForCountry} />
)}
```

Muuta myös tuotelaskuri: `t.productCount(category.id === 'experiences' ? GIFT_EXPERIENCES.length : visible.length)`.

- [ ] **Step 5: Höllennä katalogitestin kategoriakattavuutta**

`catalog.test.ts`:n testi "jokaisessa kategoriassa on vähintään yksi tuote" ohittaa elämykset, koska ne eivät ole `PRODUCTS`-listassa:

```ts
for (const c of CATEGORIES.filter((c) => c.id !== 'experiences')) {
  expect(productsByCategory(c.id).length, `${c.id} on tyhjä`).toBeGreaterThan(0)
}
```

- [ ] **Step 6: Verifioi jokainen GYG-linkki renderöidystä sivusta**

Avaa jokainen `GIFT_EXPERIENCES`-rivin `gygHref()`-osoite selaimessa ja tarkista, että sivu on **sama aktiviteetti kuin `title` väittää** ja että varausnappi renderöityy. Statuskoodi ei riitä.

- [ ] **Step 7: Aja testit ja commit**

```bash
npm test
git add src/data/experiences.ts src/components/shop/ExperienceCard.tsx src/pages/Category.tsx src/locales/shopCopy.ts src/data/__tests__/catalog.test.ts
git commit -m "shop: elamyslahjat verkoston verifioidusta GYG-katalogista"
```

---

## Task 10: Reittien ohjelmallinen generointi

**Files:**
- Create: `src/routes.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `SHOP_PATHS: string[]` (kaikki reitit ilman kieliprefixiä) ja `<AppRoutes />`

Nykyinen `App.tsx` monistaa 5 reittiä käsin 12 kertaa. Uusia reittejä tulee ~20, joten käsin monistus ei skaalaudu.

- [ ] **Step 1: Kirjoita `src/routes.tsx`**

```tsx
import { Routes, Route } from 'react-router-dom'
import { lazy, type ReactElement } from 'react'
import { LANG_PREFIX } from './i18n/useLang'
import { CATEGORIES } from './data/categories'

const Home = lazy(() => import('./pages/Home'))
const Category = lazy(() => import('./pages/Category'))
const Product = lazy(() => import('./pages/Product'))
const GiftGuides = lazy(() => import('./pages/GiftGuides'))
const Shipping = lazy(() => import('./pages/Shipping'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const Unsubscribe = lazy(() => import('./pages/Unsubscribe'))
const NotFound = lazy(() => import('./pages/NotFound'))

/** Sisältöreitit ilman kieliprefixiä. Prerender ja sitemap lukevat tämän. */
export const CONTENT_PATHS: string[] = [
  '/',
  ...CATEGORIES.map((c) => c.slug),
  '/gift-guides',
  '/shipping',
]

const LEGAL_PATHS = ['/privacy', '/terms', '/cookie-policy', '/unsubscribe']

const ELEMENTS: Record<string, ReactElement> = {
  '/': <Home />,
  '/gift-guides': <GiftGuides />,
  '/shipping': <Shipping />,
  '/privacy': <Privacy />,
  '/terms': <Terms />,
  '/cookie-policy': <CookiePolicy />,
  '/unsubscribe': <Unsubscribe />,
}

export default function AppRoutes() {
  const prefixes = Object.values(LANG_PREFIX).map((p) => (p ? `/${p}` : ''))
  return (
    <Routes>
      {prefixes.map((prefix) => (
        <Route key={prefix || 'en'}>
          {[...CONTENT_PATHS, ...LEGAL_PATHS].map((path) => {
            const full = prefix + (path === '/' ? '' : path)
            const element = ELEMENTS[path] ?? <Category />
            return <Route key={full} path={full || '/'} element={element} />
          })}
          <Route path={`${prefix}/product/:slug`} element={<Product />} />
        </Route>
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
```

- [ ] **Step 2: Korvaa `App.tsx`:n reittilohko**

Poista `App.tsx`:stä kaikki `const Home = lazy(...)`-rivit sekä koko `<Routes>…</Routes>`-lohko (rivit 108–194) ja korvaa ne. Lisää tuonti tiedoston alkuun:

```tsx
import AppRoutes from './routes'
import { ShippingCountryProvider } from './context/ShippingCountry'
```

ja `<Suspense>`-lohkon sisällä:

```tsx
<Suspense fallback={<div className="min-h-screen" />}>
  <AppRoutes />
</Suspense>
```

Kääri `<CopyGate>`-lohko `<ShippingCountryProvider>`-elementtiin:

```tsx
<ShippingCountryProvider>
  <CopyGate>
    …
  </CopyGate>
</ShippingCountryProvider>
```

- [ ] **Step 3: Täytä breadcrumb-labelMap `App.tsx`:ssä**

Korvaa `BreadcrumbShell`-funktion tyhjä `labelMap`:

```tsx
const labelMap: Record<string, string> = {
  ...Object.fromEntries(CATEGORIES.map((c) => [c.slug, SHOP_COPY[lang].category.names[c.id]])),
  '/gift-guides': SHOP_COPY[lang].nav.guides,
  '/shipping': SHOP_COPY[lang].nav.shipping,
}
```

ja lisää tuonnit `import { CATEGORIES } from './data/categories'` sekä `import { SHOP_COPY } from './locales/shopCopy'`. Poista rivi `void nav`.

- [ ] **Step 4: Varmista että kaikki reitit renderöityvät**

Run: `npm run build:nossg && npx vite preview --port 4173 &` ja tarkista:

```bash
curl -s http://localhost:4173/design | grep -c "root"
```

Expected: `1` (SPA-kuori vastaa jokaiselle reitille).

- [ ] **Step 5: Commit**

```bash
git add src/routes.tsx src/App.tsx
git commit -m "shop: reitit generoidaan datasta 12 kielelle, breadcrumb kayttoon"
```

---

## Task 11: Etusivun uudistus, hero ja kategoriagrid

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/ProductCategories.tsx`
- Modify: `src/components/ProductGrid.tsx`
- Modify: `src/pages/Home.tsx`
- Create: `src/components/shop/CategoryCard.tsx`

**Interfaces:**
- Consumes: `CATEGORIES`, `featuredProducts`, `SHOP_COPY`, `ProductCard`
- Produces: uusi etusivun ladonta: hero, 7 kategorian grid, nostot, uutiskirje, FAQ

🔴 Heron "shop opening soon" -badge poistetaan: kauppa on nyt oikeasti auki, ja vanha lupaus muuttuisi valheeksi.

- [ ] **Step 1: Kirjoita `src/components/shop/CategoryCard.tsx`**

```tsx
import { Link } from 'react-router-dom'
import type { Category } from '../../data/categories'
import type { Lang } from '../../i18n/useLang'
import { useLocalePath } from '../../i18n/useLang'
import { SHOP_COPY } from '../../locales/shopCopy'

export default function CategoryCard({ category, lang }: { category: Category; lang: Lang }) {
  const to = useLocalePath()
  const t = SHOP_COPY[lang].category
  return (
    <Link
      to={to(category.slug)}
      className="group relative overflow-hidden rounded-2xl border border-line bg-white"
    >
      <div className="category-media overflow-hidden bg-sand-deep">
        <picture>
          <source srcSet={`/images/${category.image}.avif`} type="image/avif" />
          <img
            src={`/images/${category.image}.webp`}
            alt=""
            loading="lazy"
            width={800}
            height={533}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </picture>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent p-5 pt-14">
        <h3 className="font-heading text-xl text-white">{t.names[category.id]}</h3>
      </div>
    </Link>
  )
}
```

- [ ] **Step 2: Kirjoita `src/components/Hero.tsx` uudelleen**

```tsx
import { Link } from 'react-router-dom'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'

/**
 * Kaupallinen hero: kuva kantaa, teksti on lyhyt ja molemmat CTA:t vievät
 * kauppaan. Vanha "shop opening soon" -badge on poistettu, koska kauppa on
 * auki. min-h käyttää svh-yksikköä Safarin URL-palkin takia.
 */
export default function Hero() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].hero
  const s = SHOP_COPY[lang]
  return (
    <section className="relative flex min-h-[78svh] items-center overflow-hidden">
      <picture className="absolute inset-0">
        <source srcSet="/images/hero-shop.avif" type="image/avif" />
        <img
          src="/images/hero-shop.webp"
          alt=""
          width={2400}
          height={1350}
          className="h-full w-full object-cover"
        />
      </picture>
      <div
        className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/60 to-night/20"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <span className="text-sm font-medium uppercase tracking-widest text-amber">
            {t.kicker}
          </span>
          <h1 className="mt-5 font-heading text-5xl text-white md:text-7xl lg:text-8xl">
            {t.title} <span className="text-amber">{t.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            {t.lead}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <Link
              to={to('/design')}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-amber px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-amber/90"
            >
              {t.ctaExplore}
            </Link>
            <Link
              to={to('/gift-guides')}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-lg font-medium text-white transition-colors hover:border-amber hover:text-amber"
            >
              {s.nav.guides}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Kirjoita `src/components/ProductCategories.tsx` uudelleen**

```tsx
import { CATEGORIES } from '../data/categories'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import CategoryCard from './shop/CategoryCard'

export default function ProductCategories() {
  const lang = useLang()
  const t = COPY[lang].categories
  return (
    <section id="categories" className="bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-3xl text-gray md:text-5xl">{t.h2}</h2>
        <p className="mt-3 max-w-2xl text-muted">{t.sub}</p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.id} category={c} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Kirjoita `src/components/ProductGrid.tsx` uudelleen**

```tsx
import { Link } from 'react-router-dom'
import { featuredProducts } from '../data/products'
import { useLang, useLocalePath } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'
import ProductCard from './shop/ProductCard'

export default function ProductGrid() {
  const lang = useLang()
  const to = useLocalePath()
  const t = COPY[lang].productGrid
  const s = SHOP_COPY[lang]
  const products = featuredProducts(8)
  return (
    <section id="products" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl text-gray md:text-5xl">{t.h2}</h2>
            <p className="mt-3 max-w-2xl text-muted">{t.sub}</p>
          </div>
          <Link to={to('/design')} className="text-sm font-medium text-amber hover:underline">
            {s.nav.allProducts}
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Päivitä `src/pages/Home.tsx` käyttämään ShopNavia**

Korvaa `Home.tsx`:n oma navi-lohko `<ShopNav />`-komponentilla ja varmista osioiden järjestys: `<ShopNav /> <Hero /> <ProductCategories /> <ProductGrid /> <GiftGuide /> <ValueProp /> <ShippingInfo /> <Newsletter /> <FAQ /> <RelatedSites /> <Footer />`.

- [ ] **Step 6: Varmista build ja selainrenderöinti**

Run: `npm run build:nossg`
Expected: ei virheitä. Käynnistä esikatselu ja ota kuvakaappaus 375 px ja 1280 px leveyksillä; tarkista ettei vaakascrollia ole ja että hero täyttää ruudun.

- [ ] **Step 7: Commit**

```bash
git add src/components/Hero.tsx src/components/ProductCategories.tsx src/components/ProductGrid.tsx src/components/shop/CategoryCard.tsx src/pages/Home.tsx
git commit -m "shop: etusivun kaupallinen uudistus, uusi hero ja 7 kategorian grid"
```

---

## Task 12: Lahjaopas- ja toimitussivut

**Files:**
- Create: `src/pages/GiftGuides.tsx`
- Create: `src/pages/Shipping.tsx`
- Modify: `src/components/GiftGuide.tsx`

**Interfaces:**
- Consumes: `PRODUCTS`, `PARTNERS`, `SHOP_COPY`, `ProductCard`
- Produces: `<GiftGuides />`, `<Shipping />`

🔴 Vesan Rule 5 -liputus 25.7.: lahjaoppaan ehdotuslistat olivat pelkkää tekstiä ilman linkkejä. Tässä tehtävässä jokainen ehdotus linkittyy oikeaan tuotteeseen.

- [ ] **Step 1: Kirjoita `src/pages/GiftGuides.tsx`**

```tsx
import ShopNav from '../components/ShopNav'
import Footer from '../shared/Footer'
import ProductCard from '../components/shop/ProductCard'
import { PRODUCTS } from '../data/products'
import { useLang } from '../i18n/useLang'
import { COPY } from '../locales/copy'
import { SHOP_COPY } from '../locales/shopCopy'

/** Tilaisuus → tuoteslugit. Jokainen slug on olemassa products.ts:ssä
 *  (catalog.test.ts vahtii, ettei rikkinäisiä viittauksia jää). */
const OCCASIONS: Array<{ key: string; slugs: string[] }> = [
  { key: 'christmas', slugs: ['moomin-mug-winter'] },
  { key: 'colleagues', slugs: ['moomin-mug-winter'] },
]

export default function GiftGuides() {
  const lang = useLang()
  const t = COPY[lang].giftGuide
  const s = SHOP_COPY[lang]
  return (
    <>
      <ShopNav />
      <main className="bg-sand py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-heading text-4xl text-gray md:text-6xl">{t.h2}</h1>
          <p className="mt-3 max-w-2xl text-muted">{t.sub}</p>

          {t.occasions.map((occ, i) => {
            const slugs = OCCASIONS[i]?.slugs ?? []
            const picks = PRODUCTS.filter((p) => slugs.includes(p.slug))
            return (
              <section key={occ.name} className="mt-14">
                <h2 className="font-heading text-2xl text-gray md:text-3xl">{occ.name}</h2>
                <p className="mt-2 max-w-2xl text-muted">{occ.description}</p>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {picks.map((p) => (
                    <ProductCard key={p.slug} product={p} lang={lang} />
                  ))}
                </div>
              </section>
            )
          })}

          <p className="mt-16 text-sm text-muted">{s.product.checkoutNote}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Kirjoita `src/pages/Shipping.tsx`**

```tsx
import ShopNav from '../components/ShopNav'
import Footer from '../shared/Footer'
import { PARTNERS } from '../data/partners'
import { useLang } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'

export default function Shipping() {
  const lang = useLang()
  const t = SHOP_COPY[lang]
  const rows = Object.values(PARTNERS).sort((a, b) => a.name.localeCompare(b.name))
  const zoneLabel = (z: string) =>
    z === 'worldwide' ? t.shipping.worldwide : z === 'eu' ? t.shipping.euOnly : t.shipping.fiOnly
  return (
    <>
      <ShopNav />
      <main className="bg-sand py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-4xl text-gray md:text-6xl">{t.shipping.title}</h1>
          <p className="mt-4 text-muted">{t.product.checkoutNote}</p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium text-gray">{p.name}</th>
                    <td className="px-5 py-4 text-muted">{zoneLabel(p.shipsTo)}</td>
                    <td className="px-5 py-4 text-xs text-muted">{p.verifiedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Lisää lihatuotteiden vientirajoitteet toimitussivulle**

Lisää `ShopCopy`-rajapinnan `shipping`-lohkoon kenttä `foodRules: { title: string; intro: string; rows: Array<{ area: string; rule: string }> }` ja molempiin kieliin alla oleva sisältö. Nämä on verifioitu viranomaislähteistä 31.7.2026 (gov.uk, aphis.usda.gov, mattilsynet.no, maff.go.jp), joten niitä ei saa muotoilla uudelleen arvaamalla.

EN:
```ts
foodRules: {
  title: 'Food and meat: what may be posted where',
  intro: 'Berry powders, jam and chocolate travel freely. Dried reindeer and other meat does not, and the rules are set by the destination country, not by us.',
  rows: [
    { area: 'European Union', rule: 'Allowed. Meat products move freely between member states.' },
    { area: 'Norway', rule: 'Allowed from the EU, but customs duty and VAT are charged on arrival.' },
    { area: 'United Kingdom', rule: 'Not possible. Since April 2025 venison, which covers reindeer, may not be brought in from the EU.' },
    { area: 'United States', rule: 'Not by post. A traveller may carry dried meat from Finland with origin documents, but a mailed parcel counts as a commercial import.' },
    { area: 'Japan', rule: 'Not possible. Meat needs an official inspection certificate whatever the transport method, and postal parcels are named specifically.' },
  ],
},
```

FI:
```ts
foodRules: {
  title: 'Ruoka ja liha: mitä minnekin saa postittaa',
  intro: 'Marjajauheet, hillot ja suklaa kulkevat vapaasti. Poron kuivaliha ja muu liha eivät kulje, ja säännöt asettaa kohdemaa, emme me.',
  rows: [
    { area: 'Euroopan unioni', rule: 'Sallittu. Lihatuotteet liikkuvat vapaasti jäsenmaiden välillä.' },
    { area: 'Norja', rule: 'Sallittu EU:sta, mutta tulli ja arvonlisävero peritään saapuessa.' },
    { area: 'Britannia', rule: 'Ei onnistu. Huhtikuusta 2025 alkaen hirvieläinlihaa, johon poro kuuluu, ei saa tuoda EU:sta.' },
    { area: 'Yhdysvallat', rule: 'Ei postitse. Matkustaja saa tuoda kuivalihaa mukanaan alkuperäasiakirjoilla, mutta postipaketti luetaan kaupalliseksi tuonniksi.' },
    { area: 'Japani', rule: 'Ei onnistu. Liha vaatii viranomaisen tarkastustodistuksen kuljetustavasta riippumatta, ja postipaketit mainitaan erikseen.' },
  ],
},
```

Renderöi `Shipping.tsx`:ssä taulukon jälkeen:

```tsx
<section className="mt-12">
  <h2 className="font-heading text-2xl text-gray">{t.shipping.foodRules.title}</h2>
  <p className="mt-2 text-muted">{t.shipping.foodRules.intro}</p>
  <dl className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
    {t.shipping.foodRules.rows.map((r) => (
      <div key={r.area} className="grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr] sm:gap-4">
        <dt className="font-medium text-gray">{r.area}</dt>
        <dd className="text-sm text-muted">{r.rule}</dd>
      </div>
    ))}
  </dl>
</section>
```

- [ ] **Step 4: Varmista build**

Run: `npx tsc -b && npm run build:nossg`
Expected: ei virheitä.

- [ ] **Step 5: Commit**

```bash
git add src/pages/GiftGuides.tsx src/pages/Shipping.tsx src/locales/shopCopy.ts
git commit -m "shop: lahjaopassivu oikeilla tuotelinkeilla ja toimitustiedot vientirajoitteineen"
```

---

## Task 13: Prerender-metat, sitemap ja JSON-LD

**Files:**
- Create: `scripts/build-routes-json.mjs`
- Create: `scripts/build-sitemap.mjs`
- Modify: `package.json` (build-ketju)
- Modify: `src/i18n/StructuredData.tsx`
- Modify: `index.html`

**Interfaces:**
- Consumes: `src/data/categories.ts`, `src/data/products.ts` (luetaan Noden puolella)
- Produces: `scripts/routes.json` ~20 reitillä × 12 kieltä, `public/sitemap.xml`, Product-JSON-LD

🔴 Reittejä on nyt liikaa käsin ylläpidettäväksi, ja käsin ylläpidetty metatiedosto ajautuu erilleen datasta. Molemmat generoidaan.

- [ ] **Step 1: Kirjoita `scripts/build-routes-json.mjs`**

```js
/**
 * Generoi scripts/routes.json datasta, jotta metat eivät ajaudu erilleen
 * katalogista. Ajetaan build-ketjussa ennen _prerender_routes.mjs:ää.
 *
 * Legal-reittien metat säilytetään sellaisenaan olemassa olevasta
 * routes.json:sta: ne on käännetty käsin 12 kielelle.
 */
import { readFileSync, writeFileSync } from 'node:fs'

const LANGS = ['en','fi','de','ja','es','pt-BR','zh-CN','ko','fr','it','nl','sv']
const LEGAL = new Set(['/privacy', '/terms', '/cookie-policy'])

const existing = JSON.parse(readFileSync('scripts/routes.json', 'utf8'))
const keep = existing.filter((r) => LEGAL.has(r.path))

// Kategoriat ja tuotteet luetaan TS-lähteestä regexillä: build-vaiheessa ei
// ole TS-runtimea, ja erillinen käännösvaihe olisi enemmän liikkuvia osia.
const cats = readFileSync('src/data/categories.ts', 'utf8')
const catSlugs = [...cats.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
const prods = readFileSync('src/data/products.ts', 'utf8')
const prodSlugs = [...prods.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((m) => m[1])

const byLang = (fn) => Object.fromEntries(LANGS.map((l) => [l, fn(l)]))

const routes = [
  ...keep,
  {
    path: '/',
    fallbackTitle: 'LaplandGifts: Finnish design, Lapland crafts and gifts delivered home',
    fallbackDescription: 'Curated Finnish design, Lapland handicrafts, treats, superfoods and experience gifts. Order from partner shops that deliver to your home country.',
    fallbackTitleByLang: byLang((l) => l === 'fi'
      ? 'LaplandGifts: suomalaista designia ja Lapin käsitöitä kotiin toimitettuna'
      : 'LaplandGifts: Finnish design, Lapland crafts and gifts delivered home'),
    fallbackDescriptionByLang: byLang((l) => l === 'fi'
      ? 'Kuratoitua suomalaista designia, Lapin käsitöitä, herkkuja, superfoodeja ja elämyslahjoja. Tilaa kumppanikaupoista kotimaahasi toimitettuna.'
      : 'Curated Finnish design, Lapland handicrafts, treats, superfoods and experience gifts. Order from partner shops that deliver to your home country.'),
  },
  ...catSlugs.map((slug) => ({
    path: slug,
    fallbackTitle: `${slug.replace('/', '')} | LaplandGifts`,
    fallbackDescription: 'Curated Finnish gifts with international delivery, chosen for travellers returning home from Lapland.',
  })),
  ...prodSlugs.map((slug) => ({
    path: `/product/${slug}`,
    fallbackTitle: `${slug.replace(/-/g, ' ')} | LaplandGifts`,
    fallbackDescription: 'Finnish gift with international delivery. The purchase is completed in the partner shop.',
  })),
  { path: '/gift-guides', fallbackTitle: 'Gift guides | LaplandGifts', fallbackDescription: 'What to bring home from Lapland, sorted by occasion and recipient.' },
  { path: '/shipping', fallbackTitle: 'Delivery | LaplandGifts', fallbackDescription: 'Which partner ships where, and the food import rules that apply to Lapland treats.' },
]

writeFileSync('scripts/routes.json', JSON.stringify(routes, null, 2) + '\n')
console.log(`[routes] ${routes.length} reittiä × 12 kieltä`)
```

- [ ] **Step 2: Aja generaattori ja tarkista tulos**

Run: `node scripts/build-routes-json.mjs`
Expected: `[routes] 20 reittiä × 12 kieltä` (tarkka luku riippuu tuotemäärästä).

- [ ] **Step 3: Kirjoita `scripts/build-sitemap.mjs`**

```js
/**
 * Sitemap 12 kielellä samasta reittilähteestä. Trailing slash on verkoston
 * konventio (fix_sitemap_trailing_slashes.mjs korjasi tämän aiemmin käsin).
 */
import { readFileSync, writeFileSync } from 'node:fs'

const SITE = 'https://laplandgifts.com'
const PREFIX = { en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es', 'pt-BR': '/br',
  'zh-CN': '/cn', ko: '/kr', fr: '/fr', it: '/it', nl: '/nl', sv: '/sv' }

const routes = JSON.parse(readFileSync('scripts/routes.json', 'utf8'))
const today = process.env.SITEMAP_DATE || new Date().toISOString().slice(0, 10)

const urls = []
for (const r of routes) {
  for (const p of Object.values(PREFIX)) {
    const path = r.path === '/' ? `${p}/` : `${p}${r.path}/`
    urls.push(`  <url><loc>${SITE}${path}</loc><lastmod>${today}</lastmod></url>`)
  }
}

writeFileSync('public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`)
console.log(`[sitemap] ${urls.length} URLia`)
```

- [ ] **Step 4: Kytke generaattorit build-ketjuun**

`package.json`:n `build`-skripti muotoon:

```json
"build": "node scripts/build-routes-json.mjs && node scripts/build-sitemap.mjs && tsc -b && vite build && node scripts/_prerender_routes.mjs --site=https://laplandgifts.com --siteName=LaplandGifts --twitter=@laplandvibes --defaultOg=/og-default.jpg --routes=scripts/routes.json"
```

- [ ] **Step 5: Lisää Product-JSON-LD tuotesivulle**

`src/i18n/StructuredData.tsx`:ään haara, joka tunnistaa `/product/:slug` -polun ja emittoi:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "…",
  "brand": { "@type": "Brand", "name": "…" },
  "offers": {
    "@type": "Offer",
    "price": "…",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "url": "<kumppanin tuotesivun URL>",
    "seller": { "@type": "Organization", "name": "<kumppanin nimi>" }
  }
}
```

🔴 `offers.url` osoittaa **kumppanin** sivulle, ei meidän: meillä ei ole kassaa, ja oma URL siinä olisi väärä lupaus hakukoneelle. Älä lisää `aggregateRating`-kenttää: meillä ei ole arvosteluja.

- [ ] **Step 6: Päivitä `index.html`:n root-metat**

🔴 Root-reitillä on **kaksi metalähdettä**: `scripts/routes.json` (prerender) ja `index.html`:n `LV-LOCALE-TITLE`-lohkon `T`-taulukko (SPA-kuori). Molemmat on päivitettävä, muuten ne ajautuvat eri mieltä.

Korvaa `index.html`:n rivit 74–75:

```html
<title>LaplandGifts: Finnish design, Lapland crafts and gifts delivered home</title>
<meta name="description" content="Curated Finnish design, Lapland handicrafts, treats, superfoods and experience gifts. Order from partner shops that deliver to your home country." />
```

Korvaa OG-kentät (rivit 80–81):

```html
<meta property="og:title" content="LaplandGifts: Finnish design and Lapland crafts" />
<meta property="og:description" content="Curated Finnish gifts with international delivery, chosen for travellers heading home from Lapland." />
```

Päivitä `LV-LOCALE-TITLE`-lohkon `T`-taulukossa vähintään `en` ja `fi` (muut voivat jäädä nykyisiksi, koska ne eivät lupaa avautuvaa kauppaa):

```js
"en":"LaplandGifts: Finnish design, Lapland crafts and gifts delivered home",
"fi":"LaplandGifts: suomalaista designia ja Lapin käsitöitä kotiin toimitettuna",
```

Varmista lopuksi, ettei `index.html`:ssä eikä `routes.json`:ssa esiinny enää merkkijonoa `opening soon`:

```bash
grep -ri "opening soon" index.html scripts/routes.json src/locales/ | wc -l
```

Expected: `0`

- [ ] **Step 7: Aja täysi build ja tarkista kuorimittari**

Run: `npm run build && find dist -name index.html | wc -l`
Expected: reittimäärä × 12 (esim. 20 reittiä → 240). Arvo 1 tarkoittaa että prerender ei ajanut.

- [ ] **Step 8: Commit**

```bash
git add scripts/build-routes-json.mjs scripts/build-sitemap.mjs scripts/routes.json public/sitemap.xml package.json src/i18n/StructuredData.tsx index.html
git commit -m "shop: routes.json ja sitemap generoidaan datasta, Product-JSON-LD ja root-metat"
```

---

## Task 14: Matkapäivä-widget ja Supabase-taulu

**Files:**
- Create: `src/components/TripReminder.tsx`
- Create: `supabase/migrations/20260731_gift_trip_reminders.sql`
- Modify: `src/pages/Home.tsx`

**Interfaces:**
- Produces: `<TripReminder />` (sähköposti + saapumis- ja lähtöpäivä + suostumus)

🔴 Opittu 30.7.: RLS voi olla päällä ja silti vuotaa näkymien kautta. Testaa **anon-avaimella oikeaa REST-rajapintaa**, älä luota siihen että RLS on päällä.
🔴 Opittu domain-vaihdosta: CORS-allowlist rikkoutuu hiljaa. Lisää origin ja verifioi selaimesta.

- [ ] **Step 1: Kirjoita migraatio**

```sql
create table if not exists public.gift_trip_reminders (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  arrival_date date not null,
  departure_date date not null,
  lang text not null default 'en',
  source text not null default 'laplandgifts',
  consented_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.gift_trip_reminders enable row level security;

-- Anon saa lisätä rivin muttei lukea yhtään.
create policy "anon voi lisata varauksen"
  on public.gift_trip_reminders for insert to anon with check (true);
```

- [ ] **Step 2: Aja migraatio ja varmista ettei anon pysty lukemaan**

```bash
curl -s "https://oogioaxmfnqcbvjbcodh.supabase.co/rest/v1/gift_trip_reminders?select=email" \
  -H "apikey: ${SUPABASE_ANON_KEY}" -H "Authorization: Bearer ${SUPABASE_ANON_KEY}"
```

Expected: `[]` tai lupavirhe. **Jos vastaus sisältää sähköpostiosoitteita, pysäytä ja korjaa käytäntö ennen jatkoa.**

- [ ] **Step 3: Kirjoita `src/components/TripReminder.tsx`**

```tsx
import { useState, type FormEvent } from 'react'
import { useLang } from '../i18n/useLang'
import { SHOP_COPY } from '../locales/shopCopy'

const URL = import.meta.env.VITE_SUPABASE_URL
const KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

/**
 * Kerää matkan päivämäärät, jotta voimme muistuttaa tuliaisista ennen
 * kotiinlähtöä. Itse muistutusmaili on V2: tässä vain data ja suostumus.
 * Kaikki kentät text-base (16 px), muuten iOS zoomaa lomakkeeseen.
 */
export default function TripReminder() {
  const lang = useLang()
  const t = SHOP_COPY[lang].trip
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setState('sending')
    try {
      const res = await fetch(`${URL}/rest/v1/gift_trip_reminders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: KEY,
          Authorization: `Bearer ${KEY}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          email: form.get('email'),
          arrival_date: form.get('arrival'),
          departure_date: form.get('departure'),
          lang,
          source: 'laplandgifts',
        }),
      })
      setState(res.ok ? 'done' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <section className="bg-sand-deep py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-3xl text-gray">{t.successTitle}</h2>
          <p className="mt-3 text-muted">{t.successBody}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-sand-deep py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="font-heading text-3xl text-gray md:text-4xl">{t.title}</h2>
        <p className="mt-3 text-muted">{t.body}</p>
        <form onSubmit={submit} className="mt-8 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray">{t.emailLabel}</span>
            <input
              type="email" name="email" required autoComplete="email"
              className="min-h-12 rounded-xl border border-line bg-white px-4 text-base text-gray"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-gray">{t.arrivalLabel}</span>
              <input
                type="date" name="arrival" required
                className="min-h-12 rounded-xl border border-line bg-white px-4 text-base text-gray"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-gray">{t.departureLabel}</span>
              <input
                type="date" name="departure" required
                className="min-h-12 rounded-xl border border-line bg-white px-4 text-base text-gray"
              />
            </label>
          </div>
          <label className="flex items-start gap-3 text-sm text-muted">
            <input type="checkbox" name="consent" required className="mt-1 h-5 w-5 shrink-0" />
            <span>{t.consent}</span>
          </label>
          <button
            type="submit" disabled={state === 'sending'}
            className="min-h-12 rounded-full bg-amber px-8 py-3 text-base font-medium text-white transition-colors hover:bg-amber/90 disabled:opacity-60"
          >
            {state === 'sending' ? t.submitting : t.submit}
          </button>
          {state === 'error' && <p className="text-sm text-pink">{t.error}</p>}
        </form>
      </div>
    </section>
  )
}
```

Lisää samalla `ShopCopy`-rajapintaan `trip`-lohko (`title`, `body`, `emailLabel`, `arrivalLabel`, `departureLabel`, `consent`, `submit`, `submitting`, `successTitle`, `successBody`, `error`) sekä EN- ja FI-tekstit. FI-esimerkki:

```ts
trip: {
  title: 'Milloin olet Lapissa?',
  body: 'Kerro matkasi päivät, niin muistutamme tuliaisista ennen kotiinlähtöä. Tilaat kotiin toimitettuna, etkä kanna mitään laukussa.',
  emailLabel: 'Sähköposti',
  arrivalLabel: 'Saapumispäivä',
  departureLabel: 'Lähtöpäivä',
  consent: 'Saat yhden muistutuksen matkasi lopulla ja voit perua koska tahansa. Emme luovuta osoitettasi eteenpäin.',
  submit: 'Muistuta minua',
  submitting: 'Lähetetään',
  successTitle: 'Kiitos, merkitty muistiin',
  successBody: 'Lähetämme muistutuksen kaksi päivää ennen lähtöäsi.',
  error: 'Lähetys ei onnistunut. Yritä hetken kuluttua uudelleen.',
},
```

- [ ] **Step 4: Lisää origin CORS-allowlistiin**

Lisää `https://laplandgifts.com` `laplandvibes/supabase/functions/send-welcome-email/index.ts`:n `ALLOWED_ORIGINS`-joukkoon ja deployaa funktio uudelleen.

- [ ] **Step 5: Testaa lomake selaimessa ja tarkista rivi kannasta**

Lähetä testiosoitteella ja varmista service-role-avaimella että rivi syntyi oikeilla päivämäärillä.

- [ ] **Step 6: Commit**

```bash
git add src/components/TripReminder.tsx supabase/migrations/ src/pages/Home.tsx
git commit -m "shop: matkapaiva-widget ja gift_trip_reminders-taulu RLS:lla"
```

---

## Task 15: Kuvat

**Files:**
- Create: `public/images/hero-shop.{avif,webp}`
- Create: `public/images/cat-design.{avif,webp}`, `cat-clothing.*`, `cat-treats.*`, `cat-superfoods.*`
- Create: tuotekuvat niille tuotteille, joilla ei ole kumppanin feed-kuvaa

**Interfaces:**
- Produces: kaikki `products.ts`:n ja `categories.ts`:n `image`-viittaukset olemassa oleviksi tiedostoiksi (Task 2:n kuvatesti muuttuu vihreäksi)

- [ ] **Step 1: Lue Picsart-ohje ennen generointia**

Lue muisti `_shared/picsart_image_gen.md`. Picsart on ensisijainen kuvatyökalu; Gamma on varalla kun krediitit loppuvat.

- [ ] **Step 2: Generoi puuttuvat kategoria- ja herokuvat**

Tyyli: editorial, luonnonvalo, matala saturaatio, tuote pinnalla tai käytössä, ei ihmiskasvoja, ei revontulikliseitä kaupan kuvissa. Hero: talvinen kaupunkikuva tai lahjapöytä, tilaa vasempaan reunaan tekstille.

- [ ] **Step 3: Muunna AVIF+WebP-pareiksi**

Run: `node scripts/optimize-images.mjs` (olemassa oleva skripti)
Expected: jokaiselle lähdekuvalle `.avif` ja `.webp` `public/images/`:iin.

- [ ] **Step 4: Aja katalogitestit**

Run: `npm test`
Expected: PASS, kuvatesti vihreä.

- [ ] **Step 5: Commit**

```bash
git add public/images/
git commit -m "shop: hero- ja kategoriakuvat sekä puuttuvat tuotekuvat"
```

---

## Task 16: Build, verifiointi ja julkaisu

**Files:**
- Modify: `command-center-sites/laplandgifts.html` (eri repo)
- Modify: muisti `_episodic/per-site/laplandgifts.md`

- [ ] **Step 1: Aja koko testisarja ja lint**

Run: `npm test && npm run lint`
Expected: molemmat vihreitä.

- [ ] **Step 2: Buildaa eristetyssä worktreessä**

```bash
cd laplandgifts
git worktree add ../laplandgifts-deploy-wt HEAD
cd ../laplandgifts-deploy-wt
npm install --no-audit --no-fund
npm run build
```

🔴 Työpuussa on muiden sessioiden committoimattomia muutoksia. Buildaa HEADista, älä työpuusta.

- [ ] **Step 3: Tarkista kuorimittari ja metojen ainutlaatuisuus**

```bash
find dist -name index.html | wc -l
grep -o '<title>[^<]*</title>' dist/design/index.html dist/fi/design/index.html dist/product/*/index.html | head
```

Expected: sivumäärä = reitit × 12, ja jokaisella reitillä oma title. Jos kaikki titlet ovat samoja, prerender ei lukenut routes.jsonia.

- [ ] **Step 4: Deployaa tuotantoon**

```bash
npx wrangler pages deploy dist --project-name=laplandgifts --branch=main
```

🔴 Ilman `--branch=main` deploy menee Preview-ympäristöön eikä apex päivity.

- [ ] **Step 5: Verifioi live renderöidystä DOM:ista**

```bash
curl -s https://laplandgifts.com/design | grep -o '<title>[^<]*</title>'
curl -s https://laplandgifts.com/ | grep -c 'rel="sponsored nofollow noopener"'
curl -s https://laplandgifts.com/ | grep -c 'noreferrer'
```

Expected: kategoriasivun oma title; ostolinkeissä oikeat rel-attribuutit; `noreferrer`-osumia **0**.

- [ ] **Step 6: Mobiiliverifiointi**

Aja CDP-kaappaukset 375 px ja 768 px leveyksillä (`mobile-shot.mjs`, ks. muisti `_shared/mobile_screenshot_cdp.md`). Tarkista: ei vaakascrollia, navi mahtuu, tuotegrid on yksipalstainen mobiilissa, hero-h1 enintään kolme riviä.

- [ ] **Step 7: Poista worktree**

```bash
cd ../laplandgifts && git worktree remove ../laplandgifts-deploy-wt --force
```

- [ ] **Step 8: Päivitä muisti ja Command Center**

Päivitä `_episodic/per-site/laplandgifts.md` uudella tilalla ja live-URL:lla, `command-center-sites/laplandgifts.html` (changelog, avoimet asiat, päivämäärät) sekä `command-center.html`:n SITES-rivin `st:`/`appr:`-kentät. Aja lopuksi `node check_memory_index.mjs`.

- [ ] **Step 9: Commit**

```bash
git add -A && git commit -m "shop: V1 julkaistu tuotantoon"
```

---

## Mitä tämä suunnitelma EI kata

Nämä ovat tietoisesti rajattu erillisiksi töiksi, jotta V1 valmistuu ja Awin-uusintahaku voidaan tehdä:

1. **Katalogin täyttö 8–15 tuotteeseen per kategoria.** Task 2 tuottaa vähintään 5 per kategoria. Loput lisätään sitä mukaa kun Adtraction-hyväksynnät tulevat ja hinnat voidaan verifioida.
2. **Fourthwall-merch.** Vaatii Vesan tilin. Kun kauppa on auki, merch-kategorian tuotteet linkitetään sen tuotesivuille.
3. **Ajastettu tuliaismuistutusmaili.** Task 14 kerää datan, itse maili on V2.
4. **Tuotekuvausten käännös 10 lisäkielelle.** V1 on fi+en natiivi, muut EN-fallback.
5. **Monimarkkinaohjelmat** (Nordic Nest ×12, Suunto ×6): V1 käyttää FI-ohjelmien linkkejä.
