import React from "react";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
// internal
import icon from "@/assets/images/icon/icon_09.svg";
import icon_2 from "@/assets/images/icon/icon_10.svg";
import icon_3 from "@/assets/images/icon/icon_11.svg";
import shape from "@/assets/images/shape/shape_05.svg";

// card item
function CardItem({icon, title, desc}: { icon: StaticImageData; title: string; desc: string }) {
    return (
        <div className="card-style-three d-flex pt-75 lg-pt-40 pb-45 lg-pb-20">
            <Image
                src={icon}
                alt="icon"
                className="lazy-img icon"
            />
            <div className="ps-4">
                <h4 className="fw-bold mb-20">{title}</h4>
                <p> {desc} </p>
            </div>
        </div>
    )
}

function CounterBlock({num, text, title, delay}: { num: number; text: string; title: string; delay: string }) {
    return (
        <div className="col-md-3 col-6">
            <div className="counter-block-two text-center text-md-start mt-35 wow fadeInUp"
                 data-wow-delay={`0.${delay}s`}>
                <div className="main-count fw-500">
                    <span className="counter">{num}</span>{text}
                </div>
                <p className="m0 text-md">{title}</p>
            </div>
        </div>
    )
}

const TextFeatureOne = ({style_2 = false}: { style_2?: boolean }) => {
    return (
        <>
            {!style_2 && (
                <div className="text-feature-one mt-150 lg-mt-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6 wow fadeInLeft">
                                <div className="title-one">
                                    <div className="upper-title">About us</div>
                                    <h2>1.2k+ Client using Our Services.</h2>
                                </div>
                                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                                    EWBS Excellence Business Services LLC is your premier
                                    partner for seamless business expansion in the Emirates.
                                </p>
                                <div className="d-inline-flex flex-wrap align-items-center">
                                    <Link href="/about-us" className="btn-four mt-15 me-4">
                                        More About us
                                    </Link>
                                    <Link href="/contact" className="btn-three icon-link mt-15">
                                        <span>Request a Callback</span>
                                        <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 wow fadeInRight">
                                <div
                                    className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                                    <ul className="style-none">
                                        <li>Streamlined business setup solutions</li>
                                        <li>Comprehensive financial services</li>
                                        <li>Tailored IT services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {style_2 && (
                <div className="text-feature-one mt-150 lg-mt-80">
                    <div className="container">
                        <div className="line-wrapper position-relative">
                            <div className="row align-items-center">
                                <div className="col-lg-5 wow fadeInLeft">
                                    <div className="title-one">
                                        <div className="upper-title">About us</div>
                                        <h2>1.2k+ Client using Our Services</h2>
                                    </div>
                                    <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
                                        EWBS Excellence Business Services LLC is your premier
                                        partner for seamless business expansion in the Emirates.
                                    </p>
                                    <Link href="/contact" className="btn-three icon-link mt-15 md-mb-40">
                                        <span>Request a Callback</span>
                                        <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                                    </Link>
                                </div>
                                <div className="col-lg-6 ms-auto wow fadeInRight">
                                    <CardItem icon={icon_2} title="Company's Journey"
                                              desc="At EWBS Excellence Business Services, we have been on a remarkable journey since our inception. With years of experience in providing seamless business expansion solutions in the Emirates, we have established ourselves as the premier partner for ambitious business owners and entrepreneurs. Our unwavering commitment to excellence has enabled us to guide numerous clients to success in both the Freezone and Mainland sectors."/>
                                    <CardItem icon={icon_3} title="Purpose and Goals"
                                              desc="Our purpose is simple yet powerful – to transform your vision into reality. We understand the challenges and complexities involved in establishing and growing a business in the vibrant economic landscape of the Emirates. Our goal is to provide tailored solutions that cater to your specific needs, ensuring your business thrives and navigates the ever-evolving market dynamics."/>
                                </div>
                            </div>
                            <Image src={shape} alt="shape" className="lazy-img shapes shape_01"/>
                        </div>

                        <div className="counter-wrapper mt-80 lg-mt-20">
                            <div className="row">
                                <CounterBlock num={1.2} text="k+" title="Happy Client Businesses" delay="0"/>
                                <CounterBlock num={15} text="+" title="Advisors Ready to Help" delay="1"/>
                                <CounterBlock num={4.7} text="★" title="Great Google Rating" delay="2"/>
                                <CounterBlock num={9} text="M+" title="Dirhams of Revenue Generated" delay="3"/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TextFeatureOne;
