import React from "react";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import breadcrumb_bg from "@/assets/images/media/services-banner.png";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FreezoneMainlandDetailsArea from "@/components/freezone-details/freezone-mainland-details-area";
import FooterThree from "@/layout/footer/footer-three";
import {freezoneData} from "@/data/freezone-data";
import {Metadata} from "next";

type Props = {
    params: { slug: string }
}

export function generateMetadata({params}: Props): Metadata {
    const freezone = freezoneData.find((freezone) => freezone.slug === params.slug);
    if (!freezone) return {title: "Not Found - EWBS"};
    return {
        title: freezone.title,
        description: freezone.overview.descriptions?.[0],
    };
}

const Freezone = ({params}: { params: { slug: string } }) => {
    const freezone = freezoneData.find((freezone) => freezone.slug === params.slug);
    return (
        <Wrapper>
            <div className="main-page-wrapper">
                {/* header start */}
                <HeaderTwo/>
                {/* header end */}
                <main>
                    {/* breadcrumb start */}
                    <div
                        className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 lg-pb-70 md-pb-30 position-relative"
                        style={{backgroundImage: `url(${freezone?.banner?.src || breadcrumb_bg.src})`}}
                    >
                        <div className="container position-relative">
                            <div className="row align-items-center">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 text-center">
                                    <div className="tag">Freezone</div>
                                    <h1 className="hero-heading no-bg text-white">
                                        {(freezone) ? freezone.title : 'Not Found'}
                                    </h1>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </div>
                    </div>
                    {/* breadcrumb end */}

                    {/* project details area start */}
                    {
                        (freezone) ? (
                            <FreezoneMainlandDetailsArea data={freezone}/>
                        ) : (
                            <div className="container">
                                <div className="mt-80 mb-80 text-center">
                                    <h3>Not Found</h3>
                                </div>
                            </div>
                        )
                    }
                    {/* project details area end */}

                    {/* fancy banner three start */}
                    <FancyBannerThree/>
                    {/* fancy banner three end */}
                </main>

                {/* footer start */}
                <FooterThree style_2={true}/>
                {/* footer end */}
            </div>
        </Wrapper>
    );
};

export default Freezone;
