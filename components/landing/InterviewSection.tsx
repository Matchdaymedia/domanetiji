'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play } from 'lucide-react'

const VIDEO_ID = 'RfTZvs6xriY'
const POSTER = '/projekte/ostanatolien-2026/umarmung.jpg'

const topics = [
  'Gründung und Entstehung von Domanê Tiji e.V.',
  'Unsere Motivation und die Hilfsaktionen in Dersim und Erzincan',
  'Unterstützung bedürftiger Familien',
  'Bildungs- und Zukunftschancen für Kinder',
  'Bewahrung der gefährdeten Sprache Zazaki (Kirmanckî)',
  'Finanzierung durch Spenden und Mitgliedsbeiträge',
  'Zukunftspläne: Bildungsprojekte, Stipendien und Patenschaften',
]

export default function InterviewSection() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section id="interview" className="section-padding bg-[#fef9f3]">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-12">
          <div className="relative aspect-video overflow-hidden rounded-[22px] border border-border bg-black shadow-sm">
            {loaded ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="Interview mit Domanê Tiji e.V."
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setLoaded(true)}
                className="group absolute inset-0 h-full w-full text-left"
                aria-label="Interview-Video laden und abspielen"
              >
                <img src={POSTER} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80 transition group-hover:opacity-70" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg transition group-hover:scale-105 sm:h-20 sm:w-20">
                  <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4 text-xs leading-5 text-white/90 sm:p-5 sm:text-sm">
                  Mit Klick wird das Video von YouTube geladen. Dabei werden Daten an Google übertragen.{' '}
                  <Link href="/datenschutz" className="underline" onClick={(e) => e.stopPropagation()}>
                    Mehr erfahren
                  </Link>
                </span>
              </button>
            )}
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.12em] text-text-secondary">Im Gespräch</p>
            <h2 className="mt-2 text-2xl text-primary sm:text-3xl md:text-4xl">Unser Interview</h2>
            <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              Im Interview erzählen wir, wie Domanê Tiji e.V. entstanden ist, was uns antreibt und wie es weitergeht.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-text-secondary sm:text-base">
              {topics.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={`https://youtu.be/${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-primary no-underline hover:bg-highlight"
            >
              Auf YouTube ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
