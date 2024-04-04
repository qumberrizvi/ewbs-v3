import type {Metadata} from "next";
import "./globals.scss";
import {Providers} from "@/redux/provider";
import {GoogleAnalytics} from "@/components/libraries/google-analytics";
import {CallPage} from "@/components/libraries/call-page";


export const metadata: Metadata = {
    title: "Experience Excellence in Business Setup with EWBS in Dubai",
    description: "Conquer the business world in Dubai with EWBS. Affordable, leading, and topmost business setup services in Freezone and Mainland",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <Providers>{children}</Providers>
        <GoogleAnalytics/>
        <CallPage/>
        </body>
        </html>
    );
}
