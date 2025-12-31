
import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { BRAND_NAME, BRAND_SLOGAN, WHATSAPP_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Déco', href: '#decor' },
    { name: 'Linge', href: '#lingerie' },
    { name: 'Bougies', href: '#candles' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex flex-col">
          <a href="#home" className="text-2xl font-serif font-bold tracking-tight text-[#1A1A1A]">
            {BRAND_NAME.toUpperCase()}
          </a>
          <span className={`text-[10px] uppercase tracking-widest hidden sm:block ${isScrolled ? 'text-gray-500' : 'text-gray-400'}`}>
            {BRAND_SLOGAN}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#D4AF37] transition-all duration-300"
          >
            <MessageCircle size={18} />
            Contact WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white py-4 rounded-lg font-medium"
          >
            <MessageCircle size={20} />
            Nous contacter sur WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
