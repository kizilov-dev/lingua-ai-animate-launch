
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
            className="inline-block px-10 py-4 rounded-2xl text-lg font-bold bg-white text-primary shadow-lg 
                       transition-all duration-500 ease-out transform hover:scale-110 hover:shadow-2xl
                       hover:-translate-y-1 hover:bg-gradient-to-r hover:from-white hover:to-indigo-50
                       focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-4 focus:ring-offset-violet-600
                       active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-violet-700">
              {t("cta.button")}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-indigo-100 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
