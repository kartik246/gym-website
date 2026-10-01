import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Team Iron Fit Gym & Supplements',
    short_name: 'Team Iron Fit',
    description: 'Official Web App for Team Iron Fit Gym, Rajouri Garden, New Delhi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#CCFF00',
    icons: [
      {
        src: '/images/gym/official_logo.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/images/gym/official_logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
