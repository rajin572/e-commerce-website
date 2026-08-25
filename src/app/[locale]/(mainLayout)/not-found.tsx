import { PackageSearch } from "lucide-react";
import LocaleLink from "@/components/i18n/LocaleLink";
import Container from "@/components/ui/CustomUi/Container";
import { getDictionary } from "@/i18n/dictionaries";
import { collectionHref } from "@/service/CatalogService/catalog.constants";

/**
 * The storefront's not-found boundary: an unknown collection, category,
 * sub-category or product id lands here inside the normal header and footer,
 * instead of Next's unbranded default 404.
 *
 * Next streams these routes (each has a `loading.tsx`), so the response is a
 * 200 with `<meta name="robots" content="noindex">` rather than a hard 404 —
 * that is documented Next behaviour for a Suspense boundary, not a bug here.
 */
export default async function NotFound() {
  const t = await getDictionary();

  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <div className="mb-6 rounded-full bg-primary/10 p-5 text-primary">
          <PackageSearch size={40} />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          {t.notFound.title}
        </h1>
        <p className="text-text-secondary leading-relaxed mb-8">
          {t.notFound.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <LocaleLink
            href="/"
            className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            {t.notFound.backHome}
          </LocaleLink>
          <LocaleLink
            href={collectionHref("best-sales")}
            className="rounded-md border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
          >
            {t.notFound.browseCollections}
          </LocaleLink>
        </div>
      </div>
    </Container>
  );
}
