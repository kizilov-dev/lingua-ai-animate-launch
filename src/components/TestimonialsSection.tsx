
import React from "react";

const testimonials = [
  {
    name: "Anna M.",
    text: "I've tried countless language apps, but this is the first time I've felt like I have a real tutor available 24/7. The instant feedback is priceless!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Lucas J.",
    text: "Practicing with the AI is as close as I've come to actual conversation. My confidence has skyrocketed.",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Sara T.",
    text: "I can study whenever I want. It's like having a teacher in my pocket. Highly recommended for any language learner!",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const TestimonialsSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-r from-purple-50 via-indigo-50 to-white" id="testimonials">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-700 animate-fade-in-up">
        What Our Learners Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="rounded-2xl bg-white shadow-xl p-8 flex flex-col items-center relative animate-fade-in-up"
            style={{ animationDelay: `${0.15 + i * 0.12}s` } as React.CSSProperties}
          >
            <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary" />
            <blockquote className="italic text-muted-foreground text-lg mb-4 text-center">&ldquo;{t.text}&rdquo;</blockquote>
            <span className="text-indigo-700 font-semibold">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
