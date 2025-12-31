
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import CategorySection from './components/CategorySection.tsx';
import Reassurance from './components/Reassurance.tsx';
import Footer from './components/Footer.tsx';
import { CATEGORIES, PRODUCTS, WHATSAPP_NUMBER } from './constants.ts';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <div className="relative min-h-screen">
      <Header />
      <Hero />

      {/* Navigation Rapide des Catégories (Sticky) */}
      <div className="sticky top-[72px] md:top-[88px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-center space-x-4 md:space-x-8 py-4 min-w-max">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1 text-xs uppercase tracking-widest font-bold transition-all ${activeCategory === 'all' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-400 hover:text-black'}`}
            >
              Tous
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1 text-xs uppercase tracking-widest font-bold transition-all ${activeCategory === cat.id ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-400 hover:text-black'}`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rendu Dynamique du Catalogue */}
      {CATEGORIES.map((category) => {
        const categoryProducts = PRODUCTS.filter(p => p.category === category.id);
        if (activeCategory !== 'all' && activeCategory !== category.id) return null;
        if (categoryProducts.length === 0) return null;

        return (
          <CategorySection 
            key={category.id} 
            category={category} 
            products={categoryProducts} 
          />
        );
      })}

      <Reassurance />
      <Footer />

      {/* Bouton WhatsApp Flottant */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce-subtle flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm font-bold uppercase tracking-tight">Besoin d'aide ?</span>
        <MessageCircle size={24} fill="currentColor" />
      </a>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;
