'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Circle, ChevronDown, TrendingUp } from 'lucide-react'
import { employerChecklist } from '@/data/checklist'
import { cn } from '@/lib/utils'

const categoryConfig = {
  'job-description': { label: 'Job Descriptions',  color: 'text-indigo-600', bg: 'bg-indigo-50' },
  'screening':       { label: 'AI Screening',       color: 'text-violet-600', bg: 'bg-violet-50' },
  'fairness':        { label: 'Fairness & Equity',  color: 'text-emerald-600', bg: 'bg-emerald-50' },
  'communication':   { label: 'Candidate Comms',    color: 'text-cyan-600',   bg: 'bg-cyan-50'   },
  'verification':    { label: 'Identity Verification', color: 'text-amber-600', bg: 'bg-amber-50' },
} as const

const maxPoints = employerChecklist.reduce((s, i) => s + i.fairnessPoints, 0)

export default function EmployerChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [openCategory, setOpenCategory] = useState<string>('job-description')

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const earnedPoints = employerChecklist
    .filter((i) => checked.has(i.id))
    .reduce((s, i) => s + i.fairnessPoints, 0)

  const fairnessPct = Math.round((earnedPoints / maxPoints) * 100)
  const fairnessLabel =
    fairnessPct >= 80 ? 'Excellent' : fairnessPct >= 55 ? 'Good' : fairnessPct >= 30 ? 'Developing' : 'Getting Started'
  const fairnessColor =
    fairnessPct >= 80 ? 'text-emerald-600' : fairnessPct >= 55 ? 'text-indigo-600' : fairnessPct >= 30 ? 'text-amber-600' : 'text-slate-500'
  const barColor =
    fairnessPct >= 80 ? 'bg-emerald-500' : fairnessPct >= 55 ? 'bg-indigo-500' : fairnessPct >= 30 ? 'bg-amber-400' : 'bg-slate-300'

  const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)]">
      {/* Fairness score header */}
      <div className="border-b border-slate-100 p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm font-semibold text-slate-700">Fairness Score</p>
            <p className="text-xs text-slate-400">Check practices your organization follows</p>
          </div>
          <div className="text-right">
            <p className={cn('text-2xl font-extrabold tabular-nums', fairnessColor)}>{fairnessPct}%</p>
            <p className={cn('text-xs font-semibold', fairnessColor)}>{fairnessLabel}</p>
          </div>
        </div>

        <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            className={cn('h-full rounded-full', barColor)}
            animate={{ width: `${fairnessPct}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
          <TrendingUp size={13} className={fairnessColor} />
          {earnedPoints} of {maxPoints} fairness points earned
        </div>
      </div>

      {/* Category accordions */}
      <div className="divide-y divide-slate-100">
        {categories.map((cat) => {
          const cfg = categoryConfig[cat]
          const items = employerChecklist.filter((i) => i.category === cat)
          const catDone = items.filter((i) => checked.has(i.id)).length
          const isOpen = openCategory === cat

          return (
            <div key={cat}>
              <button
                onClick={() => setOpenCategory(isOpen ? '' : cat)}
                className="flex w-full items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={cn('h-2 w-2 rounded-full', catDone === items.length ? 'bg-emerald-500' : 'bg-slate-200')} />
                  <span className={cn('text-sm font-semibold', cfg.color)}>{cfg.label}</span>
                  <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', cfg.bg, cfg.color)}>
                    {catDone}/{items.length}
                  </span>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={16} className="text-slate-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <ul className="px-5 pb-4 space-y-2">
                      {items.map((item) => {
                        const isDone = checked.has(item.id)
                        return (
                          <li key={item.id}>
                            <button
                              onClick={() => toggle(item.id)}
                              className={cn(
                                'flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                                isDone ? cfg.bg : 'hover:bg-slate-50'
                              )}
                            >
                              <div className="mt-0.5 flex-shrink-0">
                                {isDone
                                  ? <CheckCircle size={17} className={cfg.color} />
                                  : <Circle size={17} className="text-slate-300" />
                                }
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className={cn(
                                  'text-sm leading-snug',
                                  isDone ? 'text-slate-400 line-through' : 'text-slate-700'
                                )}>
                                  {item.text}
                                </span>
                              </div>
                              <span className={cn(
                                'flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold',
                                item.impact === 'high'
                                  ? 'bg-rose-100 text-rose-600'
                                  : item.impact === 'medium'
                                    ? 'bg-amber-100 text-amber-600'
                                    : 'bg-slate-100 text-slate-500'
                              )}>
                                +{item.fairnessPoints}
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
