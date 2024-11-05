"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Spacer } from "@/components/ui/spacer";
import TeamCards from "@/components/About/TeamCard/TeamCards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { IconCircleDot, IconPhoneIncoming } from "@tabler/icons-react";

const trackContactEvent = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Purchase");
  }
};

const ContactUsBookCallClient = () => {
  const t = useTranslations("bookACall");

  const words = [
    {
      text: "Grow",
    },
    {
      text: "your",
    },
    {
      text: "business",
    },
    {
      text: "with",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Us.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="mx-4">
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-5">
          <Badge
            variant="default"
            className="flex bg-neutral-800 text-white dark:bg-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-600 gap-1"
          >
            <IconCircleDot className="text-green-400" size={20} />
            {t("availableBadge")}
          </Badge>

          <TypewriterEffect words={words} />

          <p className="text-lg md:max-w-2xl text-center">{t("description")}</p>
          <Spacer className="py-4" />

          <div className=" flex flex-col gap-4 justify-center items-center max-w-4xl">
            <div className="">
              <Link href={t("buttonLink")} aria-label={t("buttonText")}>
                <Button
                  variant="default"
                  size="xl"
                  className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-xl text-white text-lg flex justify-center items-center gap-2"
                  onClick={trackContactEvent} // Now properly marked as Client Component
                >
                  <IconPhoneIncoming /> {t("buttonText")}
                </Button>
              </Link>
            </div>
            <div className="text-sm uppercase font-bold text-gray-400">OR</div>
            <div className="">
              <Link
                href={t("buttonSecondaryLink")}
                aria-label={t("buttonSecondaryText")}
              >
                <Button
                  variant="default"
                  size="xl"
                  className="bg-green-500/90 hover:bg-green-600 focus:bg-green-400 text-green-900 hover:text-white dark:bg-green-700 dark:hover:bg-green-600 dark:focus:bg-green-600  rounded-xl dark:text-white text-lg flex justify-center items-center gap-2 duration-300 shadow-lg"
                >
                  <IconPhoneIncoming /> {t("buttonSecondaryText")}
                </Button>
              </Link>
            </div>
          </div>
          <TeamCards />
        </div>
      </div>

      {/* Facebook Pixel Script */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
           fbq('init', '3582989535324506'); 
          fbq('track', 'PageView');
        `}
      </Script>
    </div>
  );
};

export default ContactUsBookCallClient;
