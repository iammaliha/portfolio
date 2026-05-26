import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Card, CardContent } from '../ui/Card'
import { slideUp, staggerContainer } from '../../animations'
import { skills } from '../../data/projects'

const categories = [...new Set(skills.map((s) => s.category))]

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" ref={ref} className="bg-blush/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
        >
          <motion.div variants={slideUp}>
            <Card className="p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
                About
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                I make websites feel cozy, personal, and easy to use.
              </h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                I&rsquo;m Maliha Tasnim, a Frontend Developer at{' '}
                <span className="font-medium text-pink-600">WebNest</span>{' '}
                focused on calm, feminine digital experiences. I build responsive
                sites with simple structure, soft color palettes, and natural
                rhythm.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                The goal is always a balanced page with clear sections, simple
                typography, and a personal touch that feels handmade.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={slideUp} className="space-y-6">
            {categories.map((category) => (
              <Card key={category} className="p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
                  {category}
                </p>
                <CardContent className="mt-4 grid grid-cols-2 gap-3 p-0">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-2xl bg-pink-50/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-pink-100"
                      >
                        {skill.name}
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
