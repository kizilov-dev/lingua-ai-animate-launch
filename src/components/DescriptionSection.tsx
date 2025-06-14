
import React from "react";

const DescriptionSection: React.FC = () => (
  <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-indigo-50/60">
    <div className="max-w-4xl mx-auto text-center px-6">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in-up">
        Why settle for passive learning?
      </h2>
      <p className="text-lg md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay:'0.1s'}}>
        Jump into live, AI-powered conversations tailored to <span className="font-bold text-primary">your goals</span>.<br />
        Our virtual AI teacher adapts to your pace, interests, and fluency level.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white rounded-2xl shadow-md p-8 text-left transition-transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay:'0.2s'}}>
          <h3 className="font-semibold text-xl mb-2 text-indigo-700">Conversational Practice</h3>
          <p className="text-muted-foreground">Speak, listen, and think in your target language—just like with a real tutor.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 text-left transition-transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay:'0.3s'}}>
          <h3 className="font-semibold text-xl mb-2 text-violet-700">Adaptive Feedback</h3>
          <p className="text-muted-foreground">Get instant corrections and tips to accelerate your progress.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 text-left transition-transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay:'0.4s'}}>
          <h3 className="font-semibold text-xl mb-2 text-blue-700">Always Available</h3>
          <p className="text-muted-foreground">Practice at any time—no appointments, no waiting. Your AI teacher never sleeps!</p>
        </div>
      </div>
    </div>
  </section>
);

export default DescriptionSection;
