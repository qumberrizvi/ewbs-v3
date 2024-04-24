'use client'
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
// internal
import bg_1 from "@/assets/images/media/home-banner-red.png";
import m_bg_1 from "@/assets/images/media/home-banner-red-phone.png";
import useWindowOrientation from "@/hooks/use-window-orientation";

// slider bg
const slider_bg = [bg_1];
const mobile_slider_bg = [m_bg_1];
// slider setting
const slider_setting = {
    dots: false,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 7000,
};

const HeroBannerTwo = () => {
    const orientation = useWindowOrientation();


    // noinspection HtmlUnknownTarget
    return (
        <div className="hero-banner-one pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 vh-100 position-relative">
            <Slider {...slider_setting} className="hero-slider-one m0">
                {((orientation === 'portrait') ? mobile_slider_bg : slider_bg).map((bg, i) => (
                    <div className="item m0" key={i}>
                        <div
                            className="hero-img"
                            style={{backgroundImage: `url(${bg.src})`}}
                        ></div>
                    </div>
                ))}
            </Slider>
            <div className="container position-relative">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 me-auto">
                        <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
                            Ready to Start<br/>
                            Your Business<br/>
                            in Dubai?
                        </h1>
                        <p
                            className="text-xl pt-35 pb-25 wow fadeInUp text-white"
                            data-wow-delay="0.1s"
                        >
                            From idea to reality: UAE business setup simplified with EWBS expertise! #ewbsbusiness
                        </p>
                        <Link href="/contact"
                              className="btn-four-inverted icon-link wow fadeInUp"
                              data-wow-delay="0.2s"
                        >
                            <span>Let’s Talk →</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/*<Link href="/contact"*/}
            {/*      className="more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft"*/}
            {/*      target="_blank"*/}
            {/*>*/}
            {/*    <i className="bi bi-arrow-up-right"></i>*/}
            {/*</Link>*/}
        </div>
    );
};

export default HeroBannerTwo;
