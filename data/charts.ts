// ─── Worker Sentiment ──────────────────────────────────────
export const workerSentimentData = [
  { category: 'Very Worried',     percentage: 28, fill: '#f43f5e' },
  { category: 'Somewhat Worried', percentage: 34, fill: '#f97316' },
  { category: 'Neutral',          percentage: 18, fill: '#94a3b8' },
  { category: 'Somewhat Optimistic', percentage: 13, fill: '#06b6d4' },
  { category: 'Very Optimistic',  percentage: 7,  fill: '#10b981' },
]

// ─── Skill Trends ──────────────────────────────────────────
export const skillTrendData = [
  { year: '2020', aiMl: 45, dataSci: 60, coding: 70, softSkills: 55, projectMgmt: 50 },
  { year: '2021', aiMl: 58, dataSci: 65, coding: 72, softSkills: 60, projectMgmt: 52 },
  { year: '2022', aiMl: 72, dataSci: 74, coding: 75, softSkills: 68, projectMgmt: 55 },
  { year: '2023', aiMl: 88, dataSci: 82, coding: 78, softSkills: 76, projectMgmt: 58 },
  { year: '2024', aiMl: 96, dataSci: 88, coding: 80, softSkills: 84, projectMgmt: 62 },
  { year: '2025', aiMl: 100, dataSci: 92, coding: 82, softSkills: 90, projectMgmt: 65 },
]

export const skillTrendLines = [
  { key: 'aiMl',       name: 'AI & Machine Learning', color: '#6366f1' },
  { key: 'dataSci',    name: 'Data Science',           color: '#7c3aed' },
  { key: 'coding',     name: 'Coding / Dev',           color: '#06b6d4' },
  { key: 'softSkills', name: 'Communication & Leadership', color: '#10b981' },
  { key: 'projectMgmt', name: 'Project Management',   color: '#f59e0b' },
]

// ─── AI Hiring Adoption ────────────────────────────────────
export const hiringAdoptionData = [
  { stage: 'Resume Screening',   adoption: 78, color: '#6366f1' },
  { stage: 'Candidate Sourcing', adoption: 63, color: '#7c3aed' },
  { stage: 'Video Interviews',   adoption: 47, color: '#06b6d4' },
  { stage: 'Skills Assessment',  adoption: 42, color: '#0ea5e9' },
  { stage: 'Reference Checks',   adoption: 28, color: '#10b981' },
  { stage: 'Offer Management',   adoption: 21, color: '#059669' },
]

// ─── Job Displacement vs Creation ─────────────────────────
export const jobShiftData = [
  { sector: 'Admin & Data Entry', displaced: -38, created: 12, net: -26 },
  { sector: 'Customer Service',   displaced: -30, created: 18, net: -12 },
  { sector: 'Manufacturing',      displaced: -22, created: 8,  net: -14 },
  { sector: 'Healthcare Support', displaced: -10, created: 35, net: 25 },
  { sector: 'Tech & AI',          displaced: -5,  created: 48, net: 43 },
  { sector: 'Creative & Design',  displaced: -15, created: 22, net: 7  },
  { sector: 'Sales & Marketing',  displaced: -18, created: 20, net: 2  },
]

// ─── Scam Trend ────────────────────────────────────────────
export const scamTrendData = [
  { year: '2019', reports: 14200, losses: 2.1 },
  { year: '2020', reports: 22800, losses: 3.4 },
  { year: '2021', reports: 36400, losses: 5.8 },
  { year: '2022', reports: 52100, losses: 8.9 },
  { year: '2023', reports: 71300, losses: 11.6 },
  { year: '2024', reports: 89600, losses: 14.2 },
]
