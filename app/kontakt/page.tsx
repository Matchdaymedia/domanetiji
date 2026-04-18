import { Metadata } from 'next'
import Card from '@/components/common/Card'
import ContactForm from '@/components/common/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Kontakt - Domanê Tiji e.V.',
  description: 'Kontaktieren Sie Domanê Tiji e.V. für Fragen, Zusammenarbeit und Unterstützung.',
}

export default function ContactPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h1 className="text-4xl text-primary md:text-5xl">Kontakt</h1>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            Haben Sie Fragen oder möchten Sie unsere Arbeit unterstützen? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl text-primary">Nachricht senden</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl text-primary">Kontaktdaten</h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-text-primary">E-Mail</p>
                    <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                      {company.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-text-primary">Telefon</p>
                    <a href={`tel:${company.phoneHref}`} className="text-primary hover:underline">
                      {company.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-text-primary">Vereinssitz</p>
                    <p className="text-text-secondary">{company.addressLine}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

