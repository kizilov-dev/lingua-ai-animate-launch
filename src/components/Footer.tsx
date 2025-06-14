
import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-8 bg-gradient-to-r from-indigo-600 via-violet-700 to-purple-600 animate-fade-in-up">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      <span className="text-white/80 text-md text-center md:text-left">&copy; {new Date().getFullYear()} Virtual AI Language Teacher. All Rights Reserved.</span>
      <nav className="flex gap-6 mt-4 md:mt-0">
        <a href="#features" className="text-white/80 hover:text-white underline-offset-2 hover:underline transition">Features</a>
        <a href="#pricing" className="text-white/80 hover:text-white underline-offset-2 hover:underline transition">Pricing</a>
        <a href="#cta" className="text-white/80 hover:text-white underline-offset-2 hover:underline transition">Get Started</a>
        <a href="#faq" className="text-white/80 hover:text-white underline-offset-2 hover:underline transition">FAQ</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
