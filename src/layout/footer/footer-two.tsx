import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@/assets/images/logo/logo_02.svg';
import shape from '@/assets/images/shape/shape_06.svg';
import FooterSocial from './footer-social';

const FooterTwo = () => {
  return (
    <div className="footer-two">
    <div className="container">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 footer-intro mb-30">
              <div className="logo mb-35 md-mb-20">
                <Link href="/">
                  <Image src={logo} alt="logo"/>
                </Link>
              </div> 
              <p className="lh-sm mb-40 md-mb-20">
                Office 903, 9th floor, Aspin Commercial Tower, Shaikh Zayed Road, Dubai, UAE
              </p>
              {/* social link */}
              <ul className="style-none d-flex align-items-center social-icon">
                <FooterSocial/>
              </ul>
              {/* social link */}
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">Links</h5>
              <ul className="footer-nav-link style-none">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pricing">Pricing Plan</Link></li>
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="/service-v1">Our services</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-nav-link style-none">
                <li><Link href="/about-us-2">About us</Link></li>
                <li><Link href="/blog-grid">Blogs</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-xxl-2 col-lg-3 col-sm-4 mb-20">
              <h5 className="footer-title">Freezones</h5>
              <ul className="footer-nav-link style-none">
                <li><Link href="/freezones/dubai">Dubai Freezone</Link></li>
                <li><Link href="/freezones/shams">Shams Freezone</Link></li>
                <li><Link href="/freezones/amc">AMC Freezone</Link></li>
                <li><Link href="/freezones/rakez">Rakez Freezone</Link></li>
                <li><Link href="/freezones/ifza">Ifza Freezone</Link></li>
              </ul>
            </div>
          </div>
          <div className="copyright text-center">Copyright @{new Date().getFullYear()} EWBS Excellence Business Services LLC.</div>
        </div>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_01"/>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_02"/>
      </div>
    </div>
  </div>
  );
};

export default FooterTwo;