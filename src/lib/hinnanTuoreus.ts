/**
 * Luettelon hinta näytetään vain, jos se on luettu kaupasta enintään HINTA_MAX_IKA_PV päivää sitten.
 *
 * Vesa 20.11.2026 kumppanirivien syyskuun hinnoista: "jos ei nämä hinnat päivity automaattisesti viikottain
 * niin tämä pitää ottaa pois kokonaan", ja luettelosta: "Luku viikoittain". Hinnat luetaan viikoittain
 * (lv-ops scripts/gifts/lue_luettelon_hinnat.mjs, ajastus gifts-hinnat-viikoittain). Raja on 10 päivää eikä
 * 7, jotta viikon välein tehty luku ehtii aina ennen rajaa; jos ajo jää väliin, hinta katoaa sivulta eikä
 * vanha hinta jää näkyviin. Sama periaate kuin jaetuissa kumppaniriveissä (shared/ads/ProductRail.tsx) ja
 * GYG-hinnoissa (lv_permanent_rules §40).
 *
 * Tarkistus tehdään selaimessa piirrettäessä, joten vanha build ei voi näyttää vanhentunutta hintaa.
 */
export const HINTA_MAX_IKA_PV = 10

export function hintaTuore(priceCheckedAt: string, now: number = Date.now()): boolean {
  const t = Date.parse(`${priceCheckedAt}T00:00:00Z`)
  return Number.isFinite(t) && now - t <= HINTA_MAX_IKA_PV * 86_400_000
}
