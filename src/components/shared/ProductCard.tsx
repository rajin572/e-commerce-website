"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Star } from 'lucide-react';

export interface ProductProps {
    id: string;
    name: string;
    slug: string;
    image: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviewCount: number;
    badge?: 'new' | 'sale' | 'bestsell' | 'combo' | 'outOfStock';
    stock: number;
}

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
    const isOutOfStock = product.stock <= 0;

    const renderBadge = () => {
        if (isOutOfStock) return <span className="absolute top-2 left-2 bg-destructive text-white text-[10px] font-bold px-2 py-1 rounded">Out of Stock</span>;
        
        switch (product.badge) {
            case 'new':
                return <span className="absolute top-2 left-2 bg-[#3B82F6] text-white text-[10px] font-bold px-2 py-1 rounded">New Arrival</span>;
            case 'sale':
                return <span className="absolute top-2 left-2 bg-[#10B981] text-white text-[10px] font-bold px-2 py-1 rounded">Sale</span>;
            case 'bestsell':
                return <span className="absolute top-2 left-2 bg-[#F97316] text-white text-[10px] font-bold px-2 py-1 rounded">Best Seller</span>;
            case 'combo':
                return <span className="absolute top-2 left-2 bg-[#8B5CF6] text-white text-[10px] font-bold px-2 py-1 rounded">Combo Offer</span>;
            default:
                return null;
        }
    };

    return (
        <div className="bg-surface border border-border rounded-lg overflow-hidden group hover:shadow-md transition-shadow relative flex flex-col h-full">
            {renderBadge()}
            
            <button className="absolute top-2 right-2 p-1.5 bg-white/80 hover:bg-white rounded-full text-text-secondary hover:text-primary transition-colors z-10">
                <Heart size={16} />
            </button>

            <Link href={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden bg-white">
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className={`object-contain p-4 group-hover:scale-105 transition-transform duration-300 ${isOutOfStock ? 'opacity-50 grayscale' : ''}`}
                />
            </Link>

            <div className="p-3 flex flex-col flex-grow">
                <Link href={`/product/${product.slug}`} className="text-sm md:text-base font-medium text-foreground line-clamp-2 hover:text-primary transition-colors mb-1">
                    {product.name}
                </Link>

                <div className="flex items-center gap-1 mb-2 mt-auto">
                    <div className="flex text-[#F59F0A]">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                        ))}
                    </div>
                    <span className="text-[11px] text-text-secondary">({product.reviewCount})</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-base md:text-lg font-bold text-primary">৳{product.price}</span>
                    {product.oldPrice && (
                        <span className="text-xs md:text-sm text-text-muted line-through">৳{product.oldPrice}</span>
                    )}
                </div>

                <button 
                    disabled={isOutOfStock}
                    className={`w-full py-2 rounded-md font-semibold text-sm flex items-center justify-center gap-2 transition-colors ${
                        isOutOfStock 
                        ? 'bg-muted text-text-muted cursor-not-allowed' 
                        : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                >
                    <ShoppingCart size={16} />
                    {isOutOfStock ? 'Out of Stock' : 'Add To Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
