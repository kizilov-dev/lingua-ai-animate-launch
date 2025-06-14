
import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "fr", label: "Français" }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center justify-end mb-3 md:mb-5 px-6 pt-3">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors
            ${i18n.language === lang.code ? "bg-primary text-white shadow" : "bg-gray-100 text-muted-foreground hover:bg-primary/10"}
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
