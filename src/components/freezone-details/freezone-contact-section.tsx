"use client"

import React from "react";
import {LeadForm} from "@/components/lead-form/lead-form";

// pricing card item
type IProps = {
    selectedPackage: number | null;
};

function FreezoneContactSection({selectedPackage}: IProps) {
    return (
        <>
            <div className="text-feature-three text-feature-seven position-relative mt-120 lg-mt-80">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xxl-5 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight pb-5rem">
                            <div>
                                <div className="upper-title">Begin Your Journey</div>
                                <h2>Connect with us today.</h2>
                            </div>
                            <p className="mb-55">Say Goodbye to Business Setup Hassles. We Make Business
                                Incorporation Easy! #ewbsbusiness</p>
                            <ul className="style-none">
                                <li>Client-Centric Approach</li>
                                <li>Expertise Across Domains</li>
                                <li>Strategic Location Insights</li>
                            </ul>
                            <div className="counter-wrapper border-0 mt-10">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-5">
                                        <div className="counter-block-one mt-20">
                                            <div className="main-count fw-bold"><span className="counter">1.2</span>k+
                                            </div>
                                            <p className="m0 fs-5 lh-base">Businesses Incorporated</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-7">
                                        <div className="counter-block-one mt-20">
                                            <div className="main-count fw-bold"><span
                                                className="counter">4.7</span>★
                                            </div>
                                            <p className="m0 fs-5 lh-base">Highly rated on Google</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xxl-6 col-lg-5 order-lg-first wow fadeInLeft bg-wrapper light-bg">
                            <span className="position-absolute visually-hidden" id="contact-section"></span>
                            <div className="form-style-one">
                                {/* form start */}
                                {/*<ContactForm selectedPackage={selectedPackage}/>*/}
                                <LeadForm/>
                                {/* form end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FreezoneContactSection;