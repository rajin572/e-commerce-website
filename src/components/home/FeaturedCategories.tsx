"use client";

import React from 'react';
import Image from 'next/image';
import LocaleLink from '@/components/i18n/LocaleLink';
import ParallaxMarquee from '@/components/ui/animation/components/AnimatedMarque';
import Container from '../ui/CustomUi/Container';
import { useT } from '@/components/i18n/DictionaryProvider';
import { GradientSectionTitle } from '../ui/CustomUi/GradientSectionTitle';

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
    const t = useT();

    const titleText = t.home.shopByCategory;
    const words = titleText.split(' ');
    const lastWord = words.pop();
    const firstPart = words.join(' ');

    const marqueeItems = FEATURED_CATEGORIES.map((cat, idx) => (
        <LocaleLink
            key={idx}
            href={`/category/${cat.slug}`}
            className="flex flex-col items-center justify-center gap-2 w-full h-[100px] bg-surface border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group"
            draggable={false}
        >
            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-background">
                <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="48px"
                    draggable={false}
                />
            </div>
            <span className="text-sm font-bold text-foreground text-center">
                {cat.name}
            </span>
        </LocaleLink>
    ));

    return (
        <section className="py-8 md:py-12 bg-background relative overflow-hidden">
            <Container className="relative z-10">
                <GradientSectionTitle title={t.home.shopByCategory} />
            </Container>

            <div className="w-full relative z-10 mt-10">
                <ParallaxMarquee
                    items={marqueeItems}
                    baseVelocity={-0.5}
                    itemWidth={150}
                    gap={16}
                    playMode="hover-pause"
                    draggable={true}
                />
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
