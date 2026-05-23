import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(251,207,232,0.65),_transparent_30%),linear-gradient(180deg,#fff7fb,#ffeaf0)]">
      <div className="relative overflow-hidden">
        <div className="absolute right-12 top-24 h-44 w-44 rounded-full bg-pink-200/70 blur-3xl" />
        <div className="absolute left-10 top-80 h-32 w-32 rounded-full bg-rose-100/80 blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-xs uppercase tracking-[0.35em] text-pink-700">
                Web Developer
              </div>
              <div className="max-w-2xl space-y-6">
                <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                  Hi, I’m Maliha Tasnim.
                </h1>
                <p className="text-lg leading-8 text-slate-600">
                  I build warm, human-first websites with a soft, feminine palette and clean layouts. The goal is always a simple, inviting experience that feels handmade.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-pink-400"
                >
                  View projects
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-6 py-3 text-sm text-pink-700 transition hover:bg-pink-50"
                >
                  Contact me
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-pink-100 bg-white/95 p-10 shadow-[0_35px_90px_-40px_rgba(236,72,153,0.25)]">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-pink-500">Fresh & simple</p>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-900">A soft, thoughtful portfolio layout.</h2>
                  <p className="mt-4 text-slate-600">
                    The design is meant to feel calm, polished, and easy to read. Sections are spaced clearly so the content feels personal and approachable.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-pink-100 bg-pink-50 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-pink-500">Style</p>
                    <p className="mt-3 text-sm text-slate-600">Light pink tones, airy cards, and soft curves.</p>
                  </div>
                  <div className="rounded-3xl border border-pink-100 bg-pink-50 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-pink-500">Focus</p>
                    <p className="mt-3 text-sm text-slate-600">Human-centered content with simple navigation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
