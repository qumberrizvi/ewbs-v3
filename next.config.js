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
            //     TODO: Add these pages, or make redirects permanent + move them above this comment:
            {
                source: '/dubai-mainland-company',
                destination: '/',
                permanent: false,
            },
            {
                source: '/dubai-mainland-license',
                destination: '/',
                permanent: false,
            },
            {
                source: '/required-documents',
                destination: '/',
                permanent: false,
            },
            {
                source: '/professional-license',
                destination: '/',
                permanent: false,
            },
            {
                source: '/commercial-license',
                destination: '/',
                permanent: false,
            },
            {
                source: '/residency-visa',
                destination: '/',
                permanent: false,
            },
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
                source: '/dubai-mainland-license',
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
            {
                source: '/Privacy-Policy',
                destination: '/',
                permanent: false,
            },
        ];
    }
}

module.exports = nextConfig
