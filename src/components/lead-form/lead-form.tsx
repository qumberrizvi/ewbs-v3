"use client"
import Script from "next/script";

export function LeadForm() {
    return (
        <div className="container">
            <Script src={`https://msgsndr.com/js/form_embed.js?v=${Math.random() * 999}`}></Script>
            <iframe src="https://msgsndr.com/widget/form/xxgjl9cdy3MIg0ldO6XF" style={{border: 'none', width: '100%', height: '100%'}}
                    scrolling="no" id="Iframe1"></iframe>
        </div>
    )
}