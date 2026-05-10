import SharedFooter from '../../../shared/Footer'

const FOOTER_PILLARS = [
  { name: 'Categories', href: '/#categories' },
  { name: 'Featured Products', href: '/#products' },
  { name: 'Gift Guide', href: '/#gift-guide' },
  { name: 'Free Guides', href: '/#guides' },
  { name: 'LaplandStays', href: 'https://laplandstays.com' },
  { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
]

const FOOTER_EDITORIAL_NOTE =
  'Independently maintained by Lapeso Oy in Finnish Lapland · last reviewed May 2026 · we partner with selected artisans and shops directly, with full disclosure on every product page.'

const FOOTER_EXTRA_LEGAL = [
  { to: '/unsubscribe', label: 'Unsubscribe' },
]

export default function Footer() {
  return (
    <SharedFooter
      pillarLinks={FOOTER_PILLARS}
      editorialNote={FOOTER_EDITORIAL_NOTE}
      extraLegalLinks={FOOTER_EXTRA_LEGAL}
    />
  )
}
