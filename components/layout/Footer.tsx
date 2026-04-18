import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-custom py-8 sm:py-10">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl text-primary sm:text-2xl">{siteConfig.orgName}</h3>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              Sitz: {siteConfig.seat}
              <br />
              Gründung: {siteConfig.founded}
              <br />
              {siteConfig.legalNote}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">Rechtliches</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/impressum" className="text-text-secondary no-underline hover:text-primary">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-text-secondary no-underline hover:text-primary">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-text-secondary no-underline hover:text-primary">
                AGB / Nutzungsbedingungen
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">Social</h4>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.instagram.com/domanetijiev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-xl border border-border p-2 text-text-secondary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-border pt-4 text-xs text-text-secondary sm:mt-8 sm:pt-5">
          © {new Date().getFullYear()} {siteConfig.orgName}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}

