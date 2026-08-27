"use client";

import React from 'react';
import Image from 'next/image';
import LocaleLink from '@/components/i18n/LocaleLink';
import Container from '../ui/CustomUi/Container';

interface BannerData {
    imageUrl: string;
    title?: string;
    link: string;
}

interface PromoBannerProps {
    banners: BannerData[];
}

const PromoBanner: React.FC<PromoBannerProps> = ({ banners }) => {
    if (!banners || banners.length === 0) return null;

    return (
        <Container className="py-12">
            <div className={`grid grid-cols-1 gap-6 ${banners.length > 1 ? 'md:grid-cols-2' : ''}`}>
                {banners.map((banner, index) => (
                    <LocaleLink key={index} href={banner.link} className="block relative w-full aspect-[16/7] md:aspect-[21/9] rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                        <Image
                            src={banner.imageUrl}
                            alt={banner.title || "Promo Banner"}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </LocaleLink>
                ))}
            </div>
        </Container>
    );
};

export default PromoBanner;
