import { useState, useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/ui/SEOMeta'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Quote,
} from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { blogPosts } from '../data/blog'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  fadeIn,
  slideUp,
  staggerContainer,
  staggerItem,
} from '../animations'
import type { ContentBlock } from '../types'

const sections = [
  { id: 'article', label: 'Article' },
  { id: 'related', label: 'Related Posts' },
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

function ContentRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-base leading-[1.8] text-slate-600 sm:text-lg">
          {block.content}
        </p>
      )

    case 'heading': {
      const Tag = block.level === 2 ? 'h2' : 'h3'
      const size =
        block.level === 2
          ? 'text-2xl sm:text-3xl mt-12 mb-6'
          : 'text-xl sm:text-2xl mt-10 mb-4'
      return (
        <Tag
          className={`font-display font-semibold tracking-tight text-slate-900 ${size}`}
        >
          {block.content}
        </Tag>
      )
    }

    case 'code':
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-pink-100/40 shadow-sm">
          {block.language && (
            <div className="border-b border-pink-100/40 bg-pink-50/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-pink-500">
              {block.language}
            </div>
          )}
          <SyntaxHighlighter
            language={block.language || 'text'}
            style={oneLight}
            customStyle={{
              margin: 0,
              borderRadius: 0,
              fontSize: '0.875rem',
              lineHeight: 1.7,
            }}
            showLineNumbers
          >
            {block.content || ''}
          </SyntaxHighlighter>
        </div>
      )

    case 'list':
      return (
        <ul className="my-6 space-y-3">
          {block.items?.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
              {item}
            </li>
          ))}
        </ul>
      )

    case 'quote':
      return (
        <div className="my-10 rounded-2xl border border-pink-100/60 bg-pink-50/30 p-6 sm:p-8">
          <Quote size={24} className="mb-3 text-pink-300" />
          <p className="text-lg italic leading-relaxed text-slate-600 sm:text-xl">
            &ldquo;{block.content}&rdquo;
          </p>
        </div>
      )

    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [activeSection, setActiveSection] = useState('article')

  const post = useMemo(
    () => blogPosts.find((p) => p.slug === slug),
    [slug],
  )

  const related = useMemo(
    () =>
      post
        ? blogPosts
            .filter(
              (p) =>
                p.slug !== slug &&
                (p.category === post.category ||
                  p.tags.some((t) => post.tags.includes(t))),
            )
            .slice(0, 3)
        : [],
    [post, slug],
  )

  const currentIndex = useMemo(
    () => blogPosts.findIndex((p) => p.slug === slug),
    [slug],
  )
  const prevPost =
    currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : null

  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal()
  const { ref: relatedRef, isVisible: relatedVisible } = useScrollReveal()

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
          setActiveSection(
            visible[0].target.id.replace('section-', ''),
          )
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

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="font-display text-3xl font-semibold text-slate-900">
          Article not found
        </h1>
        <Button className="mt-6" asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <SEOMeta title={post?.title ?? 'Blog Post'} description={post?.excerpt} />
      <ScrollProgress />

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-32 pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white" />
          <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-rose-200/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl px-6">
            <motion.div variants={slideUp}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-pink-600 transition-colors hover:text-pink-500"
              >
                <ArrowLeft size={14} />
                Back to Blog
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mt-8"
            >
              <motion.div variants={staggerItem}>
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
              >
                {post.title}
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="mt-4 text-lg leading-relaxed text-slate-500"
              >
                {post.excerpt}
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400"
              >
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime}
                </span>
                <span className="text-slate-300">&middot;</span>
                <span className="text-slate-500">{post.author}</span>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="mt-6 flex flex-wrap gap-2"
              >
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Content + Sidebar ── */}
        <section ref={contentRef} className="pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex gap-12">
              {/* Sidebar */}
              <aside className="hidden w-48 shrink-0 lg:block">
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

              {/* Content */}
              <main className="min-w-0 flex-1">
                <motion.div
                  id="section-article"
                  initial="hidden"
                  animate={contentVisible ? 'visible' : 'hidden'}
                  variants={staggerContainer}
                  className="mx-auto max-w-3xl"
                >
                  {post.content.map((block, i) => (
                    <motion.div key={i} variants={staggerItem}>
                      <ContentRenderer block={block} />
                    </motion.div>
                  ))}
                </motion.div>
              </main>
            </div>
          </div>
        </section>

        {/* ── Prev / Next ── */}
        <section className="border-t border-pink-100/40 py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between gap-4">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group flex items-center gap-3 text-left"
                >
                  <ArrowLeft
                    size={20}
                    className="shrink-0 text-pink-400 transition-transform group-hover:-translate-x-1"
                  />
                  <div className="max-w-[240px]">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-pink-400">
                      Previous
                    </p>
                    <p className="mt-0.5 font-display text-sm font-semibold text-slate-900 transition-colors group-hover:text-pink-600 line-clamp-1">
                      {prevPost.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group flex items-center gap-3 text-right"
                >
                  <div className="max-w-[240px]">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-pink-400">
                      Next
                    </p>
                    <p className="mt-0.5 font-display text-sm font-semibold text-slate-900 transition-colors group-hover:text-pink-600 line-clamp-1">
                      {nextPost.title}
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

        {/* ── Related Posts ── */}
        {related.length > 0 && (
          <section ref={relatedRef} id="section-related" className="py-16">
            <div className="mx-auto max-w-6xl px-6">
              <motion.div
                initial="hidden"
                animate={relatedVisible ? 'visible' : 'hidden'}
                variants={staggerContainer}
              >
                <motion.div variants={slideUp} className="mb-8 text-center">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    Related Articles
                  </h2>
                  <p className="mt-2 text-slate-500">
                    Continue reading from similar topics
                  </p>
                </motion.div>

                <motion.div
                  variants={slideUp}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {related.map((rp) => (
                    <motion.div key={rp.slug} variants={staggerItem}>
                      <Link
                        to={`/blog/${rp.slug}`}
                        className="group block h-full"
                      >
                        <div className="flex h-full flex-col rounded-2xl border border-pink-100/40 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/20 sm:p-6">
                          <div
                            className={`flex h-32 w-full items-center justify-center rounded-xl bg-gradient-to-br ${rp.image}`}
                          >
                            <span className="font-display text-3xl font-bold text-white/25">
                              {rp.title
                                .split(' ')
                                .map((w) => w[0])
                                .join('')
                                .slice(0, 3)}
                            </span>
                          </div>
                          <h3 className="mt-4 font-display text-base font-semibold text-slate-900 transition-colors group-hover:text-pink-600">
                            {rp.title}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-2">
                            {rp.excerpt}
                          </p>
                          <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar size={11} />
                              {rp.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={11} />
                              {rp.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 px-8 py-16 text-center shadow-2xl shadow-pink-200/40 sm:px-16">
              <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/4 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  Enjoyed this article?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-pink-100">
                  If you found this helpful, consider sharing it or reaching out
                  to discuss further.
                </p>
                <div className="mt-8 flex justify-center gap-3">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-pink-600 hover:bg-pink-50"
                    asChild
                  >
                    <Link to="/blog">Browse All Articles</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}
