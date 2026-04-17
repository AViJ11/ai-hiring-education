'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ScrollFloat from '@/components/ui/ScrollFloat'
import BorderGlow from '@/components/ui/BorderGlow'
import GlassSurface from '@/components/ui/GlassSurface'
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
          <div className="text-center mb-20">
            <div className="flex justify-center mb-4">
              <GlassSurface borderRadius={50}>
                <span className="text-primary font-medium tracking-widest uppercase text-lg font-semibold whitespace-nowrap">Evidence Base</span>
              </GlassSurface>
            </div>
            <ScrollFloat containerClassName="flex justify-center" textClassName="text-foreground font-bold">
              Sources &amp; Research
            </ScrollFloat>
            <p className="text-muted-foreground text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Key studies and reports that inform our understanding of AI in hiring.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sources.map((src, i) => {
            const glowCycle = [
              { colors: ['hsl(187,86%,43%)', 'hsl(258,90%,66%)', 'hsl(187,86%,43%)'], glow: '187 86 43' },
              { colors: ['hsl(258,90%,66%)', 'hsl(160,84%,39%)', 'hsl(258,90%,66%)'], glow: '258 90 66' },
              { colors: ['hsl(160,84%,39%)', 'hsl(187,86%,43%)', 'hsl(160,84%,39%)'], glow: '160 84 39' },
              { colors: ['hsl(187,86%,43%)', 'hsl(160,84%,39%)', 'hsl(258,90%,66%)'], glow: '187 86 43' },
            ]
            const gc = glowCycle[i % 4]
            return (
              <ScrollReveal key={src.title} delay={i * 0.05}>
                <BorderGlow colors={gc.colors} glowColor={gc.glow} className="h-full">
                  <motion.a
                    href={src.url}
                    whileHover={{ y: -2 }}
                    className="p-7 block h-full group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${typeColor[src.type] ?? 'bg-muted text-muted-foreground'}`}>
                        {src.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{src.year}</span>
                    </div>
                    <BookOpen className="text-muted-foreground mb-2" size={20} />
                    <h4 className="font-semibold text-foreground text-lg mb-2">{src.title}</h4>
                    <p className="text-base text-muted-foreground mb-4">{src.subtitle}</p>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                </BorderGlow>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}





