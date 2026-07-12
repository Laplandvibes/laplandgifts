/**
 * Mainospaikkojen data — laplandgifts.com (LV Media -inventaari).
 *
 * Myyntiprosessi:
 *   1. Kumppani ostaa paikan (LV Media -portaali → lv_bookings)
 *   2. Agentti täyttää sopivan paikan tässä tiedostossa Partner-objektilla
 *   3. `npm run build` + wrangler deploy → kortti/banneri ilmestyy sivulle
 *
 * JAETTU MALLI (Vesa 2026-07-11):
 *   sponsors[0] = PÄÄKUMPPANI  → kompakti banneri heti heron alla (paras paikka)
 *   sponsors[1] = KAKKOSPÄÄKUMPPANI → kortti HomeAdSlots-osiossa ylhäällä
 *   spots       = 6 kohdekohtaista premium-paikkaa (Rovaniemi, Levi, Ylläs,
 *                 Saariselkä, Kittilä, Inari)
 *
 * Tyhjä paikka (null) renderöi "Haluatko mainoksesi tähän?" -house-adin, joka
 * linkittää https://laplandvibes.com/media/site/laplandgifts + GA4
 * advertise_here_click -eventin.
 */

import type { HomeAdSlotsConfig } from '../../../shared/HomeAdSlots';
import { DEFAULT_PREMIUM_SPOTS } from '../../../shared/PremiumSpotGrid';

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandgifts',
  sponsors: [null, null],
  spots: DEFAULT_PREMIUM_SPOTS,
};
