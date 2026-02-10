import {
  getHeroContent,
  getTrustedByContent,
  getSolutionsContent,
  getPlanetImpactContent,
  getGlobalImpactContent,
  getImpactStatsContent,
  getAboutContent,
  getTestimonialsContent,
  getCtaContent,
  getBlogPreviewContent,
  getCareersContent
} from "@/lib/home"

import HomeHero from "@/components/home/HomeHero"
import TrustedBySection from "@/components/home/TrustedBySection"
import SolutionsSection from "@/components/home/SolutionsSection"
import PlanetImpactSection from "@/components/home/PlanetImpactSection"
import GlobalImpactSection from "@/components/home/GlobalImpactSection"
import ImpactStatsSection from "@/components/home/ImpactStatsSection"
import AboutSection from "@/components/home/AboutSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import CtaSection from "@/components/home/CtaSection"
import BlogPreviewSection from "@/components/home/BlogPreviewSection"
import CareersSection from "@/components/home/CareersSection"

export default function HomePage() {
  const hero = getHeroContent()
  const trustedBy = getTrustedByContent()
  const solutions = getSolutionsContent()
  const planetImpact = getPlanetImpactContent()
  const globalImpact = getGlobalImpactContent()
  const impactStats = getImpactStatsContent()
  const about = getAboutContent()
  const testimonials = getTestimonialsContent()
  const cta = getCtaContent()
  const blogPreview = getBlogPreviewContent()
  const careers = getCareersContent()

  return (
    <>
      <HomeHero content={hero} />
      <TrustedBySection content={trustedBy} />
      <SolutionsSection content={solutions} />
      <PlanetImpactSection content={planetImpact} />
      <GlobalImpactSection content={globalImpact} />
      <ImpactStatsSection content={impactStats} />
      <AboutSection content={about} />
      <TestimonialsSection content={testimonials} />
      <CtaSection content={cta} />
      <BlogPreviewSection content={blogPreview} />
      <CareersSection content={careers} />
    </>
  )
}
