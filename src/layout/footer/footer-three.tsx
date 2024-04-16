import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@/assets/images/logo/logo_02.svg';
import shape_1 from '@/assets/images/shape/shape_36.svg';
import shape_2 from '@/assets/images/shape/shape_37.svg';
import shape_3 from '@/assets/images/shape/shape_39.svg';
import FooterSocial from './footer-social';

const FooterThree = ({style_2}:{style_2?:boolean}) => {
  return (
    <div className="footer-three">
			<div className="container">
				<div className="inner-wrapper position-relative">
					<div className="row justify-content-between">
						<div className="col-lg-4 footer-intro mb-30">
							<div className={`round-bg ${style_2?'color-two':''} rounded-circle text-center d-flex flex-column align-items-center justify-content-center`}>
								<div className="logo mb-15">
									<Link href="/">
										<Image src={logo} alt="logo"/>
									</Link>
								</div> 
								<p className="lh-sm mb-45 lg-mb-30">Office 903, 9th floor, Aspin Commercial Tower, Shaikh Zayed Road, Dubai, UAE</p>
								<p className="m0"><Link href="tel:+971 42 559 901">+971 42 559 901</Link></p>
							</div>
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
					<Image src={shape_1} alt="shape" className="lazy-img shapes shape_01"/>
					<Image src={style_2 ? shape_3 : shape_2} alt="shape" className="lazy-img shapes shape_02"/>
				</div>
			</div>
		<div className="container">
			<div className="bottom-footer">
				<div className="row">
					<div className="col-xl-4 col-lg-3 order-lg-3 mb-15">
						<ul className="style-none d-flex align-items-center justify-content-center justify-content-lg-end social-icon">
								{/* social link */}
								<FooterSocial/>
								{/* social link */}
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

export default FooterThree;