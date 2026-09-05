import React from 'react';
import Image from 'next/image';
import LocaleLink from '@/components/i18n/LocaleLink';
import { ArrowLeft, Package, Truck, CheckCircle2, MapPin, CreditCard } from 'lucide-react';

// TODO: wire to GET /orders/:id once the endpoint exists — this page currently
// renders the same illustrative order for any id, per CODING_RULES §1.2.
const ORDER = {
    date: 'Aug 18, 2026',
    status: 'shipped' as const,
    items: [
        { name: 'সুন্দরবনের প্রাকৃতিক চাকের মধু', variant: '1 kg', quantity: 1, price: 850, image: 'https://placehold.co/200x200/F9FAFB/F97316.png?text=Honey' },
        { name: 'গাওয়া ঘি (খাঁটি গাওয়া ঘি)', variant: '500g', quantity: 1, price: 600, image: 'https://placehold.co/200x200/F9FAFB/F97316.png?text=Ghee' },
    ],
    subtotal: 1450,
    discount: 0,
    deliveryFee: 60,
    address: 'House #12, Road #4, Sector 7, Uttara, Dhaka - 1230',
    recipient: 'Rahim Uddin, +880 1712345678',
    paymentMethod: 'Cash on Delivery (COD)',
};

const STEPS = [
    { key: 'confirmed', label: 'Confirmed', icon: Package },
    { key: 'processing', label: 'Processing', icon: Package },
    { key: 'packed', label: 'Packed', icon: Package },
    { key: 'shipped', label: 'Shipped', icon: Truck },
    { key: 'delivered', label: 'Delivered', icon: CheckCircle2 },
] as const;

const STEP_ORDER = STEPS.map((s) => s.key);

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const currentStepIndex = STEP_ORDER.indexOf(ORDER.status);
    const total = ORDER.subtotal - ORDER.discount + ORDER.deliveryFee;

    return (
        <div>
            <LocaleLink href="/dashboard/orders" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary mb-6 transition-colors">
                <ArrowLeft size={16} /> Back to Orders
            </LocaleLink>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                    <h1 className="text-2xl font-bold">Order #{id}</h1>
                    <p className="text-sm text-text-secondary mt-1">Placed on {ORDER.date}</p>
                </div>
                <span className="inline-flex items-center w-max px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-wide">
                    {ORDER.status}
                </span>
            </div>

            {/* Timeline */}
            <div className="bg-surface border border-border rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center">
                    {STEPS.map((step, index) => {
                        const Icon = step.icon;
                        const isDone = index <= currentStepIndex;
                        return (
                            <React.Fragment key={step.key}>
                                <div className="flex flex-col items-center gap-2 shrink-0">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDone ? 'bg-primary text-white' : 'bg-muted text-text-muted'}`}>
                                        <Icon size={18} />
                                    </div>
                                    <span className={`text-[11px] font-medium text-center ${isDone ? 'text-foreground' : 'text-text-muted'}`}>
                                        {step.label}
                                    </span>
                                </div>
                                {index < STEPS.length - 1 && (
                                    <div className={`flex-1 h-0.5 mb-5 ${index < currentStepIndex ? 'bg-primary' : 'bg-muted'}`} />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Items */}
                <div className="lg:col-span-2 bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-border font-bold">Items</div>
                    <div className="divide-y divide-border">
                        {ORDER.items.map((item) => (
                            <div key={item.name} className="p-4 flex gap-4 items-center">
                                <div className="w-16 h-16 bg-muted rounded-md overflow-hidden relative shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-sm line-clamp-2">{item.name}</p>
                                    <p className="text-xs text-text-secondary mt-1">{item.variant} × {item.quantity}</p>
                                </div>
                                <span className="font-bold text-primary shrink-0">৳{item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary + details */}
                <div className="flex flex-col gap-6">
                    <div className="bg-surface border border-border rounded-xl p-5 shadow-sm space-y-3 text-sm">
                        <div className="flex justify-between text-text-secondary">
                            <span>Subtotal</span>
                            <span className="text-foreground">৳{ORDER.subtotal}</span>
                        </div>
                        <div className="flex justify-between text-text-secondary">
                            <span>Discount</span>
                            <span className="text-foreground">৳{ORDER.discount}</span>
                        </div>
                        <div className="flex justify-between text-text-secondary">
                            <span>Delivery Fee</span>
                            <span className="text-foreground">৳{ORDER.deliveryFee}</span>
                        </div>
                        <div className="flex justify-between font-bold text-base pt-3 border-t border-border">
                            <span>Total Paid</span>
                            <span className="text-primary">৳{total}</span>
                        </div>
                    </div>

                    <div className="bg-surface border border-border rounded-xl p-5 shadow-sm space-y-4 text-sm">
                        <div className="flex gap-3">
                            <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                            <div>
                                <p className="font-semibold">{ORDER.recipient}</p>
                                <p className="text-text-secondary">{ORDER.address}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <CreditCard size={18} className="text-primary shrink-0 mt-0.5" />
                            <p className="font-semibold">{ORDER.paymentMethod}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
