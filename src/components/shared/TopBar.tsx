"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, User, Heart, ShoppingCart, Menu, Contact, FileQuestion, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { AllImages } from '../../../public/images/AllImages';
import Cookies from 'js-cookie';
import Container from '../ui/CustomUi/Container';
import { NavDropdown, DropdownItem } from './NavDropdown';

const TopBar = ({ onCartClick }: { onCartClick?: () => void }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    React.useEffect(() => {
        const token = Cookies.get('eCommerce_access_token');
        // eslint-disable-next-line
        if (token) setIsLoggedIn(true);
    }, []);

    const handleLogout = () => {
        Cookies.remove('eCommerce_access_token');
        setIsLoggedIn(false);
        window.location.reload();
    };

    const moreDropdownItems: DropdownItem[] = [
        { label: 'About Us', href: '/about', icon: <Contact size={18} className="text-[#102a3a]" /> },
        { label: 'Wishlists', href: '/wishlist', icon: <Heart size={18} className="text-[#102a3a]" /> },
        { label: 'Faqs', href: '/faqs', icon: <FileQuestion size={18} className="text-[#102a3a]" /> },
        { label: 'Call Us', href: 'tel:+8801700000000', icon: <PhoneCall size={18} className="text-[#102a3a]" /> },
        { label: 'WhatsApp', href: 'https://wa.me/8801700000000', icon: <FaWhatsapp size={18} className="text-[#4FCE5D]" />, labelClassName: 'text-[#ea7f12]' },
    ];

    return (
        <div className="bg-background text-foreground">
            <Container>
                <div className=" h-16 flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src={AllImages.logo}
                            alt="ECommerce"
                            width={120}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {/* Search Bar */}
                    <div className="flex-grow max-w-2xl relative hidden lg:block">
                        <input
                            type="text"
                            placeholder="Search for products (e.g. holud, yellow mustard)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-10 pl-4 pr-10 rounded text-foreground bg-[#F5F5F5] outline-none border focus:border-primary"
                        />
                        <button className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center bg-primary text-primary-foreground rounded-r">
                            <Search size={18} />
                        </button>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6 flex-shrink-0 text-sm font-medium">
                        <Link href="/track-order" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                            <MapPin size={18} />
                            <span>Track Order</span>
                        </Link>

                        {isLoggedIn ? (
                            <button onClick={handleLogout} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                <User size={18} />
                                <span>Logout</span>
                            </button>
                        ) : (
                            <Link href="/sign-in" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                <User size={18} />
                                <span>Sign In</span>
                            </Link>
                        )}

                        <Link href="/wishlist" className="flex items-center gap-1.5 hover:text-primary transition-colors relative">
                            <Heart size={18} />
                            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                        </Link>

                        <button onClick={onCartClick} className="flex items-center gap-1.5 hover:text-primary transition-colors relative">
                            <ShoppingCart size={18} />
                            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                        </button>

                        <div className="hidden lg:block">
                            <NavDropdown
                                trigger={
                                    <button className="flex items-center gap-1.5 hover:text-primary transition-colors outline-none">
                                        <Menu size={18} />
                                        <span>More</span>
                                    </button>
                                }
                                items={moreDropdownItems}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopBar;
