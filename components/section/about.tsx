import type React from "react"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// Sunburst/Radial Icon Component
function SunburstIcon() {
  return (
    <div className="relative">
      <svg 
        width="110" 
        height="110" 
        viewBox="0 0 48 48" 
        fill="none" 
        className="text-[#FEFCE1]"
      >
        <g transform="translate(24,24)">
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i * 360) / 16
            const length = i % 2 === 0 ? 18 : 12
            return (
              <line
                key={i}
                x1="0"
                y1="0"
                x2={length * Math.cos((angle - 90) * Math.PI / 180)}
                y2={length * Math.sin((angle - 90) * Math.PI / 180)}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )
          })}
        </g>
      </svg>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="bg-[#0e0f0f] text-[#FEFCE1] border-b border-white/5 min-h-screen">
      <div className="mx-auto max-w-[1365px] px-5 md:px-8 py-14 md:py-20">
        
        {/* Main Content Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2 items-center min-h-[70vh] lg:mr-20">
          
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-120 h-150 mx-auto lg:max-w-none mb-20">
              <img
                src="/images/hero-right.png"
                alt="Creative professional at work"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 lg:space-y-12 relative z-10">
            
            {/* Sunburst Icon - Absolutely positioned */}
            <div className="absolute top-10 -left-155 right-0 z-20">
              <SunburstIcon />
            </div>
            
            {/* Header - Overflows onto image */}
            <div className="pt-16 lg:-ml-65 lg:-mt-5">
              <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-[110px] font-bold text-[#FEFCE1] uppercase leading-none whitespace-nowrap" style={{letterSpacing: '0.4em'}}>
                ABOUT US
              </h2>
            </div>

            {/* Content Text - Stays on right side */}
            <div className="space-y-6 -mt-10">
              <p className="text-sm md:text-base leading-relaxed text-[#FEFCE1]/80">
                Dr. Aseem Gokarn Harwansh is a Doctorate in Urban Landscaping and a self-styled "Hortitect" who has spent more than 25 years creating tech-enabled, nature-based public spaces that fuse architecture with horticulture. As founder and Principal Consultant of the award-winning AGH Design studio, she delivers sustainable landscape and environmental solutions across 14 cities and eight states of India, from Jammu & Kashmir to Tamil Nadu.
              </p>
              
              <p className="text-sm md:text-base leading-relaxed text-[#FEFCE1]/80">
                Her portfolio includes landmark projects such as India's first Interactive Children's Traffic Training Park, the Godavari riverbank restoration at Nashik, and heritage precincts like Shivneri Fort. A recognised NbS (Nature-based Solutions) specialist, she is empanelled with multiple urban bodies and currently serves as Expert Member of the Maharashtra State Environment Appraisal Committee (SEAC-III) under the Ministry of Environment, Forests & Climate Change, Government of India.
              </p>
              
              <p className="text-sm md:text-base leading-relaxed text-[#FEFCE1]/80">
                Driven by the conviction that inclusive, biophilic design elevates quality of life, she continues to champion sustainable cityscapes through research, teaching, and public advocacy.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="#" 
                className="p-3 rounded-full bg-[#141513] hover:bg-[#1a1b19] transition-colors duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-[#FEFCE1]/70 group-hover:text-[#FEFCE1] transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-[#141513] hover:bg-[#1a1b19] transition-colors duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-[#FEFCE1]/70 group-hover:text-[#FEFCE1] transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-[#141513] hover:bg-[#1a1b19] transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[#FEFCE1]/70 group-hover:text-[#FEFCE1] transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-[#141513] hover:bg-[#1a1b19] transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-[#FEFCE1]/70 group-hover:text-[#FEFCE1] transition-colors" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
