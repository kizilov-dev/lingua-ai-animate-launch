
import React from "react";

const benefits = [
    {
        title: "True-to-Life Conversations",
        description: "Practice speaking about topics you actually care about. Our AI adapts to your interests, making every conversation unique and engaging.",
    },
    {
        title: "Instant, Actionable Feedback",
        description: "No more waiting. Get real-time corrections on grammar, pronunciation, and word choice to improve faster.",
    },
    {
        title: "Master a Language, Not Just Words",
        description: "Go beyond vocabulary. Understand cultural nuances, idioms, and context to speak with confidence and authenticity.",
    },
    {
        title: "See Your Fluency Grow",
        description: "Our smart-tracking system visualizes your progress, highlighting strengths and areas for improvement.",
    }
]

const DescriptionSection: React.FC = () => (
  <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-indigo-50/60">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in-up">
            Go Beyond Flashcards
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay:'0.1s'}}>
            Traditional apps teach you words. We teach you how to have conversations. Speak, get feedback, and gain real-world confidence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {benefits.map((benefit, i) => (
             <div key={benefit.title} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: `${0.2 + i * 0.1}s`}}>
                <h3 className="font-semibold text-2xl mb-3 text-indigo-700">{benefit.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{benefit.description}</p>
            </div>
        ))}
      </div>
    </div>
  </section>
);

export default DescriptionSection;
