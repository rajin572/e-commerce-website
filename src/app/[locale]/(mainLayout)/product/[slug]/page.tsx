"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import LocaleLink from '@/components/i18n/LocaleLink';
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, MessageCircle } from 'lucide-react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import ProductSection from '@/components/home/ProductSection';

const ProductDetailsPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState('1kg');
    const [activeTab, setActiveTab] = useState('description');

    const product = {
        name: "প্রিমিয়াম কোয়ালিটি সুন্দরবনের খাঁটি মধু",
        price: 850,
        oldPrice: 1000,
        sku: "HONEY-001",
        brand: "ECommerce",
        stock: 50,
        rating: 4.8,
        reviewCount: 124,
        description: "সুন্দরবনের গহীন বন থেকে সংগ্রহ করা ১০০% খাঁটি ও প্রাকৃতিক মধু। এর স্বাদ ও ঘ্রাণ আপনাকে মুগ্ধ করবে। এতে কোনো প্রকার ভেজাল মেশানো হয় না।",
        variants: ['250g', '500g', '1kg'],
        images: [
            "https://placehold.co/800x800/F9FAFB/F97316?text=Honey+1",
            "https://placehold.co/800x800/F9FAFB/F97316?text=Honey+2",
            "https://placehold.co/800x800/F9FAFB/F97316?text=Honey+3",
            "https://placehold.co/800x800/F9FAFB/F97316?text=Honey+4",
        ]
    };

    const [mainImage, setMainImage] = useState(product.images[0]);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-text-secondary mb-6">
                <LocaleLink href="/" className="hover:text-primary">Home</LocaleLink>
                <span className="mx-2">{'>'}</span>
                <LocaleLink href="/category/honey" className="hover:text-primary">Honey</LocaleLink>
                <span className="mx-2">{'>'}</span>
                <span className="text-foreground">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
                {/* Product Gallery */}
                <div className="flex flex-col-reverse md:flex-row gap-4">
                    {/* Thumbnails */}
                    <div className="flex md:flex-col gap-2 md:w-20 overflow-x-auto md:overflow-visible">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className={`shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 rounded-md overflow-hidden ${mainImage === img ? 'border-primary' : 'border-border hover:border-primary/50'}`}
                            >
                                <Image src={img} alt="Thumbnail" width={80} height={80} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="flex-grow aspect-square relative border border-border rounded-lg overflow-hidden bg-surface">
                        <Image src={mainImage} alt={product.name} fill className="object-contain p-4" />
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1 text-[#F59F0A]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                            ))}
                        </div>
                        <span className="text-sm text-text-secondary">({product.reviewCount} Reviews)</span>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl font-bold text-primary">৳{product.price}</span>
                        {product.oldPrice && (
                            <span className="text-lg text-text-muted line-through">৳{product.oldPrice}</span>
                        )}
                        <span className="bg-[#10B981]/10 text-[#10B981] text-xs font-bold px-2 py-1 rounded">
                            Save ৳{product.oldPrice ? product.oldPrice - product.price : 0}
                        </span>
                    </div>

                    <p className="text-text-secondary mb-6 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Variants */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3">Weight</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.variants.map((variant, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedVariant(variant)}
                                    className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${selectedVariant === variant
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-border text-foreground hover:border-primary/50'
                                        }`}
                                >
                                    {variant}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        {/* Quantity */}
                        <div className="flex items-center border border-border rounded-md bg-surface h-12">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-10 h-full flex items-center justify-center hover:text-primary transition-colors"
                            >
                                <Minus size={18} />
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                readOnly
                                className="w-12 h-full text-center font-semibold bg-transparent outline-none"
                            />
                            <button
                                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                className="w-10 h-full flex items-center justify-center hover:text-primary transition-colors"
                            >
                                <Plus size={18} />
                            </button>
                        </div>

                        <button className="flex-grow md:flex-grow-0 md:w-48 h-12 bg-primary hover:bg-primary-dark text-white rounded-md font-semibold flex items-center justify-center gap-2 transition-colors">
                            <ShoppingCart size={20} />
                            Add To Cart
                        </button>

                        <button className="flex-grow md:flex-grow-0 md:w-48 h-12 bg-secondary hover:bg-[#2a3444] text-white rounded-md font-semibold transition-colors">
                            Buy Now
                        </button>

                        <button className="w-12 h-12 border border-border rounded-md flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors">
                            <Heart size={20} />
                        </button>
                    </div>

                    {/* WhatsApp Order */}
                    <a
                        href={`https://wa.me/yourwhatsappnumber?text=Hello!%20I'm%20interested%20in%20${product.name}%20(${selectedVariant})%20Price:%20৳${product.price}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-12 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-md font-semibold flex items-center justify-center gap-2 transition-colors mb-6"
                    >
                        <MessageCircle size={20} />
                        Order On WhatsApp
                    </a>

                    {/* Meta Info */}
                    <div className="border-t border-border pt-6 flex flex-col gap-2 text-sm">
                        <div className="flex"><span className="w-24 text-text-secondary">SKU:</span> <span className="font-medium">{product.sku}</span></div>
                        <div className="flex"><span className="w-24 text-text-secondary">Category:</span> <span className="font-medium text-primary hover:underline cursor-pointer">Honey</span></div>
                        <div className="flex"><span className="w-24 text-text-secondary">Availability:</span> <span className="font-medium text-[#10B981]">{product.stock} in Stock</span></div>

                        <div className="flex items-center mt-4">
                            <span className="w-24 text-text-secondary">Share:</span>
                            <div className="flex gap-3">
                                <button className="text-text-secondary hover:text-[#1877F2] transition-colors"><FaFacebook size={18} /></button>
                                <button className="text-text-secondary hover:text-[#1DA1F2] transition-colors"><FaTwitter size={18} /></button>
                                <button className="text-text-secondary hover:text-[#25D366] transition-colors"><MessageCircle size={18} /></button>
                                <button className="text-text-secondary hover:text-foreground transition-colors"><Share2 size={18} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-12 border border-border rounded-lg bg-surface overflow-hidden">
                <div className="flex border-b border-border bg-white">
                    <button
                        onClick={() => setActiveTab('description')}
                        className={`flex-1 md:flex-none px-6 py-4 font-semibold text-sm md:text-base border-b-2 transition-colors ${activeTab === 'description' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-foreground'}`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`flex-1 md:flex-none px-6 py-4 font-semibold text-sm md:text-base border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-foreground'}`}
                    >
                        Reviews ({product.reviewCount})
                    </button>
                </div>

                <div className="p-6 md:p-8">
                    {activeTab === 'description' && (
                        <div className="prose max-w-none text-text-secondary">
                            <h3 className="text-lg font-bold text-foreground mb-4">Product Overview</h3>
                            <p className="mb-4">{product.description}</p>
                            <h4 className="font-bold text-foreground mb-2">Health Benefits:</h4>
                            <ul className="list-disc pl-5 space-y-1 mb-6">
                                <li>Helps boost immunity</li>
                                <li>Natural energy source</li>
                                <li>Rich in antioxidants</li>
                                <li>Helps soothe coughs and throats</li>
                            </ul>
                            <h4 className="font-bold text-foreground mb-2">Usage:</h4>
                            <p>Can be mixed with warm water, used as a natural sweetener in tea/coffee, or consumed directly.</p>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div>
                            <div className="flex flex-col md:flex-row gap-8 mb-8 border-b border-border pb-8">
                                <div className="md:w-1/3 flex flex-col items-center justify-center text-center">
                                    <span className="text-5xl font-bold text-foreground mb-2">{product.rating}</span>
                                    <div className="flex text-[#F59F0A] mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={20} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                                        ))}
                                    </div>
                                    <span className="text-text-secondary">Based on {product.reviewCount} reviews</span>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="space-y-2">
                                        {[5, 4, 3, 2, 1].map(star => (
                                            <div key={star} className="flex items-center gap-2">
                                                <span className="text-sm text-text-secondary w-12">{star} Stars</span>
                                                <div className="flex-grow h-2 bg-muted rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#F59F0A]" style={{ width: star === 5 ? '80%' : star === 4 ? '15%' : '5%' }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Dummy Review */}
                                <div className="border-b border-border pb-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <span className="font-semibold text-foreground">Md. Rahim</span>
                                            <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded ml-2">Verified Purchase</span>
                                        </div>
                                        <span className="text-xs text-text-muted">August 18, 2026</span>
                                    </div>
                                    <div className="flex text-[#F59F0A] mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-text-secondary">খুবই ভালো মানের মধু। আমি ১০০% সন্তুষ্ট। প্যাকেজিং ও খুব সুন্দর ছিলো। ধন্যবাদ আস্থভোজকে।</p>
                                </div>

                                <button className="px-6 py-2 border border-primary text-primary rounded-md font-semibold hover:bg-primary/5 transition-colors">
                                    Write a Review
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products */}
            <ProductSection
                title="Related Products"
                products={[
                    {
                        id: "3",
                        name: "সরিষার তেল (১ লিটার)",
                        slug: "mustard-oil-1l",
                        image: "https://placehold.co/400x400/F9FAFB/F97316?text=Mustard+Oil",
                        price: 280,
                        oldPrice: 320,
                        rating: 4.5,
                        reviewCount: 45,
                        badge: "sale",
                        stock: 100
                    },
                    {
                        id: "4",
                        name: "স্পেশাল মিক্সড ড্রাই ফ্রুটস",
                        slug: "special-mixed-dry-fruits",
                        image: "https://placehold.co/400x400/F9FAFB/F97316?text=Dry+Fruits",
                        price: 950,
                        rating: 4.7,
                        reviewCount: 210,
                        stock: 20
                    }
                ]}
            />
        </div>
    );
};

export default ProductDetailsPage;
