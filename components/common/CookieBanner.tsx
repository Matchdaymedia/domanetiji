'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const CONSENT_KEY = 'dt_cookie_consent_v1'

type ConsentChoice = 'necessary' | 'all'

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_KEY)
      setIsOpen(!saved)
    } catch {
      setIsOpen(true)
    }
  }, [])

  const saveConsent = (choice: ConsentChoice) => {
    const payload = {
      choice,
      timestamp: new Date().toISOString(),
      version: 1,
    }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(payload))
    setIsOpen(false)
  }

  const openSettings = () => setIsOpen(true)

  return (
    <>
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white shadow-2xl">
          <div className="container-custom py-4 md:py-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold text-primary">Datenschutz & Cookies</p>
                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  Wir verwenden derzeit nur technisch notwendige Speicherungen (z. B. für diese
                  Einwilligungsabfrage). Falls später optionale Dienste (z. B. Analyse/Video-Embeds)
                  hinzukommen, werden diese erst nach Ihrer Zustimmung geladen. Details finden Sie in der{' '}
                  <Link href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => saveConsent('necessary')}
                  className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-text-secondary transition hover:bg-highlight"
                >
                  Nur notwendige
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent('all')}
                  className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={openSettings}
          className="fixed bottom-4 left-4 z-40 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-text-secondary shadow-md transition hover:bg-highlight"
        >
          Cookie-Einstellungen
        </button>
      )}
    </>
  )
}

