import type { ChromeCopy } from './types'

const fr: ChromeCopy = {
  nav: {
    categories: 'Catégories',
    products: 'Produits',
    guides: 'Guides',
    promises: 'Engagements',
  },
  hero: {
    kicker: 'Au cœur de la Laponie finlandaise',
    title: 'Offrez un morceau de',
    titleAccent: "l'Arctique",
    lead: "Commandez d'authentiques cadeaux de Laponie pendant vos vacances, ils vous attendront chez vous avant votre retour. Trésors artisanaux, articles griffés et expériences arctiques, expédiés directement depuis la Laponie finlandaise.",
    ctaExplore: 'Voir les cadeaux',
    ctaGuide: 'Guide des cadeaux',
  },
  categories: {
    h2: 'Trois façons d\'offrir la Laponie',
    sub: 'Que ce soit un mug griffé, une kuksa sculptée à la main ou un safari aux aurores boréales, nous avons le cadeau arctique parfait',
    items: [
      {
        name: 'Articles #LaplandVibes',
        tag: 'Marque maison',
        description: 'Mugs, t-shirts, sweats à capuche et tirages sur toile aux motifs arctiques signature. Impression à la demande, zéro stock, livraison dans le monde entier.',
      },
      {
        name: 'Artisanat',
        tag: 'Fait main',
        description: 'Couteaux puukko forgés à la main, kuksas sculptées, bijoux duodji sami et confitures de baies sauvages, directement des artisans lapons.',
      },
      {
        name: 'Expériences et cartes-cadeaux',
        tag: 'Idées cadeaux',
        description: "Safaris aux aurores boréales, balades en traîneau de rennes, nuits en chalet douillet et nos Lapland Trip Boxes, offrez un moment arctique inoubliable.",
      },
    ],
  },
  valueProp: {
    h2: 'Commandez en vacances. Retrouvez vos cadeaux chez vous.',
    sub: 'Fini les souvenirs fragiles à caser dans la valise. Faites vos achats pendant votre voyage, nous nous occupons du reste.',
    steps: [
      { title: 'Achetez pendant le voyage', description: "Un puukko qui vous plaît ? Une kuksa pour votre mère ? Commandez pendant que vous explorez, vous n'avez rien à transporter." },
      { title: 'Expédié depuis la Laponie', description: 'Vos cadeaux sont emballés avec soin et expédiés directement par des artisans finlandais et nos partenaires d\'impression en UE.',
      },
      { title: 'À votre porte au retour', description: 'Vous rentrez chez vous et vos trésors lapons sont déjà sur le pas de la porte. Aucun stress de bagages, aucun souvenir cassé.' },
    ],
  },
  productGrid: {
    h2: 'Bientôt disponible',
    sub: 'Notre première collection est sélectionnée avec soin parmi les meilleurs artisans de Laponie finlandaise. Inscrivez-vous à la newsletter pour être prévenu(e) en priorité.',
    priceTbd: 'Prix à venir',
    notifyMe: 'Me prévenir',
    notifyAria: (name) => `Me prévenir quand ${name} sera disponible`,
    products: [
      { name: 'Mug Aurore', category: 'merch' },
      { name: 'Mug Renne', category: 'merch' },
      { name: 'T-shirt Aurore', category: 'merch' },
      { name: 'Sweat Arctique', category: 'merch' },
      { name: 'Poster Laponie', category: 'merch' },
      { name: 'Bonnet en laine', category: 'merch' },
      { name: 'Couteau Puukko', category: 'artisan' },
      { name: 'Kuksa', category: 'artisan' },
      { name: 'Bracelet sami', category: 'artisan' },
      { name: 'Coffret confitures de baies', category: 'artisan' },
      { name: 'Bougeoir en bois de renne', category: 'artisan' },
      { name: 'Plaid en laine', category: 'artisan' },
    ],
    catMerch: 'articles griffés',
    catArtisan: 'artisanat',
  },
  giftGuide: {
    h2: 'Guide des cadeaux',
    sub: "Vous hésitez ? Nous vous aidons à trouver le cadeau parfait pour chaque occasion",
    suggested: 'Suggestions de cadeaux',
    occasions: [
      {
        name: 'Noël',
        description: "Rien n'évoque mieux Noël qu'un cadeau venu du pays du Père Noël. Choisissez parmi nos sélections festives.",
        suggestions: ['Panier cadeau "Lapland Luxury"', 'Plaid en laine de Laponie', 'Coffret confiture de mûres arctiques', 'Chaussons en feutre'],
      },
      {
        name: 'Mariage',
        description: "Célébrez l'amour avec des pièces artisanales intemporelles que le couple chérira pendant des années.",
        suggestions: ['Pendentif aurore boréale', 'Kuksa en bois (paire)', 'Portefeuille en cuir de renne', "Panier en écorce de bouleau"],
      },
      {
        name: 'Anniversaire',
        description: "Surprenez quelqu'un de spécial avec un cadeau unique qu'on ne trouve dans aucune boutique ordinaire.",
        suggestions: ['Bracelet duodji sami', 'Couteau puukko', 'Panier cadeau "Saveurs arctiques"', 'Bougeoir en bois de renne'],
      },
      {
        name: 'Entreprise',
        description: 'Marquez clients et partenaires avec des cadeaux arctiques haut de gamme qui sortent du lot.',
        suggestions: ['Puukko (gravé)', 'Panier cadeau "Lapland Luxury"', 'Kuksa en bois', 'Pendentif aurore boréale'],
      },
    ],
  },
  guides: {
    kicker: 'Guides gratuits',
    h2: 'Guides arctiques',
    sub: "Tout ce que nous savons de la Laponie, condensé dans deux guides gratuits. Laissez votre adresse e-mail ci-dessous et téléchargez-les immédiatement.",
    guides: [
      {
        title: "L'artisanat secret",
        subtitle: "Le guide d'initié de l'artisanat lapon authentique",
        description: "Apprenez à distinguer les vrais puukkos faits main des contrefaçons d'usine, comprenez la signification culturelle du duodji sami, découvrez les saisons des baies sauvages et maîtrisez les 5 règles d'or pour acheter de l'artisanat lapon authentique.",
        topics: ['Couteaux puukko', 'Kuksas', 'Duodji sami', 'Baies sauvages', "Règles d'achat"],
        pages: 9,
      },
      {
        title: '7 jours de magie en Laponie',
        subtitle: 'Le seul itinéraire dont vous aurez besoin',
        description: 'Un itinéraire complet jour par jour de Rovaniemi à Inari et retour. Inclut conseils pour les aurores boréales, safaris en husky, croisières en brise-glace, planificateur de budget réaliste et liste complète des bagages arctiques.',
        topics: ['Itinéraire 7 jours', 'Planificateur de budget', 'Liste de bagages', 'Guide saisonnier', 'Conseils locaux'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} pages · PDF`,
    cta: 'Entrez votre e-mail pour recevoir les deux guides gratuitement',
  },
  newsletter: {
    kicker: 'Les deux guides offerts',
    h2: 'Entrez votre e-mail pour télécharger',
    body: 'Accès immédiat aux deux guides arctiques, plus les notifications anticipées dès que de nouveaux produits et créations artisanales arrivent en boutique.',
    placeholder: 'votre@email.com',
    submit: 'Recevoir les deux guides',
    submitting: 'Envoi…',
    successHeading: 'Vos guides sont prêts !',
    successFootnote: 'Bienvenue dans la famille arctique. Pensez aussi à vérifier votre boîte de réception !',
    btnSecret: "L'artisanat secret",
    btnSeven: '7 jours de magie',
    errorMsg: "Une erreur s'est produite. Veuillez réessayer.",
    spamNote: 'Jamais de spam. Désabonnement possible à tout moment.',
  },
  shipping: {
    h2: 'Nos engagements',
    sub: 'Ce que vous pouvez attendre en commandant chez LaplandGifts',
    items: [
      { title: 'Directement de Laponie', description: "Chaque produit est expédié depuis la Finlande ou nos partenaires d'impression en UE. Aucun intermédiaire, aucun entrepôt mystère." },
      { title: "Garantie d'authenticité", description: "Les produits artisanaux sont accompagnés d'un certificat d'origine. L'artisanat sami est sourcé uniquement auprès de vendeurs autorisés." },
      { title: 'Emballage prêt à offrir', description: "Chaque commande est emballée avec soin dans des matériaux recyclables inspirés de la nature arctique. Ajoutez un message personnel au paiement." },
      { title: 'Soutien aux artisans', description: 'Une partie de chaque vente de produit artisanal revient directement à l\'artisan et à sa communauté.' },
    ],
  },
  faq: {
    kicker: 'Bon à savoir',
    h2: 'Cadeaux de Laponie, vos questions',
    sub: "Quoi rapporter, comment acheter de façon éthique et ce qui s'expédie réellement à l'étranger.",
    items: [
      {
        q: 'Quels sont les souvenirs authentiques à acheter en Laponie ?',
        a: "Les souvenirs les plus authentiques de Laponie sont façonnés par des mains locales : un puukko (couteau de ceinture traditionnel finlandais), une kuksa (tasse taillée dans une loupe de bouleau), des articles en cuir de renne, des textiles en laine et des produits sauvages comme la confiture de mûres arctiques, la confiture d'airelles et les produits à base de sève de bouleau. L'artisanat sami duodji, bijoux en argent, travail du bois de renne et galons tissés, est le plus prisé. Cherchez le nom de l'artisan ou un certificat d'origine plutôt que des articles produits en série dans les boutiques d'aéroport.",
      },
      {
        q: "Puis-je acheter de l'artisanat sami de façon éthique, et qu'est-ce que le label Sámi Duodji ?",
        a: "Oui. Duodji est le mot sami pour l'artisanat traditionnel, et la marque circulaire « Sámi Duodji » est un label d'authenticité accordé aux pièces réalisées par des artisans samis selon des méthodes et des matériaux traditionnels. Choisir un article portant ce label ou acheter directement auprès d'un artisan sami identifié ou d'un vendeur agréé, garantit que l'argent soutient la communauté et que la pièce est authentique, et non une imitation industrielle des motifs samis. Nous nous procurons l'artisanat sami uniquement auprès de vendeurs agréés.",
      },
      {
        q: "Les boutiques de Laponie expédient-elles des cadeaux à l'étranger ?",
        a: "Beaucoup le font. Nos propres articles #LaplandVibes sont en impression à la demande et expédiés dans le monde entier depuis des partenaires de production de l'UE. Les pièces artisanales partent de Finlande ; le délai et le coût dépendent de votre pays et du transporteur. L'avantage pratique de commander en ligne pendant votre voyage est que vous n'avez pas à caser d'objets fragiles dans vos bagages, ils voyagent séparément et vous attendent à la maison.",
      },
      {
        q: 'Que rapporter de Rovaniemi ?',
        a: "Rovaniemi se trouve sur le cercle polaire arctique et constitue la porte d'entrée de la Laponie finlandaise, c'est donc un bon endroit pour faire ses achats. Les choix populaires sont une kuksa, un couteau puukko, des accessoires en cuir de renne, des chaussettes et bonnets en laine, des articles Moomins et Père Noël, et des produits arctiques comme la confiture de mûres arctiques, le salmiakki (réglisse salée) et le sirop de sève de bouleau. Pour un objet avec une provenance, choisissez une pièce signée par son auteur plutôt qu'un souvenir générique « Laponie ».",
      },
      {
        q: 'Les produits à base de renne et de bois de renne sont-ils autorisés au retour ?',
        a: "Le renne (Rangifer tarandus) n'est ni une espèce menacée ni inscrite à la CITES ; les articles en bois de renne tombé naturellement ou issus de sous-produits, bois, cuir et laine, sont donc généralement autorisés comme souvenirs personnels au sein de l'UE et vers la plupart des pays. Les règles varient selon la destination, surtout pour les matières animales non traitées ; vérifiez donc les règles douanières et d'importation de votre pays avant de partir. En cas de doute, le cuir traité, la laine et les objets en bois sont les plus sûrs à transporter.",
      },
      {
        q: "Combien de temps à l'avance faut-il commander des cadeaux de Noël depuis la Laponie ?",
        a: "Pour une livraison en décembre, commandez bien avant les dates limites des transporteurs mi-décembre, l'expédition internationale ralentit dans les semaines précédant Noël, et les pièces artisanales sont fabriquées en petites séries. Si vous visitez la Laponie en automne ou au début de l'hiver, commander pendant votre voyage est le moyen le plus simple d'avoir vos cadeaux à la maison à temps. Inscrivez-vous à la newsletter et nous vous signalerons les dates limites de saison.",
      },
    ],
  },
  related: {
    kicker: 'Où aller ensuite',
    h2: 'Planifiez la suite de votre voyage en Laponie',
    sub: 'Membre du réseau LaplandVibes, continuez à explorer avec nos sites partenaires.',
    items: [
      { label: 'Noël en Laponie et Père Noël', blurb: 'Village du Père Noël, séjours de Noël et conseils de saison.', href: 'https://laplandchristmas.com/santa-village/' },
      { label: 'Produits fabriqués en Laponie', blurb: 'Une boutique plus large de produits lapons et de design arctique.', href: 'https://laplandstore.fi' },
      { label: 'Planifiez votre voyage en Laponie', blurb: 'Destinations, saisons et conseils pratiques pour la Laponie finlandaise.', href: 'https://laplandvisit.com/itineraries/' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Catégories', href: '/#categories' },
      { name: 'Produits phares', href: '/#products' },
      { name: 'Guide des cadeaux', href: '/#gift-guide' },
      { name: 'Guides gratuits', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Édité de façon indépendante par Lapeso Oy en Laponie finlandaise · dernière vérification mai 2026 · nous travaillons directement avec des artisans et boutiques sélectionnés, en toute transparence sur chaque fiche produit.',
    extraLegalUnsub: 'Se désabonner',
  },
  notFound: {
    h1: 'Page introuvable',
    body: "Cette page n'existe pas. Peut-être que l'aurore boréale l'a emmenée ailleurs.",
    back: "Retour à l'accueil",
  },
  unsubscribe: {
    title: 'Désabonnement | LaplandGifts',
    h1: 'Se désabonner',
    body: 'Entrez votre adresse e-mail pour vous retirer de notre liste de diffusion.',
    successH1: 'Vous êtes désabonné(e)',
    successBody: 'Vous ne recevrez plus aucun e-mail de notre part. Nous sommes désolés de vous voir partir.',
    submit: 'Se désabonner',
    submitting: 'Désabonnement…',
    backHome: "Retour à l'accueil",
    errorMsg: "Une erreur s'est produite. Veuillez réessayer ou écrire à info@laplandvibes.com",
  },
  legal: {
    backHome: "Retour à l'accueil",
  },
}

// ---------- IT (Italiano, forma cortese "Lei") ----------

export default fr
