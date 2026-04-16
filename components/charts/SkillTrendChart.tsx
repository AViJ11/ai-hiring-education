'use client'

import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from 'recharts'
import { skillTrendData, skillTrendLines } from '@/data/charts'
import { cn } from '@/lib/utils'

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-[var(--shadow-card-hover)] min-w-[160px]">
      <p className="mb-2 text-xs font-bold text-slate-500">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center justify-between gap-4 text-xs">
          <span className="flex items-center gap-1.5" style={{ color: p.color }}>
            <span className="h-2 w-2 rounded-full inline-block" style={{ background: p.color }} />
            {p.name.split(' & ')[0]}
          </span>
          <span className="font-bold text-slate-800">{p.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function SkillTrendChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hiddenKeys, setHiddenKeys] = useState<Set<string>>(new Set())

  const toggleKey = (key: string) => {
    setHiddenKeys((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  return (
    <div ref={ref} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="mb-1 text-sm font-bold text-slate-800">Employer Demand by Skill (Indexed)</p>
      <p className="mb-4 text-xs text-slate-500">Relative change in demand across skill categories since 2020. Click a legend item to toggle.</p>

      {/* Interactive legend */}
      <div className="mb-5 flex flex-wrap gap-2">
        {skillTrendLines.map((line) => {
          const hidden = hiddenKeys.has(line.key)
          return (
            <button
              key={line.key}
              onClick={() => toggleKey(line.key)}
              className={cn(
                'flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all',
                hidden
                  ? 'border-slate-200 bg-white text-slate-400'
                  : 'border-transparent text-white'
              )}
              style={hidden ? {} : { background: line.color, borderColor: line.color }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: hidden ? '#cbd5e1' : 'white' }} />
              {line.name}
            </button>
          )
        })}
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={skillTrendData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          {skillTrendLines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.name}
              stroke={line.color}
              strokeWidth={2.5}
              dot={{ r: 3, fill: line.color, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: line.color }}
              hide={hiddenKeys.has(line.key)}
              isAnimationActive={isInView}
              animationBegin={300}
              animationDuration={1400}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>

      <p className="mt-4 text-center text-[10px] text-slate-400">
        Source: WEF Future of Jobs 2025, LinkedIn Economic Graph, NACE data — illustrative indexed model
      </p>
    </div>
  )
}
