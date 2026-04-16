'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { StatItem } from '@/data/stats'

interface StatCardProps {
  stat: StatItem
  delay?: number
  className?: string
}

const colorMap = {
  indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-600',  border: 'border-indigo-100' },
  violet:  { bg: 'bg-violet-50',  text: 'text-violet-600',  border: 'border-violet-100' },
  cyan:    { bg: 'bg-cyan-50',    text: 'text-cyan-600',    border: 'border-cyan-100'   },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
  amber:   { bg: 'bg-amber-50',   text: 'text-amber-600',   border: 'border-amber-100'  },
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

export default function StatCard({ stat, delay = 0, className }: StatCardProps) {
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
        'rounded-2xl border bg-white p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]',
        className
      )}
    >
      <div className={cn('mb-3 inline-flex rounded-xl px-3 py-1.5 text-xs font-semibold uppercase tracking-wider', colors.bg, colors.text)}>
        {stat.color === 'amber' ? 'Warning' : 'Key Stat'}
      </div>

      <div className={cn('text-4xl font-extrabold tabular-nums', colors.text)}>
        {count}
        {stat.suffix}
      </div>

      <p className="mt-2 text-sm font-semibold text-slate-800">{stat.label}</p>

      {stat.description && (
        <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{stat.description}</p>
      )}
    </motion.div>
  )
}
