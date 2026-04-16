export interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
  color: 'indigo' | 'violet' | 'cyan' | 'emerald' | 'amber'
}

export const heroStats: StatItem[] = [
  {
    value: 75,
    suffix: '%',
    label: 'Fortune 500s Use ATS',
    description: 'Three-quarters of large companies filter resumes automatically before any human sees them.',
    color: 'indigo',
  },
  {
    value: 250,
    suffix: '+',
    label: 'Applications Per Job',
    description: 'Corporate job postings now attract over 250 applicants on average — AI filters the crowd.',
    color: 'violet',
  },
  {
    value: 72,
    suffix: '%',
    label: 'Resumes Rejected by ATS',
    description: 'Nearly three in four resumes are discarded by algorithms before a recruiter reviews them.',
    color: 'cyan',
  },
  {
    value: 14,
    suffix: 'B',
    label: 'Lost to Hiring Scams (USD)',
    description: 'Job-seeker fraud cost individuals and companies over $14 billion globally in recent years.',
    color: 'amber',
  },
]

export const studentStats: StatItem[] = [
  { value: 98, suffix: '%', label: 'of top companies use ATS', description: '', color: 'indigo' },
  { value: 6,  suffix: 's',  label: 'average ATS scan time', description: '', color: 'violet' },
  { value: 43, suffix: '%', label: 'lose jobs to formatting errors', description: '', color: 'cyan' },
  { value: 60, suffix: '%', label: 'of scam jobs look legitimate', description: '', color: 'amber' },
]

export const employerStats: StatItem[] = [
  { value: 86, suffix: '%', label: 'say AI improved speed', description: '', color: 'emerald' },
  { value: 46, suffix: '%', label: 'report qualified candidates filtered out', description: '', color: 'amber' },
  { value: 32, suffix: '%', label: 'reduction in cost-per-hire with AI', description: '', color: 'indigo' },
  { value: 67, suffix: '%', label: 'of candidates distrust AI screening', description: '', color: 'violet' },
]
