
export type CategoryId = 'decor' | 'lingerie' | 'candles';

export interface Product {
  id: string;
  name: string;
  reference: string;
  description: string;
  price: number;
  image: string;
  category: CategoryId;
}

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
}
