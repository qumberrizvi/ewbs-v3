import React from "react";
import Link from "next/link";

const BlockFeatureThree = () => {
    // noinspection HtmlUnknownTarget
    return (
        <div className="block-feature-three position-relative mt-150 lg-mt-80 pb-150 lg-pb-80 sm-pb-60">
            <div className="container">
                <div className="position-relative">
                    <div className="row">
                        <div className="col-md-6 wow fadeInLeft">
                            <div className="title-one mb-90 lg-mb-50">
                                <h2>Our achievements.</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-xxl-5">
                        <div className="col-lg-8">
                            <div
                                className="block-one pt-45 lg-pt-30 pb-20 ps-3 ps-xl-5 pe-xl-5 pe-3 position-relative border-30 wow fadeInUp">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="tag d-inline-block border-30 border-white fw-500 text-uppercase text-white mb-15">
                                            Consulting
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <h3 className="block-title-white d-inline-block position-relative">
                                            <Link href="/about-us">
                                                Helped 1000+ businesses establish successfully in the Emirates.
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="block-two border-30 d-flex mt-45 lg-mt-30 wow fadeInUp">
                                <div className="img-wrapper"></div>
                                <div className="text-wrapper bg-white">
                                    <h3 className="block-title d-inline-block position-relative mt-40 mb-5 lg-mb-30">
                                        <Link href="/about-us" className="text-danger">
                                            Obtained a satisfaction rating exceeding 95% from
                                            <br className="d-none d-lg-block"/> our clients.
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="tag text-uppercase fw-500">Rating</div>
                                        <Link href="/about-us"
                                              className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                                        >
                                            <i className="bi bi-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div
                                className="block-three border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-40 lg-pt-30 pb-30 md-mt-30 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <h3 className="block-title d-inline-block position-relative mt-20 mb-80 lg-mb-50">
                                    <Link href="/about-us">
                                        Enhanced services to meet diverse client needs.
                                    </Link>
                                </h3>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="tag text-uppercase fw-500">SERVICES</div>
                                    <Link href="/about-us"
                                          className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                                    >
                                        <i className="bi bi-arrow-up-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className="block-four border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-15 pb-30 mt-45 lg-mt-30 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <h3 className="block-title-white d-inline-block position-relative mt-250 mb-20 lg-mb-150 sm-mb-100">
                                    <Link href="/about-us">
                                        Sustained lasting partnerships with top
                                        <br className="d-none d-xl-block"/>
                                        firms.
                                    </Link>
                                </h3>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="tag text-uppercase fw-500">SERVICES</div>
                                    <Link href="/about-us"
                                          className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                                    >
                                        <i className="bi bi-arrow-up-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-btn sm-mt-40">
                        <Link href="/about-us" className="btn-five icon-link">
                            <span className="text">See all stories</span>
                            <div
                                className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                                <i className="bi bi-arrow-up-right"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockFeatureThree;
