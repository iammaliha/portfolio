const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio built with React and Tailwind CSS to showcase projects, skills, and contact details.',
    tags: ['React', 'Tailwind', 'Responsive'],
  },
  {
    title: 'Brand Landing Page',
    description: 'A modern marketing landing page with clean visuals, strong hierarchy, and mobile-first layout.',
    tags: ['HTML', 'CSS', 'Design'],
  },
  {
    title: 'Web App Interface',
    description: 'An interactive web interface with polished components and simple navigation for a user-first experience.',
    tags: ['Front-end', 'UI', 'Performance'],
  },
]

function Projects() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Projects</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Selected work and front-end projects.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            These project summaries highlight the kind of work I deliver: clean interfaces, strong visual structure, and reliable front-end performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 transition hover:-translate-y-1 hover:border-sky-500 hover:bg-slate-900">
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-sm text-slate-300">
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
