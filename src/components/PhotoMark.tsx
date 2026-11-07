import { creditFor, ownPhotoFor, CREDIT_WORDS } from '../data/photoCredits'
import { useLang } from '../i18n/useLang'

/**
 * Source line on an open-licence or stock photograph: "Photo: <author>, <licence>[, cropped]".
 *
 * Text only, never a link: most of these pictures sit inside a card that is itself a link (category cards) or under
 * a hero text, and a link in a link is invalid. The links to the file page and to the licence deed are in the page's
 * credit line (PageCredits.tsx), which CC BY / BY-SA §3(a) / §4(b) require. Keyed by the image name, so a picture
 * used on a second surface cannot lose its line. Plate: night at 80 % keeps the 9–10 px white text above 4.5:1 on
 * any photograph. `pos` puts it top-right where the card title sits bottom-left.
 */
export default function PhotoMark({ image, pos = 'bottom' }: { image: string; pos?: 'bottom' | 'top' }) {
  const lang = useLang()
  const credit = creditFor(image)
  const own = credit ? undefined : ownPhotoFor(image)
  const w = CREDIT_WORDS[lang] ?? CREDIT_WORDS.en
  const plate = `pointer-events-none absolute right-0 z-10 max-w-full bg-night/80 px-1.5 py-[2px] text-[9px] leading-tight text-white sm:text-[10px] ${
    pos === 'top' ? 'top-0 rounded-bl' : 'bottom-0 rounded-tl'
  }`
  // Oma valokuva: ei lisenssiä, mutta lukija näkee että kuva on meidän eikä kuvapankin.
  if (own) {
    return (
      <span className={plate}>
        {w.photo}: <span translate="no">LaplandVibes</span>, <span translate="no">{own.place}</span>
      </span>
    )
  }
  if (!credit) return null
  return (
    <span
      className={`pointer-events-none absolute right-0 z-10 max-w-full bg-night/80 px-1.5 py-[2px] text-[9px] leading-tight text-white sm:text-[10px] ${
        pos === 'top' ? 'top-0 rounded-bl' : 'bottom-0 rounded-tl'
      }`}
    >
      {w.photo}: <span translate="no">{credit.author}</span>, {credit.license}
      {credit.cropped ? `, ${w.cropped}` : ''}
    </span>
  )
}
