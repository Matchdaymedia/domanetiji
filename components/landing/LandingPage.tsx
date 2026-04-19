'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { BookOpen, Languages, Users, GraduationCap, HandHeart, Heart } from 'lucide-react'
import { mediaConfig } from '@/config/media'
import { siteConfig } from '@/config/site'

const goals = [
  {
    icon: BookOpen,
    title: 'Bildung & Erziehung',
    text: 'Wir fördern Bildung und Erziehung für Kinder und Jugendliche in benachteiligten Regionen.',
  },
  {
    icon: Languages,
    title: 'Spracherhalt (Zazaki)',
    text: 'Wir stärken den Erhalt bedrohter Sprachen, insbesondere der Muttersprache Zazaki.',
  },
  {
    icon: Users,
    title: 'Alleinerziehende Mütter',
    text: 'Wir unterstützen gezielt Alleinerziehende, besonders Mütter, in schwierigen Lebenssituationen.',
  },
  {
    icon: GraduationCap,
    title: 'Stipendien',
    text: 'Wir vergeben Stipendien an bedürftige oder besonders förderungswürdige Personen.',
  },
  {
    icon: HandHeart,
    title: 'Mildtätige Hilfe',
    text: 'Wir leisten konkrete Unterstützung für hilfsbedürftige Menschen vor Ort.',
  },
]

const impactBullets = [
  'Schulutensilien an Schulen verteilt',
  '92 Studierende durch Stipendien unterstützt',
  'Zahlreiche Dörfer und Haushalte mit Lebensmitteln versorgt',
  'Spielzeuge an Kinder übergeben',
  'Eine durch Brand zerstörte Wohnung wieder bezugsbereit gemacht',
  'Kleinere Häuser instand gesetzt (z. B. Fenstereinbau)',
]

export default function LandingPage() {
  const heroImageSrc = mediaConfig.images.hero.src
  const [aboutImageSrc, setAboutImageSrc] = useState(mediaConfig.images.about.src)
  const [impactImage1Src, setImpactImage1Src] = useState(mediaConfig.images.impact1.src)
  const [impactImage2Src, setImpactImage2Src] = useState(mediaConfig.images.impact2.src)
  const [videoSrc, setVideoSrc] = useState(mediaConfig.video.src)
  const [messageSent, setMessageSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isMembershipSubmitting, setIsMembershipSubmitting] = useState(false)
  const [membershipSent, setMembershipSent] = useState(false)
  const [membershipError, setMembershipError] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.18 }
    )

    document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let raf = 0
    const target = 92
    const duration = 1200
    const start = performance.now()

    const run = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round(progress * target))
      if (progress < 1) raf = requestAnimationFrame(run)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          raf = requestAnimationFrame(run)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    const el = document.getElementById('count-92')
    if (el) io.observe(el)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])

  const trustLine = useMemo(
    () => `Gemeinnütziger Verein • ${siteConfig.seat} • Seit ${siteConfig.founded}`,
    []
  )

  return (
    <div className="overflow-x-hidden">
      <section id="start" className="relative flex min-h-[68vh] items-center overflow-hidden text-white md:min-h-[74vh]">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroImageSrc}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setVideoSrc(mediaConfig.video.fallbackSrc)}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,43,34,0.7)_0%,rgba(111,78,55,0.52)_45%,rgba(179,130,90,0.35)_100%)]" />
        <div className="noise-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-5xl py-8 text-center md:py-10">
            <p className="inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur-sm">
              Domanê Tiji e. V.
            </p>
            <h1 className="mt-4 text-3xl leading-tight text-white sm:text-4xl md:mt-5 md:text-6xl">
              Jedes Kind trägt ein Licht in sich.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Wir schützen, stärken und machen Hoffnung sichtbar – durch Bildung, Sprache und konkrete Hilfe.
            </p>
            <p className="mx-auto mt-2.5 max-w-2xl text-sm tracking-wide text-white/80">
              Weil Hilfe Nähe braucht und Würde den Alltag verändert.
            </p>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
              <Link
                href={siteConfig.donationLink}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-primary no-underline shadow-[0_8px_24px_rgba(41,26,16,0.25)] transition hover:-translate-y-0.5 hover:bg-white/95"
              >
                Jetzt spenden
                <Heart className="h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.membershipLink}
                className="inline-flex items-center justify-center rounded-2xl border border-white/45 bg-white/10 px-6 py-3 font-semibold text-white no-underline backdrop-blur-sm transition hover:bg-white/20"
              >
                Mitglied werden
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/80 sm:text-sm">{trustLine}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(180deg,#fbf4ec_0%,#f7ecdf_100%)] pb-14 pt-6 sm:pb-20 sm:pt-8">
        <div className="container-custom">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary">Einblick in unsere Arbeit vor Ort</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[22px] border border-border bg-[#fffaf4] p-5 shadow-sm">
              <p className="text-sm leading-7 text-text-secondary">
                Direkte Unterstützung von Familien und Kindern in strukturschwachen Regionen.
              </p>
            </div>
            <div className="rounded-[22px] border border-border bg-[#fffaf4] p-5 shadow-sm">
              <p className="text-sm leading-7 text-text-secondary">
                Fokus auf Bildung, Würde und langfristige Perspektiven.
              </p>
            </div>
            <div className="rounded-[22px] border border-border bg-[#fffaf4] p-5 shadow-sm">
              <p className="text-sm leading-7 text-text-secondary">
                Projekte in Urfa, Mardin, Dersim, Erzincan und weiteren Regionen Ostanatoliens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="section-padding bg-[#fefbf8]">
        <div className="container-custom grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <h2 className="text-2xl text-primary sm:text-3xl md:text-4xl">Über uns</h2>
            <div className="mt-4 space-y-4 text-text-secondary leading-7 sm:mt-5 sm:leading-8">
              <p>
                Domanê Tiji e. V. entstand aus persönlichem Engagement und gelebter Solidarität.
                Gegründet von Melisa Aksünger, die sich seit 2018 kontinuierlich für Menschen in Not einsetzt –
                insbesondere in Ost- und Südostanatolien.
              </p>
              <p>
                Was als private Initiative begann, entwickelte sich zu verlässlicher Unterstützungsarbeit
                für Kinder, Familien und Studierende in strukturschwachen Regionen.
              </p>
              <p className="font-semibold text-primary">
                „Jedes Kind trägt ein Licht in sich – Lasst es uns gemeinsam zum Erleuchten bringen.“
              </p>
            </div>
          </div>

          <figure className="rounded-[22px] border border-border bg-[#f9ede2] p-3 shadow-sm">
            <img
              src={aboutImageSrc}
              alt={mediaConfig.images.about.alt}
              loading="lazy"
              className="h-[280px] w-full rounded-2xl object-cover sm:h-[320px] md:h-[360px]"
              onError={() => setAboutImageSrc(mediaConfig.images.about.fallbackSrc)}
            />
            <figcaption className="mt-3 text-sm text-text-secondary">
              Engagement vor Ort – mit Nähe, Verlässlichkeit und Menschlichkeit.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding bg-[#fff4e8]">
        <div className="container-custom">
          <div className="mb-7 text-center sm:mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Momente, die bleiben</p>
            <h2 className="mt-2 text-2xl text-primary sm:text-3xl md:text-4xl">Hoffnung sichtbar machen</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <img src="/Galerie/image5.jpeg" alt="Eindrücke aus der Vereinsarbeit" loading="lazy" className="h-64 w-full rounded-[22px] object-cover sm:h-72" />
            <img src="/Galerie/image6.jpeg" alt="Kinder und Familien in Projektregionen" loading="lazy" className="h-64 w-full rounded-[22px] object-cover md:translate-y-6 sm:h-72" />
            <img src="/Galerie/image1.jpeg" alt="Gemeinsame Hilfe vor Ort" loading="lazy" className="h-64 w-full rounded-[22px] object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section id="ziele" className="section-padding bg-[#f6e7da]">
        <div className="container-custom">
          <h2 className="text-center text-2xl text-primary sm:text-3xl md:text-4xl">Unsere Ziele</h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal, index) => {
              const Icon = goal.icon
              return (
                <article
                  key={goal.title}
                  data-reveal
                  className="reveal rounded-[22px] border border-border bg-[#fffaf5] p-5 shadow-sm transition duration-500 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <span className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg text-primary sm:text-xl">{goal.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">{goal.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="wirkung" className="section-padding bg-[#fef9f3]">
        <div className="container-custom">
          <div className="rounded-[22px] border border-border bg-[linear-gradient(135deg,#8a6248,#b07b57)] p-5 text-white sm:p-7 md:p-9">
            <p className="text-sm uppercase tracking-[0.12em] text-white/85">Wirkung in Zahlen</p>
            <div className="mt-3 flex flex-col items-start gap-1.5 sm:flex-row sm:items-end sm:gap-3">
              <p id="count-92" className="font-serif text-5xl sm:text-6xl">{count}</p>
              <p className="pb-0 text-sm text-white/95 sm:pb-2 sm:text-base">Studierende durch Stipendien unterstützt</p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:mt-8 sm:gap-8 lg:grid-cols-[1fr_1fr]">
            <ul className="space-y-3 rounded-[22px] border border-border bg-[#fff6ec] p-5 text-sm leading-7 text-text-secondary sm:p-6">
              {impactBullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={impactImage1Src}
                alt={mediaConfig.images.impact1.alt}
                loading="lazy"
                className="h-48 w-full rounded-2xl object-cover sm:h-56"
                onError={() => setImpactImage1Src(mediaConfig.images.impact1.fallbackSrc)}
              />
              <img
                src={impactImage2Src}
                alt={mediaConfig.images.impact2.alt}
                loading="lazy"
                className="h-48 w-full rounded-2xl object-cover sm:h-56"
                onError={() => setImpactImage2Src(mediaConfig.images.impact2.fallbackSrc)}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mitmachen" className="section-padding bg-[#f6e7da]">
        <div className="container-custom">
          <h2 className="text-center text-2xl text-primary sm:text-3xl md:text-4xl">Mitmachen</h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-[22px] border border-border bg-[#fffaf5] p-5 shadow-sm sm:p-6">
              <h3 className="text-xl text-primary sm:text-2xl">Spenden</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Helfen Sie uns, Bildungsprojekte und Soforthilfe weiter auszubauen.
              </p>
              <p className="mt-2 text-xs text-text-secondary">Spendenquittungen können ausgestellt werden.</p>
              <Link href={siteConfig.donationLink} className="mt-5 inline-flex rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-primary/90">
                Spenden
              </Link>
            </article>

            <article id="mitglied-werden" className="rounded-[22px] border border-border bg-[#fffaf5] p-5 shadow-sm sm:p-6">
              <h3 className="text-xl text-primary sm:text-2xl">Mitglied werden</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Unterstützen Sie uns langfristig mit einer Mitgliedschaft.
              </p>
              <p className="mt-2 text-sm text-text-secondary">10€ Erwachsener • 15€ Familienbeitrag</p>
              <Link href="/#aufnahmeantrag" className="mt-5 inline-flex rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-primary no-underline hover:bg-highlight">
                Mitglied werden
              </Link>
            </article>

            <article className="rounded-[22px] border border-border bg-[#fffaf5] p-5 shadow-sm sm:p-6">
              <h3 className="text-xl text-primary sm:text-2xl">Ehrenamt</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Bringen Sie Ihre Zeit und Ihre Fähigkeiten in unsere Arbeit ein.
              </p>
              <Link href="/#kontakt" className="mt-5 inline-flex rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-primary no-underline hover:bg-highlight">
                Kontakt aufnehmen
              </Link>
            </article>

            <article className="rounded-[22px] border border-border bg-[#fffaf5] p-5 shadow-sm sm:p-6">
              <h3 className="text-xl text-primary sm:text-2xl">PayPal-MoneyPool</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Unterstützen Sie unsere Projekte schnell und unkompliziert per PayPal.
              </p>
              <p className="mt-2 text-xs text-text-secondary">Sicher online spenden, jeder Beitrag hilft.</p>
              <a
                href={siteConfig.paypalMoneyPoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-primary no-underline hover:bg-highlight"
              >
                Zum MoneyPool
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="aufnahmeantrag" className="section-padding bg-[#fff5ea]">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl rounded-[24px] border border-border bg-white p-4 shadow-sm sm:p-6 md:p-8">
            <h2 className="text-2xl text-primary sm:text-3xl md:text-4xl">Online-Aufnahmeantrag</h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary md:text-base">
              Den Antrag können Sie direkt am Handy, Tablet oder Computer ausfüllen und sofort absenden –
              ganz ohne Download oder Ausdruck.
            </p>

            <form
              name="aufnahmeantrag-domane-tiji"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mt-6 space-y-5 sm:mt-8 sm:space-y-6"
              onSubmit={async (event) => {
                event.preventDefault()
                const form = event.currentTarget as HTMLFormElement
                if (!form.checkValidity()) {
                  form.reportValidity()
                  return
                }
                setIsMembershipSubmitting(true)
                setMembershipSent(false)
                setMembershipError('')
                try {
                  const formData = new FormData(form)
                  const payload = new URLSearchParams()
                  formData.forEach((value, key) => {
                    payload.append(key, String(value))
                  })
                  await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: payload.toString(),
                  })
                  setMembershipSent(true)
                  form.reset()
                } catch {
                  setMembershipError('Senden fehlgeschlagen. Bitte später erneut versuchen.')
                } finally {
                  setIsMembershipSubmitting(false)
                }
              }}
            >
              <input type="hidden" name="form-name" value="aufnahmeantrag-domane-tiji" />
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="empfaenger_email" value={siteConfig.email} />

              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                <MembershipField label="Vollständiger Name" required>
                  <input name="name" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
                <MembershipField label="Adresse" required>
                  <input name="adresse" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
              </div>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
                <MembershipField label="Geburtsdatum" required>
                  <input type="date" name="geburtsdatum" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
                <MembershipField label="E-Mail" required>
                  <input type="email" name="email" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
                <MembershipField label="Telefon" required>
                  <input name="telefon" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
              </div>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                <MembershipField label="Eintrittsdatum" required>
                  <input type="date" name="eintrittsdatum" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
                <MembershipField label="Mitgliedsbeitrag" required>
                  <div className="space-y-2 rounded-xl border border-border bg-[#fffaf5] p-3">
                    <label className="flex items-center gap-2 text-sm text-text-secondary">
                      <input type="radio" name="mitgliedsbeitrag" value="10 EUR Erwachsener" required />
                      10 EUR pro Monat (Erwachsener)
                    </label>
                    <label className="flex items-center gap-2 text-sm text-text-secondary">
                      <input type="radio" name="mitgliedsbeitrag" value="15 EUR Familie" required />
                      15 EUR pro Monat (Familienbeitrag)
                    </label>
                  </div>
                </MembershipField>
              </div>

              <div className="rounded-xl border border-border bg-[#f7eee3] p-4 text-sm text-text-secondary">
                Der Mitgliedsbeitrag wird standardmäßig zum <strong>01. des Monats</strong> eingezogen.
                Falls Sie einen anderen Einzugstermin wünschen, schreiben Sie uns bitte über das{' '}
                <a href="/#kontakt" className="text-primary hover:underline">
                  Kontaktformular
                </a>
                .
              </div>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
                <MembershipField label="Kontoinhaber/in" required>
                  <input name="kontoinhaber" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
                <MembershipField label="IBAN" required>
                  <input name="iban" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
                <MembershipField label="Kreditinstitut" required>
                  <input name="kreditinstitut" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
              </div>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                <MembershipField label="Ort, Datum" required>
                  <input name="ort_datum" required placeholder="z. B. Oberhausen, 19.02.2026" className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
                <MembershipField label="Unterschrift (Vor- und Nachname)" required>
                  <input name="unterschrift" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </MembershipField>
              </div>

              <label className="flex items-start gap-3 rounded-xl border border-border bg-[#f7eee3] p-4 text-sm text-text-secondary">
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

              <button
                type="submit"
                disabled={isMembershipSubmitting}
                className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {isMembershipSubmitting ? 'Sende Antrag...' : 'Aufnahmeantrag jetzt absenden'}
              </button>

              {membershipSent && (
                <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                  Vielen Dank! Ihr Aufnahmeantrag wurde erfolgreich gesendet.
                </p>
              )}
              {membershipError && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {membershipError}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section id="kontakt" className="section-padding bg-[#fffaf6]">
        <div className="container-custom grid gap-5 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[22px] border border-border bg-[#fff3e7] p-5 shadow-sm sm:p-7">
            <h2 className="text-2xl text-primary sm:text-3xl">Kontaktformular</h2>
            <p className="mt-3 text-sm text-text-secondary">
              Wir freuen uns über Ihre Nachricht. Am liebsten über das Kontaktformular.
            </p>

            <form
              name="kontakt-domane-tiji"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4"
              onSubmit={async (event) => {
                event.preventDefault()
                const form = event.currentTarget as HTMLFormElement
                if (!form.checkValidity()) {
                  form.reportValidity()
                  return
                }
                setIsSubmitting(true)
                setMessageSent(false)
                setSubmitError('')
                try {
                  const formData = new FormData(form)
                  const payload = new URLSearchParams()
                  formData.forEach((value, key) => {
                    payload.append(key, String(value))
                  })
                  await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: payload.toString(),
                  })
                  setMessageSent(true)
                  form.reset()
                } catch {
                  setSubmitError('Senden fehlgeschlagen. Bitte später erneut versuchen oder per E-Mail kontaktieren.')
                } finally {
                  setIsSubmitting(false)
                }
              }}
            >
              <input type="hidden" name="form-name" value="kontakt-domane-tiji" />
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="empfaenger_email" value={siteConfig.email} />
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text-primary">Name *</span>
                <input name="name" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text-primary">E-Mail *</span>
                <input type="email" name="email" required className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text-primary">Telefon (optional)</span>
                <input name="telefon" className="w-full rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text-primary">Nachricht *</span>
                <textarea name="nachricht" required rows={5} className="w-full resize-none rounded-xl border border-border px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {isSubmitting ? 'Sende...' : 'Nachricht senden'}
              </button>
              <p className="text-sm text-text-secondary">
                Nachrichten werden an{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>{' '}
                übermittelt.
              </p>
              {messageSent && (
                <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                  Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                </p>
              )}
              {submitError && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {submitError}
                </p>
              )}
            </form>
          </div>

          <aside className="rounded-[22px] border border-border bg-[#f7e8dc] p-5 shadow-sm sm:p-7">
            <h3 className="text-xl text-primary sm:text-2xl">Kontakt</h3>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              E-Mail: {siteConfig.email}
              <br />
              Telefon: {siteConfig.phoneDisplay}
              <br />
              Erreichbar: {siteConfig.availability}
              <br />
              Sitz: {siteConfig.seat}
            </p>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              {siteConfig.legalNote}
            </p>
          </aside>
        </div>
      </section>
    </div>
  )
}

function MembershipField({
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

