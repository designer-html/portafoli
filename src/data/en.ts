import type { SiteContent } from './types'

export const en: SiteContent = {
  meta: {
    title: 'Bangally — ASIX student · Systems and networks',
    description:
      'Portfolio of Bangally, ASIX student at Institut Sa Palomera: résumé, systems and networking projects, and certificates.',
  },
  nav: {
    home: 'Home',
    cv: 'Résumé',
    projects: 'Projects',
    certificates: 'Certificates',
    ipop: 'IPOP',
    contact: 'Contact',
  },
  ui: {
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    viewProject: 'View project',
    viewAll: 'View all',
    back: 'Back',
    next: 'Next project',
    scroll: 'Scroll',
    available: 'Available for an internship',
    unavailable: 'Fully booked',
  },
  hero: {
    eyebrow: 'Portfolio 2026 · ASIX',
    role: 'ASIX student (2nd year)',
    intro:
      'Second year of the Network and Computer Systems Administration programme. I build labs, break them and document how I fix them: networking, Linux, virtualisation and a little web development.',
    ctaProjects: 'View projects',
    ctaCv: 'View résumé',
    stats: [
      { value: '2nd', label: 'year of ASIX' },
      { value: '6', label: 'certificates' },
      { value: '6', label: 'documented projects' },
      { value: '24/7', label: 'homelab running' },
    ],
    marquee: ['Windows Server', 'Docker', 'Zabbix', 'Proxmox', 'Linux', 'pfSense', 'Samba', 'Active Directory', 'VLAN', 'Bash'],
  },
  home: {
    exploreTitle: 'Three ways to get to know me',
    exploreAside: 'Every section has its own page and its own link.',
    explore: [
      {
        index: '01',
        title: 'Résumé',
        body: 'Studies, internships and the tools I work with every day.',
        cta: 'Open résumé',
        to: '/curriculum',
      },
      {
        index: '02',
        title: 'Projects',
        body: 'Classroom networks, servers and deployments, with their documentation.',
        cta: 'View projects',
        to: '/projects',
      },
      {
        index: '03',
        title: 'Certificates',
        body: 'Credentials from Cisco, Google, Microsoft and LPI, with their IDs.',
        cta: 'View certificates',
        to: '/certificates',
      },
    ],
    featuredTitle: 'Recent work',
    featuredAside: 'Course projects and the home lab.',
    nowTitle: 'Right now',
    now: [
      { label: 'Studying', value: 'ASIX · 2nd year' },
      { label: 'Preparing', value: 'CCNA 200-301' },
      { label: 'Looking for', value: 'Systems internship' },
      { label: 'Based in', value: 'Blanes' },
    ],
  },
  cv: {
    title: 'Résumé',
    aside: 'Studies, internships and tools. Download the PDF or email me and I will send it over.',
    download: 'Download PDF résumé',
    downloadHint: 'Your print dialog will open: choose “Save as PDF”.',
    photoHint: 'Drop your photo at public/images/foto.jpg and it will show up here.',
    profileTitle: 'Profile',
    profile:
      'ASIX student with a foundation in systems and networking and daily practice in a home lab. I like documenting what I do, automating the repetitive parts and working with people who ask why. I am looking for an internship to finish the programme and start in support or systems administration.',
    experienceTitle: 'Experience',
    experience: [
      {
        period: '2025 — now',
        role: 'IT support technician (internship)',
        company: 'Municipal IT services',
        location: 'Blanes',
        bullets: [
          'First and second line support for more than 100 workstations across Windows and Linux.',
          'Documented the asset inventory and the user onboarding procedure on the department intranet.',
        ],
      },
      {
        period: '2024 — now',
        role: 'Home lab administrator',
        company: 'Personal homelab',
        location: 'Remote',
        bullets: [
          'Proxmox host with eight VMs: DNS, DHCP, Samba, Nginx and Zabbix on Debian.',
          'Automated backups with verification and Telegram alerts when something goes down.',
        ],
      },
      {
        period: '2023 — 2024',
        role: 'Computer assembly and repair',
        company: 'Self-employed',
        location: 'Blanes',
        bullets: [
          'Assembly, diagnostics and repair for individuals and small shops.',
          'Home network installs, router and repeater configuration.',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        period: '2024 — 2026',
        degree: 'Higher Diploma in Network and Computer Systems Administration (ASIX)',
        school: 'Institut Sa Palomera (Blanes)',
        detail: 'Networking, services, security and virtualisation. Currently in the second year.',
      },
      {
        period: '2022 — 2024',
        degree: 'Diploma in Microcomputer Systems and Networks (SMX)',
        school: 'Institut Sa Palomera (Blanes)',
        detail: 'Hardware, operating systems and local networks, including hands-on workshop practice.',
      },
    ],
    skillsTitle: 'Tools',
    skills: [
      { group: 'Systems', items: ['Debian / Ubuntu', 'Windows Server', 'Active Directory', 'Samba'] },
      { group: 'Networking', items: ['VLANs', 'Routing', 'pfSense', 'DHCP / DNS'] },
      { group: 'Virtualisation', items: ['Proxmox', 'VMware', 'Docker Compose'] },
      { group: 'Scripting and web', items: ['Bash', 'PowerShell', 'Python', 'HTML / CSS', 'React'] },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Catalan', level: 'Native' },
      { name: 'English', level: 'B2 · technical' },
    ],
  },
  projectsPage: {
    title: 'Projects',
    aside: 'Six systems, networking and web projects, with what I built and what I learned.',
    labels: {
      client: 'Context',
      year: 'Year',
      role: 'Role',
      stack: 'Stack',
      deliverables: 'Delivered',
      visit: 'Visit the site',
      code: 'View code',
    },
  },
  projects: {
    homelab: {
      title: 'Proxmox homelab',
      client: 'Personal project',
      category: 'Systems and virtualisation',
      summary:
        'A home lab with eight virtual machines serving DNS, files and monitoring around the clock.',
      role: ['Network design', 'Systems administration', 'Monitoring'],
      deliverables: ['Eight VMs on Proxmox', 'Zabbix with alerts', 'Automated backups'],
      body: [
        'It started with a second-hand mini PC and a refusal to break the laptop I study on. Today the homelab runs eight virtual machines on Proxmox: Pi-hole for DNS, Samba for files, an Nginx container and a Zabbix instance watching everything else.',
        'The network taught me the most: I split management, services and guests into three VLANs and documented every firewall rule. When something breaks I know where to look, and that is worth more than passing the module.',
      ],
    },
    'lan-pyme': {
      title: 'Network for a classroom',
      client: 'Class project · Sa Palomera',
      category: 'Network planning and administration',
      summary:
        'Design and rollout of the network for a 25-seat classroom: VLANs, pfSense, a separate WiFi and documentation.',
      role: ['Network design', 'pfSense configuration', 'Cabling'],
      deliverables: ['Addressing plan', 'pfSense with rules', 'Network handbook'],
      body: [
        'The brief came from the network planning and administration module: a two-floor classroom, 25 desks, network printers and constant visitors. I started with the floor plan and the addressing plan, which is where this kind of work is won or lost.',
        'The result is four VLANs, a pfSense with per-group rules and an isolated guest network. I documented the build with photos and screenshots so anyone can repeat it without me.',
      ],
    },
    windows: {
      title: 'Windows Server domain',
      client: 'Class project · Sa Palomera',
      category: 'Network operating systems',
      summary:
        'An Active Directory domain for a 20-machine classroom: users, groups, roaming profiles and group policies.',
      role: ['Windows Server', 'Active Directory', 'GPO'],
      deliverables: ['Domain and organisational units', 'Roaming profiles', 'Group policies'],
      body: [
        'We built a Windows Server domain controller for a whole classroom: organisational units per group, users with roaming profiles and permissions on shared folders. The hard part was not installing it, but making clear who can touch what.',
        'I closed the project with a set of group policies: corporate wallpaper, a mapped network drive, a locked control panel and a clean desktop at every logon.',
      ],
    },
    samba: {
      title: 'File and print server',
      client: 'Class project · Sa Palomera',
      category: 'Network services',
      summary: 'Centralised storage and a print queue with quotas, per-group permissions and verified daily backups.',
      role: ['Linux administration', 'Permissions', 'Printing'],
      deliverables: ['Samba with quotas', 'CUPS for printers', 'Backup script'],
      body: [
        'A Debian server running Samba, three departments and one rule: nobody can see anyone else\u2019s folders. Permissions are solved with system groups and correct masks, not with hand-made patches.',
        'For backups I set up RAID 1 plus a Borg script that runs every night and sends a summary to Telegram. We tested it by restoring a folder deleted on purpose: it took eleven minutes.',
      ],
    },
    'docker-stack': {
      title: 'Service deployment with Docker',
      client: 'Personal project',
      category: 'Network services',
      summary:
        'Nextcloud, Gitea, Zabbix and a reverse proxy with automatic certificates, all in a reproducible compose file.',
      role: ['Containers', 'Reverse proxy', 'Certificates'],
      deliverables: ['docker-compose.yml', 'Automatic HTTPS', 'Deployment guide'],
      body: [
        'I wanted to stop installing services by hand on the home server. Nextcloud, Gitea and the proxy moved into a docker-compose file with named volumes, so rebuilding everything from scratch is a single command.',
        'Traefik handles HTTPS and the Let\u2019s Encrypt certificates, and backups go to a separate disk. The part I use most is the guide: I wrote it precisely so I could forget how it works.',
      ],
    },
    portfolio: {
      title: 'This portfolio',
      client: 'Personal project',
      category: 'Web development',
      summary: 'A trilingual site with a dark theme, animation and every section on its own page.',
      role: ['Interface design', 'Frontend', 'Deployment'],
      deliverables: ['Responsive design', 'ES · CA · EN', 'Cloudflare deployment'],
      body: [
        'This site is an exercise too: React with Vite, TypeScript and Motion, no template involved. The challenge was making three languages feel like one site rather than three.',
        'Copy lives in a typed dictionary, the chosen language is stored in the browser and pages share animations. On mobile everything collapses to one column without losing the menu.',
      ],
    },
  },
  certificatesPage: {
    title: 'Certificates',
    aside: 'Six verifiable credentials, each with its public ID.',
    verify: 'Verify credential',
  },
  ipop: {
    title: 'IPOP report',
    aside:
      'Competence-based CV, career projection and personal promotion plan, as required by the course guidance report.',
    intro:
      'This report gathers the three sections the IPOP at Institut Sa Palomera asks for: who I am professionally, where I want to go and how I plan to get there.',
    tasksLabel: 'Tasks',
    competencesLabel: 'Competences',
    cv: {
      title: '1. Competence-based CV',
      body:
        'ASIX training, support internships and a home lab I practise in every week. The competences I have developed most are Linux and Windows systems administration, local networking and technical documentation.',
      cta: 'See the full CV',
    },
    projectionTitle: '2. Career projection',
    projectionIntro:
      'I want to build my career in systems administration with a special focus on cybersecurity, at IT service companies in the area and in Barcelona.',
    specialization: {
      label: '2.a',
      title: 'Specialisation: systems administration and cybersecurity',
      body:
        'The role I am aiming for is junior systems technician or administrator, with growing security responsibility: maintaining servers and networks, deploying services and keeping them secure.',
      tasks: [
        'Administer Linux and Windows Server machines',
        'Manage networks, VLANs and firewalls',
        'Deploy and maintain services (DNS, DHCP, files, web)',
        'Monitor with Zabbix and resolve incidents',
        'Run backups and recovery plans',
        'Review permissions, patches and security good practice',
      ],
      competences: ['Methodical troubleshooting', 'Clear documentation', 'Script automation', 'Teamwork', 'Technical English'],
    },
    companies: {
      label: '2.b',
      title: 'Target companies',
      body: 'I am looking for organisations that value technical foundations and where I can learn from someone experienced.',
      items: [
        {
          name: 'Managed service providers (MSPs)',
          detail: 'Between 10 and 50 people serving small businesses: lots of technical variety and direct client contact.',
        },
        {
          name: 'Public sector IT departments',
          detail: 'Town councils, county councils and hospitals: stable processes, demanding documentation and public hiring rounds.',
        },
        {
          name: 'Cloud and cybersecurity consultancies',
          detail: 'Client projects, valued certifications and the option of partial remote work.',
        },
      ],
    },
    training: {
      label: '2.c',
      title: 'Complementary training itinerary',
      body: 'The diploma gives me the foundation; these courses bring me closer to the profile companies look for.',
      items: [
        {
          period: '2026 — 2027',
          task: 'CCNA 200-301',
          detail: 'Networking: routing, switching and basic security. The most requested certification in junior job ads.',
        },
        {
          period: '2027',
          task: 'LPIC-1 and AZ-104',
          detail: 'Professional Linux and Azure administration, covering both environments I see in job ads.',
        },
        {
          period: '2027 — 2028',
          task: 'CompTIA Security+',
          detail: 'Security fundamentals, risk analysis and incident response.',
        },
        {
          period: 'Ongoing',
          task: 'Technical English B2-C1',
          detail: 'Documentation, meetings and support in international teams.',
        },
      ],
    },
    promotionTitle: '3. Personal promotion plan',
    promotionIntro: 'How I make my profile known and how I organise the search for an internship and a first job.',
    strategies: [
      {
        title: 'Sharing my CV',
        body: 'A consistent presence of my own on the channels companies check.',
        items: [
          'Portfolio site with its own URL in three languages',
          'PDF CV updated for every application',
          'LinkedIn with the same headline and dates',
          'GitHub with documented projects',
        ],
      },
      {
        title: 'Job search',
        body: 'Combining the school’s channels with a direct search.',
        items: [
          'Xaloc and the Institut Sa Palomera job board',
          'InfoJobs, Feina Activa and LinkedIn',
          'Websites of councils and local companies',
          'Speculative applications to MSPs and consultancies',
        ],
      },
      {
        title: 'Selling myself',
        body: 'Explaining in two minutes what I can do and what I bring from day one.',
        items: [
          'Short pitch built on three real projects',
          'Cover letter tailored to each company',
          'Interview practice with classmates',
          'Prepared questions about the team and training plan',
        ],
      },
    ],
    planTitle: 'Action timeline',
    plan: [
      {
        period: 'Weeks 1-2',
        task: 'Finish the portfolio and CV',
        detail: 'Photo, contact details, downloadable PDF and a review of the copy in all three languages.',
      },
      {
        period: 'Weeks 3-4',
        task: 'Set up profiles and first applications',
        detail: 'LinkedIn and GitHub up to date; ten applications and three direct contacts.',
      },
      {
        period: 'Month 2',
        task: 'Internship and networking',
        detail: 'Use the internship to ask for references and visit two local companies.',
      },
      {
        period: 'Month 3',
        task: 'Follow-up and interviews',
        detail: 'Review replies, tailor the CV to each offer and prepare interviews.',
      },
      {
        period: 'Month 6',
        task: 'Plan review',
        detail: 'Assess new training, update projects and decide the next step.',
      },
    ],
  },
  contact: {
    kicker: 'Contact',
    titleA: 'Looking for someone',
    titleAccent: 'for your team?',
    available: 'Available for an internship this year',
    unavailable: 'No openings right now',
    name: 'Your name',
    email: 'you@email.com',
    message: 'Tell me about the role or the project',
    send: 'Send message',
    sending: 'Sending…',
    thanksTitle: 'Thank you',
    thanksBody: 'I reply within two days, usually sooner.',
    errors: {
      invalid_email: 'Enter a valid email address.',
      empty_message: 'Tell me a few words about it.',
      generic: 'Something went wrong. Please try again.',
    },
  },
  footer: {
    tagline: 'Systems, networks and a lot of curiosity.',
    rights: 'Built with React and too much coffee',
  },
}
