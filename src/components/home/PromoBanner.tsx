"use client";

import React from 'react';
import Image from 'next/image';
import LocaleLink from '@/components/i18n/LocaleLink';
import Container from '../ui/CustomUi/Container';

interface PromoBannerProps {
    imageUrl: string;
    title?: string;
    link: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ imageUrl, title = "Promo Banner", link }) => {
    return (
        <Container className="py-12">
            <LocaleLink href={link} className="block relative w-full aspect-[4/1] rounded-xl overflow-hidden group">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                />
            </LocaleLink>
        </Container>
    );
};

export default PromoBanner;
