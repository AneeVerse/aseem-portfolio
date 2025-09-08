"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

const filters = ["All", "Corporate & Industrial Landscapes", "Urban Parks & Public Spaces", "Infrastructure & Urban Renewal", "Waterfront & Lake Restoration"] as const

const projects = [
  // Corporate & Industrial Landscapes
  {
    title: "Mahindra Tower Corporate Headquarters, Chakan",
    description: "R&D headquarters with sustainable design and automated irrigation",
    tag: "Corporate & Industrial Landscapes",
    img: "/images/work/Corporate%20%26%20Industrial%20Landscapes/THE%20MAHINDRA%20TOWER%20AT%20CHAKAN/1.jpg",
    id: "mahindra-tower-chakan",
    folder: "THE MAHINDRA TOWER AT CHAKAN"
  },
  {
    title: "The Address (Wadhwa Group)",
    description: "IGBC Platinum rated high-rise residential complex",
    tag: "Corporate & Industrial Landscapes",
    img: "/images/work/Corporate%20%26%20Industrial%20Landscapes/The%20Address/1.jpg",
    id: "the-address-wadhwa",
    folder: "The Address"
  },
  {
    title: "Magnum Opus, Juhu",
    description: "Luxury residential complex landscaping",
    tag: "Corporate & Industrial Landscapes",
    img: "/images/work/Corporate%20%26%20Industrial%20Landscapes/MAGNUM%20OPUS%2C%20JUHU/1.jpg",
    id: "magnum-opus-juhu",
    folder: "MAGNUM OPUS, JUHU"
  },
  {
    title: "Palm Beach Residency",
    description: "Residential township landscaping",
    tag: "Corporate & Industrial Landscapes",
    img: "/images/work/Corporate%20%26%20Industrial%20Landscapes/Palm%20Beach%20Residency/1.jpg",
    id: "palm-beach-residency",
    folder: "Palm Beach Residency"
  },
  {
    title: "Juhi Chawla's Private Residence",
    description: "Celebrity home with sprawling lawn and green paradise",
    tag: "Corporate & Industrial Landscapes",
    img: "/images/work/Corporate%20%26%20Industrial%20Landscapes/Juhi%20Chawla_s%20Residence/1.jpg",
    id: "juhi-chawla-residence",
    folder: "Juhi Chawla_s Residence"
  },
  
  // Urban Parks & Public Spaces
  {
    title: "AMRUT Urban Forests",
    description: "Atal Mission for Rejuvenation and Urban Transformation greenspaces",
    tag: "Urban Parks & Public Spaces",
    img: "/images/work/Urban%20Parks%20%26%20Public%20Spaces/AMRUT/1.jpg",
    id: "amrut-urban-forests",
    folder: "AMRUT"
  },
  {
    title: "India's First Interactive Children Traffic Training Park, Thane",
    description: "Road safety education through experiential learning",
    tag: "Urban Parks & Public Spaces",
    img: "/images/work/Urban%20Parks%20%26%20Public%20Spaces/Children%20Nature%20Education%20Center%20-%20traffic%20park%20thane/1.jpg",
    id: "children-traffic-park-thane",
    folder: "Children Nature Education Center - traffic park thane"
  },
  {
    title: "Hiranandani Estate, Powai",
    description: "300+ acres planned township with tree-lined avenues",
    tag: "Urban Parks & Public Spaces",
    img: "/images/work/Urban%20Parks%20%26%20Public%20Spaces/HIRANANDANI%20%20ESTATE%2C%20%20POWAI%20-/1.jpg",
    id: "hiranandani-estate-powai",
    folder: "HIRANANDANI  ESTATE,  POWAI -"
  },
  {
    title: "OXY Park",
    description: "Oxygen enhancement urban forest",
    tag: "Urban Parks & Public Spaces",
    img: "/images/work/Urban%20Parks%20%26%20Public%20Spaces/OXY%20Park/1.JPG",
    id: "oxy-park",
    folder: "OXY Park"
  },
  {
    title: "Rashtrapita Mahatma Gandhi Udyan",
    description: "Public park rejuvenation project",
    tag: "Urban Parks & Public Spaces",
    img: "/images/work/Urban%20Parks%20%26%20Public%20Spaces/RASHTRAPITA%20MAHATMA%20GANDHI%20UDYAAN/1.jpg",
    id: "gandhi-udyan",
    folder: "RASHTRAPITA MAHATMA GANDHI UDYAAN"
  },
  {
    title: "Theme Parks for Panvel Municipal Corporation",
    description: "Multiple municipal recreational parks",
    tag: "Urban Parks & Public Spaces",
    img: "/images/work/Urban%20Parks%20%26%20Public%20Spaces/THEME%20PARKS%20FOR%20PANVEL%20MUNICIPAL%20CORPORATION/1.jpg",
    id: "panvel-theme-parks",
    folder: "THEME PARKS FOR PANVEL MUNICIPAL CORPORATION"
  },
  
  // Infrastructure & Urban Renewal
  {
    title: "Kherwadi Under-Bridge Beautification",
    description: "Infrastructure enhancement under flyover",
    tag: "Infrastructure & Urban Renewal",
    img: "/images/work/Infrastructure%20%26%20Urban%20Renewal/kHERWADI-%20UNDER%20BRIDGE/8.jpg",
    id: "kherwadi-under-bridge",
    folder: "kHERWADI- UNDER BRIDGE"
  },
  {
    title: "Mumbadevi Temple Precinct Revamp",
    description: "₹220 crore heritage precinct development",
    tag: "Infrastructure & Urban Renewal",
    img: "/images/work/Infrastructure%20%26%20Urban%20Renewal/Mumbadevi/final%20photos/1.jpg",
    id: "mumbadevi-temple-revamp",
    folder: "Mumbadevi"
  },
  
  // Waterfront & Lake Restoration
  {
    title: "Powai Lake Restoration",
    description: "67 acres water + 33 acres land restoration",
    tag: "Waterfront & Lake Restoration",
    img: "/images/work/Waterfront%20%26%20Lake%20Restoration/Powai%20Lake/1.jpg",
    id: "powai-lake-restoration",
    folder: "Powai Lake"
  },
  {
    title: "Jewel of Navi Mumbai (Nerul Lake)",
    description: "2.6 km walking track with international standard beautification",
    tag: "Waterfront & Lake Restoration",
    img: "/images/work/Waterfront%20%26%20Lake%20Restoration/jewel%20of%20navi%20mumbai/1.jpg",
    id: "nerul-lake-jewel",
    folder: "jewel of navi mumbai"
  },
  {
    title: "International Horticulture Innovation Training Centre (IHITC), Jaipur",
    description: "Indo-Netherlands collaboration for horticultural research",
    tag: "Waterfront & Lake Restoration",
    img: "/images/work/Waterfront%20%26%20Lake%20Restoration/INTERNATIONAL%20HORTICULTURE%20INNOVATION%2C%20TRAINING%20CENTRE%20%28IHITC%29%20IN%20JAIPUR%2C%20RAJASTHAN/1.jpg",
    id: "ihitc-jaipur",
    folder: "INTERNATIONAL HORTICULTURE INNOVATION, TRAINING CENTRE (IHITC) IN JAIPUR, RAJASTHAN"
  },
]

export function WorksSection() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>("All")

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tag === activeFilter)

  const handleProjectClick = (projectId: string) => {
    router.push(`/project/${projectId}`)
  }
  return (
    <section id="works" className="bg-[#0e0f0f] text-[#FEFCE1] border-b border-white/5">
      <div className="mx-auto max-w-[1365px] px-5 md:px-8 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-light">Works</h2>

          <div className="flex flex-wrap gap-2 lg:gap-3 justify-end lg:max-w-4xl lg:ml-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 lg:px-6 lg:py-2.5 text-sm lg:text-base font-medium text-center leading-tight cursor-pointer transition-all min-h-[44px] flex items-center justify-center ${
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
            <article key={project.title} className="group cursor-pointer animate-in fade-in duration-300 h-full" onClick={() => handleProjectClick(project.id)}>
              <div className="relative overflow-hidden rounded-xl bg-[#141513] ring-1 ring-white/5 hover:ring-white/10 transition-all h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden p-3">
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    <img
                      src={project.img || "/placeholder.svg"}
                      alt={`${project.title} project showcase`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between min-h-[120px]">
                  <div className="flex items-start justify-between h-full">
                    <div className="flex-1">
                      <h3 className="text-xl font-light text-[#FEFCE1] mb-2 leading-tight">{project.title}</h3>
                      <p className="text-[#FEFCE1]/60 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#FEFCE1]/40 group-hover:text-[#FEFCE1] transition-colors flex-shrink-0 ml-3 mt-1" />
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
