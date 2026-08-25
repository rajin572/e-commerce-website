import React from 'react';
import ProductCard from '../shared/ProductCard';
import { GradientSectionTitle } from '../ui/CustomUi/GradientSectionTitle';
import Container from '../ui/CustomUi/Container';
import type { IProduct } from '@/types';

interface ProductSectionProps {
    title: string;
    viewAllLink?: string;
    viewAllText?: string;
    products: IProduct[];
    showBadge?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, viewAllLink, viewAllText, products, showBadge = false }) => {
    return (
        <section className="py-12">
            <Container>
                <GradientSectionTitle
                    title={title}
                    action={viewAllLink && viewAllText ? { label: viewAllText, href: viewAllLink } : undefined}
                />

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} showBadge={showBadge} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ProductSection;
