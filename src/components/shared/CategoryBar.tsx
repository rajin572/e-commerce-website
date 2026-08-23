"use client";

import React from 'react';
import LocaleLink from '@/components/i18n/LocaleLink';
import { ChevronDown } from 'lucide-react';
import Container from '../ui/CustomUi/Container';

const PROMO_LINKS = [
    { name: "Combo", href: "/products/combos" },
    { name: "Offer Zone", href: "/products/offers" },
];

// TODO: wire to category endpoint once it exists.
const DUMMY_CATEGORIES = [
    {
        name: "Spices",
        hasSub: true,
        subCategories: ["Whole Spices", "Powder Spices", "Mixed Spices"]
    },
    {
        name: "Pickles",
        hasSub: false
    },
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

const CategoryBar = () => {
    return (
        <div className="bg-secondary hidden lg:block">
            <Container>
                <div className="h-12 flex items-center whitespace-nowrap">
                    <ul className="flex items-center gap-6 text-sm font-semibold text-background">
                        {/* Promotional Links */}
                        {PROMO_LINKS.map((promo, idx) => (
                            <li key={`promo-${idx}`} className="h-12 flex items-center">
                                <LocaleLink
                                    href={promo.href}
                                    className="flex items-center gap-1 hover:text-primary transition-colors h-full"
                                >
                                    {promo.name}
                                </LocaleLink>
                            </li>
                        ))}

                        <li className="h-6 w-px bg-border mx-2"></li> {/* Divider */}

                        {/* Category Links */}
                        {DUMMY_CATEGORIES.map((category, idx) => {
                            const categorySlug = category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

                            return (
                                <li key={`cat-${idx}`} className="group relative h-12 flex items-center">
                                    <LocaleLink
                                        href={`/products/category/${categorySlug}`}
                                        className="flex items-center gap-1 hover:text-primary transition-colors h-full"
                                    >
                                        {category.name}
                                        {category.hasSub && <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-200" />}
                                    </LocaleLink>

                                    {/* Dropdown for subcategories (Mega menu template) */}
                                    {category.hasSub && category.subCategories && (
                                        <div className="absolute top-12 left-0 w-48 bg-card shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-t-0 border-border">
                                            <div className="p-2 flex flex-col">
                                                {category.subCategories.map((sub, subIdx) => {
                                                    const subSlug = sub.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                                                    return (
                                                        <LocaleLink
                                                            key={`sub-${subIdx}`}
                                                            href={`/products/category/${categorySlug}/${subSlug}`}
                                                            className="p-2 hover:bg-muted text-text-secondary hover:text-primary rounded text-sm transition-colors"
                                                        >
                                                            {sub}
                                                        </LocaleLink>
                                                    );
                                                })}
                                                <LocaleLink href={`/products/category/${categorySlug}`} className="p-2 hover:bg-muted hover:text-primary rounded text-sm transition-colors text-primary font-semibold mt-2 border-t border-border">
                                                    View All {category.name}
                                                </LocaleLink>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default CategoryBar;
