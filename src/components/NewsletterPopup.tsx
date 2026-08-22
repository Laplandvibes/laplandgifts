import SharedNewsletterPopup from '../shared/NewsletterPopup';
import { useLang } from '../i18n/useLang';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

// Founder popup (2026-08-09): first popup on this site — the shared founder
// default (Vesa + spiral avatar + social links) with no copy overrides.
export default function NewsletterPopup() {
  const lang = useLang();
  return (
    <SharedNewsletterPopup
      lang={lang as 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'}
      siteId="laplandgifts"
      brandWord="GIFTS"
      supabaseUrl={SUPABASE_URL}
      supabaseAnonKey={SUPABASE_ANON_KEY}
    />
  );
}
