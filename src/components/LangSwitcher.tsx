/**
 * Kielivalitsin asuu nyt kanonisessa `src/i18n/LanguageSwitcher.tsx`:ssa, joka
 * on sama koko verkostossa. Tämä tiedosto säilyy pelkkänä uudelleenvientinä,
 * jotta `ShopNav` ei tarvitse muutosta.
 *
 * Aiemmin tässä oli kaksi natiivia <select>:iä (mobiilissa lyhyt koodi, sm+
 * natiivinimi). Natiivi valikko ei voi näyttää lippua, ja se oli koko syy
 * vaihtaa — Vesa 2026-09-10.
 */
export { default } from '../i18n/LanguageSwitcher';
