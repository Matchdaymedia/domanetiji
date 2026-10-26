import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Domanê Tiji e.V.',
    short_name: 'Domanê Tiji',
    description:
      'Domanê Tiji e.V. fördert Bildung, Spracherhalt und soziale Unterstützung in strukturschwachen Regionen.',
    start_url: '/',
    id: '/',
    display: 'standalone',
    background_color: '#F5F1EB',
    theme_color: '#8B6F47',
    lang: 'de-DE',
    icons: [
      {
        src: '/domane-tiji-logo-bunt.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/domane-tiji-logo-bunt.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
