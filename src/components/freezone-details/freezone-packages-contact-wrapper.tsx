"use client"

import Image from "next/image";
import icon from "@/assets/images/assets/ils_04.svg";
import Link from "next/link";
import React, {useState} from "react";
import FreezonePackagesSection from "@/components/freezone-details/freezone-packages-section";
import FreezoneContactSection from "@/components/freezone-details/freezone-contact-section";
import {IFreezone} from "@/data/freezone-data";

type IProp = {
    freezone: IFreezone;
}

function FreezonePackagesContactWrapper({freezone}: IProp) {
    const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

    return (
        <>
            <div className="pricing-section lg-pt-80 lg-pb-80">
                <div className="container">
                    {
                        (freezone.packageSection) && (
                            <>
                                <div className="row align-items-center">
                                    <div className="col-lg-7 text-center text-lg-start">
                                        <p className="text-lg pt-10 m0">
                                            {freezone.packageSection.description}
                                        </p>
                                    </div>
                                </div>
                                <FreezonePackagesSection packageSetter={setSelectedPackage}
                                                         packages={freezone.packageSection.packages}/>
                            </>
                        )
                    }
                    <div className="contact-banner position-relative">
                        <Image src={icon} alt="icon" className="lazy-img shapes screen_01"/>
                        <div className="row align-items-center justify-content-end">
                            <div className="col-lg-6">
                                {
                                    (freezone.packageSection) ?
                                        (
                                            <h2>
                                                Want a <span>custom pricing</span> plan for your business?
                                            </h2>
                                        )
                                        :
                                        (
                                            <h2>That is why <span>we are here</span>. {"Let\'s"} Make it Happen!</h2>
                                        )
                                }
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <Link href="/contact" className="btn-four">
                                    Let’s Talk
                                </Link>
                            </div>
                        </div>
                    </div>
                    <FreezoneContactSection selectedPackage={selectedPackage}/>
                </div>
            </div>
        </>
    )
}

export default FreezonePackagesContactWrapper;