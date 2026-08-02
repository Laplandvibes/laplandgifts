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
