"use client"

import type React from "react"
import { BrandBadge } from "@/components/brand-badge"
import { Instagram, Mail, Phone, Linkedin } from "lucide-react"


export function SiteFooter() {
  return (
    <footer className="bg-[#0e0f0f] text-[#FEFCE1] border-t border-white/16">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="relative h-30 w-30 lg:h-35 lg:w-35 rounded-2xl shadow-sm overflow-hidden">
            <img 
              src="/images/logo-01.png" 
              alt="AGH Design Logo" 
              className="h-full w-full object-contain"
            />
          </div>

          <nav aria-label="Footer" className="text-sm md:text-base">
            <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-10 text-[#FEFCE1]/75">
              <li>
                <a 
                  href="#about" 
                  className="hover:text-[#FEFCE1] transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector('#about')
                    if (target) {
                      target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#works" 
                  className="hover:text-[#FEFCE1] transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector('#works')
                    if (target) {
                      target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  Work
                </a>
              </li>
              <li>
                <a 
                  href="#books" 
                  className="hover:text-[#FEFCE1] transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector('#books')
                    if (target) {
                      target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  Books
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="hover:text-[#FEFCE1] transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector('#testimonials')
                    if (target) {
                      target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  Acknowledgements
                </a>
              </li>
              <li>
                <a 
                  href="#articles" 
                  className="hover:text-[#FEFCE1] transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector('#articles')
                    if (target) {
                      target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  Articles
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-[#FEFCE1] transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector('#contact')
                    if (target) {
                      target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  Say Hello
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center justify-center gap-4 md:gap-6 text-[#FEFCE1]">
            <a href="tel:+919820175988" aria-label="Phone" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Phone className="h-5 w-5" />
            </a>
            <a href="mailto:studio@aghdesign.co" aria-label="Email" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/aseemgokarnharwansh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/dr-aseem-gokarn-harwansh-14b11133/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md p-2 bg-white/5 hover:bg-white/10 transition">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 w-full space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:items-center md:gap-4 text-xs md:text-sm text-[#FEFCE1]/60">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <span>© 2025 Aseem Gokarn Harwansh. All rights reserved.</span>
            </div>
            
            {/* Privacy & Terms */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              <a href="#" className="hover:text-[#FEFCE1]/80 transition-colors whitespace-nowrap">Privacy Policy</a>
              <a href="#" className="hover:text-[#FEFCE1]/80 transition-colors whitespace-nowrap">Terms of Service</a>
            </div>
            
            {/* Aneeverse */}
            <div className="text-center md:text-right">
              <a 
                href="https://aneeverse.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#FEFCE1]/80 transition-colors"
              >
                <span className="whitespace-nowrap">Designed & Managed by Aneeverse</span>
                <img 
                  src="/images/aneeverse-logo.svg" 
                  alt="Aneeverse Logo" 
                  className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
