const withNextIntl = require('next-intl/plugin')(
	// This is the default (also the `src` folder is supported out of the box)
	'./i18n.ts',
);

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
	transpilePackages: ['antd'],
	swcMinify: true,
	experimental: {
		// Required:
		appDir: true,
	},
	// routes
	rewrites: async () => [
		{
			source: '/demo',
			destination: '/demo',
		},
	],
};

module.exports = withNextIntl(nextConfig);
