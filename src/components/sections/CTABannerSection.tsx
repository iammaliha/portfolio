import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Button } from '../ui/Button'
import { slideUp, fadeIn } from '../../animations'

export default function CTABannerSection() {
  const { ref, isVisible } = useScrollReveal()

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-rose-400 to-pink-400 px-8 py-16 shadow-2xl shadow-pink-200/40 sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

          <div className="relative flex flex-col items-center text-center">
            <motion.div variants={slideUp} className="mb-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm">
                <Sparkles size={12} />
                Let&rsquo;s Create
              </span>
            </motion.div>

            <motion.h2
              variants={slideUp}
              className="font-display mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Ready to build something beautiful?
            </motion.h2>

            <motion.p
              variants={slideUp}
              className="mt-4 max-w-lg text-base leading-relaxed text-white/80"
            >
              I&rsquo;d love to hear about your project. Let&rsquo;s create a website that feels
              elegant, warm, and perfectly you.
            </motion.p>

            <motion.div variants={fadeIn} className="mt-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group border-2 border-white/30 bg-white text-pink-600 shadow-lg shadow-pink-300/30 hover:bg-pink-50 hover:shadow-xl hover:shadow-pink-300/40"
              >
                Start a Conversation
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
