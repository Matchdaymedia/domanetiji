// PROJEKTE
// Neues Projekt: Ordner unter /public/projekte/<slug>/ anlegen und hier oben einen Eintrag ergänzen.
// Neueste Projekte zuerst.

export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster: string; alt: string }

export type Project = {
  slug: string
  title: string
  location: string
  date?: string
  paragraphs: string[]
  donations?: string[]
  highlights?: string[]
  media: ProjectMedia[]
}

const base = '/projekte/gertrud-zillich-haus'
const base2025 = '/projekte/ostanatolien-2025'
const base2026 = '/projekte/ostanatolien-2026'

export const projects: Project[] = [
  {
    slug: 'gertrud-zillich-haus',
    title: 'Unterstützung für das Gertrud-Zillich-Haus',
    location: 'Oberhausen',
    paragraphs: [
      'Im Rahmen unserer Vereinsarbeit durften wir das Gertrud-Zillich-Haus in Oberhausen besuchen, eine Einrichtung, die Müttern und ihren Kindern Unterstützung und Begleitung bietet. Wir wurden herzlich empfangen und erhielten einen Einblick in die wertvolle Arbeit der Einrichtung.',
      'Dank unserer großzügigen Spenderinnen und Spender konnten wir zahlreiche Sachspenden überreichen:',
    ],
    donations: ['Kinderkleidung', 'Winterjacken', 'Schuhe', 'Spielzeug', 'Malblöcke', 'Buntstifte', 'Radiergummis'],
    media: [
      { type: 'video', src: `${base}/IMG_0760.mp4`, poster: `${base}/IMG_0760-poster.jpg`, alt: 'Garten und Spielbereich des Gertrud-Zillich-Hauses' },
      { type: 'image', src: `${base}/IMG_0767.jpg`, alt: 'Gesammelte Sachspenden für das Gertrud-Zillich-Haus' },
      { type: 'image', src: `${base}/IMG_0761.jpg`, alt: 'Spielplatz am Gertrud-Zillich-Haus in Oberhausen' },
      { type: 'video', src: `${base}/IMG_0759.mp4`, poster: `${base}/IMG_0759-poster.jpg`, alt: 'Gummistiefel am Gartenzaun der Einrichtung' },
      { type: 'image', src: `${base}/IMG_0762.jpg`, alt: 'Bunt bemalter Zaun am Spielgarten' },
    ],
  },
  {
    slug: 'ostanatolien-2026',
    title: 'Hilfsreise nach Ostanatolien',
    location: 'Ostanatolien',
    date: 'Juni 2026',
    paragraphs: [
      'Im Juni 2026 waren wir erneut vor Ort, um Familien, Kinder und Menschen in schwierigen Lebenslagen zu unterstützen.',
    ],
    highlights: [
      '40 bedürftige Familien erhielten Lebensmittelpakete mit Vorräten für etwa einen Monat',
      'Schulmaterialien an Kinder verschiedener Schulen verteilt',
      'Stipendien zur Unterstützung der Bildung von Kindern und Jugendlichen ermöglicht',
      'Ein krebskranker Familienvater wurde in seiner schwierigen Lebenssituation unterstützt',
      'Ein Mädchen, das seine Mutter verloren hatte, erhielt Unterstützung',
      'Arbeiter, die unter schwierigen Bedingungen in Zelten lebten, wurden mit Hilfsgütern versorgt',
    ],
    media: [
      { type: 'video', src: `${base2026}/IMG_1199.mp4`, poster: `${base2026}/IMG_1199-poster.jpg`, alt: 'Lebensmittelpakete werden gepackt' },
      { type: 'image', src: `${base2026}/schule.jpg`, alt: 'Besuch einer Schule mit Kindern und Lehrerin' },
      { type: 'video', src: `${base2026}/IMG_1320.mp4`, poster: `${base2026}/IMG_1320-poster.jpg`, alt: 'Verteilung von Schulmaterialien an Kinder' },
      { type: 'image', src: `${base2026}/umarmung.jpg`, alt: 'Herzliche Begegnung mit einem Mädchen vor den Bergen' },
      { type: 'video', src: `${base2026}/IMG_1250.mp4`, poster: `${base2026}/IMG_1250-poster.jpg`, alt: 'Zeltlager von Arbeitern' },
      { type: 'image', src: `${base2026}/IMG_1360.jpg`, alt: 'Persönlicher Besuch bei einer älteren Frau' },
      { type: 'image', src: `${base2026}/IMG_4115.jpg`, alt: 'Mädchen mit einem Paket neuer Schuhe' },
      { type: 'video', src: `${base2026}/IMG_1238.mp4`, poster: `${base2026}/IMG_1238-poster.jpg`, alt: 'Übergabe eines Kinderbuchs' },
    ],
  },
  {
    slug: 'ostanatolien-2025',
    title: 'Hilfe vor Ort in Dersim und Erzincan',
    location: 'Dersim & Erzincan',
    date: 'Mai 2025',
    paragraphs: [
      'Im Mai 2025 waren wir in Dersim und Erzincan unterwegs, um Kinder und Familien direkt vor Ort zu unterstützen.',
    ],
    highlights: [
      'Über 50 Hilfspakete an bedürftige Familien verteilt',
      'Essensausgabe an 150 Personen',
      'Persönliche Besuche bei hilfsbedürftigen Menschen',
      'Kontakt zu einem Mann aufgenommen, dessen Wohnung durch einen Brand zerstört wurde, um Unterstützung zu ermöglichen',
    ],
    media: [
      { type: 'video', src: `${base2025}/IMG_4848.mp4`, poster: `${base2025}/IMG_4848-poster.jpg`, alt: 'Gepackte Hilfspakete mit Lebensmitteln' },
      { type: 'image', src: `${base2025}/IMG_9681.jpg`, alt: 'Kinder in Ostanatolien winken in die Kamera' },
      { type: 'video', src: `${base2025}/IMG_4860.mp4`, poster: `${base2025}/IMG_4860-poster.jpg`, alt: 'Persönlicher Besuch bei einer älteren Frau' },
      { type: 'video', src: `${base2025}/IMG_0690.mp4`, poster: `${base2025}/IMG_0690-poster.jpg`, alt: 'Durch Brand zerstörte Wohnung' },
      { type: 'video', src: `${base2025}/IMG_4894.mp4`, poster: `${base2025}/IMG_4894-poster.jpg`, alt: 'Besuch bei hilfsbedürftigen Menschen vor Ort' },
    ],
  },
]
