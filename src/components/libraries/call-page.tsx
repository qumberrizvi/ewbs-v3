"use client"
import {useEffect, useState} from "react";
import Script from "next/script";

export function CallPage() {
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        console.log('Null returned from CallPage!');
        return null;
    }
    console.log('Page Hydrated. CallPage called.');
    return (
        <div className="container d-none">
            <Script strategy="afterInteractive" id="callpage">
                {`
                    var loadBabel = function(url, callback) {var script = document.createElement('script');script.async = true;if (script.readyState) {script.onreadystatechange = function() {if (script.readyState == 'loaded' || script.readyState == 'complete') {script.onreadystatechange = null;callback(window, document);}};} else {script.onload = function() {callback(window, document);};}script.src = url;document.head.appendChild(script);};var getCookie = function(cname) {var objToday = new Date();var version = objToday.toISOString().split('T')[0].split('-').join('');var name = cname + '=';var decodedCookie = decodeURIComponent(document.cookie);var cookieArray = decodedCookie.split(';');for (var i = 0; i < cookieArray.length; i++) {var cookie = cookieArray[i];cookie = cookie.trim();if (cookie.indexOf(name) == 0) {return cookie.substring(name.length, cookie.length);}}return version;};var loadWidget = function(window, document) {var __cp = {"id":"o3BYtkgVqSOYEsyG2HmbJeqOUirPAcuZId1L0CT2Y-8","version":"1.1"};var cp = document.createElement('script');cp.type = 'text/javascript';cp.async = true;cp.src = "++cdn-widget.callpage.io+build+js+callpage.js".replace(/[+]/g, '/').replace(/[=]/g, '.') + '?v=' + getCookie('callpage-widget-version');var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(cp, s);if (true) {window.callpage = function(method) {if (method == '__getQueue') {return this.methods;} else if (method) {if (typeof window.callpage.execute === 'function') {return window.callpage.execute.apply(this, arguments);} else {(this.methods = this.methods || []).push({arguments: arguments,});}}};window.callpage.__cp = __cp;window.callpage('api.button.autoshow');}};loadBabel('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js', function() {return loadWidget(window, document);});
                `}
            </Script>
        </div>
    )
}