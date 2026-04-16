'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ScrollFloat from '@/components/ui/ScrollFloat'
import { sources } from '@/data/mockData'

const typeColor: Record<string, string> = {
  Research: 'bg-primary/10 text-primary',
  Academic: 'bg-secondary/10 text-secondary',
  Journalism: 'bg-accent/10 text-accent',
  Policy: 'bg-destructive/10 text-destructive',
  Industry: 'bg-primary/10 text-primary',
}

export default function SourcesSection() {
  return (
    <section id="sources" className="py-20 gradient-mesh">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Evidence Base</p>
            <ScrollFloat containerClassName="flex justify-center" textClassName="text-foreground font-bold">
              Sources &amp; Research
            </ScrollFloat>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Key studies and reports that inform our understanding of AI in hiring.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sources.map((src, i) => (
            <ScrollReveal key={src.title} delay={i * 0.05}>
              <motion.a
                href={src.url}
                whileHover={{ y: -4 }}
                className="glass-card p-5 rounded-2xl block h-full hover:border-primary/30 transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${typeColor[src.type] ?? 'bg-muted text-muted-foreground'}`}>
                    {src.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{src.year}</span>
                </div>
                <BookOpen className="text-muted-foreground mb-2" size={18} />
                <h4 className="font-semibold text-foreground text-sm mb-1">{src.title}</h4>
                <p className="text-xs text-muted-foreground mb-3">{src.subtitle}</p>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
