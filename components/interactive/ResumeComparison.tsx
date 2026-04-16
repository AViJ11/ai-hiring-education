'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { XCircle, CheckCircle, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

type View = 'bad' | 'good'

const badResume = {
  name: 'Alex Smith',
  contact: 'alexsmith@gmail.com',
  sections: [
    {
      title: 'Objective',
      content: 'Looking for a challenging position where I can use my skills and grow professionally in a dynamic company.',
      issues: ['Vague and self-focused — says nothing about value to employer', 'ATS scores this section low due to lack of keywords'],
    },
    {
      title: 'Work Experience',
      content: 'Company ABC (2021–2023)\nResponsible for managing things and helping customers. Did good work. Team player.',
      issues: ['No job title listed', 'No quantifiable results ("did good work" is not scannable)', 'No action verbs — ATS cannot extract meaningful data'],
    },
    {
      title: 'Education',
      content: 'State University — Bachelor\'s in Communications',
      issues: ['No graduation year — ATS may reject for missing fields', 'No GPA or relevant coursework listed'],
    },
    {
      title: 'Skills',
      content: 'Microsoft Office, Teamwork, Communication, Hard Worker, Quick Learner',
      issues: ['Soft skills are ignored by most ATS systems', '"Microsoft Office" is too generic — which programs?', 'No specific technical or job-relevant keywords'],
    },
  ],
}

const goodResume = {
  name: 'Alex Smith',
  contact: 'alex.smith@email.com | linkedin.com/in/alexsmith | (555) 234-5678',
  sections: [
    {
      title: 'Professional Summary',
      content: 'Marketing coordinator with 2+ years of experience in digital campaign management and data analytics. Proven track record driving 35% improvement in lead conversion rates through targeted content strategy and A/B testing.',
      wins: ['Keyword-rich and role-specific', 'Immediately communicates measurable value', 'Aligns with common marketing job description language'],
    },
    {
      title: 'Work Experience',
      content: 'Marketing Coordinator — Company ABC | Jan 2021–Dec 2023\n• Managed 12 concurrent digital campaigns across Google Ads, Meta, and LinkedIn, achieving 22% avg. click-through rate\n• Led A/B testing initiatives that improved email open rates by 35%\n• Analyzed campaign performance using Google Analytics and Tableau, reporting findings to senior leadership',
      wins: ['Clear job title and dates — ATS parses correctly', 'Starts every bullet with a strong action verb', 'Quantified results with specific metrics and tools'],
    },
    {
      title: 'Education',
      content: 'State University — B.A. Communications, Marketing Concentration\nGraduated May 2021 | GPA: 3.6',
      wins: ['All required fields present: degree, field, institution, year', 'GPA signals academic performance where relevant'],
    },
    {
      title: 'Skills',
      content: 'Google Ads, Meta Ads Manager, Google Analytics, Tableau, HubSpot CRM, A/B Testing, SEO/SEM, Content Strategy, Microsoft Excel',
      wins: ['Specific tools mirror job description keywords', 'ATS can match each tool against job requirements', 'No filler soft skills — only demonstrable skills'],
    },
  ],
}

export default function ResumeComparison() {
  const [view, setView] = useState<View>('bad')
  const resume = view === 'bad' ? badResume : goodResume

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] overflow-hidden">
      {/* Toggle header */}
      <div className="border-b border-slate-100 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-700">Resume Comparison</p>
          <div className="flex rounded-xl border border-slate-200 p-1 gap-1">
            {(['bad', 'good'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={cn(
                  'relative rounded-lg px-4 py-1.5 text-xs font-semibold transition-all duration-200',
                  view === v
                    ? v === 'bad' ? 'bg-rose-500 text-white shadow-sm' : 'bg-emerald-500 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                )}
              >
                {v === 'bad' ? 'Before (Bad)' : 'After (ATS-Ready)'}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          {view === 'bad'
            ? 'This resume will be rejected by most ATS systems. Click the issues to understand why.'
            : 'This version passes ATS screening and earns higher match scores.'}
        </p>
      </div>

      {/* Resume preview */}
      <motion.div
        key={view}
        initial={{ opacity: 0, x: view === 'good' ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="p-5"
      >
        {/* Header */}
        <div className={cn(
          'rounded-xl border-l-4 p-4 mb-4',
          view === 'bad' ? 'border-rose-400 bg-rose-50' : 'border-emerald-400 bg-emerald-50'
        )}>
          <div className="flex items-center gap-2 mb-1">
            {view === 'bad'
              ? <XCircle size={16} className="text-rose-500" />
              : <CheckCircle size={16} className="text-emerald-500" />
            }
            <p className="font-bold text-slate-900">{resume.name}</p>
          </div>
          <p className="text-xs text-slate-600">{resume.contact}</p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {resume.sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl border border-slate-100 bg-slate-50 p-4"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">{section.title}</p>
              <p className="mb-3 whitespace-pre-line text-xs leading-relaxed text-slate-700">{section.content}</p>

              {/* Annotations */}
              {'issues' in section && (
                <div className="space-y-1.5">
                  {section.issues.map((issue, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-rose-700 bg-rose-50 rounded-lg px-3 py-1.5">
                      <AlertTriangle size={12} className="mt-0.5 flex-shrink-0" />
                      {issue}
                    </div>
                  ))}
                </div>
              )}
              {'wins' in section && (
                <div className="space-y-1.5">
                  {section.wins.map((win, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-emerald-700 bg-emerald-50 rounded-lg px-3 py-1.5">
                      <CheckCircle size={12} className="mt-0.5 flex-shrink-0" />
                      {win}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
