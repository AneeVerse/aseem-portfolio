"use client"

import React from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Avinash Salunke",
    role: "Wildlife Management & Environmental Expertise",
    quote:
      "I have known Dr. Aseem Gokarna since childhood, both as a dedicated student and a passionate practitioner of plant gardening. Her deep-rooted knowledge and commitment to urban greenery have been evident throughout her journey. As a Hortitect, she has worked towards making cities both livable and lovable through strategic urban planning and innovative design solutions...",
    avatar: "/images/testimonals/1.jpg",
  },
  {
    name: "Ashok Suyal",
    role: "Senior Advisor | Startup Mentor | ESG Strategy",
    quote:
      "For Dr. Aseem being Passionate is not enough when it comes to caring for environment. She's an Eco Warrior and works towards conserving and spreading knowledge that asks for commitment that's addictive in nature. As urban populations grow, it's imperative that ownership is instilled in habitants by exemplary action leadership...",
    avatar: "/images/testimonals/2.jpg",
  },
  {
    name: "Col Rajesh Dubey (Retd)",
    role: "Infrastructure & Corporate Management Professional",
    quote:
      "Dr Aseem was our first business partner to design green cover of our green field 700 acre plant in its first phase - highly professional and customer centric. Catered for all our needs. It is heartening to see her growing in experience and service. We cherish fond business relationships even today...",
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent navigation if we just finished dragging
    if (hasDraggedRef.current) {
      e.preventDefault()
    }
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
            <a
              key={t.name}
              href="https://www.linkedin.com/in/dr-aseem-gokarn-harwansh-14b11133/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onClick={handleLinkClick}
            >
              <figure
                data-testimonial-card
                className="
                  min-w-[320px] sm:min-w-[380px] md:min-w-[480px] lg:min-w-[620px]
                  h-[380px] md:h-[420px]
                  snap-start relative overflow-hidden rounded-2xl bg-[#141513] ring-1 ring-white/8 p-8 md:p-12
                  hover:bg-[#1a1b19] hover:ring-white/12 transition-all duration-300 cursor-pointer
                  flex flex-col justify-between
                "
              >
              {/* Top row: name/role left, avatar right */}
              <div className="flex items-start justify-between gap-4">
                <figcaption>
                  <div className="text-lg md:text-xl lg:text-2xl font-normal text-[#FEFCE1]">{t.name}</div>
                  <div className="text-sm md:text-base text-[#FEFCE1]/70">{t.role}</div>
                </figcaption>

                <img
                  src={t.avatar || "/placeholder.svg?height=64&width=64&query=avatar%20placeholder"}
                  alt={`Avatar of ${t.name}`}
                  className="h-12 w-12 md:h-14 md:w-14 rounded-full ring-1 ring-white/10 object-cover"
                />
              </div>

              {/* Quote section */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Decorative opening quote */}
                <Quote className="mt-6 h-6 w-6 md:h-7 md:w-7 text-[#FEFCE1]/35" aria-hidden="true" />

                {/* Quote text */}
                <blockquote className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-[#FEFCE1]/50">
                  "{t.quote}"
                </blockquote>
              </div>
              </figure>
            </a>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-6 md:mt-8 flex items-center justify-center gap-3">
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
