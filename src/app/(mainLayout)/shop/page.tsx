"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';
import ProductCard, { ProductProps } from '@/components/shared/ProductCard';

const DUMMY_PRODUCTS: ProductProps[] = [
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
        name: "Special Mixed Dry Fruits",
        slug: "special-mixed-dry-fruits",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
        price: 950,
        rating: 4.7,
        reviewCount: 210,
        stock: 0
    },
    {
        id: "5",
        name: "কালোজিরা ফুলের মধু",
        slug: "black-seed-honey",
        image: "https://placehold.co/400x400/F9FAFB/F97316?text=Honey",
        price: 1100,
        rating: 4.9,
        reviewCount: 56,
        stock: 20
    },
    {
        id: "6",
        name: "প্রাকৃতিক আখের গুড়",
        slug: "natural-sugarcane-jaggery",
        image: "https://placehold.co/400x400/F9FAFB/F97316?text=Jaggery",
        price: 250,
        oldPrice: 300,
        rating: 4.6,
        reviewCount: 34,
        badge: "sale" as const,
        stock: 15
    }
];

const CATEGORIES = [
    { name: "All Products", count: 124 },
    { name: "Honey (মধু)", count: 12 },
    { name: "Ghee (ঘি)", count: 5 },
    { name: "Oil (তেল)", count: 8 },
    { name: "Spices (মসলা)", count: 24 },
    { name: "Dry Fruits (ড্রাই ফ্রুটস)", count: 15 },
    { name: "Combo Offers", count: 6 },
];

const ShopPage = () => {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [priceRange, setPriceRange] = useState(5000);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb & Title */}
            <div className="mb-8">
                <nav className="flex text-sm text-text-secondary mb-2">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <span className="mx-2">{'>'}</span>
                    <span className="text-foreground">Shop</span>
                </nav>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">All Products</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Mobile Filter Toggle */}
                <button 
                    onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                    className="lg:hidden flex items-center justify-center gap-2 w-full py-3 bg-surface border border-border rounded-md font-semibold text-foreground"
                >
                    <Filter size={18} /> Filters
                </button>

                {/* Sidebar Filter */}
                <div className={`lg:w-1/4 flex-shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
                    <div className="bg-surface border border-border rounded-lg p-5 sticky top-[130px]">
                        
                        {/* Categories */}
                        <div className="mb-8">
                            <h3 className="font-bold text-foreground mb-4 pb-2 border-b border-border">Categories</h3>
                            <ul className="space-y-3">
                                {CATEGORIES.map((cat, idx) => (
                                    <li key={idx}>
                                        <label className="flex items-center justify-between cursor-pointer group">
                                            <div className="flex items-center gap-2 text-text-secondary group-hover:text-primary transition-colors">
                                                <input type="checkbox" className="accent-primary" defaultChecked={idx === 0} />
                                                <span className="text-sm">{cat.name}</span>
                                            </div>
                                            <span className="text-xs bg-muted text-text-muted px-2 py-0.5 rounded-full">{cat.count}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price Filter */}
                        <div className="mb-8">
                            <h3 className="font-bold text-foreground mb-4 pb-2 border-b border-border">Filter by Price</h3>
                            <input 
                                type="range" 
                                min="0" 
                                max="10000" 
                                value={priceRange} 
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm text-text-secondary">Price: ৳0 - ৳{priceRange}</span>
                                <button className="text-xs font-semibold text-primary uppercase hover:underline">Filter</button>
                            </div>
                        </div>

                        {/* Availability */}
                        <div>
                            <h3 className="font-bold text-foreground mb-4 pb-2 border-b border-border">Availability</h3>
                            <ul className="space-y-3">
                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer text-sm text-text-secondary hover:text-primary transition-colors">
                                        <input type="checkbox" className="accent-primary" /> In Stock
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2 cursor-pointer text-sm text-text-secondary hover:text-primary transition-colors">
                                        <input type="checkbox" className="accent-primary" /> Out of Stock
                                    </label>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:w-3/4">
                    {/* Top Toolbar */}
                    <div className="flex flex-col sm:flex-row justify-between items-center bg-surface border border-border rounded-lg p-3 mb-6 gap-4">
                        <p className="text-sm text-text-secondary">Showing 1–12 of 124 results</p>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-text-secondary">Sort by:</span>
                                <div className="relative">
                                    <select className="appearance-none bg-background border border-border rounded-md pl-3 pr-8 py-1.5 text-sm font-medium outline-none focus:border-primary">
                                        <option>Default sorting</option>
                                        <option>Popularity</option>
                                        <option>Latest</option>
                                        <option>Price: low to high</option>
                                        <option>Price: high to low</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary" />
                                </div>
                            </div>
                            
                            <div className="hidden sm:flex border border-border rounded-md overflow-hidden">
                                <button 
                                    onClick={() => setViewMode('grid')}
                                    className={`p-1.5 transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-surface text-text-secondary hover:text-primary'}`}
                                >
                                    <LayoutGrid size={18} />
                                </button>
                                <button 
                                    onClick={() => setViewMode('list')}
                                    className={`p-1.5 transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-surface text-text-secondary hover:text-primary'}`}
                                >
                                    <List size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className={viewMode === 'grid' 
                        ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6" 
                        : "flex flex-col gap-4"
                    }>
                        {DUMMY_PRODUCTS.map((product) => (
                            viewMode === 'grid' ? (
                                <ProductCard key={product.id} product={product} />
                            ) : (
                                // List View Card
                                <div key={product.id} className="flex gap-4 border border-border rounded-lg p-4 bg-surface hover:shadow-md transition-shadow">
                                    <div className="w-32 md:w-48 aspect-square relative rounded-md overflow-hidden shrink-0">
                                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col justify-center flex-grow">
                                        <Link href={`/product/${product.slug}`} className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2 mb-2">
                                            {product.name}
                                        </Link>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-xl font-bold text-primary">৳{product.price}</span>
                                            {product.oldPrice && <span className="text-sm text-text-muted line-through">৳{product.oldPrice}</span>}
                                        </div>
                                        <p className="hidden md:block text-sm text-text-secondary mb-4 line-clamp-2">
                                            Premium quality product from natural sources. Health benefits and pure taste guaranteed.
                                        </p>
                                        <button className="w-max px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded font-medium transition-colors text-sm">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    <div className="flex justify-center mt-12">
                        <div className="flex gap-2">
                            <button className="w-10 h-10 border border-primary bg-primary text-white rounded-md font-semibold">1</button>
                            <button className="w-10 h-10 border border-border text-foreground hover:bg-muted rounded-md font-semibold transition-colors">2</button>
                            <button className="w-10 h-10 border border-border text-foreground hover:bg-muted rounded-md font-semibold transition-colors">3</button>
                            <button className="px-4 h-10 border border-border text-foreground hover:bg-muted rounded-md font-semibold transition-colors">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
