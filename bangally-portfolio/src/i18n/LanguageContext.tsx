import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

import { content, defaultLocale, type Locale, type SiteContent } from '../data/content'

const STORAGE_KEY = 'portfolio-locale'

const isLocale = (value: string | null): value is Locale => value === 'es' || value === 'ca' || value === 'en'

interface LanguageValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: SiteContent
}

const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === 'undefined') return defaultLocale
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isLocale(stored) ? stored : defaultLocale
  })

  const t = content[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [locale, t])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useI18n must be used inside LanguageProvider')
  return value
}
