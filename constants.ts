
import { Category } from './types.ts';
import { ALL_PRODUCTS } from './products.ts';

export const WHATSAPP_NUMBER = "212600000000"; 
export const BRAND_NAME = "Maison Éclat";
export const BRAND_SLOGAN = "L'art de vivre au féminin";

export const CATEGORIES: Category[] = [
  {
    id: 'decor',
    title: 'Décoration Intérieure',
    description: 'Une sélection d’objets raffinés pour sublimer votre intérieur avec élégance.'
  },
  {
    id: 'lingerie',
    title: 'Linge de Maison',
    description: 'Peignoirs luxueux, serviettes moelleuses et accessoires de bain pour un confort absolu.'
  },
  {
    id: 'candles',
    title: 'Bougies Parfumées',
    description: 'Éveillez vos sens avec nos fragrances signatures et artisanales.'
  }
];

export const PRODUCTS = ALL_PRODUCTS;
