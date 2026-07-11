export interface CalculatorInput {
  state: string;
  monthlyBill: number;
  sunExposure: "full" | "partial" | "shaded";
}

export interface CalculatorResult {
  estimatedSystemSizeKw: number;
  estimatedCost: number;
  monthlySavings: number;
  annualSavings: number;
  paybackYears: number;
  twentyYearSavings: number;
}

const stateData: Record<
  string,
  { costPerWatt: number; sunHours: number; name: string }
> = {
  AL: { costPerWatt: 2.65, sunHours: 4.5, name: "Alabama" },
  AK: { costPerWatt: 3.1, sunHours: 2.5, name: "Alaska" },
  AZ: { costPerWatt: 2.55, sunHours: 5.8, name: "Arizona" },
  AR: { costPerWatt: 2.7, sunHours: 4.6, name: "Arkansas" },
  CA: { costPerWatt: 2.8, sunHours: 5.4, name: "California" },
  CO: { costPerWatt: 2.6, sunHours: 5.3, name: "Colorado" },
  CT: { costPerWatt: 2.95, sunHours: 4.2, name: "Connecticut" },
  DE: { costPerWatt: 2.75, sunHours: 4.4, name: "Delaware" },
  FL: { costPerWatt: 2.5, sunHours: 5.2, name: "Florida" },
  GA: { costPerWatt: 2.6, sunHours: 4.7, name: "Georgia" },
  HI: { costPerWatt: 3.0, sunHours: 5.6, name: "Hawaii" },
  ID: { costPerWatt: 2.7, sunHours: 4.8, name: "Idaho" },
  IL: { costPerWatt: 2.85, sunHours: 4.1, name: "Illinois" },
  IN: { costPerWatt: 2.8, sunHours: 4.2, name: "Indiana" },
  IA: { costPerWatt: 2.75, sunHours: 4.3, name: "Iowa" },
  KS: { costPerWatt: 2.7, sunHours: 4.7, name: "Kansas" },
  KY: { costPerWatt: 2.75, sunHours: 4.3, name: "Kentucky" },
  LA: { costPerWatt: 2.6, sunHours: 4.6, name: "Louisiana" },
  ME: { costPerWatt: 2.9, sunHours: 4.0, name: "Maine" },
  MD: { costPerWatt: 2.85, sunHours: 4.4, name: "Maryland" },
  MA: { costPerWatt: 2.95, sunHours: 4.2, name: "Massachusetts" },
  MI: { costPerWatt: 2.85, sunHours: 3.9, name: "Michigan" },
  MN: { costPerWatt: 2.8, sunHours: 4.1, name: "Minnesota" },
  MS: { costPerWatt: 2.6, sunHours: 4.6, name: "Mississippi" },
  MO: { costPerWatt: 2.7, sunHours: 4.4, name: "Missouri" },
  MT: { costPerWatt: 2.75, sunHours: 4.5, name: "Montana" },
  NE: { costPerWatt: 2.7, sunHours: 4.7, name: "Nebraska" },
  NV: { costPerWatt: 2.6, sunHours: 5.6, name: "Nevada" },
  NH: { costPerWatt: 2.85, sunHours: 4.1, name: "New Hampshire" },
  NJ: { costPerWatt: 2.8, sunHours: 4.3, name: "New Jersey" },
  NM: { costPerWatt: 2.55, sunHours: 5.5, name: "New Mexico" },
  NY: { costPerWatt: 2.9, sunHours: 4.0, name: "New York" },
  NC: { costPerWatt: 2.6, sunHours: 4.6, name: "North Carolina" },
  ND: { costPerWatt: 2.75, sunHours: 4.3, name: "North Dakota" },
  OH: { costPerWatt: 2.8, sunHours: 4.1, name: "Ohio" },
  OK: { costPerWatt: 2.6, sunHours: 4.8, name: "Oklahoma" },
  OR: { costPerWatt: 2.7, sunHours: 4.2, name: "Oregon" },
  PA: { costPerWatt: 2.85, sunHours: 4.1, name: "Pennsylvania" },
  RI: { costPerWatt: 2.9, sunHours: 4.2, name: "Rhode Island" },
  SC: { costPerWatt: 2.6, sunHours: 4.7, name: "South Carolina" },
  SD: { costPerWatt: 2.75, sunHours: 4.4, name: "South Dakota" },
  TN: { costPerWatt: 2.65, sunHours: 4.5, name: "Tennessee" },
  TX: { costPerWatt: 2.5, sunHours: 5.0, name: "Texas" },
  UT: { costPerWatt: 2.6, sunHours: 5.2, name: "Utah" },
  VT: { costPerWatt: 2.9, sunHours: 4.0, name: "Vermont" },
  VA: { costPerWatt: 2.7, sunHours: 4.5, name: "Virginia" },
  WA: { costPerWatt: 2.75, sunHours: 3.8, name: "Washington" },
  WV: { costPerWatt: 2.7, sunHours: 4.1, name: "West Virginia" },
  WI: { costPerWatt: 2.85, sunHours: 3.9, name: "Wisconsin" },
  WY: { costPerWatt: 2.7, sunHours: 5.0, name: "Wyoming" },
};

const sunExposureFactors = {
  full: 1.0,
  partial: 0.7,
  shaded: 0.4,
};

const avgResidentialRate = 0.14;

export function calculateSavings(input: CalculatorInput): CalculatorResult {
  const stateInfo = stateData[input.state] || stateData.CA;
  const exposureFactor = sunExposureFactors[input.sunExposure];

  const estimatedAnnualKwh = (input.monthlyBill / avgResidentialRate) * 12;
  const systemSizeKw =
    (estimatedAnnualKwh / (stateInfo.sunHours * 365 * exposureFactor)) * 1.2;
  const estimatedCost = systemSizeKw * 1000 * stateInfo.costPerWatt;
  const annualProductionKwh =
    systemSizeKw * 1000 * stateInfo.sunHours * 365 * exposureFactor * 0.8;
  const annualSavings = annualProductionKwh * avgResidentialRate;
  const monthlySavings = annualSavings / 12;
  const paybackYears = estimatedCost / annualSavings;
  const twentyYearSavings = annualSavings * 20 - estimatedCost;

  return {
    estimatedSystemSizeKw: Math.round(systemSizeKw * 10) / 10,
    estimatedCost: Math.round(estimatedCost),
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavings),
    paybackYears: Math.round(paybackYears * 10) / 10,
    twentyYearSavings: Math.round(twentyYearSavings),
  };
}

export const stateOptions = Object.entries(stateData).map(([code, data]) => ({
  code,
  name: data.name,
}));
