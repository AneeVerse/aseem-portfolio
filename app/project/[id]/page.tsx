"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageGallery } from "@/components/ui/image-gallery"
import Navbar from "@/components/navbar"

// Import project data from works.tsx to maintain consistency
import { projects } from "@/components/section/works"

// Export projects for external use
export { projects }

// Original project data kept for compatibility
const legacyProjects = [
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

// Detailed project information that matches with existing projects
const projectDetails: { [key: string]: any } = {
  "mumbadevi-temple-revamp": {
    plotArea: "Temple Precinct Area",
    location: "Mumbai",
    client: "Brihanmumbai Mahanagar Palika (BMC)",
    fullTitle: "PROPOSED INTEGRATED COMMUNITY DEVELOPMENT & BEAUTIFICATION OF MUMBADEVI TEMPLE PRECINCT",
    description: `Mumbadevi has a tremendous cultural connotation, and is therefore an extremely important center for state, as well as national tourism.

• Lacks a sense of grandeur for the Temple, affecting the image of the CITY.
• Initiate temple precinct development, first of its kind in the city, in order to protect heritage, encourage economic generation, rehabilitation, and adaptive reuse and safeguard its intangible heritage. (Mumbai has derived its name from the Mumbai devi)
• To develop a heritage walk zone around the temple complex & Zaveri Bazar area in future
• Development of the adjoining streets by designing uniform shop facades wherever possible to encourage tourism development by preserving the character of the space.
• Development of road network so that pedestrians can be given more importance
• Introduction of electric vehicles for senior citizens & people with special needs
• Identifying the spaces for future development by not losing character of precinct.
• Allocating proper spaces for religious activities (hawan etc)
• Integration of garden area as a planned amenity space
• Reorganization of various MCGM offices (PCO, SWD etc) or chowkies in the area
• Realigning the shops for decluttering of space without hampering their visibility
• Creation of adequate security arrangements
• Creating adequate toilet & other amenities for pilgrims`,
    projectStatus: "Ongoing",
    keyHighlights: [],
    impactOutcomes: []
  },
  "powai-lake-restoration": {
    plotArea: "67 acres water + 33 acres land",
    location: "Powai, Mumbai",
    client: "Brihanmumbai Mahanagar Palika (BMC)",
    fullTitle: "POWAI WATERFRONT DEVELOPMENT",
    description: `The Powai lake promenade was practically full of rank vegetation.
Vehicular access impossible due to uneven land profile and presence of wild trees. Removal of stone boulders and leveling of the land was highly impractical.
The concept of using these existing site elements to develop the park design profile was hence put forward.
The Ganesh Ghats were maintained and a nature park was developed as a passive recreational space with the lawns, Walkways and Amphitheatre to enjoy the musical fountain`,
    keyHighlights: [
      "Maintained existing Ganesh Ghats",
      "Nature park development as passive recreational space",
      "Lawns, walkways and amphitheatre design",
      "Musical fountain feature"
    ],
    impactOutcomes: []
  },
  "nerul-lake-jewel": {
    plotArea: "55 acres around a 61 Acre water body",
    location: "Navi Mumbai",
    client: "Navi Mumbai Municipal Corporation (NMMC)",
    fullTitle: "JEWEL OF NAVI MUMBAI, HOLDING POND, NAVI MUMBAI",
    description: `The "Jewel" is Conceptualized as a City Centre.
Site is strategically located adjoining the iconic Palm Beach Road.
Entire master plan is designed as a Leisure and Health centric development.
Total Landmass available for Beautification is 55 acres around a 61 Acre water body. This location is already frequented by morning and evening walkers / joggers.
Watching Sunrise and Sunset on the waterfront is a popular leisure activity.`,
    keyHighlights: [
      "City Centre concept development",
      "Strategic location on Palm Beach Road",
      "Leisure and Health centric design",
      "Popular sunrise and sunset viewing spot",
      "Morning and evening walker destination"
    ],
    impactOutcomes: []
  },
  "amrut-urban-forests": {
    plotArea: "Multiple sites across 10 cities",
    location: "Maharashtra (NaviMumbai, Thane, Pune, Kalyan, Ambernath, Ulhasnagar, Nanded, Shirdi, Jalgaon, Panvel)",
    client: "Urban development department – Government of Maharashtra",
    fullTitle: "GREEN SPACE DEVELOPMENT UNDER AMRUT MISION IN 10 CITIES IN MAHARASHTRA",
    description: `Assessment of available spaces on basis of the demographics, soil condition, topography and existing vegetation led to design of different concepts for urban forests.
• Selection of native species as per soil conditions to create Urban Forests as Nature Based Solutions
• Guidelines for the selection, specifications for planting
• Use of permeable surfaces
• Sustainable development
• Community well-being
• Holding ponds
• Non-Paved Pathways
• Collaboration between government authorities, local communities, and other stakeholders`,
    keyHighlights: [
      "Native species selection based on soil conditions",
      "Nature Based Solutions approach",
      "Permeable surface usage",
      "Community well-being focus",
      "Government-community collaboration"
    ],
    impactOutcomes: []
  },
  "oxy-park": {
    plotArea: "Wasteland Area",
    location: "TAKKA CHOWK, PANVEL",
    client: "KOSHISH FOUNDATION - THAKUR INFRAPROJECT PVT LTD",
    fullTitle: "OXY PARK- PANVEL",
    description: `The design concept is to create a Botanical garden kind of a space along the city roads. Maximum number of species with signages. Wasteland Area utilized for increasing amenity value for people`,
    keyHighlights: [
      "Botanical garden concept along city roads",
      "Maximum species diversity with educational signages",
      "Wasteland utilization for community benefit",
      "Increased amenity value for residents"
    ],
    impactOutcomes: []
  },
  "mahindra-tower-chakan": {
    plotArea: "687 acres",
    location: "CHAKAN MIDC",
    client: "MAHINDRA",
    fullTitle: "LANDSCAPE MASTER PLAN FOR 687 ACRES AT MAHINDRA VEHICULE MANUFACTURERS LTD., CHAKAN MIDC",
    description: `The site located in Chakan, Pune had thick black soil which was removed during the construction of the buildings. (687 ACRES)
• The owner wanted to entitle the project under green building but the major challenge during landscape design was the rock filling of about 15-20 ft to level the land.
• The entire existing black soil was altogether removed and reused with other organic soil amendments to increase soil fertility and micro fauna. The admin building later received the gold rating.
• Due to the hot and dry climate of Pune, tall shade trees were proposed.
• Avenues were created along roads and shrubbery was grown between individual blocks.
• The project consists of one of the finest buildings in the entire 678 acres campus of the Mahindra Factory at Chakan, housing the top executives of the company. The landscape offers an outdoor experience to the office goers along with fostering the ethos of the company in the form of a DYNAMIC MURAL.
• The mural casts its shadow on the wall behind and looks different in the different times of the day. It has all the values and beliefs of the company that are visible to people as they walk through the isle to enter the building. Parking, setouts etc. are provided to accentuate the landscape.`,
    keyHighlights: [
      "Gold rating green building certification",
      "Soil fertility enhancement with organic amendments",
      "Climate-appropriate tall shade trees",
      "Dynamic mural representing company ethos",
      "Executive campus landscaping"
    ],
    impactOutcomes: ["IGBC Gold Rating Achievement"]
  },
  "ihitc-jaipur": {
    plotArea: "Large institutional campus",
    location: "Jaipur, Rajasthan",
    client: "Indo-Netherlands Collaboration",
    fullTitle: "INTERNATIONAL HORTICULTURE INNOVATION, TRAINING CENTRE (IHITC) IN JAIPUR, RAJASTHAN",
    description: `The proposed master plan is a formal and axial composition which clearly demarcates academic, residential and recreational areas.
• The main driveway and the footpath along the axes have been segregated by a continuous green strip at two heights to act as a visual buffer.
• A 6m wide tree belt creates a green visual linkage system.
• Provision of large areas of open spaces and soft landscape allowing for improved storm water filtrations, ground water recharge, and reduced heat gains or lighting from paved surfaces.
• Strategic location of trees aiding wind direction, reducing summer heat impact, & maximising the opportunity. An effort to provide seamless transition from inside to outside spaces making learning a better experience`,
    keyHighlights: [
      "Formal axial composition design",
      "Green visual linkage system",
      "Storm water management integration",
      "Climate-responsive tree placement",
      "Seamless indoor-outdoor learning spaces"
    ],
    impactOutcomes: []
  },
  "kherwadi-under-bridge": {
    plotArea: "Under-bridge area",
    location: "Kherwadi, Western Express Highway, Mumbai",
    client: "Brihanmumbai Mahanagar Palika (BMC)",
    fullTitle: "REJUVENATION OF FLYOVER AT KHERWADI",
    description: `The kherwadi flyover lies on the western express highway in Mumbai and is at a prominent location. The underbridge areas were used by squatters and illegal parking of vehicles. The need to rejuvenate the space, making it functionally usable to nearby residential zone was felt.
• The area underneath was raised to accommodate seating above the level of exhaust pipes of the fast moving traffic. Either sides was developed specifically as active & passive zone. The active zone has a children play area with seating and the passive zone has a digital library, chess boards and a sculpture depicting that the space is for a quieter recreation.
• Colours were added to make the space inviting & striking, Seating was designed to offer zero space to lie down for the squatters. Play equipment was inclusive & different from what is always seen in most public parks for better maintenance`,
    keyHighlights: [
      "Elevated seating above traffic exhaust level",
      "Active and passive recreational zones",
      "Digital library and chess facilities",
      "Anti-squatter seating design",
      "Inclusive play equipment design"
    ],
    impactOutcomes: []
  },
  "gandhi-udyan": {
    plotArea: "Park area overlooking lake",
    location: "Devale Lake, Panvel",
    client: "Panvel Municipal Corporation",
    fullTitle: "RASHTRAPITA MAHATMA GANDHI UDYAAN, DEVALE LAKE, PANVEL",
    description: `The project overlooks an old lake and an existing park that needs rejuvenation as it is much lower than the peripheral newly constructed road.
• It has the Mahatma Gandhi Statue and facilities provided are an amphitheater with a floating stage, Children play area, Open gym, acupressure pathways and seat outs.`,
    keyHighlights: [
      "Lake-facing location",
      "Mahatma Gandhi statue centerpiece",
      "Floating stage amphitheater",
      "Health and wellness facilities",
      "Multi-generational amenities"
    ],
    impactOutcomes: []
  },
  "panvel-theme-parks": {
    plotArea: "Multiple park sites",
    location: "Panvel",
    client: "Panvel Municipal Corporation",
    fullTitle: "THEME PARKS FOR PANVEL MUNICIPAL CORPORATION",
    description: `Around 11 Theme parks and community or neighborhood gardens have been designed and work is in progress for the PMC. These are based on different themes like Astronomy Park, Dinosaur Park, Biodiversity Park, Panchtatva Park, Readers Paradise, Farmland and others.
• Each park has security room, Mali Room, Drinking water fountain, Toilet blocks.
• Amphitheatre, Acupressure pathway, Open gym, Bare play areas, Mediation & Yoga zone, Senior Citizen area etc. are provided depending upon the need and size of the park.
• Selfie points in terms of sculptures, information Signages etc. along with plantation is provided

The Children Traffic Training Park consists of a mini–City Chowk showing different City structures like the fire station, police station, petrol pump, hospital, school etc.
• It exhibits the different traffic signs in relevant to the city elements. There are Car and Two-wheeler/Cycle driving tracks for children which they can ride and experience the traffic rules. The children will be trained in following all traffic rules.
• It has a Railway Station, a children play area, and an Amphitheatre too.`,
    keyHighlights: [
      "11 themed parks with diverse concepts",
      "Comprehensive amenity blocks",
      "Educational traffic training features",
      "Multi-generational facilities",
      "Interactive learning environments"
    ],
    impactOutcomes: []
  },
  "magnum-opus-juhu": {
    plotArea: "Residential Complex",
    location: "Juhu, Mumbai",
    client: "Private Developer",
    fullTitle: "MAGNUM OPUS., JUHU",
    description: `Residential Complex with personalized back yard garden on Ground floor facing the Mangroves.
• Seasonal Blooms, Topiary Plants, seasonal variations were key factors of the landscape.`,
    keyHighlights: [
      "Mangrove-facing gardens",
      "Seasonal bloom planning",
      "Topiary plant features",
      "Personalized outdoor spaces"
    ],
    impactOutcomes: []
  },
  "juhi-chawla-residence": {
    plotArea: "Private Residence",
    location: "Mumbai",
    client: "Actress Juhi Chawla Mehta",
    fullTitle: "VEER BHAVAN- ACTRESS JUHI CHAWLA's RESIDENCE",
    description: `Celebrity Residence of Actress Juhi Chawla Mehta was designed with seasonal blooms and shade loving plants.
• The garden periphery had tall trees and creating a color variation with greens was the key focus in the landscape.
• The Central building had plantation pockets around it which were connected seamlessly through Pebbles and ground covers.`,
    keyHighlights: [
      "Celebrity residence landscaping",
      "Seasonal bloom integration",
      "Color variation through greens",
      "Seamless connectivity design",
      "Privacy-focused tall tree periphery"
    ],
    impactOutcomes: []
  },
  "hiranandani-estate-powai": {
    plotArea: "300+ acres",
    location: "Powai, Mumbai",
    client: "Hiranandani Group",
    fullTitle: "HIRANANDANI ESTATE, POWAI",
    description: `The Hiranandani Estates at Thane were landscaped with wide expanses of lawns interconnected by pathways fringed with different Palm species.`,
    keyHighlights: [
      "Wide lawn expanses",
      "Palm species-lined pathways",
      "Interconnected landscape design",
      "Township-scale planning"
    ],
    impactOutcomes: []
  },
  "palm-beach-residency": {
    plotArea: "Residential Township",
    location: "Mumbai",
    client: "Private Developer",
    fullTitle: "PALM BEACH RESIDENCY",
    description: `Residential township landscaping project designed to provide modern amenities and green spaces for residents.

• Focus on creating sustainable living environment
• Integration of recreational facilities within the township
• Landscaping designed to enhance community living
• Green corridors and open spaces for residents`,
    keyHighlights: [
      "Residential township landscaping",
      "Community-focused design",
      "Green space integration",
      "Modern amenity planning"
    ],
    impactOutcomes: []
  },
  "the-address-wadhwa": {
    plotArea: "5+ acre podium",
    location: "Ghatkopar (E), Mumbai",
    client: "WADHWA DEVELOPERS",
    fullTitle: '"THE ADDRESS", GHATKOPAR (E) – WADHWA DEVELOPERS',
    description: `A podium of more than 5 acre, this landscape had swimming pools, pergolas, senior citizen areas, yoga & Meditation areas, flower beds, and children play areas
• Attempt was made to use interactive plants in toddler areas and fragrant in meditation zones. The scattered lawns provided a green roof effect with walkable zones.`,
    keyHighlights: [
      "5+ acre podium landscaping",
      "Interactive plants for toddlers",
      "Fragrant plants in meditation zones",
      "Green roof effect design",
      "Multi-generational amenities"
    ],
    impactOutcomes: ["IGBC Platinum Rating"]
  }
}

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

        {/* Detailed Project Information */}
        {projectDetails[project.id] && (
          <div className="mb-16">
            <h2 className="text-2xl font-light text-[#FEFCE1] mb-8">Project Details</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Project Specifications */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-medium text-[#FEFCE1] mb-4">Project Specifications</h3>
                  <div className="space-y-3">
                    {projectDetails[project.id].plotArea && (
                      <div>
                        <span className="text-[#FEFCE1]/60 text-sm">Plot Area:</span>
                        <p className="text-[#FEFCE1] text-sm">{projectDetails[project.id].plotArea}</p>
                      </div>
                    )}
                    {projectDetails[project.id].location && (
                      <div>
                        <span className="text-[#FEFCE1]/60 text-sm">Location:</span>
                        <p className="text-[#FEFCE1] text-sm">{projectDetails[project.id].location}</p>
                      </div>
                    )}
                    {projectDetails[project.id].client && (
                      <div>
                        <span className="text-[#FEFCE1]/60 text-sm">Client:</span>
                        <p className="text-[#FEFCE1] text-sm">{projectDetails[project.id].client}</p>
                      </div>
                    )}
                    {projectDetails[project.id].projectStatus && (
                      <div>
                        <span className="text-[#FEFCE1]/60 text-sm">Project Status:</span>
                        <p className="text-[#FEFCE1] text-sm">{projectDetails[project.id].projectStatus}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Key Highlights */}
                {projectDetails[project.id].keyHighlights && projectDetails[project.id].keyHighlights.length > 0 && (
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-lg font-medium text-[#FEFCE1] mb-4">Key Highlights</h3>
                    <ul className="space-y-2">
                      {projectDetails[project.id].keyHighlights.map((highlight: string, index: number) => (
                        <li key={index} className="text-[#FEFCE1]/80 text-sm flex items-start">
                          <span className="w-2 h-2 bg-[#FEFCE1]/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Impact & Outcomes */}
                {projectDetails[project.id].impactOutcomes && projectDetails[project.id].impactOutcomes.length > 0 && (
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-lg font-medium text-[#FEFCE1] mb-4">Impact & Outcomes</h3>
                    <ul className="space-y-2">
                      {projectDetails[project.id].impactOutcomes.map((outcome: string, index: number) => (
                        <li key={index} className="text-[#FEFCE1]/80 text-sm flex items-start">
                          <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Project Description */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-medium text-[#FEFCE1] mb-4">
                    {projectDetails[project.id].fullTitle || "Project Description"}
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-[#FEFCE1]/80 text-sm leading-relaxed whitespace-pre-line">
                      {projectDetails[project.id].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
