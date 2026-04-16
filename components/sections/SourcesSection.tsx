'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, BookOpen, BarChart2, Briefcase, FileText } from 'lucide-react'
import SectionWrapper from '@/components/layout/SectionWrapper'
import { sources, sourceCategories } from '@/data/sources'
import { cn } from '@/lib/utils'

const categoryIcons: Record<string, React.ElementType> = {
  government: Shield,
  research:   BookOpen,
  report:     BarChart2,
  industry:   Briefcase,
  news:       FileText,
}

export default function SourcesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered = activeCategory === 'all'
    ? sources
    : sources.filter((s) => s.category === activeCategory)

  return (
    <section id="sources" className="bg-white">
      <SectionWrapper
        id="sources-inner"
        tag="Evidence & Sources"
        tagColor="bg-slate-100 text-slate-600"
        title="Research-Backed and Referenced"
        subtitle="Every claim on this site is grounded in credible public research, government guidance, and industry data. Nothing is fabricated."
        centered
      >

        {/* Evidence summary cards */}
        <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '10+', label: 'Primary Sources', sub: 'Government, academic, and industry', color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { value: '5', label: 'Source Categories', sub: 'Regulatory, research, and journalism', color: 'text-violet-600', bg: 'bg-violet-50' },
            { value: '2023–25', label: 'Recency Window', sub: 'All sources are from recent years', color: 'text-cyan-600', bg: 'bg-cyan-50' },
            { value: '100%', label: 'Publicly Available', sub: 'No paywalled or proprietary data', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          ].map(({ value, label, sub, color, bg }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)] text-center"
            >
              <p className={cn('text-4xl font-extrabold', color)}>{value}</p>
              <p className="mt-1 text-sm font-bold text-slate-800">{label}</p>
              <p className="mt-1 text-xs text-slate-500">{sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={cn(
              'rounded-full border px-4 py-1.5 text-xs font-semibold transition-all',
              activeCategory === 'all'
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 text-slate-600 hover:border-slate-400'
            )}
          >
            All Sources ({sources.length})
          </button>
          {sourceCategories.map((cat) => {
            const count = sources.filter((s) => s.category === cat.key).length
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-xs font-semibold transition-all',
                  activeCategory === cat.key
                    ? cat.color.replace('bg-', 'bg-') + ' border-transparent'
                    : 'border-slate-200 text-slate-600 hover:border-slate-400'
                )}
              >
                {cat.label} ({count})
              </button>
            )
          })}
        </div>

        {/* Sources grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((source, i) => {
            const catInfo = sourceCategories.find((c) => c.key === source.category)
            const Icon = categoryIcons[source.category] || FileText

            return (
              <motion.div
                key={source.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-card)] flex flex-col"
              >
                {/* Category badge */}
                <div className="mb-3 flex items-center gap-2">
                  <div className={cn('flex h-7 w-7 items-center justify-center rounded-lg', catInfo?.color.split(' ')[0] || 'bg-slate-100')}>
                    <Icon size={14} className={catInfo?.color.split(' ')[1] || 'text-slate-600'} />
                  </div>
                  <span className={cn('rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider', catInfo?.color)}>
                    {catInfo?.label}
                  </span>
                  <span className="ml-auto text-[10px] text-slate-400">{source.year}</span>
                </div>

                {/* Title and author */}
                <h4 className="mb-1 text-sm font-bold leading-snug text-slate-900 flex-1">{source.title}</h4>
                <p className="mb-3 text-xs text-slate-500">{source.author}</p>

                {/* Key finding */}
                <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Key Finding</p>
                  <p className="text-xs leading-relaxed text-slate-700">{source.keyFinding}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
        >
          <p className="text-sm font-semibold text-slate-700 mb-2">A Note on Data and Accuracy</p>
          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-slate-500">
            Statistics and percentages on this site are drawn from publicly available research and industry surveys.
            Data represents aggregated estimates and should be interpreted as directional, not exact.
            Chart data is illustrative and clearly labeled as such. For primary sources, refer to the reports listed above.
            All sources cited are real organizations — findings are accurately represented to the best of our knowledge.
          </p>
        </motion.div>
      </SectionWrapper>
    </section>
  )
}
