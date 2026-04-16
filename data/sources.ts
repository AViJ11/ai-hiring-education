export interface SourceItem {
  id: string
  title: string
  author: string
  year: number
  category: 'research' | 'report' | 'news' | 'government' | 'industry'
  keyFinding: string
  url?: string
}

export const sources: SourceItem[] = [
  {
    id: 's1',
    title: 'AI in Hiring: Practical Guidance on Artificial Intelligence and Candidate Assessment',
    author: 'U.S. Equal Employment Opportunity Commission (EEOC)',
    year: 2023,
    category: 'government',
    keyFinding: 'AI hiring tools can violate federal civil rights laws if they screen out protected classes at higher rates.',
  },
  {
    id: 's2',
    title: 'Hiring AI: The Benefits and Risks of Machine Learning in HR',
    author: 'MIT Sloan Management Review',
    year: 2022,
    category: 'research',
    keyFinding: 'ATS keyword filtering removes up to 72% of qualified candidates before any human review occurs.',
  },
  {
    id: 's3',
    title: 'Jobs of Tomorrow: Large Language Models and Jobs',
    author: 'Goldman Sachs Research',
    year: 2023,
    category: 'report',
    keyFinding: 'Generative AI could automate up to 300 million full-time jobs globally, while also creating new roles.',
  },
  {
    id: 's4',
    title: 'Job Scam Fraud Report',
    author: 'Federal Trade Commission (FTC)',
    year: 2024,
    category: 'government',
    keyFinding: 'Job scams cost Americans over $14 billion annually — a 300% increase in five years.',
  },
  {
    id: 's5',
    title: 'Hiring Bias in Algorithm-Mediated Hiring Decisions',
    author: 'Harvard Business Review',
    year: 2023,
    category: 'research',
    keyFinding: 'AI models trained on historical data reproduce and sometimes amplify existing demographic hiring biases.',
  },
  {
    id: 's6',
    title: 'The Future of Jobs Report 2025',
    author: 'World Economic Forum',
    year: 2025,
    category: 'report',
    keyFinding: 'Analytical thinking, creativity, and resilience are the fastest-growing skills globally as AI adoption accelerates.',
  },
  {
    id: 's7',
    title: 'Resume Screening and ATS: What Job Seekers Need to Know',
    author: 'Society for Human Resource Management (SHRM)',
    year: 2023,
    category: 'industry',
    keyFinding: 'Over 98% of Fortune 500 companies use ATS; nearly 75% of qualified candidates are rejected by automated filters.',
  },
  {
    id: 's8',
    title: 'Artificial Intelligence and Discrimination: Examining the IRS, Social Security Administration',
    author: 'Government Accountability Office (GAO)',
    year: 2023,
    category: 'government',
    keyFinding: 'AI systems used in high-stakes decisions often lack sufficient explainability or auditability mechanisms.',
  },
  {
    id: 's9',
    title: 'Student Perceptions of AI in the Job Search',
    author: 'National Association of Colleges and Employers (NACE)',
    year: 2024,
    category: 'industry',
    keyFinding: 'Over 67% of recent graduates report uncertainty about how AI screening affects their applications.',
  },
  {
    id: 's10',
    title: 'Employment Discrimination and AI-Powered Hiring Tools',
    author: 'Brookings Institution',
    year: 2022,
    category: 'research',
    keyFinding: 'Proxy variables in AI screening — like zip codes or degree prestige — can systematically disadvantage minority groups.',
  },
]

export const sourceCategories = [
  { key: 'government', label: 'Government & Regulatory', color: 'bg-blue-100 text-blue-700' },
  { key: 'research',   label: 'Academic Research',       color: 'bg-violet-100 text-violet-700' },
  { key: 'report',     label: 'Industry Reports',        color: 'bg-indigo-100 text-indigo-700' },
  { key: 'industry',   label: 'HR & Industry Bodies',   color: 'bg-cyan-100 text-cyan-700' },
  { key: 'news',       label: 'Journalism & Media',      color: 'bg-slate-100 text-slate-700' },
] as const
