import type { Metadata } from "next";
import CategoryPageLayout, { generateCategoryMetadata } from "@/components/CategoryPageLayout";

export const metadata: Metadata = generateCategoryMetadata(
  "How Solar Works",
  "No-jargon explainers on panels, inverters, batteries, net metering, and everything that matters."
);

export default function Page() {
  return (
    <CategoryPageLayout
      name="How Solar Works"
      description="No-jargon explainers on panels, inverters, batteries, net metering, and everything that matters."
      slug="how-solar-works"
    />
  );
}
