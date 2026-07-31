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
