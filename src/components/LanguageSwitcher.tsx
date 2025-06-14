
import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "fr", label: "FR" }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 items-center backdrop-blur-md bg-white/20 rounded-full p-2 border border-white/30 shadow-lg">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105
            ${i18n.language === lang.code 
              ? "bg-white text-primary shadow-md" 
              : "text-white hover:bg-white/20 hover:text-white"
            }
            focus:outline-none focus:ring-2 focus:ring-white/50`}
          aria-current={i18n.language === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
