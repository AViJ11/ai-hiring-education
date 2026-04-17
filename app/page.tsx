import { RoleProvider } from '@/context/RoleContext'
import StickyNav from '@/components/layout/StickyNav'
import CTAFooter from '@/components/layout/CTAFooter'
import HeroSection from '@/components/sections/HeroSection'
import StudentSection from '@/components/sections/StudentSection'
import EmployerSection from '@/components/sections/EmployerSection'
import TrendsSection from '@/components/sections/TrendsSection'
import SourcesSection from '@/components/sections/SourcesSection'
import DotField from '@/components/ui/DotField'
import ClickSpark from '@/components/ui/ClickSpark'

export default function Home() {
  return (
    <RoleProvider>
      <ClickSpark sparkColor="#06B6D4" sparkSize={12} sparkRadius={20} sparkCount={8} duration={500} className="min-h-screen">
        {/* Fixed dot-field background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <DotField
            dotRadius={2.8}
            dotSpacing={16}
            cursorRadius={400}
            bulgeStrength={50}
            waveAmplitude={1.5}
            gradientFrom="rgba(6, 182, 212, 0.85)"
            gradientTo="rgba(139, 92, 246, 0.7)"
          />
        </div>

        <div className="relative z-10">
          <StickyNav />
          <main>
            <HeroSection />
            <StudentSection />
            <EmployerSection />
            <TrendsSection />
            <SourcesSection />
          </main>
          <CTAFooter />
        </div>
      </ClickSpark>
    </RoleProvider>
  )
}
