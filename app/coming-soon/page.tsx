"use client"

import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ComingSoonPage() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target time to 24 hours from now
    const targetTime = new Date().getTime() + (24 * 60 * 60 * 1000)
    
    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetTime - now

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Update immediately
    updateTimer()
    
    // Update every second
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0e0f0f] text-[#FEFCE1] flex items-center justify-center px-5">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-[#FEFCE1]/70 hover:text-[#FEFCE1] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Books
        </button>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-light">Coming Soon</h1>
          <p className="text-xl md:text-2xl text-[#FEFCE1]/70 leading-relaxed">
            Dr. Aseem's latest masterpiece is launching soon. Get ready for another journey into the world of urban landscapes and nature's wisdom.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-[#141513] rounded-2xl p-8 ring-1 ring-white/5">
          <h2 className="text-2xl font-light mb-6">Launch Countdown</h2>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-light gradient-text mb-2">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-[#FEFCE1]/60 uppercase tracking-wider">
                Hours
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-light gradient-text mb-2">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-[#FEFCE1]/60 uppercase tracking-wider">
                Minutes
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-light gradient-text mb-2">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-[#FEFCE1]/60 uppercase tracking-wider">
                Seconds
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
