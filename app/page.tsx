import Navbar from "@/components/navbar"
import { HeroSection } from "@/components/section/hero"
import { ServicesSection } from "@/components/section/services"
import { WorksSection } from "@/components/section/works"
import { BooksSection } from "@/components/section/books"
import { AboutSection } from "@/components/section/about"
import { SkillsStatsSection } from "@/components/section/skills-stats"
import { TestimonialsSection } from "@/components/section/testimonials"
import { ArticlesSection } from "@/components/section/articles"
import { MarqueeBar } from "@/components/section/marquee"
import { ContactSection } from "@/components/section/contact"
import { SiteFooter } from "@/components/section/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <BooksSection />
     
      <TestimonialsSection />
      <ArticlesSection />
      <MarqueeBar />
      <ContactSection />
      <SiteFooter />
    </>
  )
}
