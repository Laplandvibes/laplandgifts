import type { Lang } from '../i18n/useLang'

/**
 * Etusivun otsikko ja kuvaus 12 kielellä. Yksi lähde, kolme lukijaa:
 *
 *   1. `src/pages/Home.tsx` renderöi näistä `<title>`- ja description-tagit.
 *      Tämä on se, jonka selain lopulta näyttää.
 *   2. `scripts/build-routes-json.mjs` kirjoittaa näistä root-reitin metat
 *      `scripts/routes.json`iin, jonka prerender paistaa staattisiin kuoriin.
 *   3. Sama generaattori vertaa näitä `index.html`:n LV-LOCALE-TITLE-lohkon
 *      T-taulukkoon ja kaataa buildin, jos ne eroavat.
 *
 * 🔴 Ennen tätä tiedostoa etusivun otsikko oli kolmessa paikassa kolmella eri
 * tekstillä: index.html lupasi vielä avautuvaa kauppaa, routes.json lupasi
 * samaa ja Home.tsx sanoi jotain kolmatta. Selaimessa voitti Home.tsx,
 * hakukoneen ensimmäisessä tavussa routes.json. Sivu näytti siis eri
 * otsikkoa riippuen siitä, ajoiko lukija JavaScriptin.
 *
 * index.html:n T-taulukkoa ei voi lukea täältä (se on staattinen kuori, joka
 * tarjoillaan ennen kuin yhtään moduulia on ladattu), joten se on ainoa
 * kopio, ja generaattorin portti vahtii sitä.
 */
export const HOME_META: Record<Lang, { title: string; description: string }> = {
  // 🔴 en ja fi kirjoitettiin uusiksi 1.8.2026 vastaamaan heron h1:tä. Vanha
  // englanninkielinen otsikko oli 69 merkkiä eli katkesi hakutuloksessa, eikä
  // kummassakaan lukenut termiä jolla asiaa haetaan ("finnish gifts",
  // "lapin tuliaiset"). Brändi siirtyi loppuun, jotta hakusana on ensin.
  // Muut kymmenen otsikkoa ovat käännettyjä ja jäävät ennalleen.
  en: {
    title: 'Finnish gifts and Lapland souvenirs | LaplandGifts',
    description:
      'Moomin and Arabia design, Marttiini puukko knives, Finnish sweets, Arctic berry powders and Lapland experience gifts, from the shops that ship them home.',
  },
  fi: {
    title: 'Lapin tuliaiset ja suomalaiset lahjat | LaplandGifts',
    description:
      'Muumi- ja Arabia-designia, Marttiinin puukkoja, suomalaisia herkkuja, arktisia marjajauheita ja Lapin elämyslahjoja niistä kaupoista, jotka myös lähettävät ne.',
  },
  de: {
    title: 'LaplandGifts: finnisches Design und Geschenke aus Lappland',
    description:
      'Finnisches Design, Handwerk aus Lappland, Delikatessen, Superfoods und Erlebnisgeschenke. Bestellt wird bei Partnershops, die nach Hause liefern.',
  },
  // 🔴 ja, pt-BR, ko ja fr kirjoitettiin uusiksi 15.8.2026 GSC-datan pohjalta:
  // kaikki neljä kielijuurta olivat top-10-tuntumassa 0 klikillä, ja otsikko
  // alkoi brändillä eikä hakusanalla ("que ramener de laponie", "boutique
  // souvenir laponie en ligne" jne.). Hakusana siirtyi alkuun, brändi loppuun —
  // sama korjaus kuin en/fi 1.8.
  ja: {
    title: 'フィンランドのお土産・ラップランドのギフト | LaplandGifts',
    description:
      'フィンランドのお土産をオンラインで。ムーミンやイッタラのデザイン、ラップランドの手工芸品、フィンランドのお菓子、スーパーフード、体験ギフト。提携ショップからご自宅の国へ届きます。',
  },
  es: {
    title: 'LaplandGifts: diseño finlandés y artesanía lapona',
    description:
      'Diseño finlandés seleccionado, artesanía de Laponia, delicias, superalimentos y regalos de experiencias. Compra en tiendas asociadas que envían a tu país.',
  },
  'pt-BR': {
    title: 'Presentes finlandeses e souvenirs da Lapônia | LaplandGifts',
    description:
      'Souvenirs da Lapônia e presentes finlandeses: Moomin e Iittala, facas Marttiini, doces e superalimentos. Compre em lojas parceiras que entregam no seu país.',
  },
  'zh-CN': {
    title: 'LaplandGifts：芬兰设计与拉普兰手工艺，直送到家',
    description:
      '精选芬兰设计、拉普兰手工艺品、特色食品、超级食物和体验礼物。在合作商店下单，商品直接寄送到您所在的国家，行李里不必再挤出空间。',
  },
  ko: {
    title: '핀란드 기념품과 라플란드 선물 | LaplandGifts',
    description:
      '핀란드 기념품과 라플란드 선물: 무민과 아라비아 디자인, 수공예품, 핀란드 과자, 슈퍼푸드, 체험 선물까지. 제휴 상점에서 주문하면 사는 나라로 배송됩니다.',
  },
  fr: {
    title: 'Souvenirs de Laponie et artisanat finlandais | LaplandGifts',
    description:
      'Que ramener de Laponie ? Souvenirs et artisanat finlandais : Moomin, Iittala, Marttiini, gourmandises, dans des boutiques en ligne qui livrent chez vous.',
  },
  it: {
    title: 'LaplandGifts: design finlandese e artigianato lappone',
    description:
      'Design finlandese selezionato, artigianato della Lapponia, specialità, superfood e regali esperienza. Ordini dai negozi partner che spediscono a casa Sua.',
  },
  nl: {
    title: 'LaplandGifts: Fins design en Laplands ambacht thuisbezorgd',
    description:
      'Geselecteerd Fins design, Laplands ambacht, lekkernijen, superfoods en beleveniscadeaus. Bestel bij partnerwinkels die naar uw eigen land bezorgen.',
  },
  sv: {
    title: 'LaplandGifts: finsk design och lappländskt hantverk',
    description:
      'Utvald finsk design, lappländskt hantverk, delikatesser, superfoods och upplevelsepresenter. Beställ från partnerbutiker som levererar till ditt hemland.',
  },
}
