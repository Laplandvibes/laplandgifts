import type { ChromeCopy } from './types'

const ptBR: ChromeCopy = {
  nav: {
    categories: 'Categorias',
    products: 'Produtos',
    guides: 'Guias',
    promises: 'Compromissos',
  },
  hero: {
    kicker: 'Do coração da Lapônia finlandesa',
    title: 'Presenteie um pedaço do',
    titleAccent: 'Ártico',
    lead: 'Encomende presentes autênticos da Lapônia enquanto está de férias, eles vão estar esperando você em casa antes mesmo de você chegar. Tesouros artesanais, produtos da marca própria e experiências árticas, enviados direto da Lapônia finlandesa.',
    ctaExplore: 'Ver presentes',
    ctaGuide: 'Guia de presentes',
  },
  categories: {
    h2: 'Três maneiras de presentear a Lapônia',
    sub: 'Seja uma caneca de marca, uma kuksa esculpida à mão ou um safári de aurora boreal, temos o presente ártico perfeito',
    items: [
      {
        name: 'Produtos #LaplandVibes',
        tag: 'Marca própria',
        description: 'Canecas, camisetas, moletons e impressões em tela com nossos designs árticos característicos. Impressão sob demanda, sem estoque, envio para o mundo todo.',
      },
      {
        name: 'Artesanato',
        tag: 'Feito à mão',
        description: 'Facas puukko forjadas à mão, kuksas esculpidas, joias sámi duodji e geleias de frutas silvestres, direto dos artesãos da Lapônia.',
      },
      {
        name: 'Experiências e cartões-presente',
        tag: 'Ideias de presente',
        description: 'Safáris de aurora boreal, passeios de trenó com renas, noites em cabanas aconchegantes e as Lapland Trip Boxes selecionadas, presenteie um momento ártico inesquecível.',
      },
    ],
  },
  valueProp: {
    h2: 'Encomende em férias. Encontre em casa.',
    sub: 'Chega de espremer lembrancinhas frágeis na mala. Você compra durante a viagem, nós cuidamos do resto.',
    steps: [
      { title: 'Explore em férias', description: 'Encontrou uma faca puukko incrível? Uma kuksa para sua mãe? Encomende durante o passeio, você não precisa carregar nada.' },
      { title: 'Enviamos da Lapônia', description: 'Seus presentes são embalados com cuidado e enviados direto dos artesãos finlandeses e dos nossos parceiros de impressão na UE.' },
      { title: 'Esperam você em casa', description: 'Você volta para casa e os tesouros da Lapônia já estão na porta. Sem estresse de bagagem, sem lembrancinhas quebradas.' },
    ],
  },
  productGrid: {
    h2: 'Em breve',
    sub: 'Nossa primeira coleção está sendo escolhida a dedo entre os melhores artesãos da Lapônia finlandesa. Cadastre-se no boletim para ser um dos primeiros a saber.',
    priceTbd: 'Preço a definir',
    notifyMe: 'Me avise',
    notifyAria: (name) => `Me avise quando ${name} estiver disponível`,
    products: [
      { name: 'Caneca Aurora', category: 'merch' },
      { name: 'Caneca Rena', category: 'merch' },
      { name: 'Camiseta Aurora', category: 'merch' },
      { name: 'Moletom Ártico', category: 'merch' },
      { name: 'Pôster da Lapônia', category: 'merch' },
      { name: 'Gorro de lã', category: 'merch' },
      { name: 'Faca Puukko', category: 'artisan' },
      { name: 'Caneca Kuksa', category: 'artisan' },
      { name: 'Pulseira sámi', category: 'artisan' },
      { name: 'Kit de geleia de frutas silvestres', category: 'artisan' },
      { name: 'Porta-velas de chifre', category: 'artisan' },
      { name: 'Manta de lã', category: 'artisan' },
    ],
    catMerch: 'produto da marca',
    catArtisan: 'artesanato',
  },
  giftGuide: {
    h2: 'Guia de presentes',
    sub: 'Não sabe o que escolher? A gente te ajuda a encontrar o presente perfeito para cada ocasião',
    suggested: 'Sugestões de presente',
    occasions: [
      {
        name: 'Natal',
        description: 'Nada combina mais com Natal do que um presente vindo da terra do Papai Noel. Escolha entre nossas seleções natalinas cuidadosamente preparadas.',
        suggestions: ['Cesta de presente "Lapland Luxury"', 'Manta de lã da Lapônia', 'Kit de geleia de amora-ártica', 'Pantufas de feltro'],
      },
      {
        name: 'Casamento',
        description: 'Celebre o amor com peças artesanais atemporais que o casal vai guardar por anos.',
        suggestions: ['Pingente com motivo de aurora', 'Kuksa de madeira (par)', 'Carteira de couro de rena', 'Cesta de casca de bétula'],
      },
      {
        name: 'Aniversário',
        description: 'Surpreenda alguém especial com um presente único que não se encontra em qualquer loja.',
        suggestions: ['Pulseira sámi duodji', 'Faca puukko', 'Cesta de presente "Arctic Taste"', 'Porta-velas de chifre de rena'],
      },
      {
        name: 'Corporativo',
        description: 'Impressione clientes e parceiros com presentes árticos de qualidade que se destacam do brinde corporativo comum.',
        suggestions: ['Faca puukko (gravada)', 'Cesta de presente "Lapland Luxury"', 'Kuksa de madeira', 'Pingente com motivo de aurora'],
      },
    ],
  },
  guides: {
    kicker: 'Guias gratuitos',
    h2: 'Guias árticos',
    sub: 'Tudo o que sabemos sobre a Lapônia, reunido em dois guias gratuitos. Deixe seu e-mail abaixo e baixe na hora.',
    guides: [
      {
        title: 'O ofício secreto',
        subtitle: 'Um guia interno da autêntica artesania da Lapônia',
        description: 'Aprenda a reconhecer facas puukko realmente feitas à mão entre as falsificações de fábrica, entenda o significado cultural do duodji sámi, descubra as estações das frutas silvestres e domine as 5 regras de ouro para comprar artesanato lapão genuíno.',
        topics: ['Facas puukko', 'Kuksas', 'Sámi duodji', 'Frutas silvestres', 'Regras do comprador'],
        pages: 9,
      },
      {
        title: '7 dias de magia na Lapônia',
        subtitle: 'O único roteiro que você vai precisar',
        description: 'Uma rota completa dia a dia de Rovaniemi a Inari e de volta. Inclui dicas para ver aurora boreal, safáris de huskies, cruzeiros em quebra-gelo, planejador de orçamento realista e uma lista de bagagem ártica completa.',
        topics: ['Roteiro de 7 dias', 'Planejador de orçamento', 'Lista de bagagem', 'Guia sazonal', 'Dicas locais'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} páginas · PDF`,
    cta: 'Digite seu e-mail e receba os dois guias grátis',
  },
  newsletter: {
    kicker: 'Os dois guias de graça',
    h2: 'Digite seu e-mail e baixe agora',
    body: 'Acesso imediato aos dois guias árticos e avisos antecipados quando chegarem novos produtos e edições artesanais na loja.',
    placeholder: 'seu@email.com',
    submit: 'Receber os dois guias',
    submitting: 'Enviando…',
    successHeading: 'Seus guias estão prontos!',
    successFootnote: 'Bem-vindo(a) à família ártica. Confira também sua caixa de entrada!',
    btnSecret: 'O ofício secreto',
    btnSeven: '7 dias de magia',
    errorMsg: 'Algo deu errado. Tente novamente.',
    spamNote: 'Sem spam, nunca. Cancele a qualquer momento.',
  },
  shipping: {
    h2: 'Nossos compromissos',
    sub: 'O que você pode esperar quando compra na LaplandGifts',
    items: [
      { title: 'Direto da Lapônia', description: 'Cada produto sai da Finlândia ou dos nossos parceiros de impressão na UE. Sem intermediários, sem depósitos misteriosos.' },
      { title: 'Garantia de autenticidade', description: 'Os produtos artesanais vêm com certificado de origem. O artesanato sámi é comprado apenas de vendedores autorizados.' },
      { title: 'Embalagem pronta para presente', description: 'Cada pedido é embalado com cuidado em material reciclável inspirado na natureza ártica. Adicione uma mensagem pessoal no checkout.' },
      { title: 'Apoiamos os artesãos', description: 'Parte de cada venda artesanal volta diretamente ao artesão e à sua comunidade.' },
    ],
  },
  faq: {
    kicker: 'Bom saber',
    h2: 'Presentes da Lapônia, suas perguntas',
    sub: 'O que levar para casa, como comprar de forma ética e o que realmente é enviado para outros países.',
    items: [
      {
        q: 'Quais são as lembranças autênticas para comprar na Lapônia?',
        a: 'As lembranças mais genuínas da Lapônia são feitas por mãos locais: uma puukko (faca de cinto tradicional finlandesa), uma kuksa (caneca esculpida de um nó de bétula), artigos de couro de rena, têxteis de lã e alimentos silvestres como geleia de amora-ártica, conserva de airela e produtos da seiva de bétula. O artesanato sámi duodji, joias de prata, trabalhos em chifre e faixas tecidas, é o mais valorizado. Procure o nome do artesão ou um certificado de origem em vez de produtos em série vendidos nas lojas do aeroporto.',
      },
      {
        q: 'Posso comprar artesanato sámi de forma ética e o que é o selo Sámi Duodji?',
        a: 'Sim. Duodji é a palavra sámi para o artesanato tradicional, e a marca registrada circular «Sámi Duodji» é um selo de autenticidade concedido a peças feitas por artesãos sámi com métodos e materiais tradicionais. Escolher itens com esse selo ou comprar diretamente de um artesão sámi identificado ou de um vendedor autorizado, garante que o dinheiro apoia a comunidade e que a peça é genuína, não uma imitação de fábrica dos desenhos sámi. Nós adquirimos o artesanato sámi apenas por meio de vendedores autorizados.',
      },
      {
        q: 'As lojas da Lapônia enviam presentes para o exterior?',
        a: 'Muitas enviam. Os nossos próprios produtos #LaplandVibes são de impressão sob demanda e enviados para o mundo todo a partir de parceiros de produção na UE. As peças artesanais saem da Finlândia; o prazo e o custo dependem do seu país e da transportadora. A vantagem prática de comprar on-line durante a viagem é que você não precisa encaixar itens frágeis na bagagem, eles viajam separadamente e esperam por você em casa.',
      },
      {
        q: 'O que levar para casa de Rovaniemi?',
        a: 'Rovaniemi fica no Círculo Polar Ártico e é a porta de entrada para a Lapônia finlandesa, então é um bom lugar para comprar. Escolhas populares são uma kuksa, uma faca puukko, acessórios de couro de rena, meias e gorros de lã, itens dos Mumin e do Papai Noel, e alimentos árticos como geleia de amora-ártica, salmiakki (alcaçuz salgado) e xarope de seiva de bétula. Para algo com procedência, escolha uma peça assinada pelo autor em vez de uma lembrança genérica de «Lapônia».',
      },
      {
        q: 'É permitido levar produtos de rena e de chifre?',
        a: 'A rena (Rangifer tarandus) não é uma espécie ameaçada nem consta na CITES, por isso itens de chifre caído naturalmente ou de subprodutos, chifre, couro e lã, costumam ser permitidos como lembranças pessoais dentro da UE e para a maioria dos países. As regras variam conforme o destino, sobretudo para materiais animais não tratados, então verifique as regras de alfândega e importação do seu país antes de viajar. Na dúvida, couro tratado, lã e itens de madeira são os mais seguros de levar.',
      },
      {
        q: 'Com quanta antecedência devo pedir presentes de Natal da Lapônia?',
        a: 'Para entrega em dezembro, faça o pedido bem antes dos prazos das transportadoras em meados de dezembro o envio internacional fica mais lento nas semanas anteriores ao Natal, e as peças artesanais são feitas em pequenos lotes. Se você visita a Lapônia no outono ou início do inverno, pedir durante a viagem é a forma mais fácil de ter os presentes em casa a tempo. Assine o boletim e avisaremos as datas-limite da temporada.',
      },
    ],
  },
  related: {
    kicker: 'Para onde agora',
    h2: 'Planeje o resto da sua viagem à Lapônia',
    sub: 'Parte da rede LaplandVibes, continue explorando com os nossos sites parceiros.',
    items: [
      { label: 'Natal na Lapônia e Papai Noel', blurb: 'Aldeia do Papai Noel, viagens de Natal e dicas da temporada.', href: 'https://laplandchristmas.com' },
      { label: 'Produtos feitos na Lapônia', blurb: 'Uma loja mais ampla de produtos lapões e design ártico.', href: 'https://laplandstore.fi' },
      { label: 'Planeje sua viagem à Lapônia', blurb: 'Destinos, estações e dicas práticas para a Lapônia finlandesa.', href: 'https://laplandvisit.com' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Categorias', href: '/#categories' },
      { name: 'Produtos em destaque', href: '/#products' },
      { name: 'Guia de presentes', href: '/#gift-guide' },
      { name: 'Guias gratuitos', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Mantido de forma independente pela Lapeso Oy na Lapônia finlandesa · última revisão em maio de 2026 · trabalhamos diretamente com artesãos e lojas selecionados, com transparência total em cada página de produto.',
    extraLegalUnsub: 'Cancelar inscrição',
  },
  notFound: {
    h1: 'Página não encontrada',
    body: 'Esta página não existe. Talvez as auroras boreais a tenham levado para outro lugar.',
    back: 'Voltar para a página inicial',
  },
  unsubscribe: {
    title: 'Cancelar inscrição | LaplandGifts',
    h1: 'Cancelar inscrição',
    body: 'Digite seu endereço de e-mail para sair da nossa lista de newsletter.',
    successH1: 'Inscrição cancelada',
    successBody: 'Você não vai receber mais e-mails nossos. Sentiremos sua falta.',
    submit: 'Cancelar inscrição',
    submitting: 'Cancelando…',
    backHome: 'Voltar para a página inicial',
    errorMsg: 'Algo deu errado. Tente novamente ou escreva para info@laplandvibes.com',
  },
  legal: {
    backHome: 'Voltar para a página inicial',
  },
}

// ---------- ZH-CN (简体中文, 礼貌敬语 "您") ----------

export default ptBR
