import SharedNewsletterPopup from '../shared/NewsletterPopup';
import { useLang } from '../i18n/useLang';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

// Founder popup (2026-08-09): first popup on this site — the shared founder
// default (Vesa + spiral avatar + social links) with no copy overrides.
//
// 🔴 2026-08-25: suomenkielinen kävijä saa oman syyn tilata. Mitattu tausta:
// gifts tuotti 146 ihmisklikkiä 30 vuorokaudessa (D1, botit suodatettuna) ja
// verkoston ainoat kirjatut konversiot — ja **nolla sähköpostitilaajaa**.
// Perustajaesittely kertoo kuka lähettää; se ei kerro miksi jättäisit
// osoitteesi juuri nyt. Lahjaostajalla se syy on takaraja.
//
// Miksi vain `fi`: giftsin 146 ostoklikistä **144 tuli Suomesta** (FR 1,
// DE 1). Yksi kieli kattaa 98,6 % mitatusta ostoaikomuksesta. Muut kielet
// pitävät perustajaoletuksen, koska `headline`/`description` EIVÄT ole
// kielikohtaisia propseja: jos ne annetaan, ne näkyvät kaikilla kielillä
// (ks. jaetun komponentin `lang`-propsin dokumentaatio). Suomi ensin,
// käännökset vasta jos ulkomainen liikenne kasvaa.
//
// 🔴 Lupaus on tarkoituksella se mitä pystymme pitämään: takarajoja EI ole
// vielä julkaistu, ja copy sanoo sen ääneen. Ne luetaan marraskuussa
// kauppojen omilta sivuilta ja lähetetään kampanjana. Vrt. lahjaputki
// `send-sequence`issa (`GIFTS_MESSAGES`), joka jatkaa samasta lupauksesta.
//
// 🔵 Muut propsit (dict, nappi "Lähden mukaan!", luottamusrivi, suostumus)
// jäävät jaetun komponentin oletuksiksi — ONE newsletter -sääntö: tämä on
// sama #LaplandVibes-kirje, ei oma lahjakirje.
//
// 🔴🔴 Teksti kirjoitettiin uusiksi 25.8.2026, kun Vesa luki ensimmäisen
// version: *"aivan kamalaa suomen kieltä"*. Viat olivat samat, jotka
// `finnish_email_voice_rule.md` luettelee (ja jotka Vesa oli osoittanut jo
// 10.8. sanatarkasti samalla lauseella) — puuttuva pilkku sivulauseen edessä
// (*"kerron mitä"* → *"kerron, mitä"*) ja puuttuva objekti (*"lähetän
// sinulle"* → *"lähetän ne sinulle"*). Lisäksi loppu lupasi kertoa, "mikä
// kauppa toimittaa minne": se on ulkomaille tilaavan huoli, ja tämä teksti
// näytetään vain suomeksi. Portti: `scripts/check_finnish_copy.py`.
const GIFTS_FI_COPY = {
  headline: 'Milloin lahja pitää tilata?',
  description:
    'Vesa tässä. Kaupoilla on omat takarajansa joulun toimituksille, eikä niitä ole vielä julkaistu. Luen ne marraskuussa kauppojen omilta sivuilta ja lähetän ne sinulle. Sitä ennen kerron, mitä täältä kannattaa ostaa ja kenelle.',
};

export default function NewsletterPopup() {
  const lang = useLang();
  const giftsCopy = lang === 'fi' ? GIFTS_FI_COPY : null;
  return (
    <SharedNewsletterPopup
      lang={lang as 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'}
      siteId="laplandgifts"
      brandWord="GIFTS"
      headline={giftsCopy?.headline}
      description={giftsCopy?.description}
      supabaseUrl={SUPABASE_URL}
      supabaseAnonKey={SUPABASE_ANON_KEY}
    />
  );
}
