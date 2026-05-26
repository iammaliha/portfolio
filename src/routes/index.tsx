import { lazy, Suspense } from 'react'
import { CardSkeleton } from '../components/ui/Skeleton'
import MainLayout from '../layouts/MainLayout'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const Projects = lazy(() => import('../pages/Projects'))
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'))
const TechStack = lazy(() => import('../pages/TechStack'))
const Testimonials = lazy(() => import('../pages/Testimonials'))
const Blog = lazy(() => import('../pages/Blog'))
const BlogPost = lazy(() => import('../pages/BlogPost'))
const Contact = lazy(() => import('../pages/Contact'))
const Pricing = lazy(() => import('../pages/Pricing'))

function PageLoader() {
  return (
    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Suspense><Home /></Suspense> },
      { path: '/about', element: <Suspense><About /></Suspense> },
      { path: '/services', element: <Suspense fallback={<PageLoader />}><Services /></Suspense> },
      { path: '/projects', element: <Suspense fallback={<PageLoader />}><Projects /></Suspense> },
      { path: '/projects/:id', element: <Suspense fallback={<PageLoader />}><ProjectDetail /></Suspense> },
      { path: '/stack', element: <Suspense fallback={<PageLoader />}><TechStack /></Suspense> },
      { path: '/testimonials', element: <Suspense fallback={<PageLoader />}><Testimonials /></Suspense> },
      { path: '/blog', element: <Suspense fallback={<PageLoader />}><Blog /></Suspense> },
      { path: '/blog/:slug', element: <Suspense fallback={<PageLoader />}><BlogPost /></Suspense> },
      { path: '/contact', element: <Suspense fallback={<PageLoader />}><Contact /></Suspense> },
      { path: '/pricing', element: <Suspense fallback={<PageLoader />}><Pricing /></Suspense> },
    ],
  },
]
