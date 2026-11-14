import SharedNewsletterPopup from '../shared/NewsletterPopup';
import { useLang } from '../i18n/useLang';
import { POPUP_THEME, POPUP_COPY } from './newsletterPopupSite';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

// Founder popup (2026-08-09). Oma väri ja teksti 12 kielellä tulevat
// `newsletterPopupSite.ts`:stä (14.11.2026): suomeksi takarajaotsikko ja -syy
// (25.8.), muilla kielillä perustajan lahjateksti verkoston otsikon alla.
// `copy` on kielikohtainen, joten `headline`/`description`-propseja ei anneta:
// ne voittaisivat kaikilla kielillä.
//
// 🔵 Muut propsit (dict, nappi "Lähden mukaan!", luottamusrivi, suostumus)
// jäävät jaetun komponentin oletuksiksi — ONE newsletter -sääntö: tämä on
// sama #LaplandVibes-kirje, ei oma lahjakirje.
export default function NewsletterPopup() {
  const lang = useLang();
  return (
    <SharedNewsletterPopup
      lang={lang as 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'}
      siteId="laplandgifts"
      brandWord="GIFTS"
      theme={POPUP_THEME}
      copy={POPUP_COPY}
      supabaseUrl={SUPABASE_URL}
      supabaseAnonKey={SUPABASE_ANON_KEY}
    />
  );
}
