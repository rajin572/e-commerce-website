"use client";

import React from 'react';
import LocaleLink from '@/components/i18n/LocaleLink';
import { ArrowRight } from 'lucide-react';
import ProductCard, { ProductProps } from '../shared/ProductCard';

interface ProductSectionProps {
    title: string;
    viewAllLink?: string;
    products: ProductProps[];
}



const ProductSection: React.FC<ProductSectionProps> = ({ title, viewAllLink, products }) => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground relative inline-block">
                        {title}
                        <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                    </h2>
                    
                    {viewAllLink && (
                        <LocaleLink href={viewAllLink} className="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1">
                            View All <ArrowRight size={16} />
                        </LocaleLink>
                    )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
