import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from 'react'
import type { ToastType } from '../components/ui/Toast'

interface ToastItem {
  id: number
  message: string
  type: ToastType
}

interface ToastContextValue {
  toasts: ToastItem[]
  addToast: (message: string, type?: ToastType, duration?: number) => void
  removeToast: (id: number) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const counter = useRef(0)

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const addToast = useCallback(
    (message: string, type: ToastType = 'success', duration = 4000) => {
      const id = ++counter.current
      setToasts((prev) => [...prev, { id, message, type }])
      setTimeout(() => removeToast(id), duration)
    },
    [removeToast],
  )

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
