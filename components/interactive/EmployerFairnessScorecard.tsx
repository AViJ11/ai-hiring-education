'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

type Answer = 'yes' | 'no' | 'partial' | null

interface ScorecardQuestion {
  id: string
  question: string
  yesLabel: string
  noLabel: string
  partialLabel: string
  weight: number
}

const questions: ScorecardQuestion[] = [
  {
    id: 'q1',
    question: 'Do you audit your ATS rejection reasons for demographic bias?',
    yesLabel: 'Regular audits with documented outcomes',
    partialLabel: 'Occasional informal review',
    noLabel: 'Not audited',
    weight: 25,
  },
  {
    id: 'q2',
    question: 'Do job descriptions use skills-based rather than credential-based requirements?',
    yesLabel: 'Skills and experience preferred over degrees',
    partialLabel: 'Mixed — some roles still require degrees',
    noLabel: 'Most postings require degrees by default',
    weight: 20,
  },
  {
    id: 'q3',
    question: 'Do candidates receive communication about AI screening being used?',
    yesLabel: 'Disclosed in every job posting',
    partialLabel: 'Available on request',
    noLabel: 'Not disclosed',
    weight: 15,
  },
  {
    id: 'q4',
    question: 'Is your interview process structured with standardized questions?',
    yesLabel: 'All interviewers use the same question set',
    partialLabel: 'Some standardization, varies by team',
    noLabel: 'Unstructured — interviewers choose questions freely',
    weight: 20,
  },
  {
    id: 'q5',
    question: 'Do all applicants receive a response, even rejections?',
    yesLabel: 'Yes — automated rejections within 2 weeks',
    partialLabel: 'Only for candidates who reached a certain stage',
    noLabel: 'Candidates are not notified of rejection',
    weight: 10,
  },
  {
    id: 'q6',
    question: 'Do you track and report hiring outcome data by demographic group?',
    yesLabel: 'Annual DEI hiring report published',
    partialLabel: 'Internal tracking only',
    noLabel: 'Not tracked',
    weight: 10,
  },
]

const scoreValues: Record<NonNullable<Answer>, number> = { yes: 1, partial: 0.5, no: 0 }

export default function EmployerFairnessScorecard() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})

  const answered = Object.values(answers).filter(Boolean).length
  const rawScore = questions.reduce((sum, q) => {
    const a = answers[q.id]
    return sum + (a ? q.weight * scoreValues[a] : 0)
  }, 0)
  const maxScore = questions.reduce((sum, q) => sum + q.weight, 0)
  const pct = Math.round((rawScore / maxScore) * 100)

  const label = pct >= 80 ? 'Industry Leader' : pct >= 60 ? 'On Track' : pct >= 35 ? 'Needs Improvement' : 'High Risk'
  const labelColor = pct >= 80 ? 'text-emerald-600' : pct >= 60 ? 'text-indigo-600' : pct >= 35 ? 'text-amber-600' : 'text-rose-600'
  const barColor = pct >= 80 ? 'bg-emerald-500' : pct >= 60 ? 'bg-indigo-500' : pct >= 35 ? 'bg-amber-400' : 'bg-rose-500'

  const setAnswer = (id: string, val: Answer) =>
    setAnswers((prev) => ({ ...prev, [id]: val }))

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)]">
      {/* Score display */}
      <div className="border-b border-slate-100 p-5">
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-sm font-semibold text-slate-700">Fairness Scorecard</p>
            <p className="text-xs text-slate-400">{answered}/{questions.length} questions answered</p>
          </div>
          {answered > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-right"
            >
              <p className={cn('text-3xl font-extrabold tabular-nums', labelColor)}>{pct}%</p>
              <p className={cn('text-xs font-bold', labelColor)}>{label}</p>
            </motion.div>
          )}
        </div>

        {answered > 0 && (
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              className={cn('h-full rounded-full', barColor)}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        )}
      </div>

      {/* Questions */}
      <div className="divide-y divide-slate-100">
        {questions.map((q, i) => {
          const current = answers[q.id] ?? null

          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <p className="text-sm font-medium text-slate-800">{q.question}</p>
                <span className="flex-shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">
                  {q.weight}pts
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {(['yes', 'partial', 'no'] as const).map((opt) => {
                  const optLabel = opt === 'yes' ? q.yesLabel : opt === 'partial' ? q.partialLabel : q.noLabel
                  const isSelected = current === opt
                  const optColor = opt === 'yes'
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                    : opt === 'partial'
                      ? 'border-amber-300 bg-amber-50 text-amber-700'
                      : 'border-rose-300 bg-rose-50 text-rose-700'
                  const defaultColor = 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'

                  return (
                    <button
                      key={opt}
                      onClick={() => setAnswer(q.id, isSelected ? null : opt)}
                      className={cn(
                        'flex flex-col items-center gap-1 rounded-xl border-2 p-2.5 text-center transition-all duration-200',
                        isSelected ? optColor : defaultColor
                      )}
                    >
                      <div className="flex-shrink-0">
                        {opt === 'yes' ? (
                          <CheckCircle size={16} className={isSelected ? 'text-emerald-500' : 'text-slate-300'} />
                        ) : opt === 'partial' ? (
                          <Minus size={16} className={isSelected ? 'text-amber-500' : 'text-slate-300'} />
                        ) : (
                          <XCircle size={16} className={isSelected ? 'text-rose-500' : 'text-slate-300'} />
                        )}
                      </div>
                      <span className="text-[10px] font-semibold capitalize leading-tight">
                        {opt === 'partial' ? 'Partial' : opt.charAt(0).toUpperCase() + opt.slice(1)}
                      </span>
                      <span className="hidden lg:block text-[9px] leading-tight opacity-80">{optLabel}</span>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Summary */}
      {answered === questions.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            'border-t p-5 text-sm',
            pct >= 80 ? 'border-emerald-100 bg-emerald-50 text-emerald-800'
              : pct >= 60 ? 'border-indigo-100 bg-indigo-50 text-indigo-800'
              : pct >= 35 ? 'border-amber-100 bg-amber-50 text-amber-800'
              : 'border-rose-100 bg-rose-50 text-rose-800'
          )}
        >
          <p className="font-semibold mb-1">
            {pct >= 80 ? 'You are setting the standard for fair AI hiring.' :
             pct >= 60 ? 'You\'re doing well — a few targeted improvements will elevate your process.' :
             pct >= 35 ? 'Significant gaps remain. Prioritize bias auditing and structured interviews.' :
             'Your process carries meaningful legal, ethical, and quality risk. Start with ATS auditing and candidate communication.'}
          </p>
          <p className="text-xs opacity-80">Use the full checklist above for a detailed action plan.</p>
        </motion.div>
      )}
    </div>
  )
}
