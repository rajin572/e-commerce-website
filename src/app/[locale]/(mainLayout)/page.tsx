import HeroBanner from '@/components/home/HeroBanner';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import ProductSection from '@/components/home/ProductSection';
import PromoBanner from '@/components/home/PromoBanner';
import Testimonials from '@/components/home/Testimonials';
import { getDictionary } from '@/i18n/dictionaries';
import {
    categoryHref,
    collectionHref,
} from '@/service/CatalogService/catalog.constants';
import { getCategories, getProducts } from '@/service/CatalogService/catalogApi';

/**
 * Every row reads the same collection the "View All" link opens, so the
 * homepage and `/collections/:slug` can never show different products.
 */
const HomePage = async () => {
    const [t, categories, bestSellers, newArrivals, combos, featured] = await Promise.all([
        getDictionary(),
        getCategories(),
        getProducts({ collection: 'best-sales' }),
        getProducts({ collection: 'new-arrivals' }),
        getProducts({ collection: 'combos' }),
        getProducts({ collection: 'featured-products' }),
    ]);

    return (
        <div className="flex flex-col gap-4 pb-10">
            <HeroBanner />
            <FeaturedCategories categories={categories} />

            <ProductSection
                title={t.home.bestSellingProducts}
                viewAllLink={collectionHref('best-sales')}
                viewAllText={t.common.viewAll}
                products={bestSellers}
                showBadge
            />

            <ProductSection
                title={t.home.newArrivals}
                viewAllLink={collectionHref('new-arrivals')}
                viewAllText={t.common.viewAll}
                products={newArrivals}
                showBadge
            />

            <PromoBanner
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ml-n2M2ENkGkCbZ9ietzOuIYgUTYByTB6y8UmfhGyysSRy5uOPIow-4I&s=10"
                link={categoryHref('oil')}
            />

            <ProductSection
                title={t.home.exclusiveComboDeals}
                viewAllLink={collectionHref('combos')}
                viewAllText={t.common.viewAll}
                products={combos}
                showBadge
            />

            <ProductSection
                title={t.home.featuredProducts}
                viewAllLink={collectionHref('featured-products')}
                viewAllText={t.common.viewAll}
                products={featured}
                showBadge
            />

            <Testimonials />
        </div>
    );
};

export default HomePage;
