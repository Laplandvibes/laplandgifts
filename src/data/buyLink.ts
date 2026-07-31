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
