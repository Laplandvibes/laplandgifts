import { Sparkles } from 'lucide-react'
import { useLang, type Lang } from '../i18n/useLang'

/**
 * EU AI Act art. 50 transparency marking for AI-generated imagery.
 * Applicable from 2.8.2026; the Digital Omnibus deferred the high-risk
 * deadlines but NOT art. 50.
 *
 * 🔴 Scope is narrower than "label every AI image". Art. 50(4) binds the
 * deployer only for *deep fakes* — art. 3(60): content resembling existing
 * persons, objects, places or events that would falsely appear authentic.
 *
 * On this site the editorial images split three ways:
 *   🔴 exp-* (25)  experience cards. Each one names a real, bookable tour at
 *                  a real Lapland place ("Santa Claus Village visit"), and the
 *                  art is photorealistic, so a reader would read it as a photo
 *                  OF that place. These get the per-image badge.
 *   🟢 cat-* (7), hero-* (2), guide-* (2), ad-* (1) — generic still life and
 *                  atmosphere, no identifiable real place or person. Covered
 *                  by the site-wide line only.
 *   ⛔ prod-*      partner product photography. All 118 catalogue products
 *                  carry `imageIsPartner: true`, so none of them is AI and
 *                  none may be marked — labelling a real partner photo as AI
 *                  would be a false statement about the partner's own asset.
 *
 * The machine-readable half (C2PA/watermark) is the *provider's* duty
 * (Picsart, OpenAI…), and our AVIF/WebP pipeline strips metadata anyway —
 * so the visible mark is the only mechanism that actually reaches a reader.
 */

/** Short pill label rendered over the image. */
const AI_BADGE: Record<Lang, string> = {
  en: 'AI image',
  fi: 'AI-kuva',
  de: 'KI-Bild',
  ja: 'AI画像',
  es: 'Imagen con IA',
  'pt-BR': 'Imagem com IA',
  'zh-CN': 'AI 图片',
  ko: 'AI 이미지',
  fr: 'Image IA',
  it: 'Immagine IA',
  nl: 'AI-beeld',
  sv: 'AI-bild',
}

/** Full sentence: tooltip on hover, and the accessible name of the badge. */
const AI_BADGE_TITLE: Record<Lang, string> = {
  en: 'Illustration generated with AI. It does not show a real place, person or event.',
  fi: 'Tekoälyllä tuotettu kuvituskuva. Se ei esitä todellista paikkaa, henkilöä eikä tapahtumaa.',
  de: 'Mit KI erzeugtes Illustrationsbild. Es zeigt keinen realen Ort, keine reale Person und kein reales Ereignis.',
  ja: 'AIで生成したイメージ画像です。実在の場所、人物、出来事を写したものではありません。',
  es: 'Imagen ilustrativa generada con IA. No muestra un lugar, una persona ni un acontecimiento reales.',
  'pt-BR':
    'Imagem ilustrativa gerada com IA. Não mostra um lugar, uma pessoa nem um acontecimento reais.',
  'zh-CN': '由 AI 生成的示意图片，并非真实的地点、人物或事件。',
  ko: 'AI로 생성한 이미지입니다. 실제 장소나 인물, 사건을 담은 사진이 아닙니다.',
  fr: 'Image d’illustration générée par IA. Elle ne montre ni un lieu, ni une personne, ni un événement réels.',
  it: 'Immagine illustrativa generata con IA. Non raffigura un luogo, una persona o un evento reali.',
  nl: 'Met AI gegenereerd sfeerbeeld. Het toont geen echte plaats, persoon of gebeurtenis.',
  sv: 'Illustrationsbild skapad med AI. Den visar inte en verklig plats, person eller händelse.',
}

/**
 * Site-wide line. Appended to the footer's `editorialNote` so it renders on
 * every page without touching the shared ecosystem Footer — that component
 * must stay byte-identical across the network, and a network-wide AI notice
 * is Vesa's decision, not this site's.
 */
export const AI_NOTE: Record<Lang, string> = {
  en: 'Some illustrations on this site are generated with AI and are labelled “AI image”; they do not show a real place, person or event. Product photos come from the partner shops.',
  fi: 'Osa sivuston kuvituskuvista on tuotettu tekoälyllä ja merkitty ”AI-kuva”; ne eivät esitä todellista paikkaa, henkilöä eivätkä tapahtumaa. Tuotekuvat ovat kumppanikauppojen omia.',
  de: 'Einige Illustrationen auf dieser Website wurden mit KI erzeugt und sind mit „KI-Bild“ gekennzeichnet; sie zeigen keinen realen Ort, keine reale Person und kein reales Ereignis. Die Produktfotos stammen von den Partnershops.',
  ja: '当サイトのイメージ画像の一部はAIで生成しており、「AI画像」と表示しています。実在の場所、人物、出来事を写したものではありません。商品写真はパートナー店舗のものです。',
  es: 'Algunas imágenes ilustrativas de este sitio se han generado con IA y llevan la etiqueta «Imagen con IA»; no muestran un lugar, una persona ni un acontecimiento reales. Las fotos de producto son de las tiendas asociadas.',
  'pt-BR':
    'Algumas imagens ilustrativas deste site foram geradas com IA e trazem a etiqueta “Imagem com IA”; não mostram um lugar, uma pessoa nem um acontecimento reais. As fotos dos produtos são das lojas parceiras.',
  'zh-CN':
    '本站部分示意图片由 AI 生成，并标注为「AI 图片」，并非真实的地点、人物或事件。商品照片来自合作商店。',
  ko: '이 사이트의 일부 이미지는 AI로 생성했으며 ‘AI 이미지’로 표시합니다. 실제 장소나 인물, 사건을 담은 사진이 아닙니다. 상품 사진은 파트너 상점의 것입니다.',
  fr: 'Certaines images d’illustration de ce site sont générées par IA et portent la mention « Image IA » ; elles ne montrent ni un lieu, ni une personne, ni un événement réels. Les photos de produits proviennent des boutiques partenaires.',
  it: 'Alcune immagini illustrative di questo sito sono generate con IA e riportano l’etichetta «Immagine IA»; non raffigurano un luogo, una persona o un evento reali. Le foto dei prodotti sono dei negozi partner.',
  nl: 'Sommige sfeerbeelden op deze site zijn met AI gegenereerd en dragen het label “AI-beeld”; ze tonen geen echte plaats, persoon of gebeurtenis. De productfoto’s komen van de partnerwinkels.',
  sv: 'Vissa illustrationsbilder på den här webbplatsen är skapade med AI och märkta ”AI-bild”; de visar inte en verklig plats, person eller händelse. Produktbilderna kommer från partnerbutikerna.',
}

interface Props {
  /** Override the language; defaults to the locale derived from the URL. */
  lang?: Lang
  className?: string
}

/**
 * The per-image badge. Positioned absolutely, so the caller must give the
 * image wrapper `relative`.
 */
export default function AiDisclosure({ lang: langProp, className = '' }: Props) {
  // 🔴 The default MUST come from the hook, never a hardcoded 'en'. That
  // anti-pattern shipped the affiliate disclosure in English on all 12
  // locales of laplandchristmas even though the translations existed.
  const detected = useLang()
  const lang = langProp ?? detected
  return (
    <span
      className={`pointer-events-none absolute bottom-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[10px] font-semibold leading-none text-white backdrop-blur-sm ${className}`}
      title={AI_BADGE_TITLE[lang]}
      role="note"
      aria-label={AI_BADGE_TITLE[lang]}
    >
      <Sparkles className="h-3 w-3 shrink-0" aria-hidden="true" />
      {AI_BADGE[lang]}
    </span>
  )
}
