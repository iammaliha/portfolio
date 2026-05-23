const projects = [
  {
    title: 'Portfolio Website',
    description: 'A soft, elegant personal website built with React and Tailwind. The design is bright, modular, and easy to scan.',
    tags: ['React', 'Tailwind', 'Soft UI'],
  },
  {
    title: 'Brand Landing Page',
    description: 'A warm landing page with gentle colors, clear hierarchy, and a calm reading experience.',
    tags: ['Landing', 'Design', 'Responsive'],
  },
  {
    title: 'Web App Interface',
    description: 'A minimal web app showcase with simple navigation, soft shadows, and approachable content blocks.',
    tags: ['UI', 'Clean', 'Accessible'],
  },
]

function Projects() {
  return (
    <main className="min-h-screen bg-[#fff5f8] text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-10 rounded-[2rem] border border-pink-100 bg-white/95 p-10 shadow-[0_35px_80px_-40px_rgba(236,72,153,0.2)]">
          <p className="text-sm uppercase tracking-[0.32em] text-pink-500">Projects</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Simple, pretty projects with personality.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A curated selection of front-end work that feels polished, inviting, and easy to understand.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[2rem] border border-pink-100 bg-white/95 p-8 shadow-[0_25px_60px_-30px_rgba(236,72,153,0.18)] transition hover:-translate-y-1 hover:border-pink-200">
              <h2 className="text-2xl font-semibold text-slate-900">{project.title}</h2>
              <p className="mt-4 text-slate-600 leading-7">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-sm text-pink-600">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects
