"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const filters = ["All", "Branding", "Product", "UX/UI"] as const

const projects = [
  {
    title: "B & O",
    description: "Marketing site design and build",
    tag: "Branding",
    img: "/premium-branding-design-with-green-geometric-patte.png",
  },
  {
    title: "Cozmetic",
    description: "Marketing site design and build",
    tag: "Product",
    img: "/luxury-cosmetic-packaging-black-and-gold-skincare-.png",
  },
  {
    title: "Xencoru",
    description: "Brand identity and visual system",
    tag: "Branding",
    img: "/modern-brand-identity-stationery-mockup-monochrome.png",
  },
  {
    title: "Buck",
    description: "Product design and development",
    tag: "Product",
    img: "/dark-industrial-product-design-arrangement.png",
  },
  {
    title: "Design System",
    description: "UX/UI design and component library",
    tag: "UX/UI",
    img: "/creative-design-colorful-ui-dashboards-3d-shapes.png",
  },
  {
    title: "Mobile App",
    description: "User experience and interface design",
    tag: "UX/UI",
    img: "/vibrant-brand-packaging-mockups.png",
  },
]

export function WorksSection() {
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>("All")

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tag === activeFilter)
  return (
    <section id="works" className="bg-[#0e0f0f] text-[#FEFCE1] border-b border-white/5">
      <div className="mx-auto max-w-[1365px] px-5 md:px-8 py-16 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-light">Works</h2>

          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-1.5  lg:px-7 lg:py-2 text-sm lg:text-base font-medium whitespace-nowrap flex-shrink-0 cursor-pointer transition-all ${
                  activeFilter === filter
                    ? "gradient-button text-[#0e0f0f]"
                    : "bg-transparent text-[#FEFCE1]/70 hover:text-[#FEFCE1] border border-white/10 hover:border-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article key={project.title} className="group cursor-pointer animate-in fade-in duration-300">
              <div className="relative overflow-hidden rounded-xl bg-[#141513] ring-1 ring-white/5 hover:ring-white/10 transition-all">
                <div className="relative aspect-[4/3] overflow-hidden p-3">
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    <img
                      src={project.img || "/placeholder.svg"}
                      alt={`${project.title} project showcase`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light text-[#FEFCE1] mb-1">{project.title}</h3>
                      <p className="text-[#FEFCE1]/60 text-xs">{project.description}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#FEFCE1]/40 group-hover:text-[#FEFCE1] transition-colors flex-shrink-0 ml-3" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
