import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'aseem',
  description: 'Created by roger',
  icons: {
    icon: [
      {
        url: '/images/aan1.png',
        type: 'image/png',
      },
      {
        url: '/images/aan1.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/images/aan1.png',
        type: 'image/png', 
        sizes: '16x16',
      },
    ],
    shortcut: '/images/aan1.png',
    apple: '/images/aan1.png',
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
