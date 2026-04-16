'use client'

import { Brain } from 'lucide-react'

export default function CTAFooter() {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Brain className="text-primary" size={18} />
          <span className="text-sm font-bold text-foreground">
            AI<span className="text-primary">Hire</span>Guide
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2026 AIHireGuide — An educational resource about AI in hiring. Built for awareness, not advice.
        </p>
      </div>
    </footer>
  )
}
