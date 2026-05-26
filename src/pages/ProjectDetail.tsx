import { useState, useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/ui/SEOMeta'
import {
  ExternalLink,
  Code2,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { projects } from '../data/projects'
import { projectDetails } from '../data/projectDetails'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../animations'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'design-process', label: 'Design Process' },
  { id: 'development-process', label: 'Development Process' },
  { id: 'features', label: 'Features' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'results', label: 'Results' },
]

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-pink-100">
      <div
        className="h-full bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const [activeSection, setActiveSection] = useState('overview')

  const project = useMemo(() => projects.find((p) => p.id === id), [id])
  const detail = id ? projectDetails[id] : undefined

  const currentIndex = useMemo(
    () => projects.findIndex((p) => p.id === id),
    [id],
  )
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          )
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id.replace('section-', ''))
        }
      },
      { rootMargin: '-120px 0px -50% 0px', threshold: 0.1 },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(`section-${id}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(`section-${sectionId}`)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!project || !detail) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="font-display text-3xl font-semibold text-slate-900">
          Project not found
        </h1>
        <Button className="mt-6" asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <SEOMeta title={project?.title ?? 'Project'} description={project?.description} />
      <ScrollProgress />

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        {/* ── Hero ── */}
        <section ref={heroRef} className="relative overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white" />
          <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-rose-200/20 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6">
            <motion.div
              initial="hidden"
              animate={heroVisible ? 'visible' : 'hidden'}
              variants={staggerContainer}
            >
              <motion.div variants={slideUp}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-pink-600 transition-colors hover:text-pink-500"
                >
                  <ArrowLeft size={14} />
                  Back to Projects
                </Link>
              </motion.div>

              <motion.div variants={slideUp} className="mt-4">
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </motion.div>

              <motion.h1
                variants={slideUp}
                className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
              >
                {project.title}
              </motion.h1>

              <motion.p
                variants={slideUp}
                className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-500"
              >
                {project.description}
              </motion.p>

              <motion.div
                variants={slideUp}
                className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm"
              >
                {detail.client && (
                  <div>
                    <span className="font-medium text-slate-900">Client</span>
                    <p className="text-slate-500">{detail.client}</p>
                  </div>
                )}
                {detail.role && (
                  <div>
                    <span className="font-medium text-slate-900">Role</span>
                    <p className="text-slate-500">{detail.role}</p>
                  </div>
                )}
                {detail.duration && (
                  <div>
                    <span className="font-medium text-slate-900">Duration</span>
                    <p className="text-slate-500">{detail.duration}</p>
                  </div>
                )}
                <div>
                  <span className="font-medium text-slate-900">Year</span>
                  <p className="text-slate-500">{project.year}</p>
                </div>
              </motion.div>

              <motion.div variants={slideUp} className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    Live Preview
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code2 size={14} />
                    View Repository
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Content: Sidebar + Main ── */}
        <section ref={contentRef} className="pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex gap-12">
              {/* Sidebar */}
              <aside className="hidden w-56 shrink-0 lg:block">
                <nav className="sticky top-28 space-y-1">
                  {sections.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`block w-full rounded-lg px-4 py-2 text-left text-sm font-medium transition-all duration-300 ${
                        activeSection === id
                          ? 'bg-pink-100 text-pink-700'
                          : 'text-slate-500 hover:bg-pink-50 hover:text-pink-600'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Main Content */}
              <main className="min-w-0 flex-1">
                <motion.div
                  initial="hidden"
                  animate={contentVisible ? 'visible' : 'hidden'}
                  variants={staggerContainer}
                  className="space-y-20"
                >
                  {/* Overview */}
                  <motion.section
                    id="section-overview"
                    variants={staggerItem}
                    className="scroll-mt-28"
                  >
                    <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                      Project Overview
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-500">
                      {detail.overview}
                    </p>
                  </motion.section>

                  {/* Problem */}
                  <motion.section
                    id="section-problem"
                    variants={staggerItem}
                    className="scroll-mt-28"
                  >
                    <div className="rounded-2xl border border-rose-100/60 bg-rose-50/30 p-6 sm:p-8">
                      <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                        The Problem
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-slate-500">
                        {detail.problem}
                      </p>
                    </div>
                  </motion.section>

                  {/* Solution */}
                  <motion.section
                    id="section-solution"
                    variants={staggerItem}
                    className="scroll-mt-28"
                  >
                    <div className="rounded-2xl border border-pink-100/60 bg-pink-50/30 p-6 sm:p-8">
                      <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                        The Solution
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-slate-500">
                        {detail.solution}
                      </p>
                    </div>
                  </motion.section>

                  {/* Design Process */}
                  <motion.section
                    id="section-design-process"
                    variants={staggerItem}
                    className="scroll-mt-28"
                  >
                    <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                      Design Process
                    </h2>
                    <div className="mt-6 space-y-6">
                      {detail.designProcess.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-semibold text-pink-600">
                            {i + 1}
                          </span>
                          <p className="pt-1.5 text-base leading-relaxed text-slate-500">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Development Process */}
                  <motion.section
                    id="section-development-process"
                    variants={staggerItem}
                    className="scroll-mt-28"
                  >
                    <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                      Development Process
                    </h2>
                    <div className="mt-6 space-y-6">
                      {detail.developmentProcess.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-600">
                            {i + 1}
                          </span>
                          <p className="pt-1.5 text-base leading-relaxed text-slate-500">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Features */}
                  <motion.section
                    id="section-features"
                    variants={staggerItem}
                    className="scroll-mt-28"
                  >
                    <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                      Key Features
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {detail.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex gap-3 rounded-xl border border-pink-100/40 p-4"
                        >
                          <CheckCircle2
                            size={20}
                            className="mt-0.5 shrink-0 text-pink-500"
                          />
                          <p className="text-base leading-relaxed text-slate-500">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Gallery */}
                  <motion.section
                    id="section-gallery"
                    variants={staggerItem}
                    className="scroll-mt-28"
                  >
                    <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                      Gallery
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {detail.images.map((gradient, i) => (
                        <div
                          key={i}
                          className={`flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} sm:h-64 ${
                            i === 0 ? 'sm:col-span-2' : ''
                          }`}
                        >
                          <span className="font-display text-4xl font-bold text-white/30">
                            {project.title
                              .split(' ')
                              .map((w) => w[0])
                              .join('')
                              .slice(0, 3)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Challenges */}
                  <motion.section
                    id="section-challenges"
                    variants={staggerItem}
                    className="scroll-mt-28"
                  >
                    <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                      Challenges
                    </h2>
                    <ul className="mt-6 space-y-4">
                      {detail.challenges.map((challenge, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-600">
                            {i + 1}
                          </span>
                          <p className="text-base leading-relaxed text-slate-500">
                            {challenge}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.section>

                  {/* Results */}
                  <motion.section
                    id="section-results"
                    variants={staggerItem}
                    className="scroll-mt-28"
                  >
                    <div className="rounded-2xl border border-emerald-100/60 bg-emerald-50/30 p-6 sm:p-8">
                      <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                        Results
                      </h2>
                      <ul className="mt-6 space-y-4">
                        {detail.results.map((result, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-600">
                              {i + 1}
                            </span>
                            <p className="text-base leading-relaxed text-slate-500">
                              {result}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.section>
                </motion.div>
              </main>
            </div>
          </div>
        </section>

        {/* ── Prev / Next ── */}
        <section className="border-t border-pink-100/40 py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between gap-4">
              {prevProject ? (
                <Link
                  to={`/projects/${prevProject.id}`}
                  className="group flex items-center gap-3 text-left"
                >
                  <ArrowLeft
                    size={20}
                    className="shrink-0 text-pink-400 transition-transform group-hover:-translate-x-1"
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-pink-400">
                      Previous
                    </p>
                    <p className="mt-0.5 font-display text-base font-semibold text-slate-900 transition-colors group-hover:text-pink-600">
                      {prevProject.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  to={`/projects/${nextProject.id}`}
                  className="group flex items-center gap-3 text-right"
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-pink-400">
                      Next
                    </p>
                    <p className="mt-0.5 font-display text-base font-semibold text-slate-900 transition-colors group-hover:text-pink-600">
                      {nextProject.title}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="shrink-0 text-pink-400 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
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
                  Like what you see?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-pink-100">
                  Let us create something beautiful together for your next
                  project.
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
    </>
  )
}
