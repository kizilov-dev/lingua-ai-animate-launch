
import React from "react";
import { useTranslation } from "react-i18next";

const DescriptionSection: React.FC = () => {
  const { t } = useTranslation();

  // Extracts benefits for the current language, fallback to an empty array if not present
  const benefits: { title: string; desc: string }[] = t("description.benefits", { returnObjects: true }) || [];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-indigo-50/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in-up">
            {t("description.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay:'0.1s'}}>
            {t("description.desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {benefits.map((benefit, i) => (
               <div key={benefit.title} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${0.2 + i * 0.1}s`}}>
                  <h3 className="font-semibold text-2xl mb-3 text-indigo-700">{benefit.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{benefit.desc}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
