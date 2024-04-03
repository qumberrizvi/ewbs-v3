import React, {useState} from 'react';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
// internal
import icon_2 from '@/assets/images/icon/icon_86.svg';
import icon_3 from '@/assets/images/icon/icon_87.svg';
// gallery images
import gallery_1 from '@/assets/images/gallery/rakez.jpg';
import gallery_2 from '@/assets/images/gallery/burj-from-creek.jpg';
import gallery_3 from '@/assets/images/gallery/img_19.jpg';
import FreezoneDetailsSteps from './freezone-details-steps';
import icon from "@/assets/images/assets/ils_04.svg";
import ContactForm from "@/components/forms/contact-form";
import FreezonePackagesContactWrapper from "@/components/freezone-details/freezone-packages-contact-wrapper";


// list item
function ListItem({icon, text, sm_text}: { icon: StaticImageData; text: string; sm_text: string }) {
    return (
        <li className="d-flex">
            <Image src={icon} alt="icon" className="lazy-img icon"/>
            <div className="ps-4">
                <div className="text1">{text}</div>
                <span>{sm_text}</span>
            </div>
        </li>
    )
}

// img style
const imgStyle = {
    height: 'auto'
}

const FreezoneDetailsArea = () => {
    return (
        <div className="project-details-one position-relative pb-150 lg-pb-80">
            <div className="project-info position-relative mb-150 lg-mb-80">
                <div className="inner-wrapper m-auto">
                    <div className="d-lg-flex align-items-center">
                        <h3>Freezone <span>Details</span></h3>
                        <ul className="style-none d-md-flex flex-fill ps-lg-5">
                            <ListItem icon={icon_2} text='Zone Name' sm_text='Ras Al Khaimah Economic Zone'/>
                            <ListItem icon={icon_3} text='Zone Type' sm_text='Free Zone'/>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div>
                    <div className="upper-title">overview</div>
                    <h2>
                        Establish Your Company in RAKEZ Freezone.
                    </h2>
                </div>
                <p>RAKEZ Freezone, established by the Ras Al Khaimah Economic Zone (RAKEZ) in the United Arab Emirates
                    (UAE), stands as a testament to fostering economic growth in the region. It provides businesses with
                    top-tier infrastructure and a conducive environment aimed at facilitating growth and prosperity.
                    With its array of incentives such as 100% tax exemption, profit repatriation, streamlined visa
                    processing, and access to premier infrastructure, RAKEZ Freezone beckons both local and foreign
                    investors.</p>
                <p>Positioned as an ideal gateway to the Middle East, it offers businesses unparalleled opportunities to
                    thrive and expand their footprint in the dynamic market landscape. Its goal is to bolster the
                    economy of the region and attract both foreign and local investors. RAKEZ Freezone is an ideal
                    destination for businesses looking to establish their presence in the Middle East region.</p>
                <div className="img-gallery mb-60 lg-mb-40">
                    <div className="row">
                        <div className="col-sm-8">
                            <Image src={gallery_1} alt="gallery_img" className="lazy-img" style={imgStyle}/>
                        </div>
                        <div className="col-sm-4">
                        <Image src={gallery_2} alt="gallery_img" className="lazy-img" style={imgStyle}/>
                            <Image src={gallery_3} alt="gallery_img" className="lazy-img" style={imgStyle}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="upper-title">Process</div>
                    <h2>Advantages Of Ras Al Khaimah Economic Zone (RAKEZ) Company Formation</h2>
                </div>
                <p>Ras Al Khaimah Economic Zone (RAKEZ) is a business hub in the United Arab Emirates (UAE) that offers
                    several benefits for companies looking to set up its operations in the region. Here are some
                    advantages of RAKEZ company formation: </p>
                <ul className="style-none list-item pb-20">
                    <li>Strategic Location</li>
                    <li>Attractive Business Environment</li>
                    <li>100% Foreign Ownership</li>
                    <li>Tax Benefits</li>
                    <li>Low Operating Costs</li>
                    <li>Fast and Efficient Licensing</li>
                    <li>Flexible Business Structures</li>
                </ul>
                <div
                    className="line-wrapper border-top border-bottom pt-20 pb-60 lg-pb-40 mt-60 lg-mt-40 mb-70 lg-mb-40">
                    {/* project details feature start */}
                    <FreezoneDetailsSteps/>
                    {/* project details feature end */}
                </div>
                <FreezonePackagesContactWrapper/>

            </div>
        </div>
    );
};

export default FreezoneDetailsArea;