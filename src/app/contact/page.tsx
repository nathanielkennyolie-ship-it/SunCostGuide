import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SunCostGuide. Questions, feedback, or corrections — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="content-width">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-ink text-balance">
            Get in Touch
          </h1>
          <div className="mt-4 w-16 h-[3px] bg-amber-500 rounded-full" />
          <p className="mt-6 text-lg text-ink-muted leading-relaxed">
            Have a question about something you read? Spot something that needs
            correcting? Want to suggest a topic for a future guide? Drop us a
            note and I&apos;ll get back to you.
          </p>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
