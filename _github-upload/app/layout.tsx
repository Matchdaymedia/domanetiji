import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/common/CookieBanner'
import ScrollProgress from '@/components/common/ScrollProgress'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Domanê Tiji e.V. – Jedes Kind trägt ein Licht in sich',
  description:
    'Domanê Tiji e.V. fördert Bildung, Spracherhalt und soziale Unterstützung in strukturschwachen Regionen.',
  metadataBase: new URL('https://www.domanetiji.de'),
  applicationName: 'Domanê Tiji e.V.',
  alternates: {
    canonical: '/',
  },
  keywords: ['Domanê Tiji', 'gemeinnützig', 'Bildung', 'Spracherhalt', 'Zazaki', 'Stipendien'],
  openGraph: {
    title: 'Domanê Tiji e.V. – Jedes Kind trägt ein Licht in sich',
    description: 'Gemeinnütziger Verein für Bildung, Spracherhalt und soziale Unterstützung.',
    url: 'https://www.domanetiji.de',
    siteName: 'Domanê Tiji e.V.',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: '/domane-tiji-logo-bunt.png',
        width: 1200,
        height: 630,
        alt: 'Domanê Tiji e.V.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domanê Tiji e.V. – Jedes Kind trägt ein Licht in sich',
    description: 'Gemeinnütziger Verein für Bildung, Spracherhalt und soziale Unterstützung.',
    images: ['/domane-tiji-logo-bunt.png'],
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary font-sans antialiased">
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

