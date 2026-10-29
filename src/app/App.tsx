import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router'

import { LanguageProvider } from '../i18n/LanguageContext'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Preloader } from './components/Preloader'
import { Certificates } from './pages/Certificates'
import { Curriculum } from './pages/Curriculum'
import { Home } from './pages/Home'
import { Ipop } from './pages/Ipop'
import { ProjectDetail } from './pages/ProjectDetail'
import { Projects } from './pages/Projects'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 60)
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="ipop" element={<Ipop />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

export function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Preloader />
        <ScrollManager />
        <Nav />
        <Pages />
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}
