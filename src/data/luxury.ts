/**
 * Luksusvalikoima.
 *
 * 🔴 Miksi ELÄMYSVETOINEN eikä esinevetoinen (mitattu 12.8.2026, Vesa:
 * "kalliita tuotteita pitää luxus-sivulle laittaa myös tarjolle"): yli 80
 * euron tuotteita on 24, mutta niistä vain 14 lähtee ulkomaille. Suomeen
 * rajattuja ovat juuri kalleimmat ESINEET — Halti-takit 250–280 €,
 * Finlayson-pellava 200 €, Iittalan maljakko 159 €.
 *
 * Ulkomaille lähtevä kärki on kokonaan elämyksiä: kullanhuuhdontapäivä
 * 1 490 €, porosafari 400 €, lasi-igluyö 400 €. Luksussivu joka johtaisi
 * pussilakanasetillä, jota ei toimiteta lukijalle, ei olisi luksusta vaan
 * umpikuja.
 *
 * 🔴 Raja on 80 € eikä 100 €, koska 100 € pudottaisi Lapuan Kankureiden
 * Kaamos-huovan (99,90 €) ja Marimekon Unikko-laukun (80,26 €) — molemmat
 * ovat lahjana selvästi ylellisen puolella, eikä sivun tarkoitus ole
 * näyttää hintalappua vaan valikoimaa.
 */
export const LUXURY_MIN_PRICE = 80

/** Tunnukset, jotka nostetaan sivun kärkeen tässä järjestyksessä. */
export const LUXURY_HERO_SLUGS: string[] = [
  'gold-panning-day-inari',
  'glass-igloo-night-levi',
  'reindeer-safari-rovaniemi',
]
