import type React from "react"
import { BrandBadge } from "@/components/brand-badge"
import { Instagram, Mail, Phone, Linkedin } from "lucide-react"


export function SiteFooter() {
  return (
    <footer className="bg-[#0e0f0f] text-[#FEFCE1] border-t border-white/16">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="relative h-13 w-13 rounded-2xl shadow-sm overflow-hidden">
            <img 
              src="/images/experience/sm-logo1.png" 
              alt="Olyve Schwarz Logo" 
              className="h-full w-full object-contain"
            />
          </div>

          <nav aria-label="Footer" className="text-sm md:text-base">
            <ul className="flex items-center gap-6 md:gap-10 text-[#FEFCE1]/75">
              <li>
                <a href="#about" className="hover:text-[#FEFCE1]">
                  About
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-[#FEFCE1]">
                  Work
                </a>
              </li>
              <li>
                <a href="#books" className="hover:text-[#FEFCE1]">
                  Books
                </a>
              </li>
              <li>
                <a href="#acknowledgements" className="hover:text-[#FEFCE1]">
                  Acknowledgements
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-[#FEFCE1]">
                  Articles
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FEFCE1]">
                  Say Hello
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-5 md:gap-6 text-[#FEFCE1]">
            <a href="#" aria-label="Instagram" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:Hello@olyve.me" aria-label="Email" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="tel:+1234567890" aria-label="Phone" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Phone className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-xs md:text-sm text-[#FEFCE1]/60">
            {/* Left side - Copyright */}
            <div className="text-center md:text-left">
              <span>© 2025 Aseem Gokarn Harwansh. All rights reserved.</span>
            </div>
            
            {/* Middle - Privacy & Terms */}
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <a href="#" className="hover:text-[#FEFCE1]/80 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#FEFCE1]/80 transition-colors">Terms of Service</a>
            </div>
            
            {/* Right side - Aneeverse */}
            <div className="text-center md:text-right">
              <a 
                href="https://aneeverse.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#FEFCE1]/80 transition-colors"
              >
                <span>Designed & Managed by Aneeverse</span>
                <img 
                  src="/images/aneeverse-logo.svg" 
                  alt="Aneeverse Logo" 
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
