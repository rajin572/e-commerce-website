/**
 * Catalog reads for Server Components and `generateMetadata`.
 *
 * SERVER ONLY — it reaches `serverFetch`, which imports `next/headers`.
 * Client components receive catalog data as props from their server parent
 * (see `(mainLayout)/layout.tsx` handing the category tree to `Header`).
 *
 * Every accessor below is written against the real endpoint and commented out
 * exactly as CODING_RULES §1.2 requires: the product and category modules on
 * the backend are still generator stubs, so the fallback is the dummy catalog.
 * When the endpoints land, uncomment the call, add the two imports named in the
 * comment, and delete `catalog.dummy.ts`.
 */

import { DUMMY_CATEGORIES, DUMMY_PRODUCTS, DUMMY_REVIEWS } from "./catalog.dummy";
import type { ICategory, IProduct, IProductReview, TCollectionSlug } from "@/types";

export interface ProductFilter {
  collection?: TCollectionSlug;
  categorySlug?: string;
  subCategorySlug?: string;
}

export async function getCategories(): Promise<ICategory[]> {
  // TODO: wire to `apiGet` once GET /categories exists.
  // import { apiGet } from "@/lib/serverFetch"; import TagTypes from "@/helpers/TagTypes";
  // const res = await apiGet<ICategory[]>("/categories", {
  //   query: { limit: 100 },
  //   tags: [TagTypes.categories],
  //   revalidate: 600,
  // });
  // return res.data ?? [];
  return DUMMY_CATEGORIES;
}

export async function getCategoryBySlug(
  slug: string
): Promise<ICategory | undefined> {
  // TODO: wire to `apiGet` once GET /categories/:slug exists.
  // const res = await apiGet<ICategory>(`/categories/${slug}`, {
  //   tags: [TagTypes.categories],
  //   revalidate: 600,
  // });
  // return res.data ?? undefined;
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug);
}

export async function getProducts(
  filter: ProductFilter = {}
): Promise<IProduct[]> {
  // TODO: wire to `apiGet` once GET /products exists.
  // const res = await apiGet<IProduct[]>("/products", {
  //   query: {
  //     collection: filter.collection,
  //     category: filter.categorySlug,
  //     subCategory: filter.subCategorySlug,
  //     limit: 100,
  //   },
  //   tags: [TagTypes.products],
  //   revalidate: 300,
  // });
  // return res.data ?? [];
  return DUMMY_PRODUCTS.filter((product) => {
    if (filter.collection && !product.collections.includes(filter.collection)) {
      return false;
    }
    if (filter.categorySlug && product.categorySlug !== filter.categorySlug) {
      return false;
    }
    if (
      filter.subCategorySlug &&
      product.subCategorySlug !== filter.subCategorySlug
    ) {
      return false;
    }
    return true;
  });
}

export async function getProductById(
  productId: string
): Promise<IProduct | undefined> {
  // TODO: wire to `apiGet` once GET /products/:id exists.
  // const res = await apiGet<IProduct>(`/products/${productId}`, {
  //   tags: [TagTypes.products],
  //   revalidate: 300,
  // });
  // return res.data ?? undefined;
  return DUMMY_PRODUCTS.find((product) => product._id === productId);
}

export async function getProductReviews(
  productId: string
): Promise<IProductReview[]> {
  // TODO: wire to `apiGet` once GET /reviews exists.
  // const res = await apiGet<IProductReview[]>("/reviews", {
  //   query: { productId, status: "approved", limit: 20 },
  //   tags: [TagTypes.products],
  //   revalidate: 300,
  // });
  // return res.data ?? [];
  return DUMMY_REVIEWS.filter((review) => review.productId === productId);
}

/** Same category, current product excluded — the detail page's cross-sell row. */
export async function getRelatedProducts(
  product: IProduct,
  limit = 5
): Promise<IProduct[]> {
  // TODO: wire to `apiGet` once GET /products/:id/related exists.
  // const res = await apiGet<IProduct[]>(`/products/${product._id}/related`, {
  //   query: { limit },
  //   tags: [TagTypes.products],
  //   revalidate: 300,
  // });
  // return res.data ?? [];
  const sameCategory = await getProducts({ categorySlug: product.categorySlug });
  return sameCategory
    .filter((candidate) => candidate._id !== product._id)
    .slice(0, limit);
}
