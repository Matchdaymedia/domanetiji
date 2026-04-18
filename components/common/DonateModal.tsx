'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { company } from '@/lib/company'

interface DonateModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:bg-highlight hover:text-primary"
          aria-label="Schließen"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="font-serif text-2xl text-primary">Spenden & Unterstützen</h2>
        <p className="mt-3 text-sm leading-7 text-text-secondary">
          Vielen Dank für Ihr Interesse an unserer Arbeit. Jede Unterstützung hilft uns, Bildung und
          soziale Hilfe in strukturschwachen Regionen weiter auszubauen.
        </p>

        <div className="mt-4 rounded-xl border border-border bg-highlight p-4">
          <p className="text-sm font-semibold text-primary">Vereinskonto für Spenden und Mitgliedsbeiträge</p>
          <div className="mt-2 space-y-1 text-sm text-text-secondary">
            <p>
              Kontoinhaber: <span className="font-medium text-text-primary">{company.bankAccount.holder}</span>
            </p>
            <p>
              IBAN: <span className="font-medium text-text-primary">{company.bankAccount.iban}</span>
            </p>
            <p>
              BIC: <span className="font-medium text-text-primary">{company.bankAccount.bic}</span>
            </p>
            <p>
              Kreditinstitut: <span className="font-medium text-text-primary">{company.bankAccount.bankName}</span>
            </p>
            <p>
              Gueltig bis: <span className="font-medium text-text-primary">{company.bankAccount.validUntil}</span>
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-border p-4">
          <p className="text-sm font-semibold text-primary">Verwendungszweck</p>
          <p className="mt-2 text-sm text-text-secondary">
            Spende: <span className="font-medium text-text-primary">{company.bankAccount.purposeDonation}</span>
            <br />
            Mitgliedschaft:{' '}
            <span className="font-medium text-text-primary">{company.bankAccount.purposeMembership}</span>
          </p>
        </div>

        <p className="mt-4 text-xs leading-6 text-text-secondary">
          Hinweis: Bitte geben Sie bei der Ueberweisung den passenden Verwendungszweck und Ihren Namen an.
          <br />
          Fuer eine Spendenbestaetigung senden Sie bitte zusaetzlich Ihren Namen und Ihre E-Mail-Adresse
          ueber das Kontaktformular oder per E-Mail an{' '}
          <a href={`mailto:${company.email}`} className="text-primary hover:underline">
            {company.email}
          </a>
          .
        </p>
      </div>
    </div>
  )
}

