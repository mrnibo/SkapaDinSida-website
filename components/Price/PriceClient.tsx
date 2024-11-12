import { IconSquareRoundedCheckFilled } from "@tabler/icons-react";
import { Spacer } from "../ui/spacer";
import { TitleSection } from "../ui/titles";
import Link from "next/link";
import Ripple from "../ui/ripple";
import BlurFade from "../ui/blur-fade";
import { BorderBeam } from "../ui/border-beam";
import { useTranslations } from "next-intl";

export const PriceClient = () => {
  const t = useTranslations("plan");

  const getFeatures = (plan: string, featureCount: number) => {
    return Array.from({ length: featureCount }).map(
      (_, index) => t(`plans.${plan}.features.${index}`) ?? ""
    );
  };

  const planData = {
    title: t("title") ?? "",
    subtitle: t("subtitle") ?? "",
    plans: [
      {
        id: "basic",
        name: t("plans.basic.name") ?? "",
        subtitle: t("plans.basic.subtitle") ?? "",
        price: t("plans.basic.price"),
        currency: t("plans.basic.currency") ?? "",
        billingPeriod: t("plans.basic.billingPeriod") ?? "",
        btnText: t("plans.basic.btnText") ?? "",
        btnLink: t("plans.basic.btnLink") ?? "",
        description: t("plans.basic.description") ?? "",
        features: getFeatures("basic", 7),
        background:
          "bg-gradient-to-br from-gray-50 to-gray-200 dark:from-neutral-800 dark:to-neutral-950 dark:text-white text-black",
        btnBackground:
          "dark:bg-gray-100 dark:hover:bg-gray-200 bg-neutral-800 hover:bg-neutral-700 dark:text-black duration-500 text-white text-center px-24 md:px-24 py-3 rounded-lg",
        borderBeam: true,
      },
      {
        id: "advanced",
        name: t("plans.advanced.name") ?? "",
        subtitle: t("plans.advanced.subtitle") ?? "",
        price: t("plans.advanced.price"),
        currency: t("plans.advanced.currency") ?? "",
        billingPeriod: t("plans.advanced.billingPeriod") ?? "",
        btnText: t("plans.advanced.btnText") ?? "",
        btnLink: t("plans.advanced.btnLink") ?? "",
        description: t("plans.advanced.description") ?? "",
        features: getFeatures("advanced", 9),
        background:
          "bg-gradient-to-br dark:from-gray-50 dark:to-gray-200 from-neutral-800 to-black text-white dark:text-black",
        btnBackground:
          "bg-blue-400 hover:bg-blue-500 duration-500 text-white text-center px-16 md:px-32 py-3 rounded-lg",
        borderBeam: false,
      },
    ],
  };

  return (
    <div className="flex flex-col md:h-[1100px] items-center gap-8 text-center px-4 relative overflow-hidden py-16">
      <BlurFade delay={0.25} inView>
        <TitleSection text={planData.title} />
        <p className="text-center text-gray-600 dark:text-neutral-400 max-w-2xl text-lg">
          {planData.subtitle}
        </p>
      </BlurFade>
      <BlurFade delay={0.28} inView>
        {" "}
        <Spacer className="pb-8" />
      </BlurFade>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl justify-center">
        {planData.plans.map((plan, index) => (
          <BlurFade key={index} delay={0.25 * index} inView>
            <div
              className={`flex flex-col rounded-2xl px-8 py-6 shadow-xl w-full h-fit max-w-md ${plan.background} relative`}
            >
              <div className="flex flex-col gap-4 items-center">
                <span className="text-4xl font-bold text-center">
                  {plan.name}
                </span>
                <span className="text-sm text-center">{plan.subtitle}</span>
              </div>

              <Spacer className="py-6" />

              {/* Price Section */}
              <div className="flex flex-row justify-center items-end gap-2 mt-4">
                <span className="text-6xl font-bold">{plan.price}</span>
                <span className="text-md font-bold">{plan.currency}</span>
                <span className="text-md font-bold">{plan.billingPeriod}</span>
              </div>

              {/* Description */}
              <p className="text-sm mt-4 mb-4">{plan.description}</p>

              {/* Bullet Points */}
              <div className="flex flex-col gap-4 mt-6 mb-16">
                {plan.features.map((feature, i) => (
                  <BlurFade key={i} delay={0.25 * i} inView>
                    <BulletPoint text={feature} />
                  </BlurFade>
                ))}
              </div>

              {/* Contact Button */}
              <div className="md:hover:-translate-y-0.5 md:hover:scale-105 duration-500">
                <Link
                  href={plan.btnLink}
                  className={` h ${plan.btnBackground}`}
                  aria-label={`${plan.btnText} Button`}
                >
                  {plan.btnText}
                </Link>
              </div>

              {plan.borderBeam && <BorderBeam />}
            </div>
          </BlurFade>
        ))}
      </div>

      <Ripple
        className="-z-10 translate-y-16 hidden md:block"
        mainCircleSize={600}
      />
    </div>
  );
};

interface BulletPointProps {
  text: string;
}

const BulletPoint: React.FC<BulletPointProps> = ({ text }) => {
  return (
    <div>
      <span className="text-md flex flex-row items-center gap-2 group hover:translate-x-1 duration-500">
        <IconSquareRoundedCheckFilled className="text-blue-400 group-hover:text-blue-500 duration-700" />
        {text}
      </span>
    </div>
  );
};

export default PriceClient;
