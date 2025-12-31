
import React from 'react';
import { Instagram, MessageCircle, MapPin, Mail } from 'lucide-react';
import { BRAND_NAME, WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-serif font-bold mb-6 tracking-tight">
              {BRAND_NAME.toUpperCase()}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre destination lifestyle pour une maison élégante et une féminité sublimée. Qualité, raffinement et service personnalisé.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#D4AF37] transition-colors">
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="p-2 bg-white/5 rounded-full hover:bg-[#D4AF37] transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Catalogue</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#decor" className="hover:text-white transition-colors">Décoration</a></li>
              <li><a href="#lingerie" className="hover:text-white transition-colors">Lingerie</a></li>
              <li><a href="#candles" className="hover:text-white transition-colors">Bougies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nouveautés</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#D4AF37] shrink-0" />
                <span>Showroom à Casablanca, Maroc<br /><span className="text-[10px] text-gray-500">(Sur rendez-vous uniquement)</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <span>contact@maison-eclat.ma</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-[#D4AF37] shrink-0" />
                <span>+212 6 XX XX XX XX</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Notice */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Commander</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Note : Ce site est un catalogue. Toutes les commandes s'effectuent via WhatsApp pour un service personnalisé.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-block border border-white/20 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Envoyer un message
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-xs text-gray-500 tracking-widest">
            &copy; {currentYear} {BRAND_NAME}. Tous droits réservés. Design par Luxury Web Studio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
