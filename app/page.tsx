import type { Metadata } from 'next'
import LandingPage from '@/components/landing/LandingPage'

export const metadata: Metadata = {
  title: 'Startseite',
  description:
    'Domanê Tiji e. V. – Bildung, Spracherhalt und konkrete Hilfe für Kinder und Familien in strukturschwachen Regionen.',
}

export default function HomePage() {
  return <LandingPage />
}

