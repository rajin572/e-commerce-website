"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const CATEGORIES = [
    { name: "Combos", hasSub: false },
    { name: "Offer Zone", hasSub: false },
    { name: "Honey", hasSub: true },
    { name: "Oil & Ghee", hasSub: false },
    { name: "Dates", hasSub: true },
    { name: "Spices", hasSub: true },
    { name: "Nuts & Seeds", hasSub: true },
    { name: "Beverage", hasSub: true },
    { name: "Rice", hasSub: false },
    { name: "Flours & Lentils", hasSub: true },
    { name: "Certified", hasSub: false },
    { name: "Pickle", hasSub: false },
];

const CategoryBar = () => {
    return (
        <div className="bg-background border-b border-border">
            <div className="container mx-auto px-4 h-12 flex items-center overflow-x-auto scrollbar-none whitespace-nowrap">
                <ul className="flex items-center gap-6 text-sm font-semibold text-text-secondary">
                    {CATEGORIES.map((category, idx) => (
                        <li key={idx} className="group relative h-12 flex items-center">
                            <Link 
                                href={`/category/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                className="flex items-center gap-1 hover:text-primary transition-colors h-full"
                            >
                                {category.name}
                                {category.hasSub && <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-200" />}
                            </Link>

                            {/* Dropdown for subcategories (Mega menu template) */}
                            {category.hasSub && (
                                <div className="absolute top-12 left-0 w-48 bg-card shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-t-0 border-border">
                                    <div className="p-2 flex flex-col">
                                        <Link href="#" className="p-2 hover:bg-muted hover:text-primary rounded text-sm transition-colors">Subcategory 1</Link>
                                        <Link href="#" className="p-2 hover:bg-muted hover:text-primary rounded text-sm transition-colors">Subcategory 2</Link>
                                        <Link href="#" className="p-2 hover:bg-muted hover:text-primary rounded text-sm transition-colors text-primary font-semibold mt-2 border-t border-border">View All</Link>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryBar;
