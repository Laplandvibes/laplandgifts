import { describe, it, expect } from 'vitest'
import {
  BOUTIQUES, boutiqueBySlug, boutiquesByTown, boutiqueOutboundUrl, TOWN_IDS,
  TOWN_PAGE_MIN_BOUTIQUES, townsWithPages, townsWithoutPages, boutiqueTownPaths,
} from '../boutiques'
import { CATEGORY_IDS } from '../types'

describe('putiikkidatan eheys', () => {
  it('putiikkeja on 12 ja verkkokauppoja 7', () => {
    expect(BOUTIQUES).toHaveLength(12)
    expect(BOUTIQUES.filter((b) => b.hasOnlineStore)).toHaveLength(7)
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

  it('kuolleiksi mitatut putiikit eivät palaa listalle', () => {
    // Mitattu 2026-08-07: lapinkelloseppa.fi ei ratkea lainkaan ja
    // arcticdesignshop.com on myynnissä GoDaddyssa. Molemmat olivat livenä
    // laplandstore.fi:llä, ja lähdedatan kommentti väitti ne verifioiduiksi.
    // Tämä testi estää niiden paluun jos joku kopioi vanhaa dataa uudestaan.
    const slugs = BOUTIQUES.map((b) => b.slug)
    expect(slugs).not.toContain('lapin-kelloseppa')
    expect(slugs).not.toContain('arctic-design-shop')
    for (const b of BOUTIQUES) {
      expect(b.url, b.slug).not.toContain('lapinkelloseppa.fi')
      expect(b.url, b.slug).not.toContain('arcticdesignshop.com')
    }
  })

  it('kauppa jolla ei ole omaa domainia linkittää alasivuun eikä juureen', () => {
    // Korundi Shop asuu kulttuuritalon sivustolla ja SHOPPI levi.fi:llä.
    // Juurilinkki veisi konserttikalenteriin ja hiihtokeskuksen etusivulle,
    // jotka eivät mainitse myymälää lainkaan.
    for (const slug of ['korundi-shop', 'shoppi-craft-design']) {
      const b = boutiqueBySlug(slug)!
      expect(new URL(b.url).pathname, slug).not.toBe('/')
    }
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
    expect(boutiquesByTown('rovaniemi')).toHaveLength(6)
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
