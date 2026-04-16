'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Circle, ChevronDown } from 'lucide-react'
import { resumeChecklist } from '@/data/checklist'
import { cn } from '@/lib/utils'

const categoryConfig = {
  format:   { label: 'Formatting',       color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  content:  { label: 'Content Quality',  color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' },
  keywords: { label: 'Keyword Strategy', color: 'text-cyan-600',   bg: 'bg-cyan-50',   border: 'border-cyan-200'   },
  safety:   { label: 'Safety & Fraud',   color: 'text-amber-600',  bg: 'bg-amber-50',  border: 'border-amber-200'  },
} as const

const importanceDot = {
  high:   'bg-rose-500',
  medium: 'bg-amber-400',
  low:    'bg-slate-300',
}

export default function ResumeChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [openCategory, setOpenCategory] = useState<string>('format')

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>
  const total = resumeChecklist.length
  const done = checked.size
  const pct = Math.round((done / total) * 100)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)]">
      {/* Progress header */}
      <div className="border-b border-slate-100 p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-slate-700">Resume Readiness</p>
          <span className={cn(
            'text-sm font-bold',
            pct >= 80 ? 'text-emerald-600' : pct >= 50 ? 'text-amber-600' : 'text-slate-500'
          )}>
            {done}/{total} complete
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            className={cn(
              'h-full rounded-full transition-colors',
              pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-400' : 'bg-indigo-500'
            )}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
        {pct === 100 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-xs font-medium text-emerald-600"
          >
            Your resume is ATS-ready.
          </motion.p>
        )}
      </div>

      {/* Category accordions */}
      <div className="divide-y divide-slate-100">
        {categories.map((cat) => {
          const cfg = categoryConfig[cat]
          const items = resumeChecklist.filter((i) => i.category === cat)
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
                          <motion.li
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <button
                              onClick={() => toggle(item.id)}
                              className={cn(
                                'flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                                isDone ? cn(cfg.bg) : 'hover:bg-slate-50'
                              )}
                            >
                              <div className="mt-0.5 flex-shrink-0">
                                {isDone ? (
                                  <CheckCircle size={17} className={cfg.color} />
                                ) : (
                                  <Circle size={17} className="text-slate-300" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className={cn(
                                  'text-sm leading-snug',
                                  isDone ? 'text-slate-400 line-through' : 'text-slate-700'
                                )}>
                                  {item.text}
                                </span>
                              </div>
                              <div className={cn('mt-1 h-2 w-2 flex-shrink-0 rounded-full', importanceDot[item.importance])} />
                            </button>
                          </motion.li>
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

      {/* Legend */}
      <div className="border-t border-slate-100 px-5 py-3 flex gap-4">
        <p className="text-xs text-slate-400 mr-1">Priority:</p>
        {(['high', 'medium', 'low'] as const).map((p) => (
          <span key={p} className="flex items-center gap-1.5 text-xs text-slate-500 capitalize">
            <span className={cn('h-2 w-2 rounded-full', importanceDot[p])} /> {p}
          </span>
        ))}
      </div>
    </div>
  )
}
