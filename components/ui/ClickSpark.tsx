'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Spark {
  x: number
  y: number
  angle: number
  startTime: number
}

interface ClickSparkProps {
  children: ReactNode
  sparkColor?: string
  sparkSize?: number
  sparkRadius?: number
  sparkCount?: number
  duration?: number
  className?: string
}

export default function ClickSpark({
  children,
  sparkColor = '#06B6D4',
  sparkSize = 12,
  sparkRadius = 20,
  sparkCount = 8,
  duration = 500,
  className,
}: ClickSparkProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sparksRef = useRef<Spark[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      if (!canvas || !container) return
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(container)

    function onClick(e: MouseEvent) {
      const rect = container!.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const now = performance.now()
      for (let i = 0; i < sparkCount; i++) {
        sparksRef.current.push({
          x,
          y,
          angle: (2 * Math.PI * i) / sparkCount,
          startTime: now,
        })
      }
    }

    container.addEventListener('click', onClick)

    function draw() {
      const now = performance.now()
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      sparksRef.current = sparksRef.current.filter((s) => now - s.startTime < duration)

      for (const s of sparksRef.current) {
        const elapsed = now - s.startTime
        const progress = elapsed / duration
        const eased = 1 - Math.pow(1 - progress, 3)

        const dist = sparkRadius * eased
        const x2 = s.x + Math.cos(s.angle) * dist
        const y2 = s.y + Math.sin(s.angle) * dist
        const lineLen = sparkSize * (1 - eased)

        ctx!.beginPath()
        ctx!.moveTo(x2, y2)
        ctx!.lineTo(
          x2 - Math.cos(s.angle) * lineLen,
          y2 - Math.sin(s.angle) * lineLen
        )
        ctx!.strokeStyle = sparkColor
        ctx!.lineWidth = 2
        ctx!.globalAlpha = 1 - progress
        ctx!.stroke()
      }

      ctx!.globalAlpha = 1
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      container.removeEventListener('click', onClick)
    }
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration])

  return (
    <div ref={containerRef} className={`relative ${className ?? ''}`} style={{ isolation: 'isolate' }}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[9999]"
        style={{ width: '100%', height: '100%' }}
      />
      {children}
    </div>
  )
}
