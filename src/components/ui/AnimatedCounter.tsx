import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const started = useRef(false)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 })

  useEffect(() => {
    if (!isVisible || started.current) return
    started.current = true
    const steps = 40
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [value, duration, isVisible])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
