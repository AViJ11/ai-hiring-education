'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Zap, Shield, TrendingUp } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'
import RoleSelector from '@/components/interactive/RoleSelector'
import { heroStats } from '@/data/stats'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-hero-pattern overflow-hidden flex flex-col">
      {/* Background orbs */}
      <div className="orb -top-32 -left-32 h-96 w-96 bg-indigo-300/20 animate-float-slow" />
      <div className="orb -bottom-32 -right-32 h-80 w-80 bg-violet-300/20 animate-float-delayed" />
      <div className="orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-cyan-300/10 animate-pulse-slow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col flex-1 justify-center pt-28 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur-sm">
            <Zap size={12} className="text-indigo-500" />
            Powered by public research and regulatory guidance
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08]">
            AI Is Reshaping Hiring.
            <br />
            <span className="text-gradient">Here&rsquo;s What You Need</span>
            <br />
            <span className="text-gradient">to Know.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto max-w-2xl text-center text-lg text-slate-600 mb-14 leading-relaxed"
        >
          From ATS filters that reject 72% of resumes before a human sees them, to AI interviews and $14 billion in hiring scams —
          understand the system, protect your opportunities.
        </motion.p>

        {/* Role Selector */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-20"
        >
          <RoleSelector />
        </motion.div>

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={0.45 + i * 0.08} />
          ))}
        </div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: Shield, label: 'Scam detection quiz' },
            { icon: TrendingUp, label: 'Live skill trend charts' },
            { icon: Zap, label: 'ATS interactive walkthrough' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-medium text-slate-600 backdrop-blur-sm">
              <Icon size={12} className="text-indigo-500" /> {label}
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          onClick={() => scrollTo('students')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mx-auto mt-14 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors group"
          aria-label="Scroll to content"
        >
          <span className="text-xs font-medium">Explore below</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm group-hover:border-indigo-300 transition-colors"
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
