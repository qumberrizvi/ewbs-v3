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
import FreezoneMainlandPackagesContactWrapper
    from "@/components/freezone-details/freezone-mainland-packages-contact-wrapper";
import {IFreezone} from "@/data/freezone-data";
import {IMainland} from "@/data/mainland-data";

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
    data: IFreezone | IMainland;
    type?: 'freezone' | 'mainland';
}

const FreezoneMainlandDetailsArea = ({data, type = 'freezone'}: IProp) => {
    const listChunkSize = 3;
    const numberOfChunks = Math.ceil(data.process.list.length / listChunkSize);

    return (
        <div className="project-details-one position-relative pb-150 lg-pb-80">
            <div className="project-info position-relative mb-150 lg-mb-80">
                <div className="inner-wrapper m-auto">
                    <div className="d-lg-flex align-items-center">
                        <h3>{capitalizeFirstLetter(type)} <span>Details</span></h3>
                        <ul className="style-none d-md-flex flex-fill ps-lg-5">
                            <ListItem icon={icon_2} text='Regulation' sm_text={data.zoneName}/>
                            <ListItem icon={icon_3} text='Type' sm_text={capitalizeFirstLetter(type)}/>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div>
                    <div className="upper-title">overview</div>
                    <h2>
                        {data.overview.title}
                    </h2>
                </div>
                {data.overview.descriptions.map((description, index) => (
                    <p key={`freezone-overview-description-${index}`}>{description}</p>
                ))}
                <div className="img-gallery mb-60 lg-mb-40">
                    <div className="row">
                        <div className="col-sm-8">
                            <Image src={data.gallery?.[0] || gallery_1} alt="gallery_img" className="lazy-img"
                                   style={imgStyle}/>
                        </div>
                        <div className="col-sm-4">
                            <Image src={data.gallery?.[1] || gallery_2} alt="gallery_img" className="lazy-img"
                                   style={imgStyle}/>
                            <Image src={data.gallery?.[2] || gallery_3} alt="gallery_img" className="lazy-img"
                                   style={imgStyle}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="upper-title">Process</div>
                    <h2>{data.process.title}</h2>
                </div>
                {data.process.descriptions.map((description, index) => (
                    <p key={`freezone-process-description-${index}`}>{description}</p>
                ))}
                <div className="container row">
                    {Array.from({length: numberOfChunks}, (_, index) => {
                        const start = index * listChunkSize;
                        const end = start + listChunkSize;
                        const chunk = data.process.list.slice(start, end);

                        // Render your JSX elements for each chunk
                        return (
                            <ul key={`freezone-process-ul-${index}`}
                                className="style-none list-item pb-20 col-md-4 col-sm-12 col-lg-4">
                                {chunk.map((item, itemIndex) => (
                                    <li key={`freezone-process-li-${index}-${itemIndex}`}>{item}</li>
                                ))}
                            </ul>
                        );
                    })}
                </div>
                <div
                    className="line-wrapper border-top border-bottom pt-20 pb-60 lg-pb-40 mt-60 lg-mt-40 lg-mb-40">
                    {/* project details feature start */}
                    <FreezoneDetailsSteps steps={data.process.steps}/>
                    {/* project details feature end */}
                </div>
                <FreezoneMainlandPackagesContactWrapper data={data}/>

            </div>
        </div>
    );
};

export default FreezoneMainlandDetailsArea;