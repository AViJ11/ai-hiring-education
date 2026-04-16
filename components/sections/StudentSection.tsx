'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Brain, AlertTriangle, CheckCircle, FileText, Video } from 'lucide-react'
import SectionWrapper from '@/components/layout/SectionWrapper'
import ATSWorkflow from '@/components/interactive/ATSWorkflow'
import ResumeChecklist from '@/components/interactive/ResumeChecklist'
import ResumeComparison from '@/components/interactive/ResumeComparison'
import ScamQuiz from '@/components/interactive/ScamQuiz'

function InfoCard({
  icon: Icon,
  title,
  points,
  color,
  bg,
  delay = 0,
}: {
  icon: React.ElementType
  title: string
  points: string[]
  color: string
  bg: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)]"
    >
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
        <Icon size={20} className={color} />
      </div>
      <h4 className="mb-3 font-bold text-slate-900">{title}</h4>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
            <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${color}`} />
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function StudentSection() {
  return (
    <div id="students" className="bg-student-pattern">
      <SectionWrapper
        id="students-inner"
        tag="For Students & Job Seekers"
        tagColor="bg-indigo-50 text-indigo-600"
        title="Navigate the System with Confidence"
        subtitle="Most job seekers don't know how AI hiring actually works. This section changes that."
      >

        {/* How AI hiring works — intro cards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-bold text-slate-900"
          >
            How the Hiring System Works Today
          </motion.h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon={FileText}
              title="ATS First Contact"
              points={[
                'Your resume is parsed by software before any human sees it',
                'Keywords and formatting determine if you advance',
                '72% of resumes never reach a recruiter',
              ]}
              color="text-indigo-600"
              bg="bg-indigo-50"
              delay={0.05}
            />
            <InfoCard
              icon={Brain}
              title="AI Scoring"
              points={[
                'ATS assigns a match score based on keyword alignment',
                'Top scorers advance to human review',
                'Bias can be encoded in the scoring model',
              ]}
              color="text-violet-600"
              bg="bg-violet-50"
              delay={0.1}
            />
            <InfoCard
              icon={Video}
              title="AI Interviews"
              points={[
                'Many companies use video AI to screen before live interviews',
                'Systems analyze tone, word choice, and facial expressions',
                'These tools have documented fairness and accuracy concerns',
              ]}
              color="text-cyan-600"
              bg="bg-cyan-50"
              delay={0.15}
            />
            <InfoCard
              icon={AlertTriangle}
              title="Scam Risk"
              points={[
                '1 in 3 job seekers has encountered a scam posting',
                'AI makes fake job listings more convincing',
                'Social engineering via "interviews" is rising',
              ]}
              color="text-amber-600"
              bg="bg-amber-50"
              delay={0.2}
            />
          </div>
        </div>

        {/* ATS Workflow */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-xl font-bold text-slate-900">The ATS Pipeline — Step by Step</h3>
            <p className="mt-2 text-sm text-slate-500">
              Click each stage to understand what happens to your application and what you can do about it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ATSWorkflow />
          </motion.div>
        </div>

        {/* Resume tools */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-bold text-slate-900"
          >
            Optimize Your Resume — Without Lying
          </motion.h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <ResumeChecklist />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ResumeComparison />
            </motion.div>
          </div>
        </div>

        {/* AI Interview Tips */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-bold text-slate-900"
          >
            Preparing for AI Video Interviews
          </motion.h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Structure Your Answers',
                body: 'Use the STAR method (Situation, Task, Action, Result) for every behavioral question. AI analysis often scores answer structure and completeness.',
                icon: '📐',
              },
              {
                title: 'Camera & Environment',
                body: 'Face the camera directly. Ensure good lighting (light source in front of you, not behind). A plain background reduces visual noise that some AI systems flag.',
                icon: '🎥',
              },
              {
                title: 'Speak Clearly',
                body: 'Speak at a measured, clear pace. AI transcription and sentiment analysis performs best with clear diction. Avoid filler words like "um" and "like."',
                icon: '🎙️',
              },
              {
                title: 'Know Your Rights',
                body: 'In some jurisdictions (like Illinois), employers must notify you if AI is used to evaluate your interview. You can ask HR about their process.',
                icon: '⚖️',
              },
              {
                title: 'Practice Out Loud',
                body: 'Record yourself answering practice questions. Watch it back to evaluate your pace, expression, and clarity. This is the most effective prep method.',
                icon: '🔄',
              },
              {
                title: 'Manage the Bias Risk',
                body: 'AI interview tools have shown documented bias related to accent, skin tone, and neurodivergence. If you are rejected unfairly, document your experience.',
                icon: '🛡️',
              },
            ].map(({ title, body, icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="mb-3 text-2xl">{icon}</div>
                <h4 className="mb-2 font-bold text-slate-900 text-sm">{title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What you control vs what you don't */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-bold text-slate-900"
          >
            What You Control — and What You Don&apos;t
          </motion.h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                label: 'You Control',
                icon: '✅',
                color: 'border-emerald-200 bg-emerald-50',
                textColor: 'text-emerald-800',
                items: [
                  'How well you tailor your resume to each job',
                  'Whether your formatting is ATS-parseable',
                  'Which keywords you include and how',
                  'How you prepare for AI video interviews',
                  'Whether you verify a job posting is legitimate',
                  'How many roles you apply to and where',
                ],
              },
              {
                label: "You Don't Control",
                icon: '❌',
                color: 'border-rose-200 bg-rose-50',
                textColor: 'text-rose-800',
                items: [
                  'Which ATS software the employer uses',
                  'Whether the AI model has calibrated bias',
                  'How many candidates also applied',
                  'Internal referral candidates you aren\'t aware of',
                  'Whether an employer uses AI video screening',
                  'The employer\'s budget or headcount freeze',
                ],
              },
            ].map(({ label, icon, color, textColor, items }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl border-2 p-6 ${color}`}
              >
                <p className={`mb-4 flex items-center gap-2 font-bold ${textColor}`}>
                  {icon} {label}
                </p>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className={`text-sm ${textColor.replace('800', '700')} flex items-start gap-2`}>
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current opacity-60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scam Quiz */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-xl font-bold text-slate-900">Can You Spot a Scam Job?</h3>
            <p className="mt-2 text-sm text-slate-500">
              Fake job postings cost Americans over $14 billion annually. Test your ability to identify them.
            </p>
          </motion.div>
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ScamQuiz />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
