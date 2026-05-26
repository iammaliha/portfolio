import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEOMeta from '../components/ui/SEOMeta'
import {
  Code2,
  FileCode,
  Terminal,
  Globe,
  Palette,
  Layout,
  Server,
  Cpu,
  Pen,
  Rocket,
  Cloud,
  GitBranch,
  Brain,
  Sparkles,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { skills, skillCategories } from '../data/projects'
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../animations'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  FileCode,
  Terminal,
  Globe,
  Palette,
  Layout,
  Server,
  Cpu,
  Pen,
  Rocket,
  Cloud,
  GitBranch,
  Brain,
  Sparkles,
}

function SkillCard({ skill }: { skill: (typeof skills)[0] }) {
  const Icon = iconMap[skill.icon] || Code2

  return (
    <motion.div variants={staggerItem} className="group">
      <div className="rounded-2xl border border-pink-100/40 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-200/20">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-200/30">
          <Icon size={24} className="text-pink-600" />
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
          {skill.name}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <Badge variant="secondary" className="text-[10px]">
            {skill.category}
          </Badge>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Experience:{' '}
          <span className="font-medium text-slate-700">
            {skill.experience}
          </span>
        </p>

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Proficiency</span>
            <span className="font-semibold text-pink-600">
              {skill.percentage}%
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-pink-100">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-pink-400 to-rose-400"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const [category, setCategory] = useState('All')

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal()

  const filtered =
    category === 'All'
      ? skills
      : skills.filter((s) => s.category === category)

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <SEOMeta title="Tech Stack" description="Technologies and tools Maliha Tasnim uses — frontend, backend, design, deployment, and AI." />
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
                My Skills
              </span>
            </motion.div>

            <motion.h1
              variants={slideUp}
              className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                Tech Stack &amp; Expertise
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500"
            >
              Technologies and tools I work with daily to bring beautiful,
              functional digital experiences to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Skills Grid ── */}
      <section ref={gridRef} className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            animate={gridVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div variants={slideUp} className="mb-10">
              <div className="flex flex-wrap justify-center gap-2">
                {skillCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      category === cat
                        ? 'bg-pink-500 text-white shadow-lg shadow-pink-200/50'
                        : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
                    }`}
                  >
                    {cat}
                    {cat !== 'All' && (
                      <span className="ml-1.5 text-xs opacity-70">
                        ({skills.filter((s) => s.category === cat).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideUp}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {filtered.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </motion.div>
              </AnimatePresence>
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
                Let&rsquo;s build something together
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pink-100">
                I am always excited to take on new challenges and work with
                passionate people.
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
