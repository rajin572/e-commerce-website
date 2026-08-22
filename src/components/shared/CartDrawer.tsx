"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
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
                className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-[70] transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-surface">
                    <div className="flex items-center gap-2">
                        <ShoppingCart size={20} className="text-primary" />
                        <h2 className="text-lg font-bold">Your Cart (2)</h2>
                    </div>
                    <button onClick={onClose} className="p-1 hover:text-primary transition-colors bg-muted rounded-full">
                        <X size={20} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-4">
                    {/* Item 1 */}
                    <div className="flex gap-4 border-b border-border pb-4">
                        <div className="w-20 h-20 bg-muted rounded-md overflow-hidden relative shrink-0">
                            <Image src="https://placehold.co/200x200/F9FAFB/F97316?text=Honey" alt="Product" fill className="object-cover" />
                        </div>
                        <div className="flex-grow flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-2">
                                <h3 className="text-sm font-semibold line-clamp-2">প্রিমিয়াম কোয়ালিটি সুন্দরবনের খাঁটি মধু (1kg)</h3>
                                <button className="text-text-muted hover:text-destructive transition-colors shrink-0">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center border border-border rounded-md bg-surface">
                                    <button className="p-1.5 hover:bg-muted hover:text-primary transition-colors"><Minus size={14} /></button>
                                    <span className="w-8 text-center text-sm font-medium">1</span>
                                    <button className="p-1.5 hover:bg-muted hover:text-primary transition-colors"><Plus size={14} /></button>
                                </div>
                                <span className="font-bold text-primary">৳850</span>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-4 border-b border-border pb-4">
                        <div className="w-20 h-20 bg-muted rounded-md overflow-hidden relative shrink-0">
                            <Image src="https://placehold.co/200x200/F9FAFB/F97316?text=Ghee" alt="Product" fill className="object-cover" />
                        </div>
                        <div className="flex-grow flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-2">
                                <h3 className="text-sm font-semibold line-clamp-2">গাওয়া ঘি (খাঁটি গাওয়া ঘি) (500g)</h3>
                                <button className="text-text-muted hover:text-destructive transition-colors shrink-0">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center border border-border rounded-md bg-surface">
                                    <button className="p-1.5 hover:bg-muted hover:text-primary transition-colors"><Minus size={14} /></button>
                                    <span className="w-8 text-center text-sm font-medium">1</span>
                                    <button className="p-1.5 hover:bg-muted hover:text-primary transition-colors"><Plus size={14} /></button>
                                </div>
                                <span className="font-bold text-primary">৳600</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer / Summary */}
                <div className="p-4 border-t border-border bg-surface">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-foreground font-medium">Subtotal:</span>
                        <span className="text-xl font-bold text-primary">৳1450</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link 
                            href="/cart" 
                            onClick={onClose}
                            className="w-full py-2.5 rounded-md border-2 border-primary text-primary font-semibold text-center hover:bg-primary/5 transition-colors"
                        >
                            View Cart
                        </Link>
                        <Link 
                            href="/checkout" 
                            onClick={onClose}
                            className="w-full py-2.5 rounded-md bg-primary text-white font-semibold text-center hover:bg-primary-dark transition-colors"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
