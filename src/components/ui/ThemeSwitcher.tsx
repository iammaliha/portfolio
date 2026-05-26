import { motion } from 'framer-motion'
import { Palette } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import { cn } from '../../utils/cn'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-pink-50 hover:text-pink-600"
      aria-label={`Switch to ${theme === 'pink' ? 'lavender' : 'pink'} theme`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Palette size={18} />
      </motion.div>
      <span
        className={cn(
          'absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white',
          theme === 'pink' ? 'bg-pink-400' : 'bg-purple-400',
        )}
      />
    </button>
  )
}
