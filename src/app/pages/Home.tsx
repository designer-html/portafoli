import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import { profile, projectMeta } from '../../data/profile'
import { useI18n } from '../../i18n/LanguageContext'
import { Lines, Magnetic, Reveal } from '../components/motion'
import { SocialButtons } from '../components/SocialButtons'
import { WorkCard } from '../components/WorkCard'
import { cx } from '../lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Explore />
      <Featured />
      <NowStrip />
    </>
  )
}

function Hero() {
  const { t } = useI18n()
  const mx = useSpring(useMotionValue(50), { stiffness: 45, damping: 20 })
  const my = useSpring(useMotionValue(30), { stiffness: 45, damping: 20 })
  const glow = useMotionTemplate`radial-gradient(620px circle at ${mx}% ${my}%, rgba(90,166,255,0.18), transparent 62%)`
  const words = profile.name.split(' ')

  return (
    <section
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        mx.set(((event.clientX - rect.left) / rect.width) * 100)
        my.set(((event.clientY - rect.top) / rect.height) * 100)
      }}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24"
    >
      <HeroBackground />
      <motion.div aria-hidden style={{ background: glow }} className="pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[11.5px] font-medium text-accent">
            <span className="round size-1.5 animate-pulse-dot rounded-full bg-accent-2" />
            {t.ui.available}
          </span>
          <span className="text-[12px] uppercase tracking-[0.2em] text-faint">{t.hero.eyebrow}</span>
        </motion.div>

        <h1 className="mt-6 font-display text-[clamp(48px,10.5vw,132px)] leading-[0.94]">
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="block overflow-hidden pb-[0.05em] -mb-[0.05em]">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.15 + i * 0.1, ease }}
                className={cx(
                  'block',
                  i === words.length - 1 && 'bg-gradient-to-r from-accent via-accent-2 to-accent-3 bg-clip-text text-transparent',
                )}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-5 text-[15px] font-medium text-accent sm:text-[17px]"
        >
          {t.hero.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="mt-6 grid gap-8 border-t border-line pt-7 lg:grid-cols-[1.35fr_1fr] lg:items-end"
        >
          <p className="max-w-xl text-pretty text-[15.5px] leading-relaxed text-muted sm:text-[17px]">{t.hero.intro}</p>
          <div className="flex flex-col gap-4 lg:items-end">
            <div className="flex flex-wrap gap-3">
              <Magnetic>
                <Link
                  to="/projects"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-3 px-6 text-[14px] font-semibold text-bg shadow-[0_0_34px_-10px_rgba(90,166,255,0.9)] transition-transform hover:scale-[1.02]"
                >
                  {t.hero.ctaProjects}
                  <ArrowUpRight className="size-4" />
                </Link>
              </Magnetic>
              <Link
                to="/curriculum"
                className="inline-flex h-12 items-center rounded-full border border-line-strong bg-surface/60 px-6 text-[14px] font-medium backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
              >
                {t.hero.ctaCv}
              </Link>
            </div>
            <SocialButtons />
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {t.hero.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 + i * 0.08, ease }}
              className="rounded-[18px] border border-line bg-surface/50 p-4 backdrop-blur"
            >
              <p className="font-display text-[30px] leading-none sm:text-[36px]">{stat.value}</p>
              <p className="mt-2 text-[12px] leading-snug text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          className="mt-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-faint"
        >
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-accent to-transparent" />
          {t.ui.scroll}
        </motion.div>
      </div>
    </section>
  )
}

function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_50%_25%,black,transparent_72%)]" />
      <div className="round absolute -left-32 -top-40 size-[36rem] animate-drift-a rounded-full bg-accent/25 blur-[130px]" />
      <div className="round absolute right-[-10%] top-[6%] size-[30rem] animate-drift-b rounded-full bg-accent-3/20 blur-[140px]" />
      <div className="round absolute bottom-[-15%] left-[28%] size-[26rem] animate-drift-b rounded-full bg-accent-2/10 blur-[120px]" />
      <div className="grain absolute inset-0" />
    </div>
  )
}

function Marquee() {
  const { t } = useI18n()
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface/20 py-4">
      <ul
        aria-hidden
        className="flex w-max animate-marquee items-center gap-2.5 whitespace-nowrap text-[12px] font-medium text-muted sm:gap-3 sm:text-[12.5px]"
      >
        {[...t.hero.marquee, ...t.hero.marquee].map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex items-center gap-2 rounded-[10px] border border-line bg-surface/70 px-3 py-1.5 backdrop-blur"
          >
            <span className="round size-1.5 rounded-full bg-accent/80" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Explore() {
  const { t } = useI18n()
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-20 sm:px-8 sm:pt-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Lines as="h2" className="font-display text-[36px] sm:text-[52px]" lines={[t.home.exploreTitle]} />
        <p className="max-w-xs text-[14px] leading-relaxed text-muted">{t.home.exploreAside}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {t.home.explore.map((card, i) => (
          <Reveal key={card.to} delay={i * 0.06} className="h-full">
            <Link
              to={card.to}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-line bg-surface/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative">
                <span className="text-[11.5px] uppercase tracking-[0.2em] text-faint">{card.index}</span>
                <h3 className="mt-4 font-display text-[30px]">{card.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{card.body}</p>
              </div>
              <span className="relative mt-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent">
                {card.cta}
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Featured() {
  const { t } = useI18n()
  const featured = projectMeta.slice(0, 3)

  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-20 sm:px-8 sm:pt-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Lines as="h2" className="font-display text-[36px] sm:text-[52px]" lines={[t.home.featuredTitle]} />
        <Link to="/projects" className="link-draw inline-flex items-center gap-1.5 text-[13.5px] text-muted hover:text-fg">
          {t.ui.viewAll}
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
      <p className="mt-3 text-[14px] text-muted">{t.home.featuredAside}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {featured.map((project, i) => (
          <WorkCard key={project.slug} slug={project.slug} index={i} />
        ))}
      </div>
    </section>
  )
}

function NowStrip() {
  const { t } = useI18n()
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-20 sm:px-8 sm:pt-28">
      <div className="rounded-[24px] border border-line bg-gradient-to-br from-surface/90 to-surface-2/40 p-7 sm:p-9">
        <h2 className="text-[11.5px] uppercase tracking-[0.22em] text-faint">{t.home.nowTitle}</h2>
        <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {t.home.now.map((item) => (
            <div key={item.label}>
              <dt className="text-[12px] text-faint">{item.label}</dt>
              <dd className="mt-1 text-[15px] font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
