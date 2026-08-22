"use client";

import React, { useState } from 'react';
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

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden md:block w-full fixed top-0 z-50 bg-background shadow-sm">
                <TopBar onCartClick={() => setIsCartOpen(true)} />
                <CategoryBar />
            </header>

            {/* Mobile Header */}
            <header className="md:hidden w-full fixed top-0 z-50 bg-background shadow-sm">
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
