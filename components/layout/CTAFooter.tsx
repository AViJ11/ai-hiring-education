'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, GraduationCap, Briefcase, Heart } from 'lucide-react'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function CTAFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Band */}
      <div className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-cyan-900/20" />
        <div className="orb absolute -left-20 top-0 h-64 w-64 bg-indigo-600/20 animate-float-slow" />
        <div className="orb absolute -right-20 bottom-0 h-48 w-48 bg-violet-600/20 animate-float-delayed" />

        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg">
              <Brain size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to navigate the{' '}
              <span className="text-gradient">AI hiring landscape</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Whether you are a student protecting your opportunities or an employer building a fairer process — the knowledge is here.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('students')}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold hover:bg-indigo-500 transition-colors"
              >
                <GraduationCap size={16} /> Student Guide <ArrowRight size={14} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('employers')}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-colors"
              >
                <Briefcase size={16} /> Employer Guide <ArrowRight size={14} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('sources')}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold hover:border-slate-600 hover:bg-slate-700 transition-colors"
              >
                View Sources
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600">
              <Brain size={14} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-300">AI in Hiring</span>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Built for education with <Heart size={11} className="text-rose-500" /> — content based on public research and regulatory guidance
          </p>

          <div className="flex gap-6">
            {['home', 'students', 'employers', 'trends', 'sources'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs capitalize text-slate-500 hover:text-slate-300 transition-colors"
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
