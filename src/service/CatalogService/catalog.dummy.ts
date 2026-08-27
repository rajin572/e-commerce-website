/**
 * Scaffolding catalog — deleted the moment `/products` and `/categories` exist
 * on the backend (CODING_RULES §1.2). Every accessor in `catalogApi.ts` already
 * carries the real request beside its fallback.
 *
 * It lives in one place on purpose: the navbar, the mobile drawer, the homepage
 * marquee and the `/category/*` routes all read this tree, so a slug can never
 * drift between a link and the page it opens.
 *
 * Catalog copy stays Bengali in both locales — only UI chrome is translated
 * (CODING_RULES §2.6). Slugs stay ASCII so the URLs are clean.
 */

import type {
  ICategory,
  IProduct,
  IProductReview,
  TCollectionSlug,
  TProductBadge,
} from "@/types";

export const DUMMY_CATEGORIES: ICategory[] = [
  {
    _id: "cat-honey",
    slug: "honey",
    name: "মধু",
    description: "সরাসরি মৌচাক থেকে সংগ্রহ করা ১০০% খাঁটি মধু, কোনো ভেজাল নেই।",
    image: "https://loremflickr.com/800/400/honey,jar/all?lock=11",
    hasSub: true,
    subCategories: [
      {
        _id: "sub-sundarban-honey",
        slug: "sundarban-honey",
        name: "সুন্দরবনের মধু",
        description: "সুন্দরবনের গহীন বন থেকে মৌয়ালদের সংগ্রহ করা প্রাকৃতিক মধু।",
      },
      {
        _id: "sub-black-seed-honey",
        slug: "black-seed-honey",
        name: "কালোজিরা ফুলের মধু",
        description: "কালোজিরা ফুল থেকে সংগৃহীত ঘন ও গাঢ় স্বাদের মধু।",
      },
      {
        _id: "sub-litchi-honey",
        slug: "litchi-honey",
        name: "লিচু ফুলের মধু",
        description: "লিচু বাগান থেকে সংগ্রহ করা হালকা মিষ্টি ঘ্রাণের মধু।",
      },
    ],
  },
  {
    _id: "cat-ghee",
    slug: "ghee",
    name: "ঘি",
    description: "খাঁটি দুধের সর থেকে তৈরি ঐতিহ্যবাহী গাওয়া ঘি।",
    image: "https://loremflickr.com/800/400/butter,jar/all?lock=12",
    hasSub: false,
    subCategories: [],
  },
  {
    _id: "cat-oil",
    slug: "oil",
    name: "তেল",
    description: "ঘানি ভাঙা ও কোল্ড প্রেসড পদ্ধতিতে তৈরি ভেজালমুক্ত তেল।",
    image: "https://loremflickr.com/800/400/cooking,oil/all?lock=13",
    hasSub: true,
    subCategories: [
      {
        _id: "sub-mustard-oil",
        slug: "mustard-oil",
        name: "সরিষার তেল",
        description: "কাঠের ঘানিতে ভাঙানো ঝাঁঝালো খাঁটি সরিষার তেল।",
      },
      {
        _id: "sub-coconut-oil",
        slug: "coconut-oil",
        name: "নারিকেল তেল",
        description: "কোল্ড প্রেসড পদ্ধতিতে তৈরি খাঁটি নারিকেল তেল।",
      },
    ],
  },
  {
    _id: "cat-spices",
    slug: "spices",
    name: "মশলা",
    description: "নিজস্ব কারখানায় ভাঙানো গুঁড়া ও বাছাই করা গোটা মশলা।",
    image: "https://loremflickr.com/800/400/spices,powder/all?lock=14",
    hasSub: true,
    subCategories: [
      {
        _id: "sub-powder-spices",
        slug: "powder-spices",
        name: "গুঁড়া মশলা",
        description: "রঙ ও কেমিক্যাল ছাড়া ভাঙানো খাঁটি গুঁড়া মশলা।",
      },
      {
        _id: "sub-whole-spices",
        slug: "whole-spices",
        name: "গোটা মশলা",
        description: "হাতে বাছাই করা প্রিমিয়াম মানের গোটা মশলা।",
      },
    ],
  },
  {
    _id: "cat-dry-fruits",
    slug: "dry-fruits",
    name: "ড্রাই ফ্রুটস",
    description: "আমদানি করা প্রিমিয়াম খেজুর, বাদাম ও কিশমিশ।",
    image: "https://loremflickr.com/800/400/nuts,dried/all?lock=15",
    hasSub: true,
    subCategories: [
      {
        _id: "sub-dates",
        slug: "dates",
        name: "খেজুর",
        description: "সৌদি ও আরব অঞ্চল থেকে আমদানি করা বাছাই করা খেজুর।",
      },
      {
        _id: "sub-nuts",
        slug: "nuts",
        name: "বাদাম",
        description: "কাঠবাদাম, কাজু ও পেস্তাসহ প্রিমিয়াম মানের বাদাম।",
      },
      {
        _id: "sub-raisins",
        slug: "raisins",
        name: "কিশমিশ",
        description: "আফগান ও ইরানি কিশমিশ, রোদে শুকানো।",
      },
    ],
  },
  {
    _id: "cat-pickle",
    slug: "pickle",
    name: "আচার",
    description: "ঘরোয়া রেসিপিতে সরিষার তেলে তৈরি হাতে বানানো আচার।",
    image: "https://loremflickr.com/800/400/pickle,jar/all?lock=16",
    hasSub: false,
    subCategories: [],
  },
  {
    _id: "cat-rice-lentils",
    slug: "rice-lentils",
    name: "চাল ও ডাল",
    description: "সরাসরি কৃষকের কাছ থেকে সংগ্রহ করা চাল ও ডাল।",
    image: "https://loremflickr.com/800/400/rice,grain/all?lock=17",
    hasSub: true,
    subCategories: [
      {
        _id: "sub-rice",
        slug: "rice",
        name: "চাল",
        description: "চিনিগুঁড়া, কালিজিরা ও লাল চালের বাছাই সংগ্রহ।",
      },
      {
        _id: "sub-lentils",
        slug: "lentils",
        name: "ডাল",
        description: "দেশি মসুর, মুগ ও ছোলার ডাল।",
      },
    ],
  },
];

/** Fixed epoch so `createdAt` is identical on the server and in the browser. */
const CATALOG_EPOCH = Date.UTC(2026, 7, 20);
const daysBefore = (days: number) =>
  new Date(CATALOG_EPOCH - days * 86_400_000).toISOString();

const WEIGHT_VARIANTS = ["২৫০ গ্রাম", "৫০০ গ্রাম", "১ কেজি"];
const VOLUME_VARIANTS = ["৫০০ মিলি", "১ লিটার", "৫ লিটার"];

interface ProductSeed {
  name: string;
  /** loremflickr keywords, e.g. `honey,jar`. */
  keywords: string;
  description: string;
  productDetails?: IProduct["productDetails"];
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  soldCount: number;
  badge?: TProductBadge;
  categorySlug: string;
  subCategorySlug?: string;
  collections: TCollectionSlug[];
  variants?: string[];
}

const buildProduct = (seed: ProductSeed, index: number): IProduct => {
  const lock = 100 + index * 5;
  const gallery = [0, 1, 2, 3].map(
    (offset) => `https://loremflickr.com/800/800/${seed.keywords}/all?lock=${lock + offset}`
  );

  return {
    _id: `prd-${String(index + 1).padStart(3, "0")}`,
    name: seed.name,
    slug: `${seed.categorySlug}-${index + 1}`,
    sku: `ECM-${String(index + 1).padStart(4, "0")}`,
    description: seed.description,
    productDetails: seed.productDetails || {
      title: seed.name,
      description: seed.description,
      keyFeatures: [
        "100% Premium Quality.",
        "Sourced naturally and processed carefully.",
        "No artificial chemicals or preservatives.",
        "Rich in natural nutrients.",
        "Satisfaction guaranteed."
      ],
      healthBenefits: [
        "Boosts immunity and overall health.",
        "Rich in essential vitamins and minerals.",
        "Aids in natural digestion.",
        "Promotes a healthy lifestyle."
      ],
      usageStorage: [
        "Store in a cool, dry place away from direct sunlight.",
        "Keep the container tightly closed after use.",
        "No refrigeration required under normal room temperature."
      ]
    },
    images: gallery,
    image: gallery[0],
    secondaryImage: gallery[1],
    price: seed.price,
    oldPrice: seed.oldPrice,
    rating: seed.rating,
    reviewCount: seed.reviewCount,
    stock: seed.stock,
    badge: seed.badge,
    categorySlug: seed.categorySlug,
    subCategorySlug: seed.subCategorySlug,
    collections: seed.collections,
    variants: seed.variants ?? WEIGHT_VARIANTS,
    createdAt: daysBefore(index * 3),
    soldCount: seed.soldCount,
  };
};

const PRODUCT_SEEDS: ProductSeed[] = [
  {
    name: "সুন্দরবনের খাঁটি মধু (৫০০ গ্রাম)",
    keywords: "honey,jar",
    description:
      "সুন্দরবনের গহীন বন থেকে মৌয়ালদের সংগ্রহ করা ১০০% খাঁটি মধু। কোনো প্রকার চিনি বা প্রিজারভেটিভ মেশানো হয়নি।",
    price: 850,
    oldPrice: 1000,
    rating: 4.8,
    reviewCount: 124,
    stock: 50,
    soldCount: 940,
    badge: "bestsell",
    categorySlug: "honey",
    subCategorySlug: "sundarban-honey",
    collections: ["best-sales", "offers", "featured-products"],
  },
  {
    name: "সুন্দরবনের চাকের মধু (১ কেজি)",
    keywords: "honeycomb",
    description:
      "চাক ভেঙে সরাসরি বোতলজাত করা কাঁচা মধু। হালকা ঘোলাটে ভাব ও ফেনা খাঁটি মধুর স্বাভাবিক বৈশিষ্ট্য।",
    price: 1450,
    rating: 4.9,
    reviewCount: 76,
    stock: 24,
    soldCount: 410,
    categorySlug: "honey",
    subCategorySlug: "sundarban-honey",
    collections: ["featured-products", "best-sales"],
  },
  {
    name: "কালোজিরা ফুলের মধু (৫০০ গ্রাম)",
    keywords: "dark,honey",
    description:
      "কালোজিরা ফুল থেকে সংগৃহীত ঘন, গাঢ় ও কিছুটা ঝাঁঝালো স্বাদের মধু। শীতকালে বিশেষভাবে জনপ্রিয়।",
    price: 1100,
    oldPrice: 1250,
    rating: 4.9,
    reviewCount: 340,
    stock: 45,
    soldCount: 1220,
    badge: "sale",
    categorySlug: "honey",
    subCategorySlug: "black-seed-honey",
    collections: ["offers", "best-sales"],
  },
  {
    name: "লিচু ফুলের মধু (৫০০ গ্রাম)",
    keywords: "honey,bottle",
    description:
      "লিচু বাগান থেকে সংগ্রহ করা হালকা রঙের সুগন্ধি মধু। বাচ্চাদের জন্য সবচেয়ে পছন্দের।",
    price: 720,
    rating: 4.6,
    reviewCount: 58,
    stock: 62,
    soldCount: 260,
    badge: "new",
    categorySlug: "honey",
    subCategorySlug: "litchi-honey",
    collections: ["new-arrivals"],
  },
  {
    name: "মধু ও কালোজিরা কম্বো প্যাক",
    keywords: "honey,seeds",
    description:
      "৫০০ গ্রাম কালোজিরা ফুলের মধু ও ২৫০ গ্রাম কালোজিরার একসাথে সাশ্রয়ী কম্বো।",
    price: 1650,
    oldPrice: 1900,
    rating: 4.7,
    reviewCount: 93,
    stock: 30,
    soldCount: 520,
    badge: "combo",
    categorySlug: "honey",
    subCategorySlug: "black-seed-honey",
    collections: ["combos", "offers"],
  },
  {
    name: "খাঁটি গাওয়া ঘি (৫০০ গ্রাম)",
    keywords: "ghee,jar",
    description:
      "খাঁটি দুধের সর জ্বাল দিয়ে ঐতিহ্যবাহী পদ্ধতিতে তৈরি গাওয়া ঘি। ঘ্রাণেই পার্থক্য বোঝা যায়।",
    price: 1200,
    rating: 5.0,
    reviewCount: 89,
    stock: 20,
    soldCount: 880,
    badge: "bestsell",
    categorySlug: "ghee",
    collections: ["best-sales", "featured-products"],
  },
  {
    name: "বাটার ঘি (২৫০ গ্রাম)",
    keywords: "butter,bowl",
    description: "মাখন থেকে তৈরি মসৃণ ঘি — পোলাও, বিরিয়ানি ও পরোটার জন্য আদর্শ।",
    price: 680,
    oldPrice: 750,
    rating: 4.5,
    reviewCount: 41,
    stock: 38,
    soldCount: 300,
    badge: "sale",
    categorySlug: "ghee",
    collections: ["offers", "new-arrivals"],
  },
  {
    name: "ঘি ও মধু ফ্যামিলি কম্বো",
    keywords: "ghee,honey",
    description: "৫০০ গ্রাম গাওয়া ঘি ও ৫০০ গ্রাম সুন্দরবনের মধু — পরিবারের এক মাসের চাহিদা।",
    price: 1980,
    oldPrice: 2300,
    rating: 4.8,
    reviewCount: 67,
    stock: 18,
    soldCount: 340,
    badge: "combo",
    categorySlug: "ghee",
    collections: ["combos", "featured-products"],
  },
  {
    name: "ঘানি ভাঙা সরিষার তেল (১ লিটার)",
    keywords: "mustard,oil",
    description: "কাঠের ঘানিতে ভাঙানো খাঁটি সরিষার তেল।",
    productDetails: {
      title: "Ghorerbazar Wooden Cold-Pressed Maghi Mustard Oil",
      description: "Bring back the authentic taste of tradition with Ghorerbazar Wooden Ghani Cold-Pressed First Extract Maghi Mustard Oil. Using a traditional tamarind-wood ghani (wooden press), mustard seeds are crushed with wood-on-wood friction at low pressure, keeping heat minimal. This ensures the oil remains pure, nutrient-rich, and naturally aromatic.",
      keyFeatures: [
        "100% Pure Maghi Mustard Oil.",
        "First-press cold extraction in wooden ghani.",
        "No chemicals, no additives.",
        "Rich golden color with natural aroma.",
        "Enhances flavor and nutrition in cooking"
      ],
      healthBenefits: [
        "Aids digestion and helps maintain healthy weight.",
        "Rich in Omega-3 & Omega-6 fatty acids that support heart health and reduce cholesterol.",
        "Warm oil massage helps relieve joint pain and stiffness.",
        "Strengthens immunity and overall wellness."
      ],
      usageStorage: [
        "Perfect for frying, bharta, curries, and pickles.",
        "Store in an airtight bottle in a cool, dry place.",
        "No preservatives and no refrigeration needed."
      ]
    },
    price: 380,
    oldPrice: 420,
    rating: 4.5,
    reviewCount: 145,
    stock: 100,
    soldCount: 1560,
    badge: "sale",
    categorySlug: "oil",
    subCategorySlug: "mustard-oil",
    collections: ["offers", "best-sales"],
    variants: VOLUME_VARIANTS,
  },
  {
    name: "ঘানি ভাঙা সরিষার তেল (৫ লিটার)",
    keywords: "oil,bottle",
    description: "কাঠের ঘানিতে ভাঙানো খাঁটি সরিষার তেল।",
    productDetails: {
      title: "Ghorerbazar Wooden Cold-Pressed Maghi Mustard Oil",
      description: "Bring back the authentic taste of tradition with Ghorerbazar Wooden Ghani Cold-Pressed First Extract Maghi Mustard Oil. Using a traditional tamarind-wood ghani (wooden press), mustard seeds are crushed with wood-on-wood friction at low pressure, keeping heat minimal. This ensures the oil remains pure, nutrient-rich, and naturally aromatic.",
      keyFeatures: [
        "100% Pure Maghi Mustard Oil.",
        "First-press cold extraction in wooden ghani.",
        "No chemicals, no additives.",
        "Rich golden color with natural aroma.",
        "Enhances flavor and nutrition in cooking"
      ],
      healthBenefits: [
        "Aids digestion and helps maintain healthy weight.",
        "Rich in Omega-3 & Omega-6 fatty acids that support heart health and reduce cholesterol.",
        "Warm oil massage helps relieve joint pain and stiffness.",
        "Strengthens immunity and overall wellness."
      ],
      usageStorage: [
        "Perfect for frying, bharta, curries, and pickles.",
        "Store in an airtight bottle in a cool, dry place.",
        "No preservatives and no refrigeration needed."
      ]
    },
    price: 1750,
    rating: 4.7,
    reviewCount: 52,
    stock: 40,
    soldCount: 380,
    categorySlug: "oil",
    subCategorySlug: "mustard-oil",
    collections: ["featured-products"],
    variants: VOLUME_VARIANTS,
  },
  {
    name: "কোল্ড প্রেসড নারিকেল তেল (৫০০ মিলি)",
    keywords: "coconut,oil",
    description: "তাপ ছাড়া নিংড়ানো খাঁটি নারিকেল তেল — চুল, ত্বক ও রান্নায় ব্যবহারযোগ্য।",
    price: 450,
    rating: 4.4,
    reviewCount: 38,
    stock: 70,
    soldCount: 210,
    badge: "new",
    categorySlug: "oil",
    subCategorySlug: "coconut-oil",
    collections: ["new-arrivals"],
    variants: VOLUME_VARIANTS,
  },
  {
    name: "অর্গানিক হলুদের গুঁড়া (৫০০ গ্রাম)",
    keywords: "turmeric,powder",
    description: "রঙ ও কেমিক্যাল ছাড়া নিজস্ব কারখানায় ভাঙানো খাঁটি হলুদের গুঁড়া।",
    price: 350,
    oldPrice: 400,
    rating: 4.6,
    reviewCount: 78,
    stock: 150,
    soldCount: 1340,
    badge: "sale",
    categorySlug: "spices",
    subCategorySlug: "powder-spices",
    collections: ["offers", "best-sales"],
  },
  {
    name: "প্রিমিয়াম লাল মরিচের গুঁড়া (৫০০ গ্রাম)",
    keywords: "chili,powder",
    description: "রোদে শুকানো বাছাই করা মরিচ থেকে ভাঙানো ঝাল ও সুগন্ধি গুঁড়া।",
    price: 450,
    rating: 4.8,
    reviewCount: 112,
    stock: 200,
    soldCount: 990,
    badge: "new",
    categorySlug: "spices",
    subCategorySlug: "powder-spices",
    collections: ["new-arrivals", "featured-products"],
  },
  {
    name: "ধনিয়ার গুঁড়া (২৫০ গ্রাম)",
    keywords: "coriander,powder",
    description: "তাজা ধনিয়া ভেঙে প্যাকেটজাত করা সুগন্ধি গুঁড়া।",
    price: 180,
    rating: 4.3,
    reviewCount: 26,
    stock: 0,
    soldCount: 150,
    categorySlug: "spices",
    subCategorySlug: "powder-spices",
    collections: ["offers"],
  },
  {
    name: "মশলা কম্বো প্যাক (৫ আইটেম)",
    keywords: "spices,mixed",
    description: "হলুদ, মরিচ, ধনিয়া, জিরা ও গরম মশলা — রান্নাঘরের পুরো সেট একসাথে।",
    price: 1150,
    oldPrice: 1400,
    rating: 4.7,
    reviewCount: 84,
    stock: 35,
    soldCount: 610,
    badge: "combo",
    categorySlug: "spices",
    subCategorySlug: "powder-spices",
    collections: ["combos", "best-sales"],
  },
  {
    name: "গোটা জিরা (২৫০ গ্রাম)",
    keywords: "cumin,seeds",
    description: "ভারতীয় প্রিমিয়াম গ্রেডের গোটা জিরা, হাতে বাছাই করা।",
    price: 320,
    rating: 4.5,
    reviewCount: 44,
    stock: 90,
    soldCount: 400,
    categorySlug: "spices",
    subCategorySlug: "whole-spices",
    collections: ["featured-products"],
  },
  {
    name: "এলাচ (১০০ গ্রাম)",
    keywords: "cardamom",
    description: "বড় দানার সুগন্ধি এলাচ — চা, পোলাও ও মিষ্টির জন্য।",
    price: 690,
    oldPrice: 780,
    rating: 4.6,
    reviewCount: 61,
    stock: 55,
    soldCount: 480,
    badge: "sale",
    categorySlug: "spices",
    subCategorySlug: "whole-spices",
    collections: ["offers", "new-arrivals"],
  },
  {
    name: "আজওয়া খেজুর (৫০০ গ্রাম)",
    keywords: "dates,fruit",
    description: "মদিনার আজওয়া খেজুর — নরম, মিষ্টি ও পুষ্টিগুণে ভরপুর।",
    price: 1500,
    oldPrice: 1650,
    rating: 5.0,
    reviewCount: 210,
    stock: 15,
    soldCount: 1180,
    badge: "bestsell",
    categorySlug: "dry-fruits",
    subCategorySlug: "dates",
    collections: ["best-sales", "featured-products", "offers"],
  },
  {
    name: "মরিয়ম খেজুর (৫০০ গ্রাম)",
    keywords: "dates,dried",
    description: "বড় দানার নরম মরিয়ম খেজুর, ইফতার ও উপহারের জন্য জনপ্রিয়।",
    price: 1250,
    rating: 4.7,
    reviewCount: 88,
    stock: 42,
    soldCount: 520,
    badge: "new",
    categorySlug: "dry-fruits",
    subCategorySlug: "dates",
    collections: ["new-arrivals"],
  },
  {
    name: "কাঠবাদাম (৫০০ গ্রাম)",
    keywords: "almonds",
    description: "আমেরিকান কাঠবাদাম — কাঁচা, লবণ ছাড়া, পুষ্টিগুণ অক্ষুণ্ণ।",
    price: 900,
    rating: 4.7,
    reviewCount: 65,
    stock: 80,
    soldCount: 700,
    categorySlug: "dry-fruits",
    subCategorySlug: "nuts",
    collections: ["best-sales"],
  },
  {
    name: "কাজু বাদাম (৫০০ গ্রাম)",
    keywords: "cashew,nuts",
    description: "বড় সাইজের গোটা কাজু বাদাম, ভাঙা দানা ছাড়া।",
    price: 1150,
    oldPrice: 1300,
    rating: 4.6,
    reviewCount: 73,
    stock: 60,
    soldCount: 560,
    badge: "sale",
    categorySlug: "dry-fruits",
    subCategorySlug: "nuts",
    collections: ["offers", "featured-products"],
  },
  {
    name: "ড্রাই ফ্রুটস গিফট কম্বো",
    keywords: "nuts,gift",
    description: "খেজুর, কাঠবাদাম, কাজু ও কিশমিশের গিফট বক্স — উপহারের জন্য প্রস্তুত।",
    price: 2450,
    oldPrice: 2800,
    rating: 4.9,
    reviewCount: 51,
    stock: 22,
    soldCount: 290,
    badge: "combo",
    categorySlug: "dry-fruits",
    subCategorySlug: "nuts",
    collections: ["combos", "new-arrivals"],
  },
  {
    name: "আফগান কিশমিশ (৫০০ গ্রাম)",
    keywords: "raisins",
    description: "রোদে শুকানো লম্বা দানার আফগান কিশমিশ, চিনি মেশানো নয়।",
    price: 480,
    rating: 4.4,
    reviewCount: 36,
    stock: 95,
    soldCount: 340,
    categorySlug: "dry-fruits",
    subCategorySlug: "raisins",
    collections: ["new-arrivals", "offers"],
  },
  {
    name: "আমের আচার (৪০০ গ্রাম)",
    keywords: "pickle,jar",
    description: "কাঁচা আম, সরিষার তেল ও ঘরোয়া মশলায় রোদে পাকানো ঐতিহ্যবাহী আচার।",
    price: 320,
    oldPrice: 380,
    rating: 4.8,
    reviewCount: 156,
    stock: 110,
    soldCount: 1010,
    badge: "sale",
    categorySlug: "pickle",
    collections: ["offers", "best-sales"],
    variants: ["৪০০ গ্রাম", "৮০০ গ্রাম"],
  },
  {
    name: "রসুনের আচার (৪০০ গ্রাম)",
    keywords: "garlic,pickle",
    description: "গোটা রসুনের কোয়া দিয়ে বানানো ঝাল আচার, ভাত ও খিচুড়ির সঙ্গী।",
    price: 340,
    rating: 4.5,
    reviewCount: 47,
    stock: 85,
    soldCount: 380,
    badge: "new",
    categorySlug: "pickle",
    collections: ["new-arrivals"],
    variants: ["৪০০ গ্রাম", "৮০০ গ্রাম"],
  },
  {
    name: "চিনিগুঁড়া চাল (৫ কেজি)",
    keywords: "rice,grain",
    description: "সুগন্ধি চিনিগুঁড়া চাল — পোলাও ও বিরিয়ানির জন্য বাছাই করা।",
    price: 620,
    rating: 4.6,
    reviewCount: 98,
    stock: 130,
    soldCount: 760,
    categorySlug: "rice-lentils",
    subCategorySlug: "rice",
    collections: ["featured-products", "best-sales"],
    variants: ["৫ কেজি", "১০ কেজি", "২৫ কেজি"],
  },
  {
    name: "দেশি মসুর ডাল (২ কেজি)",
    keywords: "lentils",
    description: "ছোট দানার দেশি মসুর ডাল, পাথরমুক্ত ও পরিষ্কার করা।",
    price: 290,
    rating: 4.3,
    reviewCount: 33,
    stock: 0,
    soldCount: 420,
    categorySlug: "rice-lentils",
    subCategorySlug: "lentils",
    collections: ["offers"],
    variants: ["১ কেজি", "২ কেজি", "৫ কেজি"],
  },
];

export const DUMMY_PRODUCTS: IProduct[] = PRODUCT_SEEDS.map(buildProduct);

/**
 * Review copy is customer content, so it stays Bengali in both locales just like
 * product names. Every product cycles through the same four so the detail page
 * has something to lay out until `GET /reviews` exists.
 */
const REVIEW_SEEDS: Omit<IProductReview, "_id" | "productId">[] = [
  {
    author: "মোঃ রহিম উদ্দিন",
    rating: 5,
    comment:
      "খুবই ভালো মানের পণ্য। প্যাকেজিং যত্ন করে করা ছিলো, ডেলিভারিও সময়মতো পেয়েছি। আবার অর্ডার করবো ইনশাআল্লাহ।",
    createdAt: daysBefore(6),
    isVerifiedPurchase: true,
  },
  {
    author: "সালমা আক্তার",
    rating: 5,
    comment: "দাম অনুযায়ী মান অসাধারণ। পরিবারের সবাই পছন্দ করেছে।",
    createdAt: daysBefore(14),
    isVerifiedPurchase: true,
  },
  {
    author: "তানভীর হাসান",
    rating: 4,
    comment:
      "পণ্য ভালো, তবে ডেলিভারি পেতে একদিন বেশি লেগেছে। মান নিয়ে কোনো অভিযোগ নেই।",
    createdAt: daysBefore(23),
    isVerifiedPurchase: true,
  },
  {
    author: "ফারহানা ইসলাম",
    rating: 5,
    comment: "ঘ্রাণেই বোঝা যায় খাঁটি। বাজারের সাধারণ পণ্যের সাথে তুলনাই হয় না।",
    createdAt: daysBefore(31),
    isVerifiedPurchase: false,
  },
];

export const DUMMY_REVIEWS: IProductReview[] = DUMMY_PRODUCTS.flatMap(
  (product, productIndex) =>
    REVIEW_SEEDS.slice(0, (productIndex % 3) + 2).map((seed, reviewIndex) => ({
      ...seed,
      _id: `rev-${product._id}-${reviewIndex + 1}`,
      productId: product._id,
    }))
);
