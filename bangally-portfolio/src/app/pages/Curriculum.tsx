import { ArrowUpRight, Camera, Download, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

import { profile } from '../../data/profile'
import { useI18n } from '../../i18n/LanguageContext'
import { PageHeader } from '../components/SectionHeader'
import { Reveal } from '../components/motion'

export function Curriculum() {
  const { t } = useI18n()

  return (
    <>
      <div className="print:hidden">
        <PageHeader index="01" title={t.cv.title} aside={t.cv.aside} />

        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16">
          <ProfileCard />

          <div className="mt-12 grid gap-12 lg:grid-cols-[330px_1fr] lg:gap-16">
            <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
              <Reveal className="rounded-[22px] border border-line bg-surface/60 p-6">
                <h2 className="text-[11.5px] uppercase tracking-[0.2em] text-faint">{t.cv.profileTitle}</h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{t.cv.profile}</p>
              </Reveal>

              <Reveal delay={0.06} className="rounded-[22px] border border-line bg-surface/40 p-6">
                <h2 className="text-[11.5px] uppercase tracking-[0.2em] text-faint">{t.cv.skillsTitle}</h2>
                <ul className="mt-4 flex flex-col gap-4">
                  {t.cv.skills.map((group) => (
                    <li key={group.group}>
                      <p className="text-[13.5px] font-medium">{group.group}</p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <li key={item} className="rounded-full border border-line bg-bg/40 px-2.5 py-1 text-[11.5px] text-muted">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1} className="rounded-[22px] border border-line bg-surface/40 p-6">
                <h2 className="text-[11.5px] uppercase tracking-[0.2em] text-faint">{t.cv.languagesTitle}</h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {t.cv.languages.map((language) => (
                    <li
                      key={language.name}
                      className="flex items-baseline justify-between gap-4 border-b border-line pb-2 text-[13.5px] last:border-0 last:pb-0"
                    >
                      <span>{language.name}</span>
                      <span className="text-muted">{language.level}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </aside>

            <div>
              <h2 className="text-[11.5px] uppercase tracking-[0.2em] text-faint">{t.cv.experienceTitle}</h2>
              <ol className="relative mt-5 border-l border-line pl-6">
                {t.cv.experience.map((job, i) => (
                  <li key={`${job.company}-${job.period}`} className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[28px] top-2 size-[9px] rounded-full bg-accent ring-4 ring-bg" />
                    <Reveal delay={i * 0.05}>
                      <p className="text-[12px] tabular-nums text-faint">{job.period}</p>
                      <h3 className="mt-1 font-display text-[24px]">{job.role}</h3>
                      <p className="mt-1 text-[13.5px] text-muted">
                        {job.company}
                        <span className="mx-1.5 text-faint">·</span>
                        {job.location}
                      </p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {job.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2.5 text-[14px] leading-relaxed text-fg/75">
                            <span className="round mt-2 size-1 shrink-0 rounded-full bg-accent/60" />
                            <span className="text-pretty">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </li>
                ))}
              </ol>

              <h2 className="mt-12 text-[11.5px] uppercase tracking-[0.2em] text-faint">{t.cv.educationTitle}</h2>
              <ol className="mt-5 flex flex-col gap-3">
                {t.cv.education.map((study, i) => (
                  <li key={study.degree}>
                    <Reveal delay={i * 0.05} className="rounded-[20px] border border-line bg-surface/40 p-5 sm:p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-[16px] font-medium">{study.degree}</h3>
                        <span className="text-[12px] tabular-nums text-faint">{study.period}</span>
                      </div>
                      <p className="mt-1 text-[13.5px] text-accent">{study.school}</p>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted">{study.detail}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <PrintableCV />
    </>
  )
}

/* ------------------------------- Foto y contacto ------------------------------ */

function Photo({ className, iconClassName }: { className: string; iconClassName: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`round overflow-hidden rounded-full border ${className}`}>
      {failed ? (
        <div className="flex size-full items-center justify-center text-faint">
          <Camera className={iconClassName} />
        </div>
      ) : (
        <img src={profile.photo} alt={profile.name} onError={() => setFailed(true)} className="size-full object-cover" />
      )}
    </div>
  )
}

function ProfileCard() {
  const { t } = useI18n()
  const socials = profile.socials.filter((social) => social.href !== '#' && !social.href.startsWith('mailto:'))

  return (
    <Reveal className="relative overflow-hidden rounded-[26px] border border-line bg-surface/60 p-6 sm:p-8">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative flex flex-col items-center gap-7 sm:flex-row">
        <div className="shrink-0">
          <Photo className="size-32 border-line-strong bg-surface-2 sm:size-40" iconClassName="size-8" />
        </div>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <h2 className="font-display text-[clamp(32px,5vw,52px)] leading-[0.95]">{profile.name}</h2>
          <p className="mt-1.5 text-[14px] text-accent">{t.hero.role}</p>

          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/40 px-3 py-1.5 text-[12.5px] text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Mail className="size-3.5" />
              {profile.email}
            </a>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/40 px-3 py-1.5 text-[12.5px] text-muted">
              <MapPin className="size-3.5" />
              {profile.location}
            </span>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="inline-flex items-center gap-1 rounded-full border border-line bg-bg/40 px-3 py-1.5 text-[12.5px] text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                {social.label}
                <ArrowUpRight className="size-3" />
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 sm:items-start">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-3 px-6 text-[14px] font-semibold text-bg shadow-[0_0_30px_-10px_rgba(90,166,255,0.9)] transition-transform hover:scale-[1.02]"
            >
              <Download className="size-4" />
              {t.cv.download}
            </button>
            <p className="max-w-xs text-[11.5px] leading-relaxed text-faint">{t.cv.downloadHint}</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* --------------------------------- Versión PDF -------------------------------- */

// Esta copia solo se ve al imprimir o guardar como PDF: fondo blanco, foto
// circular arriba a la izquierda y el resto del currículum en una columna.
function PrintableCV() {
  const { t } = useI18n()
  const socials = profile.socials.filter((social) => social.href !== '#' && !social.href.startsWith('mailto:'))

  return (
    <div className="hidden bg-white px-1 py-2 text-neutral-900 print:block">
      <header className="flex items-center gap-7 border-b border-neutral-300 pb-6">
        <Photo className="size-28 shrink-0 border-neutral-300 bg-neutral-100" iconClassName="size-6" />
        <div className="min-w-0">
          <h1 className="font-display text-[34px] leading-none">{profile.name}</h1>
          <p className="mt-1.5 text-[13px] text-neutral-600">{t.hero.role}</p>
          <p className="mt-2 text-[12px] text-neutral-700">
            {profile.email}
            <span className="mx-1.5">·</span>
            {profile.location}
          </p>
          <p className="mt-0.5 text-[12px] text-neutral-700">{socials.map((social) => social.label).join(' · ')}</p>
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{t.cv.profileTitle}</h2>
        <p className="mt-2 text-[12.5px] leading-relaxed text-neutral-800">{t.cv.profile}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{t.cv.experienceTitle}</h2>
        <ul className="mt-3 flex flex-col gap-4">
          {t.cv.experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-[13px] font-semibold">{job.role}</p>
                <span className="text-[11px] text-neutral-500">{job.period}</span>
              </div>
              <p className="text-[11.5px] text-neutral-600">
                {job.company}
                <span className="mx-1.5">·</span>
                {job.location}
              </p>
              <ul className="mt-1 list-disc pl-4 text-[12px] leading-relaxed text-neutral-700">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{t.cv.educationTitle}</h2>
        <ul className="mt-3 flex flex-col gap-3">
          {t.cv.education.map((study) => (
            <li key={study.degree}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-[12.5px] font-semibold">{study.degree}</p>
                <span className="text-[11px] text-neutral-500">{study.period}</span>
              </div>
              <p className="text-[11.5px] text-neutral-600">{study.school}</p>
              <p className="text-[12px] text-neutral-700">{study.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-6 grid grid-cols-2 gap-8 border-t border-neutral-300 pt-5">
        <section>
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{t.cv.skillsTitle}</h2>
          <ul className="mt-2 flex flex-col gap-1.5">
            {t.cv.skills.map((group) => (
              <li key={group.group} className="text-[12px] leading-relaxed text-neutral-700">
                <span className="font-semibold text-neutral-900">{group.group}: </span>
                {group.items.join(', ')}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{t.cv.languagesTitle}</h2>
          <ul className="mt-2 flex flex-col gap-1.5">
            {t.cv.languages.map((language) => (
              <li key={language.name} className="flex items-baseline justify-between gap-3 text-[12px] text-neutral-700">
                <span className="text-neutral-900">{language.name}</span>
                <span className="text-neutral-500">{language.level}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
