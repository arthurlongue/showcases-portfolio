import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	output: "standalone",
	poweredByHeader: false,
	async redirects() {
		return [
			{
				source: "/essencial/:slug",
				destination: "/premium/:slug",
				permanent: true,
			},
		]
	},
}

export default nextConfig
