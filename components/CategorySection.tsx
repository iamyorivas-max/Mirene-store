
import React from 'react';
import ProductCard from './ProductCard';
import { Product, Category } from '../types';

interface CategorySectionProps {
  category: Category;
  products: Product[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, products }) => {
  return (
    <section id={category.id} className="py-16 md:py-24 bg-white last:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 flex items-center gap-4">
            <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] hidden xs:block"></span>
            {category.title}
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
