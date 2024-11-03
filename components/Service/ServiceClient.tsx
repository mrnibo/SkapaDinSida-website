"use client";

import { Laptop, Smartphone, PenTool } from "lucide-react";
import ServiceCards from "./ServiceCards";
import { useTranslations } from "next-intl";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceShowcase() {
  const t = useTranslations("service");

  const services: Service[] = [
    {
      icon: <Laptop className="h-20 w-20" />,
      title: t("webDevelopment.title"),
      description: t("webDevelopment.description"),
    },
    {
      icon: <Smartphone className="h-20 w-20" />,
      title: t("mobileAppDevelopment.title"),
      description: t("mobileAppDevelopment.description"),
    },
    {
      icon: <PenTool className="h-20 w-20" />,
      title: t("uiUxDesign.title"),
      description: t("uiUxDesign.description"),
    },
  ];
  return (
    <section className="relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group">
              <ServiceCards>
                <div className="flex flex-col items-center justify-center gap-4 ">
                  <div className="flex justify-center mb-4 group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <div className="text-xl font-bold group-hover:translate-y-2 transition-transform duration-300">
                    {service.title}
                  </div>

                  <p className="text-center text-gray-600 dark:text-gray-50 group-hover:translate-y-2 transition-transform duration-300">
                    {service.description}
                  </p>
                </div>
              </ServiceCards>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
