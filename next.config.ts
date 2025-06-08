import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.yandexcloud.net',
                pathname: '/**', // можно сузить, если нужно
            },
        ],
    },
};

export default nextConfig;
