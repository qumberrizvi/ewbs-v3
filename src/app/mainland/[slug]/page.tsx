import {mainlandData} from "@/data/mainland-data";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import breadcrumb_bg from "@/assets/images/media/services-banner.png";
import FreezoneMainlandDetailsArea from "@/components/freezone-details/freezone-mainland-details-area";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterThree from "@/layout/footer/footer-three";
import Map from "@/components/map/map";

type Props = {
    params: { slug: string }
}

const Mainland = ({params}: Props) => {
    const mainland = mainlandData.find((mainland) => mainland.slug === params.slug);
    return (
        <Wrapper>
            <div className="main-page-wrapper">
                {/* header start */}
                <HeaderTwo noNavLinks={true}/>
                {/* header end */}
                <main>
                    {/* breadcrumb start */}
                    <div
                        className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 lg-pb-70 md-pb-30 position-relative"
                        style={{backgroundImage: `url(${mainland?.banner?.src || breadcrumb_bg.src})`}}
                    >
                        <div className="container position-relative">
                            <div className="row align-items-center">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 text-center">
                                    <div className="tag">Mainland</div>
                                    <h1 className="hero-heading no-bg text-white">
                                        {(mainland) ? mainland.title : 'Not Found'}
                                    </h1>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </div>
                    </div>
                    {/* breadcrumb end */}


                    {/* project details area start */}
                    {
                        (mainland) ? (
                            <FreezoneMainlandDetailsArea data={mainland} type={'mainland'}/>
                        ) : (
                            <div className="container">
                                <div className="mt-80 mb-80 text-center">
                                    <h3>Not Found</h3>
                                </div>
                            </div>
                        )
                    }
                    {/* project details area end */}

                    <Map/>
                    {/* fancy banner three start */}
                    <FancyBannerThree/>
                    {/* fancy banner three end */}
                </main>
                {/* footer start */}
                <FooterThree style_2={true}/>
                {/* footer end */}
            </div>
        </Wrapper>
    )
}

export default Mainland;