import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { slideUp, staggerContainer } from '../../animations'
import { trustedBrands } from '../../data/projects'

export default function TrustedBySection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="border-t border-pink-100/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="flex flex-col items-center gap-10"
        >
          <motion.p variants={slideUp} className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Trusted by amazing brands
          </motion.p>
          <motion.div
            variants={slideUp}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          >
            {trustedBrands.map((brand) => (
              <span
                key={brand.name}
                className="font-display text-2xl font-semibold tracking-tight text-slate-300 transition-colors duration-300 hover:text-pink-300"
              >
                {brand.name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
