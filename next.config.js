// Importez NextConfig depuis le chemin correct
const { default: NextConfig } = require('next/dist/server/config');

// Modifiez la configuration pour inclure le domaine 'openweathermap.org'
const nextConfig = {
  ...NextConfig,
  images: {
    ...NextConfig.images,
    domains: [
      'openweathermap.org', 'images.unsplash.com' // Supprimez le protocole 'https://' du nom de domaine
    ]
  }
};

// Exportez la configuration
module.exports = nextConfig;
