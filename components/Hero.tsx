
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F9F5F1]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F3EBE3] opacity-50 skew-x-[-12deg] translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-6 animate-fade-in">
            L'Élégance <br />
            <span className="italic font-normal">au Cœur de votre Foyer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
            Découvrez notre collection exclusive de décoration, linge de maison raffiné et bougies parfumées. 
            Une expérience sensorielle unique pour sublimer votre quotidien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#decor" 
              className="bg-[#1A1A1A] text-white px-10 py-4 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-[#D4AF37] transition-all duration-300 shadow-xl shadow-black/5"
            >
              Voir le Catalogue
            </a>
            <a 
              href="#lingerie" 
              className="border border-[#1A1A1A] text-[#1A1A1A] px-10 py-4 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-white transition-all duration-300"
            >
              Découvrir le Linge
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#decor"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-[#D4AF37] transition-colors animate-bounce"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </a>
    </section>
  );
};

export default Hero;
