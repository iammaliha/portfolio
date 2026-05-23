function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">About</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Crafting beautiful, accessible digital products.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I’m Maliha Tasnim, a Web Developer who builds responsive websites and web applications with a polished front-end experience. I combine modern tooling, clean design, and strong attention to detail to ship sites that feel fast and intuitive.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10">
            <div>
              <h2 className="text-2xl font-semibold text-white">Experience</h2>
              <p className="mt-4 text-slate-300 leading-8">
                I work on front-end projects for brands and businesses, turning design ideas into polished user interfaces. I enjoy building responsive pages, reusable components, and websites that perform reliably across devices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">What I enjoy</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Creating smooth interactions and clear layouts</li>
                <li>Building accessible, mobile-first experiences</li>
                <li>Optimizing speed and usability for every screen</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Skills</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/90 p-5">
                  <p className="text-sm uppercase text-slate-400">Technologies</p>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="rounded-3xl bg-slate-950/90 p-5">
                  <p className="text-sm uppercase text-slate-400">Tools</p>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    <li>Vite</li>
                    <li>Git</li>
                    <li>Responsive layouts</li>
                    <li>UI design systems</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Values</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li>Clarity in every interaction</li>
                <li>Quality over quantity</li>
                <li>Accessible experiences for all users</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
