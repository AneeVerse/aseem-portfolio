"use client"

import React from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Avinash Salunke",
    role: "Wildlife Management & Environmental Expertise",
    quote:
      "I have known Dr. Aseem Gokarna since childhood, both as a dedicated student and a passionate practitioner of plant gardening. Her deep-rooted knowledge and commitment to urban greenery have been evident throughout her journey...",
    avatar: "/images/testimonals/1.jpg",
  },
  {
    name: "Ashok Suyal",
    role: "Senior Advisor | Startup Mentor | ESG Strategy",
    quote:
      "For Dr. Aseem being Passionate is not enough when it comes to caring for environment. She's an Eco Warrior and works towards conserving and spreading knowledge that asks for commitment that's addictive in nature...",
    avatar: "/images/testimonals/2.jpg",
  },
  {
    name: "Col Rajesh Dubey (Retd)",
    role: "Infrastructure & Corporate Management Professional",
    quote:
      "Dr Aseem was our first business partner to design green cover of our green field 700 acre plant in its first phase - highly professional and customer centric. Catered for all our needs. It is heartening to see her growing in experience...",
    avatar: "/images/testimonals/3.jpg",
  },
]

// Helper: clamp
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(n, max))

export function TestimonialsSection() {
  const trackRef = React.useRef<HTMLDivElement>(null)
  const isDraggingRef = React.useRef(false)
  const startXRef = React.useRef(0)
  const startScrollRef = React.useRef(0)
  const hasDraggedRef = React.useRef(false)

  // Drag to scroll with Pointer Events (supports mouse + touch)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el) return
    
    // Don't start drag if clicking on a link
    if ((e.target as HTMLElement).closest('a')) {
      return
    }
    
    isDraggingRef.current = true
    hasDraggedRef.current = false
    startXRef.current = e.clientX
    startScrollRef.current = el.scrollLeft
    el.setPointerCapture(e.pointerId)
    el.classList.add("cursor-grabbing")
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el || !isDraggingRef.current) return
    const dx = e.clientX - startXRef.current
    
    // If moved more than 5 pixels, consider it a drag
    if (Math.abs(dx) > 5) {
      hasDraggedRef.current = true
      // Maximum sensitivity for very easy dragging
      el.scrollLeft = startScrollRef.current - (dx * 12)
      e.preventDefault()
    }
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el) return
    isDraggingRef.current = false
    
    // Optional: snap to nearest card after drag
    if (hasDraggedRef.current) {
      const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-testimonial-card]"))
      if (cards.length) {
        const cardWidth = cards[0].offsetWidth
        const gap = Number.parseInt(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "24", 10) || 24
        const step = cardWidth + gap
        const target = Math.round(el.scrollLeft / step) * step
        el.scrollTo({ left: clamp(target, 0, el.scrollWidth), behavior: "smooth" })
      }
    }
    
    el.classList.remove("cursor-grabbing")
    try {
      el.releasePointerCapture((e as any).pointerId)
    } catch {}
  }

  const scrollStep = (dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]")
    const gap = Number.parseInt(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "24", 10) || 24
    const step = (card?.offsetWidth || 400) + gap
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  return (
    <section id="testimonials" className="bg-[#0e0f0f] text-[#FEFCE1] border-y border-white/5">
      <div className="mx-auto max-w-[1365px] px-5 md:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#FEFCE1]/85">Testimonials</h2>

        {/* Track */}
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          className="
            mt-8 md:mt-10
            flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory
            scroll-smooth select-none cursor-grab
            pb-4 [-ms-overflow-style:none] [scrollbar-width:none]
            w-full
          "
          // hide scrollbar (WebKit)
          style={{ WebkitOverflowScrolling: "touch" as any }}
        >
          {/* hide scrollbar (WebKit) */}
          <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}`}</style>

          {testimonials.map((t) => (
            <div key={t.name} className="block">
              <figure
                data-testimonial-card
                className="
                  min-w-[320px] sm:min-w-[380px] md:min-w-[480px] lg:min-w-[620px]
                  h-[380px] md:h-[420px]
                  snap-start relative overflow-hidden rounded-2xl bg-[#141513] ring-1 ring-white/8 p-6 md:p-12
                  hover:bg-[#1a1b19] hover:ring-white/12 transition-all duration-300
                  flex flex-col justify-between
                "
              >
              {/* Top row: name/role left, avatar right */}
              <div className="flex items-start justify-between gap-4">
                <figcaption>
                  <div className="text-base md:text-xl lg:text-2xl font-normal text-[#FEFCE1]">{t.name}</div>
                  <div className="text-xs md:text-base text-[#FEFCE1]/70">{t.role}</div>
                </figcaption>

                <img
                  src={t.avatar || "/placeholder.svg?height=64&width=64&query=avatar%20placeholder"}
                  alt={`Avatar of ${t.name}`}
                  className="h-10 w-10 md:h-14 md:w-14 rounded-full ring-1 ring-white/10 object-cover"
                />
              </div>

              {/* Quote section */}
              <div className="flex-1 flex flex-col">
                {/* Decorative opening quote */}
                <Quote className="mt-4 md:mt-6 h-5 w-5 md:h-7 md:w-7 text-[#FEFCE1]/35" aria-hidden="true" />

                {/* Quote text */}
                <blockquote className="mt-3 md:mt-6 text-sm md:text-lg leading-6 md:leading-8 text-[#FEFCE1]/50 flex-1">
                  "{t.quote}"
                </blockquote>

                {/* Read More Button */}
                <div className="mt-4 md:mt-6 flex justify-end">
                <a
                  href="https://www.linkedin.com/in/dr-aseem-gokarn-harwansh-14b11133/details/recommendations/?detailScreenTabIndex=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 px-4 py-2 text-sm font-medium 
                    text-[#FEFCE1]/80 hover:text-[#FEFCE1] 
                    bg-[#1a1b19] hover:bg-[#252622] 
                    border border-white/10 hover:border-white/20 
                    rounded-lg transition-all duration-200
                  "
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                </div>
              </div>
              </figure>
            </div>
          ))}
        </div>

        {/* Arrows - Hidden on mobile */}
        <div className="mt-6 md:mt-8 hidden md:flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollStep(-1)}
            className="h-10 w-10 rounded-full bg-[#141513] ring-1 ring-white/10 text-[#FEFCE1]/80 hover:text-[#FEFCE1] hover:ring-white/20 transition"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeft className="mx-auto h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
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
