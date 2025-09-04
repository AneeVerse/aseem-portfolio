"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

/**
 * Colors used (4 total to match the design constraints):
 * - Background (near-black): #0e0f0f
 * - Foreground/off-white:   #FEFCE1
 * - Accent gradient start:  #ECE8C8
 * - Accent gradient end:    #CFC99D
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  const LinkItem = ({
    href,
    children,
  }: {
    href: string
    children: React.ReactNode
  }) => (
    <a 
      href={href} 
      className="text-[18px] text-[#FEFCE1]/70 hover:text-[#FEFCE1] transition-colors"
      onClick={(e) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }}
    >
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_0_0_rgba(255,255,255,0.1)]" role="banner">
      <nav aria-label="Primary" className="bg-[#0e0f0f] text-[#FEFCE1] px-5 md:px-8">
        <div className="relative mx-auto max-w-[1420px] h-20 md:h-24">
          {/* Left: Brand */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2.5">
            <div 
              className="relative h-11 w-11 lg:h-12 lg:w-12 rounded-2xl shadow-sm overflow-hidden cursor-pointer"
              onClick={() => {
                const target = document.querySelector('#home')
                if (target) {
                  target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }}
            >
              <img 
                src="/images/experience/sm-logo1.png" 
                alt="Olyve Schwarz Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span 
              className="text-lg lg:text-2xl font-medium tracking-tight cursor-pointer"
              onClick={() => {
                const target = document.querySelector('#home')
                if (target) {
                  target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }}
            >
              Olyve Schwarz
            </span>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4 lg:gap-8">
            {/* Nav links */}
            <ul className="hidden lg:flex items-center gap-4 lg:gap-11 2xl:gap-10">
              <li>
                <LinkItem href="#services">Services</LinkItem>
              </li>
              <li>
                <LinkItem href="#works">Works</LinkItem>
              </li>
              <li>
                <LinkItem href="#about">About</LinkItem>
              </li>
              <li>
                <LinkItem href="#testimonials">Testimonials</LinkItem>
              </li>
              <li>
                <LinkItem href="#contact">{"Say Hello"}</LinkItem>
              </li>
            </ul>

            {/* CTA and Mobile trigger */}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden lg:inline-flex items-center rounded-full px-6 py-2.5 lg:px-7 lg:py-3 text-[16px] lg:text-[18px] font-medium text-[#0e0f0f] shadow-sm border border-[#FEFCE1]/20 cursor-pointer gradient-button"
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
                Hire Me
              </a>

              <button
                className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-[#FEFCE1] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#FEFCE1]/30 cursor-pointer"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu backdrop */}
        {open && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Mobile menu */}
        <div className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[#0e0f0f] z-50 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <div 
                  className="relative h-10 w-10 rounded-2xl shadow-sm overflow-hidden cursor-pointer"
                  onClick={() => {
                    setOpen(false)
                    const target = document.querySelector('#home')
                    if (target) {
                      target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  <img 
                    src="/images/experience/sm-logo1.png" 
                    alt="Olyve Schwarz Logo" 
                    className="h-full w-full object-contain"
                  />
                </div>
                <span 
                  className="text-lg font-medium tracking-tight text-[#FEFCE1] cursor-pointer"
                  onClick={() => {
                    setOpen(false)
                    const target = document.querySelector('#home')
                    if (target) {
                      target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  Olyve Schwarz
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center h-10 w-10 rounded-md text-[#FEFCE1] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#FEFCE1]/30 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-6">
              <ul className="flex flex-col gap-6">
                <li>
                  <a 
                    href="#services" 
                    className="block text-[18px] text-[#FEFCE1]/70 hover:text-[#FEFCE1] transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
                      const target = document.querySelector('#services')
                      if (target) {
                        target.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        })
                      }
                    }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#works" 
                    className="block text-[18px] text-[#FEFCE1]/70 hover:text-[#FEFCE1] transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
                      const target = document.querySelector('#works')
                      if (target) {
                        target.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        })
                      }
                    }}
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="block text-[18px] text-[#FEFCE1]/70 hover:text-[#FEFCE1] transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
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
                    href="#testimonials" 
                    className="block text-[18px] text-[#FEFCE1]/70 hover:text-[#FEFCE1] transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
                      const target = document.querySelector('#testimonials')
                      if (target) {
                        target.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        })
                      }
                    }}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="block text-[18px] text-[#FEFCE1]/70 hover:text-[#FEFCE1] transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
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

            {/* Footer CTA */}
            <div className="p-6 border-t border-white/5">
              <a
                href="#contact"
                className="block w-full text-center rounded-full px-7 py-3 text-[18px] font-medium text-[#0e0f0f] border border-[#FEFCE1]/20 cursor-pointer gradient-button"
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(false)
                  const target = document.querySelector('#contact')
                  if (target) {
                    target.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }
                }}
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
