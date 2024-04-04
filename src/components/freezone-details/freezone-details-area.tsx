import React from 'react';
import Image, {StaticImageData} from 'next/image';
// internal
import icon_2 from '@/assets/images/icon/icon_86.svg';
import icon_3 from '@/assets/images/icon/icon_87.svg';
// gallery images
import gallery_1 from '@/assets/images/gallery/rakez.jpg';
import gallery_2 from '@/assets/images/gallery/burj-from-creek.jpg';
import gallery_3 from '@/assets/images/gallery/img_19.jpg';
import FreezoneDetailsSteps from './freezone-details-steps';
import FreezonePackagesContactWrapper from "@/components/freezone-details/freezone-packages-contact-wrapper";
import {IFreezone} from "@/data/freezone-data";


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
type IProp = {
    freezone: IFreezone;
}

const FreezoneDetailsArea = ({freezone}: IProp) => {
    return (
        <div className="project-details-one position-relative pb-150 lg-pb-80">
            <div className="project-info position-relative mb-150 lg-mb-80">
                <div className="inner-wrapper m-auto">
                    <div className="d-lg-flex align-items-center">
                        <h3>Freezone <span>Details</span></h3>
                        <ul className="style-none d-md-flex flex-fill ps-lg-5">
                            <ListItem icon={icon_2} text='Zone Name' sm_text={freezone.zoneName}/>
                            <ListItem icon={icon_3} text='Zone Type' sm_text='Free Zone'/>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div>
                    <div className="upper-title">overview</div>
                    <h2>
                        {freezone.overview.title}
                    </h2>
                </div>
                {freezone.overview.descriptions.map((description, index) => (
                    <p key={`freezone-overview-description-${index}`}>{description}</p>
                ))}
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
                    <h2>{freezone.process.title}</h2>
                </div>
                {freezone.process.descriptions.map((description, index) => (
                    <p key={`freezone-process-description-${index}`}>{description}</p>
                ))}
                <ul className="style-none list-item pb-20">
                    {freezone.process.list.map((item, index) => (
                        <li key={`freezone-process-li-${index}`}>{item}</li>
                    ))}
                </ul>
                <div
                    className="line-wrapper border-top border-bottom pt-20 pb-60 lg-pb-40 mt-60 lg-mt-40 mb-70 lg-mb-40">
                    {/* project details feature start */}
                    <FreezoneDetailsSteps steps={freezone.process.steps}/>
                    {/* project details feature end */}
                </div>
                <FreezonePackagesContactWrapper freezone={freezone}/>

            </div>
        </div>
    );
};

export default FreezoneDetailsArea;