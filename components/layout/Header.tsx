'use client'

import Link from 'next/link'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '@/config/site'

const navItems = [
  { href: '/#ueber-uns', label: 'Über uns' },
  { href: '/#ziele', label: 'Ziele' },
  { href: '/#wirkung', label: 'Wirkung' },
  { href: '/#mitmachen', label: 'Mitmachen' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/90 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex h-14 items-center justify-between gap-3 md:h-16">
          <Link href="/" className="inline-flex items-center gap-2 no-underline" onClick={() => setIsOpen(false)}>
            <img src="/domane-tiji-logo-bunt.png" alt="Domanê Tiji e.V." className="h-8 w-8 object-contain md:h-9 md:w-9" />
            <span className="font-serif text-base text-primary md:text-lg">{siteConfig.orgName}</span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary no-underline transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href={siteConfig.membershipLink}
              className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold text-text-primary no-underline transition hover:bg-highlight"
            >
              Mitglied werden
            </Link>
            <Link
              href={siteConfig.donationLink}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white no-underline transition hover:bg-primary/90"
            >
              <Heart className="h-4 w-4" />
              Spenden
            </Link>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-primary lg:hidden"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-custom py-2.5">
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-text-secondary no-underline transition hover:bg-highlight hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <Link
                  href={siteConfig.membershipLink}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-border bg-white px-4 py-2.5 text-center text-sm font-semibold text-text-primary no-underline"
                >
                  Mitglied werden
                </Link>
                <Link
                  href={siteConfig.donationLink}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white no-underline"
                >
                  Spenden
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

