import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import about_bg from "@/assets/images/media/about-banner.png";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_25.svg";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import BlockFeatureOne from "@/components/block-feature/block-feature-one";
import TextFeatureThree from "@/components/text-feature/text-feature-three";
import FeedbackOne from "@/components/feedback/feedback-one";
import PartnersSliderOne from "@/components/partners/partners-slider-one";
import TeamSectionThree from "@/components/team/team-section-three";

export const metadata: Metadata = {
  title: "About Us - EWBS",
};

const AboutUsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="We’re top rated company"
            subtitle="Say Goodbye to Business Setup Hassles. We Make Business Incorporation with Ease! #ewbsbusiness"
            page="About Us"
            bg_img={about_bg}
            shape={shape}
            style_2={true}
          />
          {/* breadcrumb end */}

          {/* text feature one area start */}
          <TextFeatureOne style_2={true} />
          {/* text feature one area end */}

          {/* block feature one area start */}
          <BlockFeatureOne style_2={true} />
          {/* block feature one area end */}

          {/* text feature one area start */}
          <TextFeatureThree style_2={true} />
          {/* text feature one area end */}

          {/* feedback one start */}
          <FeedbackOne cls="top-border pt-80 pb-80" />
          {/* feedback one end */}

          {/* partner logo start */}
          <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
            <div className="container">
              <PartnersSliderOne />
            </div>
          </div>
          {/* partner logo end */}

          {/* team three start */}
          <TeamSectionThree />
          {/* team three end */}

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

export default AboutUsPage;
