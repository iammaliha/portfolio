import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#fffafb]"
        >
          <motion.div
            animate={{ scale: [1, 1.04, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="font-display text-3xl tracking-[0.3em] text-pink-400/80 sm:text-4xl"
          >
            Maliha Tasnim
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="mt-8 h-0.5 w-32 origin-left rounded-full bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
