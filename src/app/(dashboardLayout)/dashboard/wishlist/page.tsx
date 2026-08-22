"use client";

import React from 'react';
import ProductCard from '@/components/shared/ProductCard';

const DUMMY_WISHLIST = [
    {
        id: "1",
        name: "Pure Sundarban Honey",
        slug: "pure-sundarban-honey",
        image: "https://images.unsplash.com/photo-1587049352847-4d45543cc7c7?auto=format&fit=crop&w=600&q=80",
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
    }
];

export default function WishlistPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
            
            {DUMMY_WISHLIST.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {DUMMY_WISHLIST.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="bg-surface border border-border rounded-xl p-12 text-center">
                    <p className="text-text-secondary">Your wishlist is empty.</p>
                </div>
            )}
        </div>
    );
}
