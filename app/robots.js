export default async function robots() {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/blog/new'
      },
      {
        userAgent: 'Bingbot',
        disallow: '/'
      },
    ]
  }
}