import { useTranslations } from "next-intl";
import FAQAccordion from "@/components/FAQ/faq-accordion";

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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t("title")}</h2>
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
