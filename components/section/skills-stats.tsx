const skills = ["Figma", "Photoshop", "Webflow", "Framer", "After Effects", "Illustrator"]

export function SkillsStatsSection() {
  return (
    <section className="bg-[#0B0C0B] text-[#EAE6CF]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Skills */}
          <article className="rounded-xl bg-[#141513] ring-1 ring-white/8 p-5 lg:col-span-2">
            <h3 className="text-sm font-medium">Skills</h3>
            <ul className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-[#0B0C0B] px-3 py-2 text-center text-xs ring-1 ring-white/10 text-[#EAE6CF]/85"
                >
                  {s}
                </li>
              ))}
            </ul>
          </article>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <article className="rounded-xl bg-[#141513] ring-1 ring-white/8 p-5">
              <div className="text-2xl font-semibold">12</div>
              <div className="mt-1 text-xs text-[#EAE6CF]/60">Years Experience</div>
            </article>
            <article className="rounded-xl bg-[#141513] ring-1 ring-white/8 p-5">
              <div className="text-2xl font-semibold">3K</div>
              <div className="mt-1 text-xs text-[#EAE6CF]/60">Completed Hours</div>
            </article>
          </div>
        </div>

        {/* Availability chip */}
        <div className="mt-5 flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#141513] px-4 py-2 text-xs ring-1 ring-white/10 hover:bg-[#121311]"
          >
            Hire Me
          </a>
          <span className="text-xs text-[#EAE6CF]/60">Or DM on Twitter</span>
        </div>
      </div>
    </section>
  )
}
