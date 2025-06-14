
import React from "react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Try the platform with sample lessons.",
    features: [
      "2 Free AI lessons", "Basic feedback", "No card required"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "$14",
    subtitle: "per month",
    description: "Unlimited language sessions. Full chat feedback. Priority support.",
    features: [
      "Unlimited AI conversations",
      "Advanced feedback & suggestions",
      "Progress analytics",
      "Priority support"
    ],
    highlight: true
  },
  {
    name: "Ultimate",
    price: "$99",
    subtitle: "per year",
    description: "Year of unlimited lessons at a big discount.",
    features: [
      "Everything in Pro",
      "Save $69 vs monthly",
      "Annual progress chart",
    ],
    highlight: false
  }
];

const PricingSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-b from-white to-indigo-50" id="pricing">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in-up">
        Simple Pricing
      </h2>
      <p className="text-lg text-muted-foreground mb-12 animate-fade-in-up">
        Honest, affordable plans. Start free—upgrade anytime!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(plan => (
          <div key={plan.name}
               className={`flex flex-col rounded-3xl shadow-xl p-8 items-center bg-white 
                            transition-transform hover:-translate-y-2 border-2 ${plan.highlight ? "border-violet-500 scale-105 shadow-2xl z-10" : "border-transparent" }
                            animate-fade-in-up`}
               style={plan.highlight ? { boxShadow: '0 12px 32px 0 rgba(136,112,248,.1)' } : {}}>
            <div className="font-bold text-xl mb-2 text-primary">{plan.name}</div>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              {plan.subtitle && <span className="text-muted-foreground mb-1">{plan.subtitle}</span>}
            </div>
            <div className="text-md text-muted-foreground mb-3">{plan.description}</div>
            <ul className="flex-1 space-y-2 text-left text-md my-4">
              {plan.features.map(feature => (
                <li key={feature} className="pl-3 relative before:content-['✓'] before:text-primary before:absolute before:left-0">
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#cta"
               className={`mt-6 w-full py-3 rounded-xl text-center font-semibold text-lg transition-all duration-200 
                 ${plan.highlight ? "bg-gradient-to-tr from-indigo-600 via-purple-600 to-violet-500 text-white hover:brightness-105 shadow-md hover:shadow-xl" 
                 : "bg-indigo-100 text-primary hover:bg-indigo-200" }
                 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            >
              {plan.highlight ? "Get Pro" : "Start Free"}
            </a>
          </div>
        ))}
      </div>
      <div className="mt-8 text-sm text-muted-foreground">
        Cancel anytime. No hidden fees. Upgrade or downgrade as you wish.
      </div>
    </div>
  </section>
);

export default PricingSection;
