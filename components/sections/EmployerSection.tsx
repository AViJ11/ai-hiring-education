'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles, Zap, BarChart3, Video, Bot, Mail, FileText,
  Users, Phone, Building, ClipboardCheck, TrendingUp, TrendingDown, Minus, ChevronDown,
} from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ScrollFloat from '@/components/ui/ScrollFloat'
import BorderGlow from '@/components/ui/BorderGlow'
import GlassSurface from '@/components/ui/GlassSurface'
import { beforeAI, afterAI, efficientHiring, fairHiring, fairnessChecklist } from '@/data/mockData'

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Zap, BarChart3, Video, Bot, Mail, FileText,
  Users, Phone, Building, ClipboardCheck,
}

function TrendIcon({ trend }: { trend: string }) {
  if (trend === 'up') return <TrendingUp size={14} className="text-accent" />
  if (trend === 'down') return <TrendingDown size={14} className="text-destructive" />
  return <Minus size={14} className="text-muted-foreground" />
}

// ─── Hiring Workflow Toggle ──────────────────────────────────
function HiringWorkflow() {
  const [showAI, setShowAI] = useState(false)
  const data = showAI ? afterAI : beforeAI

  return (
    <div className="p-9">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-3xl font-semibold text-foreground">Hiring Workflow</h3>
        <div className="flex items-center gap-2 text-sm">
          <span className={!showAI ? 'text-foreground' : 'text-muted-foreground'}>Traditional</span>
          <Switch checked={showAI} onCheckedChange={setShowAI} />
          <span className={showAI ? 'text-primary' : 'text-muted-foreground'}>AI-Powered</span>
        </div>
      </div>
      {showAI && (
        <p className="text-xs text-muted-foreground mb-4 border border-amber-500/20 bg-amber-500/5 rounded-lg px-3 py-2">
          Speed gains are real — but AI-powered workflows require human checkpoints to avoid over-filtering qualified candidates.
        </p>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={showAI ? 'ai' : 'trad'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-3"
        >
          {data.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-3 rounded-xl bg-background/50 border border-border/20"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  showAI ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                }`}>
                  {Icon && <Icon size={18} />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{item.step}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  showAI ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                }`}>
                  {item.time}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Fairness Metrics Toggle ─────────────────────────────────
function FairnessToggle() {
  const [fair, setFair] = useState(false)
  const data = fair ? fairHiring : efficientHiring

  return (
    <div className="p-9">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-3xl font-semibold text-foreground">Hiring Metrics</h3>
        <div className="flex items-center gap-2 text-sm">
          <span className={!fair ? 'text-destructive font-medium' : 'text-muted-foreground'}>Speed-Only</span>
          <Switch checked={fair} onCheckedChange={setFair} />
          <span className={fair ? 'text-accent font-medium' : 'text-muted-foreground'}>Human-First</span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        {fair
          ? 'Human oversight adds modest time but dramatically improves candidate quality and trust.'
          : 'Optimizing purely for speed filters out 46% of qualified candidates — a hidden cost.'}
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={data.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-3"
        >
          {data.metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/20"
            >
              <span className="text-sm text-foreground">{m.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">{m.value}</span>
                <TrendIcon trend={m.trend} />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Fairness Checklist ──────────────────────────────────────
function FairnessChecklistCard() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="p-9">
      <h3 className="text-3xl font-semibold text-foreground mb-2">Human-First AI Checklist for Recruiters</h3>
      <p className="text-muted-foreground text-sm mb-6">Use AI to organize and surface candidates — then let humans make the call.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {fairnessChecklist.map((cat) => (
          <motion.div
            key={cat.category}
            className="border border-border/30 rounded-xl p-4 cursor-pointer hover:border-primary/30 transition-colors"
            onClick={() => setOpen(open === cat.category ? null : cat.category)}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-foreground text-sm">{cat.category}</h4>
              <ChevronDown
                size={16}
                className={`text-muted-foreground transition-transform ${open === cat.category ? 'rotate-180' : ''}`}
              />
            </div>
            <AnimatePresence>
              {open === cat.category && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-3 space-y-2 overflow-hidden"
                >
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────
export default function EmployerSection() {
  return (
    <section id="employers" className="py-20 gradient-mesh">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <GlassSurface borderRadius={50}>
                <span className="text-secondary font-medium tracking-widest uppercase text-lg font-semibold whitespace-nowrap">
                  For Employers &amp; Recruiters
                </span>
              </GlassSurface>
            </div>
            <ScrollFloat containerClassName="flex justify-center" textClassName="text-foreground font-bold">
              Keep the Human in Hiring
            </ScrollFloat>
            <p className="text-muted-foreground text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              AI is a powerful organizational tool — but it should never be the decision-maker.
              The most effective and empathetic hiring processes use automation to handle volume,
              then hand the final judgment back to humans.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mb-8">
            <BorderGlow
              colors={['hsl(258, 90%, 66%)', 'hsl(187, 86%, 43%)', 'hsl(258, 90%, 66%)']}
              glowColor="258 90 66"
            >
              <div className="p-9">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Users size={18} className="text-secondary" />
                  </div>
                  <span className="text-secondary font-semibold uppercase tracking-widest text-xs">Heads Up</span>
                </div>
                <h3 className="text-3xl font-semibold text-foreground mb-4">
                  Over-automation is costing you great candidates
                </h3>
                <p className="text-foreground/80 text-base leading-relaxed">
                  Speed-optimized ATS configurations routinely filter out 46% of qualified applicants.
                  Candidates experience your hiring process as opaque and dehumanizing — and word spreads.
                  Over-reliance on AI video analysis (with documented demographic bias risks) compounds
                  the problem. This section shows how to use AI as an efficiency layer while keeping
                  human judgment at the center of every meaningful hiring decision.
                </p>
              </div>
            </BorderGlow>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <BorderGlow colors={['hsl(258, 90%, 66%)', 'hsl(187, 86%, 43%)', 'hsl(258, 90%, 66%)']} glowColor="258 90 66">
              <HiringWorkflow />
            </BorderGlow>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BorderGlow colors={['hsl(160, 84%, 39%)', 'hsl(258, 90%, 66%)', 'hsl(160, 84%, 39%)']} glowColor="160 84 39">
              <FairnessToggle />
            </BorderGlow>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="lg:col-span-2">
            <BorderGlow colors={['hsl(258, 90%, 66%)', 'hsl(160, 84%, 39%)', 'hsl(258, 90%, 66%)']} glowColor="258 90 66">
              <FairnessChecklistCard />
            </BorderGlow>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}




