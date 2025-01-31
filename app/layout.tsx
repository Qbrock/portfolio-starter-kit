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
        'text-white bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased mx-auto px-8 max-w-7xl mt-8">
        <div className="relative min-h-screen">
          {/* Background */}
          <div className="fixed inset-0 w-full h-full">
            <Boxes className="opacity-20" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <header className="mb-16 relative z-50">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-bold">Quinn Brockmyre</h1>
                  <p className="text-neutral-400 mt-2">Software Engineer</p>
                </div>
                <MenuButton />
              </div>
            </header>
            <main className="min-w-0">
              {children}
              <Footer />
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
