const STATUS_STYLES: Record<string, string> = {
    Pending: "bg-gray-500/10 text-gray-600",
    Confirmed: "bg-blue-500/10 text-blue-600",
    Processing: "bg-amber-500/10 text-amber-600",
    Packed: "bg-blue-500/10 text-blue-600",
    Shipped: "bg-primary/10 text-primary",
    Delivered: "bg-emerald-500/10 text-emerald-600",
    Cancelled: "bg-destructive/10 text-destructive",
};

export default function OrderStatusBadge({ status }: { status: string }) {
    const style = STATUS_STYLES[status] ?? "bg-muted text-muted-foreground";
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style}`}>
            {status}
        </span>
    );
}
