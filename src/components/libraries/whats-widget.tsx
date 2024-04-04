import Script from "next/script";

export function WhatsWidget() {
    return (
        <div className="container">
            <Script async src="https://s.widgetwhats.com/wwwa.js" data-wwwa="4310"></Script>
        </div>
    );
}