import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Card, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { slideUp, staggerContainer } from '../../animations'
import { Button } from '../ui/Button'
import { blogPosts } from '../../data/blog'

const latest = blogPosts.slice(0, 3)

export default function BlogSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="blog" ref={ref} className="bg-blush/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp} className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
              Blog
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Thoughts on design &amp; development.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Occasional writings about frontend development, UI design, and
              creating warm digital spaces.
            </p>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {latest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                <Card className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/20 sm:p-8">
                  <CardContent className="flex flex-1 flex-col p-0">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <h3 className="font-display mt-4 text-lg font-semibold text-slate-900 transition-colors group-hover:text-pink-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </motion.div>

          <motion.div variants={slideUp} className="mt-10 text-center">
            <Button variant="secondary" className="group" asChild>
              <Link to="/blog">
                View All Posts
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
