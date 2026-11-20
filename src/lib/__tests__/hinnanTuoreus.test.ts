import { describe, expect, it } from 'vitest'
import { HINTA_MAX_IKA_PV, hintaTuore } from '../hinnanTuoreus'

const paiva = (iso: string) => Date.parse(`${iso}T12:00:00Z`)

describe('hintaTuore', () => {
  it('näyttää viikon välein luetun hinnan koko välin', () => {
    expect(hintaTuore('2026-11-20', paiva('2026-11-20'))).toBe(true)
    expect(hintaTuore('2026-11-20', paiva('2026-11-27'))).toBe(true)
    expect(hintaTuore('2026-11-20', paiva('2026-11-29'))).toBe(true)
  })

  it('piilottaa hinnan, kun lukua ei ole tehty rajan sisällä', () => {
    expect(HINTA_MAX_IKA_PV).toBe(10)
    expect(hintaTuore('2026-11-20', paiva('2026-12-01'))).toBe(false)
    expect(hintaTuore('2026-09-05', paiva('2026-11-20'))).toBe(false)
  })

  it('kelvoton päivä ei näytä hintaa', () => {
    expect(hintaTuore('', paiva('2026-11-20'))).toBe(false)
    expect(hintaTuore('ei-paiva', paiva('2026-11-20'))).toBe(false)
  })
})
