import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-700/20 to-transparent blur-3xl" />

        <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm uppercase tracking-[0.35em] text-sky-300">
                Web Developer
              </div>
              <div className="max-w-2xl space-y-6">
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  Hi, I’m Maliha Tasnim.
                </h1>
                <p className="text-lg leading-8 text-slate-300">
                  I build polished, responsive websites and web applications with React, Tailwind CSS, and modern web tooling. I help brands tell their story with clean interfaces and fast user experiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-300">
                  View projects
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white">
                  Contact me
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-[0_20px_120px_-40px_rgba(14,31,58,0.8)]">
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">About</p>
                  <h2 className="text-3xl font-semibold text-white">Modern web experiences with thoughtful design.</h2>
                  <p className="text-slate-300">
                    I design user-friendly web experiences that look sharp on every screen. My work blends accessible layouts, reusable components, and modern front-end tooling.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Skills</p>
                    <ul className="mt-4 space-y-2 text-slate-300">
                      <li>React</li>
                      <li>JavaScript</li>
                      <li>Tailwind CSS</li>
                      <li>Responsive design</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Focus</p>
                    <ul className="mt-4 space-y-2 text-slate-300">
                      <li>Performance</li>
                      <li>Accessibility</li>
                      <li>Clean components</li>
                      <li>Modern UI</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
