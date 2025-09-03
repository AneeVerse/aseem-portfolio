import type React from "react"
import { BrandBadge } from "@/components/brand-badge"
import { Instagram, Twitter, Linkedin } from "lucide-react"

// Simple Behance glyph since lucide-react doesn't include one by default
function BehanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M4.2 8.1h3.9c1.8 0 3 .9 3 2.4 0 1-.6 1.8-1.6 2.1 1.3.3 2 1.2 2 2.4 0 1.7-1.3 2.8-3.5 2.8H4.2V8.1Zm3.7 3.9c.9 0 1.4-.4 1.4-1.1S8.8 9.9 7.9 9.9H6.4V12h1.5Zm.2 4.1c1 0 1.6-.4 1.6-1.2s-.6-1.2-1.6-1.2H6.4v2.4h1.7Zm9.3-5.8c1.9 0 3.3 1.4 3.3 3.6 0 .2 0 .5-.1.7h-4.8c.2 1.1.9 1.7 2 1.7.8 0 1.4-.3 1.9-.9l.8.9c-.6.8-1.6 1.3-2.8 1.3-2 0-3.4-1.4-3.4-3.6 0-2.2 1.4-3.7 3.1-3.7Zm0 1.3c-.9 0-1.6.6-1.8 1.8h3.5c-.1-1.1-.7-1.8-1.7-1.8ZM14.6 8h3.7v1h-3.7V8Z"
      />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-[#0B0C0B] text-[#EAE6CF] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <BrandBadge size={52} />

          <nav aria-label="Footer" className="text-sm md:text-base">
            <ul className="flex items-center gap-6 md:gap-10 text-[#EAE6CF]/75">
              <li>
                <a href="#services" className="hover:text-[#EAE6CF]">
                  Services
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-[#EAE6CF]">
                  Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#EAE6CF]">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#EAE6CF]">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#EAE6CF]">
                  “Say Hello”
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-5 md:gap-6 text-[#EAE6CF]">
            <a href="#" aria-label="Instagram" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="X (Twitter)" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Behance" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <BehanceIcon className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-2 text-xs md:text-sm text-[#EAE6CF]/60 text-center">
            © {new Date().getFullYear()} Olyve Schwarz — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
