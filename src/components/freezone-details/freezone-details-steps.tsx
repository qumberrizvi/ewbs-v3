import React from "react";
import Image from "next/image";
// internal
import icon_1 from '@/assets/images/icon/icon_81.svg';
import icon_2 from '@/assets/images/icon/icon_82.svg';
import icon_3 from '@/assets/images/icon/icon_83.svg';
import {IFreezoneProcessStep} from "@/data/freezone-data";

import document_icon from "@/assets/images/icon/icon_81.svg";

type IProp = {
  steps: IFreezoneProcessStep[];
  requiredDocuments?: boolean;
}
const FreezoneDetailsSteps = ({steps, requiredDocuments = false}: IProp) => {
  return (
      <div className="row">
        {
          steps.map((step, index) => (
              <div className="col-lg-4 wow fadeInUp" key={`freezone-process-step-${index}`}>
                <div className={`card-style-sixteen text-center mt-40 md-mt-20 ${(!!index) ? 'arrow' : ''}`}>
                  <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <Image
                        src={step.icon || document_icon}
                        alt="icon"
                        className="lazy-img"
                    />
                  </div>
                  <h4 className="fw-bold mt-35 md-mt-30 mb-15">{step.title}</h4>
                  <p className="m0 fs-5 lh-base pe-xl-5 ps-xl-5">
                    {step.description}
                  </p>
                </div>
              </div>
          ))
        }
      </div>
  );
};

export default FreezoneDetailsSteps;
