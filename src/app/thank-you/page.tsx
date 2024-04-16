import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// internal
import Wrapper from "@/layout/wrapper";
import ils_1 from "@/assets/images/assets/ils_02.svg";
import ils_2 from "@/assets/images/assets/ils_07.svg";

export const metadata: Metadata = {
    title: "Thank You - EWBS",
};

const ThankYou = () => {
    return (
        <Wrapper>
            <div className="main-page-wrapper">
                <main>
                    <div className="error-page text-center d-flex align-items-center justify-content-center flex-column light-bg position-relative">
                        <h1 className="font-magnita">Thank You</h1>
                        <h2 className="font-magnita"></h2>
                        <p className="text-lg mb-45">
                            We will be in touch soon!
                        </p>
                        <div>
                            <Link href="/" className="btn-four">
                                {"Let\'s"} Go
                            </Link>
                        </div>
                        <Image src={ils_1} alt="shape" className="lazy-img shapes shape_01"/>
                        <Image src={ils_2} alt="shape" className="lazy-img shapes shape_02"/>
                    </div>
                </main>
            </div>
        </Wrapper>
    );
};

export default ThankYou;
