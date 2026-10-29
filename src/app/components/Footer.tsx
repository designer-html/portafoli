import { ArrowUpRight, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { profile } from '../../data/profile'
import { useI18n } from '../../i18n/LanguageContext'
import { Lines, Magnetic } from './motion'
import { useLocalTime } from './Nav'

type ApiError = 'invalid_email' | 'empty_message' | 'generic'

export function Footer() {
  const { t } = useI18n()
  const time = useLocalTime()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [error, setError] = useState('')

  async function submit(event: FormEvent) {
    event.preventDefault()
    setState('sending')
    setError('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setState('done')
        setForm({ name: '', email: '', message: '' })
        return
      }
      const body = (await response.json().catch(() => ({}))) as { code?: ApiError }
      setState('error')
      setError(t.contact.errors[body.code ?? 'generic'])
    } catch {
      setState('error')
      setError(t.contact.errors.generic)
    }
  }

  const field =
    'h-12 w-full rounded-[12px] border border-line bg-bg/60 px-4 text-[14px] text-fg placeholder:text-faint transition-colors focus:border-accent focus:outline-none'

  return (
    <footer id="contacto" className="relative mt-24 scroll-mt-24 border-t border-line sm:mt-32 print:hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-accent/[0.07] to-transparent" />
      <div className="relative mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <p className="text-[11.5px] uppercase tracking-[0.24em] text-faint">{t.contact.kicker}</p>
            <Lines
              as="h2"
              className="mt-4 font-display text-[clamp(34px,5.4vw,64px)]"
              lines={[t.contact.titleA, <span key="accent" className="text-accent">{t.contact.titleAccent}</span>]}
            />
            <p className="mt-5 flex items-center gap-2 text-[13.5px] text-muted">
              <span className="round size-1.5 shrink-0 rounded-full bg-accent-2" />
              {t.contact.available}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-3 px-6 text-[14px] font-semibold text-bg shadow-[0_0_30px_-10px_rgba(90,166,255,0.9)]"
                >
                  {profile.email}
                  <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center rounded-full border border-line-strong px-5 text-[13.5px] text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                {t.nav.contact}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-line pt-6 text-[13px] sm:max-w-md">
              <div>
                <p className="text-faint">{profile.location}</p>
                <p className="mt-1 tabular-nums text-muted">{time}</p>
              </div>
              <div>
                <p className="text-faint">{t.footer.tagline}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-line bg-surface/60 p-6 backdrop-blur sm:p-7">
            {state === 'done' ? (
              <div className="flex min-h-[280px] flex-col justify-center">
                <p className="font-display text-[34px] text-accent">{t.contact.thanksTitle}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{t.contact.thanksBody}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    required
                    placeholder={t.contact.name}
                    aria-label={t.contact.name}
                    className={field}
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                  />
                  <input
                    required
                    type="email"
                    placeholder={t.contact.email}
                    aria-label={t.contact.email}
                    className={field}
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                  />
                </div>
                <textarea
                  required
                  placeholder={t.contact.message}
                  aria-label={t.contact.message}
                  className={`${field} h-auto min-h-[132px] resize-none py-3.5`}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                />
                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-3 text-[14px] font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {state === 'sending' ? t.contact.sending : t.contact.send}
                  <Send className="size-4" />
                </button>
                {state === 'error' && <p className="text-[13px] text-accent-2">{error}</p>}
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5 border-t border-line pt-7 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {profile.socials.filter((social) => social.href !== '#').map((social) => (
              <li key={social.label}>
                <a href={social.href} className="link-draw text-muted transition-colors hover:text-fg">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-faint">
            © {new Date().getFullYear()} {profile.name} · {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
