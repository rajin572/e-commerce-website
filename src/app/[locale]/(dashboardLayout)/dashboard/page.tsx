import LocaleLink from '@/components/i18n/LocaleLink';
import { Package, Heart, MapPin, User, LogOut } from 'lucide-react';

export default function DashboardOverviewPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">My Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                        <Package size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">12</h3>
                    <p className="text-sm text-text-secondary">Total Orders</p>
                </div>
                <div className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                        <Heart size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">5</h3>
                    <p className="text-sm text-text-secondary">Wishlist Items</p>
                </div>
                <div className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                        <MapPin size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">2</h3>
                    <p className="text-sm text-text-secondary">Saved Addresses</p>
                </div>
                <div className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                        <User size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Active</h3>
                    <p className="text-sm text-text-secondary">Account Status</p>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
            <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-muted text-text-secondary">
                            <tr>
                                <th className="p-4 font-medium">Order ID</th>
                                <th className="p-4 font-medium">Date</th>
                                <th className="p-4 font-medium">Total</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr>
                                <td className="p-4 font-semibold">#AST-1024</td>
                                <td className="p-4 text-text-secondary">Aug 18, 2026</td>
                                <td className="p-4 font-semibold">৳1,250</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F59F0A]/10 text-[#F59F0A]">
                                        Processing
                                    </span>
                                </td>
                                <td className="p-4">
                                    <LocaleLink href="/track-order" className="text-primary hover:underline font-medium">Track</LocaleLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4 font-semibold">#AST-0998</td>
                                <td className="p-4 text-text-secondary">Aug 10, 2026</td>
                                <td className="p-4 font-semibold">৳3,400</td>
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#10B981]/10 text-[#10B981]">
                                        Delivered
                                    </span>
                                </td>
                                <td className="p-4">
                                    <LocaleLink href="/dashboard/orders" className="text-primary hover:underline font-medium">View</LocaleLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}