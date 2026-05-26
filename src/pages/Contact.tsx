import { useState, useCallback, type FormEvent, type ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import SEOMeta from '../components/ui/SEOMeta'
import {
  Sparkles,
  Mail,
  MapPin,
  Briefcase,
  Send,
  Code2,
  Palette,
  AtSign,
  Calendar,
  ChevronRight,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import Toast, { type ToastType } from '../components/ui/Toast'
import {
  fadeIn,
  slideUp,
  staggerContainer,
  staggerItem,
} from '../animations'
import { cn } from '../utils/cn'

/* ─── Validation ─── */

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim() || form.name.trim().length < 2)
    errors.name = 'Please enter your name (at least 2 characters).'
  if (!form.email.trim() || !EMAIL_RE.test(form.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (!form.subject.trim() || form.subject.trim().length < 3)
    errors.subject = 'Please enter a subject (at least 3 characters).'
  if (!form.message.trim() || form.message.trim().length < 10)
    errors.message = 'Please enter a message (at least 10 characters).'
  return errors
}

/* ─── Social links ─── */

interface SocialLink {
  label: string
  icon: typeof Code2
  href: string
}

const socialLinks: SocialLink[] = [
  { label: 'GitHub', icon: Code2, href: 'https://github.com/maliha-tasnim' },
  { label: 'Dribbble', icon: Palette, href: 'https://dribbble.com/maliha-tasnim' },
  { label: 'Twitter', icon: AtSign, href: 'https://twitter.com/maliha_tasnim' },
  { label: 'Email', icon: Mail, href: 'mailto:261-15-338@diu.edu.bd' },
]

/* ─── Contact info ─── */

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: '261-15-338@diu.edu.bd',
    href: 'mailto:261-15-338@diu.edu.bd',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote / Worldwide',
  },
  {
    icon: Briefcase,
    label: 'Availability',
    value: 'Freelance & full-time opportunities',
  },
]

/* ─── Sections ─── */

function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,207,232,0.35),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(252,231,243,0.25),_transparent_50%)]" />
      <div className="pointer-events-none absolute -top-20 right-10 h-64 w-64 rounded-full bg-pink-200/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-rose-100/20 blur-3xl" />

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
            Get in Touch
          </motion.div>

          <motion.div variants={slideUp} className="mt-8 space-y-2">
            <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
              Let&apos;s work{' '}
              <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-300 bg-clip-text text-transparent">
                together
              </span>
            </h1>
            <p className="text-base font-medium text-slate-400">
              Have a project in mind? I&rsquo;d love to hear about it.
            </p>
          </motion.div>

          <motion.p
            variants={slideUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            Whether you need a brand-new website, a redesign, or just want to say
            hello &mdash; fill out the form and I&rsquo;ll get back to you within
            24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactInfoCard() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      <div className="space-y-6">
        {contactInfo.map((info) => {
          const Icon = info.icon
          return (
            <motion.div key={info.label} variants={staggerItem}>
              <Card className="flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/20 sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50 text-pink-500 shadow-sm">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="mt-1 block truncate text-sm font-medium text-slate-900 transition-colors hover:text-pink-600"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-slate-900">
                      {info.value}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Social links */}
      <motion.div variants={staggerItem} className="mt-6">
        <Card className="p-5 sm:p-6">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">
            Follow Me
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-500 shadow-sm transition-all duration-200 hover:bg-gradient-to-br hover:from-pink-100 hover:to-rose-50 hover:text-pink-600 hover:shadow-md hover:shadow-pink-200/30"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </Card>
      </motion.div>

      {/* Calendly placeholder */}
      <motion.div variants={staggerItem} className="mt-6">
        <Card className="overflow-hidden p-0">
          <div className="bg-gradient-to-br from-pink-500 via-rose-400 to-pink-400 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Schedule a Call
                </p>
                <p className="text-xs text-white/70">
                  30-min discovery session
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-pink-100/60 bg-pink-50/50 px-4 py-3 text-sm text-slate-500">
                Select a date
              </div>
              <div className="rounded-xl border border-pink-100/60 bg-pink-50/50 px-4 py-3 text-sm text-slate-500">
                Select a time
              </div>
            </div>

            <Button className="w-full group">
              View Available Times
              <ChevronRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Button>

            <p className="text-center text-xs text-slate-400">
              Powered by{' '}
              <span className="font-medium text-pink-500">Calendly</span>
            </p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function ContactFormSection() {
  const { ref, isVisible } = useScrollReveal()

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [toast, setToast] = useState<{
    message: string
    type: ToastType
    visible: boolean
  }>({ message: '', type: 'success', visible: false })

  const closeToast = useCallback(
    () => setToast((prev) => ({ ...prev, visible: false })),
    [],
  )

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const validation = validate(form)
    setErrors(validation)

    if (Object.keys(validation).length > 0) return

    /* Simulate sending */
    setToast({
      message: 'Message sent successfully! I\'ll get back to you soon.',
      type: 'success',
      visible: true,
    })
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <Card className="p-6 sm:p-10">
          <motion.div variants={staggerItem}>
            <p className="text-xs uppercase tracking-[0.2em] text-pink-500">
              Send a Message
            </p>
            <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              Drop me a line
            </h2>
          </motion.div>

          <motion.form
            variants={staggerItem}
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Name <span className="text-pink-400">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 text-xs text-red-400"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Email <span className="text-pink-400">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 text-xs text-red-400"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Subject <span className="text-pink-400">*</span>
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={form.subject}
                onChange={handleChange}
                className={errors.subject ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : ''}
              />
              {errors.subject && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 text-xs text-red-400"
                >
                  {errors.subject}
                </motion.p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Message <span className="text-pink-400">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, goals, and timeline..."
                value={form.message}
                onChange={handleChange}
                className={cn(
                  'min-h-[140px]',
                  errors.message ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : '',
                )}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 text-xs text-red-400"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full group text-base">
              <Send size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Send Message
            </Button>
          </motion.form>
        </Card>
      </motion.div>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={closeToast}
      />
    </>
  )
}

/* ─── Page ─── */

export default function Contact() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <SEOMeta title="Contact" description="Get in touch with Maliha Tasnim for web development, design, and collaboration opportunities." />
      <ContactHeroSection />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
            <ContactInfoCard />
            <ContactFormSection />
          </div>
        </div>
      </section>
    </motion.div>
  )
}
