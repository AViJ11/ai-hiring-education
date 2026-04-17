'use client'

interface GlassSurfaceProps {
  children?: React.ReactNode
  borderRadius?: number
  className?: string
  style?: React.CSSProperties
}

const GlassSurface = ({
  children,
  borderRadius = 50,
  className = '',
  style = {},
}: GlassSurfaceProps) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        ...style,
        borderRadius: `${borderRadius}px`,
        background: 'rgba(255, 255, 255, 0.015)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.04)`,
      }}
    >
      <div className="relative z-10 flex items-center justify-center px-8 py-3.5">
        {children}
      </div>
    </div>
  )
}

export default GlassSurface
