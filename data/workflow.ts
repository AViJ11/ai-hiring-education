export interface WorkflowStage {
  id: string
  step: number
  title: string
  shortTitle: string
  icon: string
  description: string
  details: string[]
  tip: string
  color: string
  bgColor: string
}

export const atsWorkflowStages: WorkflowStage[] = [
  {
    id: 'post',
    step: 1,
    title: 'Job Posted',
    shortTitle: 'Posted',
    icon: 'FileText',
    description: 'Employer writes a job description with required skills, qualifications, and keywords.',
    details: [
      'Keywords embedded in the posting become ATS filter criteria',
      'Vague descriptions lead to over-filtering',
      'Well-written postings attract better-matched candidates',
    ],
    tip: 'Pro tip: Read the job description carefully — it is the literal scoring rubric for your application.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 'submit',
    step: 2,
    title: 'Resume Submitted',
    shortTitle: 'Submitted',
    icon: 'Upload',
    description: 'Applicant submits resume through an online portal. ATS immediately begins parsing the file.',
    details: [
      'ATS parses text, extracting name, contact info, education, and experience',
      'Formatting issues (tables, columns, images) can corrupt parsing',
      'PDF or DOCX are the safest formats — avoid infographic-style resumes',
    ],
    tip: 'Pro tip: Use a clean, single-column resume format. ATS cannot read graphics or text inside images.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
  },
  {
    id: 'scan',
    step: 3,
    title: 'ATS Keyword Scan',
    shortTitle: 'Scanned',
    icon: 'Search',
    description: 'The system scans your resume for keywords that match the job description.',
    details: [
      'Exact and near-exact keyword matches boost your score',
      'Missing key terms = automatic rejection in strict systems',
      'Synonyms may or may not be recognized depending on the ATS',
    ],
    tip: 'Pro tip: Mirror the exact language from the job description — if they say "project management," use that phrase, not "overseeing projects."',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'rank',
    step: 4,
    title: 'Scoring & Ranking',
    shortTitle: 'Ranked',
    icon: 'BarChart2',
    description: 'Resumes are assigned a match score. Many systems only pass the top 10–15% to human review.',
    details: [
      'Score is based on keyword density, experience match, and education requirements',
      'Some systems use AI/ML to predict "fit" — with known bias risks',
      'Ranking thresholds vary — some employers only see top 20, others top 100',
    ],
    tip: 'Pro tip: Tailor each resume to each job. Generic resumes rarely rank high enough to pass.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'review',
    step: 5,
    title: 'Human Review',
    shortTitle: 'Reviewed',
    icon: 'Eye',
    description: 'A recruiter reviews the top-ranked resumes — often for 6–10 seconds per document.',
    details: [
      'Only a fraction of applicants reach this stage',
      'Recruiters scan for name, current title, education, and key achievements',
      'First impression in seconds — structure and readability matter enormously',
    ],
    tip: 'Pro tip: Put your most impressive credential or achievement near the top of your resume.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'interview',
    step: 6,
    title: 'Interview / AI Screen',
    shortTitle: 'Interview',
    icon: 'Brain',
    description: 'Shortlisted candidates face interviews — increasingly AI-powered video or voice screenings.',
    details: [
      'AI video interviews analyze tone, word choice, and facial expression',
      'These tools have documented accuracy and bias concerns',
      'Asynchronous video interviews give no chance to ask questions',
    ],
    tip: 'Pro tip: Practice speaking clearly and looking directly at the camera. Structure answers using the STAR method.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
]
