"use client"

import React from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Andrea De Santis",
    role: "CEO, Agresar Soft Inc.",
    quote:
      "Extremely professional, unique and enjoyable. The effort taken to ensure sed quia non numquam eius modi tempora incidunt ut labore voluptatem rerum ensured the optimum outcome.",
    avatar: "/images/testimonals/testm-user1.jpg",
  },
  {
    name: "Thomas Luze",
    role: "Senior Product Developer @ ThisOne",
    quote:
      "Extremely professional, unique and enjoyable. The effort taken to ensure sed quia non numquam eius modi tempora incidunt ut labore voluptatem rerum ensured the optimum outcome.",
    avatar: "/images/testimonals/testm-user2.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Creative Director @ DesignCo",
    quote:
      "Outstanding work that exceeded our expectations. The attention to detail and creative approach made our project stand out in the market.",
    avatar: "/images/testimonals/testm-user3.jpg",
  },
  {
    name: "Michael Chen",
    role: "Founder @ TechStart",
    quote:
      "Professional, innovative, and delivered on time. The design solutions provided were exactly what we needed for our brand identity.",
    avatar: "/images/testimonals/testm-user1.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Manager @ BrandHub",
    quote:
      "Exceptional creativity and understanding of our vision. The final deliverables were beyond our expectations and helped elevate our brand.",
    avatar: "/images/testimonals/testm-user2.jpg",
  },
]

// Helper: clamp
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(n, max))

export function TestimonialsSection() {
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
    // Maximum sensitivity for very easy dragging
    el.scrollLeft = startScrollRef.current - (dx * 12)
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el) return
    isDraggingRef.current = false
    // Optional: snap to nearest card after drag
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-testimonial-card]"))
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
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]")
    const gap = Number.parseInt(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "24", 10) || 24
    const step = (card?.offsetWidth || 400) + gap
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  return (
    <section id="testimonials" className="bg-[#0B0C0B] text-[#EAE6CF] border-y border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#EAE6CF]">Testimonials</h2>

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
            <figure
              key={t.name}
              data-testimonial-card
              className="
                min-w-[280px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[500px]
                snap-start relative overflow-hidden rounded-2xl bg-[#141513] ring-1 ring-white/8 p-6 md:p-10
              "
            >
              {/* Top row: name/role left, avatar right */}
              <div className="flex items-start justify-between gap-4">
                <figcaption>
                  <div className="text-lg md:text-xl font-semibold text-[#EAE6CF]">{t.name}</div>
                  <div className="text-sm md:text-base text-[#EAE6CF]/70">{t.role}</div>
                </figcaption>

                <img
                  src={t.avatar || "/placeholder.svg?height=64&width=64&query=avatar%20placeholder"}
                  alt={`Avatar of ${t.name}`}
                  className="h-12 w-12 md:h-14 md:w-14 rounded-full ring-1 ring-white/10 object-cover"
                />
              </div>

              {/* Decorative opening quote */}
              <Quote className="mt-6 h-6 w-6 md:h-7 md:w-7 text-[#EAE6CF]/35" aria-hidden="true" />

              {/* Quote text */}
              <blockquote className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-[#EAE6CF]/85">
                "{t.quote}"
              </blockquote>
            </figure>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-6 md:mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollStep(-1)}
            className="h-10 w-10 rounded-full bg-[#141513] ring-1 ring-white/10 text-[#EAE6CF]/80 hover:text-[#EAE6CF] hover:ring-white/20 transition"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeft className="mx-auto h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollStep(1)}
            className="h-10 w-10 rounded-full bg-[#141513] ring-1 ring-white/10 text-[#EAE6CF]/80 hover:text-[#EAE6CF] hover:ring-white/20 transition"
          >
            <span className="sr-only">Next</span>
            <ChevronRight className="mx-auto h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
