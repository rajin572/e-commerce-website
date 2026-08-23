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

export const DUMMY_PRODUCTS: ProductProps[] = [
    {
        id: "1",
        name: "Pure Sundarban Honey",
        slug: "pure-sundarban-honey",
        image: "https://images.unsplash.com/photo-1587049352847-4d45543cc7c7?auto=format&fit=crop&w=600&q=80",
        price: 850,
        oldPrice: 1000,
        rating: 4.8,
        reviewCount: 124,
        badge: 'bestsell',
        stock: 50
    },
    {
        id: "2",
        name: "Premium Ghee (গাওয়া ঘি)",
        slug: "premium-ghee",
        image: "https://images.unsplash.com/photo-1589131922572-c276f0fa0402?auto=format&fit=crop&w=600&q=80",
        price: 1200,
        rating: 4.9,
        reviewCount: 89,
        badge: 'new',
        stock: 30
    },
    {
        id: "3",
        name: "Mustard Oil (সরিষার তেল)",
        slug: "mustard-oil",
        image: "https://images.unsplash.com/photo-1474625121024-7595bfbc57ac?auto=format&fit=crop&w=600&q=80",
        price: 280,
        oldPrice: 320,
        rating: 4.5,
        reviewCount: 45,
        badge: 'sale',
        stock: 100
    },
    {
        id: "4",
        name: "Special Mixed Dry Fruits",
        slug: "special-mixed-dry-fruits",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
        price: 950,
        rating: 4.7,
        reviewCount: 210,
        stock: 0 // Out of stock example
    }
];

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
