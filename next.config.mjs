/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],

  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
      ],
    }];
  },

  async redirects() {
    return [{
      source: '/.well-known/llms.txt',
      destination: '/llms.txt',
      permanent: true,
    }];
  },
}

export default nextConfig
