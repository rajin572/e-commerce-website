import { getProducts } from '@/service/CatalogService/catalogApi';
import WishlistClient from '@/components/dashboard/WishlistClient';

export default async function WishlistPage() {
    // TODO: wire to `getWishlist()` once GET /wishlist exists; until then the
    // page borrows catalog products so the list has something to lay out.
    const products = (await getProducts()).slice(0, 3);

    return (
        <div className="container mx-auto px-4 py-8">
            <WishlistClient initialProducts={products} />
        </div>
    );
}
