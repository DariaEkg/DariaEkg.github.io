import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  assetPrefix: isProd ? '/DariaEkg.github.io/' : '',
  basePath: isProd ? '/DariaEkg.github.io' : '',
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;

