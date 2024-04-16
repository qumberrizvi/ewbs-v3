import Image from "next/image";
import Script from "next/script";

export function QuoraPixel() {
    return (
        <div className="container">
            <Script strategy="afterInteractive" id="quora-pixel">
                {`
                    !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
                    qp('init', '31f2a41fc47a4b0b91a0717db0e07c48');
                    qp('track', 'ViewContent');
                `}
            </Script>
            <noscript><Image alt="Quora Pixel" height="1" width="1" style={{display: 'none'}}
                             src="https://q.quora.com/_/ad/31f2a41fc47a4b0b91a0717db0e07c48/pixel?tag=ViewContent&noscript=1"/>
            </noscript>
        </div>
    )
}