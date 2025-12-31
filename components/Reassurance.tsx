
import React from 'react';
import { Truck, ShieldCheck, Heart, Headphones } from 'lucide-react';

const Reassurance: React.FC = () => {
  const benefits = [
    {
      icon: <Truck size={32} className="text-[#D4AF37]" strokeWidth={1.5} />,
      title: 'Livraison Rapide',
      desc: 'Partout au Maroc en 24h à 48h.'
    },
    {
      icon: <ShieldCheck size={32} className="text-[#D4AF37]" strokeWidth={1.5} />,
      title: 'Sélection Premium',
      desc: 'Produits choisis avec soin pour leur qualité.'
    },
    {
      icon: <Heart size={32} className="text-[#D4AF37]" strokeWidth={1.5} />,
      title: 'Packaging Élégant',
      desc: 'Idéal pour offrir ou se faire plaisir.'
    },
    {
      icon: <Headphones size={32} className="text-[#D4AF37]" strokeWidth={1.5} />,
      title: 'Service Client',
      desc: 'À votre écoute 7j/7 sur WhatsApp.'
    }
  ];

  return (
    <section className="py-20 bg-[#F9F5F1] border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 bg-white rounded-full transition-transform duration-300 group-hover:scale-110 shadow-sm">
                {b.icon}
              </div>
              <h4 className="text-lg font-serif font-bold mb-2">{b.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reassurance;
