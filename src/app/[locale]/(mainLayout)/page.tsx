import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import ProductSection from '@/components/home/ProductSection';
import PromoBanner from '@/components/home/PromoBanner';
import { ProductProps } from '@/components/shared/ProductCard';
import { getDictionary } from '@/i18n/dictionaries';

// Dummy Data
const DUMMY_PRODUCTS: ProductProps[] = [
    {
        id: "1",
        name: "প্রিমিয়াম কোয়ালিটি সুন্দরবনের খাঁটি মধু",
        slug: "sundarban-honey-premium",
        image: "https://loremflickr.com/500/500/honey,jar/all?lock=1",
        secondaryImage: "https://loremflickr.com/500/500/honey,jar/all?lock=2",
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
        image: "https://loremflickr.com/500/500/butter,jar/all?lock=1",
        secondaryImage: "https://loremflickr.com/500/500/butter,jar/all?lock=2",
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
        image: "https://loremflickr.com/500/500/cooking,oil/all?lock=1",
        secondaryImage: "https://loremflickr.com/500/500/cooking,oil/all?lock=2",
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
        image: "https://loremflickr.com/500/500/nuts,dried/all?lock=1",
        secondaryImage: "https://loremflickr.com/500/500/nuts,dried/all?lock=2",
        price: 950,
        rating: 4.7,
        reviewCount: 210,
        badge: "combo",
        stock: 0
    },
    {
        id: "5",
        name: "অর্গানিক হলুদের গুঁড়া (৫০০ গ্রাম)",
        slug: "organic-turmeric-powder-500g",
        image: "https://loremflickr.com/500/500/turmeric,powder/all?lock=1",
        secondaryImage: "https://loremflickr.com/500/500/turmeric,powder/all?lock=2",
        price: 350,
        oldPrice: 400,
        rating: 4.6,
        reviewCount: 78,
        stock: 150
    },
    {
        id: "6",
        name: "প্রিমিয়াম লাল মরিচের গুঁড়া",
        slug: "premium-red-chili-powder",
        image: "https://loremflickr.com/500/500/chili,powder/all?lock=1",
        secondaryImage: "https://loremflickr.com/500/500/chili,powder/all?lock=2",
        price: 450,
        rating: 4.8,
        reviewCount: 112,
        badge: "new",
        stock: 200
    },
    {
        id: "7",
        name: "কালোজিরা ফুলের মধু (১ কেজি)",
        slug: "black-seed-honey",
        image: "https://loremflickr.com/500/500/dark,honey/all?lock=1",
        secondaryImage: "https://loremflickr.com/500/500/dark,honey/all?lock=2",
        price: 1100,
        oldPrice: 1250,
        rating: 4.9,
        reviewCount: 340,
        badge: "bestsell",
        stock: 45
    },
    {
        id: "8",
        name: "কাঠবাদাম (Almonds) ১ কেজি",
        slug: "almonds-1kg",
        image: "https://loremflickr.com/500/500/almonds/all?lock=1",
        secondaryImage: "https://loremflickr.com/500/500/almonds/all?lock=2",
        price: 900,
        rating: 4.7,
        reviewCount: 65,
        badge: "sale",
        stock: 80
    },
    {
        id: "9",
        name: "আজওয়া খেজুর (VIP) - ৫০০ গ্রাম",
        slug: "ajwa-dates-vip",
        image: "https://loremflickr.com/500/500/dates,fruit/all?lock=1",
        secondaryImage: "https://loremflickr.com/500/500/dates,fruit/all?lock=2",
        price: 1500,
        oldPrice: 1650,
        rating: 5.0,
        reviewCount: 22,
        stock: 15
    },
    {
        id: "10",
        name: "খাঁটি নারিকেল তেল (Cold Pressed)",
        slug: "pure-coconut-oil",
        image: "https://loremflickr.com/500/500/coconut,oil/all?lock=1",
        secondaryImage: "https://loremflickr.com/500/500/coconut,oil/all?lock=2",
        price: 450,
        rating: 4.4,
        reviewCount: 38,
        stock: 0
    }
];

const HomePage = async () => {
    const t = await getDictionary();

    return (
        <div className="flex flex-col gap-4 pb-10">
            <HeroBanner />
            <FeaturedCategories />

            <ProductSection
                title={t.home.bestSellingProducts}
                viewAllLink="/shop?sort=bestselling"
                viewAllText={t.common.viewAll}
                products={DUMMY_PRODUCTS}
            />

            <PromoBanner
                title="১০০% খাঁটি সরিষার তেল"
                subtitle="গ্রামের ঘানিতে ভাঙানো খাঁটি সরিষার তেল"
                imageUrl="https://placehold.co/1200x400/10B981/FFFFFF?text=Mustard+Oil+Promo"
                link="/category/oil"
            />

            <ProductSection
                title={t.home.newArrivals}
                viewAllLink="/shop?sort=newest"
                viewAllText={t.common.viewAll}
                products={[...DUMMY_PRODUCTS].reverse()}
            />

            <ProductSection
                title={t.home.exclusiveComboDeals}
                viewAllLink="/category/combos"
                viewAllText={t.common.viewAll}
                products={DUMMY_PRODUCTS.map(p => ({ ...p, badge: 'combo' as const }))}
            />
        </div>
    );
};

export default HomePage;