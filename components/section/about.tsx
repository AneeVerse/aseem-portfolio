import type React from "react"
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ArrowRight as ArrowRightUp,
  Star,
  Triangle,
  Hexagon,
  Circle,
  Gem,
  Palette,
} from "lucide-react"

const experience = [
  { role: "Full Time Freelancing", org: "@Olyve", start: "Apr 2023", end: "Present", logo: "/images/experience/sm-logo1.png" },
  { role: "Senior Product Designer", org: "@Copr", start: "Jan 2022", end: "Mar 2023", logo: "/images/experience/sm-logo2.png" },
  { role: "Creative Head", org: "@Proev Innovations", start: "May 2020", end: "Dec 2021", logo: "/images/experience/sm-logo3.png" },
  { role: "Design Intern", org: "@Agresar Works", start: "Feb 2019", end: "Mar 2020", logo: "/images/experience/sm-logo4.png" },
]

const education = [
  { role: "Master in Design", org: "@Cranfield University, UK", start: "2017", end: "2019", logo: "/images/experience/sm-logo5.png" },
  { role: "Msc in Innovation Design", org: "@DSGN School, UK", start: "2013", end: "2016", logo: "/images/experience/sm-logo6.png" },
  { role: "Bsc in IT", org: "@ACME Institute, UK", start: "2010", end: "2012", logo: "/images/experience/sm-logo7.png" },
]

const skills = [
  { name: "Figma", pct: "96%", icon: "/images/skills/figma-logo8.png" },
  { name: "Sketch", pct: "84%", icon: "/images/skills/skech-logo9.png" },
  { name: "Webflow", pct: "97%", icon: "/images/skills/webflow-logo10.png" },
  { name: "Illustrator", pct: "90%", icon: "/images/skills/ilustrator-logo11.png" },
  { name: "Framer", pct: "92%", icon: "/images/skills/framer-logo12.png" },
]

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <article className={`rounded-2xl bg-[#141513] ring-1 ring-white/8 ${className}`}>{children}</article>
}

function DateChip({ start, end }: { start: string; end: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[12px] font-medium text-[#EAE6CF]/80">
      {start}
      <span className="opacity-60">›</span>
      {end}
    </span>
  )
}

function ColoredBadge({
  Icon,
  gradient,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  gradient: string
}) {
  return (
    <div className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/10">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="relative flex h-full w-full items-center justify-center">
        <Icon className="h-4 w-4 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
      </div>
    </div>
  )
}

function ImageBadge({
  logo,
}: {
  logo: string
}) {
  return (
    <div className="relative h-16 w-16 overflow-hidden rounded-xl ">
      <div className="absolute inset-0 bg-[#0B0C0B]" />
      <div className="relative flex h-full w-full items-center justify-center p-3">
        <img 
          src={logo} 
          alt="Company logo" 
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="bg-[#0B0C0B] text-[#EAE6CF] border-b border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-14 md:py-20">
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#EAE6CF]">About Me</h2>

        {/* Top: Portrait + Intro */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portrait card */}
          <Card className="p-10 flex items-center justify-center">
            <img
              src="/images/hero-right.jpg"
              alt="Olyve portrait"
              className="h-36 w-36 md:h-40 md:w-40 rounded-full object-cover ring-1 ring-white/10"
            />
          </Card>

          {/* Intro card (spans 2 columns) */}
          <Card className="md:col-span-2 p-10">
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0B0C0B] px-4 py-2 text-sm ring-1 ring-white/10 text-[#EAE6CF]/80">
                <Sparkles className="h-4 w-4" />
                Hi 👋 I am Olyve Schwarz
              </span>
            </div>
            <p className="mt-6 text-base md:text-lg leading-7 text-[#EAE6CF]/80">
              A product designer with a knack for turning problems and opportunities into user‑driven strategic
              solutions.
            </p>
            <p className="mt-4 text-base md:text-lg leading-7 text-[#EAE6CF]/80">
              As a product designer, I specialize in creating unique visual identities for digital products. I believe that a
              stunning design starts with common values, open communication, and respect for your audience.
            </p>
          </Card>
        </div>

        {/* Middle: Experience + Education */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-10">
            <header className="flex items-center gap-3">
              <Briefcase className="h-8 w-8" />
              <h3 className="text-3xl font-medium">Experience</h3>
            </header>

            <ul className="mt-8 space-y-6">
              {experience.map((item, i) => {
                return (
                  <li key={item.role} className="flex items-center gap-4">
                    {/* left badge with logo */}
                    <ImageBadge logo={item.logo} />

                    {/* content */}
                    <div className="flex-1">
                      <div className="text-base md:text-lg">
                        <span className="font-medium">{item.role}</span>{" "}
                        <span className="text-[#EAE6CF]/70">{item.org}</span>
                      </div>
                      <div className="mt-1">
                        <DateChip start={item.start} end={item.end} />
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Card>

          <Card className="p-10">
            <header className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8" />
              <h3 className="text-3xl font-medium">Education</h3>
            </header>

            <ul className="mt-8 space-y-6">
              {education.map((item, i) => {
                return (
                  <li key={item.role} className="flex items-center gap-4">
                    <ImageBadge logo={item.logo} />
                    <div className="flex-1">
                      <div className="text-base md:text-lg">
                        <span className="font-medium">{item.role}</span>{" "}
                        <span className="text-[#EAE6CF]/70">{item.org}</span>
                      </div>
                      <div className="mt-1">
                        <DateChip start={item.start} end={item.end} />
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Card>
        </div>

        {/* Bottom: Skills + Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skills (span 2) */}
          <Card className="md:col-span-2 p-6 md:p-10">
            <h3 className="text-xl font-medium">Skills</h3>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {skills.map((s) => (
                <div key={s.name} className="flex flex-col items-center gap-3 md:gap-4">
                  <div className="rounded-xl bg-[#10110F] p-4 md:p-6 flex flex-col items-center justify-center gap-3 md:gap-5 hover:bg-[#0F100E] transition w-full aspect-square">
                    <img
                      src={s.icon || "/placeholder.svg?height=48&width=48&query=skill-icon"}
                      alt={`${s.name} logo`}
                      className="h-6 w-6 md:h-8 md:w-8"
                    />
                    <div className="text-xs md:text-sm text-[#EAE6CF]/70 font-medium">{s.pct}</div>
                  </div>
                  <div className="text-sm md:text-base text-[#EAE6CF] text-center">{s.name}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Stats stack */}
          <div className="flex flex-col gap-6">
            <Card className="p-6 md:p-10 h-full">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-4xl md:text-6xl lg:text-7xl font-semibold">12</div>
                <div className="mt-2 md:mt-3 text-sm md:text-base text-[#EAE6CF]/70">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </Card>
            <Card className="p-6 md:p-10 h-full">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-4xl md:text-6xl lg:text-7xl font-semibold">3K</div>
                <div className="mt-2 md:mt-3 text-sm md:text-base text-[#EAE6CF]/70">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTAs - moved outside of skills box */}
        <div className="mt-12 flex items-center gap-6 flex-wrap">
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base text-[#0B0C0B] ring-1 ring-white/10"
            style={{ background: "linear-gradient(180deg,#ECE8C8, #CFC99D)" }}
          >
            View Resume
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-base ring-1 ring-white/10 text-[#EAE6CF]/90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
