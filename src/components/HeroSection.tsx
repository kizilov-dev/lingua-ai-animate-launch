
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const appImage = "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1920&q=80";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${appImage})`,
          transform: `translateY(${offsetY * 0.2}px)`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/50 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 z-[2] bg-black/40" aria-hidden="true" />
      
      <div className="relative z-10 flex flex-col gap-6 items-center justify-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold drop-shadow-xl animate-fade-in-up">
          {t("hero.title")}
        </h1>
        <p
          className="text-xl md:text-2xl max-w-3xl text-white/90 mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.15s" } as React.CSSProperties}
        >
          {t("hero.subtitle")}
        </p>
        <a
          href="#pricing"
          className="px-8 py-4 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-600 to-violet-500 text-white shadow-lg text-xl font-semibold tracking-wide hover:scale-105 hover:shadow-2xl transition-transform duration-300 focus:ring-2 focus:ring-indigo-400 animate-fade-in-up"
          style={{ animationDelay: "0.2s" } as React.CSSProperties}
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
