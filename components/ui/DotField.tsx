'use client'

import { useEffect, useRef, CSSProperties } from 'react'

interface DotFieldProps {
  dotRadius?: number
  dotSpacing?: number
  cursorRadius?: number
  bulgeStrength?: number
  waveAmplitude?: number
  gradientFrom?: string
  gradientTo?: string
  style?: CSSProperties
  className?: string
}

export default function DotField({
  dotRadius = 1.3,
  dotSpacing = 18,
  cursorRadius = 350,
  bulgeStrength = 35,
  waveAmplitude = 1.5,
  gradientFrom = 'rgba(6, 182, 212, 0.35)',
  gradientTo = 'rgba(139, 92, 246, 0.25)',
  style,
  className,
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0

    function resize() {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    canvas.addEventListener('mousemove', onMouseMove)

    function draw(ts: number) {
      timeRef.current = ts * 0.001
      ctx!.clearRect(0, 0, width, height)

      const cols = Math.ceil(width / dotSpacing) + 1
      const rows = Math.ceil(height / dotSpacing) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * dotSpacing
          const baseY = r * dotSpacing + Math.sin(c * 0.5 + timeRef.current) * waveAmplitude

          const dx = baseX - mouse.current.x
          const dy = baseY - mouse.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          let x = baseX
          let y = baseY

          if (dist < cursorRadius && dist > 0) {
            const force = (1 - dist / cursorRadius) * bulgeStrength
            x += (dx / dist) * force
            y += (dy / dist) * force
          }

          // Color interpolation based on position
          const t = c / cols
          const r1 = parseInt(gradientFrom.slice(5).split(',')[0])
          const g1 = parseInt(gradientFrom.slice(5).split(',')[1])
          const b1 = parseInt(gradientFrom.slice(5).split(',')[2])
          const a1 = parseFloat(gradientFrom.slice(5).split(',')[3])

          const r2 = parseInt(gradientTo.slice(5).split(',')[0])
          const g2 = parseInt(gradientTo.slice(5).split(',')[1])
          const b2 = parseInt(gradientTo.slice(5).split(',')[2])
          const a2 = parseFloat(gradientTo.slice(5).split(',')[3])

          const ri = Math.round(r1 + (r2 - r1) * t)
          const gi = Math.round(g1 + (g2 - g1) * t)
          const bi = Math.round(b1 + (b2 - b1) * t)
          const ai = a1 + (a2 - a1) * t

          ctx!.beginPath()
          ctx!.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(${ri},${gi},${bi},${ai})`
          ctx!.fill()
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      canvas.removeEventListener('mousemove', onMouseMove)
    }
  }, [dotRadius, dotSpacing, cursorRadius, bulgeStrength, waveAmplitude, gradientFrom, gradientTo])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block', ...style }}
    />
  )
}
