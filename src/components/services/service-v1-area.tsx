import React from 'react';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
// internal
import icon_1 from '@/assets/images/icon/icon_09.svg';
import icon_2 from '@/assets/images/icon/icon_55.svg';
import icon_3 from '@/assets/images/icon/icon_56.svg';
import icon_4 from '@/assets/images/icon/icon_57.svg';
import icon_5 from '@/assets/images/icon/icon_58.svg';
import shape from '@/assets/images/shape/shape_05.svg';
import service_data from '@/data/service-data';
import FeedbackOne from '../feedback/feedback-one';
import PartnersSliderOne from '../partners/partners-slider-one';
// import FancyBannerFive from '../fancy-banner/fancy-banner-five';
import FaqSectionOne from '../faq/faq-section-one';

// card item 
function CardItem({icon, title, subtitle}: { icon: StaticImageData; title: string; subtitle: string }) {
    return (
        <div className="card-style-twelve mb-40 lg-mb-20">
            <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
                <Image src={icon} alt="icon" className="lazy-img"/>
            </div>
            <h4 className="fw-bold mt-20 mb-15">{title}</h4>
            <p>{subtitle}</p>
        </div>
    )
}

const ServiceOneArea = () => {
    const services = service_data.filter(s => s.page);
    // noinspection HtmlUnknownTarget
    return (
        <>
            {/* text feature start */}
            <div className="text-feature-one mt-150 lg-mt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 wow fadeInLeft">
                            <div className="title-one">
                                <h2>1.2k+ clients base & growing.</h2>
                            </div>
                            <p className="text-lg mt-45 lg-mt-30 mb-60 lg-mb-30">Our mission is to transform your vision
                                into reality in the dynamic landscape of the Emirates. We provide tailored solutions for
                                your business to thrive amidst evolving market dynamics.</p>
                            <Link href="/contact" className="btn-three icon-link mt-15 md-mb-60">
                                <span>Request a Callback</span>
                                <Image src={icon_1} alt="icon" className="lazy-img icon ms-1"/>
                            </Link>
                        </div>
                        <div className="col-lg-6 ms-auto">
                            <div className="row">
                                <div className="col-sm-6 d-flex wow fadeInUp">
                                    <CardItem icon={icon_2} title='Expert Advisors'
                                              subtitle='Our experts bring in-depth knowledge across various domains'/>
                                </div>
                                <div className="col-sm-6 d-flex wow fadeInUp" data-wow-delay="0.1s">
                                    <CardItem icon={icon_3} title='Effective Support'
                                              subtitle='Our dedicated team offers comprehensive support'/>
                                </div>
                                <div className="col-sm-6 d-flex wow fadeInUp" data-wow-delay="0.2s">
                                    <CardItem icon={icon_4} title='Low Fees'
                                              subtitle='Cost effective solution for ensuring compliance'/>
                                </div>
                                <div className="col-sm-6 d-flex wow fadeInUp" data-wow-delay="0.3s">
                                    <CardItem icon={icon_5} title='Flexible Payments'
                                              subtitle='Payment in installments available through Tabby'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* text feature end */}

            {/* block feature start */}
            <div
                className="block-feature-one position-relative light-bg-deep mt-100 lg-mt-60 pt-120 lg-pt-60 pb-130 lg-pb-60">
                <div className="container">
                    <div className="position-relative">
                        <div className="title-one text-center mb-40 lg-mb-10">
                            <h2>Our Services</h2>
                            <p className="text-lg mt-20">We offer a comprehensive range of services designed to propel
                                your business forward.</p>
                        </div>
                        <div className="row">
                            {services.map((s, i) => (
                                <div key={i} className="col-lg-4 col-md-6 d-flex wow fadeInUp"
                                     data-wow-delay={`0.${i}s`}>
                                    <div className="card-style-two vstack tran3s w-100 mt-30">
                                        <Image src={s.icon} alt="icon" className="lazy-img icon me-auto"/>
                                        <h4 className="fw-bold mt-30 mb-25">{s.title}</h4>
                                        <p className="mb-20">{s.desc}</p>
                                        <Link href="/contact"
                                              className="arrow-btn tran3s mt-auto stretched-link"><Image src={icon_1}
                                                                                                         alt="icon"
                                                                                                         className="lazy-img"/></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Image src={shape} alt="shape" className="lazy-img shapes shape_01"/>
                <Image src={shape} alt="shape" className="lazy-img shapes shape_02"/>
            </div>
            {/* block feature end */}

            {/* feedback one start */}
            <FeedbackOne cls='pt-120 pb-120'/>
            {/* feedback one end */}

            {/* partners logo start */}
            <div className="partner-logo-one pt-50 lg-pt-50 pb-50 lg-pb-50">
                <div className="container">
                    <PartnersSliderOne/>
                </div>
            </div>
            {/* partners logo end */}

            {/* fancy banner start */}
            {/*<FancyBannerFive style_2={true}/>*/}
            {/* fancy banner end */}

            {/* faq start */}
            <FaqSectionOne cls='mt-150 lg-mt-80 mb-150 lg-mb-80'/>
            {/* faq end */}
        </>
    );
};

export default ServiceOneArea;