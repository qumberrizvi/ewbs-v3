/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/rakez-freezone',
                destination: '/freezone/rakez',
                permanent: true,
            },
            {
                source: '/Dubai-Freezone',
                destination: '/freezone/dubai',
                permanent: true,
            },
            {
                source: '/shams-freezone',
                destination: '/freezone/shams',
                permanent: true,
            },
            {
                source: '/ajman-media-city-freezone',
                destination: '/freezone/amc',
                permanent: true,
            },
            {
                source: '/ifza-freezone',
                destination: '/freezone/ifza',
                permanent: true,
            },
            {
                source: '/pro-services',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/mea-and-mofa-attestation',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/tax-residency-dubai',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/dubai-mainland-company',
                destination: '/mainland/dubai',
                permanent: true,
            },
            {
                source: '/dubai-mainland-license',
                destination: '/mainland/dubai',
                permanent: true,
            },
            {
                source: '/required-documents',
                destination: '/mainland/dubai',
                permanent: true,
            },
            {
                source: '/professional-license',
                destination: '/mainland/dubai',
                permanent: true,
            },
            {
                source: '/commercial-license',
                destination: '/mainland/dubai',
                permanent: true,
            },
            {
                source: '/residency-visa',
                destination: '/mainland/dubai',
                permanent: true,
            },
            //     TODO: Add these pages, or make redirects permanent + move them above this comment:
            {
                source: '/shams-packages',
                destination: '/freezone/shams',
                permanent: false,
            },
            {
                source: '/sharjah-freezone',
                destination: '/freezone/shams',
                permanent: false,
            },
            {
                source: '/spcfz',
                destination: '/',
                permanent: false,
            },
            {
                source: '/freelancing',
                destination: '/',
                permanent: false,
            },
            {
                source: '/company-setup',
                destination: '/',
                permanent: false,
            },
            {
                source: '/Terms-And-Condition',
                destination: '/',
                permanent: false,
            },
        ];
    },
    images: {
        domains: ['q.quora.com'],
    }
}

module.exports = nextConfig
