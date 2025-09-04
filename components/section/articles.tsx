"use client"

import React from "react"
import { Calendar, Clock3, Eye, ChevronLeft, ChevronRight, Tag } from "lucide-react"

type Post = {
  title: string
  img: string
  date: string
  read: string
  views: string
  tag?: string
}

const posts: Post[] = [
  {
    title: "The magic behind memorable design systems",
    img: "/images/articles/post-img1.jpg",
    date: "June 16",
    read: "6 min read",
    views: "1.2k",
    tag: "Creative",
  },
  {
    title: "Essential visual toolkit for small business",
    img: "/images/articles/post-img2.jpg",
    date: "July 03",
    read: "5 min read",
    views: "980",
    tag: "Visual",
  },
  {
    title: "The ultimate guide to brand packaging",
    img: "/images/articles/post-img3.jpg",
    date: "August 21",
    read: "7 min read",
    views: "2.1k",
    tag: "Marketing",
  },
  {
    title: "Building scalable design workflows",
    img: "/images/articles/post-img1.jpg",
    date: "September 05",
    read: "8 min read",
    views: "1.5k",
    tag: "Process",
  },
  {
    title: "Color psychology in modern branding",
    img: "/images/articles/post-img2.jpg",
    date: "September 18",
    read: "4 min read",
    views: "890",
    tag: "Branding",
  },
  {
    title: "Typography trends for 2024",
    img: "/images/articles/post-img3.jpg",
    date: "October 02",
    read: "6 min read",
    views: "1.3k",
    tag: "Typography",
  },
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
    // Maximum sensitivity for very easy dragging
    el.scrollLeft = startScrollRef.current - (dx * 5)
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
      <div className="mx-auto max-w-[1365px] px-5 md:px-8 py-12 md:py-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#FEFCE1]">Articles</h2>

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
          "
          // hide scrollbar (WebKit)
          style={{ WebkitOverflowScrolling: "touch" as any }}
        >
          {/* hide scrollbar (WebKit) */}
          <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}`}</style>

          {posts.map((p) => (
            <article
              key={p.title}
              data-card
              className="
                min-w-[320px] sm:min-w-[380px] lg:min-w-[420px]
                snap-start rounded-2xl bg-[#141513]/95 ring-1 ring-white/8
                overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="p-3 md:p-4">
                <div className="relative">
                  <img
                    src={p.img || "/placeholder.svg?height=240&width=420&query=article%20image"}
                    alt=""
                    className="h-52 md:h-60 w-full object-cover rounded-xl"
                  />
                </div>

                {/* Category chip */}
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-1 text-sm text-[#FEFCE1]">
                    <Tag className="h-4 w-4 opacity-80" />
                    {p.tag || "Article"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3 md:mt-4 text-2xl md:text-3xl font-semibold leading-tight text-[#FEFCE1]">
                  {p.title}
                </h3>

                {/* Meta */}
                <div className="mt-4 md:mt-6 flex items-center gap-5 text-sm text-[#FEFCE1]/70">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {p.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {p.read}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    {p.views}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-6 md:mt-8 flex items-center justify-center gap-3">
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
