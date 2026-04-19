import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.domanetiji.de'

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
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
