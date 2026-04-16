'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Building2 } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'
import GradientText from '@/components/ui/GradientText'
import BorderGlow from '@/components/ui/BorderGlow'
import { heroStats } from '@/data/stats'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, hsl(187, 86%, 43%, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, hsl(258, 90%, 66%, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 60% 80%, hsl(187, 86%, 43%, 0.05) 0%, transparent 50%)
        `,
      }}
    >
      {/* Floating orbs */}
      <div className="orb -top-32 -left-32 h-96 w-96 bg-primary/5 animate-float-slow" />
      <div className="orb -bottom-32 -right-32 h-80 w-80 bg-secondary/5 animate-float-delayed" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col flex-1 items-center justify-center w-full py-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Understanding the AI Hiring Revolution
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            The Algorithms
            <br />
            <GradientText
              colors={['#06B6D4', '#8B5CF6', '#10B981']}
              animationSpeed={6}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
            >
              Deciding Your Career
            </GradientText>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl text-center mb-14 leading-relaxed"
        >
          99% of Fortune 500 companies use AI in hiring. Learn how these systems work,
          where they fail, and how to navigate them — whether you&rsquo;re applying or recruiting.
        </motion.p>

        {/* CTA cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <button onClick={() => scrollTo('students')} className="group">
            <BorderGlow
              className="max-w-xs w-full mx-auto cursor-pointer"
              glowColor="187 86 43"
              colors={['hsl(187, 86%, 43%)', 'hsl(160, 84%, 39%)', 'hsl(187, 86%, 43%)']}
              animated
            >
              <div className="p-8 text-center">
                <GraduationCap className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-foreground font-semibold text-lg mb-2">Student / Job Seeker</h3>
                <p className="text-muted-foreground text-sm">Beat the bots, avoid scams, and land interviews</p>
              </div>
            </BorderGlow>
          </button>

          <button onClick={() => scrollTo('employers')} className="group">
            <BorderGlow
              className="max-w-xs w-full mx-auto cursor-pointer"
              glowColor="258 90 66"
              colors={['hsl(258, 90%, 66%)', 'hsl(187, 86%, 43%)', 'hsl(258, 90%, 66%)']}
              animated
            >
              <div className="p-8 text-center">
                <Building2 className="text-secondary mx-auto mb-4" size={40} />
                <h3 className="text-foreground font-semibold text-lg mb-2">Employer / Recruiter</h3>
                <p className="text-muted-foreground text-sm">Build fair, effective AI-powered hiring pipelines</p>
              </div>
            </BorderGlow>
          </button>
        </motion.div>

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl">
          {heroStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={0.5 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
