import Image from 'next/image';
import { Star, MessageSquarePlus } from 'lucide-react';
import { ReviewModal } from '@/components/product/ReviewModal';

// TODO: wire to GET /reviews/pending and GET /reviews/mine once the endpoints exist.
const PENDING_REVIEWS = [
    { id: 'p1', name: 'সুন্দরবনের প্রাকৃতিক চাকের মধু (1kg)', deliveredOn: 'Aug 15, 2026', image: 'https://placehold.co/200x200/F9FAFB/F97316.png?text=Honey' },
    { id: 'p2', name: 'গাওয়া ঘি (500g)', deliveredOn: 'Aug 10, 2026', image: 'https://placehold.co/200x200/F9FAFB/F97316.png?text=Ghee' },
];

const PUBLISHED_REVIEWS = [
    { id: 'r1', name: 'কালোজিরা তেল (250ml)', rating: 5, text: 'অসাধারণ মানের পণ্য, একদম খাঁটি।', date: 'Jul 28, 2026' },
];

export default function ReviewsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold mb-1">My Reviews</h1>
                <p className="text-sm text-text-secondary">Share your experience with products you have received.</p>
            </div>

            <section>
                <h2 className="text-lg font-bold mb-4">Pending Reviews</h2>
                {PENDING_REVIEWS.length === 0 ? (
                    <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-8 text-center text-text-secondary">
                        No delivered items are waiting for a review right now.
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] divide-y divide-gray-100 overflow-hidden">
                        {PENDING_REVIEWS.map((item) => (
                            <div key={item.id} className="p-4 flex items-center gap-4">
                                <div className="w-16 h-16 bg-muted rounded-md overflow-hidden relative shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-sm line-clamp-2">{item.name}</p>
                                    <p className="text-xs text-text-secondary mt-1">Delivered on {item.deliveredOn}</p>
                                </div>
                                <ReviewModal>
                                    <button
                                        type="button"
                                        className="shrink-0 flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md font-semibold text-sm transition-colors"
                                    >
                                        <MessageSquarePlus size={16} /> Write Review
                                    </button>
                                </ReviewModal>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <section>
                <h2 className="text-lg font-bold mb-4">Published Reviews</h2>
                {PUBLISHED_REVIEWS.length === 0 ? (
                    <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-8 text-center text-text-secondary">
                        You haven&apos;t published any reviews yet.
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] divide-y divide-gray-100 overflow-hidden">
                        {PUBLISHED_REVIEWS.map((review) => (
                            <div key={review.id} className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="font-semibold text-sm">{review.name}</p>
                                    <span className="text-xs text-text-secondary">{review.date}</span>
                                </div>
                                <div className="flex text-warning mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                                    ))}
                                </div>
                                <p className="text-sm text-text-secondary">{review.text}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
