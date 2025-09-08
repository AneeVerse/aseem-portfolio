"use client"

import { ArrowRight, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative bg-[#0e0f0f] text-[#FEFCE1] border-b border-white/5 pt-20 md:pt-24" aria-labelledby="hero-heading">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/BG.mp4" type="video/mp4" />
      </video>
      {/* Overlay to maintain text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 mx-auto max-w-[1365px] px-5 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 mt-8 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          {/* Left copy */}
          <div className="lg:col-span-2">
            {/* Replace breadcrumb with eyebrow label to match the reference */}
            <div className="mb-4 inline-flex items-center gap-2 text-[18px] text-[#FEFCE1]/50">
              <img 
                src="/images/512.webp" 
                alt="Sparkle icon" 
                className="h-6 w-6"
              />
              <span>Award Winning "Hortitect" & Environmental Visionary</span>
            </div>

            {/* Increase headline size closer to the template */}
            <h1 id="hero-heading" className="text-pretty max-w-[720px] text-[#FEFCE1]/80 text-4xl md:text-5xl lg:text-[60px] font-normal leading-17 tracking-tight">
              Every Thing You Imagine Is Real
            </h1>
            <p className="mt-3 text-lg leading-7 text-[#FEFCE1]/50 max-w-[700px] mt-5 mb-10">
            Specializing in nature-based solutions and tech-enabled public space design with 25+ years of expertise. I bridge the gap between architecture and horticulture to create liveable cities that harmonize with nature while serving communities.
            </p>

            <div className="mt-6 flex flex-row items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full px-5 py-3 lg:px-6 lg:py-2.9 text-[16px] lg:text-[18px] font-medium text-[#0e0f0f] whitespace-nowrap cursor-pointer gradient-button"
              >
                Explore Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[16px] sm:text-[18px] text-[#FEFCE1]/100 hover:text-[#FEFCE1] whitespace-nowrap"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#FEFCE1]/55" />
                studio@aghdesign.co
              </a>
            </div>
          </div>

          {/* Right portrait */}
          <div className="relative mx-auto w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] lg:w-[400px] lg:h-[500px] overflow-hidden rounded-full ring-1 ring-white/10 ">
            <img
              src={"/images/hero-right.png"}
              alt="Portrait of Olyve with projected letters"
              className="h-full w-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
