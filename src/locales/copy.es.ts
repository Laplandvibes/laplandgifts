import type { ChromeCopy } from './types'

const es: ChromeCopy = {
  nav: {
    categories: 'Categorías',
    products: 'Productos',
    guides: 'Guías',
    promises: 'Compromisos',
  },
  hero: {
    kicker: 'Desde el corazón de la Laponia finlandesa',
    title: 'Regale un trozo del',
    titleAccent: 'Ártico',
    lead: 'Encargue regalos auténticos de Laponia mientras está de vacaciones, le estarán esperando en casa antes de que vuelva. Tesoros artesanales, productos de marca propia y experiencias árticas, enviados directamente desde la Laponia finlandesa.',
    ctaExplore: 'Ver regalos',
    ctaGuide: 'Guía de regalos',
  },
  categories: {
    h2: 'Tres formas de regalar Laponia',
    sub: 'Ya sea una taza de marca, una kuksa tallada a mano o un safari de auroras boreales, tenemos el regalo ártico perfecto',
    items: [
      {
        name: 'Productos #LaplandVibes',
        tag: 'Marca propia',
        description: 'Tazas, camisetas, sudaderas e impresiones en lienzo con nuestros diseños árticos característicos. Impresión bajo demanda, sin inventario, envío a todo el mundo.',
      },
      {
        name: 'Artesanía',
        tag: 'Hecho a mano',
        description: 'Cuchillos puukko forjados a mano, copas kuksa talladas, joyería sami duodji y mermeladas de bayas silvestres, directo de los artesanos lapones.',
      },
      {
        name: 'Experiencias y tarjetas de regalo',
        tag: 'Ideas de regalo',
        description: 'Safaris de auroras boreales, paseos en trineo de renos, noches en cabañas acogedoras y nuestras Lapland Trip Boxes seleccionadas, regale un momento ártico inolvidable.',
      },
    ],
  },
  valueProp: {
    h2: 'Encárguelos en vacaciones. Encuéntrelos en casa.',
    sub: 'Olvídese de meter recuerdos frágiles en la maleta. Compre durante su viaje y nosotros nos encargamos del resto.',
    steps: [
      { title: 'Explore en vacaciones', description: '¿Le encantó un cuchillo puukko? ¿Una kuksa para su madre? Encárguelo mientras viaja, no necesita cargar con nada.' },
      { title: 'Enviamos desde Laponia', description: 'Sus regalos se embalan con cuidado y se envían directamente desde artesanos finlandeses y nuestros socios de impresión en la UE.' },
      { title: 'Le esperan en casa', description: 'Vuelve a casa y sus tesoros lapones ya están en la puerta. Sin estrés de equipaje, sin recuerdos rotos.' },
    ],
  },
  productGrid: {
    h2: 'Próximamente',
    sub: 'Nuestra primera colección está siendo cuidadosamente seleccionada entre los mejores artesanos de la Laponia finlandesa. Suscríbase al boletín para ser de los primeros en saberlo.',
    priceTbd: 'Precio por confirmar',
    notifyMe: 'Avísenme',
    notifyAria: (name) => `Avíseme cuando ${name} esté disponible`,
    products: [
      { name: 'Taza Aurora', category: 'merch' },
      { name: 'Taza Reno', category: 'merch' },
      { name: 'Camiseta Aurora', category: 'merch' },
      { name: 'Sudadera Ártica', category: 'merch' },
      { name: 'Póster de Laponia', category: 'merch' },
      { name: 'Gorro de lana', category: 'merch' },
      { name: 'Cuchillo Puukko', category: 'artisan' },
      { name: 'Copa Kuksa', category: 'artisan' },
      { name: 'Pulsera sami', category: 'artisan' },
      { name: 'Set de mermelada de bayas', category: 'artisan' },
      { name: 'Portavelas de asta', category: 'artisan' },
      { name: 'Manta de lana', category: 'artisan' },
    ],
    catMerch: 'producto de marca',
    catArtisan: 'artesanía',
  },
  giftGuide: {
    h2: 'Guía de regalos',
    sub: '¿No sabe qué elegir? Le ayudamos a encontrar el regalo perfecto para cada ocasión',
    suggested: 'Regalos sugeridos',
    occasions: [
      {
        name: 'Navidad',
        description: 'Nada dice Navidad como un regalo desde la tierra de Papá Noel. Elija entre nuestras selecciones navideñas cuidadosamente preparadas.',
        suggestions: ['Cesta de regalo "Lapland Luxury"', 'Manta de lana de Laponia', 'Set de mermelada de mora ártica', 'Zapatillas de fieltro'],
      },
      {
        name: 'Boda',
        description: 'Celebre el amor con piezas artesanales atemporales que la pareja atesorará durante años.',
        suggestions: ['Colgante con motivo de aurora', 'Copa de kuksa de madera (par)', 'Cartera de cuero de reno', 'Cesta de corteza de abedul'],
      },
      {
        name: 'Cumpleaños',
        description: 'Sorprenda a alguien especial con un regalo único que no encontrará en una tienda corriente.',
        suggestions: ['Pulsera sami duodji', 'Cuchillo puukko', 'Cesta de regalo "Arctic Taste"', 'Portavelas de asta de reno'],
      },
      {
        name: 'Empresa',
        description: 'Impresione a clientes y socios con regalos árticos de calidad que destacan entre los regalos corporativos habituales.',
        suggestions: ['Cuchillo puukko (grabado)', 'Cesta de regalo "Lapland Luxury"', 'Copa de kuksa de madera', 'Colgante con motivo de aurora'],
      },
    ],
  },
  guides: {
    kicker: 'Guías gratuitas',
    h2: 'Guías árticas',
    sub: 'Todo lo que sabemos sobre Laponia, recopilado en dos guías gratuitas. Deje su correo electrónico abajo y descárguelas al instante.',
    guides: [
      {
        title: 'El oficio secreto',
        subtitle: 'Una guía de iniciado a la auténtica artesanía lapona',
        description: 'Aprenda a distinguir los cuchillos puukko hechos a mano de las imitaciones de fábrica, comprenda el significado cultural del duodji sami, descubra las temporadas de bayas silvestres y domine las 5 reglas de oro para comprar artesanía lapona genuina.',
        topics: ['Cuchillos puukko', 'Copas kuksa', 'Sami duodji', 'Bayas silvestres', 'Reglas del comprador'],
        pages: 9,
      },
      {
        title: '7 días de magia en Laponia',
        subtitle: 'El único itinerario que necesitará',
        description: 'Una ruta completa día a día desde Rovaniemi hasta Inari y de vuelta. Incluye consejos para ver auroras boreales, safaris de huskys, cruceros rompehielos, planificador de presupuesto realista y una lista de equipaje ártica completa.',
        topics: ['Itinerario de 7 días', 'Planificador de presupuesto', 'Lista de equipaje', 'Guía estacional', 'Consejos locales'],
        pages: 13,
      },
    ],
    pagesPdf: (pages) => `${pages} páginas · PDF`,
    cta: 'Introduzca su correo para recibir ambas guías gratis',
  },
  newsletter: {
    kicker: 'Reciba ambas guías gratis',
    h2: 'Introduzca su correo para descargarlas',
    body: 'Acceso inmediato a ambas guías árticas y notificaciones anticipadas cuando lleguen nuevos productos y artesanías a la tienda.',
    placeholder: 'su@correo.com',
    submit: 'Recibir ambas guías',
    submitting: 'Enviando…',
    successHeading: '¡Sus guías están listas!',
    successFootnote: 'Bienvenido/a a la familia ártica. ¡Revise también su bandeja de entrada!',
    btnSecret: 'El oficio secreto',
    btnSeven: '7 días de magia',
    errorMsg: 'Algo salió mal. Por favor, inténtelo de nuevo.',
    spamNote: 'Sin spam, nunca. Cancele la suscripción cuando quiera.',
  },
  shipping: {
    h2: 'Nuestros compromisos',
    sub: 'Lo que puede esperar cuando compra en LaplandGifts',
    items: [
      { title: 'Directo desde Laponia', description: 'Cada producto se envía desde Finlandia o desde nuestros socios de impresión en la UE. Sin intermediarios, sin almacenes misteriosos.' },
      { title: 'Garantía de autenticidad', description: 'Los productos artesanales vienen con certificado de origen. La artesanía sami se obtiene solo a través de vendedores autorizados.' },
      { title: 'Embalaje listo para regalar', description: 'Cada pedido se envuelve con cuidado en embalaje reciclable inspirado en la naturaleza ártica. Añada un mensaje personal en el pago.' },
      { title: 'Apoyamos a los artesanos', description: 'Una parte de la venta de cada producto artesanal vuelve directamente al artesano y a su comunidad.' },
    ],
  },
  faq: {
    kicker: 'Bueno saberlo',
    h2: 'Regalos de Laponia, sus preguntas',
    sub: 'Qué llevarse a casa, cómo comprar de forma ética y qué se envía realmente a otros países.',
    items: [
      {
        q: '¿Cuáles son los recuerdos auténticos para comprar en Laponia?',
        a: 'Los recuerdos más genuinos de Laponia están hechos por manos locales: un puukko (cuchillo de cinturón tradicional finlandés), una kuksa (taza tallada de un nudo de abedul), artículos de cuero de reno, textiles de lana y alimentos silvestres como mermelada de mora ártica, confitura de arándano rojo y productos de savia de abedul. La artesanía sami duodji, joyería de plata, trabajos en asta y bandas tejidas, es la más valorada. Busque el nombre del artesano o un certificado de origen en lugar de productos en serie de las tiendas del aeropuerto.',
      },
      {
        q: '¿Puedo comprar artesanía sami de forma ética y qué es la marca Sámi Duodji?',
        a: 'Sí. Duodji es la palabra sami para la artesanía tradicional, y la marca registrada circular «Sámi Duodji» es un sello de autenticidad que se concede a las piezas hechas por artesanos sami con métodos y materiales tradicionales. Elegir artículos con esa marca o comprar directamente a un artesano sami identificado o a un vendedor autorizado, garantiza que el dinero apoya a la comunidad y que la pieza es genuina, no una imitación de fábrica de los diseños sami. Nosotros adquirimos la artesanía sami solo a través de vendedores autorizados.',
      },
      {
        q: '¿Las tiendas de Laponia envían regalos al extranjero?',
        a: 'Muchas sí. Nuestros propios productos #LaplandVibes son de impresión bajo demanda y se envían a todo el mundo desde socios de producción de la UE. Las piezas artesanales se envían desde Finlandia; el plazo y el coste dependen de su país y del transportista. La ventaja práctica de comprar en línea durante el viaje es que no tiene que meter artículos frágiles en el equipaje: viajan por separado y le esperan en casa.',
      },
      {
        q: '¿Qué llevarse a casa desde Rovaniemi?',
        a: 'Rovaniemi está en el círculo polar ártico y es la puerta de entrada a la Laponia finlandesa, así que es un buen lugar para comprar. Las opciones populares son una kuksa, un cuchillo puukko, accesorios de cuero de reno, calcetines y gorros de lana, artículos de los Mumin y de Papá Noel, y alimentos árticos como mermelada de mora ártica, salmiakki (regaliz salado) y sirope de savia de abedul. Para algo con procedencia, elija una pieza firmada por su autor en lugar de un recuerdo genérico de «Laponia».',
      },
      {
        q: '¿Es legal llevarse productos de reno y de asta?',
        a: 'El reno (Rangifer tarandus) no es una especie en peligro ni figura en CITES, por lo que los artículos de asta caída de forma natural o de subproductos, asta, cuero y lana, suelen estar permitidos como recuerdos personales dentro de la UE y hacia la mayoría de los países. Las normas varían según el destino, sobre todo con materiales animales sin tratar, así que consulte las normas de aduanas e importación de su país antes de viajar. En caso de duda, el cuero tratado, la lana y los artículos de madera son los más seguros de llevar.',
      },
      {
        q: '¿Con cuánta antelación debo pedir regalos de Navidad desde Laponia?',
        a: 'Para una entrega en diciembre, haga el pedido bastante antes de las fechas límite de los transportistas a mediados de diciembre: el envío internacional se ralentiza en las semanas previas a la Navidad y las piezas artesanales se elaboran en lotes pequeños. Si visita Laponia en otoño o a principios del invierno, pedir durante el viaje es la forma más fácil de tener los regalos en casa a tiempo. Suscríbase al boletín y le avisaremos de las fechas límite de temporada.',
      },
    ],
  },
  related: {
    kicker: 'Adónde ir ahora',
    h2: 'Planifique el resto de su viaje a Laponia',
    sub: 'Parte de la red LaplandVibes, siga explorando con nuestros sitios hermanos.',
    items: [
      { label: 'Navidad en Laponia y Papá Noel', blurb: 'Pueblo de Papá Noel, escapadas navideñas y consejos de temporada.', href: 'https://laplandchristmas.com/santa-village/' },
      { label: 'Productos hechos en Laponia', blurb: 'Una tienda más amplia de productos laponos y diseño ártico.', href: 'https://laplandstore.fi' },
      { label: 'Planifique su viaje a Laponia', blurb: 'Destinos, estaciones y consejos prácticos para la Laponia finlandesa.', href: 'https://laplandvisit.com/itineraries/' },
    ],
  },
  footer: {
    pillars: [
      { name: 'Categorías', href: '/#categories' },
      { name: 'Productos destacados', href: '/#products' },
      { name: 'Guía de regalos', href: '/#gift-guide' },
      { name: 'Guías gratuitas', href: '/#guides' },
      { name: 'LaplandStays', href: 'https://laplandstays.com' },
      { name: 'LaplandActivities', href: 'https://laplandactivities.online' },
    ],
    editorialNote: 'Mantenido de forma independiente por Lapeso Oy en la Laponia finlandesa · última revisión en mayo de 2026 · colaboramos directamente con artesanos y tiendas seleccionados, con total transparencia en cada página de producto.',
    extraLegalUnsub: 'Cancelar suscripción',
  },
  notFound: {
    h1: 'Página no encontrada',
    body: 'Esta página no existe. Quizá las auroras boreales se la llevaron a otra parte.',
    back: 'Volver al inicio',
  },
  unsubscribe: {
    title: 'Cancelar suscripción | LaplandGifts',
    h1: 'Cancelar suscripción',
    body: 'Introduzca su dirección de correo electrónico para darse de baja de nuestro boletín.',
    successH1: 'Suscripción cancelada',
    successBody: 'Ya no recibirá más correos nuestros. Lamentamos que se vaya.',
    submit: 'Cancelar suscripción',
    submitting: 'Cancelando…',
    backHome: 'Volver al inicio',
    errorMsg: 'Algo salió mal. Inténtelo de nuevo o escriba a info@laplandvibes.com',
  },
  legal: {
    backHome: 'Volver al inicio',
  },
}

// ---------- PT-BR (Português brasileiro, tratamento "você") ----------

export default es
