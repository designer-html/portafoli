import { ArrowUpRight, Check, Compass, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'

import { useI18n } from '../../i18n/LanguageContext'
import { PageHeader } from '../components/SectionHeader'
import { Reveal } from '../components/motion'

export function Ipop() {
  const { t } = useI18n()
  const ipop = t.ipop

  return (
    <>
      <PageHeader index="04" title={ipop.title} aside={ipop.aside} />

      <div className="mx-auto max-w-[1000px] px-5 py-14 sm:px-8 sm:py-16">
        <Reveal className="rounded-[24px] border border-line bg-surface/60 p-6 sm:p-8">
          <p className="text-pretty text-[15.5px] leading-relaxed text-muted">{ipop.intro}</p>
          <ol className="mt-6 grid gap-2 sm:grid-cols-3">
            {[ipop.cv.title, ipop.projectionTitle, ipop.promotionTitle].map((title, i) => (
              <li key={title} className="rounded-[14px] border border-line bg-bg/40 px-4 py-3 text-[13px] leading-snug text-muted">
                <span className="mr-2 font-semibold text-accent">0{i + 1}</span>
                {title}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* 1. Currículum competencial */}
        <section className="mt-12">
          <SectionTitle icon={<Check className="size-4" />} title={ipop.cv.title} />
          <div className="mt-4 rounded-[22px] border border-line bg-surface/40 p-6">
            <p className="text-pretty text-[14.5px] leading-relaxed text-muted">{ipop.cv.body}</p>
            <Link to="/curriculum" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent">
              {ipop.cv.cta}
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </section>

        {/* 2. Projecció professional */}
        <section className="mt-12">
          <SectionTitle icon={<Compass className="size-4" />} title={ipop.projectionTitle} />
          <p className="mt-4 text-pretty text-[14.5px] leading-relaxed text-muted">{ipop.projectionIntro}</p>

          <div className="mt-6 rounded-[22px] border border-line bg-surface/40 p-6">
            <Label>{ipop.specialization.label}</Label>
            <h3 className="mt-2 font-display text-[24px]">{ipop.specialization.title}</h3>
            <p className="mt-2 text-pretty text-[14.5px] leading-relaxed text-muted">{ipop.specialization.body}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-faint">{ipop.tasksLabel}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {ipop.specialization.tasks.map((task) => (
                    <li key={task} className="flex gap-2.5 text-[13.5px] leading-relaxed text-fg/75">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-accent-2" />
                      <span className="text-pretty">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-faint">{ipop.competencesLabel}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {ipop.specialization.competences.map((item) => (
                    <li key={item} className="rounded-full border border-line bg-bg/40 px-2.5 py-1 text-[11.5px] text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[22px] border border-line bg-surface/40 p-6">
            <Label>{ipop.companies.label}</Label>
            <h3 className="mt-2 font-display text-[24px]">{ipop.companies.title}</h3>
            <p className="mt-2 text-pretty text-[14.5px] leading-relaxed text-muted">{ipop.companies.body}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {ipop.companies.items.map((item) => (
                <li key={item.name} className="rounded-[16px] border border-line bg-bg/40 p-4">
                  <p className="text-[14px] font-medium">{item.name}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-[22px] border border-line bg-surface/40 p-6">
            <Label>{ipop.training.label}</Label>
            <h3 className="mt-2 font-display text-[24px]">{ipop.training.title}</h3>
            <p className="mt-2 text-pretty text-[14.5px] leading-relaxed text-muted">{ipop.training.body}</p>
            <ol className="mt-5 flex flex-col gap-3">
              {ipop.training.items.map((item) => (
                <li key={item.task} className="grid gap-1 rounded-[16px] border border-line bg-bg/40 p-4 sm:grid-cols-[120px_1fr] sm:gap-4">
                  <span className="text-[12px] tabular-nums text-faint">{item.period}</span>
                  <div>
                    <p className="text-[14px] font-medium">{item.task}</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 3. Pla de promoció personal */}
        <section className="mt-12">
          <SectionTitle icon={<Sparkles className="size-4" />} title={ipop.promotionTitle} />
          <p className="mt-4 text-pretty text-[14.5px] leading-relaxed text-muted">{ipop.promotionIntro}</p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {ipop.strategies.map((strategy) => (
              <div key={strategy.title} className="rounded-[20px] border border-line bg-surface/40 p-5">
                <h3 className="text-[15px] font-medium">{strategy.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{strategy.body}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {strategy.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[12.5px] leading-relaxed text-fg/70">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent/70" />
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-[11.5px] uppercase tracking-[0.2em] text-faint">{ipop.planTitle}</h3>
          <ol className="mt-4 flex flex-col gap-2">
            {ipop.plan.map((step) => (
              <li key={step.task} className="grid gap-1 rounded-[16px] border border-line bg-surface/40 p-4 sm:grid-cols-[130px_1fr] sm:gap-4">
                <span className="text-[12px] tabular-nums text-accent">{step.period}</span>
                <div>
                  <p className="text-[14px] font-medium">{step.task}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  )
}

function SectionTitle({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <h2 className="flex items-center gap-2.5 border-b border-line pb-3 font-display text-[26px] sm:text-[30px]">
      <span className="grid size-8 place-items-center rounded-[10px] border border-line-strong text-accent">{icon}</span>
      {title}
    </h2>
  )
}

function Label({ children }: { children: ReactNode }) {
  return <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{children}</span>
}
