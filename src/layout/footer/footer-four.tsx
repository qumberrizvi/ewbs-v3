import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@/assets/images/logo/logo_01.svg';
import icon_1 from '@/assets/images/icon/icon_49.svg';
import icon_2 from '@/assets/images/icon/icon_50.svg';
import FooterSocial from './footer-social';

const FooterFour = () => {
  return (
    <div className="footer-four">
    <div className="container">
      <div className="inner-wrapper">
        <div className="row justify-content-between">
          <div className="col-lg-4 footer-intro mb-40">
            <div className="logo mb-25">
              <Link href="/">
                <Image src={logo} alt="logo"/>
              </Link>
            </div> 
            <p className="mb-55 md-mb-30">
              Office 903, 9th floor, Aspin Commercial Tower, Shaikh Zayed Road, Dubai, UAE
            </p>
            <ul className="style-none">
              <li className="d-flex align-items-center">
                <Image src={icon_1} alt="icon" className="lazy-img icon me-3"/>
                <Link href="#">info@ewbsbusiness.ae</Link>
              </li>
              <li className="d-flex align-items-center">
                <Image src={icon_2} alt="icon" className="lazy-img icon me-3"/>
                <Link href="#">+971 42 559 901</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4 mb-20">
            <h5 className="footer-title">Links</h5>
            <ul className="footer-nav-link style-none">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About us</Link></li>
              <li><Link href="/services">Our services</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-4 mb-20">
            <h5 className="footer-title">Company</h5>
            <ul className="footer-nav-link style-none">
              <li><Link href="/about-us">About us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-xxl-2 col-lg-3 col-sm-4 mb-20">
            <h5 className="footer-title">Freezones</h5>
            <ul className="footer-nav-link style-none">
              <li><Link href="/freezone/dubai">Dubai Freezone</Link></li>
              <li><Link href="/freezone/shams">Shams Freezone</Link></li>
              <li><Link href="/freezone/amc">AMC Freezone</Link></li>
              <li><Link href="/freezone/rakez">Rakez Freezone</Link></li>
              <li><Link href="/freezone/ifza">Ifza Freezone</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div className="container">
        <div className="bottom-footer">
          <div className="row">
            <div className="col-xl-4 col-lg-3 order-lg-3 mb-15">
              <ul className="style-none d-flex align-items-center justify-content-center justify-content-lg-end social-icon">
                <FooterSocial/>
              </ul>
          </div>
          <div className="col-xl-4 col-lg-6 order-lg-2 mb-15">
            <ul className="style-none bottom-nav d-flex justify-content-center order-lg-last">
              <li><Link href="/about-us">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-3 order-lg-1 mb-15">
            <div className="copyright text-center text-lg-start order-lg-first">
              Copyright @{new Date().getFullYear()} EWBS Excellence Business Services LLC.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FooterFour;