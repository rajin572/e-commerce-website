"use client";

import React from 'react';
import Image from 'next/image';
import LocaleLink from '@/components/i18n/LocaleLink';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

const CartPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items */}
                <div className="lg:w-2/3">
                    <div className="bg-surface border border-border rounded-lg overflow-hidden">
                        <div className="hidden md:grid grid-cols-6 gap-4 p-4 border-b border-border bg-muted/30 text-sm font-semibold text-text-secondary">
                            <div className="col-span-3">Product</div>
                            <div className="col-span-1 text-center">Price</div>
                            <div className="col-span-1 text-center">Quantity</div>
                            <div className="col-span-1 text-right">Total</div>
                        </div>

                        {/* Item 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 border-b border-border items-center">
                            <div className="col-span-1 md:col-span-3 flex gap-4">
                                <div className="w-20 h-20 bg-muted rounded-md overflow-hidden relative shrink-0">
                                    <Image src="https://placehold.co/200x200/F9FAFB/F97316?text=Honey" alt="Product" fill className="object-cover" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <LocaleLink href="/product/sundarban-honey-premium" className="text-sm md:text-base font-semibold hover:text-primary transition-colors line-clamp-2 mb-1">
                                        প্রিমিয়াম কোয়ালিটি সুন্দরবনের খাঁটি মধু
                                    </LocaleLink>
                                    <span className="text-xs text-text-secondary">Weight: 1kg</span>
                                    <button className="text-destructive text-sm flex items-center gap-1 mt-2 w-max hover:underline md:hidden">
                                        <Trash2 size={14} /> Remove
                                    </button>
                                </div>
                            </div>
                            
                            <div className="hidden md:block col-span-1 text-center font-semibold text-text-secondary">
                                ৳850
                            </div>
                            
                            <div className="col-span-1 flex items-center justify-between md:justify-center">
                                <div className="flex items-center border border-border rounded-md bg-white">
                                    <button className="p-2 hover:bg-muted hover:text-primary transition-colors"><Minus size={14} /></button>
                                    <span className="w-10 text-center text-sm font-medium">1</span>
                                    <button className="p-2 hover:bg-muted hover:text-primary transition-colors"><Plus size={14} /></button>
                                </div>
                                <span className="md:hidden font-bold text-primary">৳850</span>
                            </div>
                            
                            <div className="hidden md:flex col-span-1 items-center justify-end gap-4">
                                <span className="font-bold text-primary text-lg">৳850</span>
                                <button className="text-text-muted hover:text-destructive transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 border-b border-border items-center">
                            <div className="col-span-1 md:col-span-3 flex gap-4">
                                <div className="w-20 h-20 bg-muted rounded-md overflow-hidden relative shrink-0">
                                    <Image src="https://placehold.co/200x200/F9FAFB/F97316?text=Ghee" alt="Product" fill className="object-cover" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <LocaleLink href="/product/pure-gawa-ghee" className="text-sm md:text-base font-semibold hover:text-primary transition-colors line-clamp-2 mb-1">
                                        গাওয়া ঘি (খাঁটি গাওয়া ঘি)
                                    </LocaleLink>
                                    <span className="text-xs text-text-secondary">Weight: 500g</span>
                                    <button className="text-destructive text-sm flex items-center gap-1 mt-2 w-max hover:underline md:hidden">
                                        <Trash2 size={14} /> Remove
                                    </button>
                                </div>
                            </div>
                            
                            <div className="hidden md:block col-span-1 text-center font-semibold text-text-secondary">
                                ৳600
                            </div>
                            
                            <div className="col-span-1 flex items-center justify-between md:justify-center">
                                <div className="flex items-center border border-border rounded-md bg-white">
                                    <button className="p-2 hover:bg-muted hover:text-primary transition-colors"><Minus size={14} /></button>
                                    <span className="w-10 text-center text-sm font-medium">1</span>
                                    <button className="p-2 hover:bg-muted hover:text-primary transition-colors"><Plus size={14} /></button>
                                </div>
                                <span className="md:hidden font-bold text-primary">৳600</span>
                            </div>
                            
                            <div className="hidden md:flex col-span-1 items-center justify-end gap-4">
                                <span className="font-bold text-primary text-lg">৳600</span>
                                <button className="text-text-muted hover:text-destructive transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="p-4 flex justify-between items-center bg-muted/10">
                            <LocaleLink href="/shop" className="text-primary font-semibold hover:underline text-sm">
                                Continue Shopping
                            </LocaleLink>
                            <button className="px-4 py-2 border border-border rounded-md text-sm font-medium hover:bg-muted transition-colors">
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-surface border border-border rounded-lg p-6 sticky top-[130px]">
                        <h3 className="text-lg font-bold text-foreground mb-4 pb-4 border-b border-border">Order Summary</h3>
                        
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-text-secondary">
                                <span>Subtotal (2 items)</span>
                                <span>৳1450</span>
                            </div>
                            <div className="flex justify-between text-text-secondary">
                                <span>Shipping</span>
                                <span>Calculated at checkout</span>
                            </div>
                            <div className="flex justify-between text-text-secondary">
                                <span>Discount</span>
                                <span>৳0</span>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center text-lg font-bold text-foreground pt-4 border-t border-border mb-6">
                            <span>Total</span>
                            <span className="text-primary text-2xl">৳1450</span>
                        </div>
                        
                        <LocaleLink 
                            href="/checkout"
                            className="w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-colors mb-4"
                        >
                            Proceed to Checkout <ArrowRight size={20} />
                        </LocaleLink>
                        
                        {/* Coupon Code */}
                        <div className="mt-6 pt-6 border-t border-border">
                            <p className="text-sm font-medium mb-2">Have a coupon code?</p>
                            <div className="flex gap-2">
                                <input 
                                    type="text" 
                                    placeholder="Enter code" 
                                    className="flex-grow h-10 px-3 border border-border rounded-md outline-none focus:border-primary text-sm"
                                />
                                <button className="px-4 h-10 bg-secondary hover:bg-[#2a3444] text-white rounded-md text-sm font-medium transition-colors">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
