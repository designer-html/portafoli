import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

import { profile } from '../../data/profile'
import { useI18n } from '../../i18n/LanguageContext'
import { cx } from '../lib/cx'
import { LanguageSwitcher } from './LanguageSwitcher'

const ease = [0.22, 1, 0.36, 1] as const

export function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: profile.timezone }).format(new Date()))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

function initials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function Nav() {
  const { t } = useI18n()
  const time = useLocalTime()
  const location = useLocation()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/curriculum', label: t.nav.cv, end: false },
    { to: '/projects', label: t.nav.projects, end: false },
    { to: '/certificates', label: t.nav.certificates, end: false },
    { to: '/ipop', label: t.nav.ipop, end: false },
  ]

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 16)
      setHidden(y > last && y > 180)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-40 border-b transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] print:hidden',
        scrolled || open ? 'border-line bg-bg/80 backdrop-blur-xl' : 'border-transparent bg-transparent',
        hidden && !open && '-translate-y-full',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-gradient-to-br from-accent to-accent-3 text-[12px] font-semibold text-bg">
            {initials(profile.name)}
          </span>
          <span className="truncate text-[14.5px] font-medium">{profile.name}</span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cx(
                  'rounded-full px-3.5 py-2 text-[13.5px] transition-colors',
                  isActive ? 'bg-surface-2 text-fg' : 'text-muted hover:text-fg',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a href="#contacto" className="rounded-full px-3.5 py-2 text-[13.5px] text-muted transition-colors hover:text-fg">
            {t.nav.contact}
          </a>
          <LanguageSwitcher className="ml-2" />
          <span className="ml-3 hidden text-[12.5px] tabular-nums text-faint lg:inline">
            {profile.location} {time}
          </span>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t.ui.close : t.ui.menu}
            className="grid size-10 shrink-0 place-items-center rounded-[10px] border border-line-strong bg-surface/60"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease }}
            className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line bg-bg/95 px-5 pb-8 pt-3 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cx(
                        'flex items-center justify-between border-b border-line py-4 font-display text-[26px]',
                        isActive ? 'text-accent' : 'text-fg',
                      )
                    }
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 text-faint" />
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 font-display text-[26px]"
                >
                  {t.nav.contact}
                  <ArrowUpRight className="size-4 text-faint" />
                </a>
              </li>
            </ul>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 flex h-12 items-center justify-center rounded-[14px] bg-gradient-to-r from-accent to-accent-3 text-[14px] font-semibold text-bg"
            >
              {profile.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
