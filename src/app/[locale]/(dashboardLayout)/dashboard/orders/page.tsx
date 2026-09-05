import LocaleLink from '@/components/i18n/LocaleLink';
import OrderStatusBadge from '@/components/dashboard/OrderStatusBadge';

// TODO: wire to GET /orders/mine once the endpoint exists.
const ORDERS = [1, 2, 3, 4, 5].map((item) => ({
    id: `AST-102${item}`,
    date: `Aug ${20 - item}, 2026`,
    items: item,
    total: `৳${1250 * item}`,
    status: item === 1 ? 'Processing' : 'Delivered',
}));

export default function OrdersPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-1">My Orders</h1>
            <p className="text-sm text-text-secondary mb-6">Track and review everything you&apos;ve ordered.</p>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-gray-50/50 text-text-secondary">
                            <tr>
                                <th className="p-4 font-medium">Order ID</th>
                                <th className="p-4 font-medium">Date</th>
                                <th className="p-4 font-medium">Items</th>
                                <th className="p-4 font-medium">Total</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {ORDERS.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 font-semibold text-foreground">#{order.id}</td>
                                    <td className="p-4 text-text-secondary">{order.date}</td>
                                    <td className="p-4 text-text-secondary">{order.items} Items</td>
                                    <td className="p-4 font-semibold text-foreground">{order.total}</td>
                                    <td className="p-4"><OrderStatusBadge status={order.status} /></td>
                                    <td className="p-4 text-right">
                                        <LocaleLink href={`/dashboard/orders/${order.id}`} className="text-primary hover:underline font-medium px-3 py-1.5 border border-primary/20 rounded-md hover:bg-primary/5 transition-colors">
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
