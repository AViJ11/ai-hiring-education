'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Search, BarChart3, Eye, Video, CheckCircle, Check, X, AlertTriangle, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ScrollFloat from '@/components/ui/ScrollFloat'
import BorderGlow from '@/components/ui/BorderGlow'
import GlassSurface from '@/components/ui/GlassSurface'
import { atsPipelineStages, badResume, goodResume, resumeChecklist, scamQuizQuestions } from '@/data/mockData'

const iconMap: Record<string, React.ElementType> = { Send, Search, BarChart3, Eye, Video, CheckCircle }

// ─── ATS Flowchart ───────────────────────────────────────────
function ATSFlowchart() {
  const [activeStage, setActiveStage] = useState<number | null>(null)

  return (
    <div className="p-9">
      <h3 className="text-3xl font-semibold text-foreground mb-6">ATS Pipeline — Click to Explore</h3>
      <div className="flex flex-col gap-3">
        {atsPipelineStages.map((stage) => {
          const Icon = iconMap[stage.icon]
          const isActive = activeStage === stage.id
          return (
            <motion.button
              key={stage.id}
              onClick={() => setActiveStage(isActive ? null : stage.id)}
              className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all border ${
                isActive
                  ? 'border-primary/50 bg-primary/10 glow-cyan'
                  : 'border-border/30 bg-card/40 hover:border-primary/30'
              }`}
              whileHover={{ x: 4 }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {Icon && <Icon size={20} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Step {stage.id}</span>
                  <ChevronRight size={14} className={`text-muted-foreground transition-transform ${isActive ? 'rotate-90' : ''}`} />
                </div>
                <p className="font-medium text-foreground">{stage.title}</p>
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-base text-muted-foreground mt-2 overflow-hidden"
                    >
                      {stage.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Resume Comparison ───────────────────────────────────────
function ResumeComparison() {
  const [showGood, setShowGood] = useState(false)
  const current = showGood ? goodResume : badResume

  return (
    <div className="p-9">
      <h3 className="text-3xl font-semibold text-foreground mb-4">Resume Comparison</h3>
      <div className="flex gap-2 mb-6">
        <Button
          variant={!showGood ? 'default' : 'outline'}
          size="sm"
          onClick={() => setShowGood(false)}
          className={!showGood ? 'bg-destructive text-white hover:bg-destructive/90' : ''}
        >
          Bad Resume
        </Button>
        <Button
          variant={showGood ? 'default' : 'outline'}
          size="sm"
          onClick={() => setShowGood(true)}
          className={showGood ? 'bg-accent text-white hover:bg-accent/90' : ''}
        >
          Optimized Resume
        </Button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.title}
          initial={{ opacity: 0, x: showGood ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: showGood ? -20 : 20 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          {current.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
              {showGood
                ? <Check className="text-accent mt-0.5 flex-shrink-0" size={16} />
                : <X className="text-destructive mt-0.5 flex-shrink-0" size={16} />}
              <span className="text-base text-foreground">{item}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Resume Checklist ────────────────────────────────────────
function ResumeChecklistCard() {
  const [checked, setChecked] = useState<string[]>([])
  const toggle = (id: string) =>
    setChecked((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id])
  const progress = Math.round((checked.length / resumeChecklist.length) * 100)

  return (
    <div className="p-9">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-3xl font-semibold text-foreground">Resume Checklist</h3>
        <span className="text-sm font-medium text-primary">{progress}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted mb-6 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="space-y-3">
        {resumeChecklist.map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-muted/30 transition-colors"
          >
            <Checkbox checked={checked.includes(item.id)} onCheckedChange={() => toggle(item.id)} />
            <span className={`text-base ${checked.includes(item.id) ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

// ─── Scam Quiz ───────────────────────────────────────────────
function ScamQuiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const q = scamQuizQuestions[currentQ]

  const handleSelect = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    if (i === q.correct) setScore((s) => s + 1)
  }

  const next = () => {
    if (currentQ < scamQuizQuestions.length - 1) {
      setCurrentQ((c) => c + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  return (
    <div className="p-9">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="text-primary" size={22} />
        <h3 className="text-3xl font-semibold text-foreground">Scam Detection Quiz</h3>
      </div>
      {done ? (
        <div className="text-center py-8">
          <p className="text-3xl font-bold text-gradient mb-2">{score}/{scamQuizQuestions.length}</p>
          <p className="text-muted-foreground">Great job staying alert!</p>
          <Button
            className="mt-4"
            variant="outline"
            onClick={() => { setCurrentQ(0); setSelected(null); setScore(0); setDone(false) }}
          >
            Retry
          </Button>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-3">
            Question {currentQ + 1} of {scamQuizQuestions.length}
          </p>
          <p className="text-foreground font-medium mb-5 text-base leading-relaxed">{q.question}</p>
          <div className="space-y-2 mb-4">
            {q.options.map((opt, i) => (
              <motion.button
                key={i}
                onClick={() => handleSelect(i)}
                whileHover={selected === null ? { x: 4 } : {}}
                className={`w-full text-left p-4 rounded-lg border text-base transition-all ${
                  selected === null
                    ? 'border-border/30 hover:border-primary/50 text-foreground'
                    : i === q.correct
                    ? 'border-accent bg-accent/10 text-foreground'
                    : i === selected
                    ? 'border-destructive bg-destructive/10 text-foreground'
                    : 'border-border/30 text-muted-foreground'
                }`}
              >
                {opt}
              </motion.button>
            ))}
          </div>
          {selected !== null && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-sm text-muted-foreground mb-3">{q.explanation}</p>
              <Button size="sm" onClick={next}>
                {currentQ < scamQuizQuestions.length - 1 ? 'Next' : 'See Results'}
              </Button>
            </motion.div>
          )}
        </>
      )}
    </div>
  )
}

// ─── ATS Definition Banner ───────────────────────────────────
function ATSDefinitionBanner() {
  return (
    <BorderGlow
      colors={['hsl(187, 86%, 43%)', 'hsl(160, 84%, 39%)', 'hsl(187, 86%, 43%)']}
      glowColor="187 86 43"
    >
      <div className="p-9">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Search size={18} className="text-primary" />
          </div>
          <span className="text-primary font-semibold uppercase tracking-widest text-xs">Key Concept</span>
        </div>
        <h3 className="text-3xl font-semibold text-foreground mb-4">
          What is an ATS (Applicant Tracking System)?
        </h3>
        <p className="text-foreground/80 text-base leading-relaxed max-w-3xl">
          An <span className="text-primary font-semibold">Applicant Tracking System (ATS)</span> is the
          software gatekeeper that companies use to scan, filter, and rank every resume submitted for a role —
          before a single human ever sees it. Think of it as an algorithmic bouncer: it decides who gets through
          the door based on keyword matches, formatting rules, and scoring logic. If your resume doesn&rsquo;t
          clear the ATS filter, it is automatically discarded — no feedback, no explanation, no second chance.
          This is why the modern job search can feel like shouting into a void.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {[
            { label: '75%+', detail: 'of large companies use ATS to filter applicants' },
            { label: '72%', detail: 'of qualified resumes rejected before human review' },
            { label: '6 sec', detail: 'avg time a recruiter spends on a resume that makes it through' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-4 border border-border/30 bg-background/50">
              <p className="text-primary font-bold text-2xl">{s.label}</p>
              <p className="text-foreground/70 text-sm mt-1">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </BorderGlow>
  )
}

// ─── Current Climate Banner ──────────────────────────────────
function ClimateBanner() {
  return (
    <BorderGlow
      colors={['hsl(0, 72%, 51%)', 'hsl(258, 90%, 66%)', 'hsl(0, 72%, 51%)']}
      glowColor="0 72 51"
    >
      <div className="p-9">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={18} className="text-destructive" />
          </div>
          <span className="text-destructive font-semibold uppercase tracking-widest text-xs">Current Reality</span>
        </div>
        <h3 className="text-3xl font-semibold text-foreground mb-4">
          The Job Market Right Now: It&rsquo;s Genuinely Rough
        </h3>
        <p className="text-foreground/80 text-base leading-relaxed">
          The frustration you feel is valid. Automated rejections with zero feedback, job postings that vanish
          after hundreds of applications, AI video interviews that judge your lighting and tone — this is the
          current reality. Scam postings now mimic legitimate listings closely enough to fool careful job seekers.
          The good news: once you understand how these systems work, you can navigate them strategically.
          This section gives you the tools to go from powerless to prepared.
        </p>
      </div>
    </BorderGlow>
  )
}

// ─── Section ─────────────────────────────────────────────────
export default function StudentSection() {
  return (
    <section id="students" className="py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <GlassSurface borderRadius={50}>
                <span className="text-primary font-medium tracking-widest uppercase text-lg font-semibold whitespace-nowrap">
                  For Students &amp; Job Seekers
                </span>
              </GlassSurface>
            </div>
            <ScrollFloat containerClassName="flex justify-center" textClassName="text-foreground font-bold">
              Navigate the AI Hiring Maze
            </ScrollFloat>
            <p className="text-muted-foreground text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              The system isn&rsquo;t fair — but it is learnable. Understand exactly how ATS filters and AI
              interviews work, then use that knowledge to get your resume in front of real humans.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mb-8">
            <ATSDefinitionBanner />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mb-8">
            <ClimateBanner />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <BorderGlow colors={['hsl(187, 86%, 43%)', 'hsl(160, 84%, 39%)', 'hsl(187, 86%, 43%)']} glowColor="187 86 43">
              <ATSFlowchart />
            </BorderGlow>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BorderGlow colors={['hsl(187, 86%, 43%)', 'hsl(258, 90%, 66%)', 'hsl(187, 86%, 43%)']} glowColor="187 86 43">
              <ResumeComparison />
            </BorderGlow>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <BorderGlow colors={['hsl(160, 84%, 39%)', 'hsl(187, 86%, 43%)', 'hsl(160, 84%, 39%)']} glowColor="160 84 39">
              <ResumeChecklistCard />
            </BorderGlow>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <BorderGlow colors={['hsl(258, 90%, 66%)', 'hsl(187, 86%, 43%)', 'hsl(258, 90%, 66%)']} glowColor="258 90 66">
              <ScamQuiz />
            </BorderGlow>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}





