function About() {
  return (
    <main className="min-h-screen bg-[#fff2f7] text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-10 rounded-[2rem] border border-pink-100 bg-white/95 p-10 shadow-[0_35px_80px_-40px_rgba(236,72,153,0.25)]">
          <p className="text-sm uppercase tracking-[0.32em] text-pink-500">About</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            I make websites feel cozy, personal, and easy to use.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I’m Maliha Tasnim, a Web Developer focused on calm, feminine digital experiences. I build responsive sites with simple structure, soft color palettes, and horizontal rhythm that feels natural.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-8 rounded-[2rem] border border-pink-100 bg-white/95 p-10 shadow-[0_30px_60px_-30px_rgba(236,72,153,0.18)]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">What I build</h2>
              <p className="mt-4 text-slate-600 leading-8">
                I create polished websites that feel warm and easy to navigate. The goal is always a balanced page with clear sections, simple typography, and a personal touch.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Why it works</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>Clear layouts with generous spacing</li>
                <li>Readable content and soft, friendly colors</li>
                <li>Responsive pages that adapt gently to screens</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-pink-100 bg-white/95 p-8 shadow-[0_30px_60px_-30px_rgba(236,72,153,0.12)]">
              <p className="text-sm uppercase tracking-[0.32em] text-pink-500">Core skills</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-pink-50 p-5">
                  <p className="text-sm font-semibold text-pink-700">Technology</p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                <div className="rounded-3xl bg-pink-50 p-5">
                  <p className="text-sm font-semibold text-pink-700">Design</p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li>Layout systems</li>
                    <li>Color harmony</li>
                    <li>Readable typography</li>
                    <li>Mobile-first flow</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-pink-100 bg-white/95 p-8 shadow-[0_30px_60px_-30px_rgba(236,72,153,0.12)]">
              <p className="text-sm uppercase tracking-[0.32em] text-pink-500">Values</p>
              <div className="mt-6 space-y-3 text-slate-600">
                <div className="rounded-3xl bg-pink-50 p-4">
                  <p className="font-medium text-slate-900">Honest work</p>
                  <p className="text-sm">I keep interfaces simple so visitors can focus on the message.</p>
                </div>
                <div className="rounded-3xl bg-pink-50 p-4">
                  <p className="font-medium text-slate-900">Human feel</p>
                  <p className="text-sm">Design that feels crafted, not overcomplicated.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
