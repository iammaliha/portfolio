import type { Project, Testimonial, Stat, ProcessStep, TrustedBrand, Skill } from '../types'

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'A soft, elegant personal portfolio built with React and Tailwind. Modular sections, feminine palette, and smooth Framer Motion animations.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Portfolio',
    year: 2026,
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-pink-200 via-rose-100 to-pink-100',
  },
  {
    id: 'webnest-dashboard',
    title: 'WebNest Dashboard',
    description:
      'A warm admin interface with gentle colors, clear hierarchy, and a calm user experience for content management.',
    tags: ['React', 'TypeScript', 'UI Design'],
    category: 'Dashboard',
    year: 2026,
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-rose-200 via-pink-100 to-purple-100',
  },
  {
    id: 'bloom-saas',
    title: 'Bloom SaaS Platform',
    description:
      'A subscription-based wellness platform with a clean, inviting dashboard and seamless onboarding flow.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    category: 'SaaS',
    year: 2026,
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-pink-100 via-rose-50 to-orange-100',
  },
  {
    id: 'petal-business',
    title: 'Petal Business Site',
    description:
      'A premium brand site for a florist studio featuring soft imagery, elegant typography, and a warm color story.',
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    category: 'Business Website',
    year: 2025,
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-rose-100 via-pink-50 to-green-100',
  },
  {
    id: 'lumina-landing',
    title: 'Lumina Landing Page',
    description:
      'A high-converting landing page for a beauty brand with scroll-triggered animations and a soft gradient aesthetic.',
    tags: ['Next.js', 'GSAP', 'Framer'],
    category: 'Landing Page',
    year: 2025,
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-pink-200 via-purple-100 to-rose-100',
  },
  {
    id: 'hues-design-system',
    title: 'Hues Design System',
    description:
      'A comprehensive component library and design system built for consistency, accessibility, and rapid prototyping.',
    tags: ['React', 'Storybook', 'TypeScript'],
    category: 'Portfolio',
    year: 2025,
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-blue-100 via-pink-50 to-purple-100',
  },
  {
    id: 'flora-ecommerce',
    title: 'Flora E-Commerce',
    description:
      'A minimal e-commerce interface with soft product cards, smooth browsing, and a calming checkout experience.',
    tags: ['Next.js', 'Tailwind', 'Commerce'],
    category: 'SaaS',
    year: 2025,
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-green-100 via-pink-50 to-rose-100',
  },
  {
    id: 'iris-admin',
    title: 'Iris Admin Panel',
    description:
      'A data-rich admin dashboard with intuitive filtering, real-time updates, and a clean, approachable layout.',
    tags: ['React', 'TypeScript', 'D3'],
    category: 'Dashboard',
    year: 2024,
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-purple-100 via-pink-50 to-indigo-100',
  },
  {
    id: 'rose-consulting',
    title: 'Rose Consulting Site',
    description:
      'A professional consulting website with clean typography, structured layouts, and a trustworthy visual presence.',
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    category: 'Business Website',
    year: 2024,
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-pink-100 via-rose-50 to-slate-100',
  },
  {
    id: 'velvet-campaign',
    title: 'Velvet Campaign Page',
    description:
      'A bold, visually-driven campaign landing page with rich textures, smooth parallax, and a compelling narrative flow.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Landing Page',
    year: 2024,
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-red-100 via-pink-50 to-rose-100',
  },
  {
    id: 'serene-portfolio',
    title: 'Serene Portfolio',
    description:
      'A minimalist photography portfolio with generous white space, subtle transitions, and a focus on visual storytelling.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    category: 'Portfolio',
    year: 2024,
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-sky-100 via-pink-50 to-rose-100',
  },
  {
    id: 'cloud-dashboard',
    title: 'Cloud Dashboard',
    description:
      'A real-time cloud monitoring dashboard with interactive charts, resource metrics, and a clean data visualization layer.',
    tags: ['React', 'D3', 'TypeScript'],
    category: 'Dashboard',
    year: 2024,
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-cyan-100 via-pink-50 to-blue-100',
  },
  {
    id: 'mila-saas',
    title: 'Mila SaaS Landing',
    description:
      'A modern SaaS landing page for a productivity tool with clear feature sections, testimonials, and a strong value proposition.',
    tags: ['Next.js', 'Tailwind', 'Framer'],
    category: 'SaaS',
    year: 2024,
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-amber-100 via-pink-50 to-rose-100',
  },
  {
    id: 'willow-business',
    title: 'Willow Business Site',
    description:
      'A warm, approachable business website with custom illustrations, soft cards, and a friendly brand voice throughout.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    category: 'Business Website',
    year: 2024,
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-emerald-100 via-pink-50 to-teal-100',
  },
  {
    id: 'opal-agency',
    title: 'Opal Agency Landing',
    description:
      'A creative agency landing page with bold sections, animated stats, and a distinctive visual identity that stands out.',
    tags: ['Next.js', 'GSAP', 'Animation'],
    category: 'Landing Page',
    year: 2024,
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    image: 'from-violet-100 via-pink-50 to-fuchsia-100',
  },
]

export const projectCategories: string[] = [
  'All',
  'Portfolio',
  'SaaS',
  'Dashboard',
  'Business Website',
  'Landing Page',
]

export const skills: Skill[] = [
  { name: 'React', category: 'Frontend', percentage: 95, experience: '4 years', icon: 'Code2' },
  { name: 'TypeScript', category: 'Frontend', percentage: 90, experience: '3 years', icon: 'FileCode' },
  { name: 'JavaScript', category: 'Frontend', percentage: 95, experience: '5+ years', icon: 'Terminal' },
  { name: 'Next.js', category: 'Frontend', percentage: 85, experience: '3 years', icon: 'Globe' },
  { name: 'Tailwind CSS', category: 'Frontend', percentage: 95, experience: '4 years', icon: 'Palette' },
  { name: 'HTML/CSS', category: 'Frontend', percentage: 98, experience: '5+ years', icon: 'Layout' },
  { name: 'Node.js', category: 'Backend', percentage: 75, experience: '3 years', icon: 'Server' },
  { name: 'Python', category: 'Backend', percentage: 65, experience: '2 years', icon: 'Cpu' },
  { name: 'Figma', category: 'Design Tools', percentage: 90, experience: '4 years', icon: 'Pen' },
  { name: 'UI/UX Design', category: 'Design Tools', percentage: 88, experience: '4 years', icon: 'Palette' },
  { name: 'Vercel', category: 'Deployment', percentage: 85, experience: '3 years', icon: 'Rocket' },
  { name: 'Netlify', category: 'Deployment', percentage: 80, experience: '3 years', icon: 'Cloud' },
  { name: 'Git', category: 'Deployment', percentage: 90, experience: '5+ years', icon: 'GitBranch' },
  { name: 'ChatGPT', category: 'AI Tools', percentage: 88, experience: '2 years', icon: 'Brain' },
  { name: 'Claude AI', category: 'AI Tools', percentage: 85, experience: '1 year', icon: 'Sparkles' },
]

export const skillCategories: string[] = [
  'All', 'Frontend', 'Backend', 'Design Tools', 'Deployment', 'AI Tools',
]

export const techStack: string[] = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
  'Framer Motion', 'JavaScript', 'HTML', 'CSS',
  'Node.js', 'Git', 'Figma', 'Vite',
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
  'Framer Motion', 'JavaScript', 'HTML', 'CSS',
  'Node.js', 'Git', 'Figma', 'Vite',
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'Lumina',
    text: 'Maliha has an incredible eye for design. She transformed our vision into a beautiful, functional website that our users love. The attention to detail is unmatched.',
    avatar: 'SC',
    rating: 5,
  },
  {
    name: 'Emma Roberts',
    role: 'Founder',
    company: 'Bloom Studio',
    text: 'Working with Maliha was an absolute dream. She understood our brand aesthetic perfectly and delivered a site that feels both premium and welcoming.',
    avatar: 'ER',
    rating: 5,
  },
  {
    name: 'Jessica Park',
    role: 'Creative Director',
    company: 'Hues Agency',
    text: 'The soft, feminine touch Maliha brought to our project exceeded all expectations. Our clients constantly compliment the elegant design.',
    avatar: 'JP',
    rating: 5,
  },
  {
    name: 'Olivia Martinez',
    role: 'CEO',
    company: 'Petal & Co',
    text: 'Maliha&#8217;s ability to blend aesthetics with functionality is rare. She created a website that not only looks stunning but performs beautifully.',
    avatar: 'OM',
    rating: 5,
  },
  {
    name: 'Aisha Rahman',
    role: 'Brand Strategist',
    company: 'Willow Creative',
    text: 'I have worked with many developers, but Maliha stands out for her meticulous attention to the user experience. Every interaction feels intentional.',
    avatar: 'AR',
    rating: 5,
  },
  {
    name: 'Rachel Kim',
    role: 'Product Designer',
    company: 'Iris Data',
    text: 'Maliha brought a level of polish and refinement to our dashboard that completely transformed how our users interact with the platform.',
    avatar: 'RK',
    rating: 4,
  },
  {
    name: 'Maya Chen',
    role: 'Marketing Director',
    company: 'Velvet Cosmetics',
    text: 'Our campaign landing page exceeded every metric we set. The design was gorgeous and the conversion rate spoke for itself.',
    avatar: 'MC',
    rating: 5,
  },
  {
    name: 'Tessa Williams',
    role: 'Engineering Lead',
    company: 'CloudMetrix',
    text: 'The cloud dashboard Maliha built handles real-time data beautifully. Her understanding of complex UI challenges is impressive.',
    avatar: 'TW',
    rating: 4,
  },
]

export const stats: Stat[] = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 60, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Tech Partners' },
]

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery',
    description: 'We discuss your vision, goals, and brand identity to understand exactly what you need.',
  },
  {
    step: 2,
    title: 'Design',
    description: 'I craft wireframes and visual designs with a soft, feminine aesthetic tailored to your brand.',
  },
  {
    step: 3,
    title: 'Development',
    description: 'Your design comes to life with clean, responsive code and smooth, polished interactions.',
  },
  {
    step: 4,
    title: 'Launch',
    description: 'We refine every detail together, then launch your site into the world with confidence.',
  },
]

export const trustedBrands: TrustedBrand[] = [
  { name: 'Lumina' },
  { name: 'Bloom' },
  { name: 'Hues' },
  { name: 'Petal' },
  { name: 'Iris' },
  { name: 'Flora' },
]
