export interface ChecklistItem {
  id: string
  text: string
  category: 'format' | 'content' | 'keywords' | 'safety'
  importance: 'high' | 'medium' | 'low'
}

export const resumeChecklist: ChecklistItem[] = [
  // Format
  { id: 'f1', text: 'Use a clean, single-column layout (no tables or text boxes)', category: 'format', importance: 'high' },
  { id: 'f2', text: 'Save as PDF or DOCX — never as an image or infographic', category: 'format', importance: 'high' },
  { id: 'f3', text: 'Use standard section headers: Experience, Education, Skills', category: 'format', importance: 'high' },
  { id: 'f4', text: 'Font is readable (10–12pt body, 14–16pt headings)', category: 'format', importance: 'medium' },
  { id: 'f5', text: 'No photos, logos, or graphics (ATS cannot read them)', category: 'format', importance: 'high' },
  { id: 'f6', text: 'Margins are consistent (0.5–1 inch on all sides)', category: 'format', importance: 'low' },

  // Content
  { id: 'c1', text: 'Contact info is complete and accurate (email, phone, LinkedIn)', category: 'content', importance: 'high' },
  { id: 'c2', text: 'Work experience uses bullet points with specific results', category: 'content', importance: 'high' },
  { id: 'c3', text: 'Each bullet starts with a strong action verb', category: 'content', importance: 'medium' },
  { id: 'c4', text: 'Quantify achievements where possible (%, $, numbers)', category: 'content', importance: 'high' },
  { id: 'c5', text: 'Education section includes degree, institution, and graduation year', category: 'content', importance: 'medium' },
  { id: 'c6', text: 'Skills section lists technical tools and relevant hard skills', category: 'content', importance: 'high' },

  // Keywords
  { id: 'k1', text: 'Mirror exact keywords from the job description', category: 'keywords', importance: 'high' },
  { id: 'k2', text: 'Include both spelled-out and abbreviated versions (e.g., AI and Artificial Intelligence)', category: 'keywords', importance: 'medium' },
  { id: 'k3', text: 'Match the required qualifications listed in the posting', category: 'keywords', importance: 'high' },
  { id: 'k4', text: 'Avoid keyword stuffing — integrate naturally into context', category: 'keywords', importance: 'medium' },

  // Safety
  { id: 's1', text: 'Research the company before sending — confirm it is real', category: 'safety', importance: 'high' },
  { id: 's2', text: 'Never include your full Social Security Number on a resume', category: 'safety', importance: 'high' },
  { id: 's3', text: 'Apply through official company websites or verified platforms', category: 'safety', importance: 'high' },
  { id: 's4', text: 'If salary offered is unusually high, treat it as a red flag', category: 'safety', importance: 'medium' },
]

export interface EmployerChecklistItem {
  id: string
  text: string
  category: 'job-description' | 'screening' | 'fairness' | 'communication' | 'verification'
  impact: 'high' | 'medium' | 'low'
  fairnessPoints: number
}

export const employerChecklist: EmployerChecklistItem[] = [
  // Job description
  { id: 'e1', text: 'Remove degree requirements where a skill test can substitute', category: 'job-description', impact: 'high', fairnessPoints: 10 },
  { id: 'e2', text: 'List only truly required qualifications — not aspirational ones', category: 'job-description', impact: 'high', fairnessPoints: 8 },
  { id: 'e3', text: 'Use inclusive, gender-neutral language throughout the posting', category: 'job-description', impact: 'medium', fairnessPoints: 6 },
  { id: 'e4', text: 'Include salary range or compensation transparency', category: 'job-description', impact: 'medium', fairnessPoints: 5 },

  // AI screening
  { id: 'e5', text: 'Audit ATS rejection reasons for demographic patterns', category: 'screening', impact: 'high', fairnessPoints: 12 },
  { id: 'e6', text: 'Set ATS keyword thresholds conservatively to reduce over-filtering', category: 'screening', impact: 'high', fairnessPoints: 10 },
  { id: 'e7', text: 'Offer an alternative application path for ATS-filtered candidates', category: 'screening', impact: 'medium', fairnessPoints: 7 },
  { id: 'e8', text: 'Disclose to candidates that AI screening is used', category: 'screening', impact: 'medium', fairnessPoints: 6 },

  // Fairness
  { id: 'e9',  text: 'Conduct structured interviews with standardized questions', category: 'fairness', impact: 'high', fairnessPoints: 10 },
  { id: 'e10', text: 'Use diverse hiring panels to reduce individual bias', category: 'fairness', impact: 'high', fairnessPoints: 9 },
  { id: 'e11', text: 'Implement blind resume review for at least the first screen', category: 'fairness', impact: 'medium', fairnessPoints: 8 },
  { id: 'e12', text: 'Track and report demographic data on hiring outcomes annually', category: 'fairness', impact: 'medium', fairnessPoints: 7 },

  // Communication
  { id: 'e13', text: 'Send status updates to all applicants within 2 weeks', category: 'communication', impact: 'medium', fairnessPoints: 4 },
  { id: 'e14', text: 'Provide rejection notices rather than ghosting applicants', category: 'communication', impact: 'medium', fairnessPoints: 5 },
  { id: 'e15', text: 'Explain why AI screening was used if a candidate asks', category: 'communication', impact: 'low', fairnessPoints: 3 },

  // Verification
  { id: 'e16', text: 'Verify candidates are real people before sharing sensitive info', category: 'verification', impact: 'high', fairnessPoints: 8 },
  { id: 'e17', text: 'Use video verification for remote-first positions', category: 'verification', impact: 'medium', fairnessPoints: 5 },
]
