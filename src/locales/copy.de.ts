import type { ChromeCopy } from './types'

const de: ChromeCopy = {
  nav: {
    categories: 'Kategorien',
    products: 'Produkte',
    guides: 'Ratgeber',
    promises: 'Versprechen',
  },
  hero: {
    kicker: 'Aus dem Herzen Finnisch-Lapplands',
    title: 'Verschenken Sie ein Stück',
    titleAccent: 'Arktis',
    lead: 'Bestellen Sie authentische Lappland-Geschenke schon im Urlaub, sie warten zu Hause, bevor Sie ankommen. Handgefertigte Schätze, eigene Marke und arktische Erlebnisse, direkt aus Finnisch-Lappland verschickt.',
    ctaExplore: 'Geschenke entdecken',
    ctaGuide: 'Geschenke-Ratgeber',
  },
  categories: {
    h2: 'Drei Wege, Lappland zu verschenken',
    sub: 'Ob bedruckte Tasse, handgeschnitzte Kuksa oder Nordlicht-Safari, bei uns finden Sie das perfekte arktische Geschenk',
    items: [
      {
        name: '#LaplandVibes Merch',
        tag: 'Eigene Marke',
        description: 'Tassen, T-Shirts, Hoodies und Leinwanddrucke mit unseren typischen arktischen Motiven. Print-on-Demand, kein Lager, weltweiter Versand.',
      },
      {
        name: 'Handwerkskunst',
        tag: 'Handgemacht',
        description: 'Handgeschmiedete Puukko-Messer, geschnitzte Kuksa-Becher, Sámi-Duodji-Schmuck und wilde Beerenkonfitüren, direkt von lappländischen Handwerkerinnen und Handwerkern.',
      },
      {
        name: 'Erlebnisse & Geschenkkarten',
        tag: 'Geschenkideen',
        description: 'Nordlicht-Safaris, Rentierschlittenfahrten, gemütliche Hüttennächte und kuratierte Lapland Trip Boxes, verschenken Sie einen echten arktischen Moment.',
      },
    ],
  },
  valueProp: {
    h2: 'Im Urlaub bestellen. Zu Hause vorfinden.',
    sub: 'Schluss mit zerbrechlichen Souvenirs im Koffer. Sie shoppen während der Reise, wir kümmern uns um den Rest.',
    steps: [
      { title: 'Im Urlaub stöbern', description: 'Ein Puukko-Messer entdeckt? Eine Kuksa für die Mutter? Bestellen Sie unterwegs, Sie müssen nichts tragen.' },
      { title: 'Wir versenden aus Lappland', description: 'Ihre Geschenke werden sorgfältig verpackt und direkt von finnischen Handwerkerinnen und unseren EU-Druckpartnern versendet.' },
      { title: 'Zu Hause schon angekommen', description: 'Sie kommen heim und Ihre lappländischen Schätze stehen schon vor der Tür. Kein Gepäckstress, keine zerbrochenen Souvenirs.' },
    ],
  },
  productGrid: {
    h2: 'Demnächst verfügbar',
    sub: 'Unsere erste Kollektion wird gerade von den besten Handwerkerinnen und Handwerkern Finnisch-Lapplands ausgewählt. Tragen Sie sich in den Newsletter ein und seien Sie als Erste informiert.',
    priceTbd: 'Preis folgt',
    notifyMe: 'Benachrichtigen',
    notifyAria: (name) => `Benachrichtigen, sobald ${name} verfügbar ist`,
    products: [
      { name: 'Polarlicht-Tasse', category: 'merch' },
      { name: 'Rentier-Tasse', category: 'merch' },
      { name: 'Polarlicht-T-Shirt', category: 'merch' },
      { name: 'Arktis-Hoodie', category: 'merch' },
      { name: 'Lappland-Poster', category: 'merch' },
      { name: 'Wollmütze', category: 'merch' },
      { name: 'Puukko-Messer', category: 'artisan' },
      { name: 'Kuksa-Trinkgefäß', category: 'artisan' },
      { name: 'Sámi-Armband', category: 'artisan' },
      { name: 'Beerenmarmeladen-Set', category: 'artisan' },
      { name: 'Geweihkerzenhalter', category: 'artisan' },
      { name: 'Wolldecke', category: 'artisan' },
    ],
    catMerch: 'Merch',
    catArtisan: 'Handwerk',
  },
  giftGuide: {
    h2: 'Geschenke-Ratgeber',
    sub: 'Unentschlossen? Wir helfen Ihnen, das perfekte Geschenk für jeden Anlass zu finden',
    suggested: 'Empfohlene Geschenke',
    occasions: [
      {
        name: 'Weihnachten',
        description: 'Nichts sagt mehr Weihnachten als ein Geschenk aus der Heimat des Weihnachtsmanns. Wählen Sie aus unseren kuratierten Weihnachtskollektionen.',
        suggestions: ['Geschenkkorb „Lapland Luxury"', 'Lappland-Wolldecke', 'Moltebeerenmarmeladen-Set', 'Filzpantoffeln'],
      },
      {
        name: 'Hochzeit',
        description: 'Feiern Sie die Liebe mit zeitlosen handgefertigten Stücken, die das Paar über Jahre in Ehren halten wird.',
        suggestions: ['Polarlicht-Schmuckanhänger', 'Holz-Kuksa-Becher (Paar)', 'Rentierleder-Geldbörse', 'Birkenrinden-Korb'],
      },
      {
        name: 'Geburtstag',
        description: 'Überraschen Sie jemand Besonderen mit einem einzigartigen Geschenk, das in keinem gewöhnlichen Laden zu finden ist.',
        suggestions: ['Sámi-Duodji-Armband', 'Puukko-Messer', 'Geschenkkorb „Arctic Taste"', 'Rentierhorn-Kerzenhalter'],
      },
      {
        name: 'Firmenkunden',
        description: 'Beeindrucken Sie Kunden und Partner mit hochwertigen arktischen Geschenken, die sich vom üblichen Firmenangebot abheben.',
        suggestions: ['Puukko-Messer (graviert)', 'Geschenkkorb „Lapland Luxury"', 'Holz-Kuksa-Becher', 'Polarlicht-Schmuckanhänger'],
      },
    ],
  },
  guides: {
    kicker: 'Kostenlose Ratgeber',
    h2: 'Arktis-Ratgeber',
    sub: 'Unser gesamtes Wissen über Lappland, gebündelt in zwei kostenlosen Ratgebern. E-Mail eintragen und sofort herunterladen.',
    guides: [
      {
        title: 'Das geheime Handwerk',
        subtitle: 'Ein Insider-Leitfaden zu echtem lappländischem Handwerk',
        description: 'Lernen Sie, echte handgefertigte Puukko-Messer von Fabrikfälschungen zu unterscheiden, verstehen Sie die kulturelle Bedeutung des Sámi-Duodji, entdecken Sie die Saisonen wilder Beeren und beherrschen Sie die fünf goldenen Regeln für den Kauf echten lappländischen Handwerks.',
        topics: ['Puukko-Messer', 'Kuksa-Becher', 'Sámi-Duodji', 'Wilde Beeren', 'Käuferregeln'],
        pages: 9,
      },
      {
        title: '7 Tage Lappland-Magie',
        subtitle: 'Die einzige Reiseroute, die Sie je brauchen werden',
        description: 'Eine vollständige Tag-für-Tag-Route von Rovaniemi nach Inari und zurück. Mit Nordlicht-Tipps, Husky-Safaris, Eisbrecher-Touren, realistischem Budgetplaner und kompletter arktischer Packliste.',
        topics: ['7-Tage-Route', 'Budgetplaner', 'Packliste', 'Saison-Guide', 'Lokale Tipps'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} Seiten · PDF`,
    cta: 'E-Mail eintragen und beide Ratgeber kostenlos erhalten',
  },
  newsletter: {
    kicker: 'Beide Ratgeber kostenlos',
    h2: 'E-Mail eintragen und herunterladen',
    body: 'Erhalten Sie sofortigen Zugang zu beiden Arktis-Ratgebern sowie vorab Benachrichtigungen, sobald neue Produkte und Handwerker-Drops im Shop landen.',
    placeholder: 'ihre@email.de',
    submit: 'Beide Ratgeber holen',
    submitting: 'Senden…',
    successHeading: 'Ihre Ratgeber sind bereit!',
    successFootnote: 'Willkommen in der Arktis-Familie. Schauen Sie auch in Ihr Postfach!',
    btnSecret: 'Das geheime Handwerk',
    btnSeven: '7 Tage Magie',
    errorMsg: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    spamNote: 'Kein Spam, niemals. Jederzeit abbestellbar.',
  },
  shipping: {
    h2: 'Unsere Versprechen',
    sub: 'Womit Sie rechnen können, wenn Sie bei LaplandGifts einkaufen',
    items: [
      { title: 'Direkt aus Lappland', description: 'Jedes Produkt wird aus Finnland oder von unseren EU-Druckpartnern verschickt. Keine Zwischenhändler, keine mysteriösen Lager.' },
      { title: 'Echtheitsgarantie', description: 'Handwerksprodukte werden mit Herkunftszertifikat geliefert. Sámi-Handwerk ausschließlich von autorisierten Anbietern.' },
      { title: 'Geschenkfertige Verpackung', description: 'Jede Bestellung wird sorgfältig in recycelbare Verpackung verpackt, inspiriert von der arktischen Natur. Eine persönliche Botschaft können Sie an der Kasse hinzufügen.' },
      { title: 'Handwerker unterstützen', description: 'Ein Teil jedes verkauften Handwerksprodukts geht direkt an die Kunsthandwerkerin oder den Kunsthandwerker und deren Gemeinschaft zurück.' },
    ],
  },
  faq: {
    kicker: 'Gut zu wissen',
    h2: 'Lappland-Geschenke, Ihre Fragen',
    sub: 'Was Sie mit nach Hause nehmen, wie Sie fair einkaufen und was wirklich über Grenzen verschickt wird.',
    items: [
      {
        q: 'Welche authentischen Souvenirs kann man in Lappland kaufen?',
        a: 'Die echtesten Lappland-Souvenirs stammen aus lokaler Hand: ein Puukko (ein traditionelles finnisches Gürtelmesser), eine Kuksa (ein aus einem Birkenmaserknoll geschnitzter Becher), Waren aus Rentierleder, Wolltextilien sowie Wildsammelprodukte wie Moltebeerenmarmelade, Preiselbeerkonfitüre und Birkensaftprodukte. Sámi-Duodji-Handwerk, Silberschmuck, Geweiharbeiten und gewebte Bänder, gilt als das Wertvollste. Achten Sie auf den Namen des Herstellers oder ein Herkunftszertifikat statt auf Massenware aus Flughafenläden.',
      },
      {
        q: 'Kann ich Sámi-Handwerk fair kaufen, und was ist das Sámi-Duodji-Zeichen?',
        a: 'Ja. Duodji ist das samische Wort für traditionelles Handwerk, und das runde „Sámi Duodji“-Warenzeichen ist ein Echtheitssiegel: Es wird für Arbeiten vergeben, die von Sámi-Handwerkern mit traditionellen Methoden und Materialien gefertigt werden. Wenn Sie ein Stück mit diesem Zeichen wählen, oder direkt bei einem namentlich genannten Sámi-Kunsthandwerker bzw. einem autorisierten Händler kaufen, , kommt das Geld der Gemeinschaft zugute und die Arbeit ist echt, keine fabrikmäßige Nachahmung samischer Muster. Wir beziehen Sámi-Handwerk ausschließlich über autorisierte Anbieter.',
      },
      {
        q: 'Versenden Geschäfte in Lappland Geschenke ins Ausland?',
        a: 'Viele tun das. Unsere eigene #LaplandVibes-Kollektion ist Print-on-Demand und wird weltweit von EU-Produktionspartnern verschickt. Handwerksstücke werden aus Finnland versendet; Lieferzeit und -kosten hängen von Ihrem Land und dem Zusteller ab. Der praktische Vorteil einer Online-Bestellung während der Reise: Sie müssen zerbrechliche Stücke nicht in den Koffer packen, sie reisen separat und warten zu Hause auf Sie.',
      },
      {
        q: 'Was sollte man aus Rovaniemi mitbringen?',
        a: 'Rovaniemi liegt am Polarkreis und ist das Tor zum finnischen Lappland, also ein guter Ort zum Einkaufen. Beliebt sind eine Kuksa, ein Puukko-Messer, Accessoires aus Rentierleder, Wollsocken und -mützen, Mumin- und Weihnachtsmann-Artikel sowie arktische Lebensmittel wie Moltebeerenmarmelade, Salmiakki (Salzlakritz) und Birkensaftsirup. Für etwas mit Herkunft wählen Sie ein vom Hersteller signiertes Stück statt eines generischen „Lappland“-Souvenirs.',
      },
      {
        q: 'Dürfen Rentier- und Geweihprodukte eingeführt werden?',
        a: 'Das Rentier (Rangifer tarandus) ist weder gefährdet noch im CITES-Abkommen gelistet, daher sind Artikel aus natürlich abgeworfenem Geweih oder aus Nebenprodukten, Geweih, Leder und Wolle, als persönliche Souvenirs innerhalb der EU und in die meisten Länder in der Regel erlaubt. Die Regeln unterscheiden sich je nach Zielland, besonders bei unbehandelten tierischen Materialien; prüfen Sie daher vor der Reise die Zoll- und Einfuhrbestimmungen Ihres Heimatlandes. Im Zweifel sind behandeltes Leder, Wolle und Holzwaren am sichersten mitzuführen.',
      },
      {
        q: 'Wie weit im Voraus sollte man Weihnachtsgeschenke aus Lappland bestellen?',
        a: 'Für eine Lieferung im Dezember bestellen Sie deutlich vor den Annahmeschluss-Terminen der Zusteller Mitte Dezember, der internationale Versand verlangsamt sich in den Wochen vor Weihnachten, und handgefertigte Stücke werden in kleinen Mengen produziert. Wenn Sie Lappland im Herbst oder Frühwinter besuchen, ist eine Bestellung während der Reise der einfachste Weg, die Geschenke rechtzeitig nach Hause zu bekommen. Abonnieren Sie den Newsletter, dann nennen wir Ihnen die saisonalen Stichtage.',
      },
    ],
  },
  related: {
    kicker: 'Wohin als Nächstes',
    h2: 'Planen Sie den Rest Ihrer Lappland-Reise',
    sub: 'Teil des LaplandVibes-Netzwerks, erkunden Sie weiter mit unseren Schwesterseiten.',
    items: [
      { label: 'Weihnachten in Lappland & Weihnachtsmann', blurb: 'Weihnachtsmanndorf, Weihnachtsreisen und Tipps für die Festtage.', href: 'https://laplandchristmas.com' },
      { label: 'In Lappland gefertigte Produkte', blurb: 'Ein größeres Sortiment lappländischer Waren und arktischen Designs.', href: 'https://laplandstore.fi' },
      { label: 'Planen Sie Ihre Lappland-Reise', blurb: 'Reiseziele, Jahreszeiten und praktische Tipps für Finnisch-Lappland.', href: 'https://laplandvisit.com' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Kategorien', href: '/#categories' },
      { name: 'Ausgewählte Produkte', href: '/#products' },
      { name: 'Geschenke-Ratgeber', href: '/#gift-guide' },
      { name: 'Kostenlose Ratgeber', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Unabhängig betreut von Lapeso Oy in Finnisch-Lappland · zuletzt überprüft Mai 2026 · wir kooperieren direkt mit ausgewählten Handwerkern und Geschäften und legen das auf jeder Produktseite offen.',
    extraLegalUnsub: 'Newsletter abbestellen',
  },
  notFound: {
    h1: 'Seite nicht gefunden',
    body: 'Diese Seite gibt es nicht. Vielleicht haben die Nordlichter sie woanders hingebracht.',
    back: 'Zurück zur Startseite',
  },
  unsubscribe: {
    title: 'Newsletter abbestellen | LaplandGifts',
    h1: 'Newsletter abbestellen',
    body: 'Geben Sie Ihre E-Mail-Adresse ein, um sich aus unserem Newsletter auszutragen.',
    successH1: 'Sie haben sich abgemeldet',
    successBody: 'Sie erhalten keine weiteren E-Mails von uns. Schade, dass Sie gehen.',
    submit: 'Abbestellen',
    submitting: 'Abbestellen…',
    backHome: 'Zur Startseite',
    errorMsg: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie an info@laplandvibes.com',
  },
  legal: {
    backHome: 'Zur Startseite',
  },
}

// ---------- JA ----------

export default de
