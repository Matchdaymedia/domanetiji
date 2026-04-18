import { Metadata } from 'next'
import Card from '@/components/common/Card'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Impressum - Domanê Tiji e.V.',
  description: 'Impressum der Website von Domanê Tiji e.V.',
}

export default function ImpressumPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center text-4xl text-primary md:text-5xl">Impressum</h1>

          <Card className="mt-8">
            <div className="space-y-6 text-text-secondary">
              <div>
                <h2 className="text-2xl text-primary">Angaben gemäß § 5 TMG</h2>
                <p className="mt-3">
                  <strong>{company.name}</strong>
                  <br />
                  {company.addressLine}
                  <br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">Vertretungsberechtigte Person</h2>
                <p className="mt-3">{company.legal.representative}</p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">Vereinsregister</h2>
                <p className="mt-3">
                  Registergericht: {company.legal.registerCourt}
                  <br />
                  Registernummer: {company.legal.registerNumber}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">Kontakt</h2>
                <p className="mt-3">
                  E-Mail:{' '}
                  <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                    {company.email}
                  </a>
                  <br />
                  Telefon:{' '}
                  <a href={`tel:${company.phoneHref}`} className="text-primary hover:underline">
                    {company.phoneDisplay}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">Steuerangaben</h2>
                <p className="mt-3">
                  Steuernummer / USt-IdNr.: {company.legal.vatOrTaxNumber}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">Aufsichtsbehörde</h2>
                <p className="mt-3">{company.legal.supervisoryAuthority}</p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">Haftung für Inhalte</h2>
                <p className="mt-3">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                  als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                  rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">Haftung für Links</h2>
                <p className="mt-3">
                  Unsere Website enthält gegebenenfalls Links zu externen Websites Dritter, auf deren
                  Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                  keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                  jeweilige Anbieter oder Betreiber verantwortlich.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">Urheberrecht</h2>
                <p className="mt-3">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-primary">Hinweis</h2>
                <p className="mt-3">
                  Bitte ergänzen Sie die Platzhalterangaben zu Vertretung, Vereinsregister und
                  Steuerdaten vor der Veröffentlichung final. Dieser Text ersetzt keine individuelle
                  Rechtsberatung.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

