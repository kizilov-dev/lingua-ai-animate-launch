
import React from "react";

const CallToActionSection: React.FC = () => (
  <section className="py-20" id="cta">
    <div className="max-w-3xl mx-auto text-center px-6">
      <div className="rounded-3xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-600 p-12 shadow-2xl animate-fade-in-up">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">Ready to Speak Fluently?</h2>
        <p className="text-indigo-100 mb-8 text-lg md:text-xl">Start today with your own AI teacher. Progress with every lesson—on your schedule.</p>
        <a
          href="#"
          className="inline-block px-10 py-4 rounded-2xl text-lg font-bold bg-white text-primary shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 animate-pulse-subtle"
        >
          Sign Up Free &rarr;
        </a>
      </div>
    </div>
  </section>
);

export default CallToActionSection;
