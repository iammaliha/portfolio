import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'
import { staggerContainer, staggerItem } from '../../animations'
import { Button } from '../ui/Button'
import ThemeSwitcher from '../ui/ThemeSwitcher'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Stack', href: '/stack' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

function getSectionId(href: string) {
  if (href === '/') return 'home'
  if (!href.includes('#')) return href.replace('/', '')
  return href.replace('/#', '')
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active section: computed during render for non-home routes */
  const activeOverride = pathname !== '/'
    ? ({ '/about': 'about', '/services': 'services', '/projects': 'projects', '/stack': 'stack', '/testimonials': 'testimonials', '/blog': 'blog', '/pricing': 'pricing', '/contact': 'contact' }[pathname] || 'home')
    : null
  const active = activeOverride ?? activeSection

  /* IntersectionObserver for section tracking on home page */
  useEffect(() => {
    if (pathname !== '/') return

    const sectionIds = ['home', 'about', 'services', 'stack', 'testimonials']
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-100px 0px -50% 0px', threshold: 0.1 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  const scrollTo = useCallback(
    (href: string) => {
      setMobileOpen(false)

      /* Home: scroll to top */
      if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        if (pathname !== '/') navigate('/')
        return
      }

      /* Route-based page (no hash) */
      if (!href.includes('#')) {
        navigate(href)
        return
      }

      /* Hash-based section scroll on home */
      const id = href.replace('/#', '')
      if (pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    },
    [navigate, pathname],
  )

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-pink-100/40 bg-white/75 shadow-lg shadow-pink-200/10 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/60'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollTo('/')}
            className="relative font-display text-lg font-semibold tracking-[0.25em] uppercase text-pink-600 transition-colors hover:text-pink-500"
          >
            Maliha Tasnim
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const sectionId = getSectionId(link.href)
              const isActive = active === sectionId
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-pink-700'
                      : 'text-slate-600 hover:text-pink-700',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-pink-100 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeSwitcher />
            <Button
              onClick={() => scrollTo('/contact')}
              size="sm"
              className="group"
            >
              Let&rsquo;s Work Together
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-pink-50 hover:text-pink-700 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            />

            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col border-l border-pink-100/40 bg-white/95 backdrop-blur-2xl md:hidden"
            >
              <div className="flex items-center justify-between px-6 py-4">
                <span className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-pink-600">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-pink-50 hover:text-pink-700"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-1"
                >
                  {navLinks.map((link) => {
                    const sectionId = getSectionId(link.href)
                    const isActive = active === sectionId
                    return (
                      <motion.div key={link.href} variants={staggerItem}>
                        <button
                          onClick={() => scrollTo(link.href)}
                          className={cn(
                            'flex w-full rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                            isActive
                              ? 'bg-pink-100 text-pink-700'
                              : 'text-slate-600 hover:bg-pink-50 hover:text-pink-700',
                          )}
                        >
                          {link.label}
                        </button>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </div>

              <div className="border-t border-pink-100/30 px-4 py-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Theme</span>
                    <ThemeSwitcher />
                  </div>
                  <Button
                    onClick={() => {
                      setMobileOpen(false)
                      scrollTo('/contact')
                    }}
                    className="w-full"
                  >
                    Let&rsquo;s Work Together
                    <ArrowRight size={14} />
                  </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
