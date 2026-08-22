"use client";

import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle2 } from 'lucide-react';

const TrackOrderPage = () => {
    const [orderId, setOrderId] = useState('');
    const [isTracking, setIsTracking] = useState(false);

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        setIsTracking(true);
    };

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Track Your Order</h1>
                    <p className="text-text-secondary">
                        Enter your Order ID below to check the current status of your delivery.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 mb-16">
                    <input 
                        type="text" 
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        placeholder="e.g. ASTHA-12345" 
                        className="flex-grow h-14 px-6 border border-border rounded-lg outline-none focus:border-primary text-lg"
                        required
                    />
                    <button type="submit" className="h-14 px-8 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-colors">
                        <Search size={20} /> Track
                    </button>
                </form>

                {/* Tracking Result (Dummy) */}
                {isTracking && (
                    <div className="bg-surface border border-border rounded-xl p-6 md:p-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-8 border-b border-border">
                            <div>
                                <p className="text-sm text-text-secondary mb-1">Order ID: <span className="font-semibold text-foreground">{orderId}</span></p>
                                <p className="text-sm text-text-secondary">Expected Delivery: <span className="font-semibold text-foreground">Tomorrow, 2:00 PM</span></p>
                            </div>
                            <div className="mt-4 sm:mt-0 text-right">
                                <p className="text-sm text-text-secondary mb-1">Status</p>
                                <p className="text-lg font-bold text-[#F59F0A]">On The Way</p>
                            </div>
                        </div>

                        {/* Progress Timeline */}
                        <div className="relative">
                            <div className="absolute top-5 left-8 bottom-5 w-0.5 bg-muted"></div>
                            <div className="absolute top-5 left-8 h-1/2 w-0.5 bg-primary"></div>
                            
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start relative">
                                    <div className="w-16 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary z-10 shrink-0 border-4 border-surface">
                                        <Package size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Order Placed</h4>
                                        <p className="text-sm text-text-secondary">August 18, 2026 - 10:30 AM</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-6 items-start relative">
                                    <div className="w-16 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary z-10 shrink-0 border-4 border-surface">
                                        <Package size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Order Processed</h4>
                                        <p className="text-sm text-text-secondary">August 18, 2026 - 02:15 PM</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-6 items-start relative">
                                    <div className="w-16 h-10 bg-primary text-white rounded-full flex items-center justify-center z-10 shrink-0 border-4 border-surface shadow-md shadow-primary/30">
                                        <Truck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-primary">Out for Delivery</h4>
                                        <p className="text-sm text-text-secondary">August 19, 2026 - 09:00 AM</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-6 items-start relative">
                                    <div className="w-16 h-10 bg-muted rounded-full flex items-center justify-center text-text-muted z-10 shrink-0 border-4 border-surface">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-muted">Delivered</h4>
                                        <p className="text-sm text-text-muted">Pending</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackOrderPage;
