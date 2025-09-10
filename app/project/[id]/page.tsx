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
    plotArea: "7530 sq.mt",
    location: "Mumbai",
    client: "Brihanmumbai Mahanagar Palika (BMC)",
    fullTitle: "INTEGRATED COMMUNITY DEVELOPMENT & BEAUTIFICATION OF MUMBADEVI TEMPLE PRECINCT",
    description: `Mumbadevi has a tremendous cultural connotation, and is therefore an extremely important center for state, as well as national tourism.

• Lacks a sense of grandeur for the Temple, affecting the image of the CITY.
• Initiate temple precinct development, first of its kind in the city, in order to protect heritage, encourage economic generation, rehabilitation, and adaptive reuse and safeguard its intangible heritage. (Mumbai has derived its name from the Mumbai devi )
• To develop a heritage walk zone around the temple complex & Zaveri Bazar area in future
• Development of the adjoining streets by designing uniform shop facades wherever possible to encourage tourism development by preserving the character of the space.
• Development of the road network so that pedestrians can be given more importance
• Introduction of electric vehicles for senior citizens & people with special needs
• Identifying the spaces for future development by not losing character of precinct. 
• Allocating proper spaces for religious activities (hawan etc)
• Proper parking (Parking Tower Proposed) and preparation of land use.
• Integration of garden area as a planned amenity space
• Reorganization of various MCGM offices (PCO, SWD etc )or chowkies in the area
• Realigning the shops for decluttering of space without hampering their visibility
• Creation of adequate security arrangements
• Creating adequate toilet & other amenities for pilgrims`,
    projectStatus: "Ongoing",
    keyHighlights: [],
    impactOutcomes: []
  },
  "mahim-koliwada": {
    plotArea: "-",
    location: "Mahim, Mumbai",
    client: "Brihanmumbai Mahanagar Palika (BMC)",
    fullTitle: "PROPOSED INTERGRATED DEVELOPMENT & BEAUTIFICATION OF MAHIM KOLIWADA, MUMBAI",
    description: `Mahim Koliwada is a locality located in the Mahim neighbourhood of Mumbai, India. "Koliwada" refers to an area predominantly inhabited by the Koli community, which is a fishing community in Mumbai. It is situated on the western side of Mumbai, on the eastern bank of the Mithi River.

Accessibility to the fishing grounds has been affected due to the development of several infrastructural projects like Worli Sea Link and others, which may have affected the migratory routes of fishes, depleting their populations. As cities grow, the cost of living tends to rise. Fishermen and their families are facing increasing expenses for housing, education, healthcare, and other necessities. Since their incomes from fishing do not keep pace with the rising costs, it has resulted in financial hardships and a decline in their overall standard of living.

In an attempt to improve the quality of life, revive the Koli Community History, and Cultural Heritage of Mumbai, The Brihanmumbai Corporation and the State Government of Maharashtra has proposed the “INTEGRATED COMMUNITY DEVELOPMENT AND BEAUTIFICATION  OF MAHIM KOLIWADA” the  city’s first “Tourism Village” and perhaps the First “Tourism Village in a Metro City” in India, that will support the principles of sustainable development and will manage environmental risks effectively and seek to realise the opportunities arising from the positive management of its ecological, economic and social responsibilities.

Restored Public spaces are often the "engine" that drive tourism in many communities. This project thus beckons everyone to discover the hidden gem, Mahim Koliwada, where cultural wonders await curious travellers. Step into the world of the Koli community, Mumbai's proud original inhabitants, as they graciously open their doors to visitors seeking an authentic experience.`,
    keyHighlights: [],
    impactOutcomes: []
  },
  "worli-koliwada": {
    plotArea: "70 acres",
    location: "Worli Koliwada, Mumbai",
    client: "Brihanmumbai Mahanagar Palika (BMC)",
    fullTitle: "INTERGRATED DEVELOPKMENT & BEAUTIFICATION OF WORLI KOLIWADA, MUMBAI",
    description: `Worli Koliwada's strategic location, cultural heritage, and connection to the sea make it a cherished part of Mumbai's identity. Efforts to preserve and beautify the Koliwada aim to celebrate its legacy while ensuring sustainable development and community well-being.

Over the years, the city has grown, and the livelihoods of these fishermen has been greatly affected due to degradation of coastal habitats which serve as important breeding grounds and nurseries of fish resulting in decline of fish populations and reduced catch for the fishermen. 

To address these challenges, it is important to implement sustainable coastal management practices that balance urban development with the preservation of coastal ecosystems and the livelihoods of fishermen. Apart from including measures such as enforcing fishing regulations, promoting responsible fishing practices, implementing pollution control measures, creating protected marine areas, providing alternative livelihood options for fishermen, such as eco-tourism has yet to be explored. In an attempt to do so, the Brihanmumbai Mahanagar Pallika and State Government has proposed the INTEGRATED COMMUNITY DEVELOPMENT AND BEAUTIFICATIOJN AND BEAUTIFICATION of Worli Koliwada. Such a collaboration between government authorities, local communities, and other stakeholders will ensuring the sustainability of both urban growth and the fishing industry.

The Brihanmumbai Mahanagar Pallika and State Government is committed to providing a wide array of recreation and leisure opportunities to enhance overall health and community well-being. To achieve this goal, the Government authorities have proposed The Integrated Development of Worli Koliwada, which will mark the upliftment of 60 acres encompassed by this Koli Village, to provide all appropriate facilities and ambience to promote good health and to improve the overall quality of life of the Koli Community. It will be one of the first attempts and major project to create tourism village in the heart of a busiest Metro City like Mumbai.`,
    keyHighlights: [],
    impactOutcomes: []
  },
  "powai-lake-restoration": {
    plotArea: "67 acres water + 33 acres land",
    location: "Powai, Mumbai",
    client: "Brihanmumbai Mahanagar Palika (BMC)",
    fullTitle: "POWAI WATERFRONT DEVELOPMENT",
    description: `The Powai lake promenade was practically full of rank vegetation.
Vehicular access impossible due to uneven land profile and presence of wild trees.  Removal of stone boulders and leveling of the land was highly impractical.
The concept of using these existing site elements to develop the park design profile was hence put forward.
The Ganesh Ghats were maintained and a nature park was developed as a passive recreational space with the lawns, Walkways and Amphitheatre to enjoy  the musical fountain`,
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
  "godavari-riverfront": {
    plotArea: "-",
    location: "Panchavati, Nashik",
    client: "Nasik Smart City Development Corporation",
    fullTitle: "GODAVARI RIVERFRONT DEVELOPMENT AT PANCHAVATI, NASHIK",
    description: `The Godavari riverfront development is  intended to  develop the Panchavati precinct of the Goda river by  cleaning and beautifying the area and provide facilities  and restore the old glory of the riverfront.
The Godavari riverfront development and beautification is  aimed to provide elements and spaces for recreational  activities along with value addition.
The beautification is proposed considering the  submergence of the existing riverbank in floods, HFL while  adhering to the rules and regulations mentioned by NEERI  for waterfront development.
Provision of  amphitheater, open  air restaurant, water  bodies , play area, sculptures, green areas etc. shall   provide the natural recreational zones while use of natural  basalt flooring as paving material shall be a step towards  rejuvenating the old natural bank
Also include the reworking of the pedestrian and vehicular  driveways for hassle-free and smooth traffic movement`,
    keyHighlights: [],
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
    location: "JAIPUR, RAJASTHAN",
    client: "IHITC",
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
    location: "JAIPUR, RAJASTHAN",
    client: "MAGNUM OPUS, JUHU",
    fullTitle: "MAGNUM OPUS, JUHU",
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
    location: "JAIPUR, RAJASTHAN",
    client: "JUHI CHAWLA",
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
    location: "JAIPUR, RAJASTHAN",
    client: "HIRANANDANI",
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
    location: "NERUL",
    client: "WADHWA DEVELOPERS",
    fullTitle: '"PALM BEACH RESIDENCY", NERUL – WADHWA DEVELOPERS',
    description: `Podium landscape with swimming pool, play areas and aptly provided tree screens with seasonal flushes to break the monotony, in Navi Mumbai`,
    keyHighlights: [],
    impactOutcomes: []
  },
  "the-address-wadhwa": {
    plotArea: "5 acre",
    location: "GHATKOPAR (E)",
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
  let images: string[] = []

  // Prefer new work1 structure when categoryFolder is present
  const basePath = project.categoryFolder
    ? `/images/work1/${encodeURIComponent(project.categoryFolder)}/${encodeURIComponent(project.folder)}`
    : `/images/work/${encodeURIComponent(project.tag)}/${encodeURIComponent(project.folder)}`

  // Hand-curated lists based on actual files in work1
  switch (project.id) {
    case "amrut-urban-forests": {
      // Include the two provided drone videos in gallery
      images.push(
        "/images/work1/3.%20Amrut%20van-%20Pocket%20Forest/1.mp4",
        "/images/work1/3.%20Amrut%20van-%20Pocket%20Forest/2.mp4"
      )
      break
    }
    case "mahim-koliwada": {
      const files = ["Front page.JPG", "Back Page.JPG"]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }
    case "worli-koliwada": {
      const files = ["Front Page.JPG", "Back Page.JPG"]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }
    case "shivneri-fort-precinct": {
      const files = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "WhatsApp Image 2025-09-09 at 6.34.09 PM.jpeg"]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }
    case "mumbadevi-temple-revamp": {
      for (let i = 1; i <= 11; i++) {
        images.push(`/images/work1/1.%20Heritage%20and%20Cultural/1.%20Mumbadevi/${i}.jpg`)
      }
      const enscape = [
        "Enscape_2025-01-20-12-36-33.jpg",
        "Enscape_2025-01-20-12-51-36.jpg",
        "Enscape_2025-01-20-13-07-08.jpg",
        "Enscape_2025-01-20-13-54-26.jpg",
        "Enscape_2025-01-20-16-09-16.jpg",
        "Enscape_2025-01-20-16-13-39.jpg",
      ]
      enscape.forEach(f => images.push(`/images/work1/1.%20Heritage%20and%20Cultural/1.%20Mumbadevi/${f}`))
      break
    }
    case "powai-lake-restoration": {
      const powai = [
        // Numbered images
        "1.JPG",
        "2.JPG",
        "3.JPG",
        "4.JPG",
        "5.JPG",
        "7.jpeg",
        // DSLR/phone shots
        "IMG_20180802_162749.jpg",
        "IMG_20180802_162820.jpg",
        "IMG_20180802_162845.jpg",
        "IMG_20180802_162850.jpg",
        "IMG_20210217_004035.jpg",
        "IMG_20210217_093948.jpg",
        "IMG_2165.jpg",
        "IMG_2166.jpg",
        "IMG_2167.jpg",
        "IMG_2278.PNG",
      ]
      powai.forEach(f => images.push(`${basePath}/${f}`))
      break
    }
    case "godavari-riverfront": {
      // Top-level images
      const godavariTopLevel = [
        "04576ffb-c392-4bb7-9e4d-f8b21f36cfe3.jpg",
        "3864f023-5f20-463d-9da5-d963b50c98f6.jpg",
        "DJI_20250731152159_0189_D (1).JPG",
        "DJI_20250731152159_0189_D.JPG",
        "DJI_20250731152229_0190_D (1).JPG",
        "DJI_20250731152229_0190_D.JPG",
        "DJI_20250731152232_0191_D.JPG",
        "DJI_20250731152244_0192_D (1).JPG",
        "DJI_20250731152244_0192_D.JPG",
        "DJI_20250731152259_0193_D (1).JPG",
        "DJI_20250731152259_0193_D.JPG",
        "DJI_20250731152311_0194_D.JPG",
        "DJI_20250731152332_0195_D.JPG",
        "DJI_20250731152348_0196_D.JPG",
        "DJI_20250731152352_0197_D.JPG",
        "DJI_20250731152414_0198_D.JPG",
        "DJI_20250731152424_0200_D (1).JPG",
        "DJI_20250731152424_0200_D.JPG",
        "DJI_20250731152550_0203_D.JPG",
        "DJI_20250731152602_0204_D.JPG",
        "DJI_20250731152735_0207_D (1).JPG",
        "DJI_20250731152735_0207_D (2).JPG",
        "DJI_20250731152735_0207_D.JPG",
        "DJI_20250731152744_0208_D.JPG",
        "DJI_20250731152803_0211_D.JPG",
        "DJI0783.jpg",
        "DJI0823.jpg",
        "DJI0861.jpg",
        "DJI0922.jpg",
        "DSC08870-HDR-2.jpg",
        "DSC08880.jpg",
        "DSC08960.jpg",
        "DSC09391-HDR.jpg",
        "DSC09537 (1).jpg",
        "DSC09537.jpg",
        "DSVC08935.jpg",
        "IMG_20180615_162947.jpg",
        "IMG20231017150358.jpg",
        "IMG20231017150439.jpg",
        "WhatsApp Image 2025-08-01 at 9.58.53 AM.jpeg",
      ]
      godavariTopLevel.forEach(f => images.push(`${basePath}/${f}`))

      // Construction pictures (nested directory)
      const constructionPics = [
        "328634.jpeg",
        "IMG_20201103_130111.jpg",
        "IMG_20201103_130205.jpg",
        "IMG_20201103_132106.jpg",
        "IMG_20210225_141118.jpg",
        "IMG_20210317_154419.jpg",
        "IMG_20210317_154600.jpg",
        "IMG_20210317_162419.jpg",
        "IMG_20210610_113436.jpg",
        "IMG_20210610_113443.jpg",
        "IMG_20210831_163828.jpg",
        "IMG_20210831_163915.jpg",
        "IMG_20210831_164035.jpg",
        "IMG_20211005_132835.jpg",
        "IMG_20211005_133606.jpg",
        "IMG_20211005_133908.jpg",
        "IMG_20220204_115928.jpg",
        "IMG_20220204_120003.jpg",
        "IMG_20220204_133643.jpg",
        "IMG_20220204_133708.jpg",
        "IMG_20220204_134300.jpg",
        "IMG-20210107-WA0116.jpg",
      ]
      constructionPics.forEach(f => images.push(`${basePath}/Construction%20pics/${f}`))
      break
    }
    case "oxy-park": {
      for (let i = 1; i <= 16; i++) {
        images.push(`${basePath}/${i}.JPG`)
      }
      break
    }
    case "mahindra-tower-chakan": {
      // This project lives under an additional subfolder "1. Mahindra"
      const mahindraBase = `/images/work1/5.%20Industrial%20Landscapes/1.%20Mahindra/${encodeURIComponent(project.folder)}`
      for (let i = 1; i <= 12; i++) {
        images.push(`${mahindraBase}/${i}.jpg`)
      }
      break
    }
    case "ihitc-jaipur": {
      for (let i = 1; i <= 3; i++) {
        images.push(`${basePath}/${i}.jpg`)
      }
      break
    }
    case "the-address-wadhwa": {
      const files = [
        // Numbered images
      
        "2.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        // Facebook images
        "FB_IMG_1501662600355.jpg",
        "FB_IMG_1501662619998.jpg",
        "FB_IMG_1501662625044.jpg",
        "FB_IMG_1501662630508.jpg",
        "FB_IMG_1501662635160.jpg",
        "FB_IMG_1501662643948.jpg",
        "FB_IMG_1501662798858.jpg",
        "FB_IMG_1501662811629.jpg",
        "FB_IMG_1501662918995.jpg",
        "FB_IMG_1501662938053.jpg",
      ]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }
    case "juhi-chawla-residence": {
      for (let i = 1; i <= 6; i++) {
        images.push(`${basePath}/${i}.jpg`)
      }
      break
    }
    case "magnum-opus-juhu": {
      for (let i = 1; i <= 4; i++) {
        images.push(`${basePath}/${i}.jpg`)
      }
      break
    }
    case "hiranandani-estate-powai": {
      for (let i = 1; i <= 5; i++) {
        images.push(`${basePath}/${i}.jpg`)
      }
      break
    }
    case "palm-beach-residency": {
      for (let i = 1; i <= 7; i++) {
        images.push(`${basePath}/${i}.jpg`)
      }
      break
    }
    case "corporate-mahindra-park": {
      const files = ["IMG_20170906_152701.jpg","IMG_20170906_152747.jpg","IMG_20170906_152824 (1).jpg"]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }
    case "children-traffic-park-thane": {
      const files = [
        "DSC_9127.JPG","DSC_9144.JPG","DSC_9154.JPG","DSC_9159.JPG","DSC_9160.JPG","DSC_9163.JPG","DSC_9166.JPG","DSC_9173.JPG",
        "DSC_9214.JPG","DSC_9221.JPG","DSC_9230.JPG","DSC_9231.JPG","DSC_9264.JPG","DSC_9265.JPG","DSC_9272.JPG","DSC_9276.JPG",
        "DSC_9285.JPG","DSC_9290.JPG","DSC_9302.JPG","DSC_9325.JPG","DSC_9368.JPG","DSC_9419.JPG","DSC_9443.JPG","DSC_9470.JPG",
        "IMG-20200124-WA0105 (1).jpg","IMG-20200224-WA0157 (2).jpg","IMG-20200313-WA0191.jpg","IMG-20200313-WA0192 (1).jpg","IMG-20200313-WA0198 (1).jpg",
      ]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }
    case "nerul-lake-jewel": {
      const files = ["IMG_20170730_083102.jpg","IMG_20170730_083147.jpg","IMG_20170730_083744.jpg","IMG-20170312-WA0113.jpg"]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }
    case "gandhi-udyan": {
      // Top-level
      images.push(`${basePath}/1.JPG`, `${basePath}/2.JPG`)

      // site images 10th June 2022
      const june10 = [
        "WhatsApp Image 2022-08-11 at 3.44.22 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.44.23 PM (1).jpeg",
        "WhatsApp Image 2022-08-11 at 3.44.23 PM.jpeg",
      ]
      june10.forEach(f => images.push(`${basePath}/site%20images%2010th%20June%202022/${f}`))

      // site images 1st July 2022 (all)
      const july1 = [
        "WhatsApp Image 2022-08-11 at 2.55.26 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.29 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.31 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 2.55.32 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.34 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.35 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 2.55.37 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.40 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.42 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 2.55.44 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.46 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.47 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 2.55.48 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.49 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.50 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 2.55.51 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.54 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.55 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 2.55.57 PM.jpeg","WhatsApp Image 2022-08-11 at 2.55.58 PM.jpeg",
      ]
      july1.forEach(f => images.push(`${basePath}/site%20images%201st%20July%202022/${f}`))

      // site images 1st June 2021 (all)
      const june1 = [
        "WhatsApp Image 2022-08-11 at 3.13.42 PM.jpeg","WhatsApp Image 2022-08-11 at 3.13.43 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.13.48 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.13.48 PM (2).jpeg","WhatsApp Image 2022-08-11 at 3.13.48 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.13.49 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.13.49 PM.jpeg","WhatsApp Image 2022-08-11 at 3.13.50 PM (1).jpeg",
        "WhatsApp Image 2022-08-11 at 3.13.50 PM.jpeg","WhatsApp Image 2022-08-11 at 3.13.51 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.13.51 PM (2).jpeg",
        "WhatsApp Image 2022-08-11 at 3.13.51 PM.jpeg","WhatsApp Image 2022-08-11 at 3.13.52 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.13.52 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.13.53 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.13.53 PM (2).jpeg","WhatsApp Image 2022-08-11 at 3.13.53 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.13.54 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.13.54 PM.jpeg","WhatsApp Image 2022-08-11 at 3.13.55 PM (1).jpeg",
        "WhatsApp Image 2022-08-11 at 3.13.55 PM (2).jpeg","WhatsApp Image 2022-08-11 at 3.13.55 PM.jpeg","WhatsApp Image 2022-08-11 at 3.13.56 PM.jpeg",
      ]
      june1.forEach(f => images.push(`${basePath}/site%20images%201st%20June%202021/${f}`))

      // Site images 28th Dec 2021
      const dec28 = [
        "WhatsApp Image 2022-08-11 at 3.49.27 PM.jpeg","WhatsApp Image 2022-08-11 at 3.49.28 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.49.29 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.49.29 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.49.30 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.49.30 PM.jpeg",
      ]
      dec28.forEach(f => images.push(`${basePath}/Site%20images%2028th%20Dec%202021/${f}`))

      // site images 7th April 2022 (all)
      const apr7 = [
        "WhatsApp Image 2022-08-11 at 3.19.52 PM.jpeg","WhatsApp Image 2022-08-11 at 3.19.59 PM.jpeg","WhatsApp Image 2022-08-11 at 3.20.25 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.20.26 PM.jpeg","WhatsApp Image 2022-08-11 at 3.20.27 PM.jpeg","WhatsApp Image 2022-08-11 at 3.20.28 PM (1).jpeg",
        "WhatsApp Image 2022-08-11 at 3.20.28 PM.jpeg","WhatsApp Image 2022-08-11 at 3.20.29 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.20.29 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.20.30 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.20.30 PM (2).jpeg","WhatsApp Image 2022-08-11 at 3.20.30 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.20.31 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.20.31 PM (2).jpeg","WhatsApp Image 2022-08-11 at 3.20.31 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.20.32 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.20.32 PM (2).jpeg","WhatsApp Image 2022-08-11 at 3.20.32 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.20.33 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.20.33 PM (2).jpeg","WhatsApp Image 2022-08-11 at 3.20.33 PM.jpeg",
        "WhatsApp Image 2022-08-11 at 3.20.34 PM (1).jpeg","WhatsApp Image 2022-08-11 at 3.20.34 PM.jpeg",
      ]
      apr7.forEach(f => images.push(`${basePath}/site%20images%207th%20April%202022/${f}`))
      break
    }

    case "panchtatva-udyan-panvel": {
      const files = [
        "20250520_154052.jpg","20250520_154053.jpg","20250520_154109.jpg","20250520_154157.jpg","20250520_154240.jpg","20250520_154253.jpg",
        "20250520_154302.jpg","20250520_154314.jpg","20250520_154339.jpg","20250520_154403.jpg","20250520_154418.jpg","20250520_154431.jpg",
        "20250520_154506.jpg","20250520_154518.jpg","20250520_154656.jpg","20250520_154706.jpg","20250520_154711.jpg","20250520_154758.jpg",
        "20250520_154825.jpg","20250520_154833.jpg","20250520_154936.jpg","20250520_155138.jpg","20250520_155228.jpg","20250520_155239.jpg",
        "IMG-20241222-WA0022.jpg","IMG-20241222-WA0108.jpg","IMG-20250126-WA0003.jpg",
        "WhatsApp Image 2025-05-20 at 15.54.02 (1).jpeg","WhatsApp Image 2025-05-20 at 15.54.02 (2).jpeg","WhatsApp Image 2025-05-20 at 15.54.02.jpeg",
        "WhatsApp Image 2025-05-20 at 15.54.03.jpeg","WhatsApp Image 2025-05-20 at 15.54.04 (1).jpeg","WhatsApp Image 2025-05-20 at 15.54.04.jpeg",
        "WhatsApp Image 2025-05-20 at 15.54.05 (1).jpeg","WhatsApp Image 2025-05-20 at 15.54.05.jpeg","WhatsApp Image 2025-05-20 at 15.54.06 (1).jpeg",
        "WhatsApp Image 2025-05-20 at 15.54.07 (1).jpeg",
      ]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }

    case "dinosaur-park-panvel": {
      const files = [
        "20250524_120553.jpg","20250524_120608.jpg","20250524_120612.jpg","20250524_120615.jpg","20250524_120621.jpg","20250524_120646.jpg",
        "20250524_120657.jpg","20250524_120718.jpg","20250524_120726.jpg","20250524_120739.jpg","20250524_120901.jpg","20250524_120912.jpg",
        "20250524_120958.jpg","20250524_121003.jpg","20250524_121149.jpg","20250524_121152.jpg","20250524_121228.jpg","20250524_121235.jpg",
        "20250524_121250.jpg","20250524_121254.jpg","20250524_121504.jpg","20250524_121516.jpg","20250524_121528.jpg","20250524_121602.jpg",
        "20250524_121618.jpg","20250524_121800.jpg","20250524_121809.jpg","20250524_121837.jpg","20250524_121846.jpg",
        "IMG-20231204-WA0003.jpg","WhatsApp Image 2025-09-09 at 6.34.10 PM (1).jpeg","WhatsApp Image 2025-09-09 at 6.34.10 PM.jpeg","WhatsApp Image 2025-09-09 at 6.34.11 PM.jpeg",
      ]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }

    case "rainbow-garden-panvel": {
      const files = [
        "20250519_174927.jpg","20250519_174930.jpg","20250519_174950.jpg","20250519_175007.jpg","20250519_175011.jpg","20250519_175032.jpg",
        "20250519_175048.jpg","20250519_175053.jpg","20250519_175152.jpg","20250524_122754.jpg","20250524_122756.jpg","20250524_122803.jpg",
        "20250524_122815.jpg","20250524_122817.jpg","20250524_122832.jpg","20250524_122836.jpg","20250524_122840.jpg","20250524_122904.jpg",
        "20250524_122909.jpg","20250524_122912.jpg","20250524_122915.jpg","20250524_122923.jpg","20250524_122934.jpg","20250524_122948.jpg",
        "20250524_122957.jpg","20250524_123002.jpg","20250524_123005.jpg","20250524_123010.jpg","20250524_123014.jpg","20250524_123037.jpg",
        "20250524_123111.jpg","20250524_123145.jpg","20250524_123213.jpg","20250524_123231.jpg","20250524_123251.jpg","20250524_123305.jpg",
        "20250524_123347.jpg","20250524_123350.jpg","20250524_123416.jpg","20250524_123440.jpg","20250524_123459.jpg","20250524_123503.jpg",
        "20250524_123520.jpg","20250524_123524.jpg",
      ]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }

    case "sensory-garden-panvel": {
      const files = [
        "20250524_113628.jpg","20250524_113636.jpg","20250524_113644.jpg","20250524_113737.jpg","20250524_113749.jpg","20250524_113753.jpg",
        "20250524_113828.jpg","20250524_113850.jpg","20250524_113908.jpg","20250524_113927.jpg","20250524_113933.jpg","20250524_114048.jpg",
        "20250524_114111.jpg","20250524_114120.jpg","20250524_114138.jpg","20250524_114149.jpg","20250524_114248.jpg","20250524_114257.jpg",
        "20250524_114303.jpg","20250524_114346.jpg","20250524_114418.jpg","20250524_114606.jpg","20250524_114611.jpg","20250524_114619.jpg",
        "20250524_114626.jpg","20250524_114650.jpg","20250524_114654.jpg","20250524_114718.jpg","20250524_114737.jpg","20250524_114803.jpg",
        "20250524_114813.jpg","20250524_114817.jpg","20250524_114835.jpg","20250524_115022.jpg","20250524_115027.jpg",
        "4143ac99-4119-49d6-8447-af34ac547971.jpg","c70c147a-27a3-438b-961b-4a4946c174cb.jpg","WhatsApp Image 2025-06-24 at 13.06.19.jpeg",
      ]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }

    case "farm-land-park-panvel": {
      const files = [
        "WhatsApp Image 2025-07-04 at 1.24.41 PM.jpeg","WhatsApp Image 2025-07-04 at 1.24.42 PM (2).jpeg","WhatsApp Image 2025-07-04 at 1.24.42 PM (3).jpeg",
        "WhatsApp Image 2025-07-04 at 1.24.43 PM (1).jpeg","WhatsApp Image 2025-07-04 at 1.24.43 PM.jpeg","WhatsApp Image 2025-07-04 at 1.24.45 PM (2).jpeg",
        "WhatsApp Image 2025-07-04 at 1.24.45 PM (3).jpeg","WhatsApp Image 2025-07-04 at 1.24.45 PM.jpeg","WhatsApp Image 2025-07-04 at 1.24.46 PM (1).jpeg",
        "WhatsApp Image 2025-07-04 at 1.24.46 PM (2).jpeg","WhatsApp Image 2025-07-04 at 1.24.46 PM (3).jpeg","WhatsApp Image 2025-07-04 at 1.24.46 PM (4).jpeg",
        "WhatsApp Image 2025-07-04 at 1.24.46 PM.jpeg","WhatsApp Image 2025-07-04 at 1.24.47 PM (1).jpeg","WhatsApp Image 2025-07-04 at 1.24.47 PM (2).jpeg","WhatsApp Image 2025-07-04 at 1.24.47 PM.jpeg",
      ]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }

    case "topiary-park-pune": {
      const files = [
        "566051.jpeg","566071.jpeg","566073.jpeg","566079.jpeg","IMG_20220205_114732.jpg","IMG-20211124-WA0064.jpg",
        "IMG-20211124-WA0065.jpg","IMG-20211124-WA0067.jpg","IMG-20211124-WA0068.jpg",
      ]
      files.forEach(f => images.push(`${basePath}/${f}`))
      break
    }
    case "panvel-theme-parks": {
      // Replace gallery to show Astronomy Park images only
      const astronomyBase = "/images/work1/9.%20Public%20Park/4.%20Astronomy%20Park%20-%20Panvel%20Municipal%20Corporation"
      const files = [
        "20250524_124653.jpg",
        "20250524_124709.jpg",
        "20250524_124852.jpg",
        "20250524_124729.jpg",
        "20250524_124826.jpg",
        "20250524_124913.jpg",
        "20250524_124959.jpg",
        "20250524_124832.jpg",
        "20250524_124741.jpg",
        "20250524_124722.jpg",
        "20250524_124837.jpg",
        "20250524_125105.jpg",
        "20250524_125156.jpg",
        "20250524_124903.jpg",
        "20250524_124946.jpg",
        "20250524_125144.jpg",
        "20250524_125405.jpg",
        "20250524_124842.jpg",
        "20250524_124936.jpg",
        "20250524_124919.jpg",
        "20250524_125545.jpg",
        "20250524_125329.jpg",
        "20250524_125118.jpg",
        "20250524_124904.jpg",
        "20250524_125359.jpg",
        "20250524_125339.jpg",
        "20250524_125108.jpg",
        "20250524_125052.jpg",
        "20250524_125028.jpg",
        "19_Photo%20-%2019_Photo%20-%2019.jpg",
        "20250524_125211.jpg",
        "20250524_125518.jpg",
        "20250524_125348.jpg",
        "20250524_124925.jpg",
        "20250524_125547.jpg",
        "20250524_124805.jpg",
      ]
      files.forEach(f => images.push(`${astronomyBase}/${f}`))
      break
    }

    case "photos-important-events": {
      // Include all curated files from the provided folder
      const base = "/images/work1/10.%20Photos%20with%20important%20people%20or%20events"
      const files = [
        "IMG_20180213_161411%20(1).jpg",
        "IMG_20180213_161712%20(1).jpg",
        "IMG-20240828-WA0004%20(1).jpg",
        "IMG_7748%20(1).JPG",
        "IMG_7747%20(1).JPG",
        "IMG_20180209_154301%20(1).jpg",
        "IMG-20210813-WA0118.jpg",
        "IMG-20170322-WA0097%20(1).jpg",
        "IMG_20210813_134627%20(1).jpg",
        "IMG_20180207_111423%20(1).jpg",
        "IMG-20210813-WA0149.jpg",
        "IMG_7746%20(1).JPG",
        "IMG_1980.JPG",
        "IMG_7802%20(1).jpg",
        "IMG_9659%20(1).JPG",
        "IMG_20180209_153214.jpg",
        "IMG-20170322-WA0108.jpg",
      ]
      files.forEach(f => images.push(`${base}/${f}`))
      break
    }
    default: {
      // Fallback: try numbered jpgs 1..8 as a reasonable default
      for (let i = 1; i <= 8; i++) {
        images.push(`${basePath}/${i}.jpg`)
      }
    }
  }

  // Ensure at least one image (fallback to card image if available)
  if (images.length === 0 && project.img) {
    images.push(project.img)
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
