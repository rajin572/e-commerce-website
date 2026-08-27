"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, ShoppingBag, Trash2, CheckCircle2 } from 'lucide-react';
import LocaleLink from '@/components/i18n/LocaleLink';
import { useDictionary, useT } from '@/components/i18n/DictionaryProvider';
import { formatPrice } from '@/utils/money';
import { EmptyState } from '@/components/ui/CustomUi/EmptyState';
import { productHref } from '@/service/CatalogService/catalog.constants';
import type { IProduct } from '@/types';

interface WishlistClientProps {
    initialProducts: IProduct[];
}

export default function WishlistClient({ initialProducts }: WishlistClientProps) {
    const { locale } = useDictionary();
    const t = useT();
    const [products, setProducts] = useState<IProduct[]>(initialProducts);

    const price = (value: number) => formatPrice(value, locale, t.common.currency);

    const handleRemove = (id: string) => {
        setProducts(products.filter(p => p._id !== id));
    };

    if (products.length === 0) {
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <EmptyState
                    icon={Heart}
                    title={t.product.wishlistEmpty || 'Your wishlist is empty'}
                    description={t.product.wishlistEmptyHint || 'Tap the heart on any product and it will show up here.'}
                />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <h2 className="text-lg font-bold text-foreground">{t.nav.wishlist || 'Wishlist'} ({products.length})</h2>
                <button 
                    onClick={() => setProducts([])}
                    className="text-sm font-semibold text-red-500 hover:text-red-600 transition-colors bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full cursor-pointer"
                >
                    {'Clear All'}
                </button>
            </div>

            {/* List */}
            <div className="divide-y divide-gray-100">
                {products.map((product) => {
                    const isOutOfStock = product.stock <= 0;
                    const href = productHref(product._id);

                    return (
                        <div key={product._id} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center hover:bg-gray-50/50 transition-colors group">
                            {/* Product Image */}
                            <LocaleLink href={href} className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border border-gray-100 overflow-hidden bg-white shrink-0 shadow-sm block group-hover:border-primary/20 transition-colors">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isOutOfStock ? 'opacity-50 grayscale' : ''}`}
                                />
                                {isOutOfStock && (
                                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                                            {t.common.outOfStock}
                                        </span>
                                    </div>
                                )}
                            </LocaleLink>

                            {/* Product Details */}
                            <div className="flex-grow flex flex-col justify-center min-w-0">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                    <LocaleLink href={href} className="block group/link">
                                        <h3 className="text-base sm:text-lg font-bold text-foreground line-clamp-2 group-hover/link:text-primary transition-colors leading-snug">
                                            {product.name}
                                        </h3>
                                    </LocaleLink>
                                </div>
                                
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-lg sm:text-xl font-bold text-primary">{price(product.price)}</span>
                                    {product.oldPrice && (
                                        <span className="text-sm text-text-secondary line-through">{price(product.oldPrice)}</span>
                                    )}
                                </div>

                                <div className="flex items-center gap-1.5 text-xs font-semibold">
                                    {isOutOfStock ? (
                                        <span className="inline-flex items-center gap-1 text-red-500 bg-red-50 px-2 py-1 rounded-md">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                            {t.common.outOfStock}
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-md">
                                            <CheckCircle2 size={12} className="text-green-600" />
                                            {t.common.inStock}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2 sm:mt-0 pt-4 sm:pt-0 border-t border-gray-100 sm:border-0 shrink-0">
                                <button
                                    onClick={() => handleRemove(product._id)}
                                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-red-500 bg-red-50 hover:bg-red-500 hover:text-white transition-all duration-300 border border-red-100 hover:border-red-500 cursor-pointer"
                                >
                                    <Trash2 size={16} />
                                    <span className="sm:hidden xl:inline">{t.cart.remove}</span>
                                </button>
                                
                                <button
                                    disabled={isOutOfStock}
                                    className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                                        isOutOfStock 
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                        : 'bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 hover:-translate-y-0.5 cursor-pointer'
                                    }`}
                                >
                                    <ShoppingBag size={16} />
                                    {t.common.addToCart}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
