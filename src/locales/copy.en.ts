import type { ChromeCopy } from './types'

const en: ChromeCopy = {
  nav: {
    categories: 'Categories',
    products: 'Products',
    guides: 'Guides',
    promises: 'Promises',
  },
  hero: {
    kicker: 'From the Heart of Finnish Lapland',
    badge: 'Shop opening soon',
    title: 'Give a Piece of the',
    titleAccent: 'Arctic',
    lead: "Soon you'll be able to order authentic Lapland gifts while you're on holiday and find them waiting at home before you. Handcrafted treasures, branded merch and Arctic experiences, shipped directly from Finnish Lapland. The first collection is being handpicked now.",
    ctaExplore: 'Explore Gifts',
    ctaGuide: 'Gift Guide',
  },
  categories: {
    h2: 'Three Ways to Gift Lapland',
    sub: "Whether it's a branded mug, a hand-carved kuksa, or a northern lights safari, we've got the perfect Arctic gift",
    items: [
      {
        name: '#LaplandVibes Merch',
        tag: 'Own Brand',
        description: 'Mugs, t-shirts, hoodies, and canvas prints with our signature Arctic designs. Print-on-demand and shipped worldwide once the shop opens.',
      },
      {
        name: 'Artisan Crafts',
        tag: 'Handmade',
        description: 'Handforged puukko knives, carved kuksa cups, Sámi duodji jewelry, and wild berry preserves, sourced directly from Lappish craftspeople.',
      },
      {
        name: 'Experiences & Gift Cards',
        tag: 'Gift Ideas',
        description: 'Northern lights safaris, reindeer sleigh rides, cozy cabin nights, and curated Lapland Trip Boxes, gift an unforgettable Arctic moment.',
      },
    ],
  },
  valueProp: {
    h2: 'Order on Holiday. Find Them at Home.',
    sub: 'No more stuffing fragile souvenirs into your suitcase. This is how LaplandGifts will work once the shop opens: shop during your trip and we handle the rest.',
    steps: [
      { title: 'Browse on Holiday', description: 'Found a puukko knife you love? A kuksa for mum? Order while you explore, no need to carry anything.' },
      { title: 'We Ship from Lapland', description: 'Your gifts are packed with care and shipped directly from Finnish artisans and our EU print partners.' },
      { title: 'Waiting at Home', description: 'Land back home and your Lapland treasures are already at your doorstep. No luggage stress, no broken souvenirs.' },
    ],
  },
  productGrid: {
    h2: 'Coming Soon',
    sub: 'Our first collection is being handpicked from the best artisans in Finnish Lapland. Sign up for the newsletter to be first in line.',
    priceTbd: 'Price TBD',
    notifyMe: 'Notify Me',
    notifyAria: (name) => `Notify me when ${name} is available`,
    products: [
      { name: 'Aurora Mug', category: 'merch' },
      { name: 'Reindeer Mug', category: 'merch' },
      { name: 'Aurora T-Shirt', category: 'merch' },
      { name: 'Arctic Hoodie', category: 'merch' },
      { name: 'Lapland Poster', category: 'merch' },
      { name: 'Wool Beanie', category: 'merch' },
      { name: 'Puukko Knife', category: 'artisan' },
      { name: 'Kuksa Cup', category: 'artisan' },
      { name: 'Sámi Bracelet', category: 'artisan' },
      { name: 'Berry Jam Set', category: 'artisan' },
      { name: 'Antler Candle Holder', category: 'artisan' },
      { name: 'Wool Blanket', category: 'artisan' },
    ],
    catMerch: 'merch',
    catArtisan: 'artisan',
  },
  giftGuide: {
    h2: 'Gift Guide',
    sub: 'Not sure what to choose? Let us help you find the perfect gift for every occasion',
    suggested: 'Suggested gifts',
    occasions: [
      {
        name: 'Christmas',
        description: "Nothing says Christmas like a gift from Santa's homeland. Choose from our curated holiday selections.",
        suggestions: ['Gift Basket "Lapland Luxury"', 'Lapland Wool Blanket', 'Cloudberry Jam Set', 'Felt Slippers'],
      },
      {
        name: 'Wedding',
        description: 'Celebrate love with timeless handcrafted pieces that the couple will treasure for years.',
        suggestions: ['Aurora Jewelry Pendant', 'Wooden Kuksa Cup (pair)', 'Reindeer Leather Wallet', 'Birch Bark Basket'],
      },
      {
        name: 'Birthday',
        description: 'Surprise someone special with a unique gift they will never find in an ordinary store.',
        suggestions: ['Sámi Duodji Bracelet', 'Puukko Knife', 'Gift Basket "Arctic Taste"', 'Reindeer Antler Candle Holder'],
      },
      {
        name: 'Corporate',
        description: 'Impress clients and partners with premium Arctic gifts that stand out from the usual corporate fare.',
        suggestions: ['Puukko Knife (engraved)', 'Gift Basket "Lapland Luxury"', 'Wooden Kuksa Cup', 'Aurora Jewelry Pendant'],
      },
    ],
  },
  guides: {
    kicker: 'Free Guides',
    h2: 'Arctic Guides',
    sub: 'Everything we know about Lapland, packed into two free guides. Leave your email below and download instantly.',
    guides: [
      {
        title: 'The Secret Craft',
        subtitle: "An Insider's Guide to Authentic Lapland Craftsmanship",
        description: 'Learn to spot real handmade puukko knives from factory fakes, understand the cultural meaning of Sámi duodji, discover wild berry seasons, and master the 5 golden rules for buying genuine Lapland crafts.',
        topics: ['Puukko knives', 'Kuksa cups', 'Sámi duodji', 'Wild berries', "Buyer's rules"],
        pages: 9,
      },
      {
        title: '7 Days of Lapland Magic',
        subtitle: "The Only Itinerary You'll Ever Need",
        description: 'A complete day-by-day route from Rovaniemi to Inari and back. Includes northern lights tips, husky safaris, icebreaker cruises, realistic budget planner, and a full Arctic packing list.',
        topics: ['7-day itinerary', 'Budget planner', 'Packing list', 'Season guide', 'Local tips'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} pages · PDF`,
    cta: 'Enter your email to get both guides free',
  },
  newsletter: {
    kicker: 'Get Both Guides Free',
    h2: 'Enter Your Email to Download',
    body: 'Get instant access to both Arctic guides plus early notifications when new products and artisan drops land in the shop.',
    placeholder: 'your@email.com',
    submit: 'Get Both Guides',
    submitting: 'Sending…',
    successHeading: 'Your guides are ready!',
    successFootnote: 'Welcome to the Arctic family. Check your inbox too!',
    btnSecret: 'The Secret Craft',
    btnSeven: '7 Days of Magic',
    errorMsg: 'Something went wrong. Please try again.',
    spamNote: 'No spam, ever. Unsubscribe anytime.',
  },
  shipping: {
    h2: 'Our Promises',
    sub: 'What you can expect when the LaplandGifts shop opens',
    items: [
      { title: 'Direct from Lapland', description: 'Every product ships from Finland or our EU-based print partners. No middlemen, no mystery warehouses.' },
      { title: 'Authentic Guarantee', description: 'Artisan products come with a certificate of origin. Sámi crafts sourced only through authorized sellers.' },
      { title: 'Gift-Ready Packaging', description: 'Each order is wrapped with care in recyclable packaging inspired by Arctic nature. Add a personal message at checkout.' },
      { title: 'Supporting Artisans', description: 'A portion of every artisan product sale goes directly back to the craftsperson and their community.' },
    ],
  },
  faq: {
    kicker: 'Good to Know',
    h2: 'Lapland Gifts, Your Questions',
    sub: 'What to bring home, how to shop ethically, and what actually ships across borders.',
    items: [
      {
        q: 'What are authentic souvenirs to buy in Lapland?',
        a: 'The most genuine Lapland souvenirs are made by local hands: a puukko (a traditional Finnish belt knife), a kuksa (a cup carved from a birch burl), reindeer-leather goods, wool textiles, and wild-foraged foods like cloudberry jam, lingonberry preserves and birch-sap products. Sámi duodji handicrafts, silver jewelry, antler work and woven bands, are the most prized. Look for the maker’s name or a certificate of origin rather than mass-produced items sold in airport gift shops.',
      },
      {
        q: 'Can I buy Sámi crafts ethically, and what is the Sámi Duodji mark?',
        a: 'Yes. Duodji is the Sámi word for traditional handicraft, and the round “Sámi Duodji” trademark is a label of authenticity granted to crafts made by Sámi makers using traditional methods and materials. Buying items carrying that mark, or purchasing directly from a named Sámi artisan or an authorized seller, ensures the money supports the community and the work is genuine, not a factory imitation of Sámi designs. We source Sámi crafts only through authorized sellers.',
      },
      {
        q: 'Do Lapland shops ship gifts internationally?',
        a: 'Many do. Our own #LaplandVibes merchandise (shop opening soon) will be print-on-demand, shipping worldwide from EU production partners. Artisan pieces ship from Finland; delivery time and cost depend on your country and the courier. The practical advantage of ordering online during your trip is that you don’t have to fit fragile items into your luggage, they travel separately and are waiting when you get home.',
      },
      {
        q: 'What should I bring home from Rovaniemi?',
        a: 'Rovaniemi sits on the Arctic Circle and is the gateway to Finnish Lapland, so it’s a strong place to shop. Popular choices are a kuksa cup, a puukko knife, reindeer-leather accessories, wool socks and beanies, Moomin and Santa-themed items, and Arctic foods such as cloudberry jam, salmiakki (salty liquorice) and birch-sap syrup. For something with provenance, choose a piece signed by its maker over a generic “Lapland” souvenir.',
      },
      {
        q: 'Are reindeer and antler products legal to bring back?',
        a: 'Reindeer (Rangifer tarandus) is not an endangered or CITES-listed species, so naturally shed or by-product antler, leather and wool items are generally allowed as personal souvenirs within the EU and to most countries. Rules vary by destination, especially for untreated animal materials, so check your home country’s customs and import rules before you travel. When in doubt, treated leather, wool and wooden items are the safest to carry.',
      },
      {
        q: 'How far ahead should I order Christmas gifts from Lapland?',
        a: 'For December delivery, order well before the mid-December courier cut-offs, international shipping slows down in the weeks before Christmas, and handcrafted items are made in small batches. If you’re visiting Lapland in autumn or early winter, ordering during your trip is the easiest way to have gifts home in good time. Join the newsletter and we’ll flag seasonal cut-off dates.',
      },
    ],
  },
  related: {
    kicker: 'Where to Next',
    h2: 'Plan the Rest of Your Lapland Trip',
    sub: 'Part of the LaplandVibes network, keep exploring with our sister sites.',
    items: [
      { label: 'Lapland Christmas & Santa', blurb: 'Santa Claus Village, Christmas breaks and festive season tips.', href: 'https://laplandchristmas.com/santa-village/' },
      { label: 'Lapland-made products', blurb: 'A wider shop of Lapland-made goods and Arctic design.', href: 'https://laplandstore.fi' },
      { label: 'Plan your Lapland trip', blurb: 'Destinations, seasons and practical advice for Finnish Lapland.', href: 'https://laplandvisit.com/itineraries/' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Categories', href: '/#categories' },
      { name: 'Featured Products', href: '/#products' },
      { name: 'Gift Guide', href: '/#gift-guide' },
      { name: 'Free Guides', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Independently maintained by Lapeso Oy in Finnish Lapland · last reviewed May 2026 · we partner with selected artisans and shops directly, with full disclosure on every product page.',
    extraLegalUnsub: 'Unsubscribe',
  },
  notFound: {
    h1: 'Page Not Found',
    body: "This page doesn't exist. Maybe the northern lights took it somewhere else.",
    back: 'Back to Home',
  },
  unsubscribe: {
    title: 'Unsubscribe | LaplandGifts',
    h1: 'Unsubscribe',
    body: 'Enter your email address to remove yourself from our newsletter list.',
    successH1: "You've been unsubscribed",
    successBody: "You won't receive any more emails from us. We're sorry to see you go.",
    submit: 'Unsubscribe',
    submitting: 'Unsubscribing…',
    backHome: 'Back to home',
    errorMsg: 'Something went wrong. Please try again or email info@laplandvibes.com',
  },
  legal: {
    backHome: 'Back to Home',
  },
}

// ---------- FI ----------

export default en
