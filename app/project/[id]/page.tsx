"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageGallery } from "@/components/ui/image-gallery"
import Navbar from "@/components/navbar"

// Project data - this should match the data from works.tsx
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

// Function to get all images for a project
const getProjectImages = (project: any): string[] => {
  const imageExtensions = ['.jpg', '.JPG', '.jpeg', '.png', '.webp']
  let images: string[] = []
  
  // Define image counts for each project based on the folder structure we saw
  const imageCounts: { [key: string]: number } = {
    "mahindra-tower-chakan": 12,
    "the-address-wadhwa": 10,
    "magnum-opus-juhu": 4,
    "palm-beach-residency": 7,
    "juhi-chawla-residence": 6,
    "amrut-urban-forests": 16,
    "children-traffic-park-thane": 8,
    "hiranandani-estate-powai": 5,
    "oxy-park": 16,
    "gandhi-udyan": 7,
    "panvel-theme-parks": 6,
    "kherwadi-under-bridge": 12,
    "mumbadevi-temple-revamp": 50, // Including both main folder and final photos
    "powai-lake-restoration": 5,
    "nerul-lake-jewel": 5,
    "ihitc-jaipur": 3,
  }

  const count = imageCounts[project.id] || 1
  const basePath = `/images/work/${encodeURIComponent(project.tag)}/${encodeURIComponent(project.folder)}`
  
  // Special handling for specific projects
  if (project.id === "oxy-park") {
    // OXY Park uses .JPG extension
    for (let i = 1; i <= count; i++) {
      images.push(`${basePath}/${i}.JPG`)
    }
  } else if (project.id === "mumbadevi-temple-revamp") {
    // Mumbadevi has images in main folder and final photos folder
    // Add final photos first (numbered 1-11)
    for (let i = 1; i <= 11; i++) {
      images.push(`${basePath}/final photos/${i}.jpg`)
    }
    // Add some Enscape renders
    const enscapeImages = [
      "Enscape_2025-01-20-12-36-18.jpg",
      "Enscape_2025-01-20-12-36-33.jpg",
      "Enscape_2025-01-20-12-46-13.jpg",
      "Enscape_2025-01-20-12-51-36.jpg",
      "Enscape_2025-01-20-12-52-50.jpg"
    ]
    enscapeImages.forEach(img => {
      images.push(`${basePath}/${img}`)
    })
  } else if (project.id === "kherwadi-under-bridge") {
    // Kherwadi has numbered images and KSP images
    const numberedImages = [8, 9, 10, 11, 12]
    numberedImages.forEach(num => {
      images.push(`${basePath}/${num}.jpg`)
    })
    const kspImages = ["KSP_2755.JPG", "KSP_2757.JPG", "KSP_2770.JPG", "KSP_2774.JPG", "KSP_2776.JPG"]
    kspImages.forEach(img => {
      images.push(`${basePath}/${img}`)
    })
  } else if (project.id === "amrut-urban-forests") {
    // AMRUT has specific numbered images
    const imageNumbers = [1, 2, 3, 4, 5, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18]
    imageNumbers.forEach(num => {
      images.push(`${basePath}/${num}.jpg`)
    })
    images.push(`${basePath}/Picture1.jpg`)
  } else {
    // Standard numbered images starting from 1
    for (let i = 1; i <= count; i++) {
      images.push(`${basePath}/${i}.jpg`)
    }
  }
  
  return images
}

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const loadProject = async () => {
      const resolvedParams = await params
      const foundProject = projects.find(p => p.id === resolvedParams.id)
      if (foundProject) {
        setProject(foundProject)
        setImages(getProjectImages(foundProject))
      }
    }
    loadProject()
  }, [params])

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0e0f0f] text-[#FEFCE1]">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-light mb-4">Project not found</h1>
            <Button 
              onClick={() => router.push('/#works')}
              variant="outline"
              className="border-white/20 text-[#FEFCE1] hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Works
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0e0f0f] text-[#FEFCE1]">
      <Navbar />
      
      <div className="mx-auto max-w-[1365px] px-5 md:px-8 pt-24 md:pt-28 pb-16 md:pb-20">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            onClick={() => router.push('/#works')}
            variant="ghost"
            className="text-[#FEFCE1]/70 hover:text-[#FEFCE1] hover:bg-white/5 p-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Works
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-[#FEFCE1]/80 mb-4">
              {project.tag}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#FEFCE1] mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-[#FEFCE1]/70 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-[#FEFCE1] mb-8">Project Gallery</h2>
          <ImageGallery images={images} projectTitle={project.title} />
        </div>
      </div>
    </div>
  )
}
