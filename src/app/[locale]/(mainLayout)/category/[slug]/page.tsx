"use client";

import React, { useState } from 'react';
import ProductCard from '@/components/shared/ProductCard';
import { useParams } from 'next/navigation';

const DUMMY_PRODUCTS = [
    {
        id: "1",
        name: "Pure Sundarban Honey",
        slug: "pure-sundarban-honey",
        image: "https://images.unsplash.com/photo-1587049352847-4d45543cc7c7?auto=format&fit=crop&w=600&q=80",
        secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/DriedfruitS.jpg/500px-DriedfruitS.jpg",
        price: 850,
        oldPrice: 1000,
        rating: 4.8,
        reviewCount: 124,
        badge: "bestsell" as const,
        stock: 50,
    },
    {
        id: "2",
        name: "Premium Ghee (গাওয়া ঘি)",
        slug: "premium-ghee",
        image: "https://images.unsplash.com/photo-1589131922572-c276f0fa0402?auto=format&fit=crop&w=600&q=80",
        price: 1200,
        rating: 5.0,
        reviewCount: 89,
        stock: 20,
    },
    {
        id: "3",
        name: "Mustard Oil (সরিষার তেল)",
        slug: "mustard-oil",
        image: "https://images.unsplash.com/photo-1474625121024-7595bfbc57ac?auto=format&fit=crop&w=600&q=80",
        price: 350,
        rating: 4.5,
        reviewCount: 45,
        badge: "new" as const,
        stock: 100,
    },
    {
        id: "4",
        name: "Organic Red Rice",
        slug: "organic-red-rice",
        image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=600&q=80",
        price: 120,
        oldPrice: 150,
        rating: 4.2,
        reviewCount: 32,
        badge: "sale" as const,
        stock: 0,
    }
];

export default function CategoryPage() {
    const params = useParams();
    const slug = params.slug as string;
    
    // Format slug for title
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
                <p className="text-text-secondary">Showing products for {title.toLowerCase()}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {DUMMY_PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
