/**
 * Catalog contracts — products, categories and collections.
 *
 * These mirror what `/api/v1/products` and `/api/v1/categories` will return.
 * Prices are plain taka here because the whole storefront still renders taka
 * (`ProductCard`, cart, checkout). When the product API lands they become
 * integer poisha per CODING_RULES §1.4 and every render site switches to
 * `formatMoney`; `formatPrice` is the single place that has to change.
 */

/** The badge ribbon drawn on a product card. */
export type TProductBadge = "new" | "sale" | "bestsell" | "combo" | "outOfStock";

/** The fixed, admin-curated product sets. Each one is a `/collections/:slug` page. */
export type TCollectionSlug =
  | "combos"
  | "best-sales"
  | "new-arrivals"
  | "featured-products"
  | "offers";

/** Dictionary key under `catalog.collections` — camelCase, unlike the URL slug. */
export type TCollectionKey =
  | "combos"
  | "bestSales"
  | "newArrivals"
  | "featuredProducts"
  | "offers";

export interface ISubCategory {
  _id: string;
  slug: string;
  name: string;
  description: string;
}

export interface ICategory {
  _id: string;
  /** URL segment — ASCII, lowercase, hyphenated. Catalog names stay Bengali. */
  slug: string;
  name: string;
  description: string;
  image: string;
  /** False means the navbar links straight to `/category/:slug` with no dropdown. */
  hasSub: boolean;
  subCategories: ISubCategory[];
}

export interface IProduct {
  _id: string;
  name: string;
  /** Kept for SEO copy and the JSON-LD payload; the route key is `_id`. */
  slug: string;
  sku: string;
  description: string;
  /** Full gallery for the detail page. */
  images: string[];
  /** Card image, and the image swapped in on hover. */
  image: string;
  secondaryImage?: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  badge?: TProductBadge;
  categorySlug: string;
  subCategorySlug?: string;
  collections: TCollectionSlug[];
  /** Weight/size options shown on the detail page. */
  variants: string[];
  /** ISO 8601 — drives the "latest" sort. */
  createdAt: string;
  /** Drives the "popularity" sort. */
  soldCount: number;
  /** Rich structured data for the product details tab */
  productDetails?: {
    title?: string;
    description?: string;
    keyFeatures?: string[];
    healthBenefits?: string[];
    usageStorage?: string[];
  };
}

export interface IProductReview {
  _id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  /** ISO 8601. */
  createdAt: string;
  /** Only orders marked delivered can leave one — shown as a badge. */
  isVerifiedPurchase: boolean;
}

/** A `/collections/:slug` page's own identity: copy key plus banner. */
export interface ICollection {
  slug: TCollectionSlug;
  titleKey: TCollectionKey;
  image: string;
}

export type TCatalogSort =
  | "default"
  | "popularity"
  | "latest"
  | "priceAsc"
  | "priceDesc";

export type TAvailabilityFilter = "all" | "inStock" | "outOfStock";
