'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'
import { Button } from '@/components/ui/button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ScrollFloat from '@/components/ui/ScrollFloat'
import BorderGlow from '@/components/ui/BorderGlow'
import { workerSentiment, skillChanges, aiAdoption, stakeholders } from '@/data/mockData'

const tooltipStyle = {
  contentStyle: {
    backgroundColor: '#1E293B',
    border: '1px solid #334155',
    borderRadius: '8px',
    color: '#F8FAFC',
    fontSize: '12px',
  },
  itemStyle: { color: '#94A3B8' },
}

function TrendCharts() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BorderGlow colors={['hsl(187,86%,43%)', 'hsl(160,84%,39%)', 'hsl(187,86%,43%)']} glowColor="187 86 43">
        <div className="p-6">
          <h4 className="text-foreground font-semibold text-lg mb-4">Worker Sentiment Over Time</h4>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={workerSentiment}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#94A3B8" fontSize={12} />
              <YAxis stroke="#94A3B8" fontSize={12} />
              <Tooltip {...tooltipStyle} />
              <Area type="monotone" dataKey="worry" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.15} name="Worry %" />
              <Area type="monotone" dataKey="optimism" stroke="#10B981" fill="#10B981" fillOpacity={0.15} name="Optimism %" />
              <Legend wrapperStyle={{ fontSize: '12px', color: '#94A3B8' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </BorderGlow>

      <BorderGlow colors={['hsl(258,90%,66%)', 'hsl(187,86%,43%)', 'hsl(258,90%,66%)']} glowColor="258 90 66">
        <div className="p-6">
          <h4 className="text-foreground font-semibold text-lg mb-4">Skill Demand Shift</h4>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={skillChanges} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94A3B8" fontSize={12} />
              <YAxis dataKey="skill" type="category" stroke="#94A3B8" fontSize={11} width={100} />
              <Tooltip {...tooltipStyle} />
              <Bar dataKey="y2022" fill="#8B5CF6" opacity={0.5} name="2022" radius={[0, 4, 4, 0]} />
              <Bar dataKey="y2025" fill="#06B6D4" name="2025" radius={[0, 4, 4, 0]} />
              <Legend wrapperStyle={{ fontSize: '12px', color: '#94A3B8' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </BorderGlow>

      <div className="md:col-span-2 lg:col-span-1">
        <BorderGlow colors={['hsl(160,84%,39%)', 'hsl(258,90%,66%)', 'hsl(160,84%,39%)']} glowColor="160 84 39">
          <div className="p-6">
            <h4 className="text-foreground font-semibold text-lg mb-4">AI Adoption in Hiring</h4>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={aiAdoption}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="year" stroke="#94A3B8" fontSize={12} />
                <YAxis stroke="#94A3B8" fontSize={12} />
                <Tooltip {...tooltipStyle} />
                <Line type="monotone" dataKey="rate" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6', r: 4 }} name="Adoption %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </BorderGlow>
      </div>
    </div>
  )
}

function StakeholderMatrix() {
  const [filter, setFilter] = useState('all')
  const categories = ['all', 'individual', 'professional', 'institution', 'corporate', 'government']
  const filtered = filter === 'all' ? stakeholders : stakeholders.filter((s) => s.category === filter)

  return (
    <div className="mt-8">
    <BorderGlow colors={['hsl(187,86%,43%)', 'hsl(258,90%,66%)', 'hsl(160,84%,39%)']} glowColor="187 86 43">
    <div className="p-6">
      <h4 className="text-foreground font-semibold text-lg mb-4">Stakeholder Impact Matrix</h4>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <Button key={cat} size="sm" variant={filter === cat ? 'default' : 'outline'} onClick={() => setFilter(cat)} className="text-xs capitalize">
            {cat}
          </Button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((s) => (
          <motion.div
            key={s.name}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 rounded-xl border border-border/30 bg-background/50 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-medium text-foreground text-base">{s.name}</h5>
              <span className={`text-xs px-2 py-0.5 rounded-full ${s.impact === 'High' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                {s.impact} Impact
              </span>
            </div>
            <p className="text-sm text-accent mb-1">↑ {s.opportunity}</p>
            <p className="text-sm text-destructive">↓ {s.risk}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </BorderGlow>
    </div>
  )
}

export default function TrendsSection() {
  return (
    <section id="trends" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Market Intelligence</p>
            <ScrollFloat containerClassName="flex justify-center" textClassName="text-foreground font-bold">
              Trends &amp; Insights
            </ScrollFloat>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Data-driven insights into how AI is reshaping the job market.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}><TrendCharts /></ScrollReveal>
        <ScrollReveal delay={0.2}><StakeholderMatrix /></ScrollReveal>
      </div>
    </section>
  )
}
