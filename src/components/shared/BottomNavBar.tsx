"use client";

import React from 'react';
import LocaleLink from '@/components/i18n/LocaleLink';
import { usePathname } from 'next/navigation';
import { Home, MapPin, Heart, User, ShoppingCart } from 'lucide-react';
import { useT } from '@/components/i18n/DictionaryProvider';
import Cookies from 'js-cookie';
import { useCartStore } from '@/store/cartStore';

interface BottomNavBarProps {
    onCartClick?: () => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onCartClick }) => {
    const pathname = usePathname();
    const t = useT();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const cartCount = useCartStore((state) => (state.hasHydrated ? state.items.reduce((sum, item) => sum + item.quantity, 0) : 0));

    React.useEffect(() => {
        if (Cookies.get('eCommerce_access_token')) {
            setIsLoggedIn(true);
        }
    }, []);

    const tabs = [
        { name: t.common?.home || "Home", route: "/", icon: <Home size={20} /> },
        { name: t.nav?.trackOrder || "Track Order", route: "/track-order", icon: <MapPin size={20} /> },
        { name: t.nav?.cart || "Cart", route: "/cart", icon: <ShoppingCart size={20} />, badge: cartCount > 0 ? cartCount : undefined, isAction: true },
        { name: t.nav?.wishlist || "Wishlist", route: isLoggedIn ? "/dashboard/wishlist" : "/wishlist", icon: <Heart size={20} /> },
        { name: t.nav?.myAccount || "Account", route: isLoggedIn ? "/dashboard/profile" : "/sign-in", icon: <User size={20} /> },
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 h-[60px] bg-background border-t border-border z-40 pb-safe">
            <div className="flex items-center justify-around h-full px-2">
                {tabs.map((tab, index) => {
                    const isActive = pathname === tab.route && !tab.isAction;

                    const content = (
                        <>
                            <div className="relative">
                                {tab.icon}
                                {tab.badge !== undefined && (
                                    <span className="absolute -top-1.5 -right-2 bg-primary text-white text-[9px] font-bold w-[14px] h-[14px] rounded-full flex items-center justify-center">
                                        {tab.badge}
                                    </span>
                                )}
                            </div>
                            <span className="text-[10px] font-medium mt-1">{tab.name}</span>
                        </>
                    );

                    if (tab.isAction && tab.name === "Cart" && onCartClick) {
                        return (
                            <button
                                key={index}
                                onClick={onCartClick}
                                className={`flex flex-col items-center justify-center w-full h-full relative transition-colors text-text-secondary hover:text-foreground`}
                            >
                                {content}
                            </button>
                        );
                    }

                    return (
                        <LocaleLink
                            key={index}
                            href={tab.route}
                            className={`flex flex-col items-center justify-center w-full h-full relative transition-colors ${isActive ? 'text-primary' : 'text-text-secondary hover:text-foreground'}`}
                        >
                            {content}
                        </LocaleLink>
                    );
                })}
            </div>
        </div>
    );
};

export default BottomNavBar;
