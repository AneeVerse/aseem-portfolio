"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

const filters = [
  "All",
  "Heritage and Cultural",
  "Riverbank Restorations and Lake Promenade Eco-restoration",
  "Amrut van- Pocket Forest",
  "Linear Parks",
  "Industrial Landscapes",
  "Green Campuses  institutional Landscapes",
  "Residential Parks",
  "Corporate Parks",
  "Public Park",
  "Photos with important people or events",
] as const

export const projects = [
  // Heritage and Cultural
  {
    title: "Mumbadevi Temple Precinct Revamp",
    description: "Integrated community development & beautification of temple precinct",
    tag: "Heritage and Cultural",
    img: "/images/work1/1.%20Heritage%20and%20Cultural/1.%20Mumbadevi/1.jpg",
    id: "mumbadevi-temple-revamp",
    folder: "1. Mumbadevi",
    categoryFolder: "1. Heritage and Cultural",
  },
  {
    title: "Mahim Koliwada",
    description: "Proposed integrated development & beautification; Tourism Village concept",
    tag: "Heritage and Cultural",
    img: "/images/work1/1.%20Heritage%20and%20Cultural/2.%20Mahim%20Koliwada/Front%20page.JPG",
    id: "mahim-koliwada",
    folder: "2. Mahim Koliwada",
    categoryFolder: "1. Heritage and Cultural",
  },
  {
    title: "Worli Koliwada",
    description: "Integrated community development & beautification of 70-acre Koli village",
    tag: "Heritage and Cultural",
    img: "/images/work1/1.%20Heritage%20and%20Cultural/3.%20Worli%20Koliwada/Front%20Page.JPG",
    id: "worli-koliwada",
    folder: "3. Worli Koliwada",
    categoryFolder: "1. Heritage and Cultural",
  },
  {
    title: "Shivneri Fort Precinct",
    description: "Cultural fort precinct imagery",
    tag: "Heritage and Cultural",
    img: "/images/work1/1.%20Heritage%20and%20Cultural/4.%20Shivneri/1.jpeg",
    id: "shivneri-fort-precinct",
    folder: "4. Shivneri",
    categoryFolder: "1. Heritage and Cultural",
  },

  // Riverbank Restorations and Lake Promenade Eco-restoration
  {
    title: "Powai Lake Restoration",
    description: "67 acres water + 33 acres land restoration",
    tag: "Riverbank Restorations and Lake Promenade Eco-restoration",
    img: "/images/work1/2.%20Riverbank%20Restorations%20and%20Lake%20Promenade%20Eco-restoration/1.%20Powai%20Lake/1.JPG",
    id: "powai-lake-restoration",
    folder: "1. Powai Lake",
    categoryFolder: "2. Riverbank Restorations and Lake Promenade Eco-restoration",
  },
  {
    title: "Godavari Riverfront Redevelopment",
    description: "Comprehensive riverfront eco-restoration",
    tag: "Riverbank Restorations and Lake Promenade Eco-restoration",
    img: "/images/work1/2.%20Riverbank%20Restorations%20and%20Lake%20Promenade%20Eco-restoration/2.%20Godavari%20River/DJI_20250731152332_0195_D.JPG",
    id: "godavari-riverfront",
    folder: "2. Godavari River",
    categoryFolder: "2. Riverbank Restorations and Lake Promenade Eco-restoration",
  },

  // Amrut van- Pocket Forest
  {
    title: "AMRUT Urban Forests",
    description: "Nature based pocket forests across cities",
    tag: "Amrut van- Pocket Forest",
    img: "/images/work/Urban%20Parks%20%26%20Public%20Spaces/AMRUT/1.jpg",
    id: "amrut-urban-forests",
    folder: "DRONE SHOT VIDEOS",
    categoryFolder: "3. Amrut van- Pocket Forest",
  },

  // Linear Parks
  {
    title: "OXY Park",
    description: "Oxygen enhancement urban forest",
    tag: "Linear Parks",
    img: "/images/work1/4.%20Linear%20Parks/1.%20Oxy%20Park/1.JPG",
    id: "oxy-park",
    folder: "1. Oxy Park",
    categoryFolder: "4. Linear Parks",
  },

  // Industrial Landscapes
  {
    title: "Mahindra Tower Corporate Headquarters, Chakan",
    description: "R&D headquarters with sustainable design and automated irrigation",
    tag: "Industrial Landscapes",
    img: "/images/work1/5.%20Industrial%20Landscapes/1.%20Mahindra/THE%20MAHINDRA%20TOWER%20AT%20CHAKAN/1.jpg",
    id: "mahindra-tower-chakan",
    folder: "THE MAHINDRA TOWER AT CHAKAN",
    categoryFolder: "5. Industrial Landscapes",
  },

  // Green Campuses / Institutional Landscapes
  {
    title: "International Horticulture Innovation Training Centre (IHITC), Jaipur",
    description: "Indo-Netherlands collaboration for horticultural research",
    tag: "Green Campuses  institutional Landscapes",
    img: "/images/work1/6.%20Green%20Campuses%20%20institutional%20Landscapes/1.%20INTERNATIONAL%20HORTICULTURE%20INNOVATION,%20TRAINING%20CENTRE%20(IHITC)%20IN%20JAIPUR,%20RAJASTHAN/1.jpg",
    id: "ihitc-jaipur",
    folder: "1. INTERNATIONAL HORTICULTURE INNOVATION, TRAINING CENTRE (IHITC) IN JAIPUR, RAJASTHAN",
    categoryFolder: "6. Green Campuses  institutional Landscapes",
  },

  // Residential Parks
  {
    title: "The Address (Wadhwa Group)",
    description: "IGBC Platinum rated high-rise residential complex",
    tag: "Residential Parks",
    img: "/images/work1/7.%20Residential%20Parks/1.%20The%20Address/2.jpg",
    id: "the-address-wadhwa",
    folder: "1. The Address",
    categoryFolder: "7. Residential Parks",
  },
  {
    title: "Juhi Chawla's Private Residence",
    description: "Celebrity home with sprawling lawn and green paradise",
    tag: "Residential Parks",
    img: "/images/work1/7.%20Residential%20Parks/2.%20Juhi%20Chawla_s%20Residence/1.jpg",
    id: "juhi-chawla-residence",
    folder: "2. Juhi Chawla_s Residence",
    categoryFolder: "7. Residential Parks",
  },
  {
    title: "Magnum Opus, Juhu",
    description: "Luxury residential complex landscaping",
    tag: "Residential Parks",
    img: "/images/work1/7.%20Residential%20Parks/3.%20MAGNUM%20OPUS,%20JUHU/1.jpg",
    id: "magnum-opus-juhu",
    folder: "3. MAGNUM OPUS, JUHU",
    categoryFolder: "7. Residential Parks",
  },
  {
    title: "Hiranandani Estate, Powai",
    description: "300+ acres planned township with tree-lined avenues",
    tag: "Residential Parks",
    img: "/images/work1/7.%20Residential%20Parks/4.HIRANANDANI%20%20ESTATE,%20%20POWAI%20-/1.jpg",
    id: "hiranandani-estate-powai",
    folder: "4.HIRANANDANI  ESTATE,  POWAI -",
    categoryFolder: "7. Residential Parks",
  },
  {
    title: "Palm Beach Residency",
    description: "Residential township landscaping",
    tag: "Residential Parks",
    img: "/images/work1/7.%20Residential%20Parks/5.Palm%20Beach%20Residency/1.jpg",
    id: "palm-beach-residency",
    folder: "5.Palm Beach Residency",
    categoryFolder: "7. Residential Parks",
  },

  // Corporate Parks
  {
    title: "Mahindra Corporate Park",
    description: "Corporate campus landscape imagery",
    tag: "Corporate Parks",
    img: "/images/work1/8.%20Corporate%20Parks/1.%20Mahindra/IMG_20170906_152701.jpg",
    id: "corporate-mahindra-park",
    folder: "1. Mahindra",
    categoryFolder: "8. Corporate Parks",
  },

  // Public Park
  {
    title: "India's First Interactive Children Traffic Training Park, Thane",
    description: "Road safety education through experiential learning",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/1.%20Thane%20CTP-%20traffic%20park/DSC_9127.JPG",
    id: "children-traffic-park-thane",
    folder: "1. Thane CTP- traffic park",
    categoryFolder: "9. Public Park",
  },
  {
    title: "Jewel of Navi Mumbai (Nerul Lake)",
    description: "2.6 km walking track with international standard beautification",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/11.%20Jewel%20of%20Navimumbai/IMG_20170730_083102.jpg",
    id: "nerul-lake-jewel",
    folder: "11. Jewel of Navimumbai",
    categoryFolder: "9. Public Park",
  },
  {
    title: "Rashtrapita Mahatma Gandhi Udyan",
    description: "Public park rejuvenation project",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/7.%20Rashtrapita%20mahatma%20gandhi%20udyan%20-%20Panvel%20Municipal%20Corporation/1.JPG",
    id: "gandhi-udyan",
    folder: "7. Rashtrapita mahatma gandhi udyan - Panvel Municipal Corporation",
    categoryFolder: "9. Public Park",
  },
  {
    title: "Astronomy Park - Panvel Municipal Corporation",
    description: "Thematic municipal park with astronomy-inspired features",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/4.%20Astronomy%20Park%20-%20Panvel%20Municipal%20Corporation/20250524_124653.jpg",
    id: "panvel-theme-parks",
    folder: "4. Astronomy Park - Panvel Municipal Corporation",
    categoryFolder: "9. Public Park",
  },
  {
    title: "Dinosaur Park - Panvel Municipal Corporation",
    description: "Themed recreational park with installations",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/3.%20Dinosaur%20Park-%20Panvel%20Municipal%20Corporation/20250524_120553.jpg",
    id: "dinosaur-park-panvel",
    folder: "3. Dinosaur Park- Panvel Municipal Corporation",
    categoryFolder: "9. Public Park",
  },
  {
    title: "Farm Land Park - Panvel Municipal Corporation",
    description: "Agricultural-themed community park",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/2.%20Farm%20Land%20Park-%20Panvel%20Municipal%20Corporation/WhatsApp%20Image%202025-07-04%20at%201.24.41%20PM.jpeg",
    id: "farm-land-park-panvel",
    folder: "2. Farm Land Park- Panvel Municipal Corporation",
    categoryFolder: "9. Public Park",
  },
  {
    title: "Panchtatva Udyan - Panvel Municipal Corporation",
    description: "Park inspired by five elements",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/5.%20Panchtatva%20Udyan%20-%20Panvel%20Municipal%20Corporation/20250520_154052.jpg",
    id: "panchtatva-udyan-panvel",
    folder: "5. Panchtatva Udyan - Panvel Municipal Corporation",
    categoryFolder: "9. Public Park",
  },
  {
    title: "Biodiversity Park - Panvel Municipal Corporation",
    description: "Urban biodiversity showcase",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/6.%20Biodiversity%20Park-%20Panvel%20Municipal%20Corporation/1.jpeg",
    id: "biodiversity-park-panvel",
    folder: "6. Biodiversity Park- Panvel Municipal Corporation",
    categoryFolder: "9. Public Park",
  },
  {
    title: "Rainbow Garden - Panvel Municipal Corporation",
    description: "Color-themed garden spaces",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/8.%20Rainbow%20garden-%20Panvel%20Municipal%20Corporation/20250519_174927.jpg",
    id: "rainbow-garden-panvel",
    folder: "8. Rainbow garden- Panvel Municipal Corporation",
    categoryFolder: "9. Public Park",
  },
  {
    title: "Sensory Garden - Panvel Municipal Corporation",
    description: "Inclusive sensory experiences in a park setting",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/9.%20Sensory%20garden-Panvel%20Municipal%20Corporation/20250524_113628.jpg",
    id: "sensory-garden-panvel",
    folder: "9. Sensory garden-Panvel Municipal Corporation",
    categoryFolder: "9. Public Park",
  },
  {
    title: "Topiary Park - Pune",
    description: "Topiary-focused urban park",
    tag: "Public Park",
    img: "/images/work1/9.%20Public%20Park/10.%20Topiary%20park%20-%20pune/IMG_20220205_114732.jpg",
    id: "topiary-park-pune",
    folder: "10. Topiary park - pune",
    categoryFolder: "9. Public Park",
  },
  
  // Photos with important people or events
  {
    title: "Photos with important people or events",
    description: "Memorable moments captured with dignitaries and during key events",
    tag: "Photos with important people or events",
    img: "/images/work1/10.%20Photos%20with%20important%20people%20or%20events/IMG_20180209_153214.jpg",
    id: "photos-important-events",
    folder: "10. Photos with important people or events",
    categoryFolder: "10. Photos with important people or events",
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

          <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-end lg:max-w-4xl lg:ml-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 lg:px-6 lg:py-2.5 text-sm lg:text-base font-medium text-center leading-tight cursor-pointer transition-all min-h-[44px] flex items-center justify-center w-full sm:w-auto ${
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

        <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 pb-4 md:pb-0 scrollbar-hide">
          {filteredProjects.map((project) => (
            <article key={project.title} className="group cursor-pointer animate-in fade-in duration-300 h-full flex-shrink-0 w-80 md:w-auto" onClick={() => handleProjectClick(project.id)}>
              <div className="relative overflow-hidden rounded-xl bg-[#141513] ring-1 ring-white/5 hover:ring-white/10 transition-all h-full flex flex-col min-h-[400px] md:min-h-0">
                <div className="relative aspect-[4/3] overflow-hidden p-3">
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    {project.id === "amrut-urban-forests" ? (
                      <video
                        src="/images/work1/3.%20Amrut%20van-%20Pocket%20Forest/1.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.img || "/placeholder.svg"}
                        alt={`${project.title} project showcase`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
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
