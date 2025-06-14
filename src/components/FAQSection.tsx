
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is this different from other language apps?",
    a: "You get real-time, interactive conversation with an AI, plus tailored feedback—like a personal tutor, but always available!",
  },
  {
    q: "What languages can I learn?",
    a: "We’re starting with English, Spanish, and French, but more languages will be added soon. Let us know your requests!",
  },
  {
    q: "Can I try it for free?",
    a: "Absolutely! You get free lessons with our Starter plan—no credit card required.",
  },
];

const FAQSection: React.FC = () => (
  <section className="py-12 bg-gradient-to-l from-violet-50 to-indigo-50" id="faq">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-8 text-primary animate-fade-in-up">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full animate-fade-in-up" style={{animationDelay:"0.1s"}}>
        {faqs.map((faq, idx) => (
          <AccordionItem value={"item-"+idx} key={faq.q}>
            <AccordionTrigger className="text-lg font-semibold text-indigo-700">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
