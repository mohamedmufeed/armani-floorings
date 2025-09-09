import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://www.armanifloorings.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
}

export default config
