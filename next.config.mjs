/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["res.cloudinary.com"], // Permite el dominio de Cloudinary
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "/dzg6yhqzx/**", // Configura el patrón de ruta de Cloudinary
			},
		],
	},
};

export default nextConfig;
