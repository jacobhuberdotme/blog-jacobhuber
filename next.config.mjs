import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';

const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.loopring.io',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude ws from being bundled on the server
      config.externals.push('ws');
    } else {
      // Prevent issues with bufferutil and utf-8-validate modules in the browser
      config.resolve.alias['bufferutil'] = false;
      config.resolve.alias['utf-8-validate'] = false;
    }
    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);