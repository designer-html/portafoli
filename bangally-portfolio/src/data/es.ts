import type { SiteContent } from './types'

export const es: SiteContent = {
  meta: {
    title: 'Bangally — Estudiante de ASIX · Sistemas y redes',
    description:
      'Portafolio de Bangally, estudiante de ASIX en el Institut Sa Palomera: currículum, proyectos de sistemas y redes, y certificados.',
  },
  nav: {
    home: 'Inicio',
    cv: 'Currículum',
    projects: 'Proyectos',
    certificates: 'Certificados',
    ipop: 'IPOP',
    contact: 'Contacto',
  },
  ui: {
    menu: 'Menú',
    close: 'Cerrar',
    language: 'Idioma',
    viewProject: 'Ver proyecto',
    viewAll: 'Ver todos',
    back: 'Volver',
    next: 'Siguiente proyecto',
    scroll: 'Desliza',
    available: 'Disponible para prácticas',
    unavailable: 'Agenda completa',
  },
  hero: {
    eyebrow: 'Portafolio 2026 · ASIX',
    role: 'Estudiante de ASIX (2º curso)',
    intro:
      'Segundo curso del ciclo de Administración de Sistemas Informáticos en Red. Monto laboratorios, los rompo y documento cómo los arreglo: redes, Linux, virtualización y algo de desarrollo web.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Ver currículum',
    stats: [
      { value: '2º', label: 'curso de ASIX' },
      { value: '6', label: 'certificados' },
      { value: '6', label: 'proyectos documentados' },
      { value: '24/7', label: 'homelab en marcha' },
    ],
    marquee: ['Windows Server', 'Docker', 'Zabbix', 'Proxmox', 'Linux', 'pfSense', 'Samba', 'Active Directory', 'VLAN', 'Bash'],
  },
  home: {
    exploreTitle: 'Tres formas de conocerme',
    exploreAside: 'Cada sección tiene su propia página y su propio enlace.',
    explore: [
      {
        index: '01',
        title: 'Currículum',
        body: 'Formación, prácticas y las herramientas con las que trabajo cada día.',
        cta: 'Abrir currículum',
        to: '/curriculum',
      },
      {
        index: '02',
        title: 'Proyectos',
        body: 'Aulas en red, servidores y despliegues, con su documentación.',
        cta: 'Ver proyectos',
        to: '/projects',
      },
      {
        index: '03',
        title: 'Certificados',
        body: 'Credenciales de Cisco, Google, Microsoft y LPI, con su identificador.',
        cta: 'Ver certificados',
        to: '/certificates',
      },
    ],
    featuredTitle: 'Trabajo reciente',
    featuredAside: 'Proyectos del ciclo y del laboratorio de casa.',
    nowTitle: 'Ahora mismo',
    now: [
      { label: 'Estudiando', value: 'ASIX · 2º curso' },
      { label: 'Preparando', value: 'CCNA 200-301' },
      { label: 'Buscando', value: 'Prácticas de sistemas' },
      { label: 'Base', value: 'Blanes' },
    ],
  },
  cv: {
    title: 'Currículum',
    aside: 'Formación, prácticas y herramientas. Descarga el PDF o escríbeme y te lo envío.',
    download: 'Descargar CV en PDF',
    downloadHint: 'Se abrirá el diálogo de impresión: elige «Guardar como PDF».',
    photoHint: 'Añade tu foto en public/images/foto.jpg y aparecerá aquí.',
    profileTitle: 'Perfil',
    profile:
      'Estudiante de ASIX con base de sistemas y redes, y práctica diaria en un laboratorio propio. Me gusta documentar lo que hago, automatizar lo repetitivo y trabajar en equipo con gente que pregunta por qué. Busco prácticas para cerrar el ciclo y empezar en soporte o administración de sistemas.',
    experienceTitle: 'Experiencia',
    experience: [
      {
        period: '2025 — ahora',
        role: 'Técnico de soporte (prácticas)',
        company: 'Servicios IT municipales',
        location: 'Blanes',
        bullets: [
          'Soporte de primer y segundo nivel a más de 100 puestos entre Windows y Linux.',
          'Documenté el inventario y el procedimiento de altas de usuario en la intranet del departamento.',
        ],
      },
      {
        period: '2024 — ahora',
        role: 'Administrador de laboratorio propio',
        company: 'Homelab personal',
        location: 'Remoto',
        bullets: [
          'Proxmox con ocho VM: DNS, DHCP, Samba, Nginx y Zabbix sobre Debian.',
          'Copias automáticas con verificación y alertas en Telegram cuando algo se cae.',
        ],
      },
      {
        period: '2023 — 2024',
        role: 'Montaje y reparación de equipos',
        company: 'Por cuenta propia',
        location: 'Blanes',
        bullets: [
          'Montaje, diagnóstico y reparación de equipos para particulares y pequeñas tiendas.',
          'Instalación de redes domésticas y configuración de routers y repetidores.',
        ],
      },
    ],
    educationTitle: 'Formación',
    education: [
      {
        period: '2024 — 2026',
        degree: 'CFGS Administración de Sistemas Informáticos en Red (ASIX)',
        school: 'Institut Sa Palomera (Blanes)',
        detail: 'Redes, servicios, seguridad y virtualización. Actualmente en segundo curso.',
      },
      {
        period: '2022 — 2024',
        degree: 'CFGM Sistemas Microinformáticos y Redes (SMX)',
        school: 'Institut Sa Palomera (Blanes)',
        detail: 'Hardware, sistemas operativos y redes locales, con prácticas de taller incluidas.',
      },
    ],
    skillsTitle: 'Herramientas',
    skills: [
      { group: 'Sistemas', items: ['Debian / Ubuntu', 'Windows Server', 'Active Directory', 'Samba'] },
      { group: 'Redes', items: ['VLAN', 'Enrutamiento', 'pfSense', 'DHCP / DNS'] },
      { group: 'Virtualización', items: ['Proxmox', 'VMware', 'Docker Compose'] },
      { group: 'Scripting y web', items: ['Bash', 'PowerShell', 'Python', 'HTML / CSS', 'React'] },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Català', level: 'Nativo' },
      { name: 'English', level: 'B2 · técnico' },
    ],
  },
  projectsPage: {
    title: 'Proyectos',
    aside: 'Seis trabajos de sistemas, redes y web, contados con lo que hice y lo que aprendí.',
    labels: {
      client: 'Contexto',
      year: 'Año',
      role: 'Rol',
      stack: 'Stack',
      deliverables: 'Entregado',
      visit: 'Visitar el sitio',
      code: 'Ver código',
    },
  },
  projects: {
    homelab: {
      title: 'Homelab Proxmox',
      client: 'Proyecto personal',
      category: 'Sistemas y virtualización',
      summary:
        'Un laboratorio en casa con ocho máquinas virtuales que sirven DNS, archivos y monitorización las 24 horas.',
      role: ['Diseño de red', 'Administración de sistemas', 'Monitorización'],
      deliverables: ['Ocho VM en Proxmox', 'Zabbix con alertas', 'Copias automáticas'],
      body: [
        'Todo empezó con un mini PC de segunda mano y la manía de no querer romper el portátil con el que estudio. Hoy el homelab tiene ocho máquinas virtuales sobre Proxmox: Pi-hole para DNS, Samba para archivos, un contenedor de Nginx y un Zabbix que vigila todo lo demás.',
        'La parte que más me enseñó fue la red: separé gestión, servicios e invitados en tres VLANs y documenté cada regla del cortafuegos. Cuando algo falla, sé dónde mirar, y eso vale más que aprobar el módulo.',
      ],
    },
    'lan-pyme': {
      title: 'Red para un aula',
      client: 'Proyecto de clase · Sa Palomera',
      category: 'Planificación y administración de redes',
      summary:
        'Diseño e implantación de la red de un aula de 25 puestos: VLANs, pfSense, WiFi separada y documentación.',
      role: ['Diseño de red', 'Configuración de pfSense', 'Cableado'],
      deliverables: ['Plan de direccionamiento', 'pfSense con reglas', 'Manual de la red'],
      body: [
        'El encargo salió del módulo de planificación y administración de redes: un aula de dos plantas, 25 puestos, impresoras de red y visitas constantes. Empecé por el plano y el plan de direccionamiento, que es donde se ganan o se pierden estas prácticas.',
        'El resultado son cuatro VLANs, un pfSense con reglas por grupo y una red de invitados aislada. Documenté el montaje con fotos y capturas para que cualquiera pueda repetirlo sin mí.',
      ],
    },
    windows: {
      title: 'Dominio con Windows Server',
      client: 'Proyecto de clase · Sa Palomera',
      category: 'Sistemas operativos en red',
      summary:
        'Un dominio Active Directory para un aula de 20 equipos: usuarios, grupos, perfiles móviles y políticas de grupo.',
      role: ['Windows Server', 'Active Directory', 'GPO'],
      deliverables: ['Dominio y unidades organizativas', 'Perfiles móviles', 'Políticas de grupo'],
      body: [
        'Montamos un controlador de dominio en Windows Server para un aula entera: unidades organizativas por grupo, usuarios con perfiles móviles y permisos sobre carpetas compartidas. La parte difícil no fue instalarlo, sino dejar claro quién puede tocar qué.',
        'Cerré el proyecto con una batería de políticas de grupo: fondo corporativo, unidad de red mapeada, bloqueo del panel de control y un escritorio limpio en cada inicio de sesión.',
      ],
    },
    samba: {
      title: 'Servidor de archivos e impresión',
      client: 'Proyecto de clase · Sa Palomera',
      category: 'Servicios de red',
      summary: 'Almacenamiento centralizado y cola de impresión con cuotas, permisos por grupo y copias diarias verificadas.',
      role: ['Administración de Linux', 'Permisos', 'Impresión'],
      deliverables: ['Samba con cuotas', 'CUPS para impresoras', 'Script de copias'],
      body: [
        'Un servidor Debian con Samba y CUPS, tres grupos de aula y la norma de que nadie puede ver las carpetas de los demás. Los permisos se resuelven con grupos de sistema y máscaras bien puestas, no con parches a mano.',
        'Para las copias monté RAID 1 y un script con Borg que corre cada noche y manda un resumen a Telegram. Lo probamos restaurando una carpeta borrada a propósito: tardó once minutos.',
      ],
    },
    'docker-stack': {
      title: 'Despliegue de servicios con Docker',
      client: 'Proyecto personal',
      category: 'Servicios en red',
      summary:
        'Nextcloud, Gitea, Zabbix y un proxy inverso con certificados automáticos, todo en un compose reproducible.',
      role: ['Contenedores', 'Proxy inverso', 'Certificados'],
      deliverables: ['docker-compose.yml', 'HTTPS automático', 'Guía de despliegue'],
      body: [
        'Quería dejar de instalar servicios a mano en el servidor de casa. Pasé Nextcloud, Gitea y el proxy a un docker-compose con volúmenes nombrados, de forma que reconstruir todo desde cero sea un comando.',
        "Traefik se encarga del HTTPS y de los certificados de Let's Encrypt, y las copias van a un disco aparte. Lo que más uso del proyecto es la guía: la escribí precisamente para poder olvidarme de cómo funciona.",
      ],
    },
    portfolio: {
      title: 'Este portafolio',
      client: 'Proyecto personal',
      category: 'Desarrollo web',
      summary: 'Un sitio trilingüe con tema oscuro, animaciones y cada sección en su propia página.',
      role: ['Diseño de interfaz', 'Frontend', 'Despliegue'],
      deliverables: ['Diseño responsive', 'ES · CA · EN', 'Deploy en Cloudflare'],
      body: [
        'Este sitio es también un ejercicio: React con Vite, TypeScript y Motion, sin plantilla de por medio. El reto era que tres idiomas no se notaran como tres webs distintas.',
        'Los textos viven en un diccionario tipado, el idioma se guarda en el navegador y las páginas comparten animaciones. En móvil todo se reduce a una columna sin perder el menú.',
      ],
    },
  },
  certificatesPage: {
    title: 'Certificados',
    aside: 'Seis credenciales verificables, con su identificador público.',
    verify: 'Ver credencial',
  },
  ipop: {
    title: 'Informe IPOP',
    aside:
      'Currículum competencial, proyección profesional y plan de promoción personal, tal como pide el informe de orientación del ciclo.',
    intro:
      'Este informe reúne los tres apartados que pide el IPOP del Institut Sa Palomera: quién soy profesionalmente, hacia dónde quiero ir y cómo pienso conseguirlo.',
    tasksLabel: 'Tareas',
    competencesLabel: 'Competencias',
    cv: {
      title: '1. Currículum competencial',
      body:
        'Formación en ASIX, prácticas de soporte y un laboratorio propio donde practico cada semana. Las competencias que más he trabajado son la administración de sistemas Linux y Windows, las redes locales y la documentación técnica.',
      cta: 'Ver el currículum completo',
    },
    projectionTitle: '2. Proyección profesional',
    projectionIntro:
      'Quiero orientar mi carrera a la administración de sistemas con atención especial a la ciberseguridad, en empresas de servicios IT de la comarca y de Barcelona.',
    specialization: {
      label: '2.a',
      title: 'Especialización: administración de sistemas y ciberseguridad',
      body:
        'El puesto al que apunto es el de técnico o administrador de sistemas junior, con responsabilidad creciente en seguridad: mantener servidores y redes, desplegar servicios y asegurarlos.',
      tasks: [
        'Administrar servidores Linux y Windows Server',
        'Gestionar redes, VLANs y cortafuegos',
        'Desplegar y mantener servicios (DNS, DHCP, archivos, web)',
        'Monitorizar con Zabbix y resolver incidencias',
        'Aplicar copias de seguridad y planes de recuperación',
        'Revisar permisos, parches y buenas prácticas de seguridad',
      ],
      competences: [
        'Diagnóstico metódico',
        'Documentación clara',
        'Automatización con scripts',
        'Trabajo en equipo',
        'Inglés técnico',
      ],
    },
    companies: {
      label: '2.b',
      title: 'Empresas objetivo',
      body: 'Busco organizaciones donde se valore la base técnica y se pueda aprender de alguien con experiencia.',
      items: [
        {
          name: 'Proveedores de servicios IT (MSP)',
          detail: 'Entre 10 y 50 personas, atienden a pymes: mucha variedad técnica y contacto directo con clientes.',
        },
        {
          name: 'Departamentos de informática públicos',
          detail: 'Ayuntamientos, consejos comarcales y hospitales: procesos estables, documentación exigente y concursos.',
        },
        {
          name: 'Consultoras de cloud y ciberseguridad',
          detail: 'Proyectos por cliente, certificaciones valoradas y posibilidad de teletrabajo parcial.',
        },
      ],
    },
    training: {
      label: '2.c',
      title: 'Itinerario formativo complementario',
      body: 'El título me da la base; estas formaciones me acercan al perfil que buscan las empresas.',
      items: [
        {
          period: '2026 — 2027',
          task: 'CCNA 200-301',
          detail: 'Redes: enrutamiento, switching y seguridad básica. Es la certificación más pedida en las ofertas junior.',
        },
        {
          period: '2027',
          task: 'LPIC-1 y AZ-104',
          detail: 'Linux profesional y administración de Azure, para cubrir los dos entornos que veo en las ofertas.',
        },
        {
          period: '2027 — 2028',
          task: 'CompTIA Security+',
          detail: 'Fundamentos de seguridad, análisis de riesgos y respuesta ante incidentes.',
        },
        {
          period: 'Continuo',
          task: 'Inglés técnico B2-C1',
          detail: 'Documentación, reuniones y soporte en entornos internacionales.',
        },
      ],
    },
    promotionTitle: '3. Plan de promoción personal',
    promotionIntro: 'Cómo doy a conocer mi perfil y cómo organizo la búsqueda de prácticas y del primer empleo.',
    strategies: [
      {
        title: 'Difusión del currículum',
        body: 'Tener una presencia propia y coherente en los canales donde miran las empresas.',
        items: [
          'Portafolio web con URL propia y versión en tres idiomas',
          'CV en PDF actualizado para cada candidatura',
          'LinkedIn con el mismo titular y las mismas fechas',
          'GitHub con los proyectos documentados',
        ],
      },
      {
        title: 'Búsqueda de empleo',
        body: 'Combinar los canales del instituto con la búsqueda directa.',
        items: [
          'Xaloc y bolsa del Institut Sa Palomera',
          'InfoJobs, Feina Activa y LinkedIn',
          'Webs de ayuntamientos y empresas de la comarca',
          'Candidatura espontánea a MSP y consultoras',
        ],
      },
      {
        title: 'Cómo me vendo',
        body: 'Explicar en dos minutos qué sé hacer y qué puedo aportar desde el primer día.',
        items: [
          'Presentación breve con tres proyectos concretos',
          'Carta adaptada a cada empresa',
          'Práctica de entrevistas con compañeros',
          'Preguntas preparadas sobre el equipo y el plan de formación',
        ],
      },
    ],
    planTitle: 'Cronograma de actuación',
    plan: [
      {
        period: 'Semanas 1-2',
        task: 'Cerrar el portafolio y el CV',
        detail: 'Foto, datos de contacto, PDF descargable y revisión de los textos en los tres idiomas.',
      },
      {
        period: 'Semanas 3-4',
        task: 'Preparar perfiles y primeras candidaturas',
        detail: 'LinkedIn y GitHub al día; diez candidaturas y tres contactos directos.',
      },
      {
        period: 'Mes 2',
        task: 'Prácticas y red de contactos',
        detail: 'Aprovechar la FCT para pedir referencias y visitar dos empresas de la comarca.',
      },
      {
        period: 'Mes 3',
        task: 'Seguimiento y entrevistas',
        detail: 'Revisar respuestas, ajustar el CV a cada oferta y preparar las entrevistas.',
      },
      {
        period: 'Mes 6',
        task: 'Revisión del plan',
        detail: 'Valorar formación nueva, actualizar proyectos y decidir el siguiente paso.',
      },
    ],
  },
  contact: {
    kicker: 'Contacto',
    titleA: '¿Buscas a alguien',
    titleAccent: 'para tu equipo?',
    available: 'Disponible para prácticas este curso',
    unavailable: 'Sin hueco ahora mismo',
    name: 'Tu nombre',
    email: 'tu@email.com',
    message: 'Cuéntame el puesto o el proyecto',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    thanksTitle: 'Gracias',
    thanksBody: 'Te respondo en menos de dos días, normalmente antes.',
    errors: {
      invalid_email: 'Escribe un correo electrónico válido.',
      empty_message: 'Cuéntame algo en el mensaje.',
      generic: 'Algo ha ido mal. Inténtalo de nuevo.',
    },
  },
  footer: {
    tagline: 'Sistemas, redes y ganas de aprender.',
    rights: 'Hecho con React y demasiado café',
  },
}
