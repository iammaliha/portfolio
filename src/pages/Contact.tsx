function Contact() {
  return (
    <main className="min-h-screen bg-[#fff3f8] text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-10 rounded-[2rem] border border-pink-100 bg-white/95 p-10 shadow-[0_35px_80px_-40px_rgba(236,72,153,0.2)]">
          <p className="text-sm uppercase tracking-[0.32em] text-pink-500">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Say hello and start something gentle.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            If you have a project idea or want a website refresh, I’d love to help. Send a note and I’ll reply with a warm, simple plan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-pink-100 bg-white/95 p-10 shadow-[0_30px_70px_-30px_rgba(236,72,153,0.18)]">
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">Contact details</p>
            <div className="mt-8 space-y-6 text-slate-600">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
                <a href="mailto:maliha.tasnim@example.com" className="mt-2 block text-lg text-slate-900 hover:text-pink-600">
                  261-15-338@diu.edu.bd
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
                <p className="mt-2 text-lg text-slate-900">Remote / Worldwide</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Availability</p>
                <p className="mt-2 text-lg text-slate-900">Freelance and full-time opportunities</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-pink-100 bg-white/95 p-10 shadow-[0_30px_70px_-30px_rgba(236,72,153,0.18)]">
            <form className="grid gap-5">
              <label className="grid gap-2 text-sm text-slate-700">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-3xl border border-pink-100 bg-pink-50 px-4 py-3 text-slate-900 outline-none transition focus:border-pink-300"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-700">
                Email
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-3xl border border-pink-100 bg-pink-50 px-4 py-3 text-slate-900 outline-none transition focus:border-pink-300"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-700">
                Message
                <textarea
                  rows={5}
                  placeholder="Tell me about your project"
                  className="rounded-3xl border border-pink-100 bg-pink-50 px-4 py-3 text-slate-900 outline-none transition focus:border-pink-300"
                />
              </label>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-pink-400"
              >
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
