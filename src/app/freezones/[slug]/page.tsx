import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import breadcrumb_bg from "@/assets/images/media/services-banner.png";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterTwo from "@/layout/footer/footer-two";
import FreezoneDetailsArea from "@/components/freezone-details/freezone-details-area";
import FooterThree from "@/layout/footer/footer-three";

export const metadata: Metadata = {
  title: "Rakez - Freezone",
};

const RakezFreezone = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <div
            className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 lg-pb-70 md-pb-30 position-relative"
            style={{ backgroundImage: `url(${breadcrumb_bg.src})` }}
          >
            <div className="container position-relative">
              <div className="row align-items-start">
                <div className="col-lg-8 text-center">
                  <div className="tag">Freezone</div>
                  <h1 className="hero-heading no-bg text-white">
                    Setup Your Business in RAKEZ Freezone
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* breadcrumb end */}

          {/* project details area start */}
          <FreezoneDetailsArea/>
          {/* project details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default RakezFreezone;
