"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PromoBannerProps {
    imageUrl: string;
    title: string;
    subtitle?: string;
    link: string;
    buttonText?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ imageUrl, title, subtitle, link, buttonText = "Shop Now" }) => {
    return (
        <section className="py-6">
            <div className="container mx-auto px-4">
                <div className="relative w-full h-[200px] md:h-[300px] rounded-xl overflow-hidden group">
                    <Image 
                        src={imageUrl} 
                        alt={title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8 md:px-16 text-white">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2">{title}</h3>
                        {subtitle && <p className="text-sm md:text-lg mb-6 opacity-90">{subtitle}</p>}
                        <Link 
                            href={link}
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-md font-semibold transition-colors w-max"
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
