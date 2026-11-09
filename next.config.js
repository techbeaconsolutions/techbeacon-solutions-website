
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/ai-whatsapp-automation',
        destination: '/ai-automation',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
