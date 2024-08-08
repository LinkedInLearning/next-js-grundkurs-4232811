export default async function sitemap() {
  return [
    {
      url: 'http://localhost:3000',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: 'http://localhost:3000/blog',
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9
    },
  ]
}