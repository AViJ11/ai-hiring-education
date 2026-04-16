'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, ArrowRight, CheckCircle } from 'lucide-react'
import { useRole } from '@/context/RoleContext'
import { cn } from '@/lib/utils'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

interface RoleCardProps {
  role: 'student' | 'employer'
  title: string
  subtitle: string
  icon: React.ElementType
  gradient: string
  highlights: string[]
  targetId: string
}

function RoleCard({ role, title, subtitle, icon: Icon, gradient, highlights, targetId }: RoleCardProps) {
  const { role: activeRole, setRole } = useRole()
  const isSelected = activeRole === role

  const handleClick = () => {
    setRole(role)
    setTimeout(() => scrollTo(targetId), 100)
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border-2 p-7 text-left transition-all duration-300',
        isSelected
          ? 'border-transparent shadow-[var(--shadow-card-hover)]'
          : 'border-slate-200 bg-white shadow-[var(--shadow-card)] hover:border-slate-300'
      )}
    >
      {/* Gradient background when selected */}
      {isSelected && (
        <motion.div
          layoutId={`role-bg-${role}`}
          className={cn('absolute inset-0 bg-gradient-to-br opacity-5', gradient)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
        />
      )}
      {isSelected && (
        <div className={cn('absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br pointer-events-none', gradient)}
          style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '2px' }}
        />
      )}

      <div className="relative">
        {/* Icon */}
        <div className={cn('mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg', gradient)}>
          <Icon size={26} />
        </div>

        {/* Text */}
        <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>

        {/* Highlights */}
        <ul className="mt-5 space-y-2.5">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
              <CheckCircle
                size={15}
                className={cn(
                  'flex-shrink-0',
                  role === 'student' ? 'text-indigo-500' : 'text-emerald-500'
                )}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={cn(
          'mt-7 flex items-center gap-2 text-sm font-semibold transition-colors',
          role === 'student' ? 'text-indigo-600' : 'text-emerald-600'
        )}>
          {isSelected ? 'You\'re on the right path' : 'See my guide'}
          <motion.div
            animate={isSelected ? { x: [0, 4, 0] } : { x: 0 }}
            transition={{ repeat: isSelected ? Infinity : 0, duration: 1.5 }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </div>
      </div>
    </motion.button>
  )
}

export default function RoleSelector() {
  return (
    <div className="mx-auto max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Who are you?
        </p>
        <p className="mt-2 text-slate-600">Choose your path to get the most relevant information.</p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RoleCard
            role="student"
            title="Student / Job Seeker"
            subtitle="Navigate the system and protect your opportunities"
            icon={GraduationCap}
            gradient="from-indigo-500 to-violet-600"
            targetId="students"
            highlights={[
              'How ATS screening works',
              'Resume optimization without lying',
              'Spotting and avoiding fake jobs',
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <RoleCard
            role="employer"
            title="Employer / Recruiter"
            subtitle="Build faster, fairer, and legally safer hiring processes"
            icon={Briefcase}
            gradient="from-emerald-500 to-teal-600"
            targetId="employers"
            highlights={[
              'Avoiding bias and over-filtering',
              'Fairness scorecard and audit tools',
              'Candidate trust and transparency',
            ]}
          />
        </motion.div>
      </div>
    </div>
  )
}
