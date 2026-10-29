import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import { bySlug } from '../../data/profile'
import { useI18n } from '../../i18n/LanguageContext'
import { cx } from '../lib/cx'
import { Parallax } from './motion'

export function WorkCard({ slug, index = 0 }: { slug: string; index?: number }) {
  const { t } = useI18n()
  const meta = bySlug(slug)
  const copy = t.projects[slug]
  if (!meta || !copy) return null

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cx(meta.size === 'large' ? 'md:col-span-2' : 'md:col-span-1')}
    >
      <Link
        to={`/projects/${meta.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface"
      >
        <div
          className={cx('relative overflow-hidden', meta.size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/3]')}
          style={{ background: meta.tint }}
        >
          <Parallax src={meta.cover} alt={copy.title} className="size-full" strength={5} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-bg/60 px-3 py-1 text-[11.5px] font-medium text-fg backdrop-blur">
            {copy.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-[26px]">{copy.title}</h3>
            <span className="shrink-0 text-[12.5px] tabular-nums text-faint">{meta.year}</span>
          </div>
          <p className="mt-2 text-pretty text-[14.5px] leading-relaxed text-muted">{copy.summary}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {meta.stack.slice(0, 4).map((item) => (
              <span key={item} className="rounded-full border border-line px-2.5 py-1 text-[11.5px] text-muted">
                {item}
              </span>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent">
            {t.ui.viewProject}
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
