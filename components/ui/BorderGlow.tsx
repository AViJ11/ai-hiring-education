'use client'

import { useRef, useState, useEffect, ReactNode, CSSProperties } from 'react'

interface BorderGlowProps {
  children: ReactNode
  className?: string
  glowColor?: string
  colors?: string[]
  borderRadius?: string
  glowIntensity?: number
  fillOpacity?: number
  animated?: boolean
}

export default function BorderGlow({
  children,
  className = '',
  glowColor = '187 86 43',
  colors = ['hsl(187, 86%, 43%)', 'hsl(258, 90%, 66%)', 'hsl(187, 86%, 43%)'],
  borderRadius = '1rem',
  glowIntensity = 0.6,
  fillOpacity = 0.03,
  animated = false,
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [angle, setAngle] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const rafRef = useRef<number>(0)
  const sweepRef = useRef(0)
  const animatedRef = useRef(animated)

  useEffect(() => {
    animatedRef.current = animated
  }, [animated])

  // Entrance sweep animation
  useEffect(() => {
    if (!animated) return
    let start: number | null = null
    const duration = 1200

    function sweep(ts: number) {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      sweepRef.current = progress * 360
      setAngle(sweepRef.current)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(sweep)
      }
    }

    rafRef.current = requestAnimationFrame(sweep)
    return () => cancelAnimationFrame(rafRef.current)
  }, [animated])

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const deg = Math.atan2(y, x) * (180 / Math.PI) + 90
    setAngle(deg)
    setIsHovered(true)
  }

  function onPointerLeave() {
    setIsHovered(false)
    if (!animated) setAngle(0)
  }

  const gradientColors = colors.join(', ')
  const [h, s, l] = glowColor.split(' ').map(Number)

  const borderStyle: CSSProperties = {
    borderRadius,
    background: `conic-gradient(from ${angle}deg, ${gradientColors})`,
    padding: '1.5px',
    position: 'relative' as const,
    boxShadow: isHovered
      ? `0 0 ${20 * glowIntensity}px hsl(${h}, ${s}%, ${l}%, 0.3), 0 0 ${60 * glowIntensity}px hsl(${h}, ${s}%, ${l}%, 0.15)`
      : animated
      ? `0 0 12px hsl(${h}, ${s}%, ${l}%, 0.15)`
      : 'none',
    transition: 'box-shadow 0.3s ease',
  }

  const innerStyle: CSSProperties = {
    borderRadius: `calc(${borderRadius} - 1.5px)`,
    background: `radial-gradient(ellipse at center, hsl(217, 33%, 17%, ${fillOpacity + 0.6}) 0%, hsl(222, 47%, 11%, 0.9) 100%)`,
    position: 'relative' as const,
    overflow: 'hidden' as const,
    height: '100%',
  }

  return (
    <div
      ref={cardRef}
      className={className}
      style={borderStyle}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div style={innerStyle}>{children}</div>
    </div>
  )
}
