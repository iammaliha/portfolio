import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { slideUp } from '../../animations'
import { techStack } from '../../data/projects'

export default function TechStackSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="overflow-hidden py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={slideUp}
          className="mb-8 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Technologies I work with
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex gap-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {techStack.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex shrink-0 items-center rounded-full border border-pink-100/50 bg-white/60 px-5 py-2 text-sm font-medium text-slate-500 shadow-sm backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
