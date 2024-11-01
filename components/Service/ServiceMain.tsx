// app/services/page.tsx

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ServiceMain() {
  const t = useTranslations("services");

  const services = t.raw("servicesList") as ServiceItem[];

  return (
    <div className="flex flex-col justify-center p-4 gap-8">
      <h1 className="text-4xl font-bold text-center">{t("title")}</h1>
      <div className="flex flex-col gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row items-center bg-gray-100 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}

            {/* Content */}
            <div className="w-full md:w-1/2 p-6 flex flex-col">
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                {service.title}
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 flex-grow">
                {service.description}
              </p>
              <Link href={service.link}>
                <div className="mt-4 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300">
                  {t("learnMore")} &rarr;
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
