export const baseUrl = 'https://alabura-com.vercel.app'

export default async function sitemap() {
  // let blogs = getBlogPosts().map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.metadata.publishedAt,
  // }))

  let routes = ['', '/about-alabura-usman'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  // return [...routes, ...blogs]
  return [...routes];
}
