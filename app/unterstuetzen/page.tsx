'use client'

import { useState, type ReactNode } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import DonateModal from '@/components/common/DonateModal'
import { siteConfig } from '@/config/site'
import { Heart, Users, HandHeart, CheckCircle } from 'lucide-react'

export default function SupportPage() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)

  const options = [
    {
      icon: Heart,
      title: 'Spenden',
      text: 'Jede Spende hilft, Bildungsprojekte und Soforthilfe nachhaltig umzusetzen.',
      points: ['Jeder Betrag zählt', 'Transparente Verwendung', 'Spendenbestätigung auf Anfrage'],
      action: () => setIsDonateModalOpen(true),
      label: 'Jetzt spenden',
    },
    {
      icon: Users,
      title: 'Mitglied werden',
      text: 'Unterstützen Sie unsere Arbeit regelmäßig und begleiten Sie Projekte langfristig.',
      points: ['Regelmäßige Updates', 'Teil einer starken Gemeinschaft', 'Langfristige Wirkung'],
      href: '/kontakt',
      label: 'Mitgliedschaft anfragen',
    },
    {
      icon: HandHeart,
      title: 'Ehrenamtlich helfen',
      text: 'Bringen Sie Ihre Zeit, Ihr Wissen und Ihre Erfahrung in unsere Arbeit ein.',
      points: ['Flexible Beteiligung', 'Konkrete Aufgaben', 'Direkte Wirkung'],
      href: '/kontakt',
      label: 'Kontakt aufnehmen',
    },
    {
      icon: Heart,
      title: 'PayPal-MoneyPool',
      text: 'Unterstützen Sie unsere Projekte schnell und unkompliziert per PayPal.',
      points: ['Direkte Online-Unterstützung', 'Sicher bezahlen', 'Jeder Beitrag hilft'],
      href: siteConfig.paypalMoneyPoolUrl,
      label: 'Zum MoneyPool',
    },
  ]

  return (
    <>
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl">Unterstützen Sie unsere Arbeit</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/90">
            Es gibt viele Wege, Domanê Tiji e.V. zu stärken. Gemeinsam schaffen wir Chancen für Kinder
            und Familien in benachteiligten Regionen.
          </p>
          <Button onClick={() => setIsDonateModalOpen(true)} variant="secondary" size="lg" className="mt-8">
            <Heart className="mr-2 h-5 w-5" />
            Jetzt helfen
          </Button>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => {
            const Icon = option.icon
            return (
              <Card key={option.title}>
                <span className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-2xl text-primary">{option.title}</h2>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{option.text}</p>
                <div className="mt-4 space-y-2">
                  {option.points.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <Button href={option.href} onClick={option.action} variant="primary" size="md">
                    {option.label}
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card className="mx-auto max-w-5xl">
            <h2 className="text-3xl text-primary">Online-Aufnahmeantrag</h2>
            <p className="mt-4 text-text-secondary">
              Sie können Ihren Aufnahmeantrag direkt hier online ausfüllen und absenden – ohne Download.
            </p>

            <form
              name="aufnahmeantrag-domane-tiji"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mt-8 space-y-6"
            >
              <input type="hidden" name="form-name" value="aufnahmeantrag-domane-tiji" />
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="empfaenger_email" value={siteConfig.email} />

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Vollständiger Name" required>
                  <input name="name" required className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
                <Field label="Adresse" required>
                  <input name="adresse" required className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Field label="Geburtsdatum" required>
                  <input type="date" name="geburtsdatum" required className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
                <Field label="E-Mail" required>
                  <input type="email" name="email" required className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
                <Field label="Telefon" required>
                  <input name="telefon" required className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Eintrittsdatum" required>
                  <input type="date" name="eintrittsdatum" required className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
                <Field label="Mitgliedsbeitrag" required>
                  <div className="space-y-2 rounded-lg border border-border p-3">
                    <label className="flex items-center gap-2 text-sm text-text-secondary">
                      <input type="radio" name="mitgliedsbeitrag" value="10 EUR Erwachsener" required />
                      10 EUR pro Monat (Erwachsener)
                    </label>
                    <label className="flex items-center gap-2 text-sm text-text-secondary">
                      <input type="radio" name="mitgliedsbeitrag" value="15 EUR Familie" required />
                      15 EUR pro Monat (Familienbeitrag)
                    </label>
                  </div>
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Field label="Kontoinhaber/in" required>
                  <input name="kontoinhaber" required className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
                <Field label="IBAN" required>
                  <input name="iban" required className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
                <Field label="Kreditinstitut" required>
                  <input name="kreditinstitut" required className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Ort, Datum" required>
                  <input name="ort_datum" required placeholder="z. B. Oberhausen, 19.02.2026" className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
                <Field label="Unterschrift (Vor- und Nachname)" required>
                  <input name="unterschrift" required className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                </Field>
              </div>

              <label className="flex items-start gap-3 rounded-lg border border-border bg-highlight p-4 text-sm text-text-secondary">
                <input type="checkbox" name="datenschutz_zustimmung" required className="mt-0.5" />
                <span>
                  Ich habe die Datenschutzhinweise gelesen und stimme der Verarbeitung meiner personenbezogenen Daten
                  zum Zweck der Mitgliederverwaltung, Beitragsabrechnung und Vereinskommunikation zu.
                </span>
              </label>

              <p className="text-sm text-text-secondary">
                Anträge werden an{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>{' '}
                übermittelt.
              </p>

              <Button type="submit" variant="primary" size="lg">
                Aufnahmeantrag jetzt absenden
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <DonateModal isOpen={isDonateModalOpen} onClose={() => setIsDonateModalOpen(false)} />
    </>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-text-primary">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      {children}
    </label>
  )
}

