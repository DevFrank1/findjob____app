/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt', 'fs-extra']
    }
}

module.exports = nextConfig
