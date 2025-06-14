
import React from "react";

const benefits = [
    {
        title: "Chat About What You Love",
        description: "Practice speaking about topics you actually care about. Our AI adapts to your interests, making every conversation fun and engaging.",
    },
    {
        title: "Improve With Every Word",
        description: "Don't wait for feedback. Get instant corrections on your grammar, pronunciation, and word choice to accelerate your learning.",
    },
    {
        title: "Understand Culture, Not Just Grammar",
        description: "Go beyond textbook learning. Master idioms, cultural nuances, and the art of conversation to speak like a native.",
    },
    {
        title: "Track Your Journey to Fluency",
        description: "See your progress in real-time. Our smart-tracking system visualizes your achievements, motivating you every step of the way.",
    }
]

const DescriptionSection: React.FC = () => (
  <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-indigo-50/60">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in-up">
            More Than an App, It's Your Conversation Partner
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay:'0.1s'}}>
            Tired of memorizing vocabulary lists? We believe in learning through conversation. Speak naturally, get instant feedback, and build the confidence to chat about anything.
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
