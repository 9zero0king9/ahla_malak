module.exports = {
  siteUrl: 'https://ahlamalak.com',
  generateRobotsTxt: false,
  sitemapSize: 50000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/api'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/admin'],
      },
    ],
    additionalSitemaps: [
      'https://ahlamalak.com/sitemap.xml',
    ],
  },
};
