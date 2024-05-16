import Script from "next/script";

export function SenseAi() {
    return (
        <div className="container">
            <Script
                type="text/javascript"
                src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
                id="aisensy-wa-widget"
                widget-id="CfplJo"
            >
            </Script>
        </div>
    )
}