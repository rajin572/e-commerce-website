"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroBanner = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] bg-muted overflow-hidden group">
            {/* Carousel Track (Placeholder for now, just showing one slide) */}
            <div className="w-full h-full relative">
                <Image 
                    src="https://placehold.co/1920x800/F9FAFB/1F2937?text=Hero+Banner" 
                    alt="Hero Banner" 
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white p-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">খাঁটি মধুর ভান্ডার</h1>
                    <p className="text-sm md:text-lg mb-6">১০০% প্রাকৃতিক ও খাঁটি মধু</p>
                    <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-md font-semibold transition-colors">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/50 hover:bg-white text-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ChevronLeft size={24} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/50 hover:bg-white text-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ChevronRight size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <button className="w-2.5 h-2.5 rounded-full bg-primary"></button>
                <button className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white"></button>
                <button className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white"></button>
            </div>
        </div>
    );
};

export default HeroBanner;
