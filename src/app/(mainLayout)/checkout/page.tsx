"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const CheckoutPage = () => {
    const [deliveryMethod, setDeliveryMethod] = useState('inside_dhaka');
    const [paymentMethod, setPaymentMethod] = useState('cod');

    const subtotal = 1450;
    const shipping = deliveryMethod === 'inside_dhaka' ? 60 : 120;
    const total = subtotal + shipping;

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary mb-6 transition-colors">
                <ArrowLeft size={16} /> Back to Cart
            </Link>
            
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Checkout</h1>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Column: Form */}
                <div className="lg:w-3/5 space-y-8">
                    
                    {/* Customer Info */}
                    <div className="bg-surface border border-border rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold text-foreground">Customer Information</h2>
                            <Link href="/sign-in" className="text-sm text-primary hover:underline font-medium">Already have an account? Login</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-text-secondary mb-1">Full Name *</label>
                                <input type="text" className="w-full h-11 px-3 border border-border rounded-md outline-none focus:border-primary transition-colors" placeholder="e.g. Rahim Uddin" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-1">Phone Number *</label>
                                <input type="tel" className="w-full h-11 px-3 border border-border rounded-md outline-none focus:border-primary transition-colors" placeholder="01XXXXXXXXX" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-1">Email Address (Optional)</label>
                                <input type="email" className="w-full h-11 px-3 border border-border rounded-md outline-none focus:border-primary transition-colors" placeholder="example@email.com" />
                            </div>
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="bg-surface border border-border rounded-lg p-6">
                        <h2 className="text-lg font-bold text-foreground mb-4">Delivery Address</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-1">Full Address *</label>
                                <textarea rows={3} className="w-full p-3 border border-border rounded-md outline-none focus:border-primary transition-colors resize-none" placeholder="House/Flat No, Road No, Area..."></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">City/District *</label>
                                    <select className="w-full h-11 px-3 border border-border rounded-md outline-none focus:border-primary transition-colors bg-white">
                                        <option value="">Select District</option>
                                        <option value="dhaka">Dhaka</option>
                                        <option value="chattogram">Chattogram</option>
                                        <option value="sylhet">Sylhet</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-1">Zone/Area *</label>
                                    <select className="w-full h-11 px-3 border border-border rounded-md outline-none focus:border-primary transition-colors bg-white">
                                        <option value="">Select Area</option>
                                        <option value="mirpur">Mirpur</option>
                                        <option value="gulshan">Gulshan</option>
                                        <option value="dhanmondi">Dhanmondi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Method */}
                    <div className="bg-surface border border-border rounded-lg p-6">
                        <h2 className="text-lg font-bold text-foreground mb-4">Delivery Method</h2>
                        <div className="space-y-3">
                            <label className={`flex items-center justify-between p-4 border rounded-md cursor-pointer transition-colors ${deliveryMethod === 'inside_dhaka' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${deliveryMethod === 'inside_dhaka' ? 'border-primary' : 'border-gray-300'}`}>
                                        {deliveryMethod === 'inside_dhaka' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">Inside Dhaka</p>
                                        <p className="text-xs text-text-secondary">Delivery within 24-48 hours</p>
                                    </div>
                                </div>
                                <span className="font-bold">৳60</span>
                                <input type="radio" name="delivery" value="inside_dhaka" className="hidden" checked={deliveryMethod === 'inside_dhaka'} onChange={() => setDeliveryMethod('inside_dhaka')} />
                            </label>
                            
                            <label className={`flex items-center justify-between p-4 border rounded-md cursor-pointer transition-colors ${deliveryMethod === 'outside_dhaka' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${deliveryMethod === 'outside_dhaka' ? 'border-primary' : 'border-gray-300'}`}>
                                        {deliveryMethod === 'outside_dhaka' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">Outside Dhaka</p>
                                        <p className="text-xs text-text-secondary">Delivery within 3-5 days via Courier</p>
                                    </div>
                                </div>
                                <span className="font-bold">৳120</span>
                                <input type="radio" name="delivery" value="outside_dhaka" className="hidden" checked={deliveryMethod === 'outside_dhaka'} onChange={() => setDeliveryMethod('outside_dhaka')} />
                            </label>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-surface border border-border rounded-lg p-6">
                        <h2 className="text-lg font-bold text-foreground mb-4">Payment Method</h2>
                        <div className="space-y-3">
                            <label className={`flex items-center p-4 border rounded-md cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                                <div className="flex items-center gap-3 w-full">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${paymentMethod === 'cod' ? 'border-primary' : 'border-gray-300'}`}>
                                        {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="font-semibold text-foreground text-sm">Cash on Delivery (COD)</p>
                                        <Image src="https://placehold.co/40x25/F9FAFB/1F2937?text=COD" alt="COD" width={40} height={25} className="rounded" />
                                    </div>
                                </div>
                                <input type="radio" name="payment" value="cod" className="hidden" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                            </label>
                            
                            <label className={`flex items-center p-4 border rounded-md cursor-pointer transition-colors ${paymentMethod === 'bkash' ? 'border-primary bg-[#E2136E]/5' : 'border-border hover:border-primary/50'}`}>
                                <div className="flex items-center gap-3 w-full">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${paymentMethod === 'bkash' ? 'border-[#E2136E]' : 'border-gray-300'}`}>
                                        {paymentMethod === 'bkash' && <div className="w-2.5 h-2.5 bg-[#E2136E] rounded-full" />}
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="font-semibold text-foreground text-sm">bKash Payment</p>
                                        <Image src="https://placehold.co/50x25/E2136E/FFFFFF?text=bKash" alt="bKash" width={50} height={25} className="rounded" />
                                    </div>
                                </div>
                                <input type="radio" name="payment" value="bkash" className="hidden" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} />
                            </label>

                            {paymentMethod === 'bkash' && (
                                <div className="p-4 bg-muted/50 rounded-md border border-border text-sm text-text-secondary">
                                    <p className="mb-2">Please send <strong>৳{total}</strong> to our bKash merchant number: <strong>01XXXXXXXXX</strong>.</p>
                                    <div className="grid grid-cols-2 gap-4 mt-3">
                                        <div>
                                            <label className="block text-xs mb-1">bKash Number</label>
                                            <input type="text" className="w-full h-9 px-2 border border-border rounded outline-none" placeholder="01XXXXXXXXX" />
                                        </div>
                                        <div>
                                            <label className="block text-xs mb-1">Transaction ID</label>
                                            <input type="text" className="w-full h-9 px-2 border border-border rounded outline-none" placeholder="TRX..." />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <label className={`flex items-center p-4 border rounded-md cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                                <div className="flex items-center gap-3 w-full">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${paymentMethod === 'card' ? 'border-primary' : 'border-gray-300'}`}>
                                        {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="font-semibold text-foreground text-sm">Credit / Debit Card</p>
                                        <div className="flex gap-1">
                                            <Image src="https://placehold.co/30x20/F9FAFB/1F2937?text=Visa" alt="Visa" width={30} height={20} className="rounded" />
                                            <Image src="https://placehold.co/30x20/F9FAFB/1F2937?text=MC" alt="MC" width={30} height={20} className="rounded" />
                                        </div>
                                    </div>
                                </div>
                                <input type="radio" name="payment" value="card" className="hidden" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:w-2/5">
                    <div className="bg-surface border border-border rounded-lg p-6 sticky top-[130px]">
                        <h2 className="text-lg font-bold text-foreground mb-4 pb-4 border-b border-border">Order Review</h2>
                        
                        {/* Items */}
                        <div className="space-y-4 mb-6 border-b border-border pb-6 max-h-[300px] overflow-y-auto scrollbar-none">
                            <div className="flex gap-3">
                                <div className="w-16 h-16 bg-muted rounded border border-border relative shrink-0">
                                    <Image src="https://placehold.co/100x100/F9FAFB/F97316?text=Honey" alt="Product" fill className="object-cover" />
                                    <span className="absolute -top-2 -right-2 bg-text-secondary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">1</span>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-sm font-semibold line-clamp-2 leading-tight">প্রিমিয়াম কোয়ালিটি সুন্দরবনের খাঁটি মধু (1kg)</h4>
                                    <span className="text-primary font-bold text-sm">৳850</span>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <div className="w-16 h-16 bg-muted rounded border border-border relative shrink-0">
                                    <Image src="https://placehold.co/100x100/F9FAFB/F97316?text=Ghee" alt="Product" fill className="object-cover" />
                                    <span className="absolute -top-2 -right-2 bg-text-secondary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">1</span>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-sm font-semibold line-clamp-2 leading-tight">গাওয়া ঘি (খাঁটি গাওয়া ঘি) (500g)</h4>
                                    <span className="text-primary font-bold text-sm">৳600</span>
                                </div>
                            </div>
                        </div>

                        {/* Calculation */}
                        <div className="space-y-3 mb-6 text-sm">
                            <div className="flex justify-between text-text-secondary">
                                <span>Subtotal</span>
                                <span>৳{subtotal}</span>
                            </div>
                            <div className="flex justify-between text-text-secondary">
                                <span>Shipping</span>
                                <span>৳{shipping}</span>
                            </div>
                            <div className="flex justify-between text-text-secondary">
                                <span>Discount</span>
                                <span className="text-[#10B981]">- ৳0</span>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center text-lg font-bold text-foreground pt-4 border-t border-border mb-6">
                            <span>Total</span>
                            <span className="text-primary text-2xl">৳{total}</span>
                        </div>

                        <label className="flex items-start gap-2 mb-6 cursor-pointer">
                            <input type="checkbox" className="mt-1 accent-primary" required />
                            <span className="text-xs text-text-secondary leading-snug">
                                I agree to the <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                            </span>
                        </label>
                        
                        <button className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20">
                            <CheckCircle2 size={20} />
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
