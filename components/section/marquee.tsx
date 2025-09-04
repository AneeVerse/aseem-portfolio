"use client"

import { useEffect, useRef, useState } from "react"

export function MarqueeBar() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const node = trackRef.current
    if (!node) return

    let offset = 0
    let raf: number

    const step = () => {
      if (!isPaused) {
        offset -= 0.6 // slightly faster for a bigger strip
        node.style.transform = `translateX(${offset}px)`
        // when half the content width has scrolled, jump back to 0 (content is duplicated)
        if (Math.abs(offset) > node.scrollWidth / 2) offset = 0
      }
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isPaused])

  const phrase = "Let’s work together"
  const items = new Array(14).fill(0) // duplicate enough to allow seamless loop

  return (
    <section
      className="group select-none bg-[#0e0f0f] text-[#FEFCE1] border-y border-white/10"
      aria-label="Call to collaborate marquee"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex whitespace-nowrap will-change-transform py-6 md:py-8"
          style={{
            // motion-reduce users should not see continual motion
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {items.map((_, i) => (
            <span key={i} className="mx-10 inline-flex items-center gap-4 text-2xl md:text-3xl text-[#FEFCE1]/90">
              <AnimatedPeace />
              {phrase}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Animated hand that flicks from open palm to peace sign */
        @keyframes handPalm {
          0%,
          38% {
            opacity: 1;
            transform: rotate(0deg) translateY(0);
          }
          20% {
            transform: rotate(-8deg) translateY(1px);
          }
          39%,
          100% {
            opacity: 0;
            transform: rotate(-10deg) translateY(2px);
          }
        }
        @keyframes handPeace {
          0%,
          38% {
            opacity: 0;
            transform: rotate(10deg) translateY(2px) scale(0.98);
          }
          40%,
          85% {
            opacity: 1;
            transform: rotate(0deg) translateY(0) scale(1);
          }
          100% {
            opacity: 0.9;
            transform: rotate(2deg) translateY(0);
          }
        }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hand-palm,
          .hand-peace {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}

function AnimatedPeace() {
  return (
    <span className="relative inline-block h-8 w-8 md:h-9 md:w-9 align-[-0.15em]" aria-hidden="true">
      {/* open palm */}
      <span className="hand-palm absolute inset-0 grid place-items-center text-2xl md:text-3xl [animation:handPalm_1.6s_linear_infinite]">
        {"\u270B" /* ✋ */}
      </span>
      {/* peace sign */}
      <span className="hand-peace absolute inset-0 grid place-items-center text-2xl md:text-3xl [animation:handPeace_1.6s_linear_infinite]">
        {"\u270C" /* ✌ */}
      </span>
      <span className="sr-only">Animated peace hand</span>
    </span>
  )
}
