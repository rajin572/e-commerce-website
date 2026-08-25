"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import LocaleLink from '@/components/i18n/LocaleLink';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/CustomUi/Container';

const HERO_SLIDES = [
    {
        id: 1,
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fd795899759469.69f3981d1bcf2.png",
        ctaLink: "/category/new"
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvmeNFFLd147p3q8RjE1DFXx3Qf7VaLwpLlwOUOtCYmMVTQneTpyQX1tE&s=10",
        ctaLink: "/products"
    },
    {
        id: 3,
        image: "https://rahulgroup.com.bd/content/www/en/images/Rahul-Group-Banner-1.jpg",
        ctaLink: "/category/honey"
    },
    {
        id: 4,
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fd795899759469.69f3981d1bcf2.png",
        ctaLink: "/category/new"
    },
    {
        id: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvmeNFFLd147p3q8RjE1DFXx3Qf7VaLwpLlwOUOtCYmMVTQneTpyQX1tE&s=10",
        ctaLink: "/products"
    },
    {
        id: 6,
        image: "https://rahulgroup.com.bd/content/www/en/images/Rahul-Group-Banner-1.jpg",
        ctaLink: "/category/honey"
    },
];

const MIN_SWIPE_DISTANCE = 50;

const HeroBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    // Signed 0..1 crossfade the drag has pulled through: < 0 heads to the next slide, > 0 to the previous one
    const [dragProgress, setDragProgress] = useState(0);

    const dragStartX = useRef<number | null>(null);
    const dragDistance = useRef(0);
    const suppressClick = useRef(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    }, []);

    useEffect(() => {
        if (isPaused || isDragging) return;
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused, isDragging, nextSlide]);

    // One handler for mouse, touch and pen
    const handleDragStart = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        suppressClick.current = false;
        dragStartX.current = e.clientX;
        dragDistance.current = 0;
        setDragProgress(0);
        setIsDragging(true);
    };

    // Listen on window so the drag survives the pointer leaving the slider
    useEffect(() => {
        if (!isDragging) return;

        const handleDragMove = (e: PointerEvent) => {
            if (dragStartX.current === null) return;
            const distance = e.clientX - dragStartX.current;

            dragDistance.current = distance;
            // Fully crossfaded at twice the commit threshold, so the fade tracks the pull
            setDragProgress(Math.max(-1, Math.min(1, distance / (MIN_SWIPE_DISTANCE * 2))));
        };

        const handleDragEnd = () => {
            const distance = dragDistance.current;

            if (distance <= -MIN_SWIPE_DISTANCE) {
                nextSlide();
            } else if (distance >= MIN_SWIPE_DISTANCE) {
                prevSlide();
            }

            // A drag must not open the slide's link
            suppressClick.current = Math.abs(distance) > 5;
            dragStartX.current = null;
            dragDistance.current = 0;
            setDragProgress(0);
            setIsDragging(false);
        };

        window.addEventListener('pointermove', handleDragMove);
        window.addEventListener('pointerup', handleDragEnd);
        window.addEventListener('pointercancel', handleDragEnd);
        return () => {
            window.removeEventListener('pointermove', handleDragMove);
            window.removeEventListener('pointerup', handleDragEnd);
            window.removeEventListener('pointercancel', handleDragEnd);
        };
    }, [isDragging, nextSlide, prevSlide]);

    // Slide the drag is fading towards; it sits under the active one at full opacity
    const dragTarget =
        dragProgress === 0
            ? -1
            : dragProgress < 0
                ? (currentSlide + 1) % HERO_SLIDES.length
                : (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;

    return (
        <div className="pt-4 pb-6 lg:pt-6 lg:pb-8">
            <Container>
                {/* Remove items-start so children stretch to match the tallest child by default */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    {/* Left: Slider */}
                    <div
                        className="relative w-full lg:w-[66%] aspect-video bg-muted overflow-hidden group rounded-xl shadow-sm"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Carousel Tracks */}
                        <div
                            className="relative z-0 w-full h-full cursor-grab active:cursor-grabbing touch-pan-y select-none"
                            onPointerDown={handleDragStart}
                        >
                            {HERO_SLIDES.map((slide, index) => {
                                const isActive = index === currentSlide;
                                const isTarget = !isActive && index === dragTarget;
                                // The outgoing slide holds its opacity (delay-700) until the incoming one has
                                // finished fading in on top of it, so the background never shows through
                                const transitionClass = isDragging
                                    ? ''
                                    : `transition-opacity duration-700 ease-in-out ${isActive ? '' : 'delay-700'}`;

                                return (
                                    <LocaleLink
                                        key={slide.id}
                                        href={slide.ctaLink}
                                        className={`absolute inset-0 block ${isActive ? '' : 'pointer-events-none'} ${transitionClass}`}
                                        style={{
                                            // The active slide fades out over the incoming one, which waits underneath at full opacity
                                            opacity: isActive ? 1 - Math.abs(dragProgress) : isTarget ? 1 : 0,
                                            zIndex: isActive ? 2 : isTarget ? 1 : 0,
                                        }}
                                        aria-hidden={!isActive}
                                        tabIndex={isActive ? undefined : -1}
                                        onClick={(e) => {
                                            // e.detail === 0 means keyboard, which is never a drag
                                            if (suppressClick.current && e.detail !== 0) {
                                                e.preventDefault();
                                            }
                                        }}
                                        onDragStart={(e) => e.preventDefault()}
                                    >
                                        <Image
                                            src={slide.image}
                                            alt={`Slide ${slide.id}`}
                                            fill
                                            priority={slide.id === 1}
                                            className="object-cover pointer-events-none"
                                            draggable={false}
                                        />
                                    </LocaleLink>
                                );
                            })}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => { e.preventDefault(); prevSlide(); }}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white text-primary/80 hover:text-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-md z-10"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); nextSlide(); }}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white text-primary/80 hover:text-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-md z-10"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                        </button>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-3 sm:bottom-6 right-10 flex gap-1.5 sm:gap-2 z-10">
                            {HERO_SLIDES.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => { e.preventDefault(); setCurrentSlide(index); }}
                                    className={`transition-all duration-300 rounded-full ${currentSlide === index
                                        ? 'w-6 h-2 sm:w-8 sm:h-2.5 bg-primary'
                                        : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/50 hover:bg-white'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Static Promo Banner */}
                    <LocaleLink
                        href="/collections/offers"
                        className="hidden lg:block relative w-full lg:w-[34%] bg-muted overflow-hidden rounded-xl shadow-sm group shrink-0 aspect-square"
                    >
                        <Image
                            src="https://img.magnific.com/free-vector/flat-design-indian-restaurant-poster-template_23-2149447260.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Special Promo"
                            width={1000}
                            height={1000}
                            priority
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 aspect-square"
                        />
                    </LocaleLink>
                </div>
            </Container>
        </div>
    );
};

export default HeroBanner;
