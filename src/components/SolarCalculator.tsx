"use client";

import { useState } from "react";
import { calculateSavings, stateOptions } from "@/data/calculator";
import type { CalculatorInput, CalculatorResult } from "@/data/calculator";

export default function SolarCalculator() {
  const [input, setInput] = useState<CalculatorInput>({
    state: "CA",
    monthlyBill: 150,
    sunExposure: "full",
  });
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [calculating, setCalculating] = useState(false);

  const handleCalculate = () => {
    setCalculating(true);
    setTimeout(() => {
      setResult(calculateSavings(input));
      setCalculating(false);
    }, 400);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="rounded-2xl border border-warm-gray-200 bg-surface overflow-hidden">
      <div className="p-8 lg:p-10">
        <div
          className={`transition-all duration-500 ease-out ${
            result ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
          }`}
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-ink mb-2"
              >
                State
              </label>
              <select
                id="state"
                value={input.state}
                onChange={(e) =>
                  setInput({ ...input, state: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-200 appearance-none"
              >
                {stateOptions.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="bill"
                className="block text-sm font-medium text-ink mb-2"
              >
                Average monthly electric bill ($)
              </label>
              <input
                type="number"
                id="bill"
                min={20}
                max={1000}
                value={input.monthlyBill}
                onChange={(e) =>
                  setInput({ ...input, monthlyBill: Number(e.target.value) })
                }
                className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 bg-white text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-200 font-mono"
              />
            </div>

            <div>
              <span className="block text-sm font-medium text-ink mb-3">
                Roof sun exposure
              </span>
              <div className="grid grid-cols-3 gap-3">
                {(
                  [
                    { value: "full" as const, label: "Full Sun", desc: "South-facing, no shade" },
                    { value: "partial" as const, label: "Partial Shade", desc: "Some trees or obstructions" },
                    { value: "shaded" as const, label: "Mostly Shaded", desc: "Heavy tree cover" },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setInput({ ...input, sunExposure: option.value })
                    }
                    className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                      input.sunExposure === option.value
                        ? "border-amber-500 bg-amber-50 ring-2 ring-amber-500/20"
                        : "border-warm-gray-200 bg-white hover:border-warm-gray-300"
                    }`}
                  >
                    <div className="text-sm font-semibold text-ink">
                      {option.label}
                    </div>
                    <div className="text-xs text-ink-muted mt-1">
                      {option.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleCalculate}
              disabled={calculating}
              className="w-full px-8 py-3.5 bg-amber-500 text-white font-semibold text-sm rounded-full hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-amber-500/20"
            >
              {calculating ? "Calculating..." : "Calculate Your Savings"}
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-500 ease-out ${
            result ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          {result && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Estimated System Size", value: `${result.estimatedSystemSizeKw} kW` },
                  { label: "Estimated Cost (before tax credit)", value: `$${result.estimatedCost.toLocaleString()}` },
                  { label: "After 30% Tax Credit", value: `$${Math.round(result.estimatedCost * 0.7).toLocaleString()}` },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-amber-50 border border-amber-200 p-5"
                  >
                    <div className="text-xs text-ink-muted mb-1">
                      {item.label}
                    </div>
                    <div className="text-xl font-display font-semibold text-ink">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 p-8 text-white">
                <div className="text-sm text-amber-100 mb-1">
                  Estimated Monthly Savings
                </div>
                <div className="text-4xl lg:text-5xl font-display font-semibold">
                  ${result.monthlySavings}/mo
                </div>
                <div className="mt-4 grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="text-amber-200">Annual Savings</div>
                    <div className="font-semibold text-white">
                      ${result.annualSavings.toLocaleString()}/yr
                    </div>
                  </div>
                  <div>
                    <div className="text-amber-200">Payback Period</div>
                    <div className="font-semibold text-white">
                      ~{result.paybackYears} years
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-warm-gray-50 border border-warm-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-lg shrink-0">&#9432;</span>
                  <div>
                    <div className="text-sm font-semibold text-ink">
                      20-Year Estimated Savings
                    </div>
                    <div className="text-2xl font-display font-semibold text-amber-600 mt-1">
                      ${result.twentyYearSavings.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-ink-muted italic leading-relaxed">
                This is a rough estimate based on regional averages — actual
                quotes will vary by installer and home.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="w-full px-8 py-3 border border-warm-gray-300 text-ink font-semibold text-sm rounded-full hover:border-amber-300 hover:text-amber-700 transition-all duration-200"
              >
                Calculate Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
