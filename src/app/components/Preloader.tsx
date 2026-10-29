import { AnimatePresence, animate, motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { profile } from '../../data/profile'
import { useI18n } from '../../i18n/LanguageContext'

// Una revelación contada en la primera visita de cada pestaña. Se salta por
// completo cuando el usuario prefiere movimiento reducido.
export function Preloader() {
  const { t } = useI18n()
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !sessionStorage.getItem('preloaded')
  })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!show) return
    document.body.style.overflow = 'hidden'
    const controls = animate(0, 100, { duration: 1.1, ease: [0.4, 0, 0.2, 1], onUpdate: (value) => setCount(Math.round(value)) })
    const timer = window.setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('preloaded', '1')
    }, 1500)
    return () => {
      controls.stop()
      window.clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-end justify-between bg-bg p-6 sm:p-10"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.24em] text-faint">{t.hero.eyebrow}</p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 font-display text-[28px] sm:text-[40px]"
            >
              {profile.name}
            </motion.p>
          </div>
          <p className="relative font-display tabular-nums text-[80px] leading-none text-accent sm:text-[140px]">{count}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
