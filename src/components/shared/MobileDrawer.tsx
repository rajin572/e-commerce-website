"use client";

import React, { useState } from 'react';
import LocaleLink from '@/components/i18n/LocaleLink';
import Image from 'next/image';
import { User, MapPin, Heart, Info, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { AllImages } from '../../../public/images/AllImages';
import ReusableSheet from '@/components/ui/CustomUi/ReuseableSheet';

const PROMO_LINKS = [
    { name: "Combo", href: "/products/combos" },
    { name: "Offer Zone", href: "/products/offers" },
];

const DUMMY_CATEGORIES = [
    {
        name: "Spices",
        hasSub: true,
        subCategories: ["Whole Spices", "Powder Spices", "Mixed Spices"]
    },
    { name: "Pickles", hasSub: false },
    {
        name: "Dry Foods",
        hasSub: true,
        subCategories: ["Dates", "Raisins", "Apricots"]
    },
    {
        name: "Nuts",
        hasSub: true,
        subCategories: ["Almonds", "Cashews", "Walnuts", "Pistachios"]
    },
    {
        name: "Honey & Oil",
        hasSub: true,
        subCategories: ["Natural Honey", "Mustard Oil", "Ghee"]
    },
];

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const toggleCategory = (categoryName: string) => {
        setExpandedCategory(prev => prev === categoryName ? null : categoryName);
    };

    return (
        <ReusableSheet
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) {
                    onClose();
                    setTimeout(() => setExpandedCategory(null), 300);
                }
            }}
            side="left"
            width="w-[85vw] sm:max-w-sm"
            title={
                <Image
                    src={AllImages.logo}
                    alt="ECommerce"
                    width={100}
                    height={30}
                    className="h-8 w-auto object-contain"
                />
            }
        >
            <div className="-mx-6 -my-5 h-screen">
                {/* Guest Section */}
                <div className="p-4 bg-muted/30 border-b border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-foreground">Welcome Guest</p>
                        <div className="flex gap-2 text-xs text-primary font-semibold mt-1">
                            <LocaleLink href="/sign-in" onClick={onClose}>Login</LocaleLink>
                            <span>|</span>
                            <LocaleLink href="/sign-up" onClick={onClose}>Register</LocaleLink>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="p-2 border-b border-border">
                    <ul className="flex flex-col">
                        <li>
                            <LocaleLink
                                href="/"
                                className="block p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors"
                                onClick={onClose}
                            >
                                Home
                            </LocaleLink>
                        </li>

                        {/* Promo Links */}
                        {PROMO_LINKS.map((promo, idx) => (
                            <li key={`promo-${idx}`}>
                                <LocaleLink
                                    href={promo.href}
                                    className="block p-3 text-sm font-medium text-primary hover:bg-muted rounded transition-colors"
                                    onClick={onClose}
                                >
                                    {promo.name}
                                </LocaleLink>
                            </li>
                        ))}

                        <li className="my-2 border-t border-border" />
                        <li className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Categories
                        </li>

                        {/* Category Accordion */}
                        {DUMMY_CATEGORIES.map((category, idx) => {
                            const categorySlug = category.name
                                .toLowerCase()
                                .replace(/ & /g, '-')
                                .replace(/ /g, '-');
                            const isExpanded = expandedCategory === category.name;

                            return (
                                <li key={`cat-${idx}`} className="flex flex-col">
                                    {category.hasSub ? (
                                        <>
                                            <button
                                                onClick={() => toggleCategory(category.name)}
                                                className="flex items-center justify-between w-full p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors"
                                            >
                                                {category.name}
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : ''}`}
                                                />
                                            </button>

                                            {/* Animated accordion content */}
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <ul className="pl-4 pb-2 flex flex-col border-l-2 border-muted ml-3 mt-1">
                                                    {category.subCategories?.map((sub, subIdx) => {
                                                        const subSlug = sub
                                                            .toLowerCase()
                                                            .replace(/ & /g, '-')
                                                            .replace(/ /g, '-');
                                                        return (
                                                            <li key={`sub-${subIdx}`}>
                                                                <LocaleLink
                                                                    href={`/products/category/${categorySlug}/${subSlug}`}
                                                                    className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                                                                    onClick={onClose}
                                                                >
                                                                    {sub}
                                                                </LocaleLink>
                                                            </li>
                                                        );
                                                    })}
                                                    <li>
                                                        <LocaleLink
                                                            href={`/products/category/${categorySlug}`}
                                                            className="block py-2 px-3 text-sm font-semibold text-primary hover:bg-muted rounded transition-colors mt-1"
                                                            onClick={onClose}
                                                        >
                                                            View All {category.name}
                                                        </LocaleLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <LocaleLink
                                            href={`/products/category/${categorySlug}`}
                                            className="block p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors"
                                            onClick={onClose}
                                        >
                                            {category.name}
                                        </LocaleLink>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="p-2 border-b border-border">
                    <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quick Links</p>
                    <ul className="flex flex-col">
                        <li>
                            <LocaleLink href="/track-order" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                <MapPin size={18} className="text-muted-foreground" /> Track Order
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink href="/wishlist" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                <Heart size={18} className="text-muted-foreground" /> Wishlist
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink href="/account" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                <User size={18} className="text-muted-foreground" /> My Account
                            </LocaleLink>
                        </li>
                    </ul>
                </div>

                {/* Info Links */}
                <div className="p-2">
                    <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Information</p>
                    <ul className="flex flex-col">
                        <li>
                            <LocaleLink href="/about" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                <Info size={18} className="text-muted-foreground" /> About Us
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink href="/contact" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                <Phone size={18} className="text-muted-foreground" /> Contact Us
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink href="/faq" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                <MessageCircle size={18} className="text-muted-foreground" /> FAQ
                            </LocaleLink>
                        </li>
                    </ul>
                </div>
            </div>
        </ReusableSheet>
    );
};

export default MobileDrawer;
