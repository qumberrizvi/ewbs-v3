"use client"

import React from "react";
import Link from "next/link";
import {IFreezonePackage} from "@/data/freezone-data";
import {IMainlandPackage} from "@/data/mainland-data";


// pricing card item
type IProps = {
    _package: IFreezonePackage | IMainlandPackage;
    packageSetter: React.Dispatch<React.SetStateAction<number | null>>
};

function PricingCardItem({_package, packageSetter}: IProps) {
    // noinspection HtmlUnknownAnchorTarget
    return (
        <div className="pricing-card-one light-bg d-flex flex-column w-100 h-100 text-center">
            <h2 className="fw-bold">{_package.title}</h2>
            <div className="price-banner text-lg-start d-lg-flex justify-content-center align-items-center position-relative">
                <div className="price">
                    <sup>AED</sup> {_package.price.toLocaleString()}
                </div>
            </div>

            {
                (_package.installmentCount) && (
                    <span className="bg-danger text-white rounded p-2 text-danger fw-bold mb-4 end-0 installment-badge">In {_package.installmentCount} installments</span>
                )
            }

            <ul className="style-none mb-35">
                {_package.list.map((l, i) => (
                    <li key={i}>{l}</li>
                ))}
            </ul>
            <div className="action-btn text-center">
                Begin your journey today.{" "}
                <Link href="#contact-section" onClick={() => packageSetter(_package.price)}>
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

function FreezoneMainlandPackagesSection({packageSetter, packages}: IPackagesProps) {
    return (
        <div className="tab-content mt-50 md-mt-30">
            <div className="row gx-xl-5">
                {packages.map((_package, index) => (
                    <div className="col-md-4 mb-65 md-mb-30"
                         key={`freezone-package-${index}`}>
                        <PricingCardItem
                            _package={_package}
                            packageSetter={packageSetter}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FreezoneMainlandPackagesSection;