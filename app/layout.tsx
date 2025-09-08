import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Aseem Gokarn Harwansh',
  description: 'Dr. Aseem Gokarn Harwansh',
  icons: {
    icon: [
      {
        url: '/images/Fav-icon.png',
        type: 'image/png',
      },
      {
        url: '/images/Fav-icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/images/Fav-icon.png',
        type: 'image/png', 
        sizes: '16x16',
      },
    ],
    shortcut: '/images/Fav-icon.png',
    apple: '/images/Fav-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
