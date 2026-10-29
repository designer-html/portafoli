import { motion } from 'motion/react'

import { localeOptions } from '../../data/content'
import { useI18n } from '../../i18n/LanguageContext'
import { cx } from '../lib/cx'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.ui.language}
      className={cx('flex items-center gap-0.5 rounded-full border border-line bg-surface/70 p-1 backdrop-blur', className)}
    >
      {localeOptions.map((option) => {
        const active = option.code === locale
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLocale(option.code)}
            aria-pressed={active}
            title={option.name}
            className={cx(
              'relative rounded-full px-2.5 py-1 text-[11.5px] font-semibold tracking-wide transition-colors',
              active ? 'text-bg' : 'text-muted hover:text-fg',
            )}
          >
            {active && (
              <motion.span
                layoutId="language-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
