import { useState, type Dispatch, type SetStateAction } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEOMeta from '../components/ui/SEOMeta'
import {
  Sparkles,
  CheckCircle2,
  X,
  ChevronDown,
  ArrowRight,
  Star,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import {
  fadeIn,
  slideUp,
  staggerContainer,
  staggerItem,
} from '../animations'
import { cn } from '../utils/cn'

/* ─── Data ─── */

type PlanTier = 'starter' | 'professional' | 'enterprise'

interface PlanFeature {
  text: string
  included: boolean
}

interface Plan {
  id: PlanTier
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  popular: boolean
  features: PlanFeature[]
  cta: string
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for freelancers & small startups looking for a clean, professional web presence.',
    monthlyPrice: 29,
    yearlyPrice: 299,
    popular: false,
    features: [
      { text: '1 page website', included: true },
      { text: 'Basic SEO optimization', included: true },
      { text: 'Responsive design', included: true },
      { text: '1 revision round', included: true },
      { text: '2-week delivery', included: true },
      { text: 'Email support', included: true },
      { text: 'Custom animations', included: false },
      { text: 'CMS integration', included: false },
      { text: 'Priority 24/7 support', included: false },
    ],
    cta: 'Get Started',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Best for growing businesses that want a standout online experience with room to scale.',
    monthlyPrice: 79,
    yearlyPrice: 799,
    popular: true,
    features: [
      { text: 'Up to 5 pages', included: true },
      { text: 'Advanced SEO', included: true },
      { text: 'Responsive design', included: true },
      { text: '3 revision rounds', included: true },
      { text: '1-week delivery', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Custom animations', included: true },
      { text: 'CMS integration', included: true },
      { text: 'Priority 24/7 support', included: false },
    ],
    cta: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large companies & agencies that need a fully tailored solution with dedicated support.',
    monthlyPrice: 149,
    yearlyPrice: 1499,
    popular: false,
    features: [
      { text: 'Unlimited pages', included: true },
      { text: 'Full SEO strategy', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: '3-day delivery', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Full custom animations', included: true },
      { text: 'CMS + e-commerce', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    cta: 'Contact Me',
  },
]

/* ─── Comparison table ─── */

const comparisonFeatures: { label: string; starter: boolean; professional: boolean; enterprise: boolean }[] = [
  { label: 'Pages included', starter: false, professional: false, enterprise: false },
  { label: '1 page', starter: true, professional: false, enterprise: false },
  { label: 'Up to 5 pages', starter: false, professional: true, enterprise: false },
  { label: 'Unlimited pages', starter: false, professional: false, enterprise: true },
  { label: 'Basic SEO', starter: true, professional: true, enterprise: true },
  { label: 'Advanced SEO', starter: false, professional: true, enterprise: true },
  { label: 'Full SEO strategy', starter: false, professional: false, enterprise: true },
  { label: 'Responsive design', starter: true, professional: true, enterprise: true },
  { label: 'Custom animations', starter: false, professional: true, enterprise: true },
  { label: 'CMS integration', starter: false, professional: true, enterprise: true },
  { label: 'E-commerce support', starter: false, professional: false, enterprise: true },
  { label: 'Revision rounds', starter: false, professional: false, enterprise: false },
  { label: '1 revision', starter: true, professional: false, enterprise: false },
  { label: '3 revisions', starter: false, professional: true, enterprise: false },
  { label: 'Unlimited revisions', starter: false, professional: false, enterprise: true },
  { label: 'Delivery time', starter: false, professional: false, enterprise: false },
  { label: '2-week delivery', starter: true, professional: false, enterprise: false },
  { label: '1-week delivery', starter: false, professional: true, enterprise: false },
  { label: '3-day delivery', starter: false, professional: false, enterprise: true },
  { label: 'Support', starter: false, professional: false, enterprise: false },
  { label: 'Email support', starter: true, professional: true, enterprise: true },
  { label: 'Priority 24/7 support', starter: false, professional: false, enterprise: true },
  { label: 'Dedicated manager', starter: false, professional: false, enterprise: true },
]

/* ─── FAQ ─── */

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Can I switch plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time. If you upgrade, you\'ll be charged the prorated difference. Downgrades take effect at the start of the next billing cycle.',
  },
  {
    question: 'What happens if I need more revisions?',
    answer:
      'The Starter plan includes one revision round, Professional includes three, and Enterprise includes unlimited revisions. If you need extra revisions on a lower plan, you can purchase additional rounds at a reasonable rate.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes. Every plan includes support during the active project phase. For post-launch maintenance, we offer monthly retainers tailored to your needs — content updates, security patches, performance monitoring, and more.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on the plan: Starter projects are delivered within 2 weeks, Professional within 1 week, and Enterprise within 3 days. Complex custom work may require additional time, which we\'ll communicate upfront.',
  },
  {
    question: 'What if I\'m not satisfied with the design?',
    answer:
      'Your satisfaction is my priority. Each plan includes revision rounds to refine the design. If you\'re still not happy, we\'ll work together until the design meets your expectations — no extra charges.',
  },
  {
    question: 'Do you require a deposit?',
    answer:
      'Yes, a 50% deposit is required to start the project, with the remaining 50% due upon completion and your approval. For Enterprise clients, we can arrange milestone-based payments.',
  },
]

/* ─── Pricing Toggle ─── */

function PricingToggle({
  isYearly,
  onChange,
}: {
  isYearly: boolean
  onChange: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={cn(
          'text-sm font-medium transition-colors duration-300',
          !isYearly ? 'text-slate-900' : 'text-slate-400',
        )}
      >
        Monthly
      </span>

      <button
        onClick={() => onChange(!isYearly)}
        className={cn(
          'relative h-7 w-12 rounded-full transition-colors duration-300',
          isYearly ? 'bg-pink-500' : 'bg-slate-200',
        )}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={cn(
            'absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md',
            isYearly ? 'right-0.5' : 'left-0.5',
          )}
        />
      </button>

      <span
        className={cn(
          'relative text-sm font-medium transition-colors duration-300',
          isYearly ? 'text-slate-900' : 'text-slate-400',
        )}
      >
        Yearly
        <span className="absolute -top-3 -right-20 whitespace-nowrap rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
          Save ~20%
        </span>
      </span>
    </div>
  )
}

/* ─── Sections ─── */

function PricingHeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(251,207,232,0.35),_transparent_50%)]" />
      <div className="pointer-events-none absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-200/15 blur-3xl" />

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
            Pricing
          </motion.div>

          <motion.div variants={slideUp} className="mt-8 space-y-2">
            <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
              Simple, transparent{' '}
              <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-300 bg-clip-text text-transparent">
                pricing
              </span>
            </h1>
            <p className="text-base font-medium text-slate-400">
              Choose the plan that fits your needs. No hidden fees.
            </p>
          </motion.div>

          <motion.p
            variants={slideUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            Every plan includes a discovery call, responsive design, and my
            commitment to delivering beautiful, functional results.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function PricingCardsSection({ isYearly }: { isYearly: boolean }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-3"
        >
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const period = isYearly ? '/year' : '/month'
            return (
              <motion.div
                key={plan.id}
                variants={staggerItem}
                className="relative flex"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                    <Badge className="inline-flex items-center gap-1.5 whitespace-nowrap bg-gradient-to-r from-pink-500 to-rose-400 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-pink-300/30">
                      <Star size={12} className="fill-white" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={cn(
                    'flex w-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
                    plan.popular
                      ? 'relative border-pink-300 shadow-lg shadow-pink-200/20 hover:shadow-pink-200/30'
                      : 'hover:shadow-pink-200/20',
                  )}
                >
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {plan.description}
                    </p>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="font-display text-4xl font-bold text-slate-900">
                        ${price}
                      </span>
                      <span className="text-sm text-slate-400">{period}</span>
                    </div>

                    <ul className="mt-8 space-y-3.5">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3 text-sm text-slate-600">
                          {feature.included ? (
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-pink-500"
                            />
                          ) : (
                            <X
                              size={16}
                              className="mt-0.5 shrink-0 text-slate-300"
                            />
                          )}
                          <span
                            className={cn(
                              !feature.included && 'text-slate-400',
                            )}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button
                      variant={plan.popular ? 'default' : 'secondary'}
                      className={cn(
                        'w-full group',
                        plan.popular &&
                          'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-lg shadow-pink-300/30 hover:from-pink-600 hover:to-rose-500',
                      )}
                    >
                      {plan.cta}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
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

function ComparisonSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp} className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
              Comparison
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Find the perfect fit
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Detailed breakdown of what each plan includes so you can choose
              with confidence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="overflow-hidden rounded-2xl border border-pink-100/60 shadow-lg shadow-pink-200/10"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-pink-100/60 bg-pink-50/50">
                    <th className="px-6 py-4 font-display text-base font-semibold text-slate-900">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center font-display text-base font-semibold text-slate-900">
                      Starter
                    </th>
                    <th className="px-6 py-4 text-center font-display text-base font-semibold text-pink-600">
                      Professional
                    </th>
                    <th className="px-6 py-4 text-center font-display text-base font-semibold text-slate-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => {
                    const isSectionHeader =
                      row.label === 'Pages included' ||
                      row.label === 'Revision rounds' ||
                      row.label === 'Delivery time' ||
                      row.label === 'Support'
                    return (
                      <tr
                        key={i}
                        className={cn(
                          'border-b border-pink-100/30 transition-colors hover:bg-pink-50/30',
                          isSectionHeader && 'bg-pink-50/70 font-medium',
                        )}
                      >
                        <td
                          className={cn(
                            'px-6 py-3.5 text-slate-700',
                            isSectionHeader && 'font-semibold text-slate-900',
                          )}
                        >
                          {row.label}
                        </td>
                        <td className="px-6 py-3.5 text-center">
                          {typeof row.starter === 'boolean' ? (
                            row.starter ? (
                              <CheckCircle2
                                size={18}
                                className="mx-auto text-pink-500"
                              />
                            ) : (
                              <X
                                size={18}
                                className="mx-auto text-slate-300"
                              />
                            )
                          ) : null}
                        </td>
                        <td className="px-6 py-3.5 text-center">
                          {typeof row.professional === 'boolean' ? (
                            row.professional ? (
                              <CheckCircle2
                                size={18}
                                className="mx-auto text-pink-500"
                              />
                            ) : (
                              <X
                                size={18}
                                className="mx-auto text-slate-300"
                              />
                            )
                          ) : null}
                        </td>
                        <td className="px-6 py-3.5 text-center">
                          {typeof row.enterprise === 'boolean' ? (
                            row.enterprise ? (
                              <CheckCircle2
                                size={18}
                                className="mx-auto text-pink-500"
                              />
                            ) : (
                              <X
                                size={18}
                                className="mx-auto text-slate-300"
                              />
                            )
                          ) : null}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function FaqSection() {
  const { ref, isVisible } = useScrollReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp} className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
              FAQ
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Everything you need to know about my pricing and process.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mx-auto max-w-3xl space-y-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <Card key={i} className="overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left sm:p-6"
                  >
                    <span className="pr-4 text-sm font-medium text-slate-900 sm:text-base">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-50 text-pink-500"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-pink-100/40 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                          <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function PricingCTASection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-rose-400 to-pink-400 px-8 py-16 shadow-2xl shadow-pink-200/40 sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <motion.h2
              variants={slideUp}
              className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Not sure which plan is right?
            </motion.h2>

            <motion.p
              variants={slideUp}
              className="mt-4 max-w-lg text-base leading-relaxed text-white/80"
            >
              Let&rsquo;s hop on a quick call to discuss your project and find
              the perfect solution together.
            </motion.p>

            <motion.div variants={fadeIn} className="mt-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group border-2 border-white/30 bg-white text-pink-600 shadow-lg shadow-pink-300/30 hover:bg-pink-50 hover:shadow-xl hover:shadow-pink-300/40"
              >
                Book a Free Consultation
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

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <SEOMeta title="Pricing" description="Simple, transparent pricing for web development services — Starter, Professional, and Enterprise plans." />
      <PricingHeroSection />

      <div className="py-4">
        <PricingToggle isYearly={isYearly} onChange={setIsYearly} />
      </div>

      <PricingCardsSection isYearly={isYearly} />
      <ComparisonSection />
      <FaqSection />
      <PricingCTASection />
    </motion.div>
  )
}
