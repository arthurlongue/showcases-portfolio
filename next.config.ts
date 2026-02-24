import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	output: "standalone",
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
