"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#0e0f0f] text-[#FEFCE1]">
      <div className="mx-auto max-w-[1365px] px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Copy + details */}
          <div>
            <h2 className="text-2xl text-[#FEFCE1]/85 md:text-3xl lg:text-5xl font-normal leading-tight tracking-tight text-balance">
              {"It's time to talk about"} <br className="hidden md:block" />
              {"your project."}
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#FEFCE1]/50 max-w-2xl leading-7">
              Let’s embark on a creative journey together by shaping a visual narrative of your brand in the crowded
              digital space.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-center gap-4">
                <span className="h-14 w-14 rounded-xl bg-[#141513] ring-1 ring-white/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#FEFCE1]" aria-hidden />
                </span>
                <div>
                  <div className="text-sm uppercase tracking-wide text-[#FEFCE1]/55">Phone</div>
                  <div className="text-base md:text-lg mt-1">+91 98201 75988</div>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="h-14 w-14 rounded-xl bg-[#141513] ring-1 ring-white/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#FEFCE1]" aria-hidden />
                </span>
                <div>
                  <div className="text-sm uppercase tracking-wide text-[#FEFCE1]/55">Email</div>
                  <div className="text-base md:text-lg mt-1">studio@aghdesign.co</div>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="h-14 w-14 rounded-xl bg-[#141513] ring-1 ring-white/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#FEFCE1]" aria-hidden />
                </span>
                <div>
                  <div className="text-sm uppercase tracking-wide text-[#FEFCE1]/55">Address</div>
                  <div className="text-base md:text-lg mt-1">Agh design, 307 The Great Eastern summit CBD belapur Navi Mumbai</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Form card */}
          <form
            className="p-6 md:p-8 bg-[#141513] space-y-5 rounded-2xl"
            onSubmit={(e) => {
              e.preventDefault()
            }}
            aria-labelledby="contact-heading"
          >
            <Input
              id="name"
              placeholder="Enter your full name"
              className="h-12 rounded-lg bg-[#0e0f0f] border-0 text-[#FEFCE1] placeholder:text-[#FEFCE1]/40 focus-visible:ring-0"
            />

            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="h-12 rounded-lg bg-[#0e0f0f] border-0 text-[#FEFCE1] placeholder:text-[#FEFCE1]/40 focus-visible:ring-0"
            />

            <Input
              id="subject"
              placeholder="Subject"
              className="h-12 rounded-lg bg-[#0e0f0f] border-0 text-[#FEFCE1] placeholder:text-[#FEFCE1]/40 focus-visible:ring-0"
            />

            <Textarea
              id="message"
              rows={6}
              placeholder="Message in brief..."
              className="min-h-[160px] rounded-lg bg-[#0e0f0f] border-0 text-[#FEFCE1] placeholder:text-[#FEFCE1]/40 focus-visible:ring-0"
            />

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-full px-6 md:px-7 py-3 text-sm md:text-[15px] font-medium text-[#0e0f0f] cursor-pointer gradient-button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
