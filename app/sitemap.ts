import { MetadataRoute } from 'next';
import { SERVICES, CITIES } from '../constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ktv-site-iota.vercel.app";

  const dynamicRoutes = CITIES.flatMap((city) =>
    SERVICES.map((service) => ({
      url: `${baseUrl}/${encodeURIComponent(city)}/${encodeURIComponent(service)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...dynamicRoutes,
  ];
}
