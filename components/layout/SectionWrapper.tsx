'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  /** Accent color for the section tag */
  tag?: string
  tagColor?: string
  title?: string
  subtitle?: string
  centered?: boolean
}

export default function SectionWrapper({
  id,
  children,
  className,
  tag,
  tagColor = 'bg-indigo-50 text-indigo-600',
  title,
  subtitle,
  centered = false,
}: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} className={cn('py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(tag || title || subtitle) && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className={cn('mb-16', centered ? 'text-center' : '')}
          >
            {tag && (
              <span className={cn('inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4', tagColor)}>
                {tag}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn('mt-4 text-lg text-slate-600 leading-relaxed', centered ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
