import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, AlertCircle, X } from 'lucide-react'
import { useToast } from '../../contexts/ToastContext'
import { cn } from '../../utils/cn'
import type { ToastType } from './Toast'

const icons: Record<ToastType, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  info: AlertCircle,
}

const colors: Record<ToastType, string> = {
  success: 'border-emerald-100 bg-emerald-50 text-emerald-800',
  error: 'border-red-100 bg-red-50 text-red-800',
  info: 'border-pink-100 bg-pink-50 text-pink-800',
}

const iconColors: Record<ToastType, string> = {
  success: 'text-emerald-500',
  error: 'text-red-400',
  info: 'text-pink-500',
}

export default function ToastContainer() {
  const { toasts, removeToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 sm:max-w-sm">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => {
          const Icon = icons[toast.type]
          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={cn(
                'flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-xl shadow-pink-200/20 backdrop-blur-xl',
                colors[toast.type],
              )}
            >
              <Icon size={20} className={cn('shrink-0', iconColors[toast.type])} />
              <p className="text-sm font-medium">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full opacity-60 transition-opacity hover:opacity-100"
              >
                <X size={14} />
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
