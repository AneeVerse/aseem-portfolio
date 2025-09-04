import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Digital Branding",
    desc: "Strategic, recognizable brand systems across digital touchpoints.",
  },
  {
    title: "Visual Design",
    desc: "Elegant UI and rich visuals that communicate clearly.",
  },
  {
    title: "UX Research",
    desc: "Evidence-led decisions through interviews, mapping and testing.",
  },
  {
    title: "Art Direction",
    desc: "Cohesive creative direction for campaigns and product launches.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#0e0f0f] text-[#FEFCE1]">
      <div className="mx-auto max-w-[1365px] px-5 md:px-8 py-14 md:py-20">
        <h2 className="text-4xl md:text-6xl lg:text-[48px] font-normal tracking-tight">Services</h2>

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-8 justify-items-stretch">
          {services.map((s, i) => {
            const index = String(i + 1).padStart(2, "0")
            const spanClass = i === 1 || i === 2 ? "md:col-span-6 lg:col-span-7" : "md:col-span-6 lg:col-span-5"

            return (
              <article
                key={s.title}
                className={`group relative rounded-2xl bg-[#141513] border border-white/8 hover:border-white/15 transition-colors p-8 md:p-10 min-h-[220px] md:min-h-[240px] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ${spanClass}`}
              >
                <span className="absolute left-5 top-5 inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs text-[#FEFCE1]/70 ring-1 ring-white/10 bg-white/[0.03] group-hover:bg-[#FEFCE1] group-hover:text-[#141513] transition-colors">
                  {index}
                </span>

                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 inline-flex items-center justify-center rounded-md ring-1 ring-white/10 bg-white/[0.03] px-2.5 py-1 text-[#FEFCE1]/70 group-hover:text-[#FEFCE1]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>

                <h3 className="mt-8 text-2xl md:text-3xl font-semibold">{s.title}</h3>
                <p className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-[#FEFCE1]/70">{s.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
