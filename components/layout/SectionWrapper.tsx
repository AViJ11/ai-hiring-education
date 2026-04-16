'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
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
  tagColor = 'text-primary',
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
              <p className={cn('text-sm font-medium tracking-widest uppercase mb-4', tagColor)}>
                {tag}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn('mt-4 text-lg text-muted-foreground leading-relaxed', centered ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>
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
