"use client"

import React from "react";
import Link from "next/link";


// pricing card item
type IProps = {
    title: string;
    price: number;
    lists: string[];
    packageSetter:  React.Dispatch<React.SetStateAction<number | null>>
};

function PricingCardItem({title, price, lists, packageSetter}: IProps) {
    return (
        <div className="pricing-card-one light-bg d-flex flex-column w-100 h-100 text-center">
            <h2 className="fw-bold">{title}</h2>
            <div className="price-banner text-lg-start d-lg-flex justify-content-center align-items-center">
                <div className="price">
                    <sup>AED</sup> {price.toLocaleString()}
                </div>
            </div>

            <ul className="style-none mb-35">
                {lists.map((l, i) => (
                    <li key={i}>{l}</li>
                ))}
            </ul>
            <div className="action-btn text-center">
                Begin your journey today.{" "}
                <Link href="#contact-section" onClick={() => packageSetter(price)}>
                    Choose Package <i className="bi bi-chevron-right"></i>
                </Link>
            </div>
        </div>
    );
}

// pricing card item
type IPackagesProps = {
    packageSetter:  React.Dispatch<React.SetStateAction<number | null>>
};

function FreezonePackagesSection({packageSetter}: IPackagesProps) {
    return (
        <div className="tab-content mt-50 md-mt-30">
            <div className="row gx-xl-5">
                <div className="col-md-4 mb-65 md-mb-30">
                    <PricingCardItem
                        title="1 Visa"
                        price={12000}
                        lists={[
                            "Business License for 1 year",
                            "1 Investor visa Included",
                            "Free Meeting room access",
                            "Free Dubai office address",
                            "100% Ownership",
                            "Free PRO Services",
                            "Free Company Stamp",
                            "Free P.O.Box",
                        ]}
                        packageSetter={packageSetter}
                    />
                </div>
                <div className="col-md-4 mb-65 md-mb-30">
                    <PricingCardItem
                        title="2 Visa"
                        price={2000}
                        lists={[
                            "Business License for 1 year",
                            "2 Investor visa for 2 years",
                            "Free Meeting room access",
                            "Free Dubai office address",
                            "100% Ownership",
                            "Free PRO Services",
                            "Free Company Stamp",
                            "Free P.O.Box",
                        ]}
                        packageSetter={packageSetter}
                    />
                </div>
                <div className="col-md-4 mb-65 md-mb-30">
                    <PricingCardItem
                        title="10 Years"
                        price={95000}
                        lists={[
                            "1 Investor visa for 10 years",
                            "Business License for 10 Years",
                            "100% Guaranteed Bank Account",
                            "Installments based on eligibility",
                            "Inclusive of benefits from the other 2 packages",
                        ]}
                        packageSetter={packageSetter}
                    />
                </div>
            </div>
        </div>
    );
}

export default FreezonePackagesSection;