import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Card, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { slideUp, staggerContainer, staggerItem } from '../../animations'
import { projects } from '../../data/projects'

const featured = projects.filter((p) => p.featured)

export default function FeaturedProjectsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp} className="mb-4 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
              Featured Work
            </p>
          </motion.div>
          <motion.div variants={slideUp} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Selected projects I&rsquo;ve crafted.
            </h2>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {featured.map((project, i) => (
              <motion.div
                key={project.title}
                variants={staggerItem}
                className={i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <Card
                  className={`group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/20 sm:p-8 ${
                    i === 0 ? 'lg:flex lg:items-center lg:gap-8' : ''
                  }`}
                >
                  {i === 0 && (
                    <div className="mb-6 flex h-40 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50 lg:mb-0 lg:h-48 lg:w-72 lg:shrink-0">
                      <span className="font-display text-6xl text-pink-200/60">
                        ★
                      </span>
                    </div>
                  )}
                  <CardContent className="p-0">
                    <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-500">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={slideUp} className="mt-10 text-center">
            <Button variant="secondary" className="group">
              View All Projects
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
