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
