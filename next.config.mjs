/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com", // Add your image host here
				port: "",
				pathname: "**", // Match all paths under this domain
			},
		],
	},
};

export default nextConfig;
