'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import WorkerSentimentChart from '@/components/charts/WorkerSentimentChart'
import SkillTrendChart from '@/components/charts/SkillTrendChart'
import HiringAdoptionChart from '@/components/charts/HiringAdoptionChart'
import StakeholderImpactCards from '@/components/ui/StakeholderImpactCards'
import { jobShiftData } from '@/data/charts'
import { cn } from '@/lib/utils'

export default function TrendsSection() {
  return (
    <section id="trends" className="bg-slate-50">
      <SectionWrapper
        id="trends-inner"
        tag="Market Trends"
        tagColor="bg-cyan-50 text-cyan-700"
        title="AI and the Changing Job Market"
        subtitle="The impact of AI on hiring and employment extends well beyond any one company or candidate. Here's what the data shows."
      >

        {/* Charts grid */}
        <div className="mb-20 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <WorkerSentimentChart />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <HiringAdoptionChart />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2"
          >
            <SkillTrendChart />
          </motion.div>
        </div>

        {/* Job shift table */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-bold text-slate-900"
          >
            Job Displacement vs. Creation by Sector
          </motion.h3>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-slate-100 bg-slate-50">
                  <tr>
                    {['Sector', 'Estimated Job Loss', 'Estimated New Roles', 'Net Impact'].map((h) => (
                      <th key={h} className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {jobShiftData.map((row, i) => (
                    <motion.tr
                      key={row.sector}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-5 py-4 text-sm font-medium text-slate-800">{row.sector}</td>
                      <td className="px-5 py-4 text-sm text-rose-600 font-semibold">{row.displaced}%</td>
                      <td className="px-5 py-4 text-sm text-emerald-600 font-semibold">+{row.created}%</td>
                      <td className="px-5 py-4">
                        <span className={cn(
                          'inline-flex rounded-full px-2.5 py-1 text-xs font-bold',
                          row.net > 0
                            ? 'bg-emerald-100 text-emerald-700'
                            : row.net > -10
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-rose-100 text-rose-700'
                        )}>
                          {row.net > 0 ? '+' : ''}{row.net}%
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-slate-100 px-5 py-3 text-center text-[10px] text-slate-400">
              Source: WEF Future of Jobs Report 2025, Goldman Sachs 2023 research — illustrative model, not precise employer forecasts
            </p>
          </div>
        </div>

        {/* Key insight cards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-bold text-slate-900"
          >
            Why This Is Not Just a Student Problem
          </motion.h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🏭',
                title: 'Experienced Workers Are Also Affected',
                body: 'Mid-career professionals applying internally or externally face the same ATS systems. Tenure and soft skills often don\'t translate well into keyword-matching algorithms.',
              },
              {
                icon: '🌍',
                title: 'The Problem Is Global',
                body: 'AI hiring tools developed primarily on English-language, Western-educated datasets are deployed globally, creating systemic disadvantages for international applicants.',
              },
              {
                icon: '⚡',
                title: 'The Speed of Change Is the Problem',
                body: 'AI adoption in hiring outpaced training, regulation, and public awareness. Most job seekers don\'t know how ATS works. Most employers haven\'t audited their tools.',
              },
              {
                icon: '🔬',
                title: 'Skills Are Shifting Faster Than Curricula',
                body: 'AI and ML skill demand grew over 100% from 2020 to 2025. Most university programs are still 3–5 years behind what employers actively screen for.',
              },
              {
                icon: '📱',
                title: 'Social Media Scams Are Growing',
                body: 'Fake job postings on LinkedIn, Instagram, and TikTok target younger job seekers specifically. AI generates convincing profiles, job descriptions, and even fake "interview" conversations.',
              },
              {
                icon: '🤝',
                title: 'Networking Still Bypasses AI',
                body: 'A referral from an internal employee typically routes around ATS screening entirely. Human relationships remain the most effective job-search strategy — AI has not changed this.',
              },
            ].map(({ icon, title, body }, i) => (
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

        {/* Stakeholder impact */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-bold text-slate-900"
          >
            Who Is Affected — and How
          </motion.h3>
          <StakeholderImpactCards />
        </div>
      </SectionWrapper>
    </section>
  )
}
