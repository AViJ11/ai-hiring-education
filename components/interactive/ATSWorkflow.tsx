'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText, Search, BarChart2, Eye, Brain,
  ChevronDown, Lightbulb, Upload
} from 'lucide-react'
import { atsWorkflowStages } from '@/data/workflow'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  FileText, Search, BarChart2, Eye, Brain, Upload,
}

export default function ATSWorkflow() {
  const [activeStage, setActiveStage] = useState<string | null>(null)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)] lg:p-8">
      <p className="mb-8 text-center text-sm text-slate-500">
        Click any stage to learn what happens and what you can do about it.
      </p>

      {/* Pipeline steps */}
      <div className="relative">
        {/* Connection line (desktop) */}
        <div className="absolute top-7 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-indigo-200 via-violet-200 to-rose-200 lg:block"
          style={{ marginLeft: '4rem', marginRight: '4rem' }}
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {atsWorkflowStages.map((stage, i) => {
            const Icon = iconMap[stage.icon] || FileText
            const isActive = activeStage === stage.id

            return (
              <motion.button
                key={stage.id}
                onClick={() => setActiveStage(isActive ? null : stage.id)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className={cn(
                  'relative flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition-all duration-200',
                  isActive
                    ? 'border-indigo-300 bg-indigo-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                )}
              >
                {/* Step number */}
                <span className={cn(
                  'absolute -top-2.5 left-1/2 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold',
                  isActive ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
                )}>
                  {stage.step}
                </span>

                {/* Icon */}
                <div className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-xl transition-colors',
                  isActive ? `${stage.bgColor} ${stage.color}` : 'bg-slate-100 text-slate-500'
                )}>
                  <Icon size={20} />
                </div>

                <span className={cn(
                  'text-xs font-semibold leading-tight',
                  isActive ? stage.color : 'text-slate-600'
                )}>
                  {stage.shortTitle}
                </span>

                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={12} className={isActive ? 'text-indigo-400' : 'text-slate-300'} />
                </motion.div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Expanded detail panel */}
      <AnimatePresence mode="wait">
        {activeStage && (() => {
          const stage = atsWorkflowStages.find((s) => s.id === activeStage)!
          return (
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className={cn('mt-6 rounded-xl border p-5', stage.bgColor, 'border-opacity-60')}>
                <div className="flex items-start gap-4">
                  <div className={cn('flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl', stage.bgColor, stage.color)}>
                    {(() => { const I = iconMap[stage.icon] || FileText; return <I size={20} /> })()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={cn('font-bold', stage.color)}>Step {stage.step}: {stage.title}</h4>
                    <p className="mt-1 text-sm text-slate-700">{stage.description}</p>

                    <ul className="mt-3 space-y-1.5">
                      {stage.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className={cn('mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full', stage.color.replace('text-', 'bg-'))} />
                          {d}
                        </li>
                      ))}
                    </ul>

                    {/* Tip */}
                    <div className="mt-4 flex items-start gap-2 rounded-lg bg-white/80 px-4 py-3 text-sm">
                      <Lightbulb size={15} className="mt-0.5 flex-shrink-0 text-amber-500" />
                      <p className="text-slate-700">{stage.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })()}
      </AnimatePresence>
    </div>
  )
}
