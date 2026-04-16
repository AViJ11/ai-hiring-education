'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GradientCardProps {
  children: ReactNode
  gradient?: string
  className?: string
  glow?: boolean
  hover?: boolean
}

export default function GradientCard({
  children,
  gradient = 'from-indigo-500 to-violet-600',
  className,
  glow = false,
  hover = true,
}: GradientCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={cn(
        'relative rounded-2xl p-px overflow-hidden',
        glow && 'shadow-[var(--shadow-glow-indigo)]',
        className
      )}
    >
      {/* Gradient border */}
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-80', gradient)} />
      {/* Content */}
      <div className="relative rounded-[calc(1rem-1px)] bg-white p-6">
        {children}
      </div>
    </motion.div>
  )
}
