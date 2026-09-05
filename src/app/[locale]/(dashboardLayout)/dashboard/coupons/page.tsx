import React from 'react';
import { Ticket } from 'lucide-react';
import CopyCodeButton from '@/components/dashboard/CopyCodeButton';

// TODO: wire to GET /coupons/mine once the endpoint exists.
const AVAILABLE_COUPONS = [
    { code: 'WELCOME100', discount: '৳100 off', minOrder: 'Minimum order ৳1,000', validTill: 'Valid till Sep 30, 2026' },
    { code: 'FREESHIP', discount: 'Free delivery', minOrder: 'Minimum order ৳500', validTill: 'Valid till Sep 15, 2026' },
];

const EXPIRED_COUPONS = [
    { code: 'EID2026', discount: '৳150 off', minOrder: 'Minimum order ৳1,500', validTill: 'Expired Aug 20, 2026' },
];

export default function CouponsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold mb-1">My Coupons</h1>
                <p className="text-sm text-text-secondary">Apply these codes at checkout to save on your order.</p>
            </div>

            <section>
                <h2 className="text-lg font-bold mb-4">Available Coupons</h2>
                {AVAILABLE_COUPONS.length === 0 ? (
                    <div className="bg-surface border border-dashed border-border rounded-xl p-8 text-center text-text-secondary">
                        No active coupons right now.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {AVAILABLE_COUPONS.map((coupon) => (
                            <div key={coupon.code} className="bg-surface border-2 border-dashed border-primary/30 rounded-xl p-5 shadow-sm relative overflow-hidden">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <Ticket size={18} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">{coupon.discount}</p>
                                        <p className="text-xs text-text-secondary">{coupon.minOrder}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-text-secondary mb-4">{coupon.validTill}</p>
                                <div className="flex items-center justify-between border border-border rounded-md px-3 py-2 bg-muted/30">
                                    <span className="font-mono font-bold tracking-wider text-sm">{coupon.code}</span>
                                    <CopyCodeButton code={coupon.code} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <section>
                <h2 className="text-lg font-bold mb-4">Used / Expired</h2>
                {EXPIRED_COUPONS.length === 0 ? (
                    <div className="bg-surface border border-dashed border-border rounded-xl p-8 text-center text-text-secondary">
                        Nothing here yet.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {EXPIRED_COUPONS.map((coupon) => (
                            <div key={coupon.code} className="bg-muted/30 border border-border rounded-xl p-5 opacity-60">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-muted text-text-muted flex items-center justify-center shrink-0">
                                        <Ticket size={18} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">{coupon.discount}</p>
                                        <p className="text-xs text-text-secondary">{coupon.minOrder}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-text-secondary mb-4">{coupon.validTill}</p>
                                <div className="border border-border rounded-md px-3 py-2 bg-muted/40">
                                    <span className="font-mono font-bold tracking-wider text-sm line-through">{coupon.code}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
