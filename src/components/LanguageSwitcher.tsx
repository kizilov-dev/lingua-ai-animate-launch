
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
    <div className="flex gap-1 items-center justify-end mb-2 px-4 pt-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2 py-1 rounded text-xs font-medium transition-colors
            ${i18n.language === lang.code ? "bg-primary text-white" : "bg-gray-100 text-muted-foreground hover:bg-primary/10"}
            focus-visible:ring focus:outline-none`}
          aria-current={i18n.language === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
