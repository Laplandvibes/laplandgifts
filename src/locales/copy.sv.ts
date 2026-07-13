import type { ChromeCopy } from './types'

const sv: ChromeCopy = {
  nav: {
    categories: 'Kategorier',
    products: 'Produkter',
    guides: 'Guider',
    promises: 'Löften',
  },
  hero: {
    kicker: 'Från hjärtat av finska Lappland',
    badge: 'Butiken öppnar snart',
    title: 'Ge en bit av',
    titleAccent: 'Arktis',
    lead: 'Snart kan du beställa äkta Lapplandspresenter medan du är på semester och hitta dem hemma innan du själv är tillbaka. Handgjorda skatter, egen merch och arktiska upplevelser, skickade direkt från finska Lappland. Den första kollektionen handplockas just nu.',
    ctaExplore: 'Utforska presenter',
    ctaGuide: 'Presentguide',
  },
  categories: {
    h2: 'Tre sätt att ge Lappland i present',
    sub: 'Oavsett om det är en mugg med logga, en handsnidad kuksa eller en norrskenssafari har vi den perfekta arktiska presenten',
    items: [
      {
        name: '#LaplandVibes-merch',
        tag: 'Eget märke',
        description: 'Muggar, t-shirtar, hoodies och canvastavlor med våra typiska arktiska motiv. Print-on-demand och frakt över hela världen så snart butiken öppnar.',
      },
      {
        name: 'Hantverk',
        tag: 'Handgjort',
        description: 'Handsmidda puukkoknivar, snidade kuksakoppar, Sámi duodji-smycken och sylt på vilda bär, direkt från lappländska hantverkare.',
      },
      {
        name: 'Upplevelser och presentkort',
        tag: 'Presentidéer',
        description: 'Norrskenssafarier, renslädesturer, mysiga stugnätter och handplockade Lapland Trip Boxes, ge bort ett oförglömligt arktiskt ögonblick.',
      },
    ],
  },
  valueProp: {
    h2: 'Beställ på semestern. Hitta dem hemma.',
    sub: 'Inget mer tryckande av ömtåliga souvenirer i resväskan. Så här fungerar LaplandGifts när butiken öppnar: handla under resan, så sköter vi resten.',
    steps: [
      { title: 'Botanisera på semestern', description: 'Hittade du en puukkokniv du gillar? En kuksa till mamma? Beställ medan du utforskar, du behöver inte bära på något.' },
      { title: 'Vi skickar från Lappland', description: 'Dina presenter packas omsorgsfullt och skickas direkt från finska hantverkare och våra tryckpartner i EU.' },
      { title: 'Väntar hemma', description: 'Du landar hemma och dina Lapplandsskatter står redan vid dörren. Ingen bagagestress, inga trasiga souvenirer.' },
    ],
  },
  productGrid: {
    h2: 'Kommer snart',
    sub: 'Vår första kollektion handplockas från de bästa hantverkarna i finska Lappland. Gå med i nyhetsbrevet för att vara först på plats.',
    priceTbd: 'Pris kommer',
    notifyMe: 'Meddela mig',
    notifyAria: (name) => `Meddela mig när ${name} finns tillgänglig`,
    products: [
      { name: 'Norrskensmugg', category: 'merch' },
      { name: 'Renmugg', category: 'merch' },
      { name: 'Norrskens-t-shirt', category: 'merch' },
      { name: 'Arktisk hoodie', category: 'merch' },
      { name: 'Lapplandsposter', category: 'merch' },
      { name: 'Ullmössa', category: 'merch' },
      { name: 'Puukkokniv', category: 'artisan' },
      { name: 'Kuksakopp', category: 'artisan' },
      { name: 'Samiskt armband', category: 'artisan' },
      { name: 'Bärsyltset', category: 'artisan' },
      { name: 'Ljushållare av horn', category: 'artisan' },
      { name: 'Ullpläd', category: 'artisan' },
    ],
    catMerch: 'Merch',
    catArtisan: 'Hantverk',
  },
  giftGuide: {
    h2: 'Presentguide',
    sub: 'Vet du inte vad du ska välja? Vi hjälper dig hitta den perfekta presenten för varje tillfälle',
    suggested: 'Föreslagna presenter',
    occasions: [
      {
        name: 'Jul',
        description: 'Inget säger jul som en present från jultomtens hemtrakter. Välj bland våra handplockade julurval.',
        suggestions: ['Presentkorg "Lapland Luxury"', 'Ullpläd från Lappland', 'Hjortronsyltset', 'Tofflor i filt'],
      },
      {
        name: 'Bröllop',
        description: 'Fira kärleken med tidlösa handgjorda ting som paret vårdar i många år.',
        suggestions: ['Norrskenshänge', 'Kuksakopp i trä (par)', 'Plånbok i renläder', 'Korg av näver'],
      },
      {
        name: 'Födelsedag',
        description: 'Överraska någon speciell med en unik present som de aldrig hittar i en vanlig butik.',
        suggestions: ['Sámi duodji-armband', 'Puukkokniv', 'Presentkorg "Arctic Taste"', 'Ljushållare av renhorn'],
      },
      {
        name: 'Företag',
        description: 'Imponera på kunder och partner med arktiska premiumpresenter som sticker ut från de vanliga företagsgåvorna.',
        suggestions: ['Puukkokniv (graverad)', 'Presentkorg "Lapland Luxury"', 'Kuksakopp i trä', 'Norrskenshänge'],
      },
    ],
  },
  guides: {
    kicker: 'Gratis guider',
    h2: 'Arktiska guider',
    sub: 'Allt vi vet om Lappland, samlat i två gratis guider. Lämna din e-post nedan och ladda ner direkt.',
    guides: [
      {
        title: 'Det hemliga hantverket',
        subtitle: 'En insiderguide till äkta lappländskt hantverk',
        description: 'Lär dig skilja äkta handgjorda puukkoknivar från fabrikskopior, förstå den kulturella betydelsen av Sámi duodji, upptäck säsongerna för vilda bär och behärska de 5 gyllene reglerna för att köpa äkta lappländskt hantverk.',
        topics: ['Puukkoknivar', 'Kuksakoppar', 'Sámi duodji', 'Vilda bär', 'Köpregler'],
        pages: 9,
      },
      {
        title: '7 dagar av lappländsk magi',
        subtitle: 'Den enda reseplan du någonsin behöver',
        description: 'En komplett dag-för-dag-rutt från Rovaniemi till Inari och tillbaka. Med tips om norrsken, hundspannssafarier, isbrytarkryssningar, en realistisk budgetplanerare och en fullständig arktisk packlista.',
        topics: ['7-dagarsrutt', 'Budgetplanerare', 'Packlista', 'Säsongsguide', 'Lokala tips'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} sidor · PDF`,
    cta: 'Ange din e-post och få båda guiderna gratis',
  },
  newsletter: {
    kicker: 'Få båda guiderna gratis',
    h2: 'Ange din e-post för att ladda ner',
    body: 'Få direkt tillgång till båda de arktiska guiderna, plus tidiga aviseringar när nya produkter och hantverkssläpp kommer till butiken.',
    placeholder: 'din@epost.se',
    submit: 'Hämta båda guiderna',
    submitting: 'Skickar…',
    successHeading: 'Dina guider är klara!',
    successFootnote: 'Välkommen till den arktiska familjen. Kolla din inkorg också!',
    btnSecret: 'Det hemliga hantverket',
    btnSeven: '7 dagar av magi',
    errorMsg: 'Något gick fel. Försök igen.',
    spamNote: 'Aldrig någon spam. Avsluta när du vill.',
  },
  shipping: {
    h2: 'Våra löften',
    sub: 'Vad du kan förvänta dig när LaplandGifts-butiken öppnar',
    items: [
      { title: 'Direkt från Lappland', description: 'Varje produkt skickas från Finland eller våra tryckpartner i EU. Inga mellanhänder, inga okända lager.' },
      { title: 'Äkthetsgaranti', description: 'Hantverksprodukter levereras med ursprungsintyg. Samiskt hantverk köps endast in via auktoriserade säljare.' },
      { title: 'Presentklart paketerat', description: 'Varje beställning slås omsorgsfullt in i återvinningsbart material inspirerat av den arktiska naturen. Lägg till en personlig hälsning i kassan.' },
      { title: 'Vi stöttar hantverkare', description: 'En del av varje såld hantverksprodukt går direkt tillbaka till hantverkaren och deras lokalsamhälle.' },
    ],
  },
  faq: {
    kicker: 'Bra att veta',
    h2: 'Presenter från Lappland, dina frågor',
    sub: 'Vad du tar med hem, hur du handlar etiskt och vad som faktiskt kan skickas över gränserna.',
    items: [
      {
        q: 'Vilka är de äkta souvenirerna att köpa i Lappland?',
        a: 'De mest äkta Lapplandssouvenirerna är gjorda av lokala händer: en puukko (en traditionell finsk bältkniv), en kuksa (en kopp snidad ur en björkvril), varor i renläder, ulltextilier och vildplockad mat som hjortronsylt, lingonsylt och björksavsprodukter. Samiskt duodji-hantverk, silversmycken, hornarbeten och vävda band är det mest eftertraktade. Leta efter tillverkarens namn eller ett ursprungsintyg i stället för massproducerade saker i flygplatsens presentbutiker.',
      },
      {
        q: 'Kan jag köpa samiskt hantverk etiskt, och vad är märket Sámi Duodji?',
        a: 'Ja. Duodji är det samiska ordet för traditionellt hantverk, och det runda varumärket ”Sámi Duodji” är en äkthetsmärkning som ges till hantverk gjort av samiska tillverkare med traditionella metoder och material. Att välja varor med det märket, eller att köpa direkt av en namngiven samisk hantverkare eller en auktoriserad säljare, gör att pengarna stöttar samhället och att arbetet är äkta, inte en fabriksimitation av samisk formgivning. Vi köper endast in samiskt hantverk via auktoriserade säljare.',
      },
      {
        q: 'Skickar butiker i Lappland presenter utomlands?',
        a: 'Många gör det. Vår egen #LaplandVibes-merch (butiken öppnar snart) blir print-on-demand och skickas världen över från produktionspartner i EU. Hantverk skickas från Finland; leveranstid och kostnad beror på ditt land och transportören. Den praktiska fördelen med att beställa online under resan är att du slipper trycka in ömtåliga saker i bagaget, de reser separat och väntar när du kommer hem.',
      },
      {
        q: 'Vad ska jag ta med hem från Rovaniemi?',
        a: 'Rovaniemi ligger vid polcirkeln och är porten till finska Lappland, så det är en bra plats att handla på. Populära val är en kuksakopp, en puukkokniv, accessoarer i renläder, ullsockor och mössor, Mumin- och tomteprylar samt arktisk mat som hjortronsylt, salmiak (salt lakrits) och björksavssirap. För något med ursprung väljer du en pjäs som är signerad av tillverkaren i stället för en allmän ”Lappland”-souvenir.',
      },
      {
        q: 'Får man ta med produkter av ren och horn hem?',
        a: 'Renen (Rangifer tarandus) är varken en hotad eller CITES-listad art, så varor av naturligt fällt horn eller av biprodukter, horn, läder och ull är i regel tillåtna som personliga souvenirer inom EU och till de flesta länder. Reglerna varierar mellan destinationer, särskilt för obehandlade animaliska material, så kontrollera ditt hemlands tull- och importregler före resan. Vid tvekan är behandlat läder, ull och trävaror det säkraste att ta med.',
      },
      {
        q: 'Hur långt i förväg bör jag beställa julklappar från Lappland?',
        a: 'För leverans i december beställer du i god tid före transportörernas sista datum i mitten av december, internationell frakt går långsammare veckorna före jul och handgjorda ting tillverkas i små satser. Besöker du Lappland på hösten eller förvintern är beställning under resan det enklaste sättet att få hem presenterna i tid. Gå med i nyhetsbrevet, så flaggar vi för säsongens sista beställningsdatum.',
      },
    ],
  },
  related: {
    kicker: 'Vart härnäst',
    h2: 'Planera resten av din Lapplandsresa',
    sub: 'En del av LaplandVibes-nätverket, fortsätt utforska med våra systersajter.',
    items: [
      { label: 'Jul i Lappland & jultomten', blurb: 'Jultomtens by, julresor och tips inför högtiden.', href: 'https://laplandchristmas.com/santa-village/' },
      { label: 'Produkter tillverkade i Lappland', blurb: 'Ett bredare utbud av lappländska varor och arktisk design.', href: 'https://laplandstore.fi' },
      { label: 'Planera din Lapplandsresa', blurb: 'Resmål, säsonger och praktiska råd för finska Lappland.', href: 'https://laplandvisit.com/itineraries/' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Kategorier', href: '/#categories' },
      { name: 'Utvalda produkter', href: '/#products' },
      { name: 'Presentguide', href: '/#gift-guide' },
      { name: 'Gratis guider', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Oberoende drivet av Lapeso Oy i finska Lappland · senast granskat i maj 2026 · vi samarbetar direkt med utvalda hantverkare och butiker, med full öppenhet på varje produktsida.',
    extraLegalUnsub: 'Avsluta prenumeration',
  },
  notFound: {
    h1: 'Sidan hittades inte',
    body: 'Den här sidan finns inte. Kanske tog norrskenet den någon annanstans.',
    back: 'Tillbaka till startsidan',
  },
  unsubscribe: {
    title: 'Avsluta prenumeration | LaplandGifts',
    h1: 'Avsluta prenumeration',
    body: 'Ange din e-postadress för att ta bort dig från vår nyhetsbrevslista.',
    successH1: 'Du har avslutat prenumerationen',
    successBody: 'Du får inga fler e-postmeddelanden från oss. Tråkigt att se dig lämna.',
    submit: 'Avsluta prenumeration',
    submitting: 'Avslutar…',
    backHome: 'Tillbaka till startsidan',
    errorMsg: 'Något gick fel. Försök igen eller mejla info@laplandvibes.com',
  },
  legal: {
    backHome: 'Tillbaka till startsidan',
  },
}

// ---------- exports ----------

export default sv
