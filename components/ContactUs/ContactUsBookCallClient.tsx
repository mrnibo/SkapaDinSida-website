import React from "react";
import { TitleSection } from "../ui/titles";
import { Badge } from "../ui/badge";
import { IconCircleDot, IconPhoneIncoming } from "@tabler/icons-react";
import TeamCards from "../About/TeamCard/TeamCards";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Spacer } from "../ui/spacer";

const ContactUsBookCallClient = () => {
  const t = useTranslations("bookACall");
  return (
    <div className="mx-4">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-5">
          <Badge
            variant="default"
            className="flex bg-neutral-800 dark:bg-neutral-700 gap-1"
          >
            <IconCircleDot className="text-green-400" size={20} />
            {t("availableBadge")}
          </Badge>
          <TitleSection text={t("title")} />

          <p className="text-lg md:max-w-2xl text-center">{t("description")}</p>
          <Spacer className="py-4" />

          <div className="">
            <Link href={t("buttonLink")} aria-label={t("buttonText")}>
              <Button
                variant="default"
                size="xl"
                className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-xl text-white text-lg flex justify-center items-center gap-2"
              >
                <IconPhoneIncoming /> {t("buttonText")}
              </Button>
            </Link>
          </div>
          <TeamCards />
        </div>
      </div>
    </div>
  );
};

export default ContactUsBookCallClient;
