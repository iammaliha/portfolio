import { useState, useEffect, useCallback, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Download } from 'lucide-react'
import { Button } from '../ui/Button'
import { fadeIn, slideUp, staggerContainer } from '../../animations'

const roles = [
  'Frontend Developer',
  'UI Designer',
  'Creative Thinker',
]

const floatingElements = [
  { size: 'h-56 w-56', top: 'top-12', right: 'right-12', delay: 0, color: 'bg-pink-200/20' },
  { size: 'h-40 w-40', top: 'top-1/3', left: 'left-8', delay: 1, color: 'bg-rose-100/25' },
  { size: 'h-24 w-24', bottom: 'bottom-1/4', right: 'right-1/4', delay: 2, color: 'bg-pink-100/30' },
  { size: 'h-32 w-32', top: 'top-2/3', right: 'right-1/3', delay: 0.5, color: 'bg-pink-200/15' },
  { size: 'h-20 w-20', bottom: 'bottom-1/3', left: 'left-1/3', delay: 1.5, color: 'bg-rose-200/20' },
]

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const scrollTo = useCallback((href: string) => {
    const id = href.replace('/#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, rgba(251,207,232,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(252,231,243,0.3) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(253,242,248,0.4) 0%, transparent 50%)',
            'radial-gradient(ellipse at 30% 60%, rgba(251,207,232,0.5) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(252,231,243,0.4) 0%, transparent 50%), radial-gradient(ellipse at 60% 70%, rgba(253,242,248,0.3) 0%, transparent 50%)',
            'radial-gradient(ellipse at 40% 40%, rgba(251,207,232,0.4) 0%, transparent 50%), radial-gradient(ellipse at 60% 60%, rgba(252,231,243,0.3) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(253,242,248,0.4) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 50%, rgba(251,207,232,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(252,231,243,0.3) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(253,242,248,0.4) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating decorative elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute rounded-full blur-3xl ${el.size} ${el.color}`}
          style={getFloatingStyle(el)}
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 4 + i,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glow orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-300/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-rose-300/10 blur-[80px]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 rounded-full border border-pink-200/50 bg-white/70 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-pink-600 shadow-sm backdrop-blur-sm"
          >
            <Sparkles size={12} className="text-pink-400" />
            WebNest &mdash; Frontend Development
          </motion.div>

          {/* Heading */}
          <motion.div variants={slideUp} className="mt-8 space-y-2">
            <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
              Maliha{' '}
              <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-300 bg-clip-text text-transparent">
                Tasnim
              </span>
            </h1>
          </motion.div>

          {/* Rotating role */}
          <motion.div variants={slideUp} className="mt-4 flex items-center gap-2">
            <span className="text-base font-medium text-slate-400">I&rsquo;m a</span>
            <div className="relative h-8 overflow-hidden">
              <motion.span
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="block text-base font-semibold text-pink-600"
              >
                {roles[roleIndex]}
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={slideUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            I build warm, human-first websites with a soft, feminine palette and clean layouts.
            Every detail is crafted to feel polished, personal, and inviting.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollTo('/#projects')}
              size="lg"
              className="group"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollTo('/#contact')}
            >
              Contact Me
            </Button>
            <Button variant="ghost" size="lg" className="gap-2">
              <Download size={16} />
              Resume
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeIn}
            className="mt-20 flex flex-col items-center gap-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-pink-300 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function getFloatingStyle(el: {
  size: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  delay: number
  color: string
}): CSSProperties {
  const style: CSSProperties = {}
  if (el.top) style.top = el.top
  if (el.left) style.left = el.left
  if (el.right) style.right = el.right
  if (el.bottom) style.bottom = el.bottom
  return style
}
