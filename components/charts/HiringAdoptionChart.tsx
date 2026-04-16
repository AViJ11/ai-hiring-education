'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, LabelList,
} from 'recharts'
import { hiringAdoptionData } from '@/data/charts'

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-[var(--shadow-card-hover)]">
      <p className="text-xs font-semibold text-slate-700">{label}</p>
      <p className="text-xl font-extrabold text-indigo-600">{payload[0].value}%</p>
      <p className="text-xs text-slate-500">of surveyed companies</p>
    </div>
  )
}

export default function HiringAdoptionChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="mb-1 text-sm font-bold text-slate-800">AI Adoption by Hiring Stage</p>
      <p className="mb-5 text-xs text-slate-500">% of companies using AI tools at each stage of their hiring process</p>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          data={hiringAdoptionData}
          layout="vertical"
          margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
          barSize={22}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
          <XAxis type="number" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} unit="%" domain={[0, 100]} />
          <YAxis
            type="category"
            dataKey="stage"
            tick={{ fontSize: 11, fill: '#475569' }}
            axisLine={false}
            tickLine={false}
            width={110}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(99,102,241,0.04)' }} />
          <Bar dataKey="adoption" radius={[0, 6, 6, 0]}
            isAnimationActive={isInView}
            animationBegin={200}
            animationDuration={1400}
          >
            {hiringAdoptionData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
            <LabelList
              dataKey="adoption"
              position="right"
              formatter={(v: unknown) => `${v}%`}
              style={{ fontSize: 11, fontWeight: 700, fill: '#475569' }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <p className="mt-4 text-center text-[10px] text-slate-400">
        Source: SHRM AI in HR Survey 2024; IBM Institute for Business Value — illustrative composite data
      </p>
    </div>
  )
}
