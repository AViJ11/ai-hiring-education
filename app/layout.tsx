import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI in Hiring | Understanding the New Job Market',
  description:
    'Learn how AI is reshaping hiring — from ATS filters and AI interviews to bias risks and scam detection. Practical guides for students and employers.',
  keywords:
    'AI hiring, ATS, applicant tracking system, hiring bias, job market, AI screening, scam jobs',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
