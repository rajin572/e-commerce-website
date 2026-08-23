"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Package, Heart, User } from 'lucide-react';

const BottomNavBar = () => {
    const pathname = usePathname();

    const tabs = [
        { name: "Home", route: "/", icon: <Home size={20} /> },
        { name: "Search", route: "/search", icon: <Search size={20} /> },
        { name: "Orders", route: "/account/orders", icon: <Package size={20} /> },
        { name: "Wishlist", route: "/wishlist", icon: <Heart size={20} />, badge: 0 },
        { name: "Account", route: "/account", icon: <User size={20} /> },
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 h-[60px] bg-background border-t border-border z-40 pb-safe">
            <div className="flex items-center justify-around h-full px-2">
                {tabs.map((tab, index) => {
                    const isActive = pathname === tab.route;
                    return (
                        <Link
                            key={index}
                            href={tab.route}
                            className={`flex flex-col items-center justify-center w-full h-full space-y-1 relative transition-colors ${isActive ? 'text-primary' : 'text-text-secondary hover:text-foreground'
                                }`}
                        >
                            <div className="relative">
                                {tab.icon}
                                {tab.badge !== undefined && (
                                    <span className="absolute -top-1.5 -right-2 bg-primary text-white text-[9px] font-bold w-[14px] h-[14px] rounded-full flex items-center justify-center">
                                        {tab.badge}
                                    </span>
                                )}
                            </div>
                            <span className="text-[10px] font-medium">{tab.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default BottomNavBar;
