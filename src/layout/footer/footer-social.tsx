import React from "react";
import Link from "next/link";

const FooterSocial = () => {
  return (
    <>
      <li>
        <Link href="https://www.facebook.com/EwbsBusinessServicesLLC/" target="_blank">
          <i className="bi bi-facebook"></i>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/ewbsbusiness/" target="_blank">
          <i className="bi bi-instagram"></i>
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/channel/UC1g7aWUXRsTZJwFwv04STcg" target="_blank">
          <i className="bi bi-youtube"></i>
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/company/ewbs-business-services" target="_blank">
          <i className="bi bi-linkedin"></i>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/EwbsBusiness" target="_blank">
          <i className="bi bi-twitter"></i>
        </Link>
      </li>
    </>
  );
};

export default FooterSocial;
