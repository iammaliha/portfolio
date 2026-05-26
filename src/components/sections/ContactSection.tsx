import { motion } from 'framer-motion'
import { Mail, MapPin, Briefcase } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Card, CardContent } from '../ui/Card'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { slideUp, staggerContainer } from '../../animations'

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contact" ref={ref} className="bg-blush/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp} className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
              Contact
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Say hello and start something gentle.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              If you have a project idea or want a website refresh, I&rsquo;d
              love to help.
            </p>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <Card className="p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
                Contact details
              </p>
              <CardContent className="mt-8 space-y-6 p-0">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </p>
                    <a
                      href="mailto:maliha.tasnim@example.com"
                      className="mt-1 block text-sm text-slate-900 transition-colors hover:text-pink-600"
                    >
                      261-15-338@diu.edu.bd
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-slate-900">
                      Remote / Worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Availability
                    </p>
                    <p className="mt-1 text-sm text-slate-900">
                      Freelance and full-time opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 sm:p-10">
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="grid gap-2 text-sm text-slate-700">
                  Name
                  <Input type="text" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm text-slate-700">
                  Email
                  <Input type="email" placeholder="Your email" />
                </label>
                <label className="grid gap-2 text-sm text-slate-700">
                  Message
                  <Textarea placeholder="Tell me about your project" />
                </label>
                <Button type="submit" className="w-full">
                  Send a Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
