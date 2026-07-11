import type { Metadata } from "next";
import CategoryPageLayout, { generateCategoryMetadata } from "@/components/CategoryPageLayout";

export const metadata: Metadata = generateCategoryMetadata(
  "Incentives & Rebates",
  "Up-to-date guides on federal tax credits, state rebates, SRECs, and utility programs."
);

export default function Page() {
  return (
    <CategoryPageLayout
      name="Incentives & Rebates"
      description="Up-to-date guides on federal tax credits, state rebates, SRECs, and utility programs."
      slug="incentives-and-rebates"
    />
  );
}
