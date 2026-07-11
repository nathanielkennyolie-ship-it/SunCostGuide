"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-8 text-center">
        <div className="text-4xl mb-4">&#9993;</div>
        <h3 className="font-display text-xl font-semibold text-ink">
          Message sent
        </h3>
        <p className="mt-2 text-ink-muted text-sm">
          Thanks for reaching out. I&apos;ll read your message and respond as
          soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-ink mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-white text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-200"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-ink mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-white text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-200"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-white text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-200 resize-y"
          placeholder="What's on your mind?"
        />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-3.5 bg-amber-500 text-white font-semibold text-sm rounded-full hover:bg-amber-600 transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
