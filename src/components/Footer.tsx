
import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-8 bg-gradient-to-r from-indigo-600 via-violet-700 to-purple-600 animate-fade-in-up">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <span className="text-white/80 text-md text-center md:text-left">&copy; {new Date().getFullYear()} {t("footer.copyright")}</span>
        <nav className="flex gap-6 mt-4 md:mt-0">
          <a href="#features" className="text-white/80 hover:text-white underline-offset-2 hover:underline transition">{t("footer.links.features")}</a>
          <a href="#pricing" className="text-white/80 hover:text-white underline-offset-2 hover:underline transition">{t("footer.links.pricing")}</a>
          <a href="#cta" className="text-white/80 hover:text-white underline-offset-2 hover:underline transition">{t("footer.links.getStarted")}</a>
          <a href="#faq" className="text-white/80 hover:text-white underline-offset-2 hover:underline transition">{t("footer.links.faq")}</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
