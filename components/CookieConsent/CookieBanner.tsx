// components/CookieConsent.js
"use client";
import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import Script from "next/script";

const CookieBanner = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      setIsCookieAccepted(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsCookieAccepted(true);
  };

  return (
    <>
      {isCookieAccepted && (
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
      )}

      <CookieConsent
        onAccept={handleAcceptCookies}
        buttonText="Accept Cookies"
        style={{ background: "#333" }}
        buttonStyle={{
          color: "#fff",
          fontSize: "13px",
          backgroundColor: "#4caf50",
        }}
      >
        We use cookies to improve your experience and analyze site usage with
        Microsoft Clarity.
      </CookieConsent>
    </>
  );
};

export default CookieBanner;
