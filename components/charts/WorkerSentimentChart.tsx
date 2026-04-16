'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, LabelList,
} from 'recharts'
import { workerSentimentData } from '@/data/charts'

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
      <p className="text-lg font-extrabold text-slate-900">{payload[0].value}%</p>
      <p className="text-xs text-slate-500">of surveyed workers</p>
    </div>
  )
}

export default function WorkerSentimentChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="mb-1 text-sm font-bold text-slate-800">Worker Sentiment About AI</p>
      <p className="mb-5 text-xs text-slate-500">How workers describe their feelings about AI in the workplace</p>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={workerSentimentData} margin={{ top: 16, right: 8, left: -20, bottom: 0 }} barSize={36}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis
            dataKey="category"
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
            interval={0}
            angle={-15}
            textAnchor="end"
            height={50}
          />
          <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} unit="%" />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(99,102,241,0.04)' }} />
          <Bar dataKey="percentage" radius={[6, 6, 0, 0]}
            isAnimationActive={isInView}
            animationBegin={200}
            animationDuration={1200}
          >
            {workerSentimentData.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
            <LabelList dataKey="percentage" position="top" formatter={(v: unknown) => `${v}%`} style={{ fontSize: 10, fontWeight: 700, fill: '#475569' }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <p className="mt-4 text-center text-[10px] text-slate-400">
        Source: WEF Future of Jobs Survey, 2025 — aggregated worker sentiment data
      </p>
    </div>
  )
}
