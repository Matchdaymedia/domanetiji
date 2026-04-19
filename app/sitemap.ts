import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.domanetiji.de'
  const lastModified = new Date('2026-04-19T00:00:00.000Z')

  const routes = [
    '',
    '/ueber-uns',
    '/wirkung',
    '/unterstuetzen',
    '/kontakt',
    '/impressum',
    '/datenschutz',
    '/agb',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
