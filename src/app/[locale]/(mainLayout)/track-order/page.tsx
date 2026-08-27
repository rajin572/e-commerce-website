"use client";

import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle2 } from 'lucide-react';
import { useT } from '@/components/i18n/DictionaryProvider';

const TrackOrderPage = () => {
    const t = useT();
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
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.trackOrder.title}</h1>
                    <p className="text-text-secondary">
                        {t.trackOrder.description}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 mb-16">
                    <input 
                        type="text" 
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        placeholder={t.trackOrder.placeholder} 
                        className="flex-grow h-14 px-6 border border-border rounded-lg outline-none focus:border-primary text-lg uppercase"
                        required
                    />
                    <button type="submit" className="h-14 px-8 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-colors">
                        <Search size={20} /> {t.trackOrder.button}
                    </button>
                </form>

                {/* Tracking Result (Dummy) */}
                {isTracking && (
                    <div className="bg-surface border border-border rounded-xl p-6 md:p-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-8 border-b border-border">
                            <div>
                                <p className="text-sm text-text-secondary mb-1">{t.trackOrder.orderId} <span className="font-semibold text-foreground uppercase">{orderId}</span></p>
                                <p className="text-sm text-text-secondary">{t.trackOrder.expectedDelivery} <span className="font-semibold text-foreground">{t.trackOrder.dateDummy3}</span></p>
                            </div>
                            <div className="mt-4 sm:mt-0 text-right">
                                <p className="text-sm text-text-secondary mb-1">{t.trackOrder.status}</p>
                                <p className="text-lg font-bold text-[#F59F0A]">{t.trackOrder.onTheWay}</p>
                            </div>
                        </div>

                        {/* Progress Timeline */}
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute top-5 left-8 bottom-5 w-0.5 bg-muted"></div>
                            <div className="absolute top-5 left-8 h-3/5 w-0.5 bg-primary"></div>
                            
                            <div className="space-y-8">
                                {/* Step 1: Pending -> Confirmed -> Processing -> Packed -> Shipped -> Delivered */}
                                {/* Wait, the design plan says: Pending -> Confirmed -> Processing -> Packed -> Shipped -> Delivered */}
                                {/* Let's implement those exactly. */}

                                <div className="flex gap-6 items-start relative">
                                    <div className="w-16 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center z-10 shrink-0 border-4 border-surface">
                                        <Package size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{t.trackOrder.statusPending}</h4>
                                        <p className="text-sm text-text-secondary">{t.trackOrder.dateDummy1}</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-6 items-start relative">
                                    <div className="w-16 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center z-10 shrink-0 border-4 border-surface">
                                        <Package size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{t.trackOrder.statusConfirmed}</h4>
                                        <p className="text-sm text-text-secondary">{t.trackOrder.dateDummy2}</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start relative">
                                    <div className="w-16 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center z-10 shrink-0 border-4 border-surface">
                                        <Package size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{t.trackOrder.statusProcessing}</h4>
                                        <p className="text-sm text-text-secondary">{t.trackOrder.dateDummy2}</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start relative">
                                    <div className="w-16 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center z-10 shrink-0 border-4 border-surface">
                                        <Package size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{t.trackOrder.statusPacked}</h4>
                                        <p className="text-sm text-text-secondary">{t.trackOrder.dateDummy2}</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-6 items-start relative">
                                    <div className="w-16 h-10 bg-primary text-white rounded-full flex items-center justify-center z-10 shrink-0 border-4 border-surface shadow-md shadow-primary/30">
                                        <Truck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-primary">{t.trackOrder.statusShipped}</h4>
                                        <p className="text-sm text-text-secondary">{t.trackOrder.dateDummy3}</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-6 items-start relative">
                                    <div className="w-16 h-10 bg-muted rounded-full flex items-center justify-center text-text-muted z-10 shrink-0 border-4 border-surface">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-muted">{t.trackOrder.statusDelivered}</h4>
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
