import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FooterThree from "@/layout/footer/footer-three";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import WishlistArea from "@/components/wishlist/wishlist-area";


export const metadata: Metadata = {
  title: "Wishlist Page",
};

const WishlistPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* cart area start */}
          <WishlistArea />
          {/* cart area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default WishlistPage;
