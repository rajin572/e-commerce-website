import GuestReviewClient from "@/components/review/GuestReviewClient";

// TODO: wire to GET /reviews/guest-link/:token once it exists — fetch the
// order/product this link was issued for here (server-side) and notFound()
// on an expired/used token, then pass the loaded data down as props.
export default async function GuestReviewPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return <GuestReviewClient token={token} />;
}
