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
