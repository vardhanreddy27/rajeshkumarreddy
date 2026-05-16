/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.rajeshkumarreddyadvocatekadapa.com',
  generateRobotsTxt: false,
  sitemapSize: 7000,

  changefreq: 'daily',
  priority: 0.7,

  exclude: ['/api/*'],

  // Priority tiers — homepage and service pages rank higher
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/services/')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/services' || path === '/about' || path === '/contact') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (
      path.includes('-kadapa') ||
      path.includes('-suits-') ||
      path.includes('injunction') ||
      path.includes('bail-') ||
      path.includes('divorce-') ||
      path.includes('custody-') ||
      path.includes('revenue-') ||
      path.includes('appeals-') ||
      path.includes('cheque-')
    ) {
      // Practice area pages
      priority = 0.85;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog/page/')) {
      priority = 0.3;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog/') && path !== '/blog') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/blog') {
      priority = 0.8;
      changefreq = 'daily';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
