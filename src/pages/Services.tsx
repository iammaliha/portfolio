import { type ElementType } from 'react'
import { motion } from 'framer-motion'
import SEOMeta from '../components/ui/SEOMeta'
import {
  Sparkles,
  Code2,
  Monitor,
  Palette,
  Layout,
  Globe,
  BarChart3,
  Zap,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import {
  fadeIn,
  slideUp,
  staggerContainer,
  staggerItem,
} from '../animations'

interface ServiceFeature {
  text: string
}

interface Service {
  icon: ElementType
  title: string
  description: string
  features: ServiceFeature[]
}

const services: Service[] = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Beautiful, responsive websites built with modern technologies. I craft pixel-perfect interfaces that feel intuitive and look stunning across every device.',
    features: [
      { text: 'Semantic HTML & accessible markup' },
      { text: 'Modern CSS with Tailwind & animations' },
      { text: 'Cross-browser & cross-device compatibility' },
      { text: 'Performance-optimized delivery' },
    ],
  },
  {
    icon: Monitor,
    title: 'React Development',
    description:
      'Custom React applications with clean architecture, reusable components, and smooth state management tailored to your project needs.',
    features: [
      { text: 'Component-driven architecture' },
      { text: 'TypeScript for type-safe code' },
      { text: 'Server-side rendering with Next.js' },
      { text: 'State management & data fetching' },
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered designs with a soft, feminine aesthetic. I create wireframes, prototypes, and visual designs that balance beauty with usability.',
    features: [
      { text: 'User research & persona development' },
      { text: 'Wireframing & interactive prototypes' },
      { text: 'Feminine color palettes & typography' },
      { text: 'Usability testing & iteration' },
    ],
  },
  {
    icon: Layout,
    title: 'Responsive Web Design',
    description:
      'Fluid, adaptive layouts that look and feel perfect on every screen — from mobile phones to large desktop displays.',
    features: [
      { text: 'Mobile-first responsive strategy' },
      { text: 'Fluid grids & flexible images' },
      { text: 'Touch-friendly interactions' },
      { text: 'Consistent experience across breakpoints' },
    ],
  },
  {
    icon: Globe,
    title: 'Landing Page Development',
    description:
      'High-converting, visually captivating landing pages designed to tell your story and engage visitors from the first scroll.',
    features: [
      { text: 'Scroll-triggered animations' },
      { text: 'Clear hierarchy & CTAs' },
      { text: 'Fast load times & SEO basics' },
      { text: 'A/B testing ready structure' },
    ],
  },
  {
    icon: BarChart3,
    title: 'Dashboard UI Development',
    description:
      'Data-rich admin interfaces that transform complex information into clear, actionable visuals with a clean and calming design.',
    features: [
      { text: 'Data visualization & charts' },
      { text: 'Filterable tables & lists' },
      { text: 'Real-time updates' },
      { text: 'User role & permission UI' },
    ],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Speed audits and optimizations to make your website load faster, rank higher, and deliver a smoother user experience.',
    features: [
      { text: 'Core Web Vitals improvement' },
      { text: 'Image & asset optimization' },
      { text: 'Code splitting & lazy loading' },
      { text: 'Lighthouse score optimization' },
    ],
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description:
      'Ongoing support to keep your site secure, up-to-date, and running smoothly — so you can focus on growing your business.',
    features: [
      { text: 'Regular updates & backups' },
      { text: 'Security monitoring & fixes' },
      { text: 'Content updates & additions' },
      { text: 'Performance monitoring' },
    ],
  },
]

/* ─── Sections ─── */

function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,207,232,0.4),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(252,231,243,0.3),_transparent_50%)]" />
      <div className="pointer-events-none absolute top-16 right-20 h-56 w-56 rounded-full bg-pink-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-12 h-36 w-36 rounded-full bg-rose-100/25 blur-3xl" />

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
            What I Offer
          </motion.div>

          <motion.div variants={slideUp} className="mt-8 space-y-2">
            <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
              My{' '}
              <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-300 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-base font-medium text-slate-400">
              Everything you need to bring your digital vision to life
            </p>
          </motion.div>

          <motion.p
            variants={slideUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            From concept to launch and beyond, I offer end-to-end design and
            development services crafted with care, attention to detail, and a
            soft, feminine touch.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function ServicesGridSection() {
  const { ref, isVisible } = useScrollReveal()

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <section ref={ref} className="py-8 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            const isWide = i === 0 || i === services.length - 1
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className={isWide ? 'lg:col-span-2' : ''}
              >
                <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/20 sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50 text-pink-500 shadow-sm transition-all duration-300 group-hover:from-pink-200 group-hover:to-rose-100 group-hover:shadow-md group-hover:shadow-pink-200/30">
                    <Icon size={26} />
                  </div>

                  <h3 className="font-display mt-6 text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-500">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-pink-400"
                        />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={scrollToContact}
                      className="group/btn"
                    >
                      Get Started
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function ServicesCTASection() {
  const { ref, isVisible } = useScrollReveal()

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <section ref={ref} className="pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-rose-400 to-pink-400 px-8 py-16 shadow-2xl shadow-pink-200/40 sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <motion.h2
              variants={slideUp}
              className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Ready to start your project?
            </motion.h2>

            <motion.p
              variants={slideUp}
              className="mt-4 max-w-lg text-base leading-relaxed text-white/80"
            >
              Let&rsquo;s discuss how I can help bring your ideas to life with
              elegant design and clean code.
            </motion.p>

            <motion.div variants={fadeIn} className="mt-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group border-2 border-white/30 bg-white text-pink-600 shadow-lg shadow-pink-300/30 hover:bg-pink-50 hover:shadow-xl hover:shadow-pink-300/40"
              >
                Start a Conversation
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Page ─── */

export default function Services() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <SEOMeta title="Services" description="Frontend development, UI/UX design, and web services by Maliha Tasnim." />
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesCTASection />
    </motion.div>
  )
}
