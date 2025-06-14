
import React from "react";
import { useTranslation } from "react-i18next";

const PricingSection: React.FC = () => {
  const { t } = useTranslation();

  const plansData = t("pricing.plans", { returnObjects: true });
  const plans: Array<{
    name: string;
    price: string;
    subtitle?: string;
    description: string;
    features: string[];
    cta: string;
  }> = Array.isArray(plansData) ? plansData : [];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50" id="pricing">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in-up">
          {t("pricing.title")}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 animate-fade-in-up">
          {t("pricing.subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={plan.name}
                 className={`flex flex-col rounded-3xl shadow-xl p-8 items-center bg-white 
                              transition-shadow duration-300 hover:shadow-2xl
                              border-2 cursor-pointer
                              ${index === 1 ? "border-violet-500 scale-105 shadow-2xl z-10" : "border-transparent" }
                              animate-fade-in-up`}
                 style={index === 1 ? { boxShadow: '0 12px 32px 0 rgba(136,112,248,.1)' } : {}}>
              <div className="font-bold text-xl mb-2 text-primary">{plan.name}</div>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.subtitle && <span className="text-muted-foreground mb-1">{plan.subtitle}</span>}
              </div>
              <div className="text-md text-muted-foreground mb-3">{plan.description}</div>
              <ul className="flex-1 space-y-2 text-left text-md my-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={feature} 
                      className="pl-3 relative before:content-['✓'] before:text-primary before:absolute before:left-0 
                                 opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${0.1 + featureIndex * 0.1}s` }}>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#cta"
                 className={`mt-6 w-full py-3 rounded-xl text-center font-semibold text-lg 
                   transition-shadow duration-300
                   ${index === 1 ? "bg-gradient-to-tr from-indigo-600 via-purple-600 to-violet-500 text-white hover:shadow-xl shadow-md" 
                   : "bg-indigo-100 text-primary hover:shadow-lg" }
                   focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          {t("pricing.disclaimer")}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
