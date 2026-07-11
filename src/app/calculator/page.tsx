"use client";

import SolarCalculator from "@/components/SolarCalculator";
import LeadCapture from "@/components/LeadCapture";
import { useState } from "react";

export default function CalculatorPage() {
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  return (
    <div className="pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="content-width">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-ink text-balance">
            Solar Savings Calculator
          </h1>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            A rough estimate based on your state, electric bill, and roof
            conditions. No email required.
          </p>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <SolarCalculator onComplete={() => setShowLeadCapture(true)} />
        </div>

        {showLeadCapture && (
          <div className="mt-12 max-w-lg mx-auto">
            <LeadCapture />
          </div>
        )}

        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="font-display text-xl font-semibold text-ink mb-4">
            How the math works
          </h2>
          <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
            <p>
              This calculator uses publicly available average cost-per-watt data
              by state from the National Renewable Energy Laboratory (NREL) and
              regional peak sunlight hours from NOAA solar irradiance data.
            </p>
            <p>
              Your actual savings depend on roof orientation, local installer
              pricing, electricity rate escalation, equipment choices, and
              financing terms. Always get multiple quotes from qualified
              installers before making a decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
