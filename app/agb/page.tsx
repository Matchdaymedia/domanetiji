import { Metadata } from 'next'
import Card from '@/components/common/Card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AGB / Nutzungsbedingungen - Domanê Tiji e.V.',
  description: 'Allgemeine Nutzungsbedingungen und Spendenhinweise von Domanê Tiji e.V.',
}

export default function AgbPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center text-4xl text-primary md:text-5xl">
            AGB / Nutzungsbedingungen
          </h1>

          <Card className="mt-8">
            <div className="space-y-6 text-text-secondary">
              <div>
                <h2 className="text-2xl text-primary">1. Geltungsbereich</h2>
                <p className="mt-3">
                  Diese Bedingungen gelten fuer die Nutzung der Website von Domanê Tiji e.V. Die
                  Inhalte dienen der Information ueber Vereinszwecke, Projekte, Mitgliedschaft und
                  Spendenmoeglichkeiten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">2. Spendenhinweis</h2>
                <p className="mt-3">
                  Spenden an den Verein erfolgen freiwillig und ohne Gegenleistung. Bitte nutzen Sie
                  bei Ueberweisungen die auf der Website angegebenen Kontodaten und geben Sie einen
                  passenden Verwendungszweck an.
                </p>
                <p className="mt-3">
                  Wenn Sie eine Spendenbestaetigung benoetigen, uebermitteln Sie bitte Ihren Namen
                  und Ihre Kontaktdaten ueber das{' '}
                  <Link href="/kontakt" className="text-primary hover:underline">
                    Kontaktformular
                  </Link>{' '}
                  oder per E-Mail.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">3. Haftung fuer Inhalte</h2>
                <p className="mt-3">
                  Die Inhalte dieser Website werden mit Sorgfalt erstellt. Fuer die Richtigkeit,
                  Vollstaendigkeit und Aktualitaet wird jedoch keine Gewaehr uebernommen, soweit
                  gesetzlich zulaessig.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">4. Externe Links</h2>
                <p className="mt-3">
                  Diese Website kann Verlinkungen zu externen Seiten enthalten. Fuer Inhalte externer
                  Anbieter ist stets der jeweilige Betreiber verantwortlich.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">5. Datenschutzhinweis</h2>
                <p className="mt-3">
                  Informationen zur Verarbeitung personenbezogener Daten finden Sie in der{' '}
                  <Link href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklaerung
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">6. Rechtlicher Hinweis</h2>
                <p className="mt-3">
                  Diese Seite ist ein Basistext und ersetzt keine individuelle Rechtsberatung.
                  Lassen Sie die finalen Rechtstexte (AGB, Impressum, Datenschutz) juristisch
                  pruefen.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
