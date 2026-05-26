import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'
import SEOMeta from '../components/ui/SEOMeta'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Button } from '../components/ui/Button'
import { testimonials } from '../data/projects'
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../animations'

function TestimonialCard({
  t,
}: {
  t: (typeof testimonials)[0]
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-pink-100/40 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/20 sm:p-8">
      <Quote size={24} className="mb-4 shrink-0 text-pink-200" />

      <p className="flex-1 text-sm leading-relaxed text-slate-500">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="mt-4 flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < t.rating
                ? 'fill-pink-400 text-pink-400'
                : 'text-pink-200'
            }
          />
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-pink-100/40 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-rose-200 text-xs font-semibold text-white">
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{t.name}</p>
          <p className="text-xs text-slate-500">
            {t.role}, {t.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: sliderRef, isVisible: sliderVisible } = useScrollReveal()
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal()

  const duplicated = [...testimonials, ...testimonials]

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <SEOMeta title="Testimonials" description="What clients and colleagues say about working with Maliha Tasnim." />
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-rose-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial="hidden"
            animate={heroVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div variants={slideUp}>
              <span className="inline-block rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
                Testimonials
              </span>
            </motion.div>

            <motion.h1
              variants={slideUp}
              className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                What Clients Say
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500"
            >
              Feedback from the wonderful people and companies I have had the
              pleasure of working with.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Infinite Slider ── */}
      <section ref={sliderRef} className="-mt-10 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            animate={sliderVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div variants={slideUp} className="mb-8 text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Client Reviews
              </h2>
              <p className="mt-2 text-slate-500">
                What people say about working with me
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

          <div
            className="flex gap-6"
            style={{
              animation: 'scroll-left 40s linear infinite',
              width: 'max-content',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.animationPlayState =
                'paused'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.animationPlayState =
                'running'
            }}
          >
            {duplicated.map((t, i) => (
              <div key={`${t.name}-${i}`} className="w-80 shrink-0 sm:w-96">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Testimonials Grid ── */}
      <section ref={gridRef} className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            animate={gridVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div variants={slideUp} className="mb-10 text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                All Reviews
              </h2>
              <p className="mt-2 text-slate-500">
                Every piece of feedback helps me grow and improve
              </p>
            </motion.div>

            <motion.div
              variants={slideUp}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {testimonials.map((t) => (
                <motion.div key={t.name} variants={staggerItem}>
                  <TestimonialCard t={t} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 px-8 py-16 text-center shadow-2xl shadow-pink-200/40 sm:px-16">
            <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/4 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Ready to become the next review?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pink-100">
                Let us create something amazing together that your users will
                love.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="mt-8 bg-white text-pink-600 hover:bg-pink-50"
                asChild
              >
                <a href="/#contact">
                  Start Your Project
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
