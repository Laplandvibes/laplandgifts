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
