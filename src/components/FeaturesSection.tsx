
import React from "react";

const features = [
  {
    title: "Learn 24/7",
    description: "Flexible sessions whenever you want—study at your pace.",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Smart Conversations",
    description: "Feel like you're with a human tutor, thanks to natural AI interactions.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Tailored Feedback",
    description: "Get personalized corrections and suggestions after each lesson.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Track Your Progress",
    description: "Visual dashboards help you see improvements and set targets.",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&q=80"
  },
];

const FeaturesSection: React.FC = () => (
  <section className="py-16 bg-gradient-to-t from-indigo-50/50 to-white" id="features">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-primary animate-fade-in-up">
        How It Works
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${0.15 + idx*0.07}s` } as React.CSSProperties}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-24 h-24 object-cover rounded-xl mb-4 shadow-md animate-slow-float"
              draggable={false}
            />
            <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
