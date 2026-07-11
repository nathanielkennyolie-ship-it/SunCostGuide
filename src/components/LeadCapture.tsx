"use client";

import { useState, FormEvent } from "react";

export default function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-8 text-center">
        <div className="text-3xl mb-3">&#9989;</div>
        <h3 className="font-display text-xl font-semibold text-ink">
          Request received
        </h3>
        <p className="mt-2 text-sm text-ink-muted">
          A local solar specialist will reach out within 1-2 business days with
          personalized quotes for your home.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-warm-gray-200 bg-white p-8">
      <h3 className="font-display text-xl font-semibold text-ink">
        Get Matched With Local Installers
      </h3>
      <p className="mt-2 text-sm text-ink-muted leading-relaxed">
        Want personalized quotes from pre-screened solar installers in your
        area? Submit your info below and we&apos;ll connect you with competing
        quotes — no obligation, no sales pitch.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="lead-zip"
              className="block text-xs font-medium text-ink mb-1.5"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="lead-zip"
              required
              pattern="[0-9]{5}"
              maxLength={5}
              className="w-full px-4 py-2.5 rounded-xl border border-warm-gray-200 bg-white text-ink placeholder:text-ink-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-200"
              placeholder="90210"
            />
          </div>
          <div>
            <label
              htmlFor="lead-name"
              className="block text-xs font-medium text-ink mb-1.5"
            >
              Name
            </label>
            <input
              type="text"
              id="lead-name"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-warm-gray-200 bg-white text-ink placeholder:text-ink-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-200"
              placeholder="Your name"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="lead-email"
            className="block text-xs font-medium text-ink mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="lead-email"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-warm-gray-200 bg-white text-ink placeholder:text-ink-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-200"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="lead-phone"
            className="block text-xs font-medium text-ink mb-1.5"
          >
            Phone (optional)
          </label>
          <input
            type="tel"
            id="lead-phone"
            className="w-full px-4 py-2.5 rounded-xl border border-warm-gray-200 bg-white text-ink placeholder:text-ink-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-200"
            placeholder="(555) 123-4567"
          />
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 bg-amber-500 text-white font-semibold text-sm rounded-full hover:bg-amber-600 transition-colors duration-200"
        >
          Get Free Quotes
        </button>
        <p className="text-xs text-ink-muted text-center">
          Your information will be shared with [affiliate network name] for
          quote matching. See our{" "}
          <a
            href="/privacy"
            className="text-amber-600 underline underline-offset-2"
          >
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
