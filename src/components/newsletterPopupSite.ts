import type { NewsletterPopupCopy, NewsletterPopupTheme } from '../shared/NewsletterPopup';

/**
 * laplandgifts.com: uutiskirjeikkunan oma väri ja teksti.
 *
 * Vesa 23.9.2026: "tekstit ja värimaailma sivustokohtaisiksi" → "kyllä, vie
 * kaikille". Giftsiin se tuli 14.11.2026. Kuva, lomake, nappi ja #LAPLAND-merkki
 * pysyvät verkoston yhteisinä.
 *
 * VÄRI, mitattu elävältä etusivulta 14.11.2026 (renderöity sivu 1280 + 390 px,
 * alatunniste, evästeikkuna ja ikkuna pois laskuista):
 * - Sivu on vaalea: kerma #FBF9F5 ja valkoiset pinnat, muste #1F2937.
 * - Ainoa kylläinen oma väri on pinkki: #DB2777 linkeissä, yläotsikoissa ja
 *   täytetyssä napissa (7 % tekstimerkeistä), sanamerkin # #EC4899.
 * - Sivuston oma tumma pinta on deep-night #0F172A ("How buying works here").
 *   Isompi tumma pinta #002F6C on Suomi-fanituotteiden osio, ja #141413,
 *   #1C409A ja #35493E ovat kumppanien (Kalevala, Suomikauppa, Keloa) värejä.
 * ⇒ Giftsin oma väri ON verkoston pinkki, kuten 23.9. mitattiin. Arvot ovat
 *   siksi samat kuin jaetun ikkunan oletus, mutta ne kirjataan tähän, jotta
 *   seuraava paletin muutos tehdään yhteen paikkaan ja mitattuna.
 * 🔴 Kortin pinta pysyy tummana: jaetun ikkunan tekstit ovat kiinteästi
 *   vaaleita, joten sivun kerma kortin pohjana olisi valkoista valkoisella.
 * Kontrastit: napin teksti #FFFFFF / #DB2777 4,60:1 (≥ 4,5), rengas #EC4899 /
 * #0F172A 5,06:1 (≥ 3), leipäteksti #F9FAFB / #0F172A 17,1:1.
 */
export const POPUP_THEME: NewsletterPopupTheme = {
  surface: '#0F172A',
  accent: '#EC4899',
  cta: '#DB2777',
  onCta: '#FFFFFF',
};

/**
 * SUOMI: oma otsikko ja syy tilata (25.8.2026, siirretty tähän sellaisenaan
 * NewsletterPopup.tsx:stä 14.11.2026).
 * Tausta: gifts tuotti 146 ihmisklikkiä 30 vuorokaudessa ja verkoston ainoat
 * kirjatut konversiot, mutta nolla sähköpostitilaajaa. Perustajaesittely kertoo
 * kuka lähettää, ei miksi jättäisit osoitteesi juuri nyt; lahjaostajalla se syy
 * on takaraja. 144/146 ostoklikkiä tuli Suomesta, ja lahjaputki (`send-sequence`,
 * `GIFTS_MESSAGES`) on vain suomeksi ja jatkaa samasta lupauksesta.
 * 🔴🔴 Vesa luki ensimmäisen version: *"aivan kamalaa suomen kieltä"* (puuttuva
 * pilkku sivulauseen edessä, puuttuva objekti). Portti
 * `scripts/check_finnish_copy.py` (lv-ops) lukee tämän lohkon nimellä
 * `GIFTS_FI_COPY`: älä nimeä vakiota uudelleen päivittämättä porttia.
 * 🔴 Lupaus "luen takarajat marraskuussa ja lähetän ne" on aikaan sidottu:
 * se pitää lunastaa kampanjalla tai teksti vaihtaa ennen joulua.
 */
const GIFTS_FI_COPY = {
  headline: 'Milloin lahja pitää tilata?',
  description:
    'Vesa tässä. Kaupoilla on omat takarajansa joulun toimituksille, eikä niitä ole vielä julkaistu. Luen ne marraskuussa kauppojen omilta sivuilta ja lähetän ne sinulle. Sitä ennen kerron, mitä täältä kannattaa ostaa ja kenelle.',
};

/**
 * MUUT 11 KIELTÄ (14.11.2026): perustajan teksti giftsin omasta aiheesta,
 * otsikko verkoston yhteinen ("Hi, Vesa here 👋"). Kirjoitettu kullekin kielelle,
 * luettu natiivilukijalla kolmessa kieliryhmässä (en+sv+de+nl, fr+it+es+pt-BR,
 * ja+ko+zh-CN). Sisältö: kuka puhuu, mistä lahjoista, mitä hän kertoo.
 * 🔴 Ei takarajalupausta muille kielille: muunkieliset gifts-tilaajat saavat
 *   verkoston matkailuputken, eivät suomenkielistä lahjaputkea (GIFTS_LANGS).
 * 🔴 Ei väitettä, että LaplandVibes myy tai lähettää: kauppa toimittaa.
 *   Toimitusmaan valitsin on sivulla, siksi "mikä kauppa toimittaa maahasi".
 * 🔴 Ei hälytyksiä, ei lähetystahtia, ei "ensimmäisenä" (9.8.2026 lupauspurku).
 * Termit sivuston omasta copysta: Puukko-Messer / Puukkoknivar / プーッコナイフ /
 * 푸코 나이프 / 普科刀; muumit Mumin de/sv (sanasto), Moomin muilla.
 */
export const POPUP_COPY: NewsletterPopupCopy = {
  fi: GIFTS_FI_COPY,
  en: {
    description: 'Founder of LaplandVibes. Puukko knives, Moomin mugs, woollen socks and salty liquorice from Finnish makers. I tell you what makes a good gift, who makes it and which shop delivers to your country.',
  },
  sv: {
    description: 'Grundare av LaplandVibes. Puukkoknivar, Muminmuggar, ullsockor och salmiak från finska tillverkare. Jag berättar vad som är en bra present, vem som tillverkar den och vilken butik som skickar den till ditt land.',
  },
  de: {
    description: 'Gründer von LaplandVibes. Puukko-Messer, Mumin-Becher, Wollsocken und Salzlakritz von finnischen Herstellern. Ich erzähle Ihnen, was sich als Geschenk lohnt, wer es herstellt und welcher Shop es in Ihr Land liefert.',
  },
  nl: {
    description: 'Oprichter van LaplandVibes. Puukko-messen, Moomin-mokken, wollen sokken en zoute drop van Finse makers. Ik vertel u wat een goed cadeau is, wie het maakt en welke winkel naar uw land levert.',
  },
  fr: {
    description: 'Fondateur de LaplandVibes. Couteaux puukko, mugs Moomin, chaussettes en laine et réglisse salée de fabricants finlandais. Je vous dis ce qui fait un bon cadeau, qui le fabrique et quelle boutique le livre dans votre pays.',
  },
  it: {
    description: 'Fondatore di LaplandVibes. Coltelli puukko, tazze Moomin, calze di lana e liquirizia salata di produttori finlandesi. Le racconto cosa vale la pena regalare, chi lo produce e quale negozio lo spedisce nel Suo paese.',
  },
  es: {
    description: 'Fundador de LaplandVibes. Cuchillos puukko, tazas de los Moomin, calcetines de lana y regaliz salado de fabricantes finlandeses. Le cuento qué vale la pena regalar, quién lo fabrica y qué tienda lo envía a su país.',
  },
  'pt-BR': {
    description: 'Fundador do LaplandVibes. Facas puukko, canecas Moomin, meias de lã e alcaçuz salgado de fabricantes finlandeses. Conto o que vale a pena dar de presente, quem fabrica e qual loja entrega no seu país.',
  },
  ja: {
    description: 'LaplandVibes創業者。プーッコナイフ、ムーミンのマグ、ウールの靴下、サルミアッキなど、フィンランドのメーカーが作る品々。贈り物に向くもの、作り手、お住まいの国へ届けてくれるショップをお伝えします。',
  },
  ko: {
    description: 'LaplandVibes 창립자. 푸코 나이프, 무민 머그, 울 양말, 살미아키까지 핀란드 제조사가 만든 제품들. 선물하기 좋은 것은 무엇인지, 누가 만드는지, 어느 쇼핑몰이 사시는 나라까지 배송해 주는지 알려드립니다.',
  },
  'zh-CN': {
    description: 'LaplandVibes创始人。普科刀、姆明马克杯、羊毛袜、咸甘草糖，都出自芬兰本土厂商。什么适合送礼、由谁制作、哪家店能寄到你所在的国家，我都会告诉你。',
  },
};
