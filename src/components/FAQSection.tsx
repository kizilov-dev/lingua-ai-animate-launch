
import React from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const { t } = useTranslation();

  const questionsData = t("faq.questions", { returnObjects: true });
  const questions: { q: string; a: string }[] = Array.isArray(questionsData) ? questionsData : [];

  return (
    <section className="py-12 bg-gradient-to-l from-violet-50 to-indigo-50" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-8 text-primary animate-fade-in-up">
          {t("faq.title")}
        </h2>
        <Accordion type="single" collapsible className="w-full animate-fade-in-up" style={{animationDelay:"0.1s"}}>
          {questions.map((faq, idx) => (
            <AccordionItem value={"item-"+idx} key={faq.q}>
              <AccordionTrigger className="text-lg font-semibold text-indigo-700">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
