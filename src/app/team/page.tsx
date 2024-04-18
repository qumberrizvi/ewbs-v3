import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_31.svg";
import TeamOneArea from "@/components/team/team-v1-area";

export const metadata: Metadata = {
  title: "Team v1 Page",
};

const TeamOnePage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our Talented Experts"
            subtitle="Meet our experts, guiding you through business intricacies with precision"
            page="Team"
            shape={shape}
          />
          {/* breadcrumb end */}

          {/* team v1 area start */}
          <TeamOneArea />
          {/* team v1 area end */}

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

export default TeamOnePage;
