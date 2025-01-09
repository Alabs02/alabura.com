import { baseUrl } from '@/sitemap';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: "/",
        // disallow: "/private/"
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
