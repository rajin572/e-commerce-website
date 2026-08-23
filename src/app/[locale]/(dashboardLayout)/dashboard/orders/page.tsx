"use client";

import React from 'react';
import LocaleLink from '@/components/i18n/LocaleLink';

export default function OrdersPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">My Orders</h1>
            
            <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-muted text-text-secondary">
                            <tr>
                                <th className="p-4 font-medium">Order ID</th>
                                <th className="p-4 font-medium">Date</th>
                                <th className="p-4 font-medium">Items</th>
                                <th className="p-4 font-medium">Total</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <tr key={item} className="hover:bg-muted/50 transition-colors">
                                    <td className="p-4 font-semibold text-foreground">#AST-102{item}</td>
                                    <td className="p-4 text-text-secondary">Aug {20 - item}, 2026</td>
                                    <td className="p-4 text-text-secondary">{item} Items</td>
                                    <td className="p-4 font-semibold text-foreground">৳{1250 * item}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item === 1 ? 'bg-[#F59F0A]/10 text-[#F59F0A]' : 'bg-[#10B981]/10 text-[#10B981]'}`}>
                                            {item === 1 ? 'Processing' : 'Delivered'}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <LocaleLink href="/track-order" className="text-primary hover:underline font-medium px-3 py-1.5 border border-primary/20 rounded-md hover:bg-primary/5 transition-colors">
                                            View Details
                                        </LocaleLink>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
