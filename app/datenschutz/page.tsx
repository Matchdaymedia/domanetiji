import { Metadata } from 'next'
import Card from '@/components/common/Card'
import Link from 'next/link'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Datenschutz - Domanê Tiji e.V.',
  description: 'Datenschutzhinweise von Domanê Tiji e.V.',
}

export default function DatenschutzPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center text-4xl text-primary md:text-5xl">Datenschutzerklärung</h1>

          <Card className="mt-8">
            <div className="space-y-6 text-text-secondary">
              <div>
                <h2 className="text-2xl text-primary">1. Verantwortliche Stelle</h2>
                <p className="mt-3">
                  {company.name}
                  <br />
                  {company.addressLine}
                  <br />
                  E-Mail: <a href={`mailto:${company.email}`} className="text-primary hover:underline">{company.email}</a>
                  <br />
                  Telefon:{' '}
                  <a href={`tel:${company.phoneHref}`} className="text-primary hover:underline">
                    {company.phoneDisplay}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">2. Hosting und Server-Logfiles</h2>
                <p className="mt-3">
                  Beim Aufruf dieser Website werden technisch erforderliche Daten verarbeitet (z. B.
                  IP-Adresse, Datum/Uhrzeit, angeforderte Seite, Browserinformationen), um die Website
                  sicher und stabil auszuliefern. Die Verarbeitung erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb der Website).
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">3. Kontaktformular und E-Mail-Kontakt</h2>
                <p className="mt-3">
                  Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir
                  die von Ihnen übermittelten Angaben ausschließlich zur Bearbeitung Ihres Anliegens
                  und möglicher Rückfragen.
                </p>
                <p className="mt-3">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation) bzw.
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kommunikation).
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">4. Mitgliedsanträge und Spendenbezug</h2>
                <p className="mt-3">
                  Personenbezogene Daten aus Mitgliedsanfragen und Aufnahmeanträgen verarbeiten wir zur
                  Vereinsverwaltung, Beitragsorganisation und Kommunikation mit Mitgliedern.
                </p>
                <p className="mt-3">
                  Daten im Zusammenhang mit Spenden (z. B. Angaben zur Ausstellung einer
                  Spendenbestätigung) verarbeiten wir zur Spendenabwicklung und zur Erfüllung
                  steuerrechtlicher Pflichten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">5. Cookies und Einwilligung</h2>
                <p className="mt-3">
                  Unsere Website verwendet aktuell nur technisch notwendige Speicherungen, insbesondere
                  zur Verwaltung Ihrer Cookie-Einwilligung. Optionale Dienste (z. B. Analyse- oder
                  Marketingtools) werden nur nach ausdrücklicher Zustimmung aktiviert.
                </p>
                <p className="mt-3">
                  Sie können Ihre Auswahl jederzeit über den Button „Cookie-Einstellungen“ am
                  Seitenrand erneut öffnen und ändern.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">6. Speicherdauer</h2>
                <p className="mt-3">
                  Wir speichern personenbezogene Daten nur so lange, wie dies für die genannten Zwecke
                  erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">7. Empfänger von Daten</h2>
                <p className="mt-3">
                  Eine Weitergabe an Dritte erfolgt nur, wenn dies gesetzlich erlaubt ist, Sie
                  eingewilligt haben oder externe Dienstleister als Auftragsverarbeiter eingebunden
                  sind (z. B. Hosting).
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">8. Ihre Rechte</h2>
                <p className="mt-3">
                  Sie haben im gesetzlichen Rahmen insbesondere das Recht auf Auskunft, Berichtigung,
                  Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
                </p>
                <p className="mt-3">
                  Außerdem haben Sie das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">9. Änderungen dieser Datenschutzerklärung</h2>
                <p className="mt-3">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                  aktuellen rechtlichen Anforderungen entspricht. Es gilt die jeweils auf der Website
                  veröffentlichte Version.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">10. Ergänzende Rechtstexte</h2>
                <p className="mt-3">
                  Weitere rechtliche Informationen finden Sie im{' '}
                  <Link href="/impressum" className="text-primary hover:underline">
                    Impressum
                  </Link>{' '}
                  und in den{' '}
                  <Link href="/agb" className="text-primary hover:underline">
                    AGB / Nutzungsbedingungen
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

