"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import ReusableSheet from '@/components/ui/CustomUi/ReuseableSheet';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
    return (
        <ReusableSheet
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) {
                    onClose();
                }
            }}
            side="right"
            width="w-[85vw] sm:max-w-md"
            title={
                <div className="flex items-center gap-2 text-foreground">
                    <ShoppingCart size={20} className="text-primary" />
                    <span className="text-lg font-bold">Your Cart (2)</span>
                </div>
            }
            footer={
                <div className="w-full flex flex-col pt-2">
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
            }
        >
            <div className="flex flex-col gap-4">
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
        </ReusableSheet>
    );
};

export default CartDrawer;
