import { Metadata } from 'next'
import Card from '@/components/common/Card'
import { CheckCircle2, BookOpen, GraduationCap, HandHeart, Home, Utensils } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wirkung - Domanê Tiji e.V.',
  description: 'Erfahren Sie mehr über die konkrete Wirkung der Projekte von Domanê Tiji e.V.',
}

const stats = [
  { number: '92', label: 'Studierende mit Stipendien' },
  { number: '1000+', label: 'Kinder unterstützt' },
  { number: '100+', label: 'Dörfer erreicht' },
  { number: '500+', label: 'Haushalte versorgt' },
]

const projects = [
  {
    icon: BookOpen,
    title: 'Schulmaterialien',
    text: 'Verteilung von Schulutensilien, damit Kinder trotz schwieriger Umstände lernen können.',
  },
  {
    icon: GraduationCap,
    title: 'Stipendienprogramm',
    text: 'Gezielte Förderung von Studierenden für eine stabile Bildungsbiografie.',
  },
  {
    icon: Utensils,
    title: 'Versorgung',
    text: 'Lebensmittelhilfe für Haushalte und Gemeinden in akuten Krisensituationen.',
  },
  {
    icon: HandHeart,
    title: 'Kinderhilfe',
    text: 'Unterstützung von Kindern durch Spielzeug, Alltagsmaterialien und soziale Begleitung.',
  },
  {
    icon: Home,
    title: 'Wohnraumhilfe',
    text: 'Instandsetzung beschädigter Wohnungen und Unterstützung bei grundlegenden Reparaturen.',
  },
]

export default function ImpactPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h1 className="text-4xl text-primary md:text-5xl">Unsere Wirkung</h1>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            Wir arbeiten dort, wo Unterstützung unmittelbar gebraucht wird – transparent, bedarfsorientiert
            und mit langfristiger Perspektive.
          </p>
        </div>

        <section className="mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
              <p className="font-serif text-4xl text-primary">{item.number}</p>
              <p className="mt-2 text-sm text-text-secondary">{item.label}</p>
            </div>
          ))}
        </section>

        <section className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Card key={project.title}>
                <span className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-2xl text-primary">{project.title}</h2>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{project.text}</p>
              </Card>
            )
          })}
        </section>

        <section>
          <Card className="mx-auto max-w-4xl">
            <h2 className="text-3xl text-primary">Wie wir arbeiten</h2>
            <div className="mt-5 space-y-3">
              {[
                'Transparente Kommunikation über Ziele, Fortschritte und Ergebnisse.',
                'Enge Abstimmung mit lokalen Ansprechpartnern und Gemeinden.',
                'Fokus auf nachhaltige Hilfe statt kurzfristiger Einmalmaßnahmen.',
              ].map((line) => (
                <div key={line} className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p>{line}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}

