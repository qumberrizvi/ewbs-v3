import Link from "next/link";
import React from "react";
import Jafar from "@/assets/images/media/jafar.jpeg";

const AboutSinglePerson = () => {
    // noinspection HtmlUnknownTarget
    return (
        <div className="text-feature-three text-feature-one position-relative mt-150 lg-mt-80 pb-80 bottom-border">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xxl-8 col-lg-6 ms-auto d-flex flex-column wow fadeInRight">
                        <div className="title-one">
                            <div className="upper-title">About Our Leaders</div>
                            <h2>Mr. Jafar Abbas, CEO of EWBS Excellence Business Services</h2>
                        </div>

                        <h4 className="mt-35 lg-mt-10">Visionary Leadership & Proven Success in Business Growth</h4>
                        <p className="text-lg mb-30">Mr. Jafar Abbas is the CEO of EWBS Excellence
                            Business Services, a trusted advisor guiding entrepreneurs and startups through all stages
                            of the business lifecycle, from ideation to execution and expansion. With over 10 years of
                            experience in business consulting, Mr. Jafar leverages his expertise in strategic planning,
                            market research, financial analysis, and legal compliance to help clients achieve peak
                            performance and sustainable growth.</p>

                        <h4>Building a Collaborative & Innovative Culture</h4>
                        <p className="text-lg mb-30">Mr. Jafar leads a team of dedicated consultants known for their
                            collaborative and data-driven
                            approach. They work closely with clients to understand their unique needs and tailor
                            solutions that yield measurable results. A firm believer in fostering a positive and
                            supportive work environment, Mr. Jafar empowers his team to unleash their full potential and
                            fosters a culture of innovation and continuous improvement.</p>

                        <h4>Passionate About Empowering Businesses & and creating impact</h4>
                        <p className="text-lg mb-30">Mr. Jafar is passionate about empowering businesses to thrive in
                            the ever-evolving landscape. He actively champions the use of emerging technologies and
                            data-driven insights while advocating for sustainable practices that contribute to both
                            business growth and positive societal impact.</p>
                        <div><Link href="/contact" className="btn-four mt-15">Let’s Talk</Link></div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 wow fadeInLeft">
                        <div
                            className="media-single-person-item me-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-40 d-flex"
                            style={{backgroundImage: `url(${Jafar.src})`}}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSinglePerson;