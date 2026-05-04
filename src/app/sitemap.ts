import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.garnetbigdata.com', // Home
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.garnetbigdata.com/services', //  Services page
      lastModified: new Date(),
    },
    {
      url: 'https://www.garnetbigdata.com/case-studies', //  Case Studies
      lastModified: new Date(),
    },
    {
      url: 'https://www.garnetbigdata.com/resources', //  Resources page
      lastModified: new Date(),
    },
    {
      url: 'https://www.garnetbigdata.com/contact', //  Contact us page
      lastModified: new Date(),
    },
    // url: 'https://www.garnetbigdata.com/about', // proposed 'About' page
  ]
}
