
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Product } from '../types.ts';
import { WHATSAPP_NUMBER } from '../constants.ts';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleWhatsAppOrder = () => {
    const message = `Bonjour, je souhaite commander le produit ${product.name} – Référence ${product.reference} au prix de ${product.price} MAD.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="group flex flex-col h-full bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 border border-transparent hover:border-gray-100 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm text-[8px] md:text-[10px] font-bold tracking-widest px-2 md:px-3 py-0.5 md:py-1 uppercase text-gray-500 rounded-full">
          {product.reference}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-6 flex flex-col flex-grow">
        <h3 className="text-sm md:text-lg font-serif font-semibold mb-1 md:mb-2 text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-[11px] md:text-sm text-gray-500 mb-3 md:mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-3 md:pt-4">
          <span className="text-base md:text-xl font-medium text-[#1A1A1A]">
            {product.price} <span className="text-[9px] md:text-xs font-light text-gray-400 ml-0.5">MAD</span>
          </span>
          <button 
            onClick={handleWhatsAppOrder}
            className="flex bg-[#1A1A1A] text-white p-2 md:p-3 rounded-full hover:bg-[#D4AF37] transition-all duration-300 group-hover:shadow-lg transform active:scale-95"
            aria-label="Commander sur WhatsApp"
          >
            <MessageCircle size={16} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
