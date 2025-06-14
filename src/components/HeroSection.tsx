
import React from "react";
import AnimatedBackground from "./AnimatedBackground";

const HeroSection: React.FC = () => {
  // Placeholder app screenshot
  const appImage =
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80";
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col gap-8 items-center justify-center min-h-[60vh] py-20">
        <h1
          className="text-6xl font-playfair font-bold text-primary mb-4 drop-shadow-md animate-fade-in-up"
        >
          Meet Your Virtual AI Language Teacher
        </h1>
        <p
          className="text-2xl max-w-2xl text-muted-foreground mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.15s" } as React.CSSProperties}
        >
          Master languages with 1:1 interactive lessons. Real conversation, feedback, and fun—all guided by state-of-the-art AI.
        </p>
        <div
          className="w-full flex justify-center"
        >
          <div className="relative group">
            <img
              src={appImage}
              alt="AI Language Teacher App Preview"
              className="rounded-3xl shadow-2xl border-4 border-white/80 w-[480px] h-[320px] object-cover animate-slow-float transition-transform duration-500 group-hover:scale-105"
              style={{ boxShadow: "0 12px 36px 0 rgba(70,0,240,.09)" }}
            />
            <span className="absolute bottom-3 right-4 bg-primary/90 text-primary-foreground text-sm font-semibold px-4 py-2 rounded-2xl drop-shadow-lg animate-fade-in-up" style={{animationDelay:'0.35s'}}>
              Try a Lesson Free
            </span>
          </div>
        </div>
        <a
          href="#pricing"
          className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-700 to-violet-500 text-white shadow-lg text-xl font-semibold tracking-wide hover:scale-105 hover:shadow-2xl transition-transform duration-300 focus:ring-2 focus:ring-indigo-400 animate-fade-in-up"
          style={{ animationDelay: "0.2s" } as React.CSSProperties}
        >
          Start Learning Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
