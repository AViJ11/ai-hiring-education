'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, AlertTriangle, RotateCcw, Award } from 'lucide-react'
import { scamQuizQuestions } from '@/data/scamQuiz'
import { cn } from '@/lib/utils'

type QuizState = 'intro' | 'question' | 'result' | 'done'

export default function ScamQuiz() {
  const [state, setState] = useState<QuizState>('intro')
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [shake, setShake] = useState(false)

  const question = scamQuizQuestions[current]
  const score = answers.filter(Boolean).length

  const handleSelect = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    const correct = idx === question.correctIndex
    if (!correct) {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
    setState('result')
  }

  const handleNext = () => {
    setAnswers((prev) => [...prev, selected === question.correctIndex])
    if (current + 1 >= scamQuizQuestions.length) {
      setState('done')
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setState('question')
    }
  }

  const reset = () => {
    setState('intro')
    setCurrent(0)
    setSelected(null)
    setAnswers([])
    setShake(false)
  }

  const scoreColor = score >= 4 ? 'text-emerald-600' : score >= 2 ? 'text-amber-600' : 'text-rose-600'
  const scoreBg = score >= 4 ? 'bg-emerald-50 border-emerald-200' : score >= 2 ? 'bg-amber-50 border-amber-200' : 'bg-rose-50 border-rose-200'
  const scoreLabel = score === 5 ? 'Scam Expert' : score >= 3 ? 'Cautiously Aware' : 'High Risk — Review the Red Flags'

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Intro */}
        {state === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-7 text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">
              <AlertTriangle size={28} className="text-amber-500" />
            </div>
            <h4 className="text-lg font-extrabold text-slate-900">Scam Detection Quiz</h4>
            <p className="mt-2 text-sm text-slate-500">
              Test your ability to spot fake job postings and hiring fraud. 5 real-world scenarios.
            </p>
            <button
              onClick={() => setState('question')}
              className="mt-6 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
            >
              Start the Quiz
            </button>
          </motion.div>
        )}

        {/* Question */}
        {(state === 'question' || state === 'result') && (
          <motion.div
            key={`q-${current}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={cn('p-6', shake && 'shake')}
          >
            {/* Progress */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex gap-1.5">
                {scamQuizQuestions.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'h-1.5 rounded-full transition-all duration-300',
                      i < current
                        ? answers[i] ? 'bg-emerald-500 w-4' : 'bg-rose-400 w-4'
                        : i === current
                          ? 'bg-amber-400 w-6'
                          : 'bg-slate-200 w-4'
                    )}
                  />
                ))}
              </div>
              <span className="ml-auto text-xs text-slate-400">{current + 1}/{scamQuizQuestions.length}</span>
            </div>

            {/* Scenario */}
            <div className="mb-5 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 border border-slate-200">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">Scenario</p>
              {question.scenario}
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {question.options.map((opt, idx) => {
                const isSelected = selected === idx
                const isCorrect = idx === question.correctIndex
                const showResult = state === 'result'

                return (
                  <motion.button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    whileHover={state === 'question' ? { x: 3 } : {}}
                    disabled={state === 'result'}
                    className={cn(
                      'flex w-full items-start gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition-all duration-200',
                      showResult
                        ? isCorrect
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                          : isSelected
                            ? 'border-rose-300 bg-rose-50 text-rose-800'
                            : 'border-slate-200 bg-white text-slate-400 opacity-60'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer'
                    )}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {showResult && isCorrect ? (
                        <CheckCircle size={16} className="text-emerald-500" />
                      ) : showResult && isSelected && !isCorrect ? (
                        <XCircle size={16} className="text-rose-500" />
                      ) : (
                        <div className={cn(
                          'flex h-4 w-4 items-center justify-center rounded-full border text-[10px] font-bold',
                          isSelected ? 'border-indigo-400 bg-indigo-100 text-indigo-700' : 'border-slate-300 text-slate-400'
                        )}>
                          {String.fromCharCode(65 + idx)}
                        </div>
                      )}
                    </div>
                    <span>{opt}</span>
                  </motion.button>
                )
              })}
            </div>

            {/* Explanation */}
            {state === 'result' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-5 space-y-3"
              >
                <div className={cn(
                  'rounded-xl border p-4 text-sm',
                  selected === question.correctIndex
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                    : 'border-rose-200 bg-rose-50 text-rose-800'
                )}>
                  <p className="font-semibold mb-1">{selected === question.correctIndex ? 'Correct!' : 'Incorrect'}</p>
                  <p className="text-xs leading-relaxed">{question.explanation}</p>
                </div>

                {question.redFlags.filter(f => !f.startsWith('None')).length > 0 && (
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-700">Red Flags in This Scenario</p>
                    <ul className="space-y-1">
                      {question.redFlags.filter(f => !f.startsWith('None')).map((flag, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-amber-800">
                          <AlertTriangle size={11} className="mt-0.5 flex-shrink-0" /> {flag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={handleNext}
                  className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  {current + 1 < scamQuizQuestions.length ? 'Next Question →' : 'See My Score'}
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Done */}
        {state === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-7 text-center"
          >
            <div className={cn(
              'mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border-2',
              scoreBg
            )}>
              <Award size={38} className={scoreColor} />
            </div>
            <p className="text-4xl font-extrabold tabular-nums text-slate-900">{score}/{scamQuizQuestions.length}</p>
            <p className={cn('mt-1 text-lg font-bold', scoreColor)}>{scoreLabel}</p>
            <p className="mt-3 text-sm text-slate-500 max-w-xs mx-auto">
              {score === 5
                ? 'Excellent. You have strong instincts for spotting hiring fraud. Share this quiz with others.'
                : score >= 3
                  ? 'Good awareness, but review the scenarios you missed — scammers are getting more sophisticated.'
                  : 'Job scams are becoming more convincing. Review each scenario carefully and bookmark our red flag checklist.'}
            </p>
            <button
              onClick={reset}
              className="mt-6 flex items-center gap-2 mx-auto rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <RotateCcw size={14} /> Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
