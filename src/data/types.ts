export type Locale = 'es' | 'ca' | 'en'

export interface Stat {
  value: string
  label: string
}

export interface Pair {
  label: string
  value: string
}

export interface Job {
  period: string
  role: string
  company: string
  location: string
  bullets: string[]
}

export interface Study {
  period: string
  degree: string
  school: string
  detail: string
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface LanguageLevel {
  name: string
  level: string
}

export interface ProjectCopy {
  title: string
  client: string
  category: string
  summary: string
  role: string[]
  deliverables: string[]
  body: string[]
}

export interface IpopStrategy {
  title: string
  body: string
  items: string[]
}

export interface IpopPlanStep {
  period: string
  task: string
  detail: string
}

export interface ExploreCard {
  index: string
  title: string
  body: string
  cta: string
  to: string
}

export interface SiteContent {
  meta: { title: string; description: string }
  nav: { home: string; cv: string; projects: string; certificates: string; ipop: string; contact: string }
  ui: {
    menu: string
    close: string
    language: string
    viewProject: string
    viewAll: string
    back: string
    next: string
    scroll: string
    available: string
    unavailable: string
  }
  hero: {
    eyebrow: string
    role: string
    intro: string
    ctaProjects: string
    ctaCv: string
    stats: Stat[]
    marquee: string[]
  }
  home: {
    exploreTitle: string
    exploreAside: string
    explore: ExploreCard[]
    featuredTitle: string
    featuredAside: string
    nowTitle: string
    now: Pair[]
  }
  cv: {
    title: string
    aside: string
    download: string
    downloadHint: string
    photoHint: string
    profileTitle: string
    profile: string
    experienceTitle: string
    experience: Job[]
    educationTitle: string
    education: Study[]
    skillsTitle: string
    skills: SkillGroup[]
    languagesTitle: string
    languages: LanguageLevel[]
  }
  projectsPage: {
    title: string
    aside: string
    labels: {
      client: string
      year: string
      role: string
      stack: string
      deliverables: string
      visit: string
      code: string
    }
  }
  projects: Record<string, ProjectCopy>
  certificatesPage: { title: string; aside: string; verify: string }
  ipop: {
    title: string
    aside: string
    intro: string
    tasksLabel: string
    competencesLabel: string
    cv: { title: string; body: string; cta: string }
    projectionTitle: string
    projectionIntro: string
    specialization: {
      label: string
      title: string
      body: string
      tasks: string[]
      competences: string[]
    }
    companies: {
      label: string
      title: string
      body: string
      items: { name: string; detail: string }[]
    }
    training: {
      label: string
      title: string
      body: string
      items: IpopPlanStep[]
    }
    promotionTitle: string
    promotionIntro: string
    strategies: IpopStrategy[]
    planTitle: string
    plan: IpopPlanStep[]
  }
  contact: {
    kicker: string
    titleA: string
    titleAccent: string
    available: string
    unavailable: string
    name: string
    email: string
    message: string
    send: string
    sending: string
    thanksTitle: string
    thanksBody: string
    errors: { invalid_email: string; empty_message: string; generic: string }
  }
  footer: { tagline: string; rights: string }
}
