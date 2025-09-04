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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-balance">
              {"It’s time to talk about"} <br className="hidden md:block" />
              {"your project."}
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#FEFCE1]/70 max-w-2xl">
              Let’s embark on a creative journey together by shaping a visual narrative of your brand in the crowded
              digital space.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-xl bg-[#141513] ring-1 ring-white/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#FEFCE1]" aria-hidden />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#FEFCE1]/55">Phone</div>
                  <div className="text-[15px] md:text-base">+01 234 567 8902</div>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-xl bg-[#141513] ring-1 ring-white/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#FEFCE1]" aria-hidden />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#FEFCE1]/55">Email</div>
                  <div className="text-[15px] md:text-base">sayhello@olyveschwarz.me</div>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-xl bg-[#141513] ring-1 ring-white/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#FEFCE1]" aria-hidden />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#FEFCE1]/55">Address</div>
                  <div className="text-[15px] md:text-base">Borough 47, Aveton Gifford, Devon, UK, EX4 1QU</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Form card */}
          <form
            className="rounded-2xl bg-[#141513] ring-1 ring-white/8 p-6 md:p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault()
            }}
            aria-labelledby="contact-heading"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#FEFCE1] text-sm">
                Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                className="h-12 rounded-lg bg-[#0e0f0f] border-white/10 text-[#FEFCE1] placeholder:text-[#FEFCE1]/40 focus-visible:ring-2 focus-visible:ring-[#D9CF9C]/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#FEFCE1] text-sm">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="hello@example.com"
                className="h-12 rounded-lg bg-[#0e0f0f] border-white/10 text-[#FEFCE1] placeholder:text-[#FEFCE1]/40 focus-visible:ring-2 focus-visible:ring-[#D9CF9C]/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-[#FEFCE1] text-sm">
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="How can I help?"
                className="h-12 rounded-lg bg-[#0e0f0f] border-white/10 text-[#FEFCE1] placeholder:text-[#FEFCE1]/40 focus-visible:ring-2 focus-visible:ring-[#D9CF9C]/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#FEFCE1] text-sm">
                Message
              </Label>
              <Textarea
                id="message"
                rows={6}
                placeholder="Share a brief about your project…"
                className="min-h-[160px] rounded-lg bg-[#0e0f0f] border-white/10 text-[#FEFCE1] placeholder:text-[#FEFCE1]/40 focus-visible:ring-2 focus-visible:ring-[#D9CF9C]/40"
              />
            </div>

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
