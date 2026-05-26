import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUp,
  Heart,
  Code2,
  Globe2,
  Palette,
  Mail,
} from 'lucide-react'
import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

const socialLinks = [
  { label: 'GitHub', href: '#', icon: Code2 },
  { label: 'LinkedIn', href: '#', icon: Globe2 },
  { label: 'Dribbble', href: '#', icon: Palette },
  { label: 'Email', href: 'mailto:261-15-338@diu.edu.bd', icon: Mail },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
]

const services = [
  'Web Development',
  'UI Design',
  'Responsive Layouts',
  'Brand Identity',
  'Frontend Consulting',
  'Performance Optimization',
]

export default function Footer() {
  const [showBack, setShowBack] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBack(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="relative border-t border-pink-100/50 bg-gradient-to-b from-white to-pink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-5">
              <span className="font-display text-lg font-semibold tracking-[0.25em] uppercase text-pink-600">
                Maliha Tasnim
              </span>
              <p className="text-sm leading-relaxed text-slate-500">
                Frontend Developer at WebNest. Building warm, human-first
                websites with a soft, feminine touch.
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-pink-500 transition-all duration-300 hover:bg-pink-200 hover:text-pink-700 hover:shadow-md hover:shadow-pink-200/30"
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.25em] text-pink-500">
                Quick Links
              </p>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors duration-200 hover:text-pink-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.25em] text-pink-500">
                Services
              </p>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-sm text-slate-500">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.25em] text-pink-500">
                Newsletter
              </p>
              <p className="text-sm leading-relaxed text-slate-500">
                Get updates on new projects and design insights.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-pink-100/40 px-6 py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} WebNest. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-slate-400">
              Crafted with{' '}
              <Heart size={12} className="fill-pink-400 text-pink-400" /> by
              Maliha Tasnim
            </p>
          </div>
        </div>
      </footer>

      {/* Back-to-top */}
      <AnimatePresence>
        {showBack && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className={cn(
              'fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full',
              'bg-gradient-to-br from-pink-400 to-rose-400 text-white shadow-lg shadow-pink-200/50',
              'transition-shadow duration-300 hover:shadow-xl hover:shadow-pink-300/60',
              'active:scale-95',
            )}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
