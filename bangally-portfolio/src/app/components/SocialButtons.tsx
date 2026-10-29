import { ArrowUpRight, Mail } from 'lucide-react'
import type { ReactNode } from 'react'

import { profile } from '../../data/profile'
import { cx } from '../lib/cx'

const icons: Record<string, ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.92c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.42-5.26 5.7.41.36.78 1.06.78 2.14v3.17c0 .31.2.66.8.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z" />
    </svg>
  ),
}

// Botones de redes. Los que todavía no tienen URL real ('#') no se muestran,
// así no aparece un botón que no lleva a ninguna parte.
export function SocialButtons({ className }: { className?: string }) {
  const socials = profile.socials.filter((social) => social.href !== '#')

  return (
    <div className={cx('flex flex-wrap gap-2', className)}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : undefined}
          rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface/60 px-4 text-[13px] text-muted transition-colors hover:border-accent/50 hover:text-accent"
        >
          {icons[social.label] ?? <Mail className="size-4" />}
          {social.label}
          <ArrowUpRight className="size-3.5" />
        </a>
      ))}
    </div>
  )
}
