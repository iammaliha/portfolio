import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-2xl border border-pink-100/80 bg-pink-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-pink-300 focus:bg-white focus:shadow-lg focus:shadow-pink-100/30 focus:ring-1 focus:ring-pink-200 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
