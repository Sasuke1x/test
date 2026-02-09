import { MetadataRoute } from 'next'
import { blogPosts, serviceCategories } from '@/data/siteData'

const baseUrl = 'https://housetransformersinc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/about/financing',
    '/about/insurance-claims',
    '/about/faqs',
    '/about/contact',
    '/services',
    '/locations',
    '/gallery',
    '/gallery/images',
    '/gallery/videos',
    '/blog',
    '/contact',
  ]

  const serviceRoutes = serviceCategories.map((service) => `/services/${service.slug}`)
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`)

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}
