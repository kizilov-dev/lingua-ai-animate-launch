
import React from "react";
import { useTranslation } from "react-i18next";

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const stepsData = t("features.steps", { returnObjects: true });
  const steps: { title: string; description: string }[] = Array.isArray(stepsData) ? stepsData : [];

  const images = [
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-t from-indigo-50/50 to-white" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            {t("features.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16 animate-fade-in-up" style={{animationDelay:'0.1s'}}>
            {t("features.subtitle")}
          </p>
        </div>
        <div className="space-y-20">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className={`md:w-1/2 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'} animate-fade-in-up`} style={{animationDelay: `${0.2 + idx * 0.15}s`}}>
                <img
                  src={images[idx]}
                  alt={step.title}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                  draggable={false}
                />
              </div>
              <div className={`md:w-1/2 ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'} animate-fade-in-up`} style={{animationDelay: `${0.25 + idx * 0.15}s`}}>
                <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
