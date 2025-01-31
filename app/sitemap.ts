export const baseUrl = 'https://your-domain.com'  // Replace with your actual domain

export default async function sitemap() {
  const routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return routes
}
