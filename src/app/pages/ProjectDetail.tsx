import { motion } from 'motion/react'
import { ArrowLeft, ArrowUpRight, Code2 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router'

import { bySlug, projectMeta } from '../../data/profile'
import { useI18n } from '../../i18n/LanguageContext'
import { Parallax, Reveal } from '../components/motion'

const ease = [0.22, 1, 0.36, 1] as const

export function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useI18n()
  const meta = slug ? bySlug(slug) : undefined
  const copy = slug ? t.projects[slug] : undefined
  if (!meta || !copy) return <Navigate to="/projects" replace />

  const index = projectMeta.findIndex((project) => project.slug === meta.slug)
  const nextMeta = projectMeta[(index + 1) % projectMeta.length]
  const nextCopy = t.projects[nextMeta.slug]
  const labels = t.projectsPage.labels

  const facts: [string, string][] = [
    [labels.client, copy.client],
    [labels.year, meta.year],
    [labels.role, copy.role.join(', ')],
    [labels.stack, meta.stack.join(', ')],
    [labels.deliverables, copy.deliverables.join(', ')],
  ]

  return (
    <article className="mx-auto max-w-[1200px] px-5 pt-28 sm:px-8 sm:pt-32">
      <Link to="/projects" className="inline-flex h-9 items-center gap-1.5 text-[13.5px] text-muted transition-colors hover:text-fg">
        <ArrowLeft className="size-4" />
        {t.ui.back}
      </Link>

      <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-[11.5px] uppercase tracking-[0.22em] text-faint">
            {copy.category}
            <span className="mx-2">·</span>
            {meta.year}
          </p>
          <h1 className="mt-3 font-display text-[clamp(42px,7.5vw,96px)]">{copy.title}</h1>
        </div>
        <p className="max-w-md text-pretty text-[15.5px] leading-relaxed text-muted lg:pb-2">{copy.summary}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.15, ease }}
        className="mt-10 overflow-hidden rounded-[26px] border border-line"
        style={{ background: meta.tint }}
      >
        <Parallax src={meta.cover} alt={copy.title} className="aspect-[16/9]" strength={4} />
      </motion.div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-5 gap-y-6 text-[13.5px] lg:grid-cols-1">
            {facts.map(([label, value]) => (
              <div key={label} className="border-t border-line pt-3">
                <dt className="text-faint">{label}</dt>
                <dd className="mt-1 text-fg">{value}</dd>
              </div>
            ))}
            {meta.link && meta.link !== '#' && (
              <div className="border-t border-line pt-3">
                <a href={meta.link} className="link-draw inline-flex items-center gap-1 text-accent">
                  {labels.visit}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            )}
            {meta.repo && (
              <div className="border-t border-line pt-3">
                <a href={meta.repo} className="link-draw inline-flex items-center gap-1 text-accent">
                  <Code2 className="size-3.5" />
                  {labels.code}
                </a>
              </div>
            )}
          </dl>
        </Reveal>

        <div className="max-w-2xl">
          {copy.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p
                className={
                  i === 0
                    ? 'text-pretty font-display text-[24px] leading-[1.25] sm:text-[30px]'
                    : 'mt-5 text-pretty text-[15.5px] leading-relaxed text-muted'
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Link to={`/projects/${nextMeta.slug}`} className="group mt-24 block border-t border-line pt-8">
        <p className="text-[11.5px] uppercase tracking-[0.22em] text-faint">{t.ui.next}</p>
        <div className="mt-3 flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(34px,6vw,76px)] transition-transform duration-700 group-hover:translate-x-2">
            {nextCopy?.title ?? nextMeta.slug}
          </h2>
          <ArrowUpRight className="mb-2 size-6 shrink-0 text-accent transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
      </Link>
    </article>
  )
}
