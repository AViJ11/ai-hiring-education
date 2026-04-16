export interface StakeholderCard {
  id: string
  group: string
  icon: string
  impactSummary: string
  challenges: string[]
  opportunities: string[]
  color: string
  gradient: string
}

export const stakeholderCards: StakeholderCard[] = [
  {
    id: 'students',
    group: 'Students & Recent Graduates',
    icon: 'GraduationCap',
    impactSummary: 'Entering a market where ATS gatekeeping, AI interviews, and scam postings are the norm — without being taught how any of it works.',
    challenges: [
      'ATS filters reject resumes before humans see them',
      'AI video interviews judge tone and affect, not just qualifications',
      'Scam job postings target active job seekers',
      'Keyword-optimization skills are not taught in most schools',
    ],
    opportunities: [
      'AI literacy is itself a valued hiring credential',
      'Portfolio and project-based applications can bypass ATS',
      'Networking remains a direct path around algorithmic filtering',
      'Human-centric skills are increasingly valuable as AI automates tasks',
    ],
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    id: 'employers',
    group: 'Employers & Recruiters',
    icon: 'Briefcase',
    impactSummary: 'AI tools speed hiring dramatically — but over-reliance creates legal, ethical, and quality risks that undermine the very efficiency they promise.',
    challenges: [
      'ATS over-filtering removes genuinely qualified candidates',
      'AI models can encode historical hiring bias into future decisions',
      'Candidate trust erodes when AI replaces human contact',
      'Legal exposure from non-transparent algorithmic screening (EEOC guidance)',
    ],
    opportunities: [
      'Structured AI-assisted hiring reduces time-to-hire by up to 40%',
      'Fair AI tools can increase workforce diversity when well-calibrated',
      'Transparent communication builds employer brand trust',
      'Human + AI hybrid workflows get the best of both',
    ],
    color: 'text-emerald-600',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'workers',
    group: 'Existing Workers',
    icon: 'Users',
    impactSummary: 'Routine tasks in administration, data processing, and customer service face the highest automation risk — while new AI-adjacent roles emerge.',
    challenges: [
      'Role displacement in data entry, scheduling, and routine communication',
      'Upskilling pressure with limited employer-funded training',
      'Internal mobility blocked by ATS-style filtering even for existing staff',
      'Mental health impact of job insecurity and algorithmic management',
    ],
    opportunities: [
      'Workers who learn to collaborate with AI tools increase their value',
      'Demand for human judgment, ethics, and creativity is rising',
      'Lifelong learning programs and certifications are expanding',
      'AI productivity tools allow smaller teams to do more',
    ],
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'policymakers',
    group: 'Policymakers & Regulators',
    icon: 'Shield',
    impactSummary: 'AI hiring sits at the intersection of labor law, civil rights, and data privacy — creating urgent regulatory needs as adoption outpaces oversight.',
    challenges: [
      'Existing labor law was not written for algorithmic decision-making',
      'AI system opacity makes discrimination claims hard to prove',
      'Jurisdictional gaps between federal, state, and local rules',
      'Speed of AI development outpaces regulatory response time',
    ],
    opportunities: [
      'EEOC guidance on AI hiring tools provides initial framework',
      'NYC Local Law 144 is a model for algorithmic audit requirements',
      'EU AI Act establishes strong protections for workers in high-risk AI systems',
      'Transparency mandates can improve AI hiring accountability',
    ],
    color: 'text-violet-600',
    gradient: 'from-violet-500 to-purple-600',
  },
]
