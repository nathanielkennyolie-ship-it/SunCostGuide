import type { Metadata } from "next";
import CategoryPageLayout, { generateCategoryMetadata } from "@/components/CategoryPageLayout";

export const metadata: Metadata = generateCategoryMetadata(
  "Incentives & Rebates",
  "Up-to-date guides on state rebates, SRECs, utility programs, and the 2026 federal tax credit rules (30% available via lease/PPA only, $0 for purchases)."
);

export default function Page() {
  return (
    <CategoryPageLayout
      name="Incentives & Rebates"
      description="Up-to-date guides on state rebates, SRECs, utility programs, and the 2026 federal tax credit rules (30% available via lease/PPA only, $0 for purchases)."
      slug="incentives-and-rebates"
    />
  );
}
