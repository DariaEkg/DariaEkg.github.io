/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/nextjs-github-pages",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  generateBuildId: async () => 'static-build',
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // 25 секунд
    pagesBufferLength: 2,
  },
  // experimental: {
  //   optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  // },
};

module.exports = nextConfig;

 