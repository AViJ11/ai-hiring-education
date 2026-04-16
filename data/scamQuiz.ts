export interface QuizQuestion {
  id: number
  scenario: string
  options: string[]
  correctIndex: number
  explanation: string
  redFlags: string[]
}

export const scamQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    scenario:
      'You receive an email from "Amazon Recruiting" offering you a $95,000/year remote data entry position. The email says you start Monday and asks you to fill out a Google Form with your SSN, bank account details, and driver\'s license.',
    options: [
      'Apply — Amazon is a trusted company and the salary is competitive',
      'This is almost certainly a scam — do not submit personal information',
      'Ask for more time before submitting — maybe it is legitimate',
    ],
    correctIndex: 1,
    explanation:
      'Legitimate employers never ask for your SSN or bank account via a Google Form before an interview. Real Amazon jobs are posted on jobs.amazon.com only.',
    redFlags: [
      'Unsolicited job offer via email',
      'Request for SSN and bank info before onboarding',
      'No interview process',
      'Google Form instead of official HR portal',
    ],
  },
  {
    id: 2,
    scenario:
      'A job posting on LinkedIn offers $85/hour working from home as a "Brand Ambassador." The post has 500+ likes and says "only 3 spots left." The company has a LinkedIn page with 2 employees and no website.',
    options: [
      'Apply quickly — high demand signals a great opportunity',
      'Research the company first — 2 employees and no website is suspicious',
      'Contact the poster directly on LinkedIn to express interest',
    ],
    correctIndex: 1,
    explanation:
      'Urgency tactics ("only 3 spots!") and inflated salaries for vague roles are classic scam signals. A legitimate company paying $85/hr would have a verifiable web presence.',
    redFlags: [
      'Artificial urgency ("only 3 spots left")',
      'Company has 2 employees but 500+ likes',
      'No company website',
      'Vague role title with unusually high pay',
    ],
  },
  {
    id: 3,
    scenario:
      'You get a WhatsApp message from someone claiming to be an HR manager at Google. They say your resume was "selected" and offer you $120k + benefits. They ask you to buy $200 in training materials before starting.',
    options: [
      'Buy the training materials — it could be a worthwhile investment',
      'This is a scam — Google does not recruit via WhatsApp and never charges for training',
      'Ask for the person\'s employee ID number before deciding',
    ],
    correctIndex: 1,
    explanation:
      'Any employer that charges you money to start a job is running a scam. Google and legitimate companies never recruit through WhatsApp with upfront fees.',
    redFlags: [
      'Recruitment via WhatsApp/SMS, not official channels',
      'Request for upfront payment for training or equipment',
      'Job offer with no interview',
      'Impersonates a major brand',
    ],
  },
  {
    id: 4,
    scenario:
      'A job posting on Indeed for "Administrative Assistant" at a local company looks professional. It has a salary range, full job description, and a company website. It asks you to submit a resume and cover letter.',
    options: [
      'Apply normally — this matches signs of a legitimate posting',
      'Be suspicious — all online jobs could be scams',
      'Demand a phone call first before submitting anything',
    ],
    correctIndex: 0,
    explanation:
      'This posting has the hallmarks of a legitimate opportunity: verifiable company website, realistic salary, detailed description, and a normal application request (resume + cover letter).',
    redFlags: ['None observed — this appears to be a legitimate posting'],
  },
  {
    id: 5,
    scenario:
      'After applying for a remote marketing role, you receive a Zoom interview invitation. The "interviewer" types all their answers in the chat instead of speaking and asks you to send your passport scan as "ID verification" before they can continue.',
    options: [
      'Send the passport scan — video calls require ID verification',
      'End the call — this is a deepfake or text-based scam interview',
      'Ask to reschedule the interview in person instead',
    ],
    correctIndex: 1,
    explanation:
      'A recruiter who only types during a video call may be a deepfake or using a scripted bot. No legitimate employer requires a passport scan during an interview screening.',
    redFlags: [
      'Interviewer communicates only via text in a video call',
      'Request for government ID before a job offer is made',
      'No live audio or camera from the interviewer',
      'Uncommon identity verification requests',
    ],
  },
]
