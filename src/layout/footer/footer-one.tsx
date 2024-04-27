import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@/assets/images/logo/logo_01.svg';
import FooterSocial from './footer-social';
import {freezoneMenu} from "@/data/menu-data";

const FooterOne = () => {
    return (
        <div className="footer-one">
            <div className="container">
                <div className="inner-wrapper">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-md-3 footer-intro mb-30">
                            <div className="logo mb-15">
                                <Link href="/" className="d-inline-block d-lg-none">
                                    <Image src={logo} alt="logo"/>
                                </Link>
                            </div>
                            <p className="text-white lh-sm mb-35">Top-rated <span className="opacity-30">business <br/> consultancy for your success</span>
                            </p>
                            {/* social link */}
                            <ul className="style-none d-flex align-items-center social-icon">
                                <FooterSocial/>
                            </ul>
                            {/* social link */}
                        </div>
                        <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
                            <h5 className="footer-title">Links</h5>
                            <ul className="footer-nav-link style-none">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us">About us</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/services">Our services</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
                            <h5 className="footer-title">Company</h5>
                            <ul className="footer-nav-link style-none">
                                <li><Link href="/about-us">About us</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
                            <h5 className="footer-title">Freezones</h5>
                            <ul className="footer-nav-link style-none">
                                {
                                    (freezoneMenu) && freezoneMenu.map((item, index) => (
                                        <li key={`freezone-menu-${index}`}><Link href={item.link}>{item.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="bottom-footer">
                    <div className="row align-items-center">
                        <div className="col-lg-7 order-lg-first mb-15">
                            <Link href="/" className="d-none d-lg-inline-block mb-25">
                            <Image src={logo} alt="logo"/>
                            </Link>
                            <div className="d-xl-flex align-items-center">
                                <ul className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                                    <li><Link href="/about-us">About</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                </ul>
                                <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                                    Copyright @{new Date().getFullYear()} EWBS Excellence Business Services LLC.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterOne;