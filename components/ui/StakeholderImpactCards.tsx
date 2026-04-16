'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Briefcase, Users, Shield, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react'
import { stakeholderCards } from '@/data/stakeholders'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Briefcase,
  Users,
  Shield,
}

export default function StakeholderImpactCards() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stakeholderCards.map((card, i) => {
        const Icon = iconMap[card.icon]
        const isOpen = activeId === card.id

        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => setActiveId(isOpen ? null : card.id)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
            >
              <div className={cn('flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white flex-shrink-0', card.gradient)}>
                <Icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn('text-sm font-bold', card.color)}>{card.group}</p>
                <p className="mt-0.5 text-xs text-slate-500 line-clamp-2">{card.impactSummary}</p>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0"
              >
                <ChevronDown size={18} className="text-slate-400" />
              </motion.div>
            </button>

            {/* Expanded content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 grid sm:grid-cols-2 gap-4 border-t border-slate-100">
                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600">
                        <AlertCircle size={13} /> Challenges
                      </p>
                      <ul className="space-y-1.5">
                        {card.challenges.map((c, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600">
                        <CheckCircle size={13} /> Opportunities
                      </p>
                      <ul className="space-y-1.5">
                        {card.opportunities.map((o, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
