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

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all search engine bots (Google, Bing, etc.) to crawl everything.
        userAgent: '*',
        allow: '/',
        // Block crawlers from any private or API routes you add in the future.
        // Add more paths here if needed, e.g. '/admin', '/api/'
        disallow: ['/private/', '/api/'],
      },
    ],
    // Points crawlers to your sitemap so they know all your pages.
    sitemap: `${baseUrl}/sitemap.xml`,
    // 'host' tells crawlers the preferred/canonical domain for your site.
    // This matters if your site is accessible via multiple URLs (e.g. www vs non-www).
    host: baseUrl,
  }
}
