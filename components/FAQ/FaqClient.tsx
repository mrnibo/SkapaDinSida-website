import { useTranslations } from "next-intl";
import FAQAccordion from "@/components/FAQ/faq-accordion";
import { TitleSection } from "../ui/titles";
import { Spacer } from "../ui/spacer";

export default function FAQ() {
  const t = useTranslations("FAQ");

  const faqItems = [
    { question: t("question1"), answer: t("answer1") },
    { question: t("question2"), answer: t("answer2") },
    { question: t("question3"), answer: t("answer3") },
    { question: t("question4"), answer: t("answer4") },
    { question: t("question5"), answer: t("answer5") },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <TitleSection
          text={"FAQ"}
          className="py-4 px-4 flex justify-center items-center"
        />
        <h2 className="text-lg text-center">{t("title")}</h2>
        <Spacer className="py-8" />
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
