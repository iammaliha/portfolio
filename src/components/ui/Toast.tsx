import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, AlertCircle, X } from 'lucide-react'
import { cn } from '../../utils/cn'

export type ToastType = 'success' | 'error' | 'info'

interface ToastProps {
  message: string
  type?: ToastType
  isVisible: boolean
  onClose: () => void
  duration?: number
}

const icons: Record<ToastType, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  info: AlertCircle,
}

const colors: Record<ToastType, string> = {
  success: 'border-emerald-100 bg-emerald-50 text-emerald-700',
  error: 'border-red-100 bg-red-50 text-red-700',
  info: 'border-pink-100 bg-pink-50 text-pink-700',
}

const iconColors: Record<ToastType, string> = {
  success: 'text-emerald-500',
  error: 'text-red-400',
  info: 'text-pink-500',
}

export default function Toast({
  message,
  type = 'success',
  isVisible,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (!isVisible) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [isVisible, duration, onClose])

  const Icon = icons[type]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cn(
            'fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-xl shadow-pink-200/20 backdrop-blur-xl sm:max-w-sm',
            colors[type],
          )}
        >
          <Icon size={20} className={cn('shrink-0', iconColors[type])} />
          <p className="text-sm font-medium">{message}</p>
          <button
            onClick={onClose}
            className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full opacity-60 transition-opacity hover:opacity-100"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
