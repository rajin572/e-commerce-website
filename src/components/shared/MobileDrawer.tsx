"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, User, MapPin, Heart, Info, Phone, MessageCircle } from 'lucide-react';
import { AllImages } from '../../../public/images/AllImages';

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-[60] md:hidden transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-background z-[70] transform transition-transform duration-300 md:hidden flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-secondary">
                    <Image
                        src={AllImages.logo}
                        alt="ECommerce"
                        width={100}
                        height={30}
                        className="h-8 w-auto object-contain brightness-0 invert"
                    />
                    <button onClick={onClose} className="p-1 text-secondary-foreground hover:text-primary transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto pb-6">
                    {/* Guest Section */}
                    <div className="p-4 bg-muted/30 border-b border-border flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <User size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Welcome Guest</p>
                            <div className="flex gap-2 text-xs text-primary font-semibold mt-1">
                                <Link href="/sign-in" onClick={onClose}>Login</Link>
                                <span>|</span>
                                <Link href="/sign-up" onClick={onClose}>Register</Link>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="p-2 border-b border-border">
                        <ul className="flex flex-col">
                            <li>
                                <Link href="/" className="block p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>Home</Link>
                            </li>
                            <li>
                                <Link href="/shop" className="block p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>Shop</Link>
                            </li>
                            <li>
                                <Link href="/categories" className="block p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>All Categories</Link>
                            </li>
                            <li>
                                <Link href="/offers" className="block p-3 text-sm font-medium text-primary hover:bg-muted rounded transition-colors" onClick={onClose}>Offer Zone</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="p-2 border-b border-border">
                        <p className="px-3 py-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">Quick Links</p>
                        <ul className="flex flex-col">
                            <li>
                                <Link href="/track-order" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                    <MapPin size={18} className="text-text-secondary" /> Track Order
                                </Link>
                            </li>
                            <li>
                                <Link href="/wishlist" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                    <Heart size={18} className="text-text-secondary" /> Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link href="/account" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                    <User size={18} className="text-text-secondary" /> My Account
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Info Links */}
                    <div className="p-2 border-b border-border">
                        <p className="px-3 py-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">Information</p>
                        <ul className="flex flex-col">
                            <li>
                                <Link href="/about" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                    <Info size={18} className="text-text-secondary" /> About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                    <Phone size={18} className="text-text-secondary" /> Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="flex items-center gap-3 p-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded transition-colors" onClick={onClose}>
                                    <MessageCircle size={18} className="text-text-secondary" /> FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileDrawer;
