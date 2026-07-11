import type { Metadata } from "next";
import CategoryPageLayout, { generateCategoryMetadata } from "@/components/CategoryPageLayout";

export const metadata: Metadata = generateCategoryMetadata(
  "Cost & Savings",
  "Transparent breakdowns of installation prices, financing, payback periods, and lifetime savings."
);

export default function Page() {
  return (
    <CategoryPageLayout
      name="Cost & Savings"
      description="Transparent breakdowns of installation prices, financing, payback periods, and lifetime savings."
      slug="cost-and-savings"
    />
  );
}
