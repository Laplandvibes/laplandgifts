import { describe, expect, test } from 'vitest'
import { lukupaiva } from '../lukupaiva'
import type { Lang } from '../../i18n/useLang'

// Tuotesivun lukupäivä näkyi ISO-muodossa (2026-08-03) kaikilla kielillä (19.11.2026).
describe('lukupaiva', () => {
  test('suomi ja saksa numeroina', () => {
    expect(lukupaiva('2026-08-03', 'fi')).toBe('3.8.2026')
    expect(lukupaiva('2026-11-19', 'de')).toBe('19.11.2026')
  })

  test('muut kielet kuukauden nimellä', () => {
    expect(lukupaiva('2026-11-19', 'en')).toBe('19 November 2026')
    expect(lukupaiva('2026-11-19', 'sv')).toBe('19 november 2026')
    expect(lukupaiva('2026-11-19', 'ja')).toBe('2026年11月19日')
    expect(lukupaiva('2026-11-19', 'ko')).toBe('2026년 11월 19일')
  })

  test('yksikään kieli ei näytä ISO-päivää eikä siirrä päivää', () => {
    const kielet: Lang[] = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv']
    for (const l of kielet) {
      const t = lukupaiva('2026-01-01', l)
      expect(t, l).not.toMatch(/\d{4}-\d{2}-\d{2}/)
      expect(t, l).toMatch(/2026/)
      expect(t, l).toMatch(/(^|\D)1(\D|$)/)
    }
  })
})
