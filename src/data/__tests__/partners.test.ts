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

  it('vie Haltin halti.com-ohjelmaan, ei halti.fi-ohjelmaan', () => {
    // 🔴 Adtractionissa on kaksi Halti-ohjelmaa saman to.halti.fi-domainin
    // takana: `halti` = halti.fi (a=1622199573), `halticom` = halti.com
    // (a=1622204962). Tuotteet ovat halti.com-kaupassa. Väärä reitti ei kaadu
    // eikä näy asiakkaalle — klikki vain menee ohjelmaan jota kauppa ei hyvitä.
    const p = PARTNERS.halti
    const u = new URL(partnerHref(p, 'https://halti.com/products/takki', 'gifts_halti_takki'))
    expect(u.pathname).toBe('/go/halticom')
    expect(u.searchParams.get('dest')).toBe('https://halti.com/products/takki')
  })

  it('yksikään kumppani ei kirjoita verkoston linkkiä lähdekoodiin', () => {
    // Verkoston sääntö (CLAUDE.md): affiliate-CTA kulkee AINA redirect-Workerin
    // kautta. Raaka trackingTemplate tuottaa kyllä komission, mutta ilman
    // Workerin `epi=`-alatunnistetta — jolloin Adtractionin raportissa klikit
    // ovat erittelemätöntä massaa eikä niistä näe sivustoa eikä paikkaa.
    // Halti ja Makia olivat tässä tilassa 2.8.2026 asti.
    for (const [id, p] of Object.entries(PARTNERS)) {
      expect(p.trackingTemplate, `${id} kirjoittaa verkoston linkin suoraan lähteeseen`)
        .toBeUndefined()
      if (p.network === 'adtraction') {
        expect(p.workerRoute, `${id} on adtraction-kumppani ilman workerRoutea`).toBeTruthy()
      }
    }
  })

  it('reitittää Workerin kautta kun kumppanilla on workerRoute', () => {
    const p = PARTNERS.scandinavianoutdoor
    const target = 'https://scandinavianoutdoor.fi/kupilka/varusteet/juomamuki-21/'
    const href = partnerHref(p, target, 'gifts_handicrafts_card')
    const u = new URL(href)
    expect(u.origin).toBe('https://go.laplandvibes.com')
    expect(u.pathname).toBe('/go/scandinavianoutdoor')
    expect(u.searchParams.get('sid')).toBe('gifts_handicrafts_card')
    // 🔴 Worker lukee kohteen `dest`-parametrista. Väärä nimi ei kaadu vaan
    // pudottaa syvälinkin hiljaa ja vie asiakkaan kaupan etusivulle.
    expect(u.searchParams.get('dest')).toBe(target)
  })

  it('Adtraction-kumppani ei koskaan päädy paljaaseen UTM-linkkiin', () => {
    for (const [id, p] of Object.entries(PARTNERS)) {
      if (p.network !== 'adtraction') continue
      const href = partnerHref(p, `${p.baseUrl}/tuote`, 'gifts_x')
      expect(href.startsWith(p.baseUrl), `${id} meni UTM-reitille`).toBe(false)
    }
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
