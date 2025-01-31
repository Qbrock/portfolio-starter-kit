import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar, MenuButton } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Boxes } from './components/ui/background-boxes'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Quinn Brockmyre',
    template: '%s | Quinn Brockmyre',
  },
  description: 'Quinn Brockmyre - Computer Science Student at USFCA',
  openGraph: {
    title: 'Quinn Brockmyre',
    description: 'Computer Science Student at USFCA',
    url: baseUrl,
    siteName: 'Quinn Brockmyre',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
} 

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-white bg-[#0a0a0a]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased mx-auto px-8 max-w-7xl mt-8">
        {/* Background boxes fill entire viewport */}
        <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-auto">
          <Boxes className="opacity-100" />
        </div>

        {/* Content with solid backgrounds only for text and buttons */}
        <div className="relative pointer-events-none">
          <header className="mb-16">
            <div className="flex justify-between items-center">
              <div className="bg-black bg-opacity-80 p-2 rounded-lg pointer-events-auto">
                <h1 className="text-4xl font-bold">Quinn Brockmyre</h1>
                <p className="text-neutral-400 mt-2">
                  Software Engineer <span className="mx-2">•</span> San Francisco, CA
                </p>
              </div>
              <div className="bg-black bg-opacity-80 rounded-lg pointer-events-auto">
                <MenuButton />
              </div>
            </div>
          </header>
          <main className="min-w-0">
            <div className="space-y-8">
              {/* Make only the interactive elements receive pointer events */}
              <div className="pointer-events-auto">
                {children}
              </div>
            </div>
            <div className="bg-black bg-opacity-80 mt-8 pointer-events-auto">
              <Footer />
            </div>
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  )
}
