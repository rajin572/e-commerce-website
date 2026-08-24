"use client";

import React from 'react';
import ProductCard, { ProductProps } from '../shared/ProductCard';
import { GradientSectionTitle } from '../ui/CustomUi/GradientSectionTitle';
import Container from '../ui/CustomUi/Container';

interface ProductSectionProps {
    title: string;
    viewAllLink?: string;
    viewAllText?: string;
    products: ProductProps[];
}



const ProductSection: React.FC<ProductSectionProps> = ({ title, viewAllLink, viewAllText, products }) => {
    return (
        <section className="py-8">
            <Container>
                <GradientSectionTitle
                    title={title}
                    action={viewAllLink ? { label: viewAllText || "View All", href: viewAllLink } : undefined}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ProductSection;
