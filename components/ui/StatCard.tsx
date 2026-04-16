'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { StatItem } from '@/data/stats'

interface StatCardProps {
  stat: StatItem
  delay?: number
  className?: string
  bare?: boolean
}

const colorMap = {
  indigo:  { text: 'text-primary',   border: 'border-primary/20',   badge: 'bg-primary/10 text-primary'   },
  violet:  { text: 'text-secondary', border: 'border-secondary/20', badge: 'bg-secondary/10 text-secondary' },
  cyan:    { text: 'text-primary',   border: 'border-primary/20',   badge: 'bg-primary/10 text-primary'   },
  emerald: { text: 'text-accent',    border: 'border-accent/20',    badge: 'bg-accent/10 text-accent'     },
  amber:   { text: 'text-amber-400', border: 'border-amber-400/20', badge: 'bg-amber-400/10 text-amber-400' },
}

function useCountUp(target: number, duration: number, isInView: boolean) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true

    const steps = 60
    const stepTime = duration / steps
    let current = 0
    const increment = target / steps

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return count
}

export default function StatCard({ stat, delay = 0, className, bare = false }: StatCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCountUp(stat.value, 1400, isInView)
  const colors = colorMap[stat.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        !bare && 'glass-card',
        'p-6 transition-shadow',
        className
      )}
    >
      <div className={cn('mb-3 inline-flex rounded-xl px-3 py-1.5 text-xs font-semibold uppercase tracking-wider', colors.badge)}>
        {stat.color === 'amber' ? 'Warning' : 'Key Stat'}
      </div>

      <div className={cn('text-4xl font-extrabold tabular-nums', colors.text)}>
        {count}
        {stat.suffix}
      </div>

      <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>

      {stat.description && (
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{stat.description}</p>
      )}
    </motion.div>
  )
}
