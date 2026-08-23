"use client";

import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import CategoryBar from './CategoryBar';
import MobileAppBar from './MobileAppBar';
import BottomNavBar from './BottomNavBar';
import FloatingCart from './FloatingCart';
import FloatingChat from './FloatingChat';
import MobileDrawer from './MobileDrawer';
import CartDrawer from './CartDrawer';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    if (currentScrollY < 50) {
                        // Always show near the very top
                        setIsVisible(true);
                        setLastScrollY(currentScrollY);
                    } else {
                        const delta = currentScrollY - lastScrollY;

                        // Require at least a 15px scroll before hiding/showing
                        // This prevents trackpad jitter from causing flashing
                        if (Math.abs(delta) > 15) {
                            setIsVisible(delta < 0);
                            setLastScrollY(currentScrollY);
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Desktop Header: Hides only TopBar (h-16 = 64px) by translating up exactly that amount */}
            <header className={`hidden lg:block w-full fixed top-0 z-50 bg-background shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isVisible ? 'translate-y-0' : '-translate-y-16'}`}>
                <TopBar onCartClick={() => setIsCartOpen(true)} />
                <CategoryBar />
            </header>

            {/* Mobile Header: Hides completely on scroll down */}
            <header className={`lg:hidden w-full fixed top-0 z-50 bg-background shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <MobileAppBar
                    onMenuClick={() => setIsMobileMenuOpen(true)}
                    onCartClick={() => setIsCartOpen(true)}
                />
            </header>

            {/* Mobile Drawer Navigation */}
            <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

            {/* Slide-in Cart Drawer */}
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* Floating Elements */}
            <FloatingCart onClick={() => setIsCartOpen(true)} />
            <FloatingChat />

            {/* Mobile Bottom Nav */}
            <BottomNavBar />
        </>
    );
};

export default Header;
