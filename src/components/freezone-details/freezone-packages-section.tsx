"use client"

import React from "react";
import Link from "next/link";
import {IFreezonePackage} from "@/data/freezone-data";


// pricing card item
type IProps = {
    title: string;
    price: number;
    lists: string[];
    packageSetter: React.Dispatch<React.SetStateAction<number | null>>
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
    packageSetter: React.Dispatch<React.SetStateAction<number | null>>,
    packages: IFreezonePackage[];
};

function FreezonePackagesSection({packageSetter, packages}: IPackagesProps) {
    return (
        <div className="tab-content mt-50 md-mt-30">
            <div className="row gx-xl-5">
                {packages.map((_package, index) => (

                    <div className="col-md-4 mb-65 md-mb-30"
                         key={`freezone-package-${index}`}>
                        <PricingCardItem
                            title={_package.title}
                            price={_package.price}
                            lists={_package.list}
                            packageSetter={packageSetter}


                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FreezonePackagesSection;