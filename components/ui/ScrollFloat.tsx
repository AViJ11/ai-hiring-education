'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollFloatProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  textClassName?: string
}

export default function ScrollFloat({
  children,
  className = '',
  containerClassName = '',
  textClassName = '',
}: ScrollFloatProps) {
  const text = typeof children === 'string' ? children : String(children)
  const words = text.split(' ')

  return (
    <div className={containerClassName || className}>
      <h2
        className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl ${textClassName}`}
        style={{ lineHeight: '1.1' }}
      >
        {words.map((word, wi) => (
          <span
            key={wi}
            style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}
          >
            {word.split('').map((char, ci) => (
              <motion.span
                key={ci}
                initial={{ y: '110%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: wi * 0.08 + ci * 0.02,
                  ease: [0.33, 1, 0.68, 1],
                }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </h2>
    </div>
  )
}
