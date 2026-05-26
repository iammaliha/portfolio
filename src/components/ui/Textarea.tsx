import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-2xl border border-pink-100/80 bg-pink-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-pink-300 focus:bg-white focus:shadow-lg focus:shadow-pink-100/30 focus:ring-1 focus:ring-pink-200 disabled:cursor-not-allowed disabled:opacity-50 resize-y',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
