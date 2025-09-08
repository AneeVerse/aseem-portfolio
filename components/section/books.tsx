"use client"

import { ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation"

const books = [
  {
    id: "secrets-urban-backyard",
    title: "Secrets of Your Urban Backyard",
    subtitle: "Secrets of Your Urban Backyard by Dr. Aseem is a soulful journey that invites readers to reconnect with the green spaces surrounding them, no matter how small or overlooked. Whether in a bustling city or nestled in a quieter urban corner, Dr. Aseem brings to life the trees, plants, and wildlife that coexist in our backyards and local parks",
    image: "/images/book/book1.png",
    buttonText: "Get Your Copy",
    link: "https://www.amazon.com/Secrets-your-Urban-Backyard-Citiscapes-ebook/dp/B0FPM33RZ6/ref=sr_1_2",
    available: true
  },
  {
    id: "nature-wisdom",
    title: "Nature's Wisdom: Urban Green Chronicles",
    subtitle: "Discover the hidden stories of urban landscapes through the eyes of an expert landscape architect. This upcoming book explores the intersection of nature and human-made environments, revealing how green spaces transform our cities and our lives. Join Dr. Aseem on another journey through the botanical wonders that surround us daily.",
    image: "/images/book/book2.png",
    buttonText: "Get Your Copy",
    link: "/coming-soon",
    available: false
  }
]

export function BooksSection() {
  const router = useRouter()

  const handleBookClick = (book: typeof books[0]) => {
    if (book.available && book.link.startsWith('http')) {
      window.open(book.link, '_blank')
    } else if (!book.available) {
      router.push(book.link)
    }
  }

  return (
    <section id="books" className="bg-[#0e0f0f] text-[#FEFCE1] border-b border-white/5">
      <div className="mx-auto max-w-[1365px] px-5 md:px-8 py-16 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Books</h2>
        </div>

        <div className="space-y-16">
          {books.map((book, index) => (
            <div 
              key={book.id} 
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Book Image */}
              <div className="w-full lg:w-1/2 max-w-sm">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#141513] ring-1 ring-white/5">
                  <img
                    src={book.image}
                    alt={`${book.title} book cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Book Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-light text-[#FEFCE1] mb-4 leading-tight">
                    {book.title}
                  </h3>
                  <p className="text-[#FEFCE1]/70 text-base md:text-lg leading-relaxed">
                    {book.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => handleBookClick(book)}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all gradient-button text-[#0e0f0f] hover:scale-105"
                >
                  {book.buttonText}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
