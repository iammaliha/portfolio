import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { slideUp, staggerContainer, staggerItem } from '../../animations'
import { processSteps } from '../../data/projects'

const stepIcons = ['01', '02', '03', '04']

export default function WorkingProcessSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="bg-blush/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp} className="mb-4 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
              How I Work
            </p>
          </motion.div>
          <motion.div variants={slideUp} className="mb-14 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A simple, collaborative process.
            </h2>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-pink-200 via-pink-100 to-transparent md:block" />

            <div className="space-y-10 md:space-y-0">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={staggerItem}
                  className="relative md:flex md:items-start md:gap-10"
                >
                  <div className="hidden md:flex md:w-16 md:shrink-0 md:flex-col md:items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-pink-200 bg-white text-sm font-bold text-pink-600 shadow-sm">
                      {stepIcons[i]}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="mt-4 h-full w-px bg-pink-100" />
                    )}
                  </div>

                  <div className="flex items-start gap-5 md:gap-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-pink-200 bg-white text-xs font-bold text-pink-600 shadow-sm md:hidden">
                      {stepIcons[i]}
                    </div>
                    <div className="min-w-0 flex-1 rounded-2xl border border-pink-100/60 bg-white/80 p-6 shadow-md shadow-pink-200/5 backdrop-blur-sm sm:p-8">
                      <h3 className="font-display text-xl font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
