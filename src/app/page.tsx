import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechStack from '@/components/LogoCloud'
import Features from '@/components/Features'
import FeatureShowcase from '@/components/FeatureShowcase'
import DashboardPreview from '@/components/DashboardPreview'
import Methodology from '@/components/Methodology'
import Benchmarks from '@/components/Testimonials'
import OpenSource from '@/components/OpenSource'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TechStack />
      <Features />
      <FeatureShowcase />
      <DashboardPreview />
      <Methodology />
      <div id="benchmarks">
        <Benchmarks />
      </div>
      <OpenSource />
      <CTA />
      <Footer />
    </main>
  )
}
