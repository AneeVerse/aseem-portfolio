"use client"

import { ArrowRight, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="bg-[#0B0C0B] text-[#EAE6CF] border-b border-white/5" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left copy */}
          <div>
            {/* Replace breadcrumb with eyebrow label to match the reference */}
            <div className="mb-4 inline-flex items-center gap-2 text-lg text-[#EAE6CF]/80">
              <img 
                src="/images/512.webp" 
                alt="Sparkle icon" 
                className="h-6 w-6"
              />
              <span>Award Winning Branding Expert</span>
            </div>

            {/* Increase headline size closer to the template */}
            <h1 id="hero-heading" className="text-pretty text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Bring your vision to ultimate reality
            </h1>
            <p className="mt-3 text-lg leading-6 text-[#EAE6CF]/70 max-w-prose mt-5 mb-10">
            Specialize in creating unique visual identities for digital products and believe that a stunning design starts with common values, open communication, and respect for your audience.
            </p>

            <div className="mt-6 flex flex-row items-center gap-3 sm:gap-4">
              <a
                href="#works"
                className="inline-flex items-center rounded-full px-5 py-3 sm:px-6 sm:py-4 text-[16px] sm:text-[18px] font-medium text-[#0B0C0B] bg-gradient-to-b from-[#ECE8C8] to-[#CFC99D] hover:brightness-95 transition whitespace-nowrap"
              >
                View Portfolio
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[16px] sm:text-[18px] text-[#EAE6CF]/85 hover:text-[#EAE6CF] whitespace-nowrap"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                Hello@olyve.me
              </a>
            </div>
          </div>

          {/* Right portrait */}
          <div className="relative mx-auto w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] lg:w-[400px] lg:h-[500px] overflow-hidden rounded-full ring-1 ring-white/10">
            <img
              src={"/images/hero-right.jpg"}
              alt="Portrait of Olyve with projected letters"
              className="h-full w-full object-cover "
            />
            {/* Chip 1: Brand Research */}
            <div className="chip-orbit chip-orbit--brand absolute left-8 sm:left-10 md:left-12 top-[58%] z-[9999]">
              <span className="hero-chip hero-chip--brand" title="Brand Research">
                Brand Research
                <svg className="chip-pointer chip-pointer--brand" viewBox="0 0 10 10" aria-hidden="true">
                  <polygon points="0,5 10,0 10,10" />
                </svg>
              </span>
            </div>
            {/* Chip 2: Visual Presentation */}
            <div className="chip-orbit chip-orbit--visual absolute left-16 sm:left-20 md:left-24 bottom-12 sm:bottom-14 md:bottom-16">
              <span className="hero-chip hero-chip--visual" title="Visual Presentation">
                Visual Presentation
                <svg className="chip-pointer chip-pointer--visual" viewBox="0 0 10 10" aria-hidden="true">
                  <polygon points="0,5 10,0 10,10" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* floating animation, pointer triangles, and reduced-motion support */}
      <style jsx>{`


        /* Chips (bigger size and subtle bob so movement feels alive) */
        .hero-chip {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.2;
          border-radius: 10px;
          color: #0b0c0b;
          background: #ece8c8;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(0, 0, 0, 0.1);
          will-change: transform;
          animation: floatY 2.2s ease-in-out infinite; /* slight desync + faster */
        }
        
        @media (min-width: 640px) {
          .hero-chip {
            gap: 8px;
            padding: 10px 16px;
            font-size: 14px;
            border-radius: 12px;
          }
        }
        .hero-chip--visual { animation-duration: 2.5s; }

        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-6px); }
        }

        /* Orbit wrappers move the WHOLE badge + pointer together with coordinated pattern */
        .chip-orbit {
          will-change: transform;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          z-index: 9999; /* Ensure visibility even outside image bounds */
        }
        .chip-orbit--brand {
          animation-name: coordinatedMovement;
          animation-duration: 8s;
        }
        .chip-orbit--visual {
          animation-name: coordinatedMovement;
          animation-duration: 8s;
          animation-delay: 0s; /* No delay for synchronized movement */
        }
        @keyframes coordinatedMovement {
          0%   { transform: translate(0px, 0px); }                    /* Start position */
          12.5% { transform: translate(0px, 20px); }                 /* Come down together */
          25%  { transform: translate(0px, 20px); }                  /* Stop at bottom */
          37.5% { transform: translate(30px, -10px); }               /* Go right-top */
          50%  { transform: translate(30px, -10px); }                /* Stop at right-top */
          62.5% { transform: translate(-20px, -10px); }              /* Go left */
          75%  { transform: translate(-20px, -10px); }               /* Stop at left */
          87.5% { transform: translate(-10px, 15px); }               /* Come down again */
          100% { transform: translate(0px, 0px); }                   /* Return to start */
        }

        /* Triangle pointers pointing towards the image from the left side */
        .chip-pointer {
          position: absolute;
          width: 12px;
          height: 12px;
          fill: #f6d36f;
          filter: drop-shadow(0 1px 0 rgba(0,0,0,0.18));
        }
        
        @media (min-width: 640px) {
          .chip-pointer {
            width: 14px;
            height: 14px;
          }
        }
        /* Brand Research pointer sits on the right edge, pointing right towards the image */
        .chip-pointer--brand {
          right: -12px;
          top: 35%;
          transform: rotate(-25deg); /* adjust rotation angle */
        }
        
        @media (min-width: 640px) {
          .chip-pointer--brand {
            right: -15px;
          }
        }
        
        /* Visual Presentation pointer sits on the right edge, pointing right towards the image */
        .chip-pointer--visual {
          left: -16px;
          top: 15%;
          transform: rotate(400deg); /* adjust rotation angle */
        }
        
        @media (min-width: 640px) {
          .chip-pointer--visual {
            left: -20px;
          }
        }

        /* Accessibility: reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-chip,
          .chip-orbit {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
