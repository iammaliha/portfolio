import { type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'card'
}

export default function Skeleton({
  className,
  variant = 'text',
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-2xl bg-pink-100/60',
        variant === 'text' && 'h-4 w-full',
        variant === 'circular' && 'rounded-full',
        variant === 'card' && 'h-48 w-full',
        className,
      )}
      {...props}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-pink-100/60 bg-white/80 p-6 shadow-sm sm:p-8">
      <Skeleton variant="circular" className="mb-4 h-12 w-12" />
      <Skeleton className="mb-2 h-5 w-3/4" />
      <Skeleton className="mb-1 h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="mt-4 flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
    </div>
  )
}

export function TableRowSkeleton({ cols = 4 }: { cols?: number }) {
  return (
    <div className="flex gap-4 border-b border-pink-100/30 px-6 py-3.5">
      {Array.from({ length: cols }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-4', i === 0 ? 'w-1/3' : 'w-1/6')}
        />
      ))}
    </div>
  )
}
