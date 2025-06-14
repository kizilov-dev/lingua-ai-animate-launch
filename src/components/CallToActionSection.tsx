
import React from "react";
import { useTranslation } from "react-i18next";

const CallToActionSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20" id="cta">
      <div className="max-w-3xl mx-auto text-center px-6">
        <div className="rounded-3xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-600 p-12 shadow-2xl animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">{t("cta.title")}</h2>
          <p className="text-indigo-100 mb-8 text-lg md:text-xl">{t("cta.subtitle")}</p>
          <a
            href="#"
            className="inline-block px-10 py-4 rounded-2xl text-lg font-bold bg-white text-primary shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 animate-pulse-subtle"
          >
            {t("cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
