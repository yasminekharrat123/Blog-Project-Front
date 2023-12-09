/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_URL,
    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
};

module.exports = nextConfig;
