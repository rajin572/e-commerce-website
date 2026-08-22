"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FEATURED_CATEGORIES = [
    { name: "মধু", image: "https://placehold.co/100x100/F9FAFB/F97316?text=Honey", slug: "honey" },
    { name: "ঘি", image: "https://placehold.co/100x100/F9FAFB/F97316?text=Ghee", slug: "ghee" },
    { name: "তেল", image: "https://placehold.co/100x100/F9FAFB/F97316?text=Oil", slug: "oil" },
    { name: "গুঁড়া মশলা", image: "https://placehold.co/100x100/F9FAFB/F97316?text=Spices", slug: "powder-spices" },
    { name: "আচার", image: "https://placehold.co/100x100/F9FAFB/F97316?text=Pickle", slug: "pickle" },
    { name: "ড্রাই ফ্রুটস", image: "https://placehold.co/100x100/F9FAFB/F97316?text=Fruits", slug: "dry-fruits" },
    { name: "চাল", image: "https://placehold.co/100x100/F9FAFB/F97316?text=Rice", slug: "rice" },
    { name: "ডাল", image: "https://placehold.co/100x100/F9FAFB/F97316?text=Lentils", slug: "lentils" },
];

const FeaturedCategories = () => {
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-foreground">Featured Categories</h2>
                
                <div className="flex overflow-x-auto pb-4 scrollbar-none gap-4 md:gap-6 justify-start md:justify-center">
                    {FEATURED_CATEGORIES.map((cat, idx) => (
                        <Link 
                            key={idx} 
                            href={`/category/${cat.slug}`}
                            className="flex flex-col items-center gap-2 min-w-[80px] md:min-w-[100px] group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border p-1 overflow-hidden group-hover:border-primary transition-colors bg-surface">
                                <Image 
                                    src={cat.image} 
                                    alt={cat.name} 
                                    width={80} 
                                    height={80} 
                                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300" 
                                />
                            </div>
                            <span className="text-sm font-medium text-center text-text-secondary group-hover:text-primary transition-colors">
                                {cat.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
