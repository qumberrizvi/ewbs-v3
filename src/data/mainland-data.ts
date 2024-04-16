import {StaticImageData} from "next/image";
import plane_icon from "@/assets/images/icon/icon_82.svg";
import document_icon from "@/assets/images/icon/icon_81.svg";
import tick_icon from "@/assets/images/icon/icon_83.svg";

type IMainlandOverview = {
    title: string;
    descriptions: string[];
}
export type IMainlandProcessStep = {
    title: string;
    description: string;
    icon: StaticImageData;
}
type IMainlandProcess = {
    title: string;
    descriptions: string[];
    list: string[];
    steps: IMainlandProcessStep[];
}
export type IMainlandPackage = {
    title: string;
    price: number;
    list: string[];
}
type IMainlandPackageSection = {
    description: string;
    packages: IMainlandPackage[];
}
export type IMainland = {
    title: string;
    slug: string;
    zoneName: string;
    overview: IMainlandOverview;
    process: IMainlandProcess;
    packageSection?: IMainlandPackageSection;
}

export const mainlandData: IMainland[] = [
    {
        title: "COMPANY SETUP IN DUBAI MAINLAND",
        slug: "dubai",
        zoneName: "Dubai Mainland",
        overview: {
            title: "MAINLAND - DUBAI - Why Dubai?",
            descriptions: [
                "Dubai is known for being a business-friendly city with a rapidly growing economy, making it a popular destination for entrepreneurs and investors looking to set up their businesses. Dubai is also known as \“The Smart City and The Economic Capital of the UAE.\”",
                "You will find the world's top universities, a financial ecosystem that supports many different currencies and languages, world-class research centers, and an infrastructure that nurtures innovation.",
                "Dubai offers an unmatched combination of talent and opportunity, providing access to over 200 million consumers around the world. Plus, Dubai has been built from scratch as a tech-friendly metropolis with modern infrastructure - all geared towards boosting economic growth.",
            ],
        },
        process: {
            title: "Advantages Of Dubai Mainland Company Formation",
            descriptions: [
                "A few reasons why businesses choose to set up in Dubai Mainland:",
            ],
            list: [
                "Investment protection",
                "Efficient logistics networks",
                "Strategic Location",
                "Infrastructure",
                "Business-friendly Policies",
                "Multicultural Environment",
                "Access to Talent"
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
            description: "Get a dubai mainland trade licence with 100% foreign ownership",
            packages: [
                {
                    title: "Professional Licence",
                    price: 11999,
                    list: [
                        "Dubai Trade Licence for the Mainland",
                        "Visa Distribution",
                        "Local Service Agent / Corporate Sponsorship",
                        "Shaikh Zayed Road Premium Office Address",
                        "Payment Voucher for Reservations",
                        "Payment Receipt",
                        "Service of documentation",
                        "Account Manager"
                    ]
                }
            ]
        }
    },
];