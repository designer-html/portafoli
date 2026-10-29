// Datos que no cambian con el idioma: identidad, proyectos (metadatos) y
// certificados. Los textos traducidos viven en src/data/es.ts, ca.ts y en.ts.

export const profile = {
  name: 'Bangally',
  // Deja tu foto en public/images/foto.jpg: si el archivo no existe, el
  // currículum muestra un hueco con una silueta.
  photo: '/images/foto.jpg',
  email: 'hola@bangally.dev',
  location: 'Blanes',
  timezone: 'Europe/Madrid',
  socials: [
    { label: 'GitHub', href: 'https://github.com/designer-html' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bangally-jawara-858037448/' },
    { label: 'Email', href: 'mailto:hola@bangally.dev' },
  ],
}

export interface ProjectMeta {
  slug: string
  year: string
  cover: string
  tint: string
  size: 'large' | 'small'
  stack: string[]
  link?: string
  repo?: string
}

export const projectMeta: ProjectMeta[] = [
  {
    slug: 'homelab',
    year: '2026',
    cover: '/images/meridian.jpg',
    tint: '#0b1630',
    size: 'large',
    stack: ['Proxmox', 'Debian', 'Zabbix', 'VLAN'],
  },
  {
    slug: 'windows',
    year: '2026',
    cover: '/images/halcyon.jpg',
    tint: '#0c1b38',
    size: 'small',
    stack: ['Windows Server', 'Active Directory', 'GPO', 'DNS'],
  },
  {
    slug: 'lan-pyme',
    year: '2026',
    cover: '/images/aurora.jpg',
    tint: '#0d1b3d',
    size: 'small',
    stack: ['pfSense', 'VLAN', 'DHCP', 'WiFi'],
  },
  {
    slug: 'samba',
    year: '2025',
    cover: '/images/kite.jpg',
    tint: '#0c1732',
    size: 'small',
    stack: ['Samba', 'Debian', 'Borg', 'RAID'],
  },
  {
    slug: 'docker-stack',
    year: '2025',
    cover: '/images/nocturne.jpg',
    tint: '#111a36',
    size: 'large',
    stack: ['Docker', 'Traefik', 'Nextcloud', 'Gitea'],
  },
  {
    slug: 'portfolio',
    year: '2026',
    cover: '/images/fold.jpg',
    tint: '#0e1d3a',
    size: 'small',
    stack: ['React', 'Vite', 'TypeScript', 'Motion'],
  },
]

export const bySlug = (slug: string) => projectMeta.find((project) => project.slug === slug)

export interface Certificate {
  title: string
  issuer: string
  year: string
  credentialId: string
  skills: string[]
  link: string
}

export const certificates: Certificate[] = [
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    credentialId: 'CSCO-ITN-2451',
    skills: ['IPv4 / IPv6', 'Subnetting', 'Switching'],
    link: '#',
  },
  {
    title: 'IT Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    credentialId: 'CSCO-ITE-1180',
    skills: ['Hardware', 'Support', 'Windows'],
    link: '#',
  },
  {
    title: 'Google IT Support Professional',
    issuer: 'Google · Coursera',
    year: '2025',
    credentialId: 'GITSP-9K2L7',
    skills: ['Support', 'Networks', 'Security'],
    link: '#',
  },
  {
    title: 'Linux Essentials',
    issuer: 'Linux Professional Institute',
    year: '2025',
    credentialId: 'LPI-010-5521',
    skills: ['Linux', 'Shell', 'Permissions'],
    link: '#',
  },
  {
    title: 'Azure Fundamentals AZ-900',
    issuer: 'Microsoft',
    year: '2024',
    credentialId: 'MS-AZ900-7742',
    skills: ['Cloud', 'Azure', 'Costs'],
    link: '#',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    credentialId: 'CSCO-CYBER-4417',
    skills: ['Security', 'Threats', 'Encryption'],
    link: '#',
  },
]
