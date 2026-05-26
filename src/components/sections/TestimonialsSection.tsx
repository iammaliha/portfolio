import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { slideUp, staggerContainer } from '../../animations'
import { testimonials } from '../../data/projects'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const { ref, isVisible } = useScrollReveal()

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <section ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp} className="mb-4 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
              Testimonials
            </p>
          </motion.div>
          <motion.div variants={slideUp} className="mb-14 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              What people say about working with me.
            </h2>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="relative mx-auto max-w-3xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="rounded-3xl border border-pink-100/60 bg-white/80 p-10 shadow-lg shadow-pink-200/10 backdrop-blur-sm sm:p-14"
              >
                <Quote className="mb-6 text-pink-200" size={36} />
                <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-rose-200 text-sm font-semibold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-100 bg-white text-slate-500 transition-colors hover:bg-pink-50 hover:text-pink-600"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 bg-gradient-to-r from-pink-400 to-rose-400'
                        : 'w-2 bg-pink-200'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-100 bg-white text-slate-500 transition-colors hover:bg-pink-50 hover:text-pink-600"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
