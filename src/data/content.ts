import { ca } from './ca'
import { en } from './en'
import { es } from './es'
import type { Locale, SiteContent } from './types'

export const localeOptions: { code: Locale; label: string; name: string }[] = [
  { code: 'es', label: 'ES', name: 'Castellano' },
  { code: 'ca', label: 'CA', name: 'Català' },
  { code: 'en', label: 'EN', name: 'English' },
]

export const defaultLocale: Locale = 'es'

export const content: Record<Locale, SiteContent> = { es, ca, en }

export type {
  ExploreCard,
  Job,
  LanguageLevel,
  Locale,
  Pair,
  ProjectCopy,
  SiteContent,
  SkillGroup,
  Stat,
  Study,
} from './types'
