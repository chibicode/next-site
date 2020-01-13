const path = require('path');
const rehypePrism = require('@mapbox/rehype-prism');
const nextMDX = require('@next/mdx');
const bundleAnalyzer = require('@next/bundle-analyzer');
const rehypeReadme = require('./lib/rehype-readme');

// only enable rehypeReadme for this file
// because the github relative path replacement
// might break things in other markdowns
const withGitHubMDX = nextMDX({
  extension: path.join(__dirname, 'components', 'docs', 'docs.mdx'),
  options: {
    hastPlugins: [
      rehypePrism,
      [
        rehypeReadme,
        {
          repo: 'zeit/next.js',
          branch: 'master',
          level: 4
        }
      ]
    ]
  }
});

const withMDX = nextMDX({
  extension: /[/\\](pages|blog|telemetry|components[/\\](home|server-side-rendering))[/\\](.+)\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const nextConfig = {
  target: 'experimental-serverless-trace', // Not required for Now, but used by GitHub Actions
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx'],
  experimental: {
    babelMultiThread: true,
    modern: true,
    granularChunks: true,
    deferScripts: true,
    prefetchPreload: true,
    catchAllRouting: true,
    rewrites() {
      return [
        {
          source: '/feed.xml',
          destination: '/_next/static/feed.xml'
        },
        {
          source: '/docs{/}?',
          destination: '/docs/getting-started'
        }
      ];
    },
    redirects() {
      return [
        {
          source: '/learn{/}?',
          statusCode: 301,
          destination: '/learn/basics/getting-started'
        },
        {
          source: '/learn/basics/server-side-support-for-clean-urls{/}?',
          statusCode: 301,
          destination: '/learn/basics/clean-urls-with-dynamic-routing'
        },
        {
          source: '/learn/excel/automatic-prerendering{/}?',
          statusCode: 301,
          destination: '/learn/excel/automatic-static-optimization'
        },
        {
          source: '/learn/basics/navigate-between-pages/hoc{/}?',
          statusCode: 301,
          destination: '/learn/basics/navigate-between-pages/link'
        },
        {
          source: '/features{/}?',
          statusCode: 301,
          destination: '/features/static-exporting'
        },
        {
          source: '/features/ssr{/}?',
          statusCode: 301,
          destination: '/features/server-side-rendering'
        },
        {
          source: '/case-studies{/}?',
          statusCode: 301,
          destination: '/case-studies/hulu'
        },
        {
          source: '/api{/}?',
          statusCode: 301,
          destination: '/docs/api-routes/introduction'
        },
        {
          source: '/docs/api{/}?',
          statusCode: 301,
          destination: '/docs/api-routes/introduction'
        }
      ];
    }
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer && !dev) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = { ...(await originalEntry()) };

        // These scripts can import components from the app and use ES modules
        entries['./scripts/build-rss.js'] = './scripts/build-rss.js';
        entries['./scripts/index-docs.js'] = './scripts/index-docs.js';

        return entries;
      };
    }

    return config;
  }
};

module.exports = withGitHubMDX(withMDX(withBundleAnalyzer(nextConfig)));
