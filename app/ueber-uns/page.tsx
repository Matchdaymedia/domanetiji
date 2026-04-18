import { Metadata } from 'next'
import Card from '@/components/common/Card'
import { Heart, Target, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Über uns - Domanê Tiji e.V.',
  description: 'Erfahren Sie mehr über die Entstehung und Werte von Domanê Tiji e.V.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Solidarität',
      text: 'Wir handeln aus Mitgefühl und Verantwortung für Menschen in schwierigen Lebenslagen.',
    },
    {
      icon: Target,
      title: 'Transparenz',
      text: 'Unsere Projekte sind nachvollziehbar, bedarfsorientiert und auf langfristige Wirkung ausgelegt.',
    },
    {
      icon: Users,
      title: 'Gemeinschaft',
      text: 'Nachhaltige Veränderung entsteht dort, wo Menschen gemeinsam handeln und füreinander einstehen.',
    },
  ]

  return (
    <div className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h1 className="text-4xl text-primary md:text-5xl">Über Domanê Tiji e.V.</h1>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            Domanê Tiji e.V. wurde aus persönlichem Engagement gegründet. Seit 2018 unterstützen wir
            Kinder, Familien und Studierende in Regionen, in denen Hilfe und Bildung besonders dringend
            gebraucht werden.
          </p>
        </div>

        <Card className="mx-auto mb-10 max-w-4xl">
          <h2 className="text-3xl text-primary">Unsere Geschichte</h2>
          <div className="mt-4 space-y-4 text-text-secondary">
            <p>
              Was als private Initiative begann, wurde 2025 als gemeinnütziger Verein formalisiert.
              Unser Ziel ist es, Hilfe langfristig wirksam zu gestalten – mit Bildungsförderung,
              Stipendien und direkter Unterstützung vor Ort.
            </p>
            <p>
              Unser Leitgedanke lautet: <strong>„Jedes Kind trägt ein Licht in sich.“</strong>
            </p>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.title}>
                <span className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-2xl text-primary">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{value.text}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

