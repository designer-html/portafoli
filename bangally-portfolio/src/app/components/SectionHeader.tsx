import type { ReactNode } from 'react'

import { Lines } from './motion'

export function PageHeader({ index, title, aside }: { index: string; title: string; aside?: ReactNode }) {
  return (
    <header className="relative overflow-hidden border-b border-line pb-12 pt-28 sm:pt-36">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[64rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-[0.55] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <p className="text-[11.5px] uppercase tracking-[0.24em] text-faint">{index}</p>
        <Lines as="h1" className="mt-4 font-display text-[clamp(44px,8vw,104px)]" lines={[title]} />
        {aside ? <p className="mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px]">{aside}</p> : null}
      </div>
    </header>
  )
}
