import HomeHero from "@/components/HomeHero";
import CategoryGrid from "@/components/CategoryGrid";
import CTASection from "@/components/CTASection";
import BlogPreview from "@/components/BlogPreview";
import TrustBanner from "@/components/TrustBanner";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="content-width pt-8 pb-4">
        <TrustBanner />
      </div>
      <CategoryGrid />
      <CTASection
        title="See What Solar Would Save You"
        description="Get a rough estimate in 30 seconds — no email, no phone call, no sales follow-up."
        href="/calculator"
        label="Use the Solar Savings Calculator"
      />
      <BlogPreview />
    </>
  );
}
