"use client"

import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Post = {
  img: string
}

const posts: Post[] = [
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-01.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-02.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-04.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-06.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-08.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-09.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-10.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-11.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-12.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-13.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-14.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-16.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-17.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-18.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-19.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-27.jpg" },
  { img: "/images/articles/Revised Newsletters/ACE Scanner_2025_08_29-28.jpg" },
]

// Helper: clamp
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(n, max))

export function ArticlesSection() {
  const trackRef = React.useRef<HTMLDivElement>(null)
  const isDraggingRef = React.useRef(false)
  const startXRef = React.useRef(0)
  const startScrollRef = React.useRef(0)

  // Drag to scroll with Pointer Events (supports mouse + touch)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el) return
    isDraggingRef.current = true
    startXRef.current = e.clientX
    startScrollRef.current = el.scrollLeft
    el.setPointerCapture(e.pointerId)
    el.classList.add("cursor-grabbing")
    // Prevent text selection during drag
    e.preventDefault()
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el || !isDraggingRef.current) return
    const dx = e.clientX - startXRef.current
    // Smooth dragging sensitivity
    el.scrollLeft = startScrollRef.current - (dx * 1.5)
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el) return
    isDraggingRef.current = false
    // Optional: snap to nearest card after drag
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"))
    if (cards.length) {
      const cardWidth = cards[0].offsetWidth
      const gap = Number.parseInt(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "24", 10) || 24
      const step = cardWidth + gap
      const target = Math.round(el.scrollLeft / step) * step
      el.scrollTo({ left: clamp(target, 0, el.scrollWidth), behavior: "smooth" })
    }
    el.classList.remove("cursor-grabbing")
    try {
      el.releasePointerCapture((e as any).pointerId)
    } catch {}
  }

  const scrollStep = (dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const gap = Number.parseInt(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "24", 10) || 24
    const step = (card?.offsetWidth || 360) + gap
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  return (
    <section id="articles" className="bg-[#0e0f0f] text-[#FEFCE1] border-b border-white/5">
      <div className="mx-auto max-w-[1365px] px-5 md:px-8 py-8 md:py-12">
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#FEFCE1]/85">Articles</h2>

        {/* Track */}
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          className="
            mt-6 md:mt-8
            flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory
            scroll-smooth select-none cursor-grab
            pb-4 [-ms-overflow-style:none] [scrollbar-width:none]
            [user-select:none] [-webkit-user-select:none] [-moz-user-select:none]
          "
          // hide scrollbar (WebKit)
          style={{ WebkitOverflowScrolling: "touch" as any }}
        >
          {/* hide scrollbar (WebKit) */}
          <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}`}</style>

          {posts.map((p, index) => (
            <article
              key={`newsletter-${index}`}
              data-card
              className="
                min-w-[280px] sm:min-w-[320px] lg:min-w-[360px]
                w-[280px] sm:w-[320px] lg:w-[360px]
                h-[280px] sm:h-[320px] lg:h-[360px]
                snap-start rounded-xl bg-[#141513]/50 
                p-4 md:p-6 group
                hover:bg-[#141513]/70 transition-all duration-500
                border border-white/20 hover:border-white/60
                hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
                pointer-events-none"
            >
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src={p.img || "/placeholder.svg?height=240&width=420&query=article%20image"}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
              </div>
            </article>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-4 md:mt-6 flex items-center hidden md:flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous articles"
            onClick={() => scrollStep(-1)}
            className="h-10 w-10 rounded-full bg-[#141513] ring-1 ring-white/10 text-[#FEFCE1]/80 hover:text-[#FEFCE1] hover:ring-white/20 transition"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeft className="mx-auto h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next articles"
            onClick={() => scrollStep(1)}
            className="h-10 w-10 rounded-full bg-[#141513] ring-1 ring-white/10 text-[#FEFCE1]/80 hover:text-[#FEFCE1] hover:ring-white/20 transition"
          >
            <span className="sr-only">Next</span>
            <ChevronRight className="mx-auto h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
