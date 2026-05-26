import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SEOMeta from '../components/ui/SEOMeta'
import {
  Sparkles,
  Code2,
  Palette,
  Globe,
  BookOpen,
  Award,
  Target,
  GraduationCap,
  Heart,
  Star,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import {
  fadeIn,
  slideUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
} from '../animations'
import { skills } from '../data/projects'

/* ─── Data ─── */

const experiences = [
  {
    year: '2024 — Present',
    title: 'Frontend Developer',
    company: 'WebNest',
    description:
      'Leading frontend development, crafting soft feminine UIs, and building responsive web experiences for clients worldwide.',
  },
  {
    year: '2023 — 2024',
    title: 'Junior Frontend Developer',
    company: 'Tech Bloom',
    description:
      'Developed and maintained client websites using React and Tailwind. Collaborated on design systems and component libraries.',
  },
  {
    year: '2022 — 2023',
    title: 'Frontend Intern',
    company: 'Digital Hue',
    description:
      'Assisted in building landing pages and web apps. Gained hands-on experience with modern JavaScript frameworks and responsive design.',
  },
  {
    year: '2021 — 2022',
    title: 'Freelance Web Designer',
    company: 'Self-Employed',
    description:
      'Designed and developed custom websites for small businesses, focusing on clean layouts, soft palettes, and user-friendly interfaces.',
  },
]

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    school: 'Daffodil International University',
    year: '2020 — 2024',
  },
  {
    degree: 'Higher Secondary Certificate',
    school: 'Dhaka College',
    year: '2018 — 2020',
  },
]

const achievements = [
  { icon: Award, title: 'Best Portfolio Design', description: 'Recognized for outstanding UI design and creative layout composition.' },
  { icon: Star, title: 'Top Rated Freelancer', description: 'Achieved top-rated status on freelance platforms with 100% client satisfaction.' },
  { icon: Code2, title: 'Open Source Contributor', description: 'Contributed to several open-source React component libraries and design systems.' },
  { icon: Heart, title: 'Community Mentor', description: 'Mentored aspiring developers through workshops and one-on-one guidance sessions.' },
]

const goals = [
  { icon: Target, title: 'Master Animations', description: 'Deepen expertise in advanced web animations and interactive storytelling.' },
  { icon: Globe, title: 'Global Impact', description: 'Work with international brands to create beautiful, accessible web experiences.' },
  { icon: BookOpen, title: 'Share Knowledge', description: 'Start a blog and create resources to help others learn frontend development.' },
  { icon: Palette, title: 'Design Systems', description: 'Build and publish a comprehensive feminine design system for the web.' },
]

const aboutStats = [
  { value: 5, suffix: '+', label: 'Years Coding' },
  { value: 60, suffix: '+', label: 'Projects Built' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 12, suffix: '+', label: 'Technologies' },
]

/* ─── Shared components ─── */

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
      {children}
    </p>
  )
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
      {children}
    </h2>
  )
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    const duration = 2000
    const steps = 40
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

/* ─── Sections ─── */

function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,207,232,0.4),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(252,231,243,0.3),_transparent_50%)]" />
      <div className="pointer-events-none absolute top-12 right-16 h-56 w-56 rounded-full bg-pink-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-8 left-10 h-36 w-36 rounded-full bg-rose-100/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 rounded-full border border-pink-200/50 bg-white/70 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-pink-600 shadow-sm backdrop-blur-sm"
          >
            <Sparkles size={12} className="text-pink-400" />
            Get to Know Me
          </motion.div>

          <motion.div variants={slideUp} className="mt-8 space-y-2">
            <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
              About{' '}
              <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-300 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-base font-medium text-slate-400">
              Frontend Developer at WebNest
            </p>
          </motion.div>

          <motion.p
            variants={slideUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            I believe every pixel should tell a story. With a passion for soft,
            feminine design and clean code, I create websites that feel as
            beautiful as they perform.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function PersonalStorySection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={slideInLeft}>
            <SectionLabel>My Journey</SectionLabel>
            <SectionHeading>A story built with curiosity and care.</SectionHeading>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                My love for the web started in high school when I built my first
                HTML page — a simple, pink-themed profile card. I was fascinated
                by how a few lines of code could create something beautiful and
                interactive.
              </p>
              <p>
                That curiosity led me to pursue Computer Science at Daffodil
                International University, where I discovered my passion for
                frontend development. I fell in love with the blend of design and
                logic, and the ability to craft experiences that make people feel
                something.
              </p>
              <p>
                Today, as a Frontend Developer at WebNest, I specialize in
                creating warm, feminine interfaces that are both elegant and
                functional. Every project is an opportunity to bring beauty and
                purpose together.
              </p>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="flex justify-center">
            <div className="relative h-72 w-72 rounded-[2.5rem] bg-gradient-to-br from-pink-200 via-rose-100 to-pink-100 shadow-2xl shadow-pink-200/30 sm:h-80 sm:w-80">
              <div className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-pink-200/20">
                <Heart size={24} className="fill-pink-400 text-pink-400" />
              </div>
              <div className="absolute -bottom-3 -left-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg shadow-pink-200/20">
                <Code2 size={22} className="text-pink-500" />
              </div>
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-7xl font-bold text-white/60">
                  MT
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceTimelineSection() {
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
            <SectionLabel>Experience</SectionLabel>
          </motion.div>
          <motion.div variants={slideUp} className="mb-14 text-center">
            <SectionHeading>Where I&rsquo;ve worked and grown.</SectionHeading>
          </motion.div>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-[1.625rem] top-0 bottom-0 w-px bg-gradient-to-b from-pink-300 via-pink-200 to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.year + exp.title}
                  variants={staggerItem}
                  className="relative pl-14"
                >
                  <div className="absolute left-0 top-1 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border-2 border-pink-200 bg-white text-sm font-bold text-pink-600 shadow-sm">
                    {i + 1}
                  </div>

                  <Card className="p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-8">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-pink-500">
                      {exp.year}
                    </span>
                    <h3 className="font-display mt-2 text-xl font-semibold text-slate-900">
                      {exp.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-pink-600">
                      {exp.company}
                    </p>
                    <p className="mt-3 leading-relaxed text-slate-500">
                      {exp.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const categories = [...new Set(skills.map((s) => s.category))]
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp} className="mb-4 text-center">
            <SectionLabel>Skills & Expertise</SectionLabel>
          </motion.div>
          <motion.div variants={slideUp} className="mb-14 text-center">
            <SectionHeading>Tools and technologies I use daily.</SectionHeading>
          </motion.div>

          <motion.div variants={slideUp} className="grid gap-8 md:grid-cols-3">
            {categories.map((category) => (
              <Card key={category} className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-pink-500">
                  {category}
                </p>
                <CardContent className="mt-5 flex flex-wrap gap-2 p-0">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <Badge key={skill.name} variant="default">
                        {skill.name}
                      </Badge>
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

function EducationSection() {
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
            <SectionLabel>Education</SectionLabel>
          </motion.div>
          <motion.div variants={slideUp} className="mb-14 text-center">
            <SectionHeading>My academic background.</SectionHeading>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2"
          >
            {education.map((edu) => (
              <Card
                key={edu.degree}
                className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-500">
                  <GraduationCap size={22} />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-slate-900">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-pink-600">{edu.school}</p>
                <p className="mt-1 text-xs text-slate-400">{edu.year}</p>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp} className="mb-4 text-center">
            <SectionLabel>Achievements</SectionLabel>
          </motion.div>
          <motion.div variants={slideUp} className="mb-14 text-center">
            <SectionHeading>Milestones I&rsquo;m proud of.</SectionHeading>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="grid gap-6 sm:grid-cols-2"
          >
            {achievements.map((item) => {
              const Icon = item.icon
              return (
                <Card
                  key={item.title}
                  className="group flex items-start gap-5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-pink-500 transition-colors group-hover:bg-pink-100">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </Card>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function GoalsSection() {
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
            <SectionLabel>Goals & Vision</SectionLabel>
          </motion.div>
          <motion.div variants={slideUp} className="mb-14 text-center">
            <SectionHeading>What I&rsquo;m working toward next.</SectionHeading>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {goals.map((goal) => {
              const Icon = goal.icon
              return (
                <Card
                  key={goal.title}
                  className="group p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50 text-pink-500 shadow-sm transition-shadow group-hover:shadow-md">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display mt-5 text-base font-semibold text-slate-900">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {goal.description}
                  </p>
                </Card>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function AboutStatsSection() {
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
            {aboutStats.map((stat) => (
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

/* ─── Page ─── */

export default function About() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <SEOMeta title="About" description="Learn more about Maliha Tasnim — a Frontend Developer passionate about crafting calm, feminine web experiences." />
      <AboutHeroSection />
      <PersonalStorySection />
      <ExperienceTimelineSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <GoalsSection />
      <AboutStatsSection />
    </motion.div>
  )
}
