// ---------- types ----------

export interface ChromeCopy {
  nav: {
    categories: string
    products: string
    guides: string
    promises: string
  }
  hero: {
    kicker: string
    title: string
    titleAccent: string
    lead: string
    ctaExplore: string
    ctaGuide: string
  }
  categories: {
    h2: string
    sub: string
    items: Array<{ name: string; tag: string; description: string }>
  }
  valueProp: {
    h2: string
    sub: string
    steps: Array<{ title: string; description: string }>
  }
  productGrid: {
    h2: string
    sub: string
    priceTbd: string
    notifyMe: string
    notifyAria: (name: string) => string
    products: Array<{ name: string; category: 'merch' | 'artisan' }>
    catMerch: string
    catArtisan: string
  }
  giftGuide: {
    h2: string
    sub: string
    suggested: string
    occasions: Array<{ name: string; description: string; suggestions: string[] }>
  }
  guides: {
    kicker: string
    h2: string
    sub: string
    guides: Array<{ title: string; subtitle: string; description: string; topics: string[]; pages: number }>
    pagesPdf: (pages: number) => string
    cta: string
  }
  newsletter: {
    kicker: string
    h2: string
    body: string
    placeholder: string
    submit: string
    submitting: string
    successHeading: string
    successFootnote: string
    btnSecret: string
    btnSeven: string
    errorMsg: string
    spamNote: string
  }
  shipping: {
    h2: string
    sub: string
    items: Array<{ title: string; description: string }>
  }
  faq: {
    kicker: string
    h2: string
    sub: string
    items: Array<{ q: string; a: string }>
  }
  related: {
    kicker: string
    h2: string
    sub: string
    items: Array<{ label: string; blurb: string; href: string }>
  }
  footer: {
    pillars: Array<{ name: string; href: string }>
    editorialNote: string
    extraLegalUnsub: string
  }
  notFound: {
    h1: string
    body: string
    back: string
  }
  unsubscribe: {
    title: string
    h1: string
    body: string
    successH1: string
    successBody: string
    submit: string
    submitting: string
    backHome: string
    errorMsg: string
  }
  legal: {
    backHome: string
  }
}

// ---------- EN ----------
