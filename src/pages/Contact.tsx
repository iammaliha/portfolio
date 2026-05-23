function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Ready to build something great together.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            If you have a project idea or need a website refresh, I’m available to help. Send a message and I’ll get back to you with next steps.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Contact details</p>
            <div className="mt-8 space-y-6 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
                <a href="mailto:maliha.tasnim@example.com" className="mt-2 block text-lg text-slate-100 hover:text-sky-300">
                  maliha.tasnim@example.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
                <p className="mt-2 text-lg text-slate-100">Remote / Worldwide</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Availability</p>
                <p className="mt-2 text-lg text-slate-100">Freelance and full-time opportunities</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10">
            <form className="grid gap-5">
              <label className="grid gap-2 text-sm text-slate-300">
                Name
                <input type="text" placeholder="Your name" className="rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <input type="email" placeholder="Your email" className="rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Message
                <textarea rows={5} placeholder="Tell me about your project" className="rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400" />
              </label>
              <button type="button" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-300">
                Send a message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
