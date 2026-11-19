/**
 * Estää rivinvaihdon tuotenimen sanaa aloittavan yhdysmerkin jälkeen.
 *
 * Suomen nimissä on rakenne "Sisu Kaamos -suolalakritsipastilli 80 g". Selain
 * saa katkaista rivin yhdysmerkin JÄLKEEN, jolloin puhelimella näkyi
 * "Sisu Kaamos -" ja seuraavalla rivillä "suolalakritsipastilli" (mitattu 19.11.2026
 * livestä: /fi-kategoriasivuilla 96 tällaista katkoa 320 ja 390 px:n leveydellä).
 * Oikea katko on ennen yhdysmerkkiä, koska yhdysmerkki kuuluu sanaan.
 *
 * Yhdysmerkin perään lisätään näkymätön sanaliitos (U+2060 WORD JOINER), joka
 * kieltää vain tämän yhden katkon. Muut rivitysmahdollisuudet säilyvät, joten pitkä
 * sana kapeassa kortissa rivittyy kuten ennenkin eikä vuoda yli. (Ensimmäinen
 * versio kääri osan inline-blockiin: 320 px:n korteissa 17 nimeä vuoti yli.)
 * Käytä vain näytettävään nimeen, ei hakuun, kuvatekstiin eikä metatietoihin.
 */
export function sidoYhdysmerkki(text: string): string {
  return text.replace(/(?<=\s)-(?=[\p{L}\p{N}])/gu, '-\u2060')
}
