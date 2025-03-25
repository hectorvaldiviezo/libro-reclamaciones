/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'milla.grupopakatnamu.com',
                pathname: '**'
            }
        ]
    },
};

export default nextConfig;
