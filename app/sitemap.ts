import { MetadataRoute } from 'next'

// ============================================================
// 🌐 DOMAIN SETUP — READ BEFORE DEPLOYING
// ============================================================
// When you have your real domain, do ONE of the following:
//
// OPTION A (Recommended): Set an environment variable.
//   In your hosting platform (e.g. Vercel), add:
//   NEXT_PUBLIC_BASE_URL=https://your-real-domain.com
//   No code changes needed.
//
// OPTION B (Quick Fix): Replace the fallback string below.
//   Change: || 'https://be-group.com'
//   To:     || 'https://your-real-domain.com'
// ============================================================
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://be-group.com'

const locales = ['en', 'ar'] as const

// Add a new entry here whenever you create a new page.
// Format: '/route-name' (must match the folder name in app/[locale]/)
const staticPages = [
  { path: '',            changeFrequency: 'weekly' as const, priority: 1.0 },  // Home
  { path: '/about',      changeFrequency: 'monthly' as const, priority: 0.8 }, // Rarely changes
  { path: '/blogs',      changeFrequency: 'weekly' as const,  priority: 0.9 }, // New blogs added often
  { path: '/contact-us', changeFrequency: 'yearly' as const,  priority: 0.5 }, // Almost never changes
  { path: '/our-work',   changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/sectors',    changeFrequency: 'monthly' as const, priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    staticPages.forEach(({ path, changeFrequency, priority }) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        // Tells Google: "This page has an Arabic and English version."
        // This prevents Google from thinking the two languages are duplicate content.
        alternates: {
          languages: {
            en: `${baseUrl}/en${path}`,
            ar: `${baseUrl}/ar${path}`,
          },
        },
      })
    })
  })

  // TODO: After API integration, fetch dynamic blog & sector IDs here
  // and push them into sitemapEntries the same way.
  // Example:
  // const blogs = await fetch(`${baseUrl}/api/blogs`).then(r => r.json())
  // blogs.forEach((blog) => { sitemapEntries.push({ url: `${baseUrl}/en/blogs/${blog.id}`, ... }) })

  return sitemapEntries
}
