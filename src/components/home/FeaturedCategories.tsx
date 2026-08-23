"use client";

import React from 'react';
import Image from 'next/image';
import LocaleLink from '@/components/i18n/LocaleLink';
import ParallaxMarquee from '@/components/ui/animation/components/AnimatedMarque';
import Container from '../ui/CustomUi/Container';

const FEATURED_CATEGORIES = [
    { name: "মধু", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/500px-Runny_hunny.jpg", slug: "honey" },
    { name: "ঘি", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Butterschmalz-2.jpg/500px-Butterschmalz-2.jpg", slug: "ghee" },
    { name: "তেল", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mustard_Oil_%26_Seeds_-_Kolkata_2003-10-31_00537.JPG/500px-Mustard_Oil_%26_Seeds_-_Kolkata_2003-10-31_00537.JPG", slug: "oil" },
    { name: "গুঁড়া মশলা", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Spices1.jpg/500px-Spices1.jpg", slug: "powder-spices" },
    { name: "আচার", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Chilli_pickle_in_a_plate_2.jpg/500px-Chilli_pickle_in_a_plate_2.jpg", slug: "pickle" },
    { name: "ড্রাই ফ্রুটস", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/DriedfruitS.jpg/500px-DriedfruitS.jpg", slug: "dry-fruits" },
    { name: "চাল", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/500px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg", slug: "rice" },
    { name: "ডাল", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/3_types_of_lentil.png/500px-3_types_of_lentil.png", slug: "lentils" },
];

const FeaturedCategories = () => {
    const marqueeItems = FEATURED_CATEGORIES.map((cat, idx) => (
        <LocaleLink
            key={idx}
            href={`/category/${cat.slug}`}
            className="flex flex-col items-center gap-2 group w-full"
            draggable={false}
        >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border p-1 overflow-hidden group-hover:border-primary transition-colors bg-surface shrink-0">
                <Image
                    src={cat.image}
                    alt={cat.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    draggable={false}
                />
            </div>
            <span className="text-sm font-medium text-center text-text-secondary group-hover:text-primary transition-colors whitespace-nowrap">
                {cat.name}
            </span>
        </LocaleLink>
    ));

    return (
        <section className="py-8 bg-white">
            <Container>
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-foreground">Featured Categories</h2>

                <div className="w-full overflow-hidden">
                    <ParallaxMarquee
                        items={marqueeItems}
                        baseVelocity={-1}
                        itemWidth={100}
                        gap={24}
                        playMode="hover-pause"
                        draggable={true}
                    />
                </div>
            </Container>
        </section>
    );
};

export default FeaturedCategories;
