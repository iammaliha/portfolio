import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { slideUp, staggerContainer, staggerItem } from '../../animations'
import AnimatedCounter from '../ui/AnimatedCounter'
import { stats } from '../../data/projects'

export default function ExperienceStatsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="rounded-3xl bg-gradient-to-br from-pink-50 via-white to-rose-50 border border-pink-100/50 px-8 py-14 shadow-lg shadow-pink-200/10"
        >
          <motion.div
            variants={slideUp}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="flex flex-col items-center text-center"
              >
                <span className="font-display text-4xl font-bold text-pink-600 sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 text-sm font-medium text-slate-500">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
