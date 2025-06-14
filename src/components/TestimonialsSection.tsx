
import React from "react";
import { useTranslation } from "react-i18next";

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();

  const reviewsData = t("testimonials.reviews", { returnObjects: true });
  const reviews: { name: string; text: string }[] = Array.isArray(reviewsData) ? reviewsData : [];

  const avatars = [
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/men/43.jpg",
    "https://randomuser.me/api/portraits/women/47.jpg",
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 via-indigo-50 to-white" id="testimonials">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-700 animate-fade-in-up">
          {t("testimonials.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="rounded-2xl bg-white shadow-xl p-8 flex flex-col items-center animate-fade-in-up
                         transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
              style={{ animationDelay: `${0.15 + i * 0.12}s` } as React.CSSProperties}
            >
              <img 
                src={avatars[i]} 
                alt={review.name} 
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary" 
              />
              <blockquote className="italic text-muted-foreground text-lg mb-4 text-center">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <span className="text-indigo-700 font-semibold">
                {review.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
