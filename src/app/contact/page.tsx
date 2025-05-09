import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import ContactArea from "@/components/contact/contact-area";
import FooterThree from "@/layout/footer/footer-three";
import shape from "@/assets/images/shape/shape_33.svg";
import contactBanner from "@/assets/images/media/contant-banner.png";

export const metadata: Metadata = {
  title: "Contact - EWBS",
};

const ContactPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Contact us for inquiries"
            subtitle="Get our all info and message us directly from here."
            page="Contact"
            shape={shape}
            bg_img={contactBanner}
          />
          {/* breadcrumb end */}

          {/* contact area start */}
          <ContactArea />
          {/* contact area end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ContactPage;
