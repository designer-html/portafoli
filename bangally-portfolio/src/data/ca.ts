import type { SiteContent } from './types'

export const ca: SiteContent = {
  meta: {
    title: "Bangally — Estudiant d'ASIX · Sistemes i xarxes",
    description:
      "Portafoli de Bangally, estudiant d'ASIX a l'Institut Sa Palomera: currículum, projectes de sistemes i xarxes, i certificats.",
  },
  nav: {
    home: 'Inici',
    cv: 'Currículum',
    projects: 'Projectes',
    certificates: 'Certificats',
    ipop: 'IPOP',
    contact: 'Contacte',
  },
  ui: {
    menu: 'Menú',
    close: 'Tanca',
    language: 'Idioma',
    viewProject: 'Veure projecte',
    viewAll: 'Veure’ls tots',
    back: 'Torna',
    next: 'Següent projecte',
    scroll: 'Desplaça',
    available: 'Disponible per a pràctiques',
    unavailable: 'Agenda completa',
  },
  hero: {
    eyebrow: 'Portafoli 2026 · ASIX',
    role: "Estudiant d'ASIX (2n curs)",
    intro:
      "Segon curs del cicle d'Administració de Sistemes Informàtics en Xarxa. Munto laboratoris, els trenco i documento com els arreglo: xarxes, Linux, virtualització i una mica de desenvolupament web.",
    ctaProjects: 'Veure projectes',
    ctaCv: 'Veure currículum',
    stats: [
      { value: '2n', label: "curs d'ASIX" },
      { value: '6', label: 'certificats' },
      { value: '6', label: 'projectes documentats' },
      { value: '24/7', label: 'homelab en marxa' },
    ],
    marquee: ['Windows Server', 'Docker', 'Zabbix', 'Proxmox', 'Linux', 'pfSense', 'Samba', 'Active Directory', 'VLAN', 'Bash'],
  },
  home: {
    exploreTitle: 'Tres maneres de conèixer-me',
    exploreAside: 'Cada secció té la seva pròpia pàgina i el seu propi enllaç.',
    explore: [
      {
        index: '01',
        title: 'Currículum',
        body: 'Formació, pràctiques i les eines amb què treballo cada dia.',
        cta: 'Obrir currículum',
        to: '/curriculum',
      },
      {
        index: '02',
        title: 'Projectes',
        body: 'Aules en xarxa, servidors i desplegaments, amb la seva documentació.',
        cta: 'Veure projectes',
        to: '/projects',
      },
      {
        index: '03',
        title: 'Certificats',
        body: 'Credencials de Cisco, Google, Microsoft i LPI, amb identificador.',
        cta: 'Veure certificats',
        to: '/certificates',
      },
    ],
    featuredTitle: 'Feina recent',
    featuredAside: 'Projectes del cicle i del laboratori de casa.',
    nowTitle: 'Ara mateix',
    now: [
      { label: 'Estudiant', value: 'ASIX · 2n curs' },
      { label: 'Preparant', value: 'CCNA 200-301' },
      { label: 'Buscant', value: 'Pràctiques de sistemes' },
      { label: 'Base', value: 'Blanes' },
    ],
  },
  cv: {
    title: 'Currículum',
    aside: 'Formació, pràctiques i eines. Descarrega el PDF o escriu-me i te’l mano.',
    download: 'Descarregar CV en PDF',
    downloadHint: 'S’obrirà el diàleg d’impressió: tria «Desa com a PDF».',
    photoHint: 'Afegeix la teva foto a public/images/foto.jpg i apareixerà aquí.',
    profileTitle: 'Perfil',
    profile:
      "Estudiant d'ASIX amb base de sistemes i xarxes, i pràctica diària en un laboratori propi. M'agrada documentar el que faig, automatitzar el que es repeteix i treballar en equip amb gent que pregunta per què. Busco pràctiques per tancar el cicle i començar en suport o administració de sistemes.",
    experienceTitle: 'Experiència',
    experience: [
      {
        period: '2025 — ara',
        role: 'Tècnic de suport (pràctiques)',
        company: 'Serveis IT municipals',
        location: 'Blanes',
        bullets: [
          'Suport de primer i segon nivell a més de 100 llocs de treball entre Windows i Linux.',
          "Vaig documentar l'inventari i el procediment d'altes d'usuari a la intranet del departament.",
        ],
      },
      {
        period: '2024 — ara',
        role: 'Administrador de laboratori propi',
        company: 'Homelab personal',
        location: 'Remot',
        bullets: [
          'Proxmox amb vuit VM: DNS, DHCP, Samba, Nginx i Zabbix sobre Debian.',
          'Còpies automàtiques amb verificació i alertes a Telegram quan alguna cosa cau.',
        ],
      },
      {
        period: '2023 — 2024',
        role: "Muntatge i reparació d'equips",
        company: 'Per compte propi',
        location: 'Blanes',
        bullets: [
          "Muntatge, diagnòstic i reparació d'equips per a particulars i botigues petites.",
          'Instal·lació de xarxes domèstiques i configuració de routers i repetidors.',
        ],
      },
    ],
    educationTitle: 'Formació',
    education: [
      {
        period: '2024 — 2026',
        degree: 'CFGS Administració de Sistemes Informàtics en Xarxa (ASIX)',
        school: 'Institut Sa Palomera (Blanes)',
        detail: 'Xarxes, serveis, seguretat i virtualització. Actualment al segon curs.',
      },
      {
        period: '2022 — 2024',
        degree: 'CFGM Sistemes Microinformàtics i Xarxes (SMX)',
        school: 'Institut Sa Palomera (Blanes)',
        detail: 'Maquinari, sistemes operatius i xarxes locals, amb pràctiques de taller incloses.',
      },
    ],
    skillsTitle: 'Eines',
    skills: [
      { group: 'Sistemes', items: ['Debian / Ubuntu', 'Windows Server', 'Active Directory', 'Samba'] },
      { group: 'Xarxes', items: ['VLAN', 'Enrutament', 'pfSense', 'DHCP / DNS'] },
      { group: 'Virtualització', items: ['Proxmox', 'VMware', 'Docker Compose'] },
      { group: 'Scripting i web', items: ['Bash', 'PowerShell', 'Python', 'HTML / CSS', 'React'] },
    ],
    languagesTitle: 'Idiomes',
    languages: [
      { name: 'Català', level: 'Natiu' },
      { name: 'Castellà', level: 'Natiu' },
      { name: 'English', level: 'B2 · tècnic' },
    ],
  },
  projectsPage: {
    title: 'Projectes',
    aside: 'Sis treballs de sistemes, xarxes i web, explicats amb el que vaig fer i el que vaig aprendre.',
    labels: {
      client: 'Context',
      year: 'Any',
      role: 'Rol',
      stack: 'Stack',
      deliverables: 'Lliurat',
      visit: 'Visitar el lloc',
      code: 'Veure codi',
    },
  },
  projects: {
    homelab: {
      title: 'Homelab Proxmox',
      client: 'Projecte personal',
      category: 'Sistemes i virtualització',
      summary:
        'Un laboratori a casa amb vuit màquines virtuals que serveixen DNS, fitxers i monitoratge les 24 hores.',
      role: ['Disseny de xarxa', 'Administració de sistemes', 'Monitoratge'],
      deliverables: ['Vuit VM a Proxmox', 'Zabbix amb alertes', 'Còpies automàtiques'],
      body: [
        "Tot va començar amb un mini PC de segona mà i la dèria de no voler trencar el portàtil amb què estudio. Avui l'homelab té vuit màquines virtuals sobre Proxmox: Pi-hole per al DNS, Samba per als fitxers, un contenidor de Nginx i un Zabbix que vigila tota la resta.",
        "La part que més em va ensenyar va ser la xarxa: vaig separar gestió, serveis i convidats en tres VLANs i vaig documentar cada regla del tallafoc. Quan alguna cosa falla, sé on mirar, i això val més que aprovar el mòdul.",
      ],
    },
    'lan-pyme': {
      title: 'Xarxa per a una aula',
      client: 'Projecte de classe · Sa Palomera',
      category: 'Planificació i administració de xarxes',
      summary:
        "Disseny i implantació de la xarxa d'una aula de 25 llocs: VLANs, pfSense, WiFi separada i documentació.",
      role: ['Disseny de xarxa', 'Configuració de pfSense', 'Cablejat'],
      deliverables: ['Pla d’adreçament', 'pfSense amb regles', 'Manual de la xarxa'],
      body: [
        "L'encàrrec va sortir del mòdul de planificació i administració de xarxes: una aula de dues plantes, 25 llocs, impressores de xarxa i visites constants. Vaig començar pel plànol i el pla d'adreçament, que és on es guanyen o es perden aquestes pràctiques.",
        "El resultat són quatre VLANs, un pfSense amb regles per grup i una xarxa de convidats aïllada. Vaig documentar el muntatge amb fotos i captures perquè qualsevol ho pugui repetir sense mi.",
      ],
    },
    windows: {
      title: 'Domini amb Windows Server',
      client: 'Projecte de classe · Sa Palomera',
      category: 'Sistemes operatius en xarxa',
      summary:
        'Un domini Active Directory per a una aula de 20 equips: usuaris, grups, perfils mòbils i polítiques de grup.',
      role: ['Windows Server', 'Active Directory', 'GPO'],
      deliverables: ['Domini i unitats organitzatives', 'Perfils mòbils', 'Polítiques de grup'],
      body: [
        "Vam muntar un controlador de domini en Windows Server per a una aula sencera: unitats organitzatives per grup, usuaris amb perfils mòbils i permisos sobre carpetes compartides. La part difícil no va ser instal·lar-lo, sinó deixar clar qui pot tocar què.",
        "Vaig tancar el projecte amb una bateria de polítiques de grup: fons corporatiu, unitat de xarxa mapada, bloqueig del tauler de control i un escriptori net a cada inici de sessió.",
      ],
    },
    samba: {
      title: 'Servidor de fitxers i impressió',
      client: 'Projecte de classe · Sa Palomera',
      category: 'Serveis de xarxa',
      summary: "Emmagatzematge centralitzat i cua d'impressió amb quotes, permisos per grup i còpies diàries verificades.",
      role: ['Administració de Linux', 'Permisos', 'Impressió'],
      deliverables: ['Samba amb quotes', 'CUPS per a impressores', 'Script de còpies'],
      body: [
        "Un servidor Debian amb Samba i CUPS, tres grups d'aula i la norma que ningú no pot veure les carpetes dels altres. Els permisos es resolen amb grups de sistema i màscares ben posades, no amb pedaços a mà.",
        "Per a les còpies vaig muntar RAID 1 i un script amb Borg que corre cada nit i envia un resum a Telegram. Ho vam provar restaurant una carpeta esborrada a propòsit: va trigar onze minuts.",
      ],
    },
    'docker-stack': {
      title: 'Desplegament de serveis amb Docker',
      client: 'Projecte personal',
      category: 'Serveis en xarxa',
      summary:
        'Nextcloud, Gitea, Zabbix i un proxy invers amb certificats automàtics, tot en un compose reproduïble.',
      role: ['Contenidors', 'Proxy invers', 'Certificats'],
      deliverables: ['docker-compose.yml', 'HTTPS automàtic', 'Guia de desplegament'],
      body: [
        "Volia deixar d'instal·lar serveis a mà al servidor de casa. Vaig passar Nextcloud, Gitea i el proxy a un docker-compose amb volums nomenats, de manera que reconstruir-ho tot des de zero sigui una comanda.",
        "Traefik s'encarrega de l'HTTPS i dels certificats de Let's Encrypt, i les còpies van a un disc a part. Del projecte, el que més faig servir és la guia: la vaig escriure justament per poder-me oblidar de com funciona.",
      ],
    },
    portfolio: {
      title: 'Aquest portafoli',
      client: 'Projecte personal',
      category: 'Desenvolupament web',
      summary: 'Un lloc trilingüe amb tema fosc, animacions i cada secció en la seva pròpia pàgina.',
      role: ['Disseny d’interfície', 'Frontend', 'Desplegament'],
      deliverables: ['Disseny responsive', 'ES · CA · EN', 'Deploy a Cloudflare'],
      body: [
        "Aquest lloc també és un exercici: React amb Vite, TypeScript i Motion, sense plantilla pel mig. El repte era que tres idiomes no es notessin com tres webs diferents.",
        "Els textos viuen en un diccionari tipat, l'idioma es guarda al navegador i les pàgines comparteixen animacions. Al mòbil tot es redueix a una columna sense perdre el menú.",
      ],
    },
  },
  certificatesPage: {
    title: 'Certificats',
    aside: 'Sis credencials verificables, amb el seu identificador públic.',
    verify: 'Veure credencial',
  },
  ipop: {
    title: 'Informe IPOP',
    aside:
      "Currículum competencial, projecció professional i pla de promoció personal, tal com demana l'informe d'orientació del cicle.",
    intro:
      "Aquest informe recull els tres apartats que demana l'IPOP de l'Institut Sa Palomera: qui soc professionalment, cap a on vull anar i com ho penso aconseguir.",
    tasksLabel: 'Tasques',
    competencesLabel: 'Competències',
    cv: {
      title: '1. Currículum competencial',
      body:
        "Formació en ASIX, pràctiques de suport i un laboratori propi on practico cada setmana. Les competències que he treballat més són l'administració de sistemes Linux i Windows, les xarxes locals i la documentació tècnica.",
      cta: 'Veure el currículum complet',
    },
    projectionTitle: '2. Projecció professional',
    projectionIntro:
      "Vull orientar la meva carrera a l'administració de sistemes amb atenció especial a la ciberseguretat, en empreses de serveis IT de la comarca i de Barcelona.",
    specialization: {
      label: '2.a',
      title: 'Especialització: administració de sistemes i ciberseguretat',
      body:
        'El lloc al qual apunto és el de tècnic o administrador de sistemes júnior, amb responsabilitat creixent en seguretat: mantenir servidors i xarxes, desplegar serveis i assegurar-los.',
      tasks: [
        'Administrar servidors Linux i Windows Server',
        'Gestionar xarxes, VLANs i tallafocs',
        'Desplegar i mantenir serveis (DNS, DHCP, fitxers, web)',
        'Monitorar amb Zabbix i resoldre incidències',
        'Aplicar còpies de seguretat i plans de recuperació',
        'Revisar permisos, pedaços i bones pràctiques de seguretat',
      ],
      competences: [
        'Diagnòstic metòdic',
        'Documentació clara',
        'Automatització amb scripts',
        'Treball en equip',
        'Anglès tècnic',
      ],
    },
    companies: {
      label: '2.b',
      title: 'Empreses objectiu',
      body: "Busco organitzacions on es valori la base tècnica i es pugui aprendre d'algú amb experiència.",
      items: [
        {
          name: 'Proveïdors de serveis IT (MSP)',
          detail: 'Entre 10 i 50 persones, atenen pimes: molta varietat tècnica i contacte directe amb clients.',
        },
        {
          name: "Departaments d'informàtica públics",
          detail: 'Ajuntaments, consells comarcals i hospitals: processos estables, documentació exigent i concursos.',
        },
        {
          name: 'Consultores de cloud i ciberseguretat',
          detail: 'Projectes per client, certificacions valorades i possibilitat de teletreball parcial.',
        },
      ],
    },
    training: {
      label: '2.c',
      title: 'Itinerari formatiu complementari',
      body: 'El títol em dona la base; aquestes formacions m’acosten al perfil que busquen les empreses.',
      items: [
        {
          period: '2026 — 2027',
          task: 'CCNA 200-301',
          detail: 'Xarxes: enrutament, switching i seguretat bàsica. És la certificació més demanada a les ofertes júnior.',
        },
        {
          period: '2027',
          task: 'LPIC-1 i AZ-104',
          detail: 'Linux professional i administració d’Azure, per cobrir els dos entorns que veig a les ofertes.',
        },
        {
          period: '2027 — 2028',
          task: 'CompTIA Security+',
          detail: 'Fonaments de seguretat, anàlisi de riscos i resposta davant incidents.',
        },
        {
          period: 'Continu',
          task: 'Anglès tècnic B2-C1',
          detail: 'Documentació, reunions i suport en entorns internacionals.',
        },
      ],
    },
    promotionTitle: '3. Pla de promoció personal',
    promotionIntro: 'Com dono a conèixer el meu perfil i com organitzo la recerca de pràctiques i de primera feina.',
    strategies: [
      {
        title: 'Difusió del currículum',
        body: 'Tenir una presència pròpia i coherent als canals on miren les empreses.',
        items: [
          'Portafoli web amb URL pròpia i versió en tres idiomes',
          'CV en PDF actualitzat per a cada candidatura',
          'LinkedIn amb el mateix titular i les mateixes dates',
          'GitHub amb els projectes documentats',
        ],
      },
      {
        title: 'Recerca de feina',
        body: 'Combinar els canals de l’institut amb la recerca directa.',
        items: [
          'Xaloc i borsa de l’Institut Sa Palomera',
          'InfoJobs, Feina Activa i LinkedIn',
          'Webs d’ajuntaments i empreses de la comarca',
          'Candidatura espontània a MSP i consultores',
        ],
      },
      {
        title: 'Com em venc',
        body: 'Explicar en dos minuts què sé fer i què puc aportar des del primer dia.',
        items: [
          'Presentació breu amb tres projectes concrets',
          'Carta adaptada a cada empresa',
          'Pràctica d’entrevistes amb companys',
          'Preguntes preparades sobre l’equip i el pla de formació',
        ],
      },
    ],
    planTitle: 'Cronograma d’actuació',
    plan: [
      {
        period: 'Setmanes 1-2',
        task: 'Tancar el portafoli i el CV',
        detail: 'Foto, dades de contacte, PDF descarregable i revisió dels textos en els tres idiomes.',
      },
      {
        period: 'Setmanes 3-4',
        task: 'Preparar perfils i primeres candidatures',
        detail: 'LinkedIn i GitHub al dia; deu candidatures i tres contactes directes.',
      },
      {
        period: 'Mes 2',
        task: 'Pràctiques i xarxa de contactes',
        detail: 'Aprofitar la FCT per demanar referències i visitar dues empreses de la comarca.',
      },
      {
        period: 'Mes 3',
        task: 'Seguiment i entrevistes',
        detail: 'Revisar respostes, ajustar el CV a cada oferta i preparar les entrevistes.',
      },
      {
        period: 'Mes 6',
        task: 'Revisió del pla',
        detail: 'Valorar formació nova, actualitzar projectes i decidir el següent pas.',
      },
    ],
  },
  contact: {
    kicker: 'Contacte',
    titleA: 'Busques algú',
    titleAccent: 'per al teu equip?',
    available: 'Disponible per a pràctiques aquest curs',
    unavailable: 'Sense lloc ara mateix',
    name: 'El teu nom',
    email: 'tu@email.com',
    message: 'Explica’m el lloc o el projecte',
    send: 'Enviar missatge',
    sending: 'Enviant…',
    thanksTitle: 'Gràcies',
    thanksBody: 'Et responc en menys de dos dies, normalment abans.',
    errors: {
      invalid_email: 'Escriu un correu electrònic vàlid.',
      empty_message: 'Explica’m alguna cosa al missatge.',
      generic: 'Alguna cosa ha fallat. Torna-ho a provar.',
    },
  },
  footer: {
    tagline: 'Sistemes, xarxes i ganes d’aprendre.',
    rights: 'Fet amb React i massa cafè',
  },
}
