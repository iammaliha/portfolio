import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react'
import SEOMeta from '../components/ui/SEOMeta'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { blogPosts, blogCategories } from '../data/blog'
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../animations'

const ITEMS_PER_PAGE = 6

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <motion.div variants={staggerItem} className="group">
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className="flex h-full flex-col rounded-2xl border border-pink-100/40 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-200/20">
          <div
            className={`flex h-44 w-full items-center justify-center rounded-t-2xl bg-gradient-to-br ${post.image} sm:h-48`}
          >
            <span className="font-display text-5xl font-bold text-white/25">
              {post.title
                .split(' ')
                .map((w) => w[0])
                .join('')
                .slice(0, 3)}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-[10px]">
                {post.category}
              </Badge>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-pink-600">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function FeaturedCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <motion.div variants={staggerItem} className="md:col-span-2 lg:col-span-2">
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-pink-100/40 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/20 sm:flex-row">
          <div
            className={`flex h-48 w-full shrink-0 items-center justify-center bg-gradient-to-br ${post.image} sm:h-auto sm:w-72`}
          >
            <span className="font-display text-6xl font-bold text-white/25">
              {post.title
                .split(' ')
                .map((w) => w[0])
                .join('')
                .slice(0, 3)}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Calendar size={12} />
              {post.date}
              <span className="mx-2">&middot;</span>
              <Clock size={12} />
              {post.readTime}
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-slate-900 transition-colors group-hover:text-pink-600 sm:text-2xl">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              {post.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                {post.category}
              </Badge>
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Blog() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollReveal()
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal()

  const featured = useMemo(() => blogPosts.filter((p) => p.featured), [])

  const filtered = useMemo(() => {
    let result = blogPosts
    if (category !== 'All') {
      result = result.filter((p) => p.category === category)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      )
    }
    return result
  }, [category, search])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  )

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <SEOMeta title="Blog" description="Thoughts on frontend development, UI/UX design, and web craftsmanship by Maliha Tasnim." />
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
                Blog
              </span>
            </motion.div>
            <motion.h1
              variants={slideUp}
              className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                Thoughts &amp; Insights
              </span>
            </motion.h1>
            <motion.p
              variants={slideUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500"
            >
              Writings about frontend development, UI/UX design, and creating
              beautiful digital experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured ── */}
      <section ref={featuredRef} className="-mt-10 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            animate={featuredVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div variants={slideUp} className="mb-8 text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Featured Articles
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.slice(0, 3).map((post, i) =>
                i === 0 ? (
                  <FeaturedCard key={post.slug} post={post} />
                ) : (
                  <BlogCard key={post.slug} post={post} />
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── All Posts ── */}
      <section ref={gridRef} className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            animate={gridVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div variants={slideUp} className="mb-10 text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                All Posts
              </h2>
            </motion.div>

            <motion.div variants={slideUp} className="mb-10">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex flex-wrap justify-center gap-2">
                  {blogCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setCategory(cat)
                        setPage(1)
                      }}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        category === cat
                          ? 'bg-pink-500 text-white shadow-lg shadow-pink-200/50'
                          : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
                      }`}
                    >
                      {cat}
                      {cat !== 'All' && (
                        <span className="ml-1.5 text-xs opacity-70">
                          (
                          {
                            blogPosts.filter((p) => p.category === cat).length
                          }
                          )
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-64">
                  <Search
                    size={16}
                    className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-pink-300"
                  />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value)
                      setPage(1)
                    }}
                    className="w-full rounded-full border border-pink-200 bg-white py-2.5 pr-4 pl-9 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideUp} className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {paginated.length > 0 ? (
                  <motion.div
                    key={category + search + page}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {paginated.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <Search size={40} className="mb-4 text-pink-200" />
                    <h3 className="font-display text-xl font-semibold text-slate-900">
                      No articles found
                    </h3>
                    <p className="mt-2 text-slate-500">
                      Try a different category or search term
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-4"
                      onClick={() => {
                        setCategory('All')
                        setSearch('')
                        setPage(1)
                      }}
                    >
                      Clear filters
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {totalPages > 1 && (
              <motion.div
                variants={slideUp}
                className="mt-12 flex items-center justify-center gap-2"
              >
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-200 text-pink-600 transition-all duration-300 hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowRight size={16} className="rotate-180" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                        page === p
                          ? 'bg-pink-500 text-white shadow-lg shadow-pink-200/50'
                          : 'border border-pink-200 text-slate-600 hover:bg-pink-50'
                      }`}
                    >
                      {p}
                    </button>
                  ),
                )}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-200 text-pink-600 transition-all duration-300 hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )}
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
                Have a topic in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pink-100">
                I am always exploring new ideas. If there is something you would
                like me to write about, let me know.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="mt-8 bg-white text-pink-600 hover:bg-pink-50"
                asChild
              >
                <a href="/#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
