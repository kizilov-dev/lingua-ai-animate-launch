
import React from "react";

const features = [
  {
    title: "1. Start a Conversation",
    description: "Choose a topic that interests you or let our AI suggest one. From discussing your favorite movie to debating a hot topic, the choice is yours.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "2. Speak Naturally",
    description: "Engage in a flowing, natural conversation. Our AI listens, understands, and responds like a real person, encouraging you to express yourself freely.",
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "3. Receive Instant Feedback",
    description: "After your chat, get a detailed breakdown of your performance. See corrections, learn new vocabulary, and get tips on pronunciation.",
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "4. Watch Yourself Improve",
    description: "Track your progress over time with our intuitive dashboard. Set new goals, revisit past lessons, and see your fluency soar.",
    img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80"
  },
];

const FeaturesSection: React.FC = () => (
  <section className="py-20 lg:py-24 bg-gradient-to-t from-indigo-50/50 to-white" id="features">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            A Better Way to Fluency
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16 animate-fade-in-up" style={{animationDelay:'0.1s'}}>
            Our method is simple, effective, and built around you. Here's how you'll go from beginner to confident speaker in four easy steps.
          </p>
      </div>
      <div className="space-y-20">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className={`md:w-1/2 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'} animate-fade-in-up`} style={{animationDelay: `${0.2 + idx * 0.15}s`}}>
              <img
                src={feature.img}
                alt={feature.title}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                draggable={false}
              />
            </div>
            <div className={`md:w-1/2 ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'} animate-fade-in-up`} style={{animationDelay: `${0.25 + idx * 0.15}s`}}>
              <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">{feature.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
