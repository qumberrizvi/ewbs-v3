"use client"

import Image from "next/image";
import icon from "@/assets/images/assets/ils_04.svg";
import Link from "next/link";
import React, {useState} from "react";
import FreezoneMainlandPackagesSection from "@/components/freezone-details/freezone-mainland-packages-section";
import FreezoneContactSection from "@/components/freezone-details/freezone-contact-section";
import {IFreezone} from "@/data/freezone-data";
import {IMainland} from "@/data/mainland-data";
import FeedbackOne from "@/components/feedback/feedback-one";
import TeamSectionThree from "@/components/team/team-section-three";

type IProp = {
    data: IFreezone | IMainland;
}

function FreezoneMainlandPackagesContactWrapper({data}: IProp) {
    const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

    // noinspection HtmlUnknownAnchorTarget
    return (
        <>
            <div className="pricing-section pt-0 pt-lg-4 lg-pb-80">
                <div className="container">
                    {
                        (data.packageSection) && (
                            <>
                                <div className="row align-items-center">
                                    <div className="col-lg-7 text-center text-lg-start">
                                        <p className="text-lg pt-10 m0">
                                            {data.packageSection.description}
                                        </p>
                                    </div>
                                </div>
                                <FreezoneMainlandPackagesSection packageSetter={setSelectedPackage}
                                                                 packages={data.packageSection.packages}/>
                            </>
                        )
                    }
                    <div className="contact-banner position-relative bottom-border">
                        <Image src={icon} alt="icon" className="lazy-img shapes screen_01 d-none d-md-block"/>
                        <div className="row align-items-center justify-content-end">
                            <div className="col-lg-6">
                                {
                                    (data.packageSection) ?
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
                                <Link href="#contact-section" className="btn-four">
                                    Let’s Talk
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* feedback one start */}
                    <FeedbackOne />
                    {/* feedback one end */}

                    {/* team three start */}
                    <TeamSectionThree blank_background={true}/>
                    {/* team three end */}

                    <FreezoneContactSection selectedPackage={selectedPackage}/>
                </div>
            </div>
        </>
    )
}

export default FreezoneMainlandPackagesContactWrapper;