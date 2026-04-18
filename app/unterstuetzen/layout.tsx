import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unterstützen - Domanê Tiji e.V.',
  description: 'Unterstützen Sie Domanê Tiji e.V. durch Spenden, Mitgliedschaft oder ehrenamtliche Hilfe.',
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
