import React from "react";
import Image from "next/image";
// internal
import icon_1 from '@/assets/images/icon/icon_81.svg';
import icon_2 from '@/assets/images/icon/icon_82.svg';
import icon_3 from '@/assets/images/icon/icon_83.svg';

const FreezoneDetailsSteps = () => {
  return (
    <div className="row">
      <div className="col-lg-4 wow fadeInUp">
        <div className="card-style-sixteen text-center mt-40 md-mt-20">
          <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
            <Image
              src={icon_2}
              alt="icon"
              className="lazy-img"
            />
          </div>
          <h4 className="fw-bold mt-35 md-mt-30 mb-15">Application</h4>
          <p className="m0 fs-5 lh-base pe-xl-5 ps-xl-5">
            An application is submitted for the registration of company
          </p>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="card-style-sixteen text-center arrow position-relative mt-40">
          <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
            <Image
              src={icon_1}
              alt="icon"
              className="lazy-img"
            />
          </div>
          <h4 className="fw-bold mt-35 md-mt-30 mb-15">Documentation</h4>
          <p className="m0 fs-5 lh-base pe-xl-5 ps-xl-5">
            Submission of documents and signing of application forms
          </p>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
        <div className="card-style-sixteen text-center mt-40">
          <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
            <Image
              src={icon_3}
              alt="icon"
              className="lazy-img"
            />
          </div>
          <h4 className="fw-bold mt-35 md-mt-30 mb-15">Registered</h4>
          <p className="m0 fs-5 lh-base pe-xl-5 ps-xl-5">
            Company registration and formation is complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreezoneDetailsSteps;
