import React from "react";

const NewsletterBanner = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      <div className="newsletter-banner">
        <div className="container">
          <div className={`main-wrapper ${style_2 ? "" : "top-border"} bottom-border`}>
            <div className="row">
              <div className="col-lg-6">
                <h2 className={`${style_2 ? "" : "text-dark"} fw-bold`}>
                  Our Newsletter.
                </h2>
                <p className="text-lg md-pb-20">
                  Get instant news by subscribe to our daily newsletter
                </p>
              </div>
              <div className="col-lg-6">
                <form action="#" className="m-auto ms-lg-auto">
                  <div className="d-flex align-items-center justify-content-between">
                    <input type="email" placeholder="Enter your email address" />
                    <button className="rounded-circle tran3s">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterBanner;
