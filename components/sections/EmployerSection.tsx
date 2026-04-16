'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, Scale, Users } from 'lucide-react'
import SectionWrapper from '@/components/layout/SectionWrapper'
import EmployerChecklist from '@/components/interactive/EmployerChecklist'
import EmployerFairnessScorecard from '@/components/interactive/EmployerFairnessScorecard'

function BenefitRiskCard({
  type,
  items,
  delay = 0,
}: {
  type: 'benefit' | 'risk'
  items: Array<{ title: string; desc: string }>
  delay?: number
}) {
  const isBenefit = type === 'benefit'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`rounded-2xl border-2 p-6 ${isBenefit ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'}`}
    >
      <p className={`mb-5 flex items-center gap-2 font-bold ${isBenefit ? 'text-emerald-800' : 'text-rose-800'}`}>
        {isBenefit ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
        {isBenefit ? 'Why Employers Use AI Hiring' : 'What Goes Wrong'}
      </p>
      <div className="space-y-4">
        {items.map(({ title, desc }, i) => (
          <div key={i}>
            <p className={`text-sm font-semibold ${isBenefit ? 'text-emerald-800' : 'text-rose-800'}`}>{title}</p>
            <p className={`mt-0.5 text-xs leading-relaxed ${isBenefit ? 'text-emerald-700' : 'text-rose-700'}`}>{desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function EmployerSection() {
  return (
    <div id="employers" className="bg-employer-pattern">
      <SectionWrapper
        id="employers-inner"
        tag="For Employers & Recruiters"
        tagColor="bg-emerald-50 text-emerald-700"
        title="Hire Faster, Fairer, and Safer"
        subtitle="AI hiring tools offer real efficiency gains — but without careful oversight, they introduce legal risk, reduce candidate quality, and damage your employer brand."
      >

        {/* Benefits vs Risks */}
        <div className="mb-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <BenefitRiskCard
              type="benefit"
              delay={0}
              items={[
                { title: 'Speed and Scale', desc: 'ATS and AI tools process hundreds of applications in seconds, dramatically reducing time-to-hire from weeks to days.' },
                { title: 'Consistent Screening', desc: 'Algorithms apply the same criteria to every applicant, removing the fatigue-related inconsistency human reviewers experience.' },
                { title: 'Cost Reduction', desc: 'Companies report 30–40% reductions in cost-per-hire when AI tools are used strategically for initial screening.' },
                { title: 'Better Structured Data', desc: 'AI tools can aggregate rich candidate data — skills, experience trajectories, and patterns — that manual review often misses.' },
              ]}
            />
            <BenefitRiskCard
              type="risk"
              delay={0.1}
              items={[
                { title: 'Over-Filtering', desc: '46% of employers report that their ATS filters out genuinely qualified candidates. Overly strict keyword matching is the most common cause.' },
                { title: 'Encoded Bias', desc: 'AI models trained on historical hiring data learn past discrimination — creating systems that are biased against protected classes.' },
                { title: 'Legal Exposure', desc: 'The EEOC has made clear that employers are responsible for AI tool outcomes. Discriminatory screening violates federal law regardless of intent.' },
                { title: 'Candidate Trust Erosion', desc: '67% of job seekers report distrust of AI-only screening, and many high-quality passive candidates refuse to engage with fully automated processes.' },
              ]}
            />
          </div>
        </div>

        {/* Bias explained */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-bold text-slate-900"
          >
            Understanding Hidden Bias in AI Hiring
          </motion.h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Proxy Discrimination',
                body: 'ATS systems that filter by zip code, college name, or GPA can systematically disadvantage lower-income and minority applicants — even when those factors are not conscious screening criteria.',
                icon: '🗺️',
              },
              {
                title: 'Training Data Bias',
                body: 'If your AI was trained on 10 years of your hiring decisions, and those decisions skewed toward a particular demographic, the model will replicate and amplify that pattern.',
                icon: '📊',
              },
              {
                title: 'AI Video Facial Analysis',
                body: 'Several academic studies have documented significant accuracy disparities in AI video screening tools — particularly for candidates with darker skin tones and non-native English accents.',
                icon: '🎭',
              },
            ].map(({ title, body, icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
              >
                <div className="mb-3 text-2xl">{icon}</div>
                <h4 className="mb-2 font-bold text-slate-900 text-sm">{title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legal & regulatory context */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50">
                <Scale size={24} className="text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">The Legal Landscape</h3>
                <p className="mt-1 text-sm text-slate-500">What regulators have already said about AI hiring tools</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  body: 'EEOC Guidance (2023): Employers are legally responsible for the discriminatory impact of any AI tool they use — even if a third-party vendor built it.',
                  tag: 'Federal',
                  color: 'bg-blue-50 text-blue-800 border-blue-200',
                },
                {
                  body: 'NYC Local Law 144: Employers in New York City must conduct annual bias audits of AI hiring tools and disclose results to job applicants.',
                  tag: 'New York City',
                  color: 'bg-purple-50 text-purple-800 border-purple-200',
                },
                {
                  body: 'Illinois AI Video Interview Act: Requires employers to disclose that AI is used to analyze interviews and obtain applicant consent first.',
                  tag: 'Illinois',
                  color: 'bg-indigo-50 text-indigo-800 border-indigo-200',
                },
                {
                  body: "EU AI Act (2024): High-risk AI systems used in employment decisions must be registered, documented, and subject to conformity assessments before deployment.",
                  tag: 'European Union',
                  color: 'bg-sky-50 text-sky-800 border-sky-200',
                },
                {
                  body: 'California SB 1047 area: Ongoing state-level regulation of high-stakes AI decisions in employment is active — legal teams should monitor regularly.',
                  tag: 'California',
                  color: 'bg-rose-50 text-rose-800 border-rose-200',
                },
                {
                  body: 'FTC Enforcement: The FTC has signaled it will pursue action against AI vendors whose tools produce discriminatory or deceptive results in hiring.',
                  tag: 'Federal Trade Commission',
                  color: 'bg-amber-50 text-amber-800 border-amber-200',
                },
              ].map(({ body, tag, color }, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`rounded-xl border p-4 ${color}`}
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest opacity-60">{tag}</p>
                  <p className="text-xs leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Human review checkpoints */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-bold text-slate-900"
          >
            Human Review Checkpoints — Where They Matter Most
          </motion.h3>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-indigo-300 to-violet-300 hidden sm:block" />
            <div className="space-y-6 sm:pl-16">
              {[
                { step: '01', title: 'After Initial ATS Filter', desc: 'Before sending the top-ranked pile to recruiters, a human should sample-review rejected resumes to catch false negatives. Even 5% sampling catches systematic errors.' },
                { step: '02', title: 'Before AI Video Screening Decisions', desc: 'AI interview scores should never be the sole basis for advancing or rejecting candidates. Human review of at least top and bottom quartile results is essential.' },
                { step: '03', title: 'At the Offer Stage', desc: 'Compensation decisions should be reviewed by HR leadership for pay equity before offers are extended — especially when AI tools have been involved throughout the process.' },
                { step: '04', title: 'Annual Process Audit', desc: 'At least annually, review full-cycle hiring data for demographic patterns. Compare ATS rejection rates, interview advancement, and offer acceptance by group.' },
              ].map(({ step, title, desc }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-start gap-4"
                >
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white shadow-md sm:absolute sm:-left-16">
                    {step}
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 flex-1 shadow-sm">
                    <p className="font-bold text-slate-900 text-sm">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive tools */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-bold text-slate-900"
          >
            Assess Your Hiring Process
          </motion.h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <div className="mb-3">
                <p className="font-semibold text-slate-800 text-sm">Action Checklist</p>
                <p className="text-xs text-slate-500">Check each practice your organization follows to track your fairness points.</p>
              </div>
              <EmployerChecklist />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="mb-3">
                <p className="font-semibold text-slate-800 text-sm">Fairness Scorecard</p>
                <p className="text-xs text-slate-500">Answer six key questions to get a structured fairness assessment.</p>
              </div>
              <EmployerFairnessScorecard />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
