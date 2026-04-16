import { RoleProvider } from '@/context/RoleContext'
import StickyNav from '@/components/layout/StickyNav'
import BackToTop from '@/components/layout/BackToTop'
import CTAFooter from '@/components/layout/CTAFooter'
import HeroSection from '@/components/sections/HeroSection'
import StudentSection from '@/components/sections/StudentSection'
import EmployerSection from '@/components/sections/EmployerSection'
import TrendsSection from '@/components/sections/TrendsSection'
import SourcesSection from '@/components/sections/SourcesSection'

export default function Home() {
  return (
    <RoleProvider>
      <StickyNav />
      <main>
        <HeroSection />
        <StudentSection />
        <EmployerSection />
        <TrendsSection />
        <SourcesSection />
      </main>
      <CTAFooter />
      <BackToTop />
    </RoleProvider>
  )
}
