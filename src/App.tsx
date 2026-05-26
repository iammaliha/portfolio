import { BrowserRouter, useRoutes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { routes } from './routes'
import LoadingScreen from './components/ui/LoadingScreen'

const duration = 0.3

function AnimatedRoutes() {
  const element = useRoutes(routes)
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration, ease: 'easeInOut' }}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
