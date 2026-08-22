"use client";

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const FloatingCart = ({ onClick }: { onClick: () => void }) => {
    return (
        <button 
            onClick={onClick}
            className="hidden md:flex fixed right-0 top-[40%] bg-primary text-primary-foreground shadow-lg rounded-l flex-col items-center justify-center p-2 z-40 hover:bg-primary-dark transition-colors border border-primary-dark border-r-0 cursor-pointer"
            style={{ width: '72px' }}
        >
            <ShoppingCart size={24} className="mb-1" />
            <span className="text-xs font-semibold">2 Items</span>
            <div className="bg-white/20 w-full h-[1px] my-1 rounded" />
            <span className="text-xs font-bold">৳1450</span>
        </button>
    );
};

export default FloatingCart;
