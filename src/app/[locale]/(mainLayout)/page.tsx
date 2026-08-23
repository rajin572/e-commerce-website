import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import ProductSection from '@/components/home/ProductSection';
import PromoBanner from '@/components/home/PromoBanner';
import { ProductProps } from '@/components/shared/ProductCard';

// Dummy Data
const DUMMY_PRODUCTS: ProductProps[] = [
    {
        id: "1",
        name: "প্রিমিয়াম কোয়ালিটি সুন্দরবনের খাঁটি মধু",
        slug: "sundarban-honey-premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg",
        price: 850,
        oldPrice: 1000,
        rating: 4.8,
        reviewCount: 124,
        badge: "bestsell",
        stock: 50
    },
    {
        id: "2",
        name: "গাওয়া ঘি (খাঁটি গাওয়া ঘি)",
        slug: "pure-gawa-ghee",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Butterschmalz-2.jpg/500px-Butterschmalz-2.jpg",
        price: 1200,
        rating: 4.9,
        reviewCount: 89,
        badge: "new",
        stock: 30
    },
    {
        id: "3",
        name: "সরিষার তেল (১ লিটার)",
        slug: "mustard-oil-1l",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mustard_Oil_%26_Seeds_-_Kolkata_2003-10-31_00537.JPG/500px-Mustard_Oil_%26_Seeds_-_Kolkata_2003-10-31_00537.JPG",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/DriedfruitS.jpg/500px-DriedfruitS.jpg",
        price: 950,
        rating: 4.7,
        reviewCount: 210,
        badge: "combo",
        stock: 0
    }
];

const HomePage = () => {
    return (
        <div className="flex flex-col gap-4 pb-10">
            <HeroBanner />
            <FeaturedCategories />
            
            <ProductSection 
                title="Best Selling Products" 
                viewAllLink="/shop?sort=bestselling" 
                products={DUMMY_PRODUCTS} 
            />
            
            <PromoBanner 
                title="১০০% খাঁটি সরিষার তেল" 
                subtitle="গ্রামের ঘানিতে ভাঙানো খাঁটি সরিষার তেল" 
                imageUrl="https://placehold.co/1200x400/10B981/FFFFFF?text=Mustard+Oil+Promo" 
                link="/category/oil" 
            />

            <ProductSection 
                title="New Arrivals" 
                viewAllLink="/shop?sort=newest" 
                products={[...DUMMY_PRODUCTS].reverse()} 
            />

            <ProductSection 
                title="Exclusive Combo Deals" 
                viewAllLink="/category/combos" 
                products={DUMMY_PRODUCTS.map(p => ({ ...p, badge: 'combo' as const }))} 
            />
        </div>
    );
};

export default HomePage;