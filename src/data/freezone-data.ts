import plane_icon from "@/assets/images/icon/icon_82.svg";
import document_icon from "@/assets/images/icon/icon_81.svg";
import tick_icon from "@/assets/images/icon/icon_83.svg";
import {StaticImageData} from "next/image";

type IFreezoneOverview = {
    title: string;
    descriptions: string[];
}
export type IFreezoneProcessStep = {
    title: string;
    description: string;
    icon: StaticImageData;
}
type IFreezoneProcess = {
    title: string;
    descriptions: string[];
    list: string[];
    steps: IFreezoneProcessStep[];
}
export type IFreezonePackage = {
    title: string;
    price: number;
    list: string[];
}
type IFreezonePackageSection = {
    description: string;
    packages: IFreezonePackage[];
}
export type IFreezone = {
    title: string;
    slug: string;
    zoneName: string;
    overview: IFreezoneOverview;
    process: IFreezoneProcess;
    packageSection?: IFreezonePackageSection;
}
export const freezoneData: IFreezone[] = [
    {
        title: "Setup Your Business in Dubai Freezone",
        slug: "dubai",
        zoneName: "Dubai Freezone",
        overview: {
            title: "Establish Your Company in Dubai Freezone",
            descriptions: [
                "The Dubai free zone model has been successful in attracting foreign investment and stimulating economic growth. With over 30 free zones to choose from, investors can find a free zone that suits their industry and business needs. Companies registered in a Dubai freezone can benefit from a range of advantages, including 100% foreign ownership, no tax on corporate profits or personal income, and simplified customs procedures.",
            ],
        },
        process: {
            title: "Advantages Of Dubai Freezone Company Formation",
            descriptions: [
                "A few reasons why businesses choose to set up in Dubai’s Freezones:",
            ],
            list: [
                "100% foreign ownership",
                "No tax on corporate profits or personal income",
                "No customs duty on imports or exports",
                "Simplified customs procedures",
                "Access to advanced infrastructure and facilities",
                "Business-friendly environment and regulations",
                "Easy company set-up and registration process",
            ],
            steps: [
                {
                    title: "Application",
                    description: "An application is submitted for the registration of company",
                    icon: plane_icon,
                },
                {
                    title: "Documentation",
                    description: "Submission of documents and signing of application forms",
                    icon: document_icon,
                },
                {
                    title: "Registered",
                    description: "Company registration and formation is complete",
                    icon: tick_icon,
                },
            ],
        }
    },
    {
        title: "Setup Your Business in Shams Freezone",
        slug: "shams",
        zoneName: "Sharjah Media City",
        overview: {
            title: "Establish Your Company in SHARJAH MEDIA CITY",
            descriptions: [
                "SHAMS FREEZONE is an ideal place for businesses looking to establish their presence in the region. It provides businesses with access to tax-free profits, 100% foreign ownership, and full repatriation of profits. The freezone offers competitive advantages such as a zero-tax regime, 100% foreign ownership, access to world-class infrastructure, and business-friendly policies. Shams Free Zone offers various business services and facilities, including company formation, licensing, and registration services. It is designed to support entrepreneurs and small to medium-sized businesses by providing them access to affordable office spaces, flexible licensing options, and a range of support services.",
            ],
        },
        process: {
            title: "Why Shams?",
            descriptions: [
                "SHAMS FREEZONE is an ideal destination for businesses looking to explore the Middle East market. Here are various benefits of incorporating a company with Shams free zone. Some of them are listed below:",
            ],
            list: [
                "Low cost for setting up a company",
                "Quick registration",
                "Various business activities on a single license",
                "Shams is located in a tax-free jurisdiction",
                "Zero corporate tax",
                "Zero personal tax",
                "The entire capital and profits can be repatriated",
                "100% foreign ownership is permissible",
                "Hassle-free and streamlined procedures",
            ],
            steps: [
                {
                    title: "Application",
                    description: "An application is submitted for the registration of company",
                    icon: plane_icon,
                },
                {
                    title: "Documentation",
                    description: "Submission of documents and signing of application forms",
                    icon: document_icon,
                },
                {
                    title: "Registered",
                    description: "Company registration and formation is complete",
                    icon: tick_icon,
                },
            ],
        },
        packageSection: {
            description: "Find out which Shams package matches with your needs",
            packages: [
                {
                    title: "0 Visa",
                    price: 5750,
                    list: [
                        "Business Bank Account Assistance",
                        "Package Excludes Visa Cost",
                        "Free Dubai Office Address",
                        "Free Meeting Room Access",
                        "Free Company Stamp",
                        "100% Ownership",
                        "Free P.O. Box",
                    ],
                },
                {
                    title: "1 Visa",
                    price: 11743,
                    list: [
                        "Business Bank Account Assistance",
                        "Package Excludes Visa Cost",
                        "Free Dubai Office Address",
                        "Free Meeting Room Access",
                        "Free Company Stamp",
                        "100% Ownership",
                        "Free P.O. Box",
                    ],
                },
                {
                    title: "2 Visa",
                    price: 12863,
                    list: [
                        "Business Bank Account Assistance",
                        "Package Excludes Visa Cost",
                        "Free Dubai Office Address",
                        "Free Meeting Room Access",
                        "Free Company Stamp",
                        "100% Ownership",
                        "Free P.O. Box",
                    ],
                },
                {
                    title: "3 Visa",
                    price: 13983,
                    list: [
                        "Business Bank Account Assistance",
                        "Package Excludes Visa Cost",
                        "Free Dubai Office Address",
                        "Free Meeting Room Access",
                        "Free Company Stamp",
                        "100% Ownership",
                        "Free P.O. Box",
                    ],
                },
                {
                    title: "4 Visa",
                    price: 15103,
                    list: [
                        "Business Bank Account Assistance",
                        "Package Excludes Visa Cost",
                        "Free Dubai Office Address",
                        "Free Meeting Room Access",
                        "Free Company Stamp",
                        "100% Ownership",
                        "Free P.O. Box",
                    ],
                },
                {
                    title: "5 Visa",
                    price: 16223,
                    list: [
                        "Business Bank Account Assistance",
                        "Package Excludes Visa Cost",
                        "Free Dubai Office Address",
                        "Free Meeting Room Access",
                        "Free Company Stamp",
                        "100% Ownership",
                        "Free P.O. Box",
                    ],
                },
                {
                    title: "6 Visa",
                    price: 17343,
                    list: [
                        "Business Bank Account Assistance",
                        "Package Excludes Visa Cost",
                        "Free Dubai Office Address",
                        "Free Meeting Room Access",
                        "Free Company Stamp",
                        "100% Ownership",
                        "Free P.O. Box",
                    ],
                },
            ],
        },
    },
    {
        title: "Establish your company in Ajman Media City",
        slug: "amc",
        zoneName: "Ajman Media City",
        overview: {
            title: "Establish your company in Ajman Media City",
            descriptions: [
                "Ajman Media City Free Zone (AMCFZ) is a free zone located in Ajman, one of the seven emirates of the United Arab Emirates (UAE). While it is not located in Dubai, it is in close proximity to the city and serves as an alternative for businesses looking to establish themselves in the UAE.",
                "Some of the benefits of setting up a business in AMCFZ include 100% ownership of the company, 0% corporate and personal income tax, 100% repatriation of capital and profits, and a simplified and fast registration process. AMCFZ also provides a range of business facilities and services such as flexible office spaces, meeting rooms, and business support services.",
            ],
        },
        process: {
            title: "Advantages Of Ajman Media City Free Zone Company Formation",
            descriptions: [
                "Ajman Media City Free Zone offers a range of advantages for businesses looking to establish a presence in the UAE. With its strategic location, tax benefits, easy company formation process, and world-class infrastructure, it is a popular choice for entrepreneurs and investors from around the world.",
            ],
            list: [
                "Strategic Location",
                "100% Foreign Ownership",
                "Tax Benefits",
                "Easy Company Formation",
                "Range of Business Activities",
                "Infrastructure",
                "Visa Facilities",
            ],
            steps: [
                {
                    title: "Application",
                    description: "An application is submitted for the registration of company",
                    icon: plane_icon,
                },
                {
                    title: "Documentation",
                    description: "Submission of documents and signing of application forms",
                    icon: document_icon,
                },
                {
                    title: "Registered",
                    description: "Company registration and formation is complete",
                    icon: tick_icon,
                },
            ],
        },
        packageSection: {
            description: "Find out which AMC package matches with your needs",
            packages: [
                {
                    title: "0 Visa",
                    price: 8500,
                    list: [
                        "Licence Zero Visa Allocation",
                        "Free Dubai Office Address",
                        "Free Company Stamp Bank Assistance",
                        "Free 2 Hours Meeting Room",
                        "Free Shared Dubai P.O. Box",
                    ]
                },
                {
                    title: "1 Visa",
                    price: 11500,
                    list: [
                        "Licence One Visa Allocation",
                        "Free Dubai Office Address",
                        "Free Company Stamp Bank Assistance",
                        "Free 2 Hours Meeting Room",
                        "Free Shared Dubai P.O. Box",
                    ],
                },
                {
                    title: "2 Visa",
                    price: 14500,
                    list: [
                        "Licence Two Visa Allocation",
                        "Free Dubai Office Address",
                        "Free Company Stamp Bank Assistance",
                        "Free 2 Hours Meeting Room",
                        "Free Shared Dubai P.O. Box",
                    ],
                },
                {
                    title: "3 Visa",
                    price: 17500,
                    list: [
                        "Business Bank Account Management",
                        "Package Excludes Visa Cost",
                        "Free Dubai Office Address",
                        "Free Meeting Room Access",
                        "Free Company Stamp",
                        "100% Ownership",
                        "Free P.O. Box",
                    ],
                },
                {
                    title: "4 Visa",
                    price: 15103,
                    list: [
                        "Business Bank Account Management",
                        "Package Excludes Visa Cost",
                        "Free Dubai Office Address",
                        "Free Meeting Room Access",
                        "Free Company Stamp",
                        "100% Ownership",
                        "Free P.O. Box",
                    ],
                },
                {
                    title: "5 Visa",
                    price: 16223,
                    list: [
                        "Business Bank Account Management",
                        "Package Excludes Visa Cost",
                        "Free Dubai Office Address",
                        "Free Meeting Room Access",
                        "Free Company Stamp",
                        "100% Ownership",
                        "Free P.O. Box",
                    ],
                },
            ],
        },
    },
    {
        title: "Setup Your Business in RAKEZ Freezone",
        slug: "rakez",
        zoneName: "Ras Al Khaimah Economic Zone",
        overview: {
            title: "Establish Your Company in RAKEZ Freezone.",
            descriptions: [
                "RAKEZ Freezone, established by the Ras Al Khaimah Economic Zone (RAKEZ) in the United Arab Emirates (UAE), stands as a testament to fostering economic growth in the region. It provides businesses with top-tier infrastructure and a conducive environment aimed at facilitating growth and prosperity. With its array of incentives such as 100% tax exemption, profit repatriation, streamlined visa processing, and access to premier infrastructure, RAKEZ Freezone beckons both local and foreign investors.",
                "Positioned as an ideal gateway to the Middle East, it offers businesses unparalleled opportunities to thrive and expand their footprint in the dynamic market landscape. Its goal is to bolster the economy of the region and attract both foreign and local investors. RAKEZ Freezone is an ideal destination for businesses looking to establish their presence in the Middle East region.",
            ],
        },
        process: {
            title: "Advantages Of Ras Al Khaimah Economic Zone (RAKEZ) Company Formation",
            descriptions: [
                "Ras Al Khaimah Economic Zone (RAKEZ) is a business hub in the United Arab Emirates (UAE) that offers several benefits for companies looking to set up its operations in the region. Here are some advantages of RAKEZ company formation:",
            ],
            list: [
                "Strategic Location",
                "Attractive Business Environment",
                "100% Foreign Ownership",
                "Tax Benefits",
                "Low Operating Costs",
                "Fast and Efficient Licensing",
                "Flexible Business Structures",
            ],
            steps: [
                {
                    title: "Application",
                    description: "An application is submitted for the registration of company",
                    icon: plane_icon,
                },
                {
                    title: "Documentation",
                    description: "Submission of documents and signing of application forms",
                    icon: document_icon,
                },
                {
                    title: "Registered",
                    description: "Company registration and formation is complete",
                    icon: tick_icon,
                },
            ],
        },
        packageSection: {
            description: "Find out which RAKEZ package matches with your needs",
            packages: [
                {
                    title: "1 Visa",
                    price: 12000,
                    list: [
                        "Business License for 1 year",
                        "1 Investor visa Included",
                        "Free Meeting room access",
                        "Free Dubai office address",
                        "100% Ownership",
                        "Free PRO Services",
                        "Free Company Stamp",
                        "Free P.O.Box",
                    ],
                },
                {
                    title: "2 Visa",
                    price: 20000,
                    list: [
                        "Business License for 1 year",
                        "2 Investor visa for 2 years",
                        "Free Meeting room access",
                        "Free Dubai office address",
                        "100% Ownership",
                        "Free PRO Services",
                        "Free Company Stamp",
                        "Free P.O.Box",
                    ],
                },
                {
                    title: "10 Years",
                    price: 95000,
                    list: [
                        "1 Investor visa for 10 years",
                        "Business License for 10 Years",
                        "100% Guaranteed Bank Account",
                        "Installments based on eligibility",
                        "Inclusive of benefits from the other 2 packages",
                    ],
                },
            ],
        },
    },
    {
        title: "Establish your company in IFZA freezone",
        slug: "ifza",
        zoneName: "International Free Zone Authority",
        overview: {
            title: "Establish your company in IFZA freezone",
            descriptions: [
                "IFZA (International Free Zone Authority) is a free zone located in the Emirate of Dubai, United Arab Emirates (UAE). It was established in 2015 to provide a world-class business environment for companies to start and grow their businesses in a tax-free and customs-free environment. One of the unique features of IFZA is that it allows for 100% foreign ownership of companies, and there are no restrictions on the repatriation of capital or profits. It also offers flexible visa options for investors and their employees, making it an attractive destination for businesses looking to establish a presence in the UAE.",
            ],
        },
        process: {
            title: "Why IFZA Freezone?",
            descriptions: [
                "IFZA (International Free Zone Authority) is a free zone located in the Emirate of Dubai, United Arab Emirates. IFZA is a popular choice for entrepreneurs and businesses looking to establish a company in the UAE for several reasons:",
            ],
            list: [
                "Easy setup",
                "Cost-effective",
                "Wide range of business activities",
                "Strategic location",
                "Business-friendly environment",
            ],
            steps: [
                {
                    title: "Application",
                    description: "An application is submitted for the registration of company",
                    icon: plane_icon,
                },
                {
                    title: "Documentation",
                    description: "Submission of documents and signing of application forms",
                    icon: document_icon,
                },
                {
                    title: "Registered",
                    description: "Company registration and formation is complete",
                    icon: tick_icon,
                },
            ],
        },
        packageSection: {
            description: "Find out which IFZA package matches with your needs",
            packages: [
                {
                    title: "0 Visa",
                    price: 12900,
                    list: [
                        "Licence Zero Visa Allocation",
                        "Free Dubai Office Address",
                        "Free Company Stamp Bank Assistance",
                        "Free 2 Hours Meeting Room",
                        "Free Shared Dubai P.O. Box",
                    ],
                },
                {
                    title: "1 Visa",
                    price: 14900,
                    list: [
                        "Licence 1 Visa Allocation",
                        "Free Dubai Office Address",
                        "Free Company Stamp Bank Assistance",
                        "Free 2 Hours Meeting Room",
                        "Free Shared Dubai P.O. Box",
                    ],
                },
                {
                    title: "2 Visa",
                    price: 16900,
                    list: [
                        "Licence 2 Visa Allocation",
                        "Free Dubai Office Address",
                        "Free Company Stamp Bank Assistance",
                        "Free 2 Hours Meeting Room",
                        "Free Shared Dubai P.O. Box",
                    ],
                },
                {
                    title: "3 Visa",
                    price: 18900,
                    list: [
                        "Licence 3 Visa Allocation",
                        "Free Dubai Office Address",
                        "Free Company Stamp Bank Assistance",
                        "Free 2 Hours Meeting Room",
                        "Free Shared Dubai P.O. Box",
                    ],
                },
                {
                    title: "4 Visa",
                    price: 20900,
                    list: [
                        "Licence 4 Visa Allocation",
                        "Free Dubai Office Address",
                        "Free Company Stamp Bank Assistance",
                        "Free 2 Hours Meeting Room",
                        "Free Shared Dubai P.O. Box",
                    ],
                },
                {
                    title: "5 Visa",
                    price: 22900,
                    list: [
                        "Licence 5 Visa Allocation",
                        "Free Dubai Office Address",
                        "Free Company Stamp Bank Assistance",
                        "Free 2 Hours Meeting Room",
                        "Free Shared Dubai P.O. Box",
                    ],
                },
            ],
        },
    },
];