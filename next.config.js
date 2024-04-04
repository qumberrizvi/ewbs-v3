/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/rakez-freezone',
                destination: '/freezones/rakez',
                permanent: true,
            }
        ];
    }
}

module.exports = nextConfig
