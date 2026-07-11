import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-warm-gray-200 bg-white">
      <div className="content-width py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-tight text-ink"
            >
              SunCostGuide
            </Link>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed max-w-xs">
              Independent solar reviews and cost guides. No sales pitch, just
              what actually works.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-4">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/cost-and-savings", label: "Cost & Savings" },
                { href: "/installer-reviews", label: "Installer Reviews" },
                { href: "/how-solar-works", label: "How Solar Works" },
                { href: "/incentives-and-rebates", label: "Incentives & Rebates" },
                { href: "/calculator", label: "Solar Savings Calculator" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted hover:text-amber-600 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-4">
            Info
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/disclosure", label: "Affiliate Disclosure" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted hover:text-amber-600 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-gray-100">
          <p className="text-xs text-ink-muted text-center">
            &copy; {new Date().getFullYear()} SunCostGuide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
