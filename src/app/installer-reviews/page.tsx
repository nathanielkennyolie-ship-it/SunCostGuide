import type { Metadata } from "next";
import CategoryPageLayout, { generateCategoryMetadata } from "@/components/CategoryPageLayout";

export const metadata: Metadata = generateCategoryMetadata(
  "Installer Reviews",
  "Unbiased reviews of national and local installers based on real customer experiences."
);

export default function Page() {
  return (
    <CategoryPageLayout
      name="Installer Reviews"
      description="Unbiased reviews of national and local installers based on real customer experiences."
      slug="installer-reviews"
    />
  );
}
