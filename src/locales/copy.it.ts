import type { ChromeCopy } from './types'

const it: ChromeCopy = {
  nav: {
    categories: 'Categorie',
    products: 'Prodotti',
    guides: 'Guide',
    promises: 'Impegni',
  },
  hero: {
    kicker: 'Dal cuore della Lapponia finlandese',
    badge: 'Il negozio apre presto',
    title: 'Regala un pezzo di',
    titleAccent: 'Artico',
    lead: "Presto potrà ordinare autentici regali della Lapponia mentre è in vacanza e ritrovarli a casa prima del Suo ritorno. Tesori artigianali, articoli a marchio proprio ed esperienze artiche, direttamente dalla Lapponia finlandese. La prima collezione è in fase di selezione.",
    ctaExplore: 'Scopri i regali',
    ctaGuide: 'Guida ai regali',
  },
  categories: {
    h2: 'Tre modi per regalare la Lapponia',
    sub: 'Che si tratti di una tazza a marchio, di una kuksa intagliata a mano o di un safari per l\'aurora boreale, abbiamo il regalo artico perfetto',
    items: [
      {
        name: 'Articoli #LaplandVibes',
        tag: 'Marchio proprio',
        description: "Tazze, t-shirt, felpe e stampe su tela con i nostri disegni artici esclusivi. Stampa su richiesta e spedizione in tutto il mondo non appena il negozio aprirà.",
      },
      {
        name: 'Artigianato',
        tag: 'Fatto a mano',
        description: "Coltelli puukko forgiati a mano, kuksa intagliate, gioielli duodji sami e marmellate di bacche selvatiche, direttamente dagli artigiani lapponi.",
      },
      {
        name: 'Esperienze e carte regalo',
        tag: 'Idee regalo',
        description: 'Safari per l\'aurora boreale, slitte trainate da renne, notti in baita accoglienti e le nostre Lapponia Trip Boxes selezionate, regali un momento artico indimenticabile.',
      },
    ],
  },
  valueProp: {
    h2: 'Ordini in vacanza. Li ritrovi a casa.',
    sub: 'Basta infilare souvenir fragili in valigia. Ecco come funzionerà LaplandGifts quando il negozio aprirà: acquisti durante il viaggio e al resto pensiamo noi.',
    steps: [
      { title: 'Sceglie in vacanza', description: 'Ha trovato un puukko che adora? Una kuksa per la mamma? Ordini mentre esplora, non deve portare nulla.' },
      { title: 'Spediamo dalla Lapponia', description: 'I Suoi regali vengono confezionati con cura e spediti direttamente da artigiani finlandesi e dai nostri partner di stampa nell\'UE.' },
      { title: 'L\'aspettano a casa', description: 'Rientra a casa e i Suoi tesori lapponi sono già sulla porta. Niente stress da bagaglio, niente souvenir rotti.' },
    ],
  },
  productGrid: {
    h2: 'In arrivo',
    sub: 'La nostra prima collezione viene selezionata tra i migliori artigiani della Lapponia finlandese. Si iscriva alla newsletter per essere tra i primi a saperlo.',
    priceTbd: 'Prezzo da definire',
    notifyMe: 'Avvisami',
    notifyAria: (name) => `Avvisami quando ${name} sarà disponibile`,
    products: [
      { name: 'Tazza Aurora', category: 'merch' },
      { name: 'Tazza Renna', category: 'merch' },
      { name: 'T-shirt Aurora', category: 'merch' },
      { name: 'Felpa Artica', category: 'merch' },
      { name: 'Poster Lapponia', category: 'merch' },
      { name: 'Berretto in lana', category: 'merch' },
      { name: 'Coltello Puukko', category: 'artisan' },
      { name: 'Kuksa', category: 'artisan' },
      { name: 'Bracciale sami', category: 'artisan' },
      { name: 'Set marmellate di bacche', category: 'artisan' },
      { name: 'Portacandele in corno', category: 'artisan' },
      { name: 'Coperta in lana', category: 'artisan' },
    ],
    catMerch: 'articoli a marchio',
    catArtisan: 'artigianato',
  },
  giftGuide: {
    h2: 'Guida ai regali',
    sub: 'Non sa cosa scegliere? La aiutiamo a trovare il regalo perfetto per ogni occasione',
    suggested: 'Regali consigliati',
    occasions: [
      {
        name: 'Natale',
        description: "Niente dice Natale come un regalo dalla terra di Babbo Natale. Scelga tra le nostre selezioni natalizie curate.",
        suggestions: ['Cesto regalo "Lapponia Luxury"', 'Coperta in lana di Lapponia', 'Set marmellata di camemoro', 'Pantofole in feltro'],
      },
      {
        name: 'Matrimonio',
        description: "Celebri l'amore con pezzi artigianali senza tempo che gli sposi conserveranno per anni.",
        suggestions: ['Pendente aurora boreale', 'Kuksa in legno (coppia)', 'Portafogli in pelle di renna', 'Cestino in corteccia di betulla'],
      },
      {
        name: 'Compleanno',
        description: "Sorprenda una persona speciale con un regalo unico, introvabile nei negozi comuni.",
        suggestions: ['Bracciale duodji sami', 'Puukko', 'Cesto regalo "Sapore artico"', 'Portacandele in corno di renna'],
      },
      {
        name: 'Aziendale',
        description: 'Lasci il segno su clienti e partner con regali artici premium che si distinguono dai soliti omaggi aziendali.',
        suggestions: ['Puukko (incisione)', 'Cesto regalo "Lapponia Luxury"', 'Kuksa in legno', 'Pendente aurora boreale'],
      },
    ],
  },
  guides: {
    kicker: 'Guide gratuite',
    h2: 'Guide artiche',
    sub: "Tutto ciò che sappiamo sulla Lapponia, racchiuso in due guide gratuite. Lasci la Sua e-mail qui sotto e scarichi subito.",
    guides: [
      {
        title: "L'artigianato segreto",
        subtitle: "La guida dell'esperto all'autentico artigianato lappone",
        description: "Impari a riconoscere i veri coltelli puukko fatti a mano dalle imitazioni industriali, comprenda il significato culturale del duodji sami, scopra le stagioni delle bacche selvatiche e padroneggi le 5 regole d'oro per acquistare autentico artigianato lappone.",
        topics: ['Coltelli puukko', 'Kuksa', 'Duodji sami', 'Bacche selvatiche', "Regole d'acquisto"],
        pages: 9,
      },
      {
        title: '7 giorni di magia in Lapponia',
        subtitle: 'L\'unico itinerario di cui avrà bisogno',
        description: 'Un percorso completo giorno per giorno da Rovaniemi a Inari e ritorno. Include consigli per l\'aurora boreale, safari con husky, crociere rompighiaccio, pianificatore di budget realistico e una lista bagagli artica completa.',
        topics: ['Itinerario 7 giorni', 'Pianificatore di budget', 'Lista bagagli', 'Guida stagionale', 'Consigli locali'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} pagine · PDF`,
    cta: 'Inserisca la Sua e-mail per ricevere entrambe le guide gratis',
  },
  newsletter: {
    kicker: 'Entrambe le guide in omaggio',
    h2: 'Inserisca la Sua e-mail per scaricare',
    body: 'Accesso immediato a entrambe le guide artiche, più le notifiche in anteprima quando nuovi prodotti e creazioni artigianali arrivano in negozio.',
    placeholder: 'tua@email.com',
    submit: 'Ricevi entrambe le guide',
    submitting: 'Invio in corso…',
    successHeading: 'Le Sue guide sono pronte!',
    successFootnote: 'Benvenuto/a nella famiglia artica. Controlli anche la Sua casella di posta!',
    btnSecret: "L'artigianato segreto",
    btnSeven: '7 giorni di magia',
    errorMsg: 'Qualcosa è andato storto. Riprovi, per favore.',
    spamNote: 'Niente spam, mai. Si disiscriva quando vuole.',
  },
  shipping: {
    h2: 'I nostri impegni',
    sub: 'Cosa può aspettarsi quando il negozio LaplandGifts aprirà',
    items: [
      { title: 'Direttamente dalla Lapponia', description: 'Ogni prodotto viene spedito dalla Finlandia o dai nostri partner di stampa nell\'UE. Niente intermediari, niente magazzini misteriosi.' },
      { title: 'Garanzia di autenticità', description: "I prodotti artigianali sono accompagnati da un certificato d'origine. L'artigianato sami è acquistato solo tramite venditori autorizzati." },
      { title: 'Confezione pronta da regalare', description: 'Ogni ordine viene confezionato con cura in imballaggi riciclabili ispirati alla natura artica. Aggiunga un messaggio personale al checkout.' },
      { title: 'Sosteniamo gli artigiani', description: "Una parte di ogni vendita di prodotto artigianale torna direttamente all'artigiano e alla sua comunità." },
    ],
  },
  faq: {
    kicker: 'Buono a sapersi',
    h2: 'Regali della Lapponia, le Sue domande',
    sub: "Cosa portare a casa, come acquistare in modo etico e cosa viene davvero spedito all'estero.",
    items: [
      {
        q: 'Quali sono i souvenir autentici da acquistare in Lapponia?',
        a: "I souvenir più autentici della Lapponia sono realizzati da mani locali: un puukko (coltello da cintura tradizionale finlandese), una kuksa (tazza intagliata da un nodo di betulla), articoli in pelle di renna, tessuti di lana e prodotti del bosco come marmellata di camemoro, conserva di mirtillo rosso e prodotti della linfa di betulla. L'artigianato sami duodji, gioielli d'argento, lavori in corno e nastri intrecciati, è il più pregiato. Cerchi il nome dell'artigiano o un certificato d'origine anziché articoli di produzione in serie venduti nei negozi dell'aeroporto.",
      },
      {
        q: "Posso acquistare artigianato sami in modo etico, e cos'è il marchio Sámi Duodji?",
        a: "Sì. Duodji è la parola sami per l'artigianato tradizionale, e il marchio circolare «Sámi Duodji» è un'etichetta di autenticità concessa ai manufatti realizzati da artigiani sami con metodi e materiali tradizionali. Scegliere articoli con quel marchio o acquistare direttamente da un artigiano sami identificato o da un venditore autorizzato, garantisce che il denaro sostenga la comunità e che il pezzo sia autentico, non un'imitazione industriale dei disegni sami. Noi ci riforniamo di artigianato sami solo tramite venditori autorizzati.",
      },
      {
        q: "I negozi della Lapponia spediscono regali all'estero?",
        a: "Molti lo fanno. I nostri articoli #LaplandVibes (il negozio apre presto) saranno in stampa su richiesta, spediti in tutto il mondo da partner di produzione nell'UE. I pezzi artigianali partono dalla Finlandia; tempi e costi dipendono dal Suo Paese e dal corriere. Il vantaggio pratico di ordinare online durante il viaggio è che non deve incastrare oggetti fragili in valigia, viaggiano separatamente e La aspettano a casa.",
      },
      {
        q: 'Cosa portare a casa da Rovaniemi?',
        a: "Rovaniemi si trova sul Circolo Polare Artico ed è la porta della Lapponia finlandese, quindi è un buon posto per fare acquisti. Scelte apprezzate sono una kuksa, un coltello puukko, accessori in pelle di renna, calze e berretti di lana, articoli dei Mumin e di Babbo Natale, e prodotti artici come marmellata di camemoro, salmiakki (liquirizia salata) e sciroppo di linfa di betulla. Per qualcosa con una provenienza, scelga un pezzo firmato dall'autore anziché un generico souvenir «Lapponia».",
      },
      {
        q: 'È consentito riportare prodotti di renna e di corno?',
        a: "La renna (Rangifer tarandus) non è una specie minacciata né elencata nella CITES, perciò gli articoli in corno caduto naturalmente o derivati da sottoprodotti, corno, pelle e lana, sono in genere ammessi come souvenir personali all'interno dell'UE e verso la maggior parte dei Paesi. Le regole variano in base alla destinazione, soprattutto per i materiali animali non trattati, quindi verifichi le norme doganali e d'importazione del Suo Paese prima di partire. Nel dubbio, pelle trattata, lana e oggetti in legno sono i più sicuri da trasportare.",
      },
      {
        q: 'Con quanto anticipo conviene ordinare i regali di Natale dalla Lapponia?',
        a: "Per la consegna a dicembre, ordini con largo anticipo rispetto alle scadenze dei corrieri di metà dicembre, le spedizioni internazionali rallentano nelle settimane prima di Natale e i pezzi artigianali sono prodotti in piccole quantità. Se visita la Lapponia in autunno o a inizio inverno, ordinare durante il viaggio è il modo più semplice per avere i regali a casa in tempo. Si iscriva alla newsletter e Le segnaleremo le date di scadenza stagionali.",
      },
    ],
  },
  related: {
    kicker: 'Dove andare ora',
    h2: 'Pianifichi il resto del Suo viaggio in Lapponia',
    sub: 'Parte del network LaplandVibes, continui a esplorare con i nostri siti gemelli.',
    items: [
      { label: 'Natale in Lapponia e Babbo Natale', blurb: 'Villaggio di Babbo Natale, viaggi di Natale e consigli di stagione.', href: 'https://laplandchristmas.com/santa-village/' },
      { label: 'Prodotti fatti in Lapponia', blurb: 'Una selezione più ampia di prodotti lapponi e design artico.', href: 'https://laplandstore.fi' },
      { label: 'Pianifichi il Suo viaggio in Lapponia', blurb: 'Destinazioni, stagioni e consigli pratici per la Lapponia finlandese.', href: 'https://laplandvisit.com/itineraries/' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Categorie', href: '/#categories' },
      { name: 'Prodotti in evidenza', href: '/#products' },
      { name: 'Guida ai regali', href: '/#gift-guide' },
      { name: 'Guide gratuite', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Gestito in modo indipendente da Lapeso Oy in Lapponia finlandese · ultima revisione maggio 2026 · collaboriamo direttamente con artigiani e negozi selezionati, con piena trasparenza in ogni scheda prodotto.',
    extraLegalUnsub: 'Disiscriviti',
  },
  notFound: {
    h1: 'Pagina non trovata',
    body: 'Questa pagina non esiste. Forse l\'aurora boreale l\'ha portata altrove.',
    back: 'Torna alla home',
  },
  unsubscribe: {
    title: 'Disiscrizione | LaplandGifts',
    h1: 'Disiscriviti',
    body: 'Inserisca il Suo indirizzo e-mail per rimuoversi dalla lista della newsletter.',
    successH1: 'Disiscrizione completata',
    successBody: 'Non riceverà più nostre e-mail. Ci dispiace vederLa andare via.',
    submit: 'Disiscriviti',
    submitting: 'Disiscrizione…',
    backHome: 'Torna alla home',
    errorMsg: 'Qualcosa è andato storto. Riprovi o scriva a info@laplandvibes.com',
  },
  legal: {
    backHome: 'Torna alla home',
  },
}

// ---------- NL (Nederlands, beleefdheidsvorm "u") ----------

export default it
