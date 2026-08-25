import { Heart } from 'lucide-react';
import ProductCard from '@/components/shared/ProductCard';
import { EmptyState } from '@/components/ui/CustomUi/EmptyState';
import { getDictionary } from '@/i18n/dictionaries';
import { getProducts } from '@/service/CatalogService/catalogApi';

export default async function WishlistPage() {
    const t = await getDictionary();

    // TODO: wire to `getWishlist()` once GET /wishlist exists; until then the
    // page borrows two catalog products so the grid has something to lay out.
    const products = (await getProducts()).slice(0, 2);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">{t.nav.wishlist}</h1>

            {products.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <EmptyState
                    icon={Heart}
                    title={t.product.wishlistEmpty}
                    description={t.product.wishlistEmptyHint}
                />
            )}
        </div>
    );
}
