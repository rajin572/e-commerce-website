"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import LocaleLink from '@/components/i18n/LocaleLink';
import { Heart, ShoppingCart, Star, Eye, Minus, Plus, ShoppingBag } from 'lucide-react';

export interface ProductProps {
    id: string;
    name: string;
    slug: string;
    image: string;
    secondaryImage?: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviewCount: number;
    badge?: 'new' | 'sale' | 'bestsell' | 'combo' | 'outOfStock';
    stock: number;
}

const ProductCard: React.FC<{ product: ProductProps; showBadge?: boolean }> = ({ product, showBadge = false }) => {
    const isOutOfStock = product.stock <= 0;
    const [quantity, setQuantity] = useState(1);

    const renderBadge = () => {
        if (!showBadge) return null;

        const baseBadgeClasses = "absolute top-2 left-2 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10";

        if (isOutOfStock) return <span className={`${baseBadgeClasses} bg-destructive`}>Out Of Stock</span>;

        switch (product.badge) {
            case 'new':
                return <span className={`${baseBadgeClasses} bg-blue-500`}>New Arrival</span>;
            case 'sale':
                return <span className={`${baseBadgeClasses} bg-emerald-500`}>Sale</span>;
            case 'bestsell':
                return <span className={`${baseBadgeClasses} bg-orange-500`}>Best Seller</span>;
            case 'combo':
                return <span className={`${baseBadgeClasses} bg-violet-500`}>Combo Offer</span>;
            default:
                return null;
        }
    };

    return (
        <div className="bg-surface border border-border rounded-lg overflow-hidden group hover:shadow-md transition-shadow relative flex flex-col h-full">
            {renderBadge()}

            <div className="absolute top-2 right-2 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <LocaleLink href={`/product/${product.slug}`} className="p-2 bg-white border border-border hover:border-primary rounded-full text-text-secondary hover:text-primary transition-colors flex items-center justify-center shadow-sm">
                    <Eye size={16} />
                </LocaleLink>
                <button className="p-2 bg-white border border-border hover:border-primary rounded-full text-text-secondary hover:text-primary transition-colors flex items-center justify-center shadow-sm">
                    <Heart size={16} />
                </button>
            </div>

            <LocaleLink href={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden bg-white">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-all duration-500 ${product.secondaryImage ? 'group-hover:opacity-0 group-hover:scale-95' : 'group-hover:scale-105'} ${isOutOfStock ? 'opacity-50 grayscale' : ''}`}
                />
                {product.secondaryImage && (
                    <Image
                        src={product.secondaryImage}
                        alt={`${product.name} alternate view`}
                        fill
                        className={`object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 ${isOutOfStock ? 'opacity-50 grayscale' : ''}`}
                    />
                )}
            </LocaleLink>

            <div className="p-3 flex flex-col flex-grow">
                <LocaleLink href={`/product/${product.slug}`} className="text-sm md:text-base font-medium text-foreground line-clamp-2 hover:text-primary transition-colors mb-1">
                    {product.name}
                </LocaleLink>

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

                {isOutOfStock ? (
                    <button
                        disabled
                        className="w-full py-2 rounded-full font-semibold text-sm flex items-center justify-center gap-2 bg-muted text-text-muted cursor-not-allowed border border-border mt-3"
                    >
                        <ShoppingCart size={16} />
                        Out of Stock
                    </button>
                ) : (
                    <div className="flex items-center gap-2 mt-3 w-full">
                        <div className="flex items-center justify-between border border-border rounded-full px-3 py-1.5 flex-1 max-w-[100px] bg-background h-9">
                            <button
                                onClick={(e) => { e.preventDefault(); setQuantity(Math.max(1, quantity - 1)); }}
                                className="text-foreground hover:text-primary transition-colors focus:outline-none"
                            >
                                <Minus size={14} />
                            </button>
                            <span className="text-sm font-semibold">{quantity}</span>
                            <button
                                onClick={(e) => { e.preventDefault(); setQuantity(quantity + 1); }}
                                className="text-foreground hover:text-primary transition-colors focus:outline-none"
                            >
                                <Plus size={14} />
                            </button>
                        </div>
                        <button
                            onClick={(e) => { e.preventDefault(); /* Add logic */ }}
                            className="flex flex-1 items-center justify-center gap-1.5 border border-primary text-primary hover:bg-primary hover:text-white rounded-full px-4 py-1.5 h-9 transition-colors font-bold text-sm bg-transparent"
                        >
                            <ShoppingBag size={14} />
                            ADD
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
