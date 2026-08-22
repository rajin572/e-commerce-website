"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, ShoppingCart, ArrowLeft } from 'lucide-react';
import { AllImages } from '../../../public/images/AllImages';

interface MobileAppBarProps {
    onMenuClick: () => void;
    onCartClick: () => void;
}

const MobileAppBar: React.FC<MobileAppBarProps> = ({ onMenuClick, onCartClick }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="bg-secondary text-secondary-foreground h-14 relative">
            {!isSearchOpen ? (
                <div className="flex items-center justify-between h-full px-4">
                    <div className="flex items-center gap-3">
                        <button onClick={onMenuClick} className="p-1 -ml-1">
                            <Menu size={24} />
                        </button>
                        <Link href="/">
                            <Image
                                src={AllImages.logo}
                                alt="ECommerce"
                                width={100}
                                height={30}
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <button onClick={() => setIsSearchOpen(true)} className="p-1">
                            <Search size={22} />
                        </button>
                        <button onClick={onCartClick} className="p-1 relative">
                            <ShoppingCart size={22} />
                            <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex items-center h-full px-2 gap-2 bg-background w-full absolute top-0 left-0 z-10 animate-in slide-in-from-top-2">
                    <button onClick={() => setIsSearchOpen(false)} className="p-2 text-foreground">
                        <ArrowLeft size={20} />
                    </button>
                    <input
                        autoFocus
                        type="text"
                        placeholder="Search for products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="grow h-10 bg-transparent outline-none text-foreground text-base"
                    />
                    <button className="p-2 text-primary">
                        <Search size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MobileAppBar;
