export type ProjectCategory =
  | 'Portfolio'
  | 'SaaS'
  | 'Dashboard'
  | 'Business Website'
  | 'Landing Page'

export interface NavItem {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: ProjectCategory
  year: number
  image?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface ProjectDetailData {
  overview: string
  problem: string
  solution: string
  designProcess: string[]
  developmentProcess: string[]
  features: string[]
  images: string[]
  challenges: string[]
  results: string[]
  client?: string
  role?: string
  duration?: string
}

export interface Skill {
  name: string
  category: string
  percentage: number
  experience: string
  icon: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
  avatar: string
  rating: number
  company: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface TrustedBrand {
  name: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export type ContentBlockType = 'paragraph' | 'heading' | 'code' | 'list' | 'quote' | 'image'

export interface ContentBlock {
  type: ContentBlockType
  content?: string
  level?: 2 | 3
  language?: string
  items?: string[]
  caption?: string
  src?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: ContentBlock[]
  category: string
  tags: string[]
  image: string
  date: string
  readTime: string
  author: string
  featured: boolean
  published: boolean
}
