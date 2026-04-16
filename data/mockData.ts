// ─── Hero Stats ─────────────────────────────────────────────
export const heroStats = [
  { value: 99, suffix: '%', label: 'Fortune 500 use AI hiring' },
  { value: 72, suffix: '%', label: 'Resumes rejected by ATS' },
  { value: 14, suffix: 'B', label: 'Lost to job scams annually' },
  { value: 250, suffix: '+', label: 'Applications per job opening' },
]

// ─── ATS Pipeline ───────────────────────────────────────────
export const atsPipelineStages = [
  { id: 1, icon: 'FileText', title: 'Job Posted', description: 'Keywords in the job description become ATS filter criteria. Every word the employer writes is a scoring rubric for your resume.' },
  { id: 2, icon: 'Send', title: 'Resume Submitted', description: 'ATS immediately parses the file. Formatting issues like tables or columns corrupt parsing. Use clean PDF or DOCX.' },
  { id: 3, icon: 'Search', title: 'Keyword Scan', description: 'The system scans for keywords matching the job description. Missing key terms trigger automatic rejection in strict systems.' },
  { id: 4, icon: 'BarChart3', title: 'Scoring & Ranking', description: 'Resumes get a match score. Most systems only surface the top 10–15% to human review. Tailor every resume.' },
  { id: 5, icon: 'Eye', title: 'Human Review', description: 'A recruiter scans the top-ranked pile — often 6–10 seconds per resume. Structure and readability are critical.' },
  { id: 6, icon: 'Video', title: 'AI Video Screen', description: 'Shortlisted candidates face AI video interviews that analyze tone, word choice, and facial expressions with known bias risks.' },
]

// ─── Resume Comparison ──────────────────────────────────────
export const badResume = {
  title: 'Before (Unoptimized)',
  items: [
    'Responsible for managing various projects and team oversight',
    'Worked with different technologies on multiple platforms',
    'Good communication and team collaboration skills',
    'Helped improve processes and reduce inefficiencies',
    'Assisted leadership with strategic planning tasks',
  ],
}

export const goodResume = {
  title: 'After (ATS-Ready)',
  items: [
    'Led cross-functional team of 8, delivering 3 projects 15% under budget',
    'Implemented Python automation reducing report time by 4 hours/week',
    'Managed stakeholder communications across 12 departments using Jira',
    'Reduced onboarding time 30% by redesigning workflow documentation',
    'Contributed to Q3 strategic plan adopted by C-suite leadership',
  ],
}

// ─── Resume Checklist ───────────────────────────────────────
export const resumeChecklist = [
  { id: 'f1', label: 'Single-column layout — no tables or text boxes' },
  { id: 'f2', label: 'Saved as PDF or DOCX, not an image or infographic' },
  { id: 'f3', label: 'Standard section headers: Experience, Education, Skills' },
  { id: 'f4', label: 'No photos, logos, or graphics (ATS cannot read them)' },
  { id: 'c1', label: 'Complete contact info: email, phone, LinkedIn' },
  { id: 'c2', label: 'Bullet points with specific, quantified results' },
  { id: 'c3', label: 'Achievements use numbers: %, $, headcount' },
  { id: 'k1', label: 'Keywords mirror exact language from the job posting' },
  { id: 'k2', label: 'Required qualifications explicitly matched' },
  { id: 's1', label: 'Applied through official company website or verified platform' },
  { id: 's2', label: 'No SSN, bank details, or sensitive info on the resume' },
]

// ─── Scam Quiz ──────────────────────────────────────────────
export const scamQuizQuestions = [
  {
    question: 'You receive an email from "Amazon Recruiting" offering $95k remote. It asks you to complete a Google Form with your SSN and bank details before Monday.',
    options: [
      'Apply — Amazon is trusted and the salary is competitive',
      'Scam — legitimate employers never ask for SSN via Google Form',
      'Ask for more time before deciding',
    ],
    correct: 1,
    explanation: 'Legitimate employers never collect SSNs or bank info before onboarding through a Google Form. Real Amazon jobs are on jobs.amazon.com only.',
  },
  {
    question: 'A LinkedIn post offers $85/hr work-from-home "Brand Ambassador" role. It has 500+ likes, says "only 3 spots left," and the company has 2 employees and no website.',
    options: [
      'Apply fast — high demand signals a real opportunity',
      'Research first — 2 employees, no website, and artificial urgency are red flags',
      'Message the poster directly to get more info',
    ],
    correct: 1,
    explanation: 'Urgency tactics and inflated pay for vague roles are classic scam signals. A legitimate $85/hr employer would have a verifiable web presence.',
  },
  {
    question: 'A WhatsApp message from someone claiming to be a Google HR manager says your resume was "selected" for $120k + benefits. They ask you to buy $200 in training materials.',
    options: [
      'Buy the materials — it could be a worthwhile investment',
      'Scam — Google never recruits via WhatsApp and never charges for training',
      'Ask for their employee ID before deciding',
    ],
    correct: 1,
    explanation: 'Any employer charging you money to start a job is scamming you. Legitimate companies never recruit through personal WhatsApp with upfront fees.',
  },
  {
    question: 'You interview over Zoom with someone using a slightly pixelated video who offers you a job on the spot at double market rate, asking for your home address "for equipment shipping."',
    options: [
      'Provide the address — receiving equipment is normal for remote jobs',
      'This is suspicious — verify the company independently before sharing any info',
      'Accept verbally now and sort out details later',
    ],
    correct: 1,
    explanation: 'Instant offers at above-market salaries and immediate requests for personal details are major scam signals. Always verify a company independently.',
  },
  {
    question: 'A job posting on Indeed lists a remote data entry role at $45/hr with no experience required and "flexible hours." The application requires your full name, DOB, and home address upfront.',
    options: [
      'Apply — remote data entry is a real job category',
      'Skip it — collecting DOB and home address before any interview is abnormal',
      'Apply but leave the address field blank',
    ],
    correct: 1,
    explanation: 'Applications requesting your date of birth and home address before any interview or formal offer are harvesting personal data for identity theft.',
  },
]

// ─── Employer Workflow ──────────────────────────────────────
export const beforeAI = [
  { step: 'Post job manually across multiple boards', icon: 'FileText', time: '2 days' },
  { step: 'Manually screen 250+ resumes', icon: 'Users', time: '5 days' },
  { step: 'Phone screen top 20 candidates', icon: 'Phone', time: '3 days' },
  { step: 'Schedule and conduct interviews', icon: 'Building', time: '2 weeks' },
  { step: 'Manual reference checks', icon: 'ClipboardCheck', time: '3 days' },
  { step: 'Negotiate and extend offer', icon: 'Mail', time: '2 days' },
]

export const afterAI = [
  { step: 'AI writes & distributes job posting', icon: 'Bot', time: '1 hour' },
  { step: 'ATS screens & ranks candidates', icon: 'BarChart3', time: '2 hours' },
  { step: 'AI video pre-screening', icon: 'Video', time: '1 day' },
  { step: 'Interview top 5 candidates', icon: 'Building', time: '3 days' },
  { step: 'Automated reference verification', icon: 'ClipboardCheck', time: '1 day' },
  { step: 'AI-assisted offer generation', icon: 'Sparkles', time: '1 hour' },
]

// ─── Hiring Metrics ─────────────────────────────────────────
export const efficientHiring = {
  title: 'Speed-Optimized',
  metrics: [
    { label: 'Time to Hire', value: '8 days', trend: 'up' },
    { label: 'Cost Per Hire', value: '$1,200', trend: 'up' },
    { label: 'Candidate Diversity', value: '22%', trend: 'down' },
    { label: 'ATS Rejection Rate', value: '88%', trend: 'down' },
    { label: 'Qualified Candidate Loss', value: '46%', trend: 'down' },
    { label: 'Candidate Satisfaction', value: '3.1 / 5', trend: 'neutral' },
  ],
}

export const fairHiring = {
  title: 'Fair + Efficient',
  metrics: [
    { label: 'Time to Hire', value: '12 days', trend: 'neutral' },
    { label: 'Cost Per Hire', value: '$1,800', trend: 'neutral' },
    { label: 'Candidate Diversity', value: '41%', trend: 'up' },
    { label: 'ATS Rejection Rate', value: '64%', trend: 'up' },
    { label: 'Qualified Candidate Loss', value: '18%', trend: 'up' },
    { label: 'Candidate Satisfaction', value: '4.4 / 5', trend: 'up' },
  ],
}

// ─── Fairness Checklist ─────────────────────────────────────
export const fairnessChecklist = [
  {
    category: 'Job Description',
    items: [
      'Use gender-neutral language throughout',
      'List only truly essential requirements',
      'Avoid degree requirements when not necessary',
      'Include salary range for transparency',
    ],
  },
  {
    category: 'ATS Configuration',
    items: [
      'Audit keyword filters for proxy bias (zip code, school name)',
      'Include skills-based alternatives to degree requirements',
      'Sample-review rejected resumes quarterly',
      'Test the filter with diverse resume formats',
    ],
  },
  {
    category: 'AI Video Screening',
    items: [
      'Disclose AI use to all candidates before screening',
      'Obtain explicit informed consent',
      'Monitor approval rates by demographic group',
      'Provide human review option on request',
    ],
  },
  {
    category: 'Interview Process',
    items: [
      'Use structured, standardized questions for all candidates',
      'Train interviewers on bias recognition',
      'Diverse panel for final-round interviews',
      'Document scoring criteria before interviews begin',
    ],
  },
]

// ─── Chart Data ─────────────────────────────────────────────
export const workerSentiment = [
  { year: '2020', worry: 44, optimism: 18 },
  { year: '2021', worry: 52, optimism: 22 },
  { year: '2022', worry: 58, optimism: 25 },
  { year: '2023', worry: 62, optimism: 28 },
  { year: '2024', worry: 65, optimism: 32 },
  { year: '2025', worry: 62, optimism: 35 },
]

export const skillChanges = [
  { skill: 'AI & ML', y2022: 72, y2025: 100 },
  { skill: 'Data Science', y2022: 74, y2025: 92 },
  { skill: 'Coding / Dev', y2022: 75, y2025: 82 },
  { skill: 'Communication', y2022: 68, y2025: 90 },
  { skill: 'Project Mgmt', y2022: 55, y2025: 65 },
]

export const aiAdoption = [
  { year: '2018', rate: 12 },
  { year: '2019', rate: 22 },
  { year: '2020', rate: 35 },
  { year: '2021', rate: 52 },
  { year: '2022', rate: 67 },
  { year: '2023', rate: 78 },
  { year: '2024', rate: 88 },
  { year: '2025', rate: 95 },
]

// ─── Stakeholders ────────────────────────────────────────────
export const stakeholders = [
  { name: 'Recent Graduates', category: 'individual', impact: 'High', opportunity: 'AI literacy is a valued credential', risk: 'ATS filters reject unoptimized resumes' },
  { name: 'Experienced Workers', category: 'professional', impact: 'High', opportunity: 'Reskilling for AI-adjacent roles', risk: 'Routine tasks are automated first' },
  { name: 'HR Professionals', category: 'professional', impact: 'High', opportunity: 'AI frees time for strategic work', risk: 'Legal liability for biased AI outputs' },
  { name: 'Small Businesses', category: 'corporate', impact: 'Medium', opportunity: 'Affordable access to talent pipelines', risk: 'Expensive tools favor large enterprises' },
  { name: 'Fortune 500 Employers', category: 'corporate', impact: 'High', opportunity: '40% reduction in time-to-hire', risk: 'Candidate trust erosion at scale' },
  { name: 'Universities', category: 'institution', impact: 'Medium', opportunity: 'High demand for AI skills curriculum', risk: 'Graduates unprepared for AI hiring systems' },
  { name: 'Community Colleges', category: 'institution', impact: 'Medium', opportunity: 'Workforce upskilling programs', risk: 'Underfunding for AI education' },
  { name: 'Federal Regulators', category: 'government', impact: 'High', opportunity: 'EEOC / FTC enforcement framework', risk: 'Regulation lagging behind AI adoption speed' },
  { name: 'State Legislators', category: 'government', impact: 'Medium', opportunity: 'Pioneering laws like NYC Local Law 144', risk: 'Patchwork rules create compliance burden' },
]

// ─── Sources ─────────────────────────────────────────────────
export const sources = [
  { title: 'AI in Hiring: EEOC Guidance', subtitle: 'U.S. Equal Employment Opportunity Commission', url: '#', type: 'Policy', year: 2023 },
  { title: 'Hiring AI: Benefits & Risks', subtitle: 'MIT Sloan Management Review — ATS removes 72% of qualified candidates', url: '#', type: 'Research', year: 2022 },
  { title: 'Jobs of Tomorrow: LLMs', subtitle: 'Goldman Sachs — generative AI could affect 300M jobs globally', url: '#', type: 'Industry', year: 2023 },
  { title: 'Job Scam Fraud Report', subtitle: 'Federal Trade Commission — $14B in annual job scam losses', url: '#', type: 'Policy', year: 2024 },
  { title: 'Hiring Bias in Algorithmic Decisions', subtitle: 'Harvard Business Review — AI amplifies historical hiring biases', url: '#', type: 'Research', year: 2023 },
  { title: 'Future of Jobs Report 2025', subtitle: 'World Economic Forum — fastest-growing and declining skills', url: '#', type: 'Industry', year: 2025 },
  { title: 'ATS: What Job Seekers Must Know', subtitle: 'SHRM — 98% of Fortune 500 use ATS, 75% of candidates filtered', url: '#', type: 'Industry', year: 2023 },
  { title: 'AI and Discrimination in Decisions', subtitle: 'Government Accountability Office — AI lacks explainability in high-stakes uses', url: '#', type: 'Policy', year: 2023 },
  { title: 'Student Perceptions of AI Job Search', subtitle: 'NACE — 67% of graduates uncertain about AI screening impact', url: '#', type: 'Academic', year: 2024 },
  { title: 'AI-Powered Hiring: Proxy Discrimination', subtitle: 'Brookings Institution — zip codes and degree prestige create systemic bias', url: '#', type: 'Research', year: 2022 },
  { title: 'NYC Local Law 144 Audit Requirements', subtitle: 'NYC Commission on Human Rights — annual bias audit mandate', url: '#', type: 'Policy', year: 2023 },
  { title: 'Illinois AI Video Interview Act', subtitle: 'Illinois General Assembly — employer consent + disclosure requirements', url: '#', type: 'Policy', year: 2023 },
]
